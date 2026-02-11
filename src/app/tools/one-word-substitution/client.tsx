"use client";

import EnhancedToolLayout from "@/components/EnhancedToolLayout";
import { PremiumToolWrapper } from "@/components/PremiumToolWrapper";
import { FAQSection } from "@/components/FAQSection";
import { ToolOption } from "@/components/ToolLayout";
import {
  BookOpen,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Type as TypeIcon,
  Users,
  Star,
  Clock,
  Brain,
  FileText,
  Award,
  BookMarked,
} from "lucide-react";

const toolOptions: ToolOption[] = [
  {
    id: "level",
    label: "Difficulty Level",
    type: "select" as const,
    options: [
      { value: "basic", label: "📚 Basic" },
      { value: "intermediate", label: "📖 Intermediate" },
      { value: "advanced", label: "🎓 Advanced" },
      { value: "expert", label: "🏆 Expert" },
    ],
    defaultValue: "intermediate",
  },
  {
    id: "category",
    label: "Category",
    type: "select" as const,
    options: [
      { value: "general", label: "📋 General" },
      { value: "professional", label: "💼 Professional" },
      { value: "scientific", label: "🔬 Scientific" },
      { value: "legal", label: "⚖️ Legal" },
      { value: "medical", label: "🏥 Medical" },
    ],
    defaultValue: "general",
  },
  {
    id: "count",
    label: "Number of Substitutions",
    type: "select" as const,
    options: [
      { value: "20", label: "20 Words" },
      { value: "50", label: "50 Words" },
      { value: "100", label: "100 Words" },
      { value: "200", label: "200 Words" },
    ],
    defaultValue: "50",
  },
  {
    id: "format",
    label: "Output Format",
    type: "select" as const,
    options: [
      { value: "list", label: "📝 List Format" },
      { value: "quiz", label: "❓ Quiz Mode" },
      { value: "flashcards", label: "🃏 Flashcard Style" },
    ],
    defaultValue: "list",
  },
];

const generatePrompt = (input: string, options?: Record<string, any>) => {
  const level = options?.level || "intermediate";
  const category = options?.category || "general";
  const count = options?.count || "50";
  const format = options?.format || "list";

  let formatInstructions = "";
  if (format === "quiz") {
    formatInstructions =
      "Present as quiz questions with the phrase as the question and the one-word answer.";
  } else if (format === "flashcards") {
    formatInstructions =
      "Format as flashcards with the phrase on one side and the word on the other.";
  } else {
    formatInstructions = "Present as a numbered list with clear organization.";
  }

  return `Generate ${count} one-word substitutions at ${level} difficulty level for ${category} category.

For each substitution, provide:
1. The phrase or description (what needs to be replaced)
2. The one-word substitute (the single word answer)
3. Part of speech (noun, adjective, verb, etc.)
4. Clear definition of the word
5. Example sentence using the word correctly
6. Memory tip or mnemonic device (for advanced words)
7. Related words or synonyms

${formatInstructions}

${input ? `Focus on topic or theme: ${input}` : "Cover diverse topics commonly tested in competitive exams (UPSC, SSC, Banking, etc.)"}

Organize by:
- Difficulty progression (easier to harder)
- Thematic grouping when applicable
- Common exam patterns

Provide comprehensive, educational content suitable for exam preparation.

One-Word Substitutions:`;
};

const stats = [
  { value: "500K+", label: "Exam Takers", icon: Users },
  { value: "4.9/5", label: "Rating", icon: Star },
  { value: "<2min", label: "Generate", icon: Clock },
];

const features = [
  {
    icon: Award,
    title: "Exam-Focused Content",
    desc: "Specifically designed for competitive exams like UPSC, SSC, Banking, and government tests.",
  },
  {
    icon: Brain,
    title: "Memory Techniques",
    desc: "Includes mnemonics and memory tips to help you remember complex substitutions quickly.",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    desc: "Choose list, quiz, or flashcard format based on your study preference and learning style.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Topic",
    desc: "Specify a topic or leave blank for general substitutions",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    step: 2,
    title: "Select Level",
    desc: "Choose difficulty from basic to expert based on your needs",
    icon: TypeIcon,
    color: "from-purple-500 to-pink-600",
  },
  {
    step: 3,
    title: "Study & Practice",
    desc: "Get comprehensive list with definitions, examples, and memory tips",
    icon: Sparkles,
    color: "from-green-500 to-emerald-600",
  },
];

