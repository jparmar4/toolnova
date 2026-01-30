export interface Author {
    slug: string;
    name: string;
    role: string;
    bio: string;
    image: string; // Initials or image URL
    socials?: {
        twitter?: string;
        linkedin?: string;
        website?: string;
    };
    specialties: string[];
}

export const authors: Author[] = [
    {
        slug: "sarah-mitchell",
        name: "Sarah Mitchell",
        role: "Education Technology Writer",
        bio: "Sarah is a former educator turned tech writer who specializes in AI tools for student productivity. She has tested over 200 AI applications for learning enhancement.",
        image: "SM",
        specialties: ["EdTech", "Student Productivity", "E-Learning"],
        socials: {
            twitter: "https://twitter.com/sarahmitchell_edu",
            linkedin: "https://linkedin.com/in/sarahmitchell"
        }
    },
    {
        slug: "marcus-chen",
        name: "Marcus Chen",
        role: "Content Strategy Director",
        bio: "Marcus helps creators and businesses scale their content production using ethical AI workflows. He focuses on maintaining human voice while leveraging automation.",
        image: "MC",
        specialties: ["Content Strategy", "AI Writing", "SEO"],
        socials: {
            twitter: "https://twitter.com/marcuschen_ai",
            linkedin: "https://linkedin.com/in/marcuschen"
        }
    },
    {
        slug: "emily-parker",
        name: "Dr. Emily Parker",
        role: "Research Consultant",
        bio: "Dr. Parker holds a PhD in Information Science and consults on automated research methodologies. She bridges the gap between academic rigor and AI efficiency.",
        image: "EP",
        specialties: ["Research Methodology", "Information Synthesis", "Academic Writing"],
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
