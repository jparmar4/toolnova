
import React from 'react';
import {
    FaLightbulb,
    FaQuestionCircle,
    FaArrowRight,
    FaShieldAlt,
    FaRocket,
    FaCheckCircle
} from 'react-icons/fa';

interface ToolRichContentProps {
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    benefits: { title: string; desc: string }[];
    faq: { question: string; answer: string }[];
}

export const ToolRichContent: React.FC<ToolRichContentProps> = ({
    title,
    description,
    steps,
    benefits,
    faq
}) => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-24 text-slate-800 dark:text-slate-200">
            {/* Overview */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    What is the {title}?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </section>

            {/* How to Use */}
            <section className="space-y-10">
                <div className="flex items-center gap-3">
                    <FaRocket className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">How to Use the {title}</h2>
                </div>
                <div className="grid gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                {i + 1}
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-lg">{step.title}</h3>
                                <p className="text-muted-foreground">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="space-y-10">
                <div className="flex items-center gap-3">
                    <FaLightbulb className="text-amber-500 text-2xl" />
                    <h2 className="text-2xl font-bold">Key Benefits</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                    {benefits.map((benefit, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center gap-2 text-primary">
                                <FaCheckCircle />
                                <h3 className="font-bold text-lg">{benefit.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="space-y-10">
                <div className="flex items-center gap-3">
                    <FaQuestionCircle className="text-primary text-2xl" />
                    <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-6">
                    {faq.map((item, i) => (
                        <div key={i} className="space-y-3 border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0">
                            <h3 className="font-bold text-xl">{item.question}</h3>
                            <p className="text-muted-foreground leading-relaxed italic">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Banner */}
            <section className="p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl border border-primary/20 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-xl">
                    <FaShieldAlt size={32} />
                </div>
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Safe & Secure Processing</h3>
                    <p className="text-muted-foreground">
                        Your data is processed locally in your browser when possible and never stored on our servers.
                        All AI processing is encrypted and adheres to strict privacy standards.
                    </p>
                </div>
            </section>
        </div>
    );
};