const testimonial = {
  text: "This tool helped me ace the vocabulary section of my SSC exam! I practiced 500+ one-word substitutions in just two weeks. The memory tips were incredibly helpful for retaining difficult words. Scored 98% in the English section!",
  author: "Ankit Kumar",
  role: "SSC CGL Qualifier",
  initial: "A",
};

const relatedTools = [
  {
    name: "Vocabulary Builder",
    slug: "vocabulary-builder",
    icon: BookOpen,
    color: "text-green-600",
  },
  {
    name: "Idioms & Phrases",
    slug: "idioms-phrases",
    icon: MessageCircle,
    color: "text-emerald-600",
  },
  {
    name: "Synonym Finder",
    slug: "synonym-finder",
    icon: Lightbulb,
    color: "text-teal-600",
  },
  {
    name: "Antonym Finder",
    slug: "antonym-finder",
    icon: BookMarked,
    color: "text-green-600",
  },
];

const faqs = [
  {
    question: "What is One Word Substitution and why is it important?",
    answer:
      "One Word Substitution is a linguistic concept where a lengthy phrase or description is replaced with a single, precise word that conveys the same meaning concisely. For example, instead of saying 'a person who studies birds,' you can simply say 'ornithologist.' This concept is crucial for multiple reasons. First, it's heavily tested in competitive exams including UPSC Civil Services, SSC CGL, Banking exams (IBPS, SBI), Railway exams, and state government tests where vocabulary sections specifically include one-word substitution questions worth significant marks. Second, mastering these substitutions makes your writing more concise, professional, and impactful—essential for essays, reports, and business communication. Third, it expands your vocabulary naturally by connecting concepts with precise terminology used in academic and professional contexts. Fourth, it improves reading comprehension because many texts, especially formal or technical writing, use these specialized terms assuming reader familiarity. Understanding 'philanthropist' instead of 'person who loves humanity' speeds up reading and comprehension. Fifth, one-word substitutions demonstrate language sophistication and educational depth, which impresses in interviews, presentations, and professional correspondence. The Indian administrative and banking exams particularly emphasize this skill because government communication requires precise, unambiguous language. For students preparing for competitive exams, learning 500-1000 common one-word substitutions is considered essential preparation that can directly improve scores by 10-15 marks in English sections.",
  },
  {
    question:
      "How is this tool useful for competitive exams like UPSC, SSC, and Banking?",
    answer:
      "This One Word Substitution tool is specifically designed for competitive exam preparation where vocabulary questions are worth significant marks and can make the difference between qualifying and missing cutoffs. In UPSC Civil Services Prelims and Mains, one-word substitutions appear in the General English paper, essay writing requires concise expression using appropriate substitutions, and interview boards assess vocabulary depth. For SSC CGL, CPO, and CHSL exams, the English section includes 5-10 direct one-word substitution questions, and descriptive papers reward precise word usage. Banking exams (IBPS PO, SBI Clerk, RRB) test substitutions in vocabulary sections worth 3-5 marks. Railway exams and state government tests include similar patterns. Our tool helps by generating exam-pattern questions organized by difficulty (basic to expert) and category (general, professional, scientific, legal), providing memory techniques and mnemonics that aid rapid learning—crucial when preparing 500+ substitutions, offering example sentences showing real-world usage, which helps in descriptive writing sections, and allowing quiz mode for self-testing and flashcard format for quick revision before exams. The tool covers high-frequency substitutions that appear repeatedly across different exams: professions and people (lexicographer, misanthrope, bibliophile), sciences and studies (ornithology, etymology, anthropology), fears and phobias (acrophobia, claustrophobia), killing and death (patricide, regicide), government and political terms (autocracy, bureaucracy), and medical and legal terminology. Practicing with this tool builds confidence and speed—you'll recognize substitution questions instantly and answer within seconds, saving time for complex questions. Many toppers credit systematic vocabulary preparation, including one-word substitutions, as key to scoring 90+ percentiles in English sections.",
  },
  {
    question:
      "Is this One Word Substitution tool free to use for exam preparation?",
    answer:
      "Yes, our One Word Substitution tool is completely free to use with unlimited access to all features including the ability to generate lists of 20, 50, 100, or even 200 substitutions, choose difficulty levels from basic to expert, select categories (general, professional, scientific, legal, medical), access memory tips and mnemonics for complex words, use quiz mode for self-testing, and format as flashcards for quick revision. There are no daily limits, premium tiers, or hidden charges. We created this tool specifically to democratize exam preparation resources because quality coaching and expensive vocabulary books shouldn't be barriers to success in government exams. Many coaching institutes charge thousands of rupees for vocabulary modules that include one-word substitution content identical to what our tool generates for free. The tool saves your practice history locally for convenience but maintains complete privacy—no email registration or account creation required. We understand that most competitive exam aspirants are students or job seekers with limited budgets, which is why we've made this comprehensive resource available freely. You can use it daily throughout your preparation period, generate topic-wise lists, create personalized study materials, and practice in various formats without spending anything. While we may introduce optional premium features in the future like personalized progress tracking, adaptive difficulty based on your performance, or expanded word databases with 10,000+ substitutions, the core functionality providing comprehensive one-word substitution lists with definitions, examples, and memory techniques will always remain free. This is our contribution to supporting India's exam aspirants in achieving their career goals through accessible, quality educational resources.",
  },
  {
    question: "What difficulty level should I start with as a beginner?",
    answer:
      "If you're beginning your one-word substitution preparation, start with the 'Basic' level and systematically progress to higher difficulties rather than jumping to advanced lists. Basic level covers common, everyday substitutions that you may already know partially, like 'optimist' (person who looks at the bright side), 'annual' (happening once a year), 'autobiography' (story of one's life written by oneself), and 'pedestrian' (person walking on foot). These build confidence and establish the concept before tackling complex terms. Spend 2-3 days with basic level, learning 20-30 substitutions daily, ensuring you can recall them without hesitation and use them correctly in sentences. Once comfortable (around 80-100 basic substitutions learned), move to 'Intermediate' level which introduces moderately challenging terms like 'philanthropist,' 'contemporary,' 'versatile,' and 'procrastinate.' These appear frequently in competitive exams and general reading. Spend 1-2 weeks at intermediate level, learning 30-40 substitutions daily. After mastering 300-400 intermediate substitutions, progress to 'Advanced' level featuring specialized terms like 'misanthrope' (hater of mankind), 'bibliophile' (lover of books), 'numismatics' (study of coins), and 'gerontology' (study of old age). These are crucial for scoring high marks in competitive exams as they differentiate you from average test-takers. Finally, reach 'Expert' level only when preparing for top-tier exams like UPSC or when aiming for 95+ percentile, featuring rare substitutions like 'pyromaniac,' 'kleptomaniac,' 'epistolary,' and obscure scientific terms. The key is gradual progression with thorough revision—rushing through expert-level words without mastering basics leads to confusion and poor retention. Use spaced repetition: review basic words weekly even while learning advanced ones. Track your accuracy: if you're scoring below 70% in quiz mode, stay at current difficulty longer before advancing. Remember, exam questions mix all difficulty levels, so strong foundation in basic and intermediate substitutions is more valuable than superficial knowledge of expert terms.",
  },
  {
    question:
      "What are effective techniques to memorize one-word substitutions quickly?",
    answer:
      "Memorizing hundreds of one-word substitutions requires strategic techniques beyond simple rote learning. First, use mnemonic devices and associations provided by our tool or create your own. For 'lexicographer' (person who compiles dictionaries), remember LEX sounds like 'letters' and GRAPH means 'write'—someone who writes about letters/words. For 'ornithologist' (bird scientist), connect to 'ornithopter' (bird-like flying machine). These mental hooks make recall instant during exams. Second, learn substitutions in thematic groups rather than random lists. Study all profession-related words together (cartographer, archaeologist, cardiologist), then science studies (biology, geology, psychology), then fears (claustrophobia, agoraphobia), then governance (democracy, autocracy, bureaucracy). Thematic learning creates neural networks where recalling one word triggers related words. Third, create vivid visual images. For 'misanthrope' (hater of mankind), imagine a mean anthropomorphic character pushing people away. Visualization engages different brain areas, strengthening memory. Fourth, use the words in your own sentences immediately after learning. Write three original sentences using each new substitution—this moves words from passive recognition to active recall. Fifth, practice with fill-in-the-blanks: 'A person who hates women is called a _____' (misogynist). This mirrors exam question format and tests real understanding. Sixth, employ spaced repetition: review new words after 1 hour, 1 day, 3 days, 1 week, 2 weeks. This scientifically proven method moves information to long-term memory. Seventh, focus on word roots, prefixes, and suffixes. Understanding that 'phil' means love (bibliophile, philanthropist), 'phobia' means fear (acrophobia, claustrophobia), 'cide' means killing (homicide, genocide), and 'ology' means study (psychology, biology) helps you decode unfamiliar words during exams. Eighth, use our quiz mode for self-testing rather than just reading lists—active recall is far more effective than passive review. Ninth, teach words to study partners or family—explaining meanings to others reinforces your own understanding. Finally, maintain a personal notebook with difficult words you struggle to remember, reviewing it during spare moments. Consistency matters more than intensity—30 minutes daily of focused practice beats 3-hour weekly cramming sessions for long-term retention.",
  },
  {
    question:
      "Which competitive exams test one-word substitution and how many marks?",
    answer:
      "One-word substitution questions appear across numerous competitive exams in India with varying weightage, making them essential for serious aspirants. In UPSC Civil Services Examination, the Prelims General Studies paper includes English comprehension where substitutions appear indirectly, the Mains Compulsory English paper (for IAS, IPS, IFS) includes direct substitution questions worth 3-5 marks, and essay papers reward concise expression using appropriate single-word terminology. For SSC examinations (CGL, CHSL, CPO, MTS), the English section worth 25-50 marks includes 5-10 direct one-word substitution questions worth 1 mark each, descriptive papers evaluate vocabulary range including substitution usage, and sentence completion questions often test substitution knowledge indirectly. Banking exams including IBPS PO/Clerk, SBI PO/Clerk, and RRB feature English sections with 3-5 substitution questions worth 1 mark each, descriptive writing (letter/essay) rewards precise vocabulary, and interview rounds assess communication skills where substitution knowledge demonstrates sophistication. Railway exams (RRB NTPC, Group D, ALP) include English sections with 2-4 substitution questions and general awareness sections may test term knowledge. State government exams like State PSC, Police Constable/SI recruitments, and State Bank tests follow similar patterns with 3-7 questions. Additionally, entrance exams such as CLAT (law entrance), AFCAT (Air Force), NDA/CDS, and management entrances (CAT, XAT) include vocabulary sections where substitutions commonly appear. The direct marks may seem small (1 mark per question), but their cumulative impact is significant—scoring 8/10 substitution questions versus 4/10 creates a 4-mark advantage, which in competitive exams with cutoffs decided by 1-2 marks, can determine selection. Moreover, substitution knowledge indirectly improves performance in reading comprehension (faster understanding), sentence correction (recognizing appropriate word usage), para jumbles (connecting ideas through precise terminology), and descriptive writing (concise, impressive expression). Toppers consistently emphasize that vocabulary preparation including one-word substitutions isn't just about direct marks—it's about building overall English competency that elevates performance across all question types in English sections, ultimately contributing 10-20 marks to your total score through direct and indirect benefits.",
  },
];

