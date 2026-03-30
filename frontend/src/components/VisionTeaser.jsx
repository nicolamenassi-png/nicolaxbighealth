import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VisionTeaser = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                {/* Badge */}
                <span className="badge-bighealth mb-6 inline-block">My Vision for Big Health</span>
                
                {/* Main Quote */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed mb-8">
                    In 2026, visibility means something different. I can build organic systems that work across search engines, AI models, and the spaces in between — combining clinical authority, technical precision, and AI-augmented workflows to connect the right people with evidence-based treatment.
                </blockquote>

                {/* CTA Button */}
                <Link 
                    to="/vision" 
                    className="btn-bighealth text-base px-8 py-4 inline-flex"
                >
                    Read my vision for Big Health
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
};
