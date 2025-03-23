export default function Hero () {
    return (
        <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-[50%] -top-[100%] w-[200%] h-[300%] bg-gradient-to-br from-boardly-blue/20 via-transparent to-boardly-green/20 opacity-50 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative">
                <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        Potencialize seu Trello com Inteligência Artificial!
                    </span>
                </div>
            </div>
        </div>
    );
}