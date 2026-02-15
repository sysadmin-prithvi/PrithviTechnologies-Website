"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, FileText, Quote, Star } from "lucide-react";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "annotation-types", label: "Core Annotation Types" },
  { id: "quality-consistency", label: "Quality & Consistency Guidelines" },
  { id: "tool-selection", label: "Tool Selection & Setup" },
  { id: "workflow-design", label: "Workflow Design Best Practices" },
  { id: "annotator-training", label: "Annotator Training & Onboarding" },
  { id: "qa-validation", label: "QA & Validation Strategies" },
  { id: "common-pitfalls", label: "Common Pitfalls to Avoid" },
  { id: "conclusion", label: "Build World-Class Annotation Workflows" },
  { id: "faq", label: "FAQ & Resources" },
];

export default function BestPracticesArticle() {
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
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Accuracy • Consistency • Scalability</span>
              </div>
              <h1 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Best Practices for Image Annotation in Computer Vision
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Master the essential techniques and workflows that ensure high-quality labeled data for production-grade computer vision models.
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
                  {["Up to 40% Faster Annotation", "99%+ Label Consistency", "Reduced Model Retraining"].map((b, i) => (
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
                  High-quality image annotation is the foundation of successful computer vision models. Poor annotation practices can reduce model accuracy by 15-30%, while well-structured workflows improve annotation throughput by 40%+ and achieve 99%+ label consistency. This guide covers proven techniques for building world-class annotation datasets.
                </p>
              </section>

              <section id="annotation-types" className="mt-12 scroll-mt-24">
                <h2>Core Annotation Types</h2>
                <p>
                  Choosing the right annotation type for your use case is critical. Each technique has specific strengths, complexity trade-offs, and quality considerations.
                </p>
                <h3>Bounding Boxes</h3>
                <p>
                  The fastest and most common annotation type. Best for object detection tasks where precise boundaries aren't critical. Typical use cases: retail inventory, vehicle detection, face detection. Annotators can label 500-1000 boxes per hour with proper tooling.
                </p>
                <h3>Polygon / Semantic Segmentation</h3>
                <p>
                  Pixel-level labeling for precise object boundaries. Essential for medical imaging, autonomous driving lane detection, and agricultural disease mapping. More time-intensive (50-200 objects/hour) but provides granular spatial information.
                </p>
                <h3>Instance Segmentation</h3>
                <p>
                  Combines polygon precision with individual object identification. Distinguishes between overlapping objects of the same class. Critical for crowded scenes, cell biology, and aerial imagery analysis.
                </p>
                <h3>Keypoint / Landmark Annotation</h3>
                <p>
                  Identifies specific points of interest within objects. Common in pose estimation, facial recognition, and gesture analysis. Requires domain expertise and careful guideline definition for consistent placement.
                </p>
                <h3>3D Cuboids</h3>
                <p>
                  Three-dimensional bounding boxes for depth estimation and spatial reasoning. Essential for autonomous vehicles, robotics, and augmented reality applications. Demands specialized tools and well-trained annotators.
                </p>
              </section>

              <section id="quality-consistency" className="mt-12 scroll-mt-24">
                <h2>Quality & Consistency Guidelines</h2>
                <p>
                  Clear, unambiguous annotation guidelines are the single most important factor in achieving high-quality datasets. Vague instructions lead to annotator confusion, inter-annotator disagreement, and ultimately poor model performance.
                </p>
                <h3>Guideline Documentation</h3>
                <ul>
                  <li>Provide visual examples for every class and edge case</li>
                  <li>Define boundary rules (e.g., "include shadows," "exclude partial occlusions &lt;50%")</li>
                  <li>Specify handling for ambiguous cases with decision trees</li>
                  <li>Include negative examples (what NOT to label)</li>
                  <li>Update guidelines iteratively based on real annotation feedback</li>
                </ul>
                <h3>Class Taxonomy Design</h3>
                <p>
                  Keep class definitions mutually exclusive and collectively exhaustive. Overlapping categories (e.g., "car" vs "sedan" vs "vehicle") create confusion. Test your taxonomy with pilot annotations to identify ambiguities early.
                </p>
                <h3>Inter-Annotator Agreement (IAA)</h3>
                <p>
                  Measure consistency with Intersection over Union (IoU) for bounding boxes (target: ≥0.85) and Cohen's Kappa for classification tasks (target: ≥0.75). Low IAA indicates guideline issues or insufficient training.
                </p>
                <h3>Consensus Protocols</h3>
                <p>
                  For critical datasets, use multi-annotator consensus: 2-3 annotators label each item independently, then consolidate. Disagreements surface guideline gaps and improve overall quality by 15-25%.
                </p>
              </section>

              <section id="tool-selection" className="mt-12 scroll-mt-24">
                <h2>Tool Selection & Setup</h2>
                <p>
                  The right annotation platform can improve productivity by 30-50%. Prioritize tools that reduce friction, automate repetitive tasks, and integrate with your ML pipeline.
                </p>
                <h3>Essential Features</h3>
                <ul>
                  <li><strong>Keyboard shortcuts:</strong> Experienced annotators rely heavily on hotkeys for class selection, navigation, and submission</li>
                  <li><strong>Auto-save:</strong> Prevents data loss and reduces annotator anxiety</li>
                  <li><strong>Interpolation:</strong> Automatically propagates labels across video frames or similar images</li>
                  <li><strong>Quality checks:</strong> Built-in validation for missing labels, overlapping boxes, or out-of-bounds annotations</li>
                  <li><strong>Collaboration:</strong> Real-time commenting, task assignment, and review workflows</li>
                </ul>
                <h3>Cloud vs. On-Premise</h3>
                <p>
                  Cloud platforms (Labelbox, V7, Scale AI) offer faster setup and managed infrastructure. On-premise or self-hosted tools (CVAT, Label Studio) provide greater data control and customization. Choose based on security requirements, budget, and team size.
                </p>
                <h3>ML Pipeline Integration</h3>
                <p>
                  Ensure your annotation tool exports in formats compatible with your training framework (COCO JSON, Pascal VOC, YOLO). Direct API integration enables automated model-assisted labeling and active learning loops.
                </p>
              </section>

              <section id="workflow-design" className="mt-12 scroll-mt-24">
                <h2>Workflow Design Best Practices</h2>
                <p>
                  Well-structured workflows separate concerns, enforce quality gates, and create clear accountability. Multi-stage pipelines consistently outperform single-pass annotation.
                </p>
                <h3>Multi-Stage Workflows</h3>
                <p>
                  Break annotation into distinct phases:
                </p>
                <ol>
                  <li><strong>Draft:</strong> Initial annotation by junior or domain-trained annotators</li>
                  <li><strong>Review:</strong> Peer review or senior annotator checks for accuracy and completeness</li>
                  <li><strong>QA:</strong> Dedicated quality assurance team samples and validates batches</li>
                </ol>
                <p>
                  This separation reduces individual annotator pressure and catches errors early, improving final dataset quality by 20-40%.
                </p>
                <h3>Role Separation</h3>
                <p>
                  Assign annotators to consistent roles (drafter, reviewer, QA) rather than rotating. Specialization builds expertise and speeds up task completion by 25-35%.
                </p>
                <h3>Batch Assignment Strategies</h3>
                <p>
                  Group similar images together to reduce context switching. Annotators labeling the same object class repeatedly develop muscle memory and improve speed. However, rotate classes periodically to prevent fatigue and tunnel vision.
                </p>
                <h3>Time Tracking & Performance Benchmarking</h3>
                <p>
                  Monitor time-per-annotation to identify bottlenecks, outlier annotators, or overly complex tasks. Use median times (not averages) to set realistic throughput expectations.
                </p>
                <h3>Feedback Loops</h3>
                <p>
                  Create channels for annotators to ask questions, report guideline ambiguities, and suggest improvements. Weekly sync meetings or shared Slack channels reduce errors and improve morale.
                </p>
                <h3>Pilot Projects</h3>
                <p>
                  Before launching full-scale annotation, run a 500-1000 image pilot. This stress-tests guidelines, identifies tool limitations, and calibrates time estimates. Iterating on a small batch prevents costly rework later.
                </p>
              </section>

              <section id="annotator-training" className="mt-12 scroll-mt-24">
                <h2>Annotator Training & Onboarding</h2>
                <p>
                  Inadequate training is the root cause of most annotation quality issues. Invest time upfront to build annotator competence and confidence.
                </p>
                <h3>Structured Onboarding</h3>
                <ul>
                  <li>Start with guideline review and live Q&A sessions</li>
                  <li>Assign 50-100 training examples with known ground truth</li>
                  <li>Provide immediate feedback on trainee annotations before production work</li>
                  <li>Require passing a certification test (≥85% accuracy) before granting full access</li>
                </ul>
                <h3>Calibration Sessions</h3>
                <p>
                  Weekly or bi-weekly calibration meetings where the team annotates the same examples together and discusses disagreements. These sessions align interpretations and surface edge cases that need guideline updates.
                </p>
                <h3>Ongoing Training</h3>
                <p>
                  As your model evolves or new data types emerge, update training materials and re-certify annotators. Continuous learning prevents guideline drift and keeps quality high.
                </p>
                <h3>Domain Expertise Requirements</h3>
                <p>
                  For specialized domains (medical imaging, legal documents, scientific data), recruit annotators with relevant backgrounds. A radiologist will annotate MRIs 10x faster and more accurately than a generalist.
                </p>
                <h3>Communication Channels</h3>
                <p>
                  Provide annotators with direct access to project leads for questions. Unanswered questions lead to guessing, which introduces noise. Slack, email, or in-tool commenting all work—the key is responsiveness.
                </p>
              </section>

              <section id="qa-validation" className="mt-12 scroll-mt-24">
                <h2>QA & Validation Strategies</h2>
                <p>
                  Quality assurance is not optional. Even experienced annotators make mistakes. Systematic QA catches errors before they reach your training pipeline.
                </p>
                <h3>Sampling-Based QA</h3>
                <p>
                  Review 10-20% of annotations randomly or target high-risk batches (new annotators, complex images, low confidence scores). Full review is cost-prohibitive for large datasets.
                </p>
                <h3>Automated Checks</h3>
                <p>
                  Implement programmatic validation:
                </p>
                <ul>
                  <li>Detect overlapping bounding boxes of the same class</li>
                  <li>Flag annotations outside image boundaries</li>
                  <li>Identify abnormally small or large bounding boxes</li>
                  <li>Require minimum polygon vertex counts for complex shapes</li>
                  <li>Check for missing required attributes or metadata</li>
                </ul>
                <h3>Consensus Annotation</h3>
                <p>
                  For gold-standard datasets or high-stakes applications, triple-annotate and use majority voting. Disagreements indicate either genuinely ambiguous data or guideline deficiencies.
                </p>
                <h3>Model-Assisted QA</h3>
                <p>
                  Train a preliminary model on your dataset and flag predictions that disagree with human annotations. High-confidence model disagreements often reveal annotation errors.
                </p>
                <h3>Inter-Annotator Agreement Measurement</h3>
                <p>
                  Regularly compute IAA metrics (IoU, Kappa) on overlapping samples. Declining IAA signals training drift or guideline confusion.
                </p>
                <h3>Root Cause Analysis</h3>
                <p>
                  When errors cluster around specific classes, image types, or annotators, investigate deeply. Is the guideline unclear? Is the task too complex? Are certain annotators struggling? Fix systemic issues rather than individual mistakes.
                </p>
              </section>

              <section id="common-pitfalls" className="mt-12 scroll-mt-24">
                <h2>Common Pitfalls to Avoid</h2>
                <p>
                  Learning from common mistakes can save months of rework and tens of thousands of dollars.
                </p>
                <h3>Guideline Drift</h3>
                <p>
                  Annotators unconsciously shift their interpretation over time, especially without regular calibration. What started as "include partial occlusions" becomes "only annotate if 80% visible." Prevent drift with periodic team alignment sessions.
                </p>
                <h3>Class Imbalance</h3>
                <p>
                  Rare classes get under-represented, hurting model recall. Intentionally oversample minority classes during annotation or use stratified sampling to ensure balanced representation.
                </p>
                <h3>Insufficient Context</h3>
                <p>
                  Annotators making decisions without full image context (e.g., cropped views) introduce errors. Always provide complete images or relevant temporal/spatial context.
                </p>
                <h3>Inconsistent Edge Case Handling</h3>
                <p>
                  Blurry objects, partial occlusions, and ambiguous boundaries need explicit rules. Leaving these to annotator judgment creates noise. Document edge case policies and enforce them.
                </p>
                <h3>Ignoring Temporal Consistency (Video)</h3>
                <p>
                  Video annotations must track objects consistently across frames. Object IDs jumping between instances confuses tracking models. Use interpolation tools and enforce ID continuity.
                </p>
                <h3>Skipping Pilot Testing</h3>
                <p>
                  Launching full annotation without a pilot is like deploying code without testing. You'll discover guideline gaps, tool issues, and time estimate errors only after wasting budget.
                </p>
                <h3>Poor Annotator Feedback</h3>
                <p>
                  Annotators working in a vacuum don't improve. Provide regular performance feedback, recognize high performers, and coach those struggling. Engaged annotators produce better work.
                </p>
              </section>

              <section id="conclusion" className="mt-12 scroll-mt-24">
                <h2>Conclusion: Build World-Class Annotation Workflows</h2>
                <p>
                  Implementing these best practices transforms annotation from a bottleneck into a competitive advantage. Teams that invest in clear guidelines, proper training, multi-stage workflows, and systematic QA see 40%+ productivity gains, 99%+ consistency, and dramatically improved model performance.
                </p>
                <p>
                  Start with small pilot projects to validate your approach, iterate on guidelines based on real feedback, and scale gradually. The upfront investment in process design pays dividends in reduced rework, faster delivery, and higher-quality datasets.
                </p>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                  <h3 className="mb-3 text-2xl font-semibold">Ready to build a world-class annotation workflow?</h3>
                  <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                    Our team has helped dozens of companies design efficient, high-quality annotation pipelines. Let's discuss your specific needs and create a custom solution.
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
                    q: "How do I ensure consistency across a large team?",
                    a: "Regular calibration sessions, clear written guidelines with visual examples, consensus annotation for training sets, and ongoing IAA measurement are key. Weekly alignment meetings prevent drift.",
                  },{
                    q: "What's the right balance between speed and accuracy?",
                    a: "Optimize for accuracy first with small batches, then scale speed through tooling improvements, better guidelines, and annotator expertise. Cutting corners early creates expensive rework later.",
                  },{
                    q: "Should I annotate edge cases or focus on common scenarios?",
                    a: "Annotate both, but strategically. Cover common cases thoroughly for baseline performance, then oversample edge cases to improve model robustness. A 70/30 split (common/edge) works for most applications.",
                  },{
                    q: "How often should I update annotation guidelines?",
                    a: "Review guidelines after every 500-1000 annotations during initial phases, then quarterly once stable. Major model architecture changes or new data types warrant immediate updates.",
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
                    quote: "Implementing structured QA workflows and annotator training cut our rework by 55%. Model mAP improved from 0.72 to 0.89 within two months.",
                    author: "ML Lead, Retail Computer Vision Startup",
                  },{
                    quote: "Clear annotation guidelines and weekly calibration sessions eliminated class confusion. Our team now annotates 40% faster with measurably higher consistency.",
                    author: "Head of Data Operations, Autonomous Robotics",
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
            <Target className="h-4 w-4 text-primary" />
            <span>Up to 40% Faster Annotation • 99% Consistency • Best Practices</span>
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
