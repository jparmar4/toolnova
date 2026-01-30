import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0f1419]">
            <div className="container mx-auto px-4 md:px-6">
                <Breadcrumbs />
                {children}
            </div>
        </div>
    );
}
