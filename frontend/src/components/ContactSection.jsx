import { useState } from 'react';
import { Mail, Download, Send, ArrowRight, Heart, Sparkles, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast.success('Message sent! I will get back to you soon.');
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleDownloadVision = () => {
        toast.info('Vision PDF download starting...', {
            description: 'This is a demo - PDF would download here'
        });
    };

    return (
        <section id="contact" className="section-padding bg-primary relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - CTA Content */}
                    <div className="text-primary-foreground">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm font-medium">Let&apos;s Work Together</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                            Ready to help bring{' '}
                            <span className="italic">millions</span> back to good mental health?
                        </h2>

                        <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                            I am passionate about using SEO to connect people with solutions that genuinely 
                            improve their lives. Let&apos;s talk about how I can help Big Health reach more 
                            people who need accessible mental health care.
                        </p>

                        {/* PDF Download Card */}
                        <div id="vision-pdf" className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary-foreground/20">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg mb-1">My Vision for Big Health</h3>
                                    <p className="text-primary-foreground/70 text-sm mb-4">
                                        Download my detailed proposal on how I would approach SEO strategy 
                                        for Big Health, including specific tactics for the mental health space.
                                    </p>
                                    <Button 
                                        onClick={handleDownloadVision}
                                        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-6"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Download PDF
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Quick contact */}
                        <div className="flex items-center gap-4">
                            <span className="text-primary-foreground/70">Or reach me directly:</span>
                            <a 
                                href="mailto:nicola.menassi@gmail.com"
                                className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:underline"
                            >
                                <Mail className="w-4 h-4" />
                                nicola.menassi@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-card rounded-3xl p-8 shadow-bighealth-hover">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold text-foreground">Send a Message</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Name*
                                    </label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="bg-background border-border focus:border-primary focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Email*
                                    </label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="bg-background border-border focus:border-primary focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Company
                                </label>
                                <Input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Big Health"
                                    className="bg-background border-border focus:border-primary focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Message*
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell me about the opportunity..."
                                    className="bg-background border-border focus:border-primary focus:ring-primary resize-none"
                                />
                            </div>

                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="btn-bighealth w-full text-base py-6"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
