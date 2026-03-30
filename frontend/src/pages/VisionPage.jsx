import { Navigation } from '@/components/Navigation';
import { ArrowRight, Mail, Search, Activity, Target, Layers, Link2, Sparkles, CheckCircle2, Brain, Zap, BarChart3, Globe, Shield } from 'lucide-react';

const SectionHeader = ({ badge, title, subtitle }) => (
    <div className="mb-12">
        {badge && <span className="badge-bighealth mb-4 inline-block">{badge}</span>}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            {title}
        </h2>
        {subtitle && (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {subtitle}
            </p>
        )}
    </div>
);

const LayerCard = ({ number, title, description, examples }) => (
    <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {number}
            </span>
            <h4 className="font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-muted-foreground mb-3">{description}</p>
        {examples && (
            <p className="text-sm text-muted-foreground/80 italic">
                {examples}
            </p>
        )}
    </div>
);

const AISystemCard = ({ icon: Icon, title, description }) => (
    <div className="bg-accent-soft rounded-2xl p-6 hover:bg-primary/10 transition-colors duration-300">
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
);

const EEATAsset = ({ title, description }) => (
    <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
            <h4 className="font-semibold text-foreground mb-1">{title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const TimelineItem = ({ week, tasks }) => (
    <div className="flex gap-6">
        <div className="w-24 flex-shrink-0">
            <span className="badge-bighealth">{week}</span>
        </div>
        <div className="flex-1">
            <p className="text-muted-foreground leading-relaxed">{tasks}</p>
        </div>
    </div>
);

export const VisionPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 md:px-8 bg-hero-gradient overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
                    </div>
                    
                    <div className="max-w-4xl mx-auto relative z-10">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
                            My Vision for Big Health
                        </h1>
                        
                        <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 font-serif italic border-l-4 border-primary pl-6">
                            "Every night, someone searches 'why can't I sleep even when I'm tired'. Every morning, someone searches 'how to stop worrying about everything'. These aren't keyword opportunities. They're people at their most vulnerable — and they deserve to find Sleepio and Daylight."
                        </blockquote>
                        
                        <p className="text-lg text-muted-foreground">
                            A strategic approach to organic growth, GEO, and AI-augmented operations for Big Health.
                        </p>
                    </div>
                </section>

                {/* Section 1 - The Opportunity */}
                <section className="section-padding">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader 
                            badge="The Opportunity"
                            title="The competitive advantage Big Health isn't fully using yet"
                        />
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Most players occupying the SERPs for queries like "insomnia treatment" or "anxiety help" are wellness generalists (Calm, Headspace) with no clinical backing, pharmaceutical brands pushing drug-based solutions, or generic health publishers (WebMD, Healthline) with high volume but zero conversion intent.
                            </p>
                            
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Big Health has a structural competitive advantage none of them can replicate: <strong className="text-foreground">100+ peer-reviewed publications</strong>, <strong className="text-foreground">NHS Scotland as a partner</strong>, <strong className="text-foreground">real RCT data</strong>. In a world where Google's quality raters evaluate medical content against E-E-A-T standards, this is an asset you can't buy — you build it. Big Health already has it.
                            </p>
                            
                            <div className="bg-primary/10 rounded-2xl p-6 mt-8">
                                <p className="text-foreground font-medium">
                                    <strong>The gap:</strong> it hasn't yet been fully translated into organic visibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Search Journey */}
                <section className="section-padding bg-warm">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader 
                            badge="Sleepio & Daylight"
                            title="Where patients search, and where the real opportunity lives"
                            subtitle="Insomnia and anxiety are searched in three distinct layers, each with different intent — and different strategic value."
                        />
                        
                        <div className="space-y-6">
                            <LayerCard 
                                number="1"
                                title="The symptom (high volume, low intent)"
                                description="These users don't yet know CBT-I exists. Content here educates, not sells."
                                examples={`"can't sleep", "waking up at 3am", "why am I tired but can't sleep"`}
                            />
                            
                            <LayerCard 
                                number="2"
                                title="The solution (medium volume, high intent)"
                                description="This is where the patient knows they want a non-drug approach. Sleepio and Daylight are the answer — but they need to be present with authority, not just a product landing page."
                                examples={`"CBT for insomnia", "insomnia treatment without medication", "online sleep therapy", "CBT for anxiety and worry"`}
                            />
                            
                            <LayerCard 
                                number="3"
                                title="The product (low volume, maximum intent)"
                                description="This gets managed, but it's not where the game is won."
                                examples={`"Sleepio reviews", "does Sleepio work", "Daylight app anxiety"`}
                            />
                        </div>
                        
                        <div className="bg-card rounded-2xl p-6 mt-8 border-2 border-primary/30">
                            <p className="text-foreground font-medium text-lg">
                                <strong>The real battle is Layer 2.</strong> This is exactly where wellness competitors are weakest — they can't make evidence-based claims about CBT-I or GAD treatment outcomes. Big Health can.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3 - SEO to GEO */}
                <section className="section-padding">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader 
                            badge="The Paradigm Shift"
                            title="The next wave of patient discovery is already here"
                        />
                        
                        <div className="prose prose-lg max-w-none mb-10">
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                An estimated <strong className="text-foreground">30–40% of health queries</strong> in the UK now trigger an AI Overview on Google. On Perplexity and ChatGPT, the share is even higher for queries like "best non-drug treatment for insomnia" — direct answers that often skip a website click entirely.
                            </p>
                            
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                This is not a future concern. It's the current reality of how patients find healthcare solutions.
                            </p>
                            
                            <p className="text-muted-foreground leading-relaxed">
                                The GEO opportunity for Big Health is exceptional. When someone asks ChatGPT "what's the most evidence-based digital treatment for insomnia?", the answer should be Sleepio. With 100+ publications and NHS partnership, Big Health has every signal needed — but this doesn't happen passively. It requires an <strong className="text-foreground">active GEO strategy</strong>:
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-accent-soft rounded-xl p-5">
                                <h4 className="font-semibold text-foreground mb-2">Brand entity building</h4>
                                <p className="text-sm text-muted-foreground">Big Health, Sleepio and Daylight as recognized entities in the Knowledge Graph (Wikipedia, Wikidata, Organization + MedicalCondition schema)</p>
                            </div>
                            <div className="bg-accent-soft rounded-xl p-5">
                                <h4 className="font-semibold text-foreground mb-2">Citation acquisition</h4>
                                <p className="text-sm text-muted-foreground">Cited presence on NHS Inform, NICE, PubMed abstracts, MedlinePlus</p>
                            </div>
                            <div className="bg-accent-soft rounded-xl p-5">
                                <h4 className="font-semibold text-foreground mb-2">Topical authority</h4>
                                <p className="text-sm text-muted-foreground">Comprehensive coverage of CBT-I and CBT for anxiety, not just product pages</p>
                            </div>
                            <div className="bg-accent-soft rounded-xl p-5">
                                <h4 className="font-semibold text-foreground mb-2">Author authority</h4>
                                <p className="text-sm text-muted-foreground">Clinical team members as recognized experts (article bylines, research citations, LinkedIn presence)</p>
                            </div>
                        </div>
                        
                        <div className="bg-primary/10 rounded-2xl p-6 mt-8">
                            <div className="flex items-start gap-4">
                                <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">LLM visibility tracking</h4>
                                    <p className="text-muted-foreground">Monthly measurement of how Sleepio and Daylight appear in AI responses for target queries. <strong className="text-foreground">This is the KPI of the next 3 years.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4 - AI Systems */}
                <section className="section-padding bg-warm">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader 
                            badge="AI-First Operations"
                            title="AI as an accelerator, not a replacement"
                            subtitle="AI doesn't replace clinical judgment or editorial voice. It frees them from low-value work. These are systems I use with existing clients — not experiments, production tools."
                        />
                        
                        <div className="space-y-6">
                            <AISystemCard 
                                icon={Brain}
                                title="Mixed-AI editorial strategy"
                                description="AI identifies semantic clusters, defines article structure, and — critically in a health context — automatically extracts citations and sources from PubMed, Cochrane, and NHS databases. The content manager or clinical reviewer receives a brief already built on real scientific evidence. Their role hasn't disappeared — it's elevated. They're not searching for studies or starting from scratch. They focus on what only an expert can add: perspective, tone, signature. Every published article is reviewed and approved by a real person. For YMYL content like Big Health's, this isn't optional — it's the only sustainable strategy through algorithm updates."
                            />
                            
                            <AISystemCard 
                                icon={Zap}
                                title="AI content refresh system"
                                description="Organic traffic decays. Solid articles lose positions not because they're wrong, but because search engines reward freshness signals. I run a system that monitors the existing content portfolio, identifies declining pages, and generates an update report: new publications available, more recent statistics, claims that can be strengthened with studies published after the original article. The reviewer approves, the page gets updated. For Big Health — which continuously produces research — every new study is also an opportunity to strengthen existing content, automatically."
                            />
                            
                            <AISystemCard 
                                icon={Activity}
                                title="Technical health monitor"
                                description="Continuous monitoring of crawling, indexing, status codes, Core Web Vitals, structured data integrity. When something breaks, an alert arrives — not discovered during the monthly check. Issues get resolved in days."
                            />
                            
                            <AISystemCard 
                                icon={Globe}
                                title="Brand & AI visibility tracking"
                                description="Online mention monitoring, alerts on relevant conversations (when media or competitors discuss CBT-I, digital therapeutics, insomnia treatment), and a specific tracking system for AI model visibility: does Sleepio appear when someone asks ChatGPT or Perplexity for the best digital insomnia treatment? With what framing? How consistently? Measured monthly and tracked as a concrete KPI."
                            />
                        </div>
                    </div>
                </section>

                {/* Section 5 - E-E-A-T */}
                <section className="section-padding">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader 
                            badge="E-E-A-T Strategy"
                            title="Clinical evidence is your SEO moat — here's how to deploy it"
                            subtitle="Most SEOs treat E-E-A-T as a compliance checklist. For Big Health, it's an active competitive weapon."
                        />
                        
                        <h3 className="text-xl font-semibold text-foreground mb-6">Existing assets to activate:</h3>
                        
                        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                            <EEATAsset 
                                title="100+ peer-reviewed publications"
                                description="Each paper is a potential content asset and link-earning vehicle. A structured Research Hub that makes publications accessible — and connects them to product landing pages — signals to both Google and AI models that Big Health is a primary source, not a secondary one."
                            />
                            
                            <EEATAsset 
                                title="NHS Scotland partnership"
                                description="Case study content, earned media potential, authority signal that no wellness competitor can match."
                            />
                            
                            <EEATAsset 
                                title="Clinical team"
                                description="Author profiles for every clinician with publications, medical review badges on every content piece. This is what Google's quality raters look for in YMYL assessments. It also opens the door to internal personal branding — giving Big Health's sleep researchers and clinical psychologists a credible public voice builds both individual authority and organizational trust."
                            />
                            
                            <EEATAsset 
                                title="RCT data"
                                description="Original research based on proprietary data is the strongest form of link earning. Journalists, researchers, and academics cite data they can't find elsewhere."
                            />
                        </div>
                    </div>
                </section>

                {/* Section 6 - First 30 Days */}
                <section className="section-padding bg-warm">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader 
                            badge="Action Plan"
                            title="What I'd do in the first month"
                        />
                        
                        <div className="space-y-8">
                            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1-2</span>
                                    Weeks 1–2
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Full technical audit (crawlability, indexing, structured data, Core Web Vitals)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Keyword universe mapping for insomnia + anxiety (1,000+ queries, clustered by intent and funnel stage)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Competitive gap analysis: who's taking the clicks that should go to Big Health, and why</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>E-E-A-T assessment: author profile audit, medical review signals, structured data quality</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3-4</span>
                                    Weeks 3–4
                                </h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Prioritization of opportunities by impact/effort</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Monitoring infrastructure setup</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>Quick wins: existing pages ranking 8–20, optimizable within weeks</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>First LLM visibility snapshot: how does Big Health appear today in ChatGPT, Perplexity, and Google AI Overviews for the 20 target queries — this becomes the baseline to improve against</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing Statement */}
                <section className="section-padding bg-primary">
                    <div className="max-w-3xl mx-auto text-center text-primary-foreground">
                        <p className="text-xl md:text-2xl leading-relaxed mb-8">
                            Big Health has clinical evidence. The right products for two massively underserved conditions. The credibility that wellness competitors can't buy.
                        </p>
                        
                        <p className="text-xl md:text-2xl leading-relaxed mb-8">
                            What's missing is an organic system that connects this authority with the people searching for it — in traditional SERPs and in the new AI paradigm.
                        </p>
                        
                        <p className="text-2xl md:text-3xl font-serif font-bold mb-10">
                            That's exactly the work I want to do.
                        </p>
                        
                        <a 
                            href="mailto:nicola.menassi@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium hover:bg-primary-foreground/90 transition-colors text-lg"
                        >
                            <Mail className="w-5 h-5" />
                            Get in touch — nicola.menassi@gmail.com
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};
