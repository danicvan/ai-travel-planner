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

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
                    Gerencie seus projetos <br className="md:block" />
                    <span className="bg-gradient-to-r from-primary to-boardly-blue bg-clip-text text-transparent">no Trello de forma inteligente!</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}> 
                    Aproveite o poder da IA para automatizar tarefas,
                    priorizar demandas e otimizar seu fluxo de trabalho.  
                </p>
                
            </div>
        </div>
    );
}