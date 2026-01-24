import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "Nicola's approach to SEO is methodical and results-driven. He helped us double our organic traffic in just 12 months while maintaining quality leads.",
            author: "Marketing Director",
            company: "Stepstone Group",
            result: "100k+ monthly users achieved"
        },
        {
            quote: "Working with Nicola transformed our international presence. His multilingual SEO strategy opened up markets we couldn't reach before.",
            author: "CEO",
            company: "L10 Brand",
            result: "4-5% conversion rate"
        },
        {
            quote: "The blog strategy Nicola implemented became our main lead generation channel. We went from hundreds to thousands of qualified leads monthly.",
            author: "Growth Lead",
            company: "Gromia",
            result: "1,500 monthly leads"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="badge-bighealth mb-4">What Clients Say</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        Trusted by teams that value{' '}
                        <span className="italic text-primary">real results</span>
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div className="bg-accent-soft rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                        
                        {/* Quote icon */}
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                            <Quote className="w-8 h-8 text-primary" />
                        </div>

                        {/* Testimonial content */}
                        <div className="relative z-10">
                            <blockquote className="text-xl md:text-2xl text-foreground font-serif leading-relaxed mb-8">
                                &ldquo;{testimonials[currentIndex].quote}&rdquo;
                            </blockquote>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <p className="font-semibold text-foreground">
                                        {testimonials[currentIndex].author}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {testimonials[currentIndex].company}
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card">
                                    <span className="w-2 h-2 rounded-full bg-success" />
                                    <span className="text-sm font-medium text-foreground">
                                        {testimonials[currentIndex].result}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-foreground" />
                        </button>
                        
                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex 
                                            ? 'w-8 bg-primary' 
                                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-foreground" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
