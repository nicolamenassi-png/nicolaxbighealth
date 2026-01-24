import { Heart, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const exploreLinks = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ];

    const resourceLinks = [
        { label: 'Download CV', href: '#' },
        { label: 'My Vision PDF', href: '#vision-pdf' },
        { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    ];

    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="py-12 md:py-16 grid md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg font-serif">NM</span>
                            </div>
                            <span className="font-semibold text-lg">Nicola Menassi</span>
                        </div>
                        <p className="text-background/70 max-w-sm mb-6 leading-relaxed">
                            International SEO Specialist passionate about connecting people with 
                            solutions that improve their lives. 11+ years of experience across 
                            diverse markets.
                        </p>
                        <a 
                            href="mailto:nicola.menassi@gmail.com"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            nicola.menassi@gmail.com
                        </a>
                    </div>

                    {/* Explore column */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {exploreLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="text-background/70 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources column */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {resourceLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href}
                                        className="inline-flex items-center gap-1 text-background/70 hover:text-primary transition-colors"
                                        {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                    >
                                        {link.label}
                                        {link.external && <ExternalLink className="w-3 h-3" />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-background/50">
                        © {currentYear} Nicola Menassi · All rights reserved
                    </p>
                    <p className="text-sm text-background/50 flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-primary" /> for Big Health
                    </p>
                </div>
            </div>
        </footer>
    );
};
