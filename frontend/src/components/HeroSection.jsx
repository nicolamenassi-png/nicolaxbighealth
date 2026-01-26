import { ArrowRight, Download, Sparkles, Heart, Brain } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = () => {
    const stats = [
        { number: '11+', label: 'Years in SEO', sublabel: 'Since 2014' },
        { number: '50+', label: 'Projects', sublabel: 'Clients & personal' },
        { number: '10+', label: 'Markets', sublabel: 'Europe to USA' },
        { number: '100+', label: 'Publications', sublabel: 'Ranked content' },
    ];

    return (
        <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-bighealth">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">
                                SEO Specialist × Mental Health Advocate
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                            The Strategic Value I Bring to{' '}
                            <span className="italic text-primary">Big Health</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Scaling digital therapeutics through technical excellence, E-E-A-T integrity, 
                            and patient-centered search intelligence.
                        </p>

                        {/* Single CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#my-vision-big-health" className="btn-bighealth text-base px-8 py-4">
                                My Vision for Big Health
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                                    <span className="text-success text-xs">✓</span>
                                </div>
                                Evidence-based techniques
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                                    <span className="text-success text-xs">✓</span>
                                </div>
                                International expertise
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                                    <span className="text-success text-xs">✓</span>
                                </div>
                                Results-driven approach
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Stats Cards */}
                    <div className="relative">
                        {/* Main visual card */}
                        <div className="relative bg-card rounded-3xl p-8 shadow-bighealth-hover">
                            {/* Profile header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                                    <span className="text-primary-foreground font-bold text-2xl font-serif">NM</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground">Nicola Menassi</h3>
                                    <p className="text-muted-foreground text-sm">International SEO Specialist</p>
                                </div>
                            </div>

                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <div 
                                        key={index}
                                        className="stat-card"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="stat-number">{stat.number}</div>
                                        <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
                                        <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-3 shadow-bighealth animate-float">
                                <div className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">Mental Health</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-3 shadow-bighealth animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-medium">SEO Strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
                        <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};
