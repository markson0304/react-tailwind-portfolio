import { ArrowRight, ExternalLink, Github, Award, Calendar, Users, Zap } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Financial RAG - Intelligent Investment Analysis",
    description: "Advanced Retrieval-Augmented Generation system combining financial reports, market data, and news for intelligent investment insights. Currently developing as demonstration of AI research capabilities.",
    image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Financial+RAG",
    tags: ["Python", "LangChain", "Transformers", "ChromaDB", "FastAPI"],
    status: "🚀 In Development",
    type: "research",
    achievements: [
      "Multi-source data fusion architecture",
      "Real-time financial data processing",
      "Semantic search across 100+ documents daily"
    ],
    demoUrl: "https://github.com/markson0304/financial-rag", // 即使在開發中也可以連到repo
    githubUrl: "https://github.com/markson0304/financial-rag",
    duration: "Dec 2024 - Present",
    category: "AI Research"
  },
  {
    id: 2,
    title: "Multimodal Fake News Detection",
    description: "Award-winning research project combining transformer-based text analysis with computer vision for fake news detection. Features custom attention mechanisms for cross-modal feature fusion.",
    image: "https://via.placeholder.com/400x200/10b981/ffffff?text=Fake+News+Detection",
    tags: ["PyTorch", "Transformers", "OpenCV", "KServe", "Go"],
    status: "🏆 Best Project Award",
    type: "research",
    achievements: [
      "MOST Undergraduate Research Grant recipient",
      "3 contributions to KServe open-source project",
      "Production deployment with microservices"
    ],
    demoUrl: "https://github.com/markson0304/fake-news-detection",
    githubUrl: "https://github.com/markson0304/fake-news-detection",
    duration: "Sep 2023 - Jun 2024",
    category: "AI Research",
    featured: true
  },
  {
    id: 3,
    title: "Worker Safety Monitoring System",
    description: "Computer vision system for migrant worker protection in Taiwan's fishing industry. Real-time facial recognition with privacy-preserving attendance tracking deployed in production.",
    image: "https://via.placeholder.com/400x200/f59e0b/ffffff?text=Worker+Safety",
    tags: ["Python", "OpenCV", "Flutter", "SQLite", "Computer Vision"],
    status: "✅ Production Deployed",
    type: "social-impact",
    achievements: [
      "Deployed for fishermen's associations",
      "Privacy-preserving design principles",
      "Cross-platform mobile application"
    ],
    demoUrl: "https://github.com/markson0304/worker-safety-monitoring",
    githubUrl: "https://github.com/markson0304/worker-safety-monitoring",
    duration: "Sep 2022 - Jun 2023",
    category: "Computer Vision"
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features dark mode, smooth animations, and optimized performance. Showcases full-stack development skills.",
    image: "/Portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    status: "🌐 Live",
    type: "development",
    achievements: [
      "Responsive design with modern UI",
      "Performance optimized",
      "Continuous deployment pipeline"
    ],
    demoUrl: "https://react-tailwind-portfolio-flax.vercel.app/",
    githubUrl: "https://github.com/markson0304/portfolio",
    duration: "Nov 2024",
    category: "Web Development"
  }
];

const categories = ["All", "AI Research", "Computer Vision", "Web Development"];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const getStatusColor = (status) => {
    if (status.includes("Award")) return "text-yellow-600 bg-yellow-100";
    if (status.includes("Development")) return "text-blue-600 bg-blue-100";
    if (status.includes("Live") || status.includes("Deployed")) return "text-green-600 bg-green-100";
    return "text-gray-600 bg-gray-100";
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "research": return "🔬";
      case "social-impact": return "🌍";
      case "development": return "💻";
      default: return "📝";
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Research projects and technical implementations showcasing AI/ML expertise, 
          open-source contributions, and real-world impact. Each project demonstrates 
          different aspects of my research and development capabilities.
        </p>

        {/* 分類篩選器 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background border border-border hover:border-primary/50"
              }`}
            >
              {category}
              <span className="ml-1 text-xs opacity-70">
                ({category === "All" ? projects.length : projects.filter(p => p.category === category).length})
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {/* 專案圖片區域 */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                
                {/* 專案類型標記 */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-2xl">{getTypeIcon(project.type)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured標記 */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Award size={12} />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* 標籤 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-md bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 標題和描述 */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 成就亮點 */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-primary">Key Achievements:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Zap size={10} className="text-primary mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 底部資訊 */}
                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.duration}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full"
                      title="View Project"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors duration-300 p-2 hover:bg-primary/10 rounded-full"
                      title="View Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 統計摘要 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {projects.filter(p => p.type === 'research').length}
            </div>
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
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Production Deployment</div>
          </div>
        </div>

        {/* GitHub連結 */}
        <div className="text-center mt-12">
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2 group"
            target="_blank"
            href="https://github.com/markson0304"
          >
            View All Projects on GitHub 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};