const placeholders = [
  "General topics for competitive exams",
  "Government and political terms",
  "Medical and healthcare terminology",
  "Scientific studies and professions",
  "Legal and judicial vocabulary",
  "Fears, phobias, and psychology",
  "Arts, literature, and culture",
  "Animals, nature, and environment",
  "Technology and modern life",
  "Historical and geographical terms",
];

export default function OneWordSubstitutionClient() {
  return (
    <PremiumToolWrapper
      toolName="One Word Substitution"
      toolSlug="one-word-substitution"
      tagline="Master concise vocabulary for exams"
      description="Find single words that replace entire phrases - perfect for competitive exams like UPSC, SSC, and Banking with definitions, examples, and memory techniques."
      badge="Exam Essential"
      category="Exam Prep Tools"
      categorySlug="exam-prep-tools"
      stats={stats}
      features={features}
      howItWorks={howItWorks}
      testimonial={testimonial}
      relatedTools={relatedTools}
    >
      <EnhancedToolLayout
        toolSlug="one-word-substitution"
        toolName="One Word Substitution"
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        promptTemplate={generatePrompt}
        inputRows={5}
        toolOptions={toolOptions}
        resultLabel="📝 One-Word Substitutions"
        generateButtonText="🔤 Generate Substitutions"
        inputLabel="📚 Topic or Category (Optional)"
        showAdvancedOptions={true}
        maxHistoryItems={10}
        supportedFormats={["text", "markdown"]}
      />
      <FAQSection faqs={faqs} />
    </PremiumToolWrapper>
  );
}
