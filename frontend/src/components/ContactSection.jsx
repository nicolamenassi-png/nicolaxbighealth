import { Mail, Download } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const ContactSection = () => {
    const handleDownloadVision = () => {
        toast.info('Vision PDF download starting...', {
            description: 'This is a demo - PDF would download here'
        });
    };

    return (
        <section id="contact" className="section-padding bg-primary">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    Ready to grow Big Health together?
                </h2>
                
                <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                    11 years transforming SEO strategies into real growth. 
                    Let&apos;s talk about how I can help Big Health reach millions more people 
                    who need accessible mental health care.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href="mailto:nicola.menassi@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        nicola.menassi@gmail.com
                    </a>
                    
                    <Button 
                        onClick={handleDownloadVision}
                        variant="outline"
                        className="px-8 py-4 h-auto bg-transparent border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Download My Vision
                    </Button>
                </div>
            </div>
        </section>
    );
};
