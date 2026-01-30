'use client';

import ToolLayout from '@/components/ToolLayout';
import { PremiumToolWrapper, defaultFeatures } from '@/components/PremiumToolWrapper';
import { FAQSection } from '@/components/FAQSection';
import { toolFAQs } from '@/lib/content-database';
import { Calendar, Cake, Clock, BarChart2, CalendarDays, Gift } from 'lucide-react';

function ageCalculator(input: string): string {
    try {
        let birthDate: Date;

        if (input.includes('-')) {
            birthDate = new Date(input);
        } else if (input.includes('/')) {
            const parts = input.split('/');
            if (parts.length === 3) {
                birthDate = new Date(`${parts[2]}-${parts[0]}-${parts[1]}`);
            } else {
                throw new Error('Invalid format');
            }
        } else {
            throw new Error('Invalid format');
        }

        if (isNaN(birthDate.getTime())) {
            return '❌ **Invalid Date Format**\n\nPlease enter a valid date in one of these formats:\n- YYYY-MM-DD (e.g., 2000-01-15)\n- MM/DD/YYYY (e.g., 01/15/2000)\n- DD/MM/YYYY (e.g., 15/01/2000)';
        }

        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        const diffTime = Math.abs(today.getTime() - birthDate.getTime());
        const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMonths = years * 12 + months;

        let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
        const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        return `🎂 **Age Calculation Results**

**Current Age:**
✅ ${years} years, ${months} months, ${days} days

**Detailed Breakdown:**
📅 Total Days Lived: ${totalDays.toLocaleString()} days
📆 Total Weeks Lived: ${totalWeeks.toLocaleString()} weeks
📊 Total Months Lived: ${totalMonths} months

**Birthday Information:**
🎈 Next Birthday: ${nextBirthday.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
⏰ Days Until Birthday: ${daysToNextBirthday} days

**Birth Date:** ${birthDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
**Calculated On:** ${today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
    } catch (error) {
        return '❌ **Invalid Date**\n\nPlease enter your birth date in one of these formats:\n- YYYY-MM-DD (e.g., 2000-01-15)\n- MM/DD/YYYY (e.g., 01/15/2000)\n- DD/MM/YYYY (e.g., 15/01/2000)';
    }
}

const relatedTools = [
    { name: 'Word Counter', slug: 'word-counter', icon: BarChart2, color: 'text-blue-600' },
    { name: 'Case Converter', slug: 'case-converter', icon: Clock, color: 'text-purple-600' },
    { name: 'Timetable Generator', slug: 'timetable-generator', icon: CalendarDays, color: 'text-green-600' },
    { name: 'Goal Planner', slug: 'goal-planner', icon: Gift, color: 'text-orange-600' },
];

const howItWorks = [
    { step: 1, title: 'Enter Date', desc: 'Your birthdate', icon: Calendar, color: 'from-blue-500 to-indigo-600' },
    { step: 2, title: 'Calculate', desc: 'Instant results', icon: Clock, color: 'from-purple-500 to-pink-600' },
    { step: 3, title: 'See Stats', desc: 'Days, weeks, more!', icon: Cake, color: 'from-green-500 to-emerald-600' },
];

const customFeatures = [
    { icon: Cake, title: 'Exact Age', desc: 'Years, months, days' },
    { icon: Calendar, title: 'Life Stats', desc: 'Total days lived' },
    { icon: Gift, title: 'Next Birthday', desc: 'Countdown days' },
];

export default function AgeCalculatorClient() {
    return (
        <PremiumToolWrapper
            toolName="Age Calculator"
            toolSlug="age-calculator"
            tagline="Calculate your exact age instantly"
            description="Find your precise age in years, months, and days. Plus discover how many days until your next birthday!"
            badge="Calculator"
            category="Utility Tools"
            categorySlug="utility-tools"
            features={customFeatures}
            howItWorks={howItWorks}
            testimonial={{
                quote: "Fun way to see exactly how many days I've lived! Great for birthday countdowns.",
                author: "Emma Wilson",
                role: "Teacher",
                initial: "E"
            }}
            relatedTools={relatedTools}
            ctaTitle="Calculate Your Age"
            ctaDescription="Know exactly how old you are - down to the day!"
        >
            <ToolLayout
                title=""
                description=""
                placeholder="📅 Enter your birthdate...

Formats accepted:
• 2000-01-15 (YYYY-MM-DD)
• 01/15/2000 (MM/DD/YYYY)
• 15/01/2000 (DD/MM/YYYY)"
                promptTemplate={(input) => input}
                inputRows={2}
                isNonAITool={true}
                nonAIHandler={ageCalculator}
                toolSlug="age-calculator"
                resultLabel="🎂 Age Results"
                generateButtonText="🎂 Calculate Age"
            />
            <div className="px-6 pb-6">
                <FAQSection faqs={toolFAQs['age-calculator']} />
            </div>
        </PremiumToolWrapper>
    );
}
