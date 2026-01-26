import { 
    Search, 
    Activity, 
    Target, 
    Layers, 
    Link2, 
    Sparkles,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';

const pillars = [
    {
        icon: Search,
        number: '01',
        title: 'Comprehensive Technical Mapping & Infrastructure',
        description: 'A massive foundational phase involving a 360-degree technical mapping of the entire digital ecosystem. From deep-dive architectural audits and rendering optimization to accessibility and crawlability, I establish a flawless, clinical-grade infrastructure that serves as the bedrock for all future growth.',
        tags: ['Technical SEO', 'Architecture', 'Crawlability']
    },
    {
        icon: Activity,
        number: '02',
        title: 'Real-Time Governance & Automated Monitoring',
        description: 'Moving beyond point-in-time audits to a model of continuous vigilance. I build bespoke monitoring architectures and advanced data-visualization systems to track every critical technical signal—from crawl health and indexing to status-code integrity—ensuring the platform remains resilient and high-performing in real-time.',
        tags: ['Dashboards', 'Automation', 'Monitoring']
    },
    {
        icon: Target,
        number: '03',
        title: 'Market Intelligence & Competitor Gap',
        description: 'Granular analysis of the UK/US mental health landscape. Identifying "low-hanging fruit" and untapped content clusters where competitors are weak, aiming to scale from the current 10k visits to 100k+.',
        tags: ['Competitor Analysis', 'Market Research', 'Growth']
    },
    {
        icon: Layers,
        number: '04',
        title: 'Semantic Authority (Silo Structure)',
        description: 'Deployment of a strict Silo/Cluster strategy to dominate core topics like anxiety and insomnia. Strengthening existing assets and building new high-intent landing pages to satisfy E-E-A-T and patient needs.',
        tags: ['Content Strategy', 'E-E-A-T', 'Topic Clusters']
    },
    {
        icon: Link2,
        number: '05',
        title: 'Creative Outreach & Authority Building',
        description: 'Innovation in link earning. Creating data-driven White Papers and unique digital assets to secure high-tier press mentions and authoritative backlinks, moving away from traditional, low-impact outreach.',
        tags: ['Link Building', 'Digital PR', 'White Papers']
    },
    {
        icon: Sparkles,
        number: '06',
        title: 'GEO Strategy (The Future of Search)',
        description: 'Future-proofing Big Health for the AI era. Optimizing content for LLMs and Generative Search results (GEO) to ensure we are the top cited source in AI-driven patient journeys.',
        tags: ['AI Optimization', 'GEO', 'Future-Proofing']
    }
];

const PillarCard = ({ pillar, index }) => {
    const Icon = pillar.icon;
    
    return (
        <div className="group relative bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden h-full flex flex-col">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-6 lg:p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-accent-soft flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                            <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <span className="text-4xl font-serif font-bold text-border group-hover:text-primary/30 transition-colors duration-300">
                            {pillar.number}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 leading-tight">
                    {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {pillar.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {pillar.tags.map((tag, idx) => (
                        <span 
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const StrategicRoadmap = () => {
    return (
        <section id="my-vision-big-health" className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="badge-bighealth mb-4">Operational Roadmap</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        My Vision for Big Health
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A comprehensive 6-pillar strategy designed to transform Big Health&apos;s 
                        organic presence and establish market leadership in digital mental health care.
                    </p>
                </div>

                {/* Pillars Grid with proper gap */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-accent-soft rounded-2xl">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-primary" />
                            <span className="text-foreground font-medium">
                                Ready to implement this strategy?
                            </span>
                        </div>
                        <a 
                            href="#contact" 
                            className="btn-bighealth"
                        >
                            Let&apos;s Discuss
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
