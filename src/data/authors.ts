export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string; // Initials or image URL
  credentials?: string; // e.g., "PhD in Computer Science", "10+ years experience"
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  specialties: string[];
  profileUrl?: string; // Author profile page URL
}

export const authors: Author[] = [
  {
    slug: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "Education Technology Writer",
    credentials: "M.Ed., 8+ years in EdTech",
    bio: "Sarah is a former educator turned tech writer who specializes in AI tools for student productivity. She has tested over 200 AI applications for learning enhancement.",
    image: "SM",
    specialties: [
      "EdTech",
      "Student Productivity",
      "E-Learning",
      "AI for Education",
    ],
    profileUrl: "https://www.toolnovahub.com/authors/sarah-mitchell",
    socials: {
      twitter: "https://twitter.com/sarahmitchell_edu",
      linkedin: "https://linkedin.com/in/sarahmitchell",
    },
  },
  {
    slug: "marcus-chen",
    name: "Marcus Chen",
    role: "Content Strategy Director",
    credentials: "10+ years in Digital Marketing & SEO",
    bio: "Marcus helps creators and businesses scale their content production using ethical AI workflows. He focuses on maintaining human voice while leveraging automation.",
    image: "MC",
    specialties: ["Content Strategy", "AI Writing", "SEO", "Digital Marketing"],
    profileUrl: "https://www.toolnovahub.com/authors/marcus-chen",
    socials: {
      twitter: "https://twitter.com/marcuschen_ai",
      linkedin: "https://linkedin.com/in/marcuschen",
    },
  },
  {
    slug: "emily-parker",
    name: "Dr. Emily Parker",
    role: "Research Consultant",
    credentials: "PhD in Information Science",
    bio: "Dr. Parker holds a PhD in Information Science and consults on automated research methodologies. She bridges the gap between academic rigor and AI efficiency.",
    image: "EP",
    specialties: [
      "Research Methodology",
      "Information Synthesis",
      "Academic Writing",
      "AI Research Tools",
    ],
    profileUrl: "https://www.toolnovahub.com/authors/emily-parker",
    socials: {
      linkedin: "https://linkedin.com/in/emilyparker_phd",
    },
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Tech Career Coach",
    credentials: "Certified Career Coach, 8+ years in tech hiring",
    bio: "Sarah Jenkins is a certified tech career coach with 8+ years of experience guiding professionals into software engineering and technology roles. She has helped over 500 candidates land jobs at top tech companies.",
    image: "SJ",
    specialties: [
      "Career Coaching",
      "Tech Industry",
      "Job Search Strategy",
      "Coding Bootcamps",
      "Programming Education",
    ],
    profileUrl: "https://www.toolnovahub.com/author/sarah-jenkins",
    socials: {
      linkedin: "https://linkedin.com/in/sarahjenkins-techcoach",
    },
  },
  {
    slug: "rachel-torres",
    name: "Rachel Torres",
    role: "Customer Experience Analyst",
    credentials: "8+ years in CX Technology & Business Software",
    bio: "Rachel Torres specializes in customer experience technology and business software analysis. She helps organizations identify and implement the best CRM, help desk, and call center solutions for their needs.",
    image: "RT",
    specialties: [
      "Customer Experience",
      "Business Software",
      "Call Center Technology",
      "CRM Systems",
      "Help Desk Software",
    ],
    profileUrl: "https://www.toolnovahub.com/author/rachel-torres",
    socials: {
      linkedin: "https://linkedin.com/in/racheltorres-cx",
    },
  },
  {
    slug: "david-nakamura",
    name: "David Nakamura",
    role: "Marketing Technology Strategist",
    credentials: "10+ years in MarTech & Digital Marketing",
    bio: "David Nakamura is a marketing technology strategist who helps businesses scale their marketing through smart automation, email marketing platforms, and data-driven campaigns.",
    image: "DN",
    specialties: [
      "Marketing Automation",
      "MarTech",
      "Digital Marketing",
      "Email Marketing",
      "CRM",
      "Lead Generation",
    ],
    profileUrl: "https://www.toolnovahub.com/author/david-nakamura",
    socials: {
      linkedin: "https://linkedin.com/in/davidnakamura-martech",
      twitter: "https://twitter.com/davidnakamura",
    },
  },
  {
    slug: "james-richardson",
    name: "James Richardson",
    role: "Enterprise Security Consultant",
    credentials: "CISSP, 12+ years in Enterprise Cybersecurity",
    bio: "James Richardson is a CISSP-certified enterprise security consultant specializing in network security, VPN architecture, and Zero Trust frameworks for distributed remote teams.",
    image: "JR",
    specialties: [
      "Enterprise Security",
      "VPN Solutions",
      "Cybersecurity",
      "Network Security",
      "Zero Trust Architecture",
    ],
    profileUrl: "https://www.toolnovahub.com/author/james-richardson",
    socials: {
      linkedin: "https://linkedin.com/in/jamesrichardson-security",
    },
  },
  {
    slug: "david-chen",
    name: "David Chen",
    role: "Business Technology Consultant",
    credentials: "MBA, 10+ years in Digital Transformation",
    bio: "David Chen is a business technology consultant who helps small and mid-size businesses leverage AI automation and cloud solutions to reduce costs and improve operational efficiency.",
    image: "DC",
    specialties: [
      "Business AI",
      "Digital Transformation",
      "Process Automation",
      "Cloud Solutions",
      "Small Business Technology",
    ],
    profileUrl: "https://www.toolnovahub.com/author/david-chen",
    socials: {
      linkedin: "https://linkedin.com/in/davidchen-biztech",
      twitter: "https://twitter.com/davidchen_biz",
    },
  },
  {
    slug: "dr-emily-chen",
    name: "Dr. Emily Chen",
    role: "Academic Research Specialist",
    credentials: "PhD in Higher Education Policy",
    bio: "Dr. Emily Chen holds a doctorate in Higher Education Policy and specializes in evaluating online learning programs, MBA curricula, and accredited degree pathways for working professionals.",
    image: "EC",
    specialties: [
      "Higher Education",
      "Online Learning",
      "MBA Programs",
      "Academic Research",
      "Education Policy",
    ],
    profileUrl: "https://www.toolnovahub.com/author/dr-emily-chen",
    socials: {
      linkedin: "https://linkedin.com/in/dremilychenphd",
    },
  },
  {
    slug: "tech-education-analysts",
    name: "Tech & Education Analysts",
    role: "Corporate Training Specialists",
    credentials: "ToolNova Research Team",
    bio: "The Tech & Education Analysts team at ToolNova covers corporate learning management systems, training technology platforms, and workforce development solutions for enterprise clients.",
    image: "TE",
    specialties: [
      "Corporate Training",
      "LMS Platforms",
      "E-Learning",
      "Workforce Development",
      "HR Technology",
    ],
    profileUrl: "https://www.toolnovahub.com/author/tech-education-analysts",
  },
  {
    slug: "devops-engineering-team",
    name: "DevOps Engineering Team",
    role: "Enterprise Solutions Architects",
    credentials: "ToolNova Engineering Research Team",
    bio: "ToolNova's DevOps Engineering Team delivers expert analysis and hands-on comparisons of cloud platforms, CI/CD pipelines, and enterprise infrastructure decisions for technology leaders.",
    image: "DE",
    specialties: [
      "Cloud Computing",
      "DevOps",
      "Enterprise Architecture",
      "AWS",
      "Azure",
      "Google Cloud Platform",
    ],
    profileUrl: "https://www.toolnovahub.com/author/devops-engineering-team",
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}

export function getAllAuthors(): Author[] {
  return authors;
}
