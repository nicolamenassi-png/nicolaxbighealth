import { TrendingUp, Globe, LineChart, ArrowRight, Heart, Users, Building } from 'lucide-react';

export const ValueProposition = () => {
    const highlights = [
        {
            percentage: '200%',
            label: 'Average traffic growth',
            color: 'chart-1'
        },
        {
            percentage: '4-5%',
            label: 'Conversion rate achieved',
            color: 'chart-2'
        },
        {
            percentage: '100k+',
            label: 'Monthly visitors generated',
            color: 'chart-3'
        }
    ];

    const audiences = [
        {
            icon: Heart,
            title: 'For Mission-Driven Companies',
            description: 'Help organizations with meaningful missions reach the people who need them most through organic visibility and content strategy.',
            cta: 'Learn More',
            ctaLink: '#experience'
        },
        {
            icon: Users,
            title: 'For Healthcare & Wellness',
            description: 'Specialized experience in healthcare-adjacent industries, understanding the nuances of health content and audience needs.',
            cta: 'See Projects',
            ctaLink: '#projects'
        },
        {
            icon: Building,
            title: 'For Growing Teams',
            description: 'Build scalable SEO processes that grow with your organization, from startup to enterprise level.',
            cta: 'View Skills',
            ctaLink: '#skills'
        }
    ];

    return (
        <section id="about" className="section-padding bg-card">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="badge-bighealth mb-4">Why Work With Me</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        Digital access, consistent quality,{' '}
                        <span className="italic text-primary">proven results</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        I believe that great SEO is about connecting people with solutions that can genuinely 
                        improve their lives. That's why I'm passionate about working with companies like Big Health.
                    </p>
                </div>

                {/* Metrics row */}
                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {highlights.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="relative inline-block">
                                {/* Circular progress indicator */}
                                <svg className="w-32 h-32" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="hsl(var(--border))"
                                        strokeWidth="6"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke={`hsl(var(--${item.color}))`}
                                        strokeWidth="6"
                                        strokeLinecap="round"
                                        strokeDasharray={`${(70 + index * 10)} 283`}
                                        transform="rotate(-90 50 50)"
                                        className="transition-all duration-1000"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-foreground">{item.percentage}</span>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-3 max-w-[120px] mx-auto">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Value cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {audiences.map((item, index) => (
                        <div 
                            key={index}
                            className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-bighealth-hover transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                            <a 
                                href={item.ctaLink}
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                            >
                                {item.cta}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
