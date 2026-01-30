'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Sparkles,
  Copy,
  Download,
  RotateCcw,
  Check,
  Zap,
  Clock,
  FileText,
  Share2,
  ChevronDown,
  ChevronUp,
  History,
  Trash2,
  ArrowRight,
  Settings2
} from 'lucide-react';
import { toast } from 'sonner';
import {
  GenerationHistoryItem,
  saveToHistory,
  getToolHistory,
  clearToolHistory,
} from '@/lib/storage';
import { trackToolUse } from '@/lib/usage-tracker';
import Link from 'next/link';

// Tool options interface
export interface ToolOption {
  id: string;
  label: string;
  type: 'select' | 'toggle' | 'slider';
  options?: { value: string; label: string }[];
  defaultValue: string | boolean | number;
}

interface ToolLayoutProps {
  title: string;
  description: string;
  placeholder: string;
  promptTemplate: string | ((input: string, options?: Record<string, any>) => string);
  systemPrompt?: string;
  inputRows?: number;
  isNonAITool?: boolean;
  nonAIHandler?: (input: string, options?: Record<string, any>) => string;
  toolSlug?: string;
  toolOptions?: ToolOption[];
  resultLabel?: string;
  generateButtonText?: string;
}

export function ToolLayout({
  title,
  description,
  placeholder,
  promptTemplate,
  systemPrompt,
  inputRows = 8,
  isNonAITool = false,
  nonAIHandler,
  toolSlug,
  toolOptions = [],
  resultLabel = 'Generated Result',
  generateButtonText
}: ToolLayoutProps) {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [history, setHistory] = useState<GenerationHistoryItem[]>([]);
  const [processingTime, setProcessingTime] = useState<number>(0);
  const [options, setOptions] = useState<Record<string, any>>({});
  const resultRef = useRef<HTMLDivElement>(null);
  const optionsInitialized = useRef(false);

  // Initialize options with defaults - only once on mount
  useEffect(() => {
    if (optionsInitialized.current) return;
    if (toolOptions.length > 0) {
      const defaults: Record<string, any> = {};
      toolOptions.forEach(opt => {
        defaults[opt.id] = opt.defaultValue;
      });
      setOptions(defaults);
      optionsInitialized.current = true;
    }
  }, [toolOptions]);

  useEffect(() => {
    if (toolSlug) {
      setHistory(getToolHistory(toolSlug));
    }
  }, [toolSlug]);

  // Character and word counts
  const charCount = input.length;
  const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;

  const handleOptionChange = (optionId: string, value: any) => {
    setOptions(prev => ({ ...prev, [optionId]: value }));
  };

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const startTime = Date.now();
    if (toolSlug) trackToolUse(toolSlug);

    try {
      let output = "";
      if (isNonAITool && nonAIHandler) {
        output = nonAIHandler(input, options);
      } else {
        const prompt = typeof promptTemplate === 'function'
          ? promptTemplate(input, options)
          : promptTemplate.replace('{input}', input);
        const res = await fetch('/api/ai', {
          method: 'POST',
          body: JSON.stringify({ prompt, systemPrompt }),
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        output = data.result;
      }

      setProcessingTime(Date.now() - startTime);
      setResult(output);

      if (toolSlug) {
        saveToHistory(toolSlug, input, output);
        setHistory(getToolHistory(toolSlug));
      }

      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

    } catch (error) {
      toast.error("Generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${toolSlug || 'result'}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Downloaded!');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: title, text: result });
      } catch (err) { }
    } else {
      handleCopy();
    }
  };

  const handleClearHistory = () => {
    if (toolSlug) {
      clearToolHistory(toolSlug);
      setHistory([]);
      toast.success('History cleared!');
    }
  };

  const handleLoadFromHistory = (item: GenerationHistoryItem) => {
    setInput(item.input);
    setResult(item.result);
    setShowHistory(false);
  };

  const buttonText = generateButtonText || (isNonAITool ? 'Process Now' : 'Generate with AI');

  return (
    <div className="flex-1 w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#0f1419] dark:via-background dark:to-[#0f1419]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <Link href="/" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground/50 text-sm">/</span>
          <Link href="/tools" className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors">Tools</Link>
          <span className="text-muted-foreground/50 text-sm">/</span>
          <span className="text-primary text-sm font-semibold">{title}</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary text-sm font-semibold mb-5">
            {isNonAITool ? <Zap className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            {isNonAITool ? 'Instant Tool' : 'AI-Powered Tool'}
          </div>
          <h1 className="text-foreground text-4xl md:text-5xl font-black tracking-tight mb-4">{title}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Main Tool Card */}
        <div className="bg-white dark:bg-[#1a1f2e] rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">

          {/* Options Panel */}
          {toolOptions.length > 0 && (
            <div className="border-b border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setShowOptions(!showOptions)}
                className="w-full px-6 py-4 flex items-center justify-between text-sm font-semibold text-foreground hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Settings2 className="h-4 w-4 text-primary" />
                  Settings & Options
                </div>
                {showOptions ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showOptions && (
                <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {toolOptions.map((opt) => (
                    <div key={opt.id} className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {opt.label}
                      </label>
                      {opt.type === 'select' && opt.options && (
                        <select
                          value={options[opt.id] || opt.defaultValue}
                          onChange={(e) => handleOptionChange(opt.id, e.target.value)}
                          className="h-11 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-foreground text-sm font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                        >
                          {opt.options.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      )}
                      {opt.type === 'toggle' && (
                        <button
                          onClick={() => handleOptionChange(opt.id, !options[opt.id])}
                          className={`h-11 px-4 rounded-xl border-2 text-sm font-medium transition-all ${options[opt.id]
                            ? 'bg-primary text-white border-primary'
                            : 'bg-slate-50 dark:bg-slate-800 text-foreground border-slate-200 dark:border-slate-700 hover:border-primary'
                            }`}
                        >
                          {options[opt.id] ? 'Enabled' : 'Disabled'}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Input Section */}
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-bold text-foreground flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-blue-500 animate-pulse"></span>
                Your Input
              </label>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FileText className="h-3.5 w-3.5" /> {wordCount} words
                  </span>
                  <span className="h-3 w-px bg-slate-200 dark:bg-slate-700"></span>
                  <span>{charCount} chars</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-muted-foreground hover:text-primary"
                  onClick={() => setInput('')}
                  disabled={!input}
                >
                  <RotateCcw className="h-3.5 w-3.5 mr-1" /> Clear
                </Button>
              </div>
            </div>

            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="w-full min-h-[180px] resize-none p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 text-foreground text-base focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-normal placeholder:text-muted-foreground"
            />

            {/* Mobile Word/Char Count */}
            <div className="flex sm:hidden items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <FileText className="h-3.5 w-3.5" /> {wordCount} words
              </span>
              <span className="h-3 w-px bg-slate-200 dark:bg-slate-700"></span>
              <span>{charCount} characters</span>
            </div>

            {/* Generate Button */}
            <div className="mt-6">
              <Button
                onClick={handleGenerate}
                disabled={loading || !input.trim()}
                className="w-full h-14 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-indigo-600/90 text-white font-bold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 text-base disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {isNonAITool ? 'Processing...' : 'Generating...'}
                  </>
                ) : (
                  <>
                    {isNonAITool ? <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" /> : <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform" />}
                    {buttonText}
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Result Section */}
          {result && (
            <div ref={resultRef} className="p-6 md:p-8 bg-gradient-to-b from-green-50/50 to-white dark:from-green-900/10 dark:to-slate-900/30 border-t border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></span>
                    {resultLabel}
                  </label>
                  {processingTime > 0 && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> {(processingTime / 1000).toFixed(1)}s
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-9 gap-2 rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-all" onClick={handleCopy}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 gap-2 rounded-xl border-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" onClick={handleDownload}>
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 gap-2 rounded-xl border-2 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1a1f2e] rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-6 shadow-lg">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="whitespace-pre-wrap leading-relaxed text-foreground text-base m-0">{result}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* History Section */}
        {history.length > 0 && (
          <div className="mt-8">
            <button onClick={() => setShowHistory(!showHistory)} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mx-auto">
              <History className="h-4 w-4" />
              View History ({history.length})
              {showHistory ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {showHistory && (
              <div className="mt-4 bg-white dark:bg-[#1a1f2e] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-sm font-semibold text-foreground">Recent Generations</span>
                  <Button variant="ghost" size="sm" className="h-8 text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20" onClick={handleClearHistory}>
                    <Trash2 className="h-3.5 w-3.5 mr-1" /> Clear All
                  </Button>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {history.slice(0, 5).map((item, index) => (
                    <button key={index} onClick={() => handleLoadFromHistory(item)} className="w-full p-4 text-left border-b border-slate-50 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="text-sm text-foreground font-medium line-clamp-1">{item.input}</div>
                      <div className="text-xs text-muted-foreground mt-1">{new Date(item.timestamp).toLocaleDateString()}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pro Tips */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border border-primary/10">
          <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> Pro Tips
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary">•</span>Be specific with your input for more accurate results</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span>Use the settings panel to customize output</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span>Review and personalize the generated content</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ToolLayout;
