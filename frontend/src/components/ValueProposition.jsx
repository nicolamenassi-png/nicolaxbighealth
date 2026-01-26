import { Shield, Users, Globe, ArrowRight } from 'lucide-react';

export const ValueProposition = () => {
    const highlights = [
        {
            icon: Shield,
            title: 'Clinical Integrity & E-E-A-T',
            subtitle: '100% compliance with YMYL guidelines to protect visibility during Google Updates.',
            color: 'chart-1'
        },
        {
            icon: Users,
            title: 'Patient Search Intent',
            subtitle: 'Mapping complex mental health needs to ensure patients find safe, evidence-based digital treatments.',
            color: 'chart-2'
        },
        {
            icon: Globe,
            title: 'Scalable Evidence-Based Reach',
            subtitle: 'Building a technical infrastructure to scale non-drug treatments to millions worldwide.',
            color: 'chart-3'
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
                        improve their lives. That&apos;s why I&apos;m passionate about working with companies like Big Health.
                    </p>
                </div>

                {/* Value Circles */}
                <div className="flex flex-wrap justify-center gap-12 lg:gap-16 mb-16">
                    {highlights.map((item, index) => (
                        <div key={index} className="text-center max-w-xs">
                            <div className="relative inline-block mb-6">
                                {/* Circular container */}
                                <div 
                                    className="w-36 h-36 rounded-full flex items-center justify-center"
                                    style={{ 
                                        background: `linear-gradient(135deg, hsl(var(--${item.color}) / 0.15) 0%, hsl(var(--${item.color}) / 0.05) 100%)`,
                                        border: `3px solid hsl(var(--${item.color}) / 0.3)`
                                    }}
                                >
                                    <item.icon 
                                        className="w-14 h-14" 
                                        style={{ color: `hsl(var(--${item.color}))` }}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.subtitle}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a 
                        href="#my-vision-big-health"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
                    >
                        See my strategic approach
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
