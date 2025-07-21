import { useState } from "react"
import { cn } from "@/lib/utils"

// 整合的技能數據，包含AI/ML重點
const skills = [
  // AI & Machine Learning (新增類別)
  { name: "PyTorch", level: 85, category: "ai-ml", project: "Fake News Detection", icon: "🔥" },
  { name: "Transformers", level: 80, category: "ai-ml", project: "Multimodal AI", icon: "🤖" },
  { name: "OpenCV", level: 85, category: "ai-ml", project: "Computer Vision", icon: "👁️" },
  { name: "LangChain", level: 75, category: "ai-ml", project: "Financial RAG", icon: "🔗" },
  { name: "scikit-learn", level: 80, category: "ai-ml", project: "ML Pipeline", icon: "📊" },
  { name: "TensorFlow", level: 70, category: "ai-ml", project: "Deep Learning", icon: "🧠" },

  // Backend
  { name: "Python", level: 90, category: "backend", project: "AI Research", icon: "🐍" },
  { name: "Go", level: 70, category: "backend", project: "KServe Contrib", icon: "🚀" },
  { name: "Node.js", level: 75, category: "backend", project: "API Development", icon: "💚" },
  { name: "FastAPI", level: 80, category: "backend", project: "ML APIs", icon: "⚡" },

  // Frontend
  { name: "React", level: 85, category: "frontend", project: "Portfolio", icon: "⚛️" },
  { name: "JavaScript", level: 85, category: "frontend", project: "Web Apps", icon: "📜" },
  { name: "TypeScript", level: 75, category: "frontend", project: "Type Safety", icon: "🔷" },
  { name: "Tailwind CSS", level: 80, category: "frontend", project: "UI Design", icon: "🎨" },
  { name: "Flutter", level: 70, category: "frontend", project: "Mobile Apps", icon: "📱" },

  // Tools & Infrastructure
  { name: "Docker", level: 80, category: "tools", project: "Containerization", icon: "🐳" },
  { name: "Git", level: 85, category: "tools", project: "Version Control", icon: "📂" },
  { name: "Linux", level: 80, category: "tools", project: "System Admin", icon: "🐧" },
  { name: "Kubernetes", level: 65, category: "tools", project: "Orchestration", icon: "☸️" },
  { name: "ChromaDB", level: 70, category: "tools", project: "Vector Search", icon: "🗄️" }
];

// 更新的分類，加入AI/ML
const categories = ["all", "ai-ml", "backend", "frontend", "tools"]

const categoryLabels = {
  "all": "All Skills",
  "ai-ml": "AI & ML",
  "backend": "Backend", 
  "frontend": "Frontend",
  "tools": "Tools & Infra"
}

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )

    // 按等級排序，高到低
    const sortedSkills = filteredSkills.sort((a, b) => b.level - a.level)

    return (
        <section 
            id="skills"
            className="py-24 px-4 md:px-24 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                {/* 副標題 - 突出研究重點 */}
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Specialized in AI/ML research with strong full-stack development capabilities. 
                    Currently focusing on multimodal learning and RAG systems.
                </p>
                
                {/* 分類按鈕 */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                                "border-2 border-transparent",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground border-primary shadow-lg" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:border-primary/50"
                            )}
                        >
                            {categoryLabels[category]}
                            <span className="ml-2 text-xs opacity-70">
                                ({skills.filter(s => category === "all" || s.category === category).length})
                            </span>
                        </button>
                    ))}
                </div>

                {/* 技能網格 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="group bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30"
                        >
                            {/* 技能標題 */}
                            <div className="flex items-center mb-4">
                                <span className="text-2xl mr-3">{skill.icon}</span>
                                <div>
                                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        {skill.project}
                                    </p>
                                </div>
                            </div>
                            
                            {/* 進度條 */}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-2">
                                <div 
                                    className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                                    style={{ 
                                        width: `${skill.level}%`,
                                        animationDelay: `${key * 0.1}s`
                                    }}
                                />
                            </div>

                            {/* 等級顯示 */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-muted-foreground">
                                    Proficiency
                                </span>
                                <span className="text-sm font-semibold text-primary">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* 專案標籤 */}
                            <div className="mt-3 pt-3 border-t border-border/30">
                                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                                    {skill.project}
                                </span>
                            </div>
                        </div> 
                    ))}
                </div>

                {/* 底部統計 */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                        <div className="bg-card p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                                {skills.filter(s => s.category === 'ai-ml').length}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                AI/ML Skills
                            </div>
                        </div>
                        <div className="bg-card p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                                {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Avg Proficiency
                            </div>
                        </div>
                        <div className="bg-card p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                                {skills.filter(s => s.level >= 80).length}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Expert Level
                            </div>
                        </div>
                        <div className="bg-card p-4 rounded-lg">
                            <div className="text-2xl font-bold text-primary">
                                3
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Open Source
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}