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
        specialties: ["EdTech", "Student Productivity", "E-Learning", "AI for Education"],
        profileUrl: "https://www.toolnovahub.com/authors/sarah-mitchell",
        socials: {
            twitter: "https://twitter.com/sarahmitchell_edu",
            linkedin: "https://linkedin.com/in/sarahmitchell"
        }
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
            linkedin: "https://linkedin.com/in/marcuschen"
        }
    },
    {
        slug: "emily-parker",
        name: "Dr. Emily Parker",
        role: "Research Consultant",
        credentials: "PhD in Information Science",
        bio: "Dr. Parker holds a PhD in Information Science and consults on automated research methodologies. She bridges the gap between academic rigor and AI efficiency.",
        image: "EP",
        specialties: ["Research Methodology", "Information Synthesis", "Academic Writing", "AI Research Tools"],
        profileUrl: "https://www.toolnovahub.com/authors/emily-parker",
        socials: {
            linkedin: "https://linkedin.com/in/emilyparker_phd"
        }
    }
];

export function getAuthor(slug: string): Author | undefined {
    return authors.find(author => author.slug === slug);
}

export function getAllAuthors(): Author[] {
    return authors;
}
