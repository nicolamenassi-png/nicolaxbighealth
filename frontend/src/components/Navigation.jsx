import { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#roadmap', label: 'Strategy' },
        { href: '#skills', label: 'Skills' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-card/95 backdrop-blur-md shadow-bighealth' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg font-serif">NM</span>
                        </div>
                        <span className="hidden sm:block font-semibold text-foreground">
                            Nicola Menassi
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <a 
                            href="#contact" 
                            className="btn-ghost text-sm"
                        >
                            <Mail className="w-4 h-4" />
                            Contact
                        </a>
                        <Button className="btn-bighealth">
                            <Download className="w-4 h-4" />
                            My Vision for Big Health
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-foreground" />
                        ) : (
                            <Menu className="w-6 h-6 text-foreground" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-card shadow-bighealth-hover border-t border-border">
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block text-foreground font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-border space-y-3">
                                <a 
                                    href="#contact" 
                                    className="btn-ghost w-full justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact Me
                                </a>
                                <Button className="btn-bighealth w-full justify-center">
                                    <Download className="w-4 h-4" />
                                    My Vision for Big Health
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
