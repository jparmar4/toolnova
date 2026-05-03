export default function Loading() {
    return (
        <div className="w-full min-h-screen animate-pulse">
            <div className="bg-gradient-to-br from-primary/80 via-blue-600/80 to-indigo-700/80 h-[500px]" />
            <div className="bg-[#f8f9fb] py-24">
                <div className="max-w-[1200px] mx-auto px-6">
                    <div className="h-8 w-32 bg-slate-200 rounded-full mx-auto mb-4" />
                    <div className="h-12 w-64 bg-slate-200 rounded-lg mx-auto mb-16" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-64 bg-white rounded-2xl shadow-lg" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}