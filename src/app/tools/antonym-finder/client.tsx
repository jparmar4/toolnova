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
  ArrowLeftRight,
  Users,
  Star,
  Clock,
  Brain,
  RefreshCw,
  FileText,
} from "lucide-react";

const toolOptions: ToolOption[] = [
  {
    id: "type",
    label: "Antonym Type",
    type: "select" as const,
    options: [
      { value: "all", label: "🔄 All Types" },
      { value: "direct", label: "⬅️ Direct Opposites" },
      { value: "gradable", label: "📊 Gradable (Degrees)" },
      { value: "complementary", label: "🔀 Complementary" },
      { value: "relational", label: "🔗 Relational" },
    ],
    defaultValue: "all",
  },
  {
    id: "context",
    label: "Context",
    type: "select" as const,
    options: [
      { value: "general", label: "📋 General" },
      { value: "academic", label: "🎓 Academic" },
      { value: "technical", label: "💻 Technical" },
      { value: "creative", label: "✨ Creative" },
    ],
    defaultValue: "general",
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
  {
    id: "showExplanation",
    label: "Show Explanations",
    type: "select" as const,
    options: [
      { value: "yes", label: "✅ Yes" },
      { value: "no", label: "❌ No" },
    ],
    defaultValue: "yes",
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const type = options?.type || "all";
  const context = options?.context || "general";
  const includeExamples = options?.includeExamples || "yes";
  const showExplanation = options?.showExplanation || "yes";

  let typeInstruction = "";
  if (type === "direct") {
    typeInstruction = "Focus on direct opposites (e.g., hot-cold, big-small).";
  } else if (type === "gradable") {
    typeInstruction =
      "Focus on gradable antonyms with degrees between them (e.g., hot-warm-cool-cold).";
  } else if (type === "complementary") {
    typeInstruction =
      "Focus on complementary antonyms where one excludes the other (e.g., alive-dead, on-off).";
  } else if (type === "relational") {
    typeInstruction =
      "Focus on relational antonyms that depend on perspective (e.g., buy-sell, teacher-student).";
  } else {
    typeInstruction =
      "Include all types of antonyms with clear categorization.";
  }

  return `Find antonyms (opposite meanings) for the following word or phrase in ${context} context.

${typeInstruction}

For each antonym, provide:
1. The antonym word
2. Type of antonym (direct, gradable, complementary, or relational)
3. ${showExplanation === "yes" ? "Brief explanation of the opposite relationship" : ""}
4. ${includeExamples === "yes" ? "Example sentence showing usage in contrast" : ""}
5. Degree of opposition (complete opposite vs. partial opposite)

Word/Phrase:
${input}

Organize antonyms by:
- Type of opposition
- Formality level
- Context appropriateness

Provide clear, educational antonym analysis.

Antonyms:`;
};

const stats = [
  { value: "200K+", label: "Students", icon: Users },
  { value: "4.9/5", label: "Rating", icon: Star },
  { value: "<1min", label: "Results", icon: Clock },
];

const features = [
  {
    icon: ArrowLeftRight,
    title: "Multiple Antonym Types",
    desc: "Understand direct, gradable, complementary, and relational opposites with clear explanations.",
  },
  {
    icon: Brain,
    title: "Contextual Understanding",
    desc: "Learn how words can have different antonyms depending on context and usage.",
  },
  {
    icon: Sparkles,
    title: "Example Sentences",
    desc: "See antonyms used in contrasting sentences to understand the opposite relationship.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Word",
    desc: "Type the word you want to find opposites for",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Select Type",
    desc: "Choose antonym type and context for your needs",
    icon: ArrowLeftRight,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Learn Opposites",
    desc: "Get organized antonyms with explanations and examples",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
  },
];

const testimonial = {
  text: "As an English teacher, this antonym finder is invaluable! The categorization by type (direct, gradable, complementary) helps my students truly understand opposite relationships. The contextual examples make abstract concepts concrete.",
  author: "Michael Chen",
  role: "ESL Teacher",
  initial: "M",
};

const relatedTools = [
  {
    name: "Synonym Finder",
    slug: "synonym-finder",
    icon: Search,
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
    icon: RefreshCw,
    color: "text-teal-600",
  },
  {
    name: "Text Simplifier",
    slug: "text-simplifier",
    icon: FileText,
    color: "text-green-600",
  },
];

const faqs = [
  {
    question: "What is an Antonym Finder and how does it work?",
    answer:
      "An Antonym Finder is a linguistic tool that identifies words with opposite or contrasting meanings to help you understand vocabulary relationships and improve language skills. Our AI-powered antonym finder goes beyond simple word lists by categorizing antonyms into different types—direct opposites (hot-cold), gradable opposites (hot-warm-cool-cold), complementary opposites (alive-dead), and relational opposites (teacher-student). Understanding these distinctions is crucial because not all opposites work the same way. The tool analyzes the word you input, considers its part of speech and common usage contexts, then generates appropriate antonyms with explanations of the opposite relationship. For example, 'good' has multiple antonyms depending on context: 'bad' (general quality), 'evil' (moral context), 'poor' (performance), or 'faulty' (functionality). We explain these contextual differences so you choose the right antonym for your specific needs. The tool also provides example sentences showing both words in contrasting situations, which helps cement understanding. Learning antonyms strengthens vocabulary comprehension because understanding what a word is NOT often clarifies what it IS. This tool is particularly valuable for students preparing for vocabulary tests, ESL learners building English proficiency, writers seeking precise opposites for contrast and emphasis, and anyone wanting to deepen their understanding of word relationships and semantic networks.",
  },
  {
    question: "What are the different types of antonyms in English?",
    answer:
      "English has four main types of antonyms, each representing a different kind of opposite relationship. First, direct or binary antonyms are simple opposites where one word directly contradicts the other without middle ground—examples include 'true-false,' 'dead-alive,' 'on-off,' and 'present-absent.' These are also called complementary antonyms because choosing one automatically excludes the other; something can't be both dead and alive simultaneously. Second, gradable antonyms exist on a spectrum with degrees between extremes. 'Hot' and 'cold' are gradable antonyms because you can be warm, cool, or lukewarm in between. Other examples include 'big-small' (with medium), 'fast-slow' (with moderate speed), and 'young-old' (with middle-aged). Most adjectives describing qualities have gradable antonyms. Third, relational antonyms depend on the relationship between two entities—if one exists, it implies the other exists too. Examples include 'buy-sell' (can't buy without someone selling), 'teacher-student,' 'parent-child,' 'above-below,' and 'give-receive.' These are called converses because they describe the same relationship from different perspectives. Fourth, auto-antonyms or contronyms are words that serve as their own opposites depending on context—'dust' can mean to remove dust or to add dust (powder), 'oversight' means supervision or an error, 'sanction' means to approve or to penalize. Our tool identifies which type each antonym represents because understanding this helps you use opposites correctly in writing and speaking. Knowing whether an antonym is gradable affects how you use modifiers and comparatives—you can say 'very hot' but not 'very dead.'",
  },
  {
    question:
      "Is this Antonym Finder tool free to use for students and writers?",
    answer:
      "Yes, our Antonym Finder is completely free to use with unlimited searches and full access to all features including antonym type categorization, contextual explanations, usage examples, and formality level distinctions. There are no hidden fees, daily limits, or premium tiers required to access comprehensive antonym analysis. We created this tool specifically to support students preparing for vocabulary sections of standardized tests, ESL learners building English proficiency, writers seeking precise opposites for stylistic effect, and educators teaching vocabulary relationships. Many antonym tools provide only basic word lists without explanations, forcing users to guess which opposite fits their context. Our tool explains WHY words are antonyms and WHEN to use specific opposites, which is crucial for language mastery. The tool saves your search history locally in your browser for convenience, but all data remains private—we don't require email registration or account creation. You can search antonyms for homework, exam prep, essay writing, or professional communication without any restrictions. Educational resources should be accessible to everyone regardless of financial situation, which is why we've made this tool free and will keep it that way. While we may introduce optional premium features in the future like personalized vocabulary tracking or advanced etymology information, the core antonym finding functionality with explanations and examples will always remain free. Use it as often as you need to build your vocabulary and improve your understanding of opposite word relationships.",
  },
  {
    question: "How can I use antonyms effectively in my writing?",
    answer:
      "Using antonyms strategically can make your writing more compelling, clear, and impactful through contrast and emphasis. First, antonyms create powerful contrast that highlights differences and makes comparisons vivid. Instead of writing 'The project went from successful to unsuccessful,' try 'The project went from triumph to disaster'—stronger antonyms create stronger impact. In persuasive writing, contrasting opposite outcomes motivates action: 'Choose progress over stagnation' or 'Embrace courage, not fear.' Second, antonyms help structure arguments and essays. Thesis statements often present opposing viewpoints: 'While some argue for freedom, others prioritize security.' Topic sentences can frame paragraphs around contrasts: 'Unlike traditional education, online learning offers flexibility.' This gives readers clear organizational signals. Third, antonyms clarify definitions by showing what something is NOT. Technical writing often defines terms by exclusion: 'Asynchronous means not happening simultaneously' or 'Intangible assets lack physical substance.' Fourth, antonyms add rhythm and balance through parallel structure: 'Ask not what your country can do for you, but what you can do for your country' uses give-receive relational antonyms powerfully. However, avoid common mistakes: Don't force antonyms where contrast isn't meaningful—not every point needs an opposite. Don't assume all readers recognize subtle antonyms—'taciturn' and 'loquacious' are opposites, but many won't know both words. Use context clues or simpler alternatives when appropriate. Don't create false dichotomies—most situations aren't purely black-and-white opposites despite language suggesting they are. Our tool helps you find appropriate antonyms with the right formality level and intensity for your context, whether you're writing academic essays, business reports, or creative fiction. Use the example sentences we provide as models for incorporating antonyms naturally rather than awkwardly.",
  },
  {
    question:
      "What's the difference between opposite words and negative words?",
    answer:
      "Opposite words (antonyms) and negative words are related but distinctly different concepts that learners often confuse. Opposite words have contrasting meanings within the same semantic dimension—hot-cold, fast-slow, big-small. They represent different points on a spectrum or different poles of a quality. Negative words, however, simply negate or deny the original word without necessarily providing a true opposite. For example, 'unhappy' is the negative of 'happy,' but it doesn't mean 'sad'—someone can be unhappy without being sad; they might be neutral, disappointed, or frustrated. True antonyms would be 'happy-sad' or 'happy-miserable.' The prefix 'un-' creates negations, not always opposites. Consider 'usual' and 'unusual'—unusual doesn't mean the opposite of usual; it means not usual, which includes a wide range of possibilities. Similarly, 'possible-impossible' seems like opposites, but 'impossible' is technically a negation meaning 'not possible.' True antonyms would include degrees: 'possible-uncertain-unlikely-impossible.' Another key difference: opposites usually share the same part of speech (hot-cold are both adjectives), while negations keep the same word with a negative prefix. Some words have both opposites AND negations with different meanings: 'legal' has the opposite 'illegal' (not permitted by law) and could contrast with 'criminal,' but these aren't identical concepts. Understanding this distinction helps in vocabulary tests where questions might ask for 'the opposite of X' versus 'which word means NOT X.' In writing, choosing true antonyms creates sharper contrast than using negations: 'She was kind, not cruel' is more powerful than 'She was kind, not unkind.' Our tool focuses on true antonyms—words representing opposite ends of a spectrum—rather than simple negations, though we explain the relationship when relevant. This helps you make more precise word choices and understand deeper vocabulary relationships.",
  },
  {
    question:
      "Can this tool help with competitive exam preparation and vocabulary building?",
    answer:
      "Absolutely! Our Antonym Finder is specifically designed to support preparation for competitive exams including GRE, SAT, GMAT, TOEFL, IELTS, and government exams like UPSC, SSC, and banking exams that test vocabulary knowledge. These exams frequently include antonym questions in multiple formats: direct antonym identification ('What is the opposite of X?'), sentence completion using opposites ('Though he appeared ___, he was actually quite ___'), and reading comprehension passages using contrasts. Our tool helps you prepare by teaching antonym types (direct, gradable, complementary, relational) which helps you recognize relationships quickly during exams. Many test questions depend on understanding that opposites can be context-dependent—'light' has different antonyms depending on whether it means weight (heavy), color (dark), or mood (serious). We explain these contextual differences. For vocabulary building, learning antonyms is more efficient than memorizing isolated words because it creates mental connections. When you learn 'benevolent' means kind and its antonym is 'malevolent' (meaning evil or harmful), you've learned two words and understood their relationship, making both easier to remember. Our example sentences show words in context, which is how exams test vocabulary—not through definitions but through usage. The formality level indicators help you distinguish between academic opposites appropriate for written responses ('commence-conclude') versus casual ones ('start-finish'). For essay writing sections, using varied antonyms demonstrates lexical range and sophistication—one of the scoring criteria. Create study lists by exploring antonyms for common exam words. Many students make the mistake of only learning positive words, but knowing 'languid,' 'lethargic,' and 'torpid' (opposites of energetic) is equally important for test success. Use our tool daily to systematically build vocabulary. Search antonyms for words you encounter in practice tests, reading passages, and study materials. Over time, you'll develop an intuitive understanding of opposite relationships that helps you answer questions quickly and accurately under exam pressure.",
  },
];

const placeholders = [
  "hot",
  "success",
  "increase (business context)",
  "positive (formal writing)",
  "expand (technical documentation)",
  "simple (academic context)",
  "happy",
  "big",
  "fast",
  "good",
];

export default function AntonymFinderClient() {
  return (
    <PremiumToolWrapper
      toolName="Antonym Finder"
      toolSlug="antonym-finder"
      tagline="Find opposite meanings instantly"
      description="Discover antonyms with type categorization, contextual explanations, and usage examples for vocabulary building and exam preparation."
      badge="Word Pairs"
      category="Exam Prep Tools"
      categorySlug="exam-prep-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={testimonial}
      relatedTools={relatedTools}
    >
      <EnhancedToolLayout
        toolSlug="antonym-finder"
        toolName="Antonym Finder"
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        promptTemplate={generatePrompt}
        inputRows={3}
        toolOptions={toolOptions}
        resultLabel="📚 Antonyms"
        generateButtonText="🔍 Find Antonyms"
        inputLabel="🔤 Enter Word"
        showAdvancedOptions={true}
        maxHistoryItems={10}
        supportedFormats={["text", "markdown"]}
      />
      <FAQSection faqs={faqs} />
    </PremiumToolWrapper>
  );
}
