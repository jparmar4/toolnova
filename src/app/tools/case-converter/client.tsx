"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import {
  Type,
  Zap,
  ArrowUpDown,
  Users,
  Star,
  Clock,
  FileText,
  Hash,
  Sparkles,
  AlignLeft,
} from "lucide-react";

// Non-AI Handler Function
function caseConverterHandler(input: string): string {
  const uppercase = input.toUpperCase();
  const lowercase = input.toLowerCase();
  const titleCase = input
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const sentenceCase = input
    .toLowerCase()
    .replace(/(^\w|\.\s+\w)/g, (char) => char.toUpperCase());
  const camelCase = input
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
  const pascalCase = input
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^[a-z]/, (char) => char.toUpperCase());
  const snakeCase = input
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  const kebabCase = input
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const alternatingCase = input
    .split("")
    .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join("");
  const inverseCase = input
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join("");

  return `📝 **Case Conversion Results**

**UPPERCASE:**
${uppercase}

**lowercase:**
${lowercase}

**Title Case:**
${titleCase}

**Sentence case:**
${sentenceCase}

**camelCase:**
${camelCase}

**PascalCase:**
${pascalCase}

**snake_case:**
${snakeCase}

**kebab-case:**
${kebabCase}

**aLtErNaTiNg CaSe:**
${alternatingCase}

**iNVERSE cASE:**
${inverseCase}

---

💡 **Usage Tips:**
- Use UPPERCASE for emphasis or headings
- Use Title Case for titles and headlines
- Use camelCase for JavaScript variables
- Use PascalCase for class names
- Use snake_case for Python variables
- Use kebab-case for URLs and CSS classes`;
}


const features = [
  {
    icon: Type,
    title: "10 Case Styles",
    description:
      "Convert to uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and more",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Instant Conversion",
    description:
      "All case conversions happen instantly - see all formats at once with a single click",
    gradient: "from-purple-500 to-pink-600",
    bgLight: "bg-purple-50",
  },
  {
    icon: Sparkles,
    title: "Programming Friendly",
    description:
      "Includes camelCase, PascalCase, snake_case, and kebab-case for developers and programmers",
    gradient: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Paste Text",
    desc: "Add the text you want to convert",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Convert",
    desc: "Click to see all case styles instantly",
    icon: ArrowUpDown,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Copy & Use",
    desc: "Copy the format you need with one click",
    icon: Zap,
    color: "from-green-500 to-emerald-600",
  },
];

const relatedTools = [
  {
    name: "Character Counter",
    slug: "character-counter",
    icon: Hash,
    color: "text-blue-600",
  },
  {
    name: "Word Counter",
    slug: "word-counter",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    name: "Text Simplifier",
    slug: "text-simplifier",
    icon: AlignLeft,
    color: "text-green-600",
  },
  {
    name: "Grammar Fix",
    slug: "grammar-fix",
    icon: Sparkles,
    color: "text-orange-600",
  },
];

const faqs = [
  {
    question: "What case styles are available?",
    answer:
      "We offer 10 case styles: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, aLtErNaTiNg CaSe, and iNVERSE cASE. Each serves different purposes.",
    category: "Features",
  },
  {
    question: "When should I use camelCase vs PascalCase?",
    answer:
      "Use camelCase for variables and functions in JavaScript (myVariable). Use PascalCase for class names and components (MyComponent). It's a programming convention.",
    category: "Usage",
  },
  {
    question: "What's the difference between snake_case and kebab-case?",
    answer:
      "snake_case uses underscores (my_variable) and is common in Python. kebab-case uses hyphens (my-variable) and is used in URLs and CSS class names.",
    category: "Usage",
  },
  {
    question: "Does it preserve numbers and special characters?",
    answer:
      "Yes! Numbers are preserved in all conversions. Special characters are handled appropriately for each case style (removed in camelCase/PascalCase, converted to separators in snake_case/kebab-case).",
    category: "Technical",
  },
  {
    question: "Can I convert multiple paragraphs at once?",
    answer:
      "Yes, you can paste text of any length including multiple paragraphs. All text will be converted to your chosen case format.",
    category: "Usage",
  },
  {
    question: "Is this useful for SEO?",
    answer:
      "Yes! Title Case is perfect for page titles and headlines. kebab-case is ideal for URL slugs. Both are important for SEO best practices.",
    category: "SEO",
  },
];

export default function CaseConverterClient() {
  return (
    <PremiumToolWrapper
      toolName="Case Converter"
      toolSlug="case-converter"
      tagline="Convert text to any case format instantly"
      description="Transform text between 10 different case styles including UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more. Perfect for developers, writers, and content creators."
      badge="Utility Tool"
      category="Utility Tools"
      categorySlug="utility-tools"
      features={features}
      howItWorks={howItWorks}
      relatedTools={relatedTools}
      ctaTitle="Convert Your Text Now"
      ctaDescription="Perfect for programming, content creation, and formatting"
      ctaIcon={Type}
    >
      <EnhancedToolLayout
        toolSlug="case-converter"
        toolName="Case Converter"
        placeholder={`📝 Paste or type your text here...

Examples:
• "hello world" → "Hello World" (Title Case)
• "My Variable Name" → "myVariableName" (camelCase)
• "Some Text Here" → "some_text_here" (snake_case)
• "Blog Post Title" → "blog-post-title" (kebab-case)
• "convert this text" → "CONVERT THIS TEXT" (UPPERCASE)

Try any text and see all 10 case formats instantly!`}
        promptTemplate={(input) => input}
        inputRows={8}
        isNonAITool={true}
        nonAIHandler={caseConverterHandler}
        resultLabel="🔄 Converted Cases"
        generateButtonText="🔄 Convert Cases"
        inputLabel="📝 Your Text"
        showAdvancedOptions={false}
        maxHistoryItems={5}
      />
      <div className="px-6 pb-6">
        <FAQSection faqs={faqs} />
      </div>
    </PremiumToolWrapper>
  );
}
