import { MapPin, Calendar, Briefcase, ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';

export const ExperienceTimeline = () => {
    const experiences = [
        {
            period: '2024 - Present',
            type: 'Freelance',
            role: 'SEO Consultant',
            company: 'Digital Marketing Agencies & Direct Clients',
            location: 'Remote',
            highlights: [
                'SEO audits and strategies for various clients across Europe',
                'SEO strategy management for e-commerce, brands and B2B',
                'Data-driven content strategy development'
            ],
            color: 'chart-1'
        },
        {
            period: '2018 - 2023',
            type: 'Entrepreneur',
            role: 'Founder & SEO Manager',
            company: 'Personal Projects',
            location: 'Remote',
            highlights: [
                'Created and managed 20+ successful niche sites',
                'Generated €1M+ annual revenue on Amazon in 2020',
                'Reached 200k+ monthly organic visitors on portfolio'
            ],
            color: 'chart-2'
        },
        {
            period: '2018 - 2024',
            type: 'Client',
            role: 'SEO Consultant',
            company: 'L10 Brand',
            location: 'Remote',
            highlights: [
                'Built multilingual SEO strategy for tech accessory distributor',
                'Generated 250-300 qualified monthly leads from organic traffic',
                '4-5% conversion rate from visitors to clients'
            ],
            color: 'chart-3'
        },
        {
            period: '2017 - 2019',
            type: 'Collaborator',
            role: 'SEO Specialist',
            company: 'Stepstone Group',
            location: 'Remote',
            highlights: [
                'Turijobs: Doubled SEO traffic to 100k+ monthly users',
                'Achieved rankings for competitive keywords',
                'Good&Co: Doubled organic traffic in 12 months'
            ],
            color: 'chart-4'
        },
        {
            period: '2016 - 2017',
            type: 'Full-time',
            role: 'SEO Manager',
            company: 'Gromia',
            location: 'Milan',
            highlights: [
                'SEO traffic growth from hundreds to 100k monthly users',
                'Generated 1,200-1,500 qualified monthly leads',
                'Implemented complete blog strategy'
            ],
            color: 'chart-5'
        },
        {
            period: '2015 - 2016',
            type: 'Full-time',
            role: 'SEO Specialist',
            company: 'Digital Marketing Agency',
            location: 'London',
            highlights: [
                'Managed SEO campaigns for multiple clients',
                'Link building campaigns for UK clients',
                'Developed international SEO expertise'
            ],
            color: 'chart-1'
        },
        {
            period: '2014',
            type: 'Internship',
            role: 'SEO Intern',
            company: 'PokerStars',
            location: 'Remote',
            highlights: [
                'Content writing and on-page SEO',
                'Discovered passion for search optimization',
                'Learned SEO fundamentals'
            ],
            color: 'chart-2'
        }
    ];

    return (
        <section id="experience" className="section-padding bg-background">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="badge-bighealth mb-4">Professional Journey</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        11 years of SEO experience across{' '}
                        <span className="italic text-primary">diverse markets</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From London to Milan, from startups to enterprises. A journey driven by 
                        curiosity, results, and the desire to connect people with what they need.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central line - hidden on mobile, shown on md+ */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
                    
                    {/* Mobile line */}
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                                    <div className="timeline-dot" style={{ backgroundColor: `hsl(var(--${exp.color}))` }} />
                                </div>

                                {/* Content card */}
                                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="card-bighealth group hover:border-primary/20 border border-transparent">
                                        {/* Header */}
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <Badge variant="outline" className="badge-outline">
                                                {exp.type}
                                            </Badge>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        {/* Role & Company */}
                                        <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-primary font-medium">{exp.company}</span>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </div>
                                        </div>

                                        {/* Highlights */}
                                        <ul className="space-y-2">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: `hsl(var(--${exp.color}))` }} />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Personal note */}
                <div className="mt-16 bg-accent-soft rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
                        My Journey
                    </h3>
                    <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        I fell in love with SEO during an internship at PokerStars in 2014 and continued collaborating with them. 
                        Then I moved to London to work at a marketing agency, came back to Milan for a year and a half, 
                        and finally started collaborating with direct clients and personal projects. What started as curiosity 
                        became a passion that has allowed me to help dozens of clients achieve measurable growth.
                    </p>
                </div>
            </div>
        </section>
    );
};
