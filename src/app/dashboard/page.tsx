import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/lib/db";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { FileText, Clock, Trash2, Repeat, ExternalLink } from "lucide-react";

export const metadata = {
  title: "My Dashboard | ToolNova",
  description: "View your generation history and saved tool outputs.",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  // Fetch history for the logged-in user
  const history = await db.generationHistory.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 50, // Limit to recent 50 for performance
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white font-heading">
            My Dashboard
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            View your recent tool generations and history.
          </p>
        </div>

        {history.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-12 text-center">
            <div className="mx-auto h-16 w-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">No history yet</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              You haven't generated anything using our AI tools yet.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-purple-700"
            >
              Explore Tools
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <ul className="divide-y divide-slate-200 dark:divide-slate-800">
              {history.map((item) => {
                let parsedPrompt = item.prompt;
                try {
                  const data = JSON.parse(item.prompt);
                  parsedPrompt = data.prompt || item.prompt;
                } catch (e) {
                  // Fallback to raw string if not JSON
                }

                return (
                  <li key={item.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-700 dark:text-purple-400">
                            {item.toolSlug.replace(/-/g, ' ').toUpperCase()}
                          </span>
                          <span className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="mr-1 h-3 w-3" />
                            {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white truncate mb-1">
                          Prompt: {parsedPrompt.substring(0, 100)}...
                        </h4>
                        <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 rounded p-3 mt-3 border border-slate-100 dark:border-slate-800">
                          {item.response.substring(0, 200)}...
                        </div>
                      </div>
                      
                      <div className="flex shrink-0 gap-2">
                        <Link
                          href={`/tools/${item.toolSlug}`}
                          className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open Tool
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
