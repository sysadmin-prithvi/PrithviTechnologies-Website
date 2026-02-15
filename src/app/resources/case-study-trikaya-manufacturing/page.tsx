"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Factory, FileText, Quote, Star, Award, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

const toc = [
  { id: "executive-summary", label: "Executive Summary" },
  { id: "challenge", label: "The Trikaya Challenge" },
  { id: "solution", label: "XEqualsAI's Solution" },
  { id: "pipeline-architecture", label: "Data Pipeline Architecture" },
  { id: "execution-results", label: "Execution & Results" },
  { id: "business-impact", label: "Business Impact" },
  { id: "why-xequalsai", label: "Why XEqualsAI" },
  { id: "key-takeaways", label: "Key Takeaways" },
];

export default function TrikayaCaseStudy() {
  const [activeSection, setActiveSection] = useState("executive-summary");

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
                <Factory className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Manufacturing • Computer Vision • Quality Control</span>
              </div>
              <div className="mb-4 text-sm font-semibold text-primary">CASE STUDY</div>
              <h1 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Trikaya Manufacturing: Professional Data Pipeline & Annotation Framework
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                How XEqualsAI built a production-grade data infrastructure enabling 95%+ model accuracy for automated defect detection across 60,000+ images
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="h-12 px-6" asChild>
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                  <Link href="/contact">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logo & Stats Bar */}
        <section className="border-y border-border/60 bg-card/30 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { label: "Images Annotated", value: "60,000+" },
                { label: "Model Accuracy", value: "95%+" },
                { label: "Inter-Rater Reliability", value: "0.90+" },
                { label: "Component Types", value: "12" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
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
                    <Link href="/contact">Download PDF</Link>
                  </Button>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {["95%+ Model Accuracy", "40% Faster Cycles", "20% Fewer Epochs"].map((b, i) => (
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
              <section id="executive-summary" className="scroll-mt-24">
                <h2>Executive Summary</h2>
                <p className="text-lg font-semibold">
                  XEqualsAI partnered with Trikaya Manufacturing to design and execute a comprehensive data collection and professional annotation pipeline, curating 60,000+ high-quality annotated images across 12 in-house component types with 10 distinct defect categories. This engagement showcases XEqualsAI's expertise in building scalable, production-grade data infrastructure—the critical foundation enabling 95%+ model accuracy in Trikaya's automated defect detection system.
                </p>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6">
                  <h3 className="mt-0 text-xl font-semibold">Client Profile</h3>
                  <ul className="mb-0">
                    <li><strong>Company:</strong> Trikaya Manufacturing</li>
                    <li><strong>Industry:</strong> Manufacturing & Quality Control</li>
                    <li><strong>Challenge:</strong> No standardized, professionally annotated dataset for training defect detection models</li>
                    <li><strong>Solution:</strong> End-to-end data pipeline with intelligent collection, expert annotation, and quality assurance</li>
                  </ul>
                </div>
              </section>

              <section id="challenge" className="mt-12 scroll-mt-24">
                <h2>The Trikaya Data Challenge</h2>
                <p>
                  Trikaya's in-house manufacturing operations demanded a training dataset that precisely represents real-world defect distributions across diverse component geometries, lighting conditions, and production scenarios. The company faced a critical gap: no standardized, professionally annotated dataset existed for training defect detection models specific to Trikaya's component specifications and quality standards.
                </p>
                <h3>Key Obstacles</h3>
                <ul>
                  <li><strong>Inconsistent Manual Inspection:</strong> Manual inspection at scale introduced inconsistency and inter-rater disagreement, directly threatening production efficiency</li>
                  <li><strong>Biased Defect Representation:</strong> Existing data didn't capture the full spectrum of defect types across Trikaya's 12 component types</li>
                  <li><strong>Quality Standard Alignment:</strong> Required annotations aligned precisely with Trikaya's internal defect taxonomy and quality acceptance criteria</li>
                  <li><strong>Scale Requirements:</strong> Needed 60,000+ images with balanced distribution across 10 defect categories</li>
                  <li><strong>Production Integration:</strong> Dataset must integrate seamlessly with Trikaya's model training pipelines and manufacturing records</li>
                </ul>
                <div className="mt-6 rounded-lg border border-border bg-card/50 p-6">
                  <h4 className="mt-0 flex items-center gap-2 text-lg font-semibold">
                    <Target className="h-5 w-5 text-primary" />
                    Defect Categories Covered
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {["Blanks", "Cuts", "Holes", "Slots", "Burrs", "Forming Shifts", "Part Damage", "Operation Errors", "Hole Oblongs/Pull-ups", "Deep Spots/Spot Falls"].map((defect, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        <span>{defect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="solution" className="mt-12 scroll-mt-24">
                <h2>XEqualsAI's Solution</h2>
                <p>
                  XEqualsAI designed a comprehensive, three-phase data pipeline architecture tailored specifically to Trikaya's manufacturing environment, component specifications, and quality requirements.
                </p>
              </section>

              <section id="pipeline-architecture" className="mt-12 scroll-mt-24">
                <h2>Data Pipeline Architecture</h2>
                <h3>Phase 1: Intelligent Image Collection System</h3>
                <p>
                  A standardized, automated imaging infrastructure ensuring consistent, high-quality data capture across all component types.
                </p>
                <ul>
                  <li><strong>Standardized Imaging Station:</strong> Automated image capture with consistent lighting, angle controls, and environmental standardization tailored to Trikaya's 12 component types</li>
                  <li><strong>Quality Validation Framework:</strong> Automated rejection of out-of-specification captures (resolution, focus, exposure verification) ensuring Trikaya's quality standards</li>
                  <li><strong>Comprehensive Component Coverage:</strong> Systematic collection across all 12 distinct in-house component types and 10 defect categories</li>
                  <li><strong>Balanced Dataset Design:</strong> Minimum 5,000 images per component type; 500+ images per defect category ensuring representative distribution</li>
                </ul>

                <h3>Phase 2: Professional Annotation & Quality Assurance</h3>
                <p>
                  Expert-driven annotation workflows with multi-layer quality controls and consensus protocols.
                </p>
                <ul>
                  <li><strong>Expert Annotation Team:</strong> Multi-annotator framework with domain expertise in manufacturing defect characterization specific to Trikaya's specifications</li>
                  <li><strong>Inter-Rater Reliability:</strong> 0.90+ consistency threshold, eliminating disagreements through structured review protocols aligned with Trikaya's quality criteria</li>
                  <li><strong>Precise Defect Categorization:</strong> Classification aligned with Trikaya's internal defect taxonomy and production quality standards</li>
                  <li><strong>Multi-Checkpoint Quality Control:</strong> Automated and manual verification at image capture, initial annotation, consensus review, and final validation stages</li>
                </ul>

                <h3>Phase 3: Dataset Curation & Documentation</h3>
                <p>
                  Complete traceability, feature analysis, and production-ready formatting for seamless ML integration.
                </p>
                <ul>
                  <li><strong>Traceability Infrastructure:</strong> Complete component identification, defect type tagging, production run tracking, and batch linkage to manufacturing records</li>
                  <li><strong>Defect Characterization Analysis:</strong> Statistical profiling of defect distributions, edge case identification, and feature extraction strategy development</li>
                  <li><strong>Organizational Standards:</strong> Standardized naming conventions, metadata structures, and version control enabling seamless pipeline integration</li>
                  <li><strong>Feature Extraction Strategy:</strong> Systematic analysis of texture features, edge patterns, and visual signatures optimizing downstream CNN architectures</li>
                </ul>
              </section>

              <section id="execution-results" className="mt-12 scroll-mt-24">
                <h2>Data Pipeline Execution & Results</h2>
                <h3>Completed Deliverables</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { title: "60,000+ Professionally Annotated Images", desc: "Collected from Trikaya's production environment and validated" },
                    { title: "0.90+ Inter-Rater Reliability", desc: "Across all Trikaya defect categories" },
                    { title: "Balanced Defect Distribution", desc: "500+ images per category ensuring statistical representation" },
                    { title: "Complete Documentation", desc: "Metadata, traceability logs, production run linkage, and defect reports" },
                    { title: "Feature Extraction Analysis", desc: "Texture analysis, edge detection strategies, lighting adaptation insights" },
                    { title: "Production-Ready Dataset", desc: "Version-controlled, standardized format ready for immediate training" },
                  ].map((item, i) => (
                    <Card key={i} className="p-4">
                      <div className="mb-2 flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <h3 className="mt-8">Quality Metrics</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { metric: "Image Rejection Rate", value: "<5%", context: "Automated quality validation against Trikaya standards" },
                    { metric: "Annotation Consensus", value: "0.90+", context: "Inter-rater reliability across all annotators" },
                    { metric: "Defect Category Coverage", value: "100%", context: "All Trikaya-specified defect types represented" },
                    { metric: "Dataset Completeness", value: "5,000+", context: "Images per Trikaya component type" },
                  ].map((item, i) => (
                    <Card key={i} className="p-4">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-muted-foreground">{item.metric}</span>
                        <span className="text-2xl font-bold text-primary">{item.value}</span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{item.context}</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="business-impact" className="mt-12 scroll-mt-24">
                <h2>Business Impact & Strategic Value</h2>
                <h3>Immediate ML Outcomes</h3>
                <ul>
                  <li><strong>95%+ Model Accuracy:</strong> Foundation dataset enabling superior accuracy through quality-first annotation approach tailored to Trikaya's specifications</li>
                  <li><strong>20% Fewer Training Epochs:</strong> Reduced model training iterations due to high-quality, balanced data representing Trikaya's production</li>
                  <li><strong>Faster Convergence:</strong> Improved generalization across Trikaya's diverse component geometries and production line variations</li>
                </ul>

                <h3>Operational Excellence</h3>
                <ul>
                  <li><strong>Replicable Framework:</strong> Annotation framework enabling Trikaya to expand to new defect types and component categories</li>
                  <li><strong>40% Faster Data Collection:</strong> Standardized pipeline reducing future data collection cycles, optimizing production schedules</li>
                  <li><strong>Team Capability Development:</strong> Complete documentation supporting Trikaya's internal team capability development and continuous improvement</li>
                </ul>

                <h3>Long-Term Competitive Advantage</h3>
                <ul>
                  <li><strong>Proprietary Dataset:</strong> Dataset specific to Trikaya's manufacturing enabling custom model development inaccessible to competitors</li>
                  <li><strong>Quality-First Positioning:</strong> Pipeline establishing Trikaya as a quality-first manufacturer with advanced AI-driven inspection</li>
                  <li><strong>Scalable Expansion:</strong> Framework supporting Trikaya's expansion across in-house and out-house production lines</li>
                </ul>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {[
                    { icon: Award, title: "95%+ Accuracy", desc: "Model performance on defect detection" },
                    { icon: TrendingUp, title: "40% Faster", desc: "Future data collection cycles" },
                    { icon: Target, title: "20% Reduction", desc: "Training epochs required" },
                  ].map((item, i) => (
                    <Card key={i} className="p-6 text-center">
                      <item.icon className="mx-auto h-12 w-12 text-primary" />
                      <h4 className="mt-4 font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="why-xequalsai" className="mt-12 scroll-mt-24">
                <h2>Why XEqualsAI's Data Expertise Delivered Value</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "End-to-End Mastery",
                      desc: "From Trikaya's imaging station design through inter-rater validation to production deployment—comprehensive data pipeline expertise",
                    },
                    {
                      title: "Quality-First Philosophy",
                      desc: "0.90+ reliability thresholds and multi-checkpoint validation ensuring superior defect detection for Trikaya's operations",
                    },
                    {
                      title: "Manufacturing Domain Expertise",
                      desc: "Deep understanding of Trikaya's component specifications, defect categorization, production workflows, and quality requirements",
                    },
                    {
                      title: "Scalable Architecture",
                      desc: "Systematic processes, standardized formats, and complete documentation enabling Trikaya's rapid expansion to additional production lines",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="p-6">
                      <h3 className="mt-0 text-lg font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </section>

              <section id="key-takeaways" className="mt-12 scroll-mt-24">
                <h2>Key Takeaways</h2>
                <p>
                  The Trikaya partnership demonstrates that production-grade AI systems require production-grade data infrastructure. XEqualsAI's comprehensive approach—from intelligent image collection to expert annotation to rigorous quality control—delivered the foundation for Trikaya's 95%+ accuracy defect detection system.
                </p>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6">
                  <h3 className="mb-4 text-2xl font-semibold">Success Factors</h3>
                  <ul className="mb-0 space-y-2">
                    <li>✓ Quality-first annotation with 0.90+ inter-rater reliability</li>
                    <li>✓ Domain expertise in manufacturing defect characterization</li>
                    <li>✓ Balanced dataset design ensuring representative defect distribution</li>
                    <li>✓ Complete traceability to production records and quality standards</li>
                    <li>✓ Scalable framework enabling rapid expansion to new components</li>
                  </ul>
                </div>

                <div className="mt-8 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                  <h3 className="mb-3 text-2xl font-semibold">Ready to build your production-grade dataset?</h3>
                  <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                    XEqualsAI specializes in end-to-end data pipeline design for manufacturing, healthcare, autonomous systems, and more. Let's discuss how we can deliver the data foundation for your AI success.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button className="h-12 px-6" asChild>
                      <Link href="/contact">Start Your Project</Link>
                    </Button>
                    <Button variant="outline" className="h-12 px-6" asChild>
                      <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                  </div>
                </div>
              </section>

              <section className="mt-12">
                <h2>Client Testimonial</h2>
                <Card className="relative p-8">
                  <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/20" />
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    "XEqualsAI's professional data pipeline transformed our quality control capabilities. The 60,000+ expertly annotated images they delivered enabled us to achieve 95%+ accuracy in defect detection—a level we couldn't reach with our previous manual processes. Their understanding of manufacturing workflows and quality standards was exceptional."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                      <Factory className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Quality Control Director</div>
                      <div className="text-sm text-muted-foreground">Trikaya Manufacturing</div>
                    </div>
                  </div>
                </Card>
              </section>
            </article>
          </div>
        </section>

        {/* Fixed sticky CTA */}
        <div className="fixed inset-x-0 bottom-4 z-20 mx-auto hidden max-w-4xl items-center justify-between gap-3 rounded-full border bg-background/90 px-4 py-3 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/70 md:flex">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-primary" />
            <span>95%+ Accuracy • 60K+ Images • Production-Grade Quality</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="/contact">Download Case Study</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
