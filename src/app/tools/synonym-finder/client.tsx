"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  BookOpen,
  Lightbulb,
  Search,
  Sparkles,
  RefreshCw,
  Users,
  Star,
  Clock,
  Zap,
  FileText,
  Brain,
} from "lucide-react";

const toolOptions: ToolOption[] = [
  {
    id: "context",
    label: "Context",
    type: "select" as const,
    options: [
      { value: "general", label: "📋 General" },
      { value: "academic", label: "🎓 Academic" },
      { value: "business", label: "💼 Business" },
      { value: "creative", label: "✨ Creative Writing" },
    ],
    defaultValue: "general",
  },
  {
    id: "formality",
    label: "Formality Level",
    type: "select" as const,
    options: [
      { value: "casual", label: "😊 Casual" },
      { value: "neutral", label: "📝 Neutral" },
      { value: "formal", label: "👔 Formal" },
      { value: "academic", label: "🎓 Academic" },
    ],
    defaultValue: "neutral",
  },
  {
    id: "count",
    label: "Number of Synonyms",
    type: "select" as const,
    options: [
      { value: "5", label: "5 Synonyms" },
      { value: "10", label: "10 Synonyms" },
      { value: "15", label: "15 Synonyms" },
      { value: "20", label: "20 Synonyms" },
    ],
    defaultValue: "10",
  },
  {
    id: "includeExamples",
    label: "Include Examples",
    type: "select" as const,
    options: [
      { value: "yes", label: "✅ Yes" },
      { value: "no", label: "❌ No" },
    ],
    defaultValue: "yes",
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const context = options?.context || "general";
  const formality = options?.formality || "neutral";
  const count = options?.count || "10";
  const includeExamples = options?.includeExamples || "yes";

  return `Find ${count} synonyms for the following word or phrase in a ${formality} tone for ${context} context.

For each synonym, provide:
1. The synonym word
2. Brief definition showing subtle difference in meaning
3. ${includeExamples === "yes" ? "Example sentence demonstrating proper usage" : ""}
4. Connotation notes (positive, negative, or neutral)

Organize synonyms by:
- Intensity (mild to strong)
- Formality level
- Common usage vs. advanced vocabulary

Word/Phrase:
${input}

Provide comprehensive synonyms with clear explanations of when to use each one.

Synonyms:`;
};

const stats = [
  { value: "300K+", label: "Writers", icon: Users },
  { value: "4.9/5", label: "Rating", icon: Star },
  { value: "<1min", label: "Results", icon: Clock },
];

const features = [
  {
    icon: Search,
    title: "Context-Aware Synonyms",
    desc: "Get synonyms appropriate for academic writing, business communication, or creative expression.",
  },
  {
    icon: Brain,
    title: "Subtle Differences Explained",
    desc: "Understand the nuanced differences between similar words to choose the perfect alternative.",
  },
  {
    icon: Sparkles,
    title: "Usage Examples Included",
    desc: "See each synonym used in context with example sentences for better understanding.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Word",
    desc: "Type the word you want to find alternatives for",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Select Context",
    desc: "Choose the formality and context for appropriate synonyms",
    icon: Search,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Get Synonyms",
    desc: "Receive organized list with definitions and usage examples",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
  },
];

const testimonial = {
  text: "This synonym finder saved my essay from being repetitive! I was using 'important' way too much, and this tool gave me 15 perfect alternatives with explanations of when to use each. My professor commented on my improved vocabulary!",
  author: "Emma Rodriguez",
  role: "College Student",
  initial: "E",
};

const relatedTools = [
  {
    name: "Antonym Finder",
    slug: "antonym-finder",
    icon: RefreshCw,
    color: "text-green-600",
  },
  {
    name: "Vocabulary Builder",
    slug: "vocabulary-builder",
    icon: BookOpen,
    color: "text-emerald-600",
  },
  {
    name: "Paraphraser",
    slug: "paraphraser",
    icon: Sparkles,
    color: "text-teal-600",
  },
  {
    name: "Text Simplifier",
    slug: "text-simplifier",
    icon: Lightbulb,
    color: "text-green-600",
  },
];

const faqs = [
  {
    question: "What is a Synonym Finder and why should I use it?",
    answer:
      "A Synonym Finder is a tool that helps you discover alternative words with similar meanings, enabling you to enrich your vocabulary and avoid repetition in writing. Our AI-powered synonym finder goes beyond simple word lists by providing context-aware suggestions, explaining subtle differences between similar words, and showing proper usage through examples. Using synonyms effectively is crucial for strong writing—it makes your content more engaging, demonstrates vocabulary sophistication, and helps convey precise meanings. Whether you're writing essays, business reports, creative stories, or professional emails, choosing the right synonym can significantly impact how your message is received. Good writers know that not all synonyms are interchangeable; words carry different connotations, formality levels, and intensities. For example, 'happy,' 'joyful,' 'ecstatic,' and 'content' are synonyms but convey different degrees and types of happiness. Our tool helps you understand these nuances so you can select the perfect word for your specific context. Students benefit by expanding their academic vocabulary, professionals improve business communication clarity, and writers enhance creative expression. Regular use of a synonym finder naturally improves your active vocabulary—words you not only recognize but confidently use in speaking and writing.",
  },
  {
    question: "How do I choose the right synonym for my specific context?",
    answer:
      "Choosing the right synonym requires understanding three key factors: connotation, formality level, and intensity. Connotation refers to the emotional or cultural associations a word carries beyond its literal definition. For example, 'slim' and 'skinny' both mean thin, but 'slim' has positive connotations while 'skinny' can be negative. Our tool labels synonyms as positive, negative, or neutral to guide your selection. Formality level matters for audience appropriateness—'assist' sounds more formal than 'help,' making it better for business contexts, while 'help' works well in casual writing. Select the formality option in our tool (casual, neutral, formal, or academic) to get context-appropriate suggestions. Intensity indicates the strength of meaning—'annoyed,' 'angry,' and 'furious' represent increasing levels of anger. Consider whether you need a mild or strong alternative. Also think about common usage versus advanced vocabulary. In creative writing or academic essays, sophisticated synonyms like 'ubiquitous' instead of 'common' demonstrate strong vocabulary. However, in business communication, clarity often trumps complexity, so choose more familiar terms. Our tool organizes synonyms by these categories and provides usage examples showing each word in appropriate contexts. When in doubt, read the example sentences we provide—they demonstrate proper usage and help you see if a synonym fits your intended meaning and tone.",
  },
  {
    question: "Is this Synonym Finder tool completely free to use?",
    answer:
      "Yes, our Synonym Finder is completely free to use with unlimited searches and no hidden fees or premium tiers required. You can look up as many words as you need, generate multiple synonym lists, and access all features including context selection, formality levels, and usage examples without any cost. We believe that language learning tools and vocabulary resources should be accessible to everyone—students, writers, professionals, and English language learners—regardless of financial means. Many synonym finder tools limit free users to basic word lists without explanations or examples, or impose daily search limits. We don't. You get comprehensive synonym analysis with definitions, usage examples, connotation notes, and organization by formality and intensity, all completely free. The tool saves your search history locally in your browser for convenience, but all data remains private and under your control—we don't require email registration or account creation to access features. Our goal is to help people communicate more effectively by expanding their vocabulary and understanding word nuances. We may introduce optional premium features in the future, such as personalized vocabulary tracking or advanced etymology information, but the core synonym finding functionality with context-aware suggestions and usage examples will always remain free for everyone.",
  },
  {
    question:
      "What's the difference between similar synonyms and how do I understand nuances?",
    answer:
      "Understanding the subtle differences between synonyms is essential for precise communication and sophisticated writing. Similar words often differ in connotation (emotional association), intensity (strength of meaning), formality (appropriate contexts), or specificity (breadth of meaning). For example, consider synonyms for 'smart': 'intelligent' is formal and broad, 'clever' implies quick thinking or cunning (sometimes with negative connotation), 'brilliant' suggests exceptional intelligence, 'bright' is casual and often used with children, and 'astute' indicates shrewd judgment in specific situations. These words aren't interchangeable despite similar meanings. Our tool explains these differences by providing clear definitions highlighting what makes each synonym unique, labeling connotations as positive, negative, or neutral, categorizing formality levels, and most importantly, showing usage examples that demonstrate appropriate contexts. Pay attention to collocations—word combinations that sound natural to native speakers. We say 'strong coffee' not 'powerful coffee,' even though strong and powerful are synonyms. Context matters enormously: 'childish' and 'childlike' both relate to children, but 'childish' is negative (immature) while 'childlike' is positive (innocent wonder). Our example sentences reveal these usage patterns. When learning synonyms, create your own sentences using new words and ask yourself: Does this word fit the tone? (formal/casual), Does it match the intensity I want?, What emotion does it convey?, Would a native speaker use it this way? Over time, you'll develop an intuitive feel for word nuances. Reading extensively in your target genre (academic, business, creative) also helps internalize appropriate synonym usage patterns.",
  },
  {
    question:
      "How can using synonyms improve my writing quality and avoid repetition?",
    answer:
      "Strategic synonym usage transforms writing from repetitive and boring to engaging and sophisticated. When you repeat the same words, readers notice—it makes writing feel amateur and less credible. Varying your vocabulary maintains reader interest and demonstrates language mastery. However, effective synonym use goes beyond simply replacing words; it's about choosing alternatives that enhance meaning and flow. First, synonyms help avoid the 'echo effect' where repeating the same word in consecutive sentences sounds awkward. Instead of writing 'The important issue required important decisions from important leaders,' use 'The critical issue required significant decisions from key leaders.' Each synonym adds subtle meaning. Second, synonyms allow you to emphasize different aspects of a concept. 'Small,' 'tiny,' 'minuscule,' and 'compact' all mean not large, but suggest different scales and contexts. Third, they help match tone to purpose. Academic writing benefits from formal synonyms like 'utilize' instead of 'use,' while creative writing might prefer vivid alternatives like 'employ' or 'harness.' However, beware common pitfalls: Don't use synonyms you don't fully understand—incorrect usage is worse than repetition. Don't choose complex words just to sound smart—clarity matters more than vocabulary showing off. Don't replace every instance of a word—sometimes repetition is intentional for emphasis or clarity (especially with technical terms). Use our tool to find appropriate alternatives, read the usage examples carefully, and test whether the synonym maintains your intended meaning. Strong writing balances variety with clarity, using synonyms purposefully to enhance communication, not obscure it. Practice regularly and your active vocabulary will naturally expand, making synonym selection intuitive rather than forced.",
  },
  {
    question:
      "Can this tool help with English vocabulary for exams and academic writing?",
    answer:
      "Absolutely! Our Synonym Finder is an excellent resource for building vocabulary needed for English proficiency exams (IELTS, TOEFL, PTE), standardized tests (SAT, GRE, GMAT), and academic writing. These exams specifically test your ability to understand and use synonyms in context—IELTS speaking and writing modules reward varied vocabulary, TOEFL reading includes synonym recognition questions, and GRE verbal sections test your ability to identify relationships between synonymous words. For exam preparation, use our tool strategically: When learning new words from practice materials, look up synonyms to understand the full semantic field and related vocabulary. This creates mental connections that improve retention. For essay writing practice, identify words you tend to overuse (like 'important,' 'interesting,' 'good,' 'bad') and learn 5-7 strong synonyms for each, organized by formality and intensity. Our formality level selector helps you distinguish between casual synonyms acceptable in speaking tests versus formal alternatives needed for academic essays. For reading comprehension, many questions ask you to identify which answer choice means the same as a word in the passage—practicing with our tool improves this skill. The 'academic' context option specifically provides synonyms common in scholarly writing, helping you recognize and use terminology expected in university-level work. For writing tasks, examiners look for 'lexical resource'—the range and accuracy of your vocabulary. Using appropriate synonyms demonstrates this competence, but using them incorrectly hurts your score, which is why our definitions and usage examples are crucial. Study the example sentences we provide as models for your own writing. Create personalized vocabulary lists by topic (environment, technology, education, health) with synonyms at different formality levels. Regular practice with our tool expands both your receptive vocabulary (words you recognize) and productive vocabulary (words you confidently use), both essential for exam success and academic achievement.",
  },
];

const placeholders = [
  "happy",
  "important",
  "analyze (for academic writing)",
  "beautiful (for creative storytelling)",
  "difficult (formal business context)",
  "understand (professional communication)",
  "big",
  "good",
  "interesting",
  "show",
];

export default function SynonymFinderClient() {
  return (
    <PremiumToolWrapper
      toolName="Synonym Finder"
      toolSlug="synonym-finder"
      tagline="Find the perfect word alternative"
      description="Discover synonyms with context-aware suggestions, definitions, and usage examples to elevate your vocabulary and writing."
      badge="Word Explorer"
      category="Exam Prep Tools"
      categorySlug="exam-prep-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={testimonial}
      relatedTools={relatedTools}
    >
      <EnhancedToolLayout
        toolSlug="synonym-finder"
        toolName="Synonym Finder"
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        promptTemplate={generatePrompt}
        inputRows={3}
        toolOptions={toolOptions}
        resultLabel="📚 Synonyms"
        generateButtonText="🔍 Find Synonyms"
        inputLabel="🔤 Enter Word"
        showAdvancedOptions={true}
        maxHistoryItems={10}
        supportedFormats={["text", "markdown"]}
      />
      <FAQSection faqs={faqs} />
    </PremiumToolWrapper>
  );
}
