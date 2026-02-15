"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Brain, FileText, Quote, Star, Sparkles } from "lucide-react";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "key-trends", label: "Key NLP Annotation Trends" },
  { id: "advanced-techniques", label: "Advanced Annotation Techniques" },
  { id: "tools-platforms", label: "Tools and Platforms" },
  { id: "benefits-practices", label: "Benefits and Best Practices" },
  { id: "future-outlook", label: "Future Outlook for NLP Annotation" },
  { id: "conclusion", label: "Conclusion: Embrace the Future" },
  { id: "faq", label: "FAQ & Resources" },
];

export default function NLPTrendsArticle() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66%",
        threshold: 0,
      }
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNjAnIGhlaWdodD0nNjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PGRlZnM+PHBhdHRlcm4gaWQ9J2cnIHdpZHRoPSc2MCcgaGVpZ2h0PSc2MCcgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZSc+PHBhdGggZD0nTSAxMCAwIEwgMCAwIDAgMTAnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiYSgyNTUsMjU1LDI1NSwwLjAzKScgc3Ryb2tlLXdpZHRoPScxJy8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd1cmwoI2cpJy8+PC9zdmc+')",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
                <Brain className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">LLMs • Multimodal • Real-Time Processing</span>
              </div>
              <h1 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                The Future of NLP: Trends in Text Annotation
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Discover 2026 trends shaping text annotation for advanced NLP models—from AI-assisted tools to multimodal integration and real-time processing.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="h-12 px-6" asChild>
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile TOC */}
        <nav className="sticky top-16 z-10 block border-y border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
          <div className="container mx-auto overflow-x-auto px-4">
            <ul className="flex gap-4 py-3 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    className={`transition-colors ${
                      activeSection === item.id
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                    href={`#${item.id}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="py-12">
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-[260px_minmax(0,1fr)]">
            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <Card className="p-4">
                  <div className="mb-3 text-sm font-semibold">On this page</div>
                  <ul className="space-y-2 text-sm">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          className={`block transition-colors ${
                            activeSection === item.id
                              ? "text-primary font-semibold"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                          href={`#${item.id}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card>
                <div className="mt-4 space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Request Demo</Link>
                  </Button>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {["60%+ Efficiency Boost", "50-70% Less Manual Work", "Real-Time NLP Updates"].map((b, i) => (
                    <Card key={i} className="flex items-center gap-3 p-3">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">{b}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="prose prose-invert max-w-none">
              <section id="intro" className="scroll-mt-24">
                <p className="text-lg font-semibold">
                  Text annotation remains foundational for training advanced NLP models as AI capabilities expand to handle complex tasks like multimodal understanding, real-time processing, and contextual reasoning. In 2026, emerging trends—AI-assisted pre-labeling, synthetic data generation, human-in-the-loop workflows, and semantic-rich annotations—are boosting annotation efficiency by 60%+ while enabling breakthrough applications in healthcare, legal tech, finance, and conversational AI.
                </p>
              </section>

              <section id="key-trends" className="mt-12 scroll-mt-24">
                <h2>Key NLP Annotation Trends</h2>
                <p>
                  The NLP annotation landscape is rapidly evolving, driven by advances in large language models, automation, and cross-domain integration. These trends reshape how teams build labeled datasets at scale.
                </p>
                <h3>AI-Powered Pre-Annotation with LLMs</h3>
                <p>
                  Large language models like GPT-4, Claude, and open-source alternatives (Llama 3, Mistral) now perform initial text labeling—named entity recognition (NER), sentiment analysis, intent classification, POS tagging—with remarkable accuracy. Teams deploy LLMs to pre-label thousands of documents overnight, then route outputs to human annotators for refinement via human-in-the-loop (HITL) workflows.
                </p>
                <p>
                  <strong>Impact:</strong> Pre-labeling cuts manual annotation effort by 50-70%, especially on routine tasks like customer support ticket categorization or product review sentiment. Humans focus on correcting edge cases (sarcasm, domain-specific entities, ambiguous phrasing) rather than labeling from scratch.
                </p>
                <p>
                  <strong>Example:</strong> A legal tech company uses GPT-4 to pre-label contracts for clause types (indemnification, termination, liability), then lawyers verify and correct. Annotation time drops from 8 hours to 2.5 hours per 100-page contract.
                </p>
                <h3>Active Learning for Sample Prioritization</h3>
                <p>
                  Active learning algorithms identify uncertain or informative samples—ambiguous sentiments ("This product is... interesting"), novel entities (emerging company names, new drug names), low-confidence predictions—and prioritize them for human annotation. By selectively labeling the most valuable 20% of data, teams achieve 90%+ model performance with far fewer labeled examples than exhaustive annotation.
                </p>
                <p>
                  <strong>Use Case:</strong> A chatbot startup uses active learning to label intent classification for 10,000 user queries. Instead of labeling all, they annotate 2,000 queries flagged as uncertain, achieving 92% accuracy versus 89% from random sampling—with 80% less labeling cost.
                </p>
                <h3>Synthetic Data Generation</h3>
                <p>
                  LLMs generate synthetic text to augment sparse datasets, creating diverse scenarios for sentiment analysis, conversational AI, or entity extraction. Techniques include paraphrasing real examples, generating edge cases (rare intents, adversarial inputs), and simulating domain-specific conversations (medical consultations, financial advice).
                </p>
                <p>
                  <strong>Benefits:</strong> Reduces manual labeling dependency for rare classes, improves model robustness on out-of-distribution inputs, and enables rapid prototyping before collecting real-world data.
                </p>
                <p>
                  <strong>Caution:</strong> Synthetic data can introduce biases or unrealistic patterns if not validated against real samples. Best practice: blend 70% real data with 30% synthetic augmentation, validated by domain experts.
                </p>
                <h3>Multimodal Annotation Integration</h3>
                <p>
                  Modern LLMs process text alongside images, audio, and video (e.g., GPT-4 Vision, Gemini, CLIP). NLP annotation now extends to multimodal contexts: labeling image captions with sentiment, transcribing and annotating medical consultations (audio + clinical notes), annotating video subtitles with speaker intent.
                </p>
                <p>
                  <strong>Applications:</strong> Healthcare (radiology reports paired with scans), autonomous vehicles (sensor data + driver commands), retail (product images + reviews), accessibility (video captioning + audio descriptions).
                </p>
                <p>
                  <strong>Challenge:</strong> Multimodal annotation demands tools that display text, images, audio, and video simultaneously, with synchronized labeling UIs. Platforms like xequals.ai and Labelbox now support these workflows natively.
                </p>
              </section>

              <section id="advanced-techniques" className="mt-12 scroll-mt-24">
                <h2>Advanced Annotation Techniques</h2>
                <p>
                  Beyond basic NER and sentiment tagging, cutting-edge NLP projects employ sophisticated annotation strategies that capture nuanced semantics and enable zero-shot or few-shot learning.
                </p>
                <h3>Zero-Shot and Few-Shot NER Pipelines</h3>
                <p>
                  Zero-shot NER models like UniversalNER and GLiNER label unseen entity types without retraining—simply provide entity definitions ("Label all pharmaceutical compounds") and the model extracts them. Few-shot approaches use 5-20 labeled examples to adapt pre-trained models to new domains in minutes.
                </p>
                <p>
                  <strong>Impact:</strong> Accelerates NLP deployment in fast-moving industries (emerging biotech, crypto/Web3, rapidly evolving legal frameworks) where traditional model training lags weeks behind. Teams prototype entity extraction pipelines in hours instead of weeks.
                </p>
                <p>
                  <strong>Use Case:</strong> A pharmaceutical company needs to extract novel drug names from clinical trial reports published weekly. Zero-shot NER adapts instantly to new compounds without retraining, maintaining 85%+ precision versus 60% with static models.
                </p>
                <h3>Semantic-Rich Annotations</h3>
                <p>
                  Modern NLP tasks require annotations beyond surface-level labels. Semantic-rich frameworks capture:
                </p>
                <ul>
                  <li><strong>Context and Intent:</strong> Why did the user ask this question? What's the underlying goal?</li>
                  <li><strong>Bias and Fairness:</strong> Does this text exhibit gender, racial, or socioeconomic bias? How severe?</li>
                  <li><strong>Sentiment Intensity:</strong> Not just positive/negative, but strongly positive, mildly negative, mixed, neutral-with-sarcasm</li>
                  <li><strong>Coreference and Relationships:</strong> Which entities refer to the same person/organization? What relationships exist (CEO of, subsidiary of, competitor to)?</li>
                </ul>
                <p>
                  These annotations enable explainable AI—models that justify predictions ("This review is negative due to complaints about durability and price") and trustworthy systems in regulated domains (healthcare, finance, legal).
                </p>
                <h3>Domain-Specific Labeling with Expert Annotators</h3>
                <p>
                  Legal, medical, and financial NLP demands subject matter experts. A generalist cannot accurately label:
                </p>
                <ul>
                  <li><strong>Legal:</strong> Clause types, precedent citations, jurisdiction-specific terminology</li>
                  <li><strong>Medical:</strong> ICD-10 codes, drug-drug interactions, diagnosis from clinical narratives</li>
                  <li><strong>Finance:</strong> Risk indicators, regulatory compliance flags, sentiment from earnings calls</li>
                </ul>
                <p>
                  Platforms recruit specialized annotator pools (lawyers, doctors, accountants) and enforce standardized guidelines to maintain consistency. Expect 2-5x higher costs versus general NLP annotation, but 10-20% accuracy gains justify the premium in high-stakes applications.
                </p>
                <h3>Real-Time Annotation Pipelines</h3>
                <p>
                  Streaming text data—social media feeds, customer support chats, news wires—benefits from continuous annotation and model updates. Real-time pipelines ingest text, route uncertain samples to annotators within minutes, retrain models hourly or daily, and deploy updates automatically.
                </p>
                <p>
                  <strong>Performance Gains:</strong> Mirroring real-time ML pipelines that boost model performance 75%, streaming NLP annotation enables rapid adaptation to trending topics, evolving slang, or emerging threats (fraud patterns, misinformation campaigns).
                </p>
                <p>
                  <strong>Example:</strong> A social media monitoring platform annotates viral tweets for hate speech and misinformation in real-time. Models retrain every 6 hours on fresh annotations, maintaining 90%+ precision as language and tactics evolve daily.
                </p>
              </section>

              <section id="tools-platforms" className="mt-12 scroll-mt-24">
                <h2>Tools and Platforms</h2>
                <p>
                  Choosing the right annotation platform accelerates NLP projects while ensuring quality, compliance, and scalability.
                </p>
                <h3>Enterprise Platforms</h3>
                <p>
                  <strong>xequals.ai</strong> integrates LLM pre-labeling (GPT-4, Claude API), active learning for sample prioritization, and automated QC workflows. Enterprise features include GDPR/SOC 2/HIPAA compliance for sensitive text (medical records, legal documents), role-based access control, and real-time collaboration for distributed teams. Multimodal support enables text-image-audio annotation in unified interfaces.
                </p>
                <p>
                  <strong>Labelbox</strong> and <strong>Scale AI</strong> offer managed annotation services with vetted linguists and domain experts. Strong on sentiment analysis, NER, and conversational AI annotation at scale.
                </p>
                <p>
                  <strong>Prodigy</strong> (by spaCy) specializes in active learning-driven annotation with tight integration to spaCy NLP pipelines. Excellent for custom entity types and rapid iteration, though self-hosted (requires DevOps).
                </p>
                <h3>Open-Source Options</h3>
                <p>
                  <strong>Doccano</strong> provides simple NER, sentiment, and sequence labeling UIs. Lightweight and free; suitable for small teams or academic projects. Limited scalability and no native LLM integration.
                </p>
                <p>
                  <strong>Label Studio</strong> supports text, audio, images, and video with flexible schema configuration. Open-source with ML backend support for pre-labeling. Requires technical setup but highly customizable.
                </p>
                <h3>Hybrid LLM Setups</h3>
                <p>
                  Teams increasingly combine open-source annotation tools with commercial LLM APIs (OpenAI, Anthropic, Cohere) for pre-labeling. Workflow: LLM generates initial labels → export to Doccano/Label Studio → humans refine → retrain custom models (BERT, RoBERTa) on corrected data.
                </p>
                <p>
                  <strong>Cost Optimization:</strong> Use smaller open-source LLMs (Mistral 7B, Llama 3 8B) for pre-labeling bulk data, reserving GPT-4 for complex edge cases. This hybrid approach cuts API costs 70% while maintaining quality.
                </p>
                <h3>Low-Code/No-Code Interfaces</h3>
                <p>
                  Platforms like <strong>Datasaur</strong> and <strong>LightTag</strong> democratize NLP annotation with intuitive UIs requiring zero coding. Non-technical domain experts (doctors, lawyers, customer success managers) can label text directly without engineering support, accelerating transfer learning for specialized domains.
                </p>
              </section>

              <section id="benefits-practices" className="mt-12 scroll-mt-24">
                <h2>Benefits and Best Practices</h2>
                <p>
                  Adopting modern NLP annotation trends delivers measurable ROI through cost reduction, faster deployment, and improved model accuracy.
                </p>
                <h3>Cost and Efficiency Gains</h3>
                <ul>
                  <li><strong>40-60% Cost Reduction:</strong> AI-assisted pre-labeling and active learning cut manual annotation hours dramatically. A 10,000-document NER project costing $50K manually drops to $20-30K with automation.</li>
                  <li><strong>Faster Time-to-Market:</strong> Real-time pipelines and zero-shot models compress NLP development cycles from 3-6 months to 4-8 weeks, critical in competitive markets.</li>
                  <li><strong>Higher Accuracy:</strong> Semantic-rich annotations and expert annotators boost F1 scores 5-15% on domain-specific tasks versus basic labeling.</li>
                </ul>
                <h3>Best Practices for Success</h3>
                <h4>1. Implement Adjudication for Inter-Annotator Agreement (IAA)</h4>
                <p>
                  Measure IAA using Cohen's Kappa (target ≥0.75) or Fleiss' Kappa for multi-annotator tasks. Disagreements surface guideline ambiguities—adjudicate conflicts with senior annotators or domain experts, then update guidelines. Regular calibration sessions (weekly for new teams, monthly for mature teams) maintain alignment.
                </p>
                <h4>2. Conduct Bias Audits</h4>
                <p>
                  NLP models inherit biases from training data. Audit annotations for:
                </p>
                <ul>
                  <li>Gender bias (job titles, pronouns)</li>
                  <li>Racial/ethnic stereotypes (names, locations)</li>
                  <li>Socioeconomic assumptions (education, income)</li>
                </ul>
                <p>
                  Tools like <strong>Aequitas</strong> and <strong>Fairlearn</strong> detect bias in labeled data. Mitigate by balancing class distributions, augmenting underrepresented groups, and diversifying annotator demographics.
                </p>
                <h4>3. Establish Iterative Feedback Loops</h4>
                <p>
                  Deploy models on pilot data, collect real-world predictions, identify failure modes, and prioritize related samples for annotation. This closed-loop approach continuously improves model robustness—common in production NLP systems at Google, Meta, and Amazon.
                </p>
                <h4>4. Blend Automation with Human Oversight</h4>
                <p>
                  Fully automated annotation (no human review) risks propagating LLM hallucinations or biases into training data. Maintain human-in-the-loop checks: sample 10-20% of AI-generated labels for quality assurance, especially on high-stakes tasks (medical diagnosis, legal advice, financial risk).
                </p>
                <h4>5. Focus on Vertical Domains for Specialized Datasets</h4>
                <p>
                  Generic NLP models (sentiment, NER) commoditize as LLMs improve. Competitive advantage lies in domain-specific datasets: radiology report understanding, contract clause extraction, earnings call sentiment. Invest in expert annotators and proprietary guidelines to build defensible moats.
                </p>
              </section>

              <section id="future-outlook" className="mt-12 scroll-mt-24">
                <h2>Future Outlook for NLP Annotation</h2>
                <p>
                  Looking ahead, several emerging trends will further transform text annotation practices over the next 2-5 years.
                </p>
                <h3>Automated Guideline Generation</h3>
                <p>
                  LLMs will auto-generate annotation guidelines from small example sets. Provide 20 labeled samples, and the system drafts a 10-page guideline document with decision trees and edge case handling—reducing weeks of manual documentation to hours.
                </p>
                <h3>Collaborative Human-AI Annotation</h3>
                <p>
                  Future interfaces will enable real-time collaboration: AI suggests labels, humans accept/reject/modify on-the-fly, AI learns from corrections instantly via online learning. This tight feedback loop mimics pair programming in software development.
                </p>
                <h3>Explainable Annotations</h3>
                <p>
                  Annotators will label not just entities or sentiments, but also provide rationales: "This is negative because the user complains about X and Y." These explanations train interpretable models that justify predictions, essential for regulated industries.
                </p>
                <h3>Multilingual and Cross-Lingual Annotation</h3>
                <p>
                  As LLMs master 100+ languages, annotation will expand beyond English. Zero-shot cross-lingual transfer enables models trained on English annotations to perform well on Spanish, Mandarin, or Hindi with minimal labeled data. Platforms will recruit polyglot annotators and support multilingual guidelines.
                </p>
                <h3>Privacy-Preserving Annotation</h3>
                <p>
                  Federated learning and differential privacy techniques will enable annotation of sensitive text (medical records, financial documents) without centralizing data. Annotators work on encrypted or anonymized text, preserving privacy while building robust models.
                </p>
              </section>

              <section id="conclusion" className="mt-12 scroll-mt-24">
                <h2>Conclusion: Embrace the Future</h2>
                <p>
                  The future of NLP annotation is automated, multimodal, real-time, and semantically rich. By leveraging AI-assisted pre-labeling, active learning, synthetic data, and human-in-the-loop workflows, teams achieve 60%+ efficiency gains while building higher-quality datasets that power breakthrough applications.
                </p>
                <p>
                  Success requires balancing automation with expert oversight, investing in domain-specific labeling, and adopting platforms that integrate modern NLP tools. Whether you're building conversational AI, medical NLP, legal tech, or sentiment analysis systems, these trends define competitive advantage in 2026 and beyond.
                </p>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                  <h3 className="mb-3 text-2xl font-semibold">Ready to future-proof your NLP annotation workflow?</h3>
                  <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                    Our platform integrates LLM pre-labeling, active learning, multimodal support, and expert annotation pools for healthcare, legal, and finance NLP. Let's design a custom solution for your domain.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button className="h-12 px-6" asChild>
                      <Link href="/contact">Contact Our Team</Link>
                    </Button>
                    <Button variant="outline" className="h-12 px-6" asChild>
                      <Link href="/contact">Request a Demo</Link>
                    </Button>
                  </div>
                </div>
              </section>

              <section id="faq" className="mt-12 scroll-mt-24">
                <h2>FAQ & Resources</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[{
                    q: "How accurate is LLM pre-labeling for NLP tasks?",
                    a: "GPT-4 and Claude achieve 80-95% accuracy on standard NER, sentiment, and intent classification. Domain-specific tasks (medical, legal) may see 70-85% accuracy, requiring human refinement. Always validate on your specific data.",
                  },{
                    q: "What's the ROI of AI-assisted text annotation?",
                    a: "Teams typically see 40-60% cost reduction and 2-3x faster annotation throughput. A $100K manual annotation project drops to $40-60K with AI assistance, plus 4-6 week faster delivery. ROI compounds over multiple projects.",
                  },{
                    q: "Should I use synthetic data or real annotations?",
                    a: "Blend both: 70% real data for ground truth, 30% synthetic for edge case augmentation. Validate synthetic quality against real samples. Never rely solely on synthetic for high-stakes applications (medical, legal).",
                  },{
                    q: "How do I ensure annotation quality with distributed teams?",
                    a: "Implement adjudication workflows for IAA, conduct weekly calibration sessions, use confidence-based QC flagging, and maintain detailed guidelines with visual examples. Track per-annotator error rates and coach outliers.",
                  }].map((item, i) => (
                    <Card key={i} className="p-5">
                      <div className="mb-2 flex items-start gap-2">
                        <FileText className="mt-0.5 h-5 w-5 text-primary" />
                        <h4 className="font-semibold">{item.q}</h4>
                      </div>
                      <p className="text-muted-foreground">{item.a}</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="mt-12">
                <h2>Real-World Success Stories</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {[{
                    quote: "LLM pre-labeling cut our NER annotation time by 65% on legal contracts. We now process 500 contracts monthly instead of 180, with higher accuracy from lawyer reviewers focusing on edge cases.",
                    author: "Director of AI, Legal Tech Unicorn",
                  },{
                    quote: "Active learning helped us build a medical NLP model with 5,000 annotated records instead of 20,000. We achieved 91% F1 on diagnosis extraction while saving $120K in annotation costs.",
                    author: "Head of Data Science, Healthcare AI Startup",
                  }].map((t, i) => (
                    <Card key={i} className="relative p-6">
                      <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />
                      <div className="mb-3 flex gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">"{t.quote}"</p>
                      <div className="mt-4 text-sm text-muted-foreground">{t.author}</div>
                    </Card>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </section>

        {/* Fixed sticky CTA for quick action */}
        <div className="fixed inset-x-0 bottom-4 z-20 mx-auto hidden max-w-4xl items-center justify-between gap-3 rounded-full border bg-background/90 px-4 py-3 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/70 md:flex">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>60%+ Efficiency • AI-Assisted • Multimodal NLP</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
