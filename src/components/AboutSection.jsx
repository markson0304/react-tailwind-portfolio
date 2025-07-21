import { Brain, Code, Briefcase, Award, Github, Mail, FileText } from "lucide-react";

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                
                {/* 副標題 */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    AI Researcher & Developer passionate about creating intelligent systems 
                    that solve real-world problems through cutting-edge technology.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* 左側：個人介紹 */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                AI Researcher & <span className="text-primary">Full-Stack Developer</span>
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mb-6"></div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                            I'm a Computer Science student at National Chung Cheng University with a passion for 
                            <span className="text-primary font-semibold"> artificial intelligence and machine learning research</span>. 
                            My work focuses on multimodal learning, natural language processing, and practical AI applications 
                            that create meaningful impact.
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">
                            Currently developing a <span className="text-primary font-semibold">Financial RAG system</span> 
                            and seeking AI research internship opportunities. I have experience in contributing to 
                            <span className="text-primary font-semibold"> open-source projects</span> like KServe, 
                            and my research has been recognized with academic awards and government funding.
                        </p>

                        {/* 核心數據 */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-y border-border/30">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">3</div>
                                <div className="text-sm text-muted-foreground">Research Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">1</div>
                                <div className="text-sm text-muted-foreground">Best Project Award</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">3</div>
                                <div className="text-sm text-muted-foreground">Open Source Contributions</div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a 
                                href="#contact" 
                                className="cosmic-button flex items-center justify-center gap-2"
                            >
                                <Mail size={18} />
                                Get In Touch
                            </a>

                            <a 
                                href="/resume.pdf" 
                                target="_blank"
                                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                            >
                                <FileText size={18} />
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* 右側：專業領域卡片 */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* AI Research */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">AI Research & Development</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Specialized in multimodal learning, transformer architectures, and RAG systems. 
                                        Experience with PyTorch, Transformers, and production ML deployment using KServe.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">PyTorch</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Transformers</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">RAG</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Full-Stack Development */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Full-Stack Development</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Proficient in modern web technologies including React, Python FastAPI, and Go. 
                                        Built end-to-end applications with focus on performance, scalability, and user experience.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">React</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Python</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Go</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Research & Academic */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Award className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Academic Excellence</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        MOST Undergraduate Research Grant recipient with Best Project Award. 
                                        Active contributor to open-source AI infrastructure and research community.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">MOST Grant</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">Open Source</span>
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">KServe</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Career Objectives */}
                        <div className="gradient-border p-6 card-hover bg-primary/5">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg mb-2">Career Focus</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        <span className="text-primary font-medium">Currently seeking AI Research Internship opportunities</span> 
                                        for Summer 2025. Interested in positions involving multimodal AI, NLP, 
                                        or practical AI system development.
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-green-600 text-sm font-medium">Available for internships</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 底部引用或個人理念 */}
                <div className="mt-16 text-center">
                    <blockquote className="text-lg md:text-xl text-muted-foreground italic max-w-3xl mx-auto">
                        "I believe AI should be accessible, ethical, and designed to augment human capabilities 
                        rather than replace them. My goal is to contribute to research that makes AI more 
                        interpretable, reliable, and beneficial for society."
                    </blockquote>
                    <cite className="text-primary font-medium mt-4 block">- Kuan-Yu Chen</cite>
                </div>
            </div>
        </section>
    );
}