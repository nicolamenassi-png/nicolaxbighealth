import { useState } from 'react';
import { ArrowUpRight, Users, TrendingUp, Award, Briefcase, Lightbulb } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState('clients');

    const clientProjects = [
        {
            company: 'Stepstone Group',
            project: 'Turijobs',
            type: 'Recruiting platform, tourism sector',
            description: 'Editorial blog strategy',
            results: 'Doubled SEO traffic (+100k users)',
            achievement: 'First page for competitive keywords like "curriculum vitae"',
            color: 'chart-1'
        },
        {
            company: 'L10 Brand',
            project: 'Tech Lifestyle',
            type: 'Tech accessory distributor',
            description: 'Multilingual SEO Strategy',
            results: '250-300 monthly leads with 4-5% conversion rate',
            achievement: 'Ranking keywords in 4 languages',
            color: 'chart-2'
        },
        {
            company: 'Stepstone Group',
            project: 'Good & Co',
            type: 'Career personality platform',
            description: 'Editorial blog strategy',
            results: 'Doubled SEO traffic in 12 months',
            achievement: 'Rapid US market growth',
            color: 'chart-3'
        },
        {
            company: 'Gromia',
            project: 'Real Estate Platform',
            type: 'Real estate sales and rentals',
            description: 'Complete SEO overhaul',
            results: 'Traffic from hundreds to 100k users',
            achievement: '1,200-1,500 monthly leads generated via blog',
            color: 'chart-4'
        }
    ];

    const personalProjects = [
        {
            company: 'Personal Portfolio',
            project: 'Niche Sites',
            type: '20+ successful niche sites',
            description: 'Content & affiliate strategy',
            results: '€1M+ annual revenue (Amazon 2020)',
            achievement: '200k+ monthly organic visitors',
            color: 'chart-5'
        },
        {
            company: 'Coolbox Store',
            project: 'Coolbox',
            type: 'Gift shop in Italy',
            description: 'Editorial blog strategy',
            results: 'From 0 to 20K/month traffic in 6 months',
            achievement: 'New project launch with rapid organic growth',
            color: 'chart-1'
        }
    ];

    const ProjectCard = ({ project, index }) => (
        <div 
            className="group bg-card rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover:shadow-bighealth-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Header with color accent */}
            <div 
                className="h-2" 
                style={{ backgroundColor: `hsl(var(--${project.color}))` }}
            />
            
            <div className="p-6">
                {/* Company & Project */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <span className="text-sm text-muted-foreground">{project.company}</span>
                        <h3 className="text-xl font-semibold text-foreground">{project.project}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                    </div>
                </div>

                {/* Type & Description */}
                <p className="text-sm text-muted-foreground mb-4">{project.type}</p>
                <p className="text-foreground mb-6">{project.description}</p>

                {/* Results */}
                <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <TrendingUp className="w-3.5 h-3.5 text-success" />
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Results</span>
                            <p className="text-foreground font-medium">{project.results}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Award className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Achievement</span>
                            <p className="text-foreground font-medium">{project.achievement}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section id="projects" className="section-padding bg-warm">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="badge-bighealth mb-4">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        My Projects
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Experience across personal ventures and corporate clients in diverse sectors and markets.
                    </p>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="clients" className="w-full">
                    <div className="flex justify-center mb-10">
                        <TabsList className="bg-card p-1 rounded-full shadow-bighealth">
                            <TabsTrigger 
                                value="clients" 
                                className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                            >
                                <Briefcase className="w-4 h-4 mr-2" />
                                Client Projects
                            </TabsTrigger>
                            <TabsTrigger 
                                value="personal"
                                className="px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                            >
                                <Lightbulb className="w-4 h-4 mr-2" />
                                Personal Projects
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="clients" className="mt-0">
                        <div className="grid md:grid-cols-2 gap-6">
                            {clientProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="personal" className="mt-0">
                        <div className="grid md:grid-cols-2 gap-6">
                            {personalProjects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};
