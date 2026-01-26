import { Wrench, Brain, MessageSquare, Flag } from 'lucide-react';
import { Badge } from './ui/badge';

export const SkillsSection = () => {
    const tools = [
        'Google Search Console',
        'Google Analytics',
        'Screaming Frog',
        'SEMrush',
        'Ahrefs',
        'Majestic',
        'DataForSEO',
        'WordPress',
        'Shopify',
        'N8N / Make'
    ];

    const expertise = [
        { name: 'International SEO', highlight: true },
        { name: 'Affiliate Marketing', highlight: false },
        { name: 'Content Strategy', highlight: true },
        { name: 'Blogging & Editorial', highlight: false },
        { name: 'Copywriting', highlight: false },
        { name: 'Link Building', highlight: true },
        { name: 'A/B Testing', highlight: false },
        { name: 'Analytics & Data', highlight: true },
        { name: 'Technical Audits', highlight: true },
        { name: 'GEO (Generative Engine Optimization)', highlight: true }
    ];

    const languages = [
        { name: 'Italian', level: 'Native', flag: '🇮🇹', percentage: 100 },
        { name: 'English', level: 'Fluent', flag: '🇬🇧', percentage: 95 },
        { name: 'Spanish', level: 'Fluent', flag: '🇪🇸', percentage: 90 },
        { name: 'German', level: 'Basic', flag: '🇩🇪', percentage: 30 }
    ];

    return (
        <section id="skills" className="section-padding bg-card">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="badge-bighealth mb-4">Capabilities</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A complete toolkit built over 11+ years of hands-on experience in SEO and digital marketing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Tools & Platforms */}
                    <div className="bg-background rounded-2xl p-8 border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                                <Wrench className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Tools & Platforms</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool, index) => (
                                <Badge 
                                    key={index}
                                    variant="outline"
                                    className="px-4 py-2 text-sm bg-card hover:bg-accent-soft hover:border-primary/30 transition-all cursor-default"
                                >
                                    {tool}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Core Expertise */}
                    <div className="bg-background rounded-2xl p-8 border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                                <Brain className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground">Core Expertise</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                            {expertise.map((skill, index) => (
                                <Badge 
                                    key={index}
                                    className={`px-4 py-2 text-sm transition-all cursor-default ${
                                        skill.highlight 
                                            ? 'bg-primary text-primary-foreground hover:bg-primary-hover' 
                                            : 'bg-card border border-border text-foreground hover:bg-accent-soft'
                                    }`}
                                >
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Languages */}
                <div className="mt-8 bg-background rounded-2xl p-8 border border-border">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Languages</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {languages.map((lang, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-3">{lang.flag}</div>
                                <h4 className="font-semibold text-foreground mb-1">{lang.name}</h4>
                                <p className="text-sm text-muted-foreground mb-3">{lang.level}</p>
                                
                                {/* Progress bar */}
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-primary rounded-full transition-all duration-1000"
                                        style={{ width: `${lang.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
