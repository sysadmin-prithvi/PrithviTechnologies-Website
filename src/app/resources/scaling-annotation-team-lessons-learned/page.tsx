"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, FileText, Quote, Star, TrendingUp } from "lucide-react";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "scaling-pitfalls", label: "Common Scaling Pitfalls" },
  { id: "team-building", label: "Layered Team Building" },
  { id: "quality-control", label: "Quality Control Strategies" },
  { id: "leadership", label: "Leadership Essentials" },
  { id: "platform-workflow", label: "Platform and Workflow Tips" },
  { id: "10x-lessons", label: "Lessons from 10x Growth Projects" },
  { id: "conclusion", label: "Conclusion: Scale with Confidence" },
  { id: "faq", label: "FAQ & Resources" },
];

export default function ScalingTeamArticle() {
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
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Team Management • Quality Control • Leadership</span>
              </div>
              <h1 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Scaling Your Annotation Team: Lessons Learned
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Real-world strategies from enterprise deployments for managing distributed annotation teams while maintaining quality at scale.
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
                  {["5x Growth Sustained", "25% Better Retention", "40% Faster Onboarding"].map((b, i) => (
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
                  Scaling annotation teams from dozens to hundreds unlocks AI project velocity but demands structured management to sustain quality. This case study guide reveals common pitfalls—quality drops, burnout, distributed coordination failures—and proven fixes from enterprise deployments that achieved 5x growth while improving retention 25% and cutting onboarding time 40%.
                </p>
              </section>

              <section id="scaling-pitfalls" className="mt-12 scroll-mt-24">
                <h2>Common Scaling Pitfalls</h2>
                <p>
                  Rapid team expansion introduces systemic risks that silently degrade dataset quality and team morale. Understanding these failure modes helps teams proactively design safeguards before scaling.
                </p>
                <h3>Annotation Drift and Consistency Erosion</h3>
                <p>
                  As teams grow beyond 20-30 annotators, interpretation drift accelerates without rigorous guidelines and calibration. What started as "include shadows in bounding boxes" morphs into inconsistent judgments across annotators—some include, others exclude—creating 20-30% error rate spikes. New hires inherit these divergent interpretations, compounding noise in training data.
                </p>
                <p>
                  <strong>Root Cause:</strong> Vague documentation, insufficient examples, lack of regular alignment sessions. Guidelines that worked for 10 people fail at 100 without version control and enforcement mechanisms.
                </p>
                <h3>Reviewer Bottlenecks and Burnout</h3>
                <p>
                  Teams often scale annotators aggressively while neglecting reviewer capacity. A single supervisor handling 50+ annotators creates crushing workload—12-hour days reviewing thousands of labels, no time for coaching or process improvement. Quality suffers as reviewers rubber-stamp work to clear backlogs, and burnout leads to attrition of your most experienced personnel.
                </p>
                <p>
                  <strong>Impact:</strong> Review queues stretch to weeks, blocking model training. Stressed reviewers miss errors, negating the value of QA layers.
                </p>
                <h3>Distributed Coordination Failures</h3>
                <p>
                  Global teams spanning US, Europe, and Asia time zones offer 24/7 productivity—but without real-time tracking tools, they amplify miscommunication. A guideline update in California doesn't reach annotators in Bangalore until the next day, causing a 12-hour window of incorrect labels. Asynchronous Slack threads fragment context, delaying critical decisions by days instead of hours.
                </p>
                <p>
                  <strong>Symptom:</strong> Projects delay by 2-4 weeks as teams chase alignment across handoffs. Duplicated work and conflicting instructions waste thousands of labor hours.
                </p>
                <h3>Tooling That Doesn't Scale</h3>
                <p>
                  Platforms optimized for 10 annotators (local file storage, manual task assignment, email-based QA) collapse under 100+ users. Concurrent edit conflicts, permission management chaos, and lack of audit trails make governance impossible at scale.
                </p>
              </section>

              <section id="team-building" className="mt-12 scroll-mt-24">
                <h2>Layered Team Building</h2>
                <p>
                  Strategic hiring sequences and role stratification prevent the pitfalls above. Successful teams scale in deliberate phases rather than all-at-once expansions.
                </p>
                <h3>Phase 1: Core Expert Group (Weeks 1-4)</h3>
                <p>
                  Begin with 5-10 domain experts or highly trained generalists. This seed team:
                </p>
                <ul>
                  <li>Annotates the first 1,000-5,000 samples to establish ground truth</li>
                  <li>Stress-tests and refines annotation guidelines through real labeling</li>
                  <li>Identifies ambiguous cases and documents resolution protocols</li>
                  <li>Develops training materials and example galleries</li>
                </ul>
                <p>
                  <strong>Output:</strong> A battle-tested guideline document, 500+ annotated examples covering common and edge cases, and a calibrated benchmark for measuring future annotator performance.
                </p>
                <h3>Phase 2: Add Reviewers Before Volume (Weeks 5-8)</h3>
                <p>
                  Before hiring 50 annotators, recruit 5 reviewers from your expert group or externally. Train them on quality rubrics, consensus adjudication, and feedback delivery. Establish the 1:10 reviewer-to-annotator ratio as a hard constraint—every 10 new annotators require 1 dedicated reviewer.
                </p>
                <p>
                  <strong>Rationale:</strong> Reviewers need ramp-up time to master guidelines and review workflows. Adding them reactively after quality collapses is too late.
                </p>
                <h3>Phase 3: Batch Expansion with QA Gates (Weeks 9-20)</h3>
                <p>
                  Hire annotators in cohorts of 10-20 every 2-3 weeks, not all at once. Each cohort:
                </p>
                <ol>
                  <li><strong>Onboards:</strong> 2-day training on guidelines, tool usage, and quality expectations</li>
                  <li><strong>Certifies:</strong> Completes 50-100 test annotations scored against ground truth; must achieve ≥85% accuracy to proceed</li>
                  <li><strong>Ramps:</strong> Works on production tasks under elevated review (50% audit rate) for first week, dropping to standard 10-20% after passing</li>
                </ol>
                <p>
                  <strong>Gate Mechanism:</strong> If a cohort's average accuracy falls below 80%, pause hiring and diagnose training gaps before onboarding the next batch. This prevents cascading quality issues.
                </p>
                <h3>Sustained Growth: 5x in 6 Months</h3>
                <p>
                  Following this phased approach, teams reliably scale from 10 to 50 to 100+ annotators over six months while maintaining stable quality metrics (inter-annotator agreement ≥0.80, model mAP within 2% of expert baseline). Contrast this with ad-hoc hiring, which often stalls at 30-40 annotators due to coordination chaos.
                </p>
              </section>

              <section id="quality-control" className="mt-12 scroll-mt-24">
                <h2>Quality Control Strategies</h2>
                <p>
                  Proactive QA processes embedded into workflows prevent quality erosion before it reaches training pipelines.
                </p>
                <h3>Random Sampling and Audit Rates</h3>
                <p>
                  Review 10-20% of annotations randomly selected across all annotators. Higher rates (30-50%) apply to new hires during their first two weeks. Use statistical sampling to ensure coverage—e.g., stratify by annotator, task difficulty, and time of day to catch systemic biases.
                </p>
                <p>
                  Track per-annotator error rates weekly. Outliers (≥2x team average) trigger coaching or additional training; persistent low performers transition to simpler tasks or exit.
                </p>
                <h3>Confidence-Based Flagging</h3>
                <p>
                  If using AI-assisted pre-labeling, route low-confidence predictions (&lt;0.70 probability) to senior reviewers automatically. These uncertain samples often represent edge cases or annotation errors—exactly where expert attention yields highest value.
                </p>
                <h3>Peer Review and Consensus</h3>
                <p>
                  For critical datasets (medical, autonomous vehicles, legal), implement double-blind consensus: 2-3 annotators label independently, then adjudicate disagreements. Consensus workflows surface guideline ambiguities faster than single-annotator-plus-reviewer models, improving inter-annotator agreement by 10-15 percentage points.
                </p>
                <h3>Active Learning for Efficient Sampling</h3>
                <p>
                  Prioritize review effort on high-uncertainty or high-value samples using active learning algorithms. Rather than reviewing random 20%, target the 10% most likely to improve model performance if corrected. This optimizes limited QA bandwidth, especially useful when scaling reviewers lags annotator growth.
                </p>
                <h3>Task Rotation to Build Versatility</h3>
                <p>
                  Rotate annotators across different object classes, annotation types (boxes vs. polygons), or datasets every few weeks. Cross-training prevents tunnel vision, reduces monotony-induced errors, and builds T-shaped skill sets. It also helps identify annotators who excel at specific domains (e.g., medical imaging) for future specialization.
                </p>
              </section>

              <section id="leadership" className="mt-12 scroll-mt-24">
                <h2>Leadership Essentials</h2>
                <p>
                  Effective annotation team leadership balances productivity metrics with human-centered management that sustains morale and quality over months-long projects.
                </p>
                <h3>Foster Feedback Cultures</h3>
                <p>
                  Weekly team check-ins (15-30 minutes) where annotators share confusing cases, suggest guideline improvements, and ask questions create psychological safety. When annotators feel heard, they proactively flag issues rather than silently propagating errors.
                </p>
                <p>
                  Implement bidirectional feedback: reviewers provide constructive corrections with explanations ("This box should extend to include the shadow per Section 3.2"), and annotators can challenge reviewer decisions if they believe guidelines support their interpretation. Adjudication by a neutral third party resolves disputes and refines documentation.
                </p>
                <h3>Recognize Quality Over Quotas</h3>
                <p>
                  Incentivize accuracy and attention to detail, not pure throughput. Leaderboards highlighting "fewest revisions required" or "highest reviewer approval rate" instead of "most annotations per hour" shift culture toward craftsmanship. Teams that recognize quality see 25% better retention—annotators value mastery over repetitive speed work.
                </p>
                <p>
                  Avoid pure piecework payment models that reward corner-cutting. Blend base hourly rates with quality bonuses to align incentives.
                </p>
                <h3>Empathy and Cognitive Load Management</h3>
                <p>
                  Annotation is cognitively demanding and repetitive—staring at images for 6-8 hours daily causes fatigue, eye strain, and disengagement. Combat this with:
                </p>
                <ul>
                  <li><strong>Regular breaks:</strong> Enforce 10-minute breaks every 90 minutes; monitor for annotators working through breaks (a burnout signal)</li>
                  <li><strong>One-on-ones:</strong> Monthly individual meetings to discuss workload, career growth, and well-being. Managers who listen reduce turnover 20-30%.</li>
                  <li><strong>Variety:</strong> Mix challenging tasks (rare edge cases, complex polygons) with routine work to maintain engagement</li>
                </ul>
                <h3>Remote Coordination Tools</h3>
                <p>
                  For distributed teams, establish single sources of truth:
                </p>
                <ul>
                  <li><strong>Slack/Teams:</strong> Dedicated channels for Q&A, guideline updates, and daily standups. Pin critical announcements.</li>
                  <li><strong>Notion/Confluence:</strong> Living guideline wikis with version history, search, and comment threads</li>
                  <li><strong>Trello/Asana:</strong> Task boards tracking project status, blockers, and ownership</li>
                  <li><strong>Dashboards:</strong> Real-time visibility into annotation progress, review queues, and quality metrics (more below)</li>
                </ul>
                <p>
                  Asynchronous-first communication reduces meeting overhead while maintaining alignment across time zones.
                </p>
              </section>

              <section id="platform-workflow" className="mt-12 scroll-mt-24">
                <h2>Platform and Workflow Tips</h2>
                <p>
                  Technology choices determine whether your team thrives or drowns in operational overhead as headcount grows.
                </p>
                <h3>Enterprise Annotation Platforms</h3>
                <p>
                  Platforms like <strong>xequals.ai</strong>, Scale AI, Labelbox, and Encord are purpose-built for 100+ user deployments. Essential features for scale:
                </p>
                <ul>
                  <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions for annotators, reviewers, admins, and clients. Prevent accidental deletions or unauthorized exports.</li>
                  <li><strong>Real-Time Monitoring:</strong> Dashboards showing per-annotator throughput, accuracy trends, review queue depths, and project burn-down. Spot bottlenecks before they cascade.</li>
                  <li><strong>AI Pre-Labeling:</strong> Integrated model inference generates initial labels, reducing manual effort 50-60%. Human-in-the-loop workflows refine predictions at scale.</li>
                  <li><strong>Audit Trails:</strong> Complete history of who labeled what, when, and what changed during review. Critical for compliance (medical, legal) and debugging quality regressions.</li>
                  <li><strong>Collaboration:</strong> In-platform commenting, task assignment, and consensus workflows eliminate email/Slack coordination overhead.</li>
                </ul>
                <h3>Integration with ML Pipelines</h3>
                <p>
                  Seamless data flow from annotation to training prevents manual export/import bottlenecks. Look for:
                </p>
                <ul>
                  <li>API access to programmatically query completed annotations</li>
                  <li>Webhooks triggering retraining when annotation milestones hit (e.g., 10K new labels)</li>
                  <li>Native format support (COCO JSON, Pascal VOC, YOLO) eliminating conversion scripts</li>
                  <li>Version control for datasets—track training set snapshots linked to model checkpoints</li>
                </ul>
                <h3>Hybrid Human-AI Workflows</h3>
                <p>
                  The most scalable teams combine strengths: AI handles repetitive bulk labeling (highway driving, common retail products), humans focus on edge cases and quality assurance. This division of labor cuts costs 50-60% versus pure manual annotation while maintaining accuracy.
                </p>
                <p>
                  <strong>Implementation:</strong> Start with 5-10K human-labeled seed set, train pre-labeling model, deploy HITL workflow where humans correct AI outputs. Retrain weekly as corrections accumulate, gradually reducing human effort as model improves.
                </p>
              </section>

              <section id="10x-lessons" className="mt-12 scroll-mt-24">
                <h2>Lessons from 10x Growth Projects</h2>
                <p>
                  Teams that successfully scaled 10x (e.g., 10 to 100 annotators) over 6-12 months share common practices worth emulating.
                </p>
                <h3>Document Everything Rigorously</h3>
                <p>
                  Treat annotation guidelines as product documentation—version controlled, searchable, and updated iteratively. Successful teams maintain 50-100 page guides with screenshots, decision trees for ambiguous cases, and negative examples (what NOT to do). Invest in technical writers if needed; unclear docs cost far more in rework.
                </p>
                <h3>Post-Mortem Every Milestone</h3>
                <p>
                  After completing major project phases (e.g., first 100K annotations, first month at 50 annotators), hold retrospectives:
                </p>
                <ul>
                  <li>What caused the most rework?</li>
                  <li>Which guideline ambiguities surfaced most often?</li>
                  <li>What tooling friction slowed productivity?</li>
                  <li>Which annotators/reviewers excelled—what can others learn?</li>
                </ul>
                <p>
                  Document findings and action items. Iterative process improvement compounds: 5% efficiency gains monthly yield 80% cumulative improvement over a year.
                </p>
                <h3>Pilot Before Scaling</h3>
                <p>
                  Before hiring 50 annotators, run a 2-week pilot with 10 on a 5,000-sample subset. Measure time-per-annotation, error rates, and tool usability. Extrapolate costs and timelines realistically—teams often underestimate by 30-50% without piloting. Adjust workflows, fix tooling bugs, and clarify guidelines before committing to full-scale hiring.
                </p>
                <h3>Build Redundancy and Cross-Training</h3>
                <p>
                  Key person dependencies cripple large teams. If only one reviewer understands medical annotation guidelines, their vacation stalls 20 annotators. Cross-train multiple people per critical role. Document tribal knowledge in wikis so it survives turnover.
                </p>
                <h3>Embrace Hybrid Workforces</h3>
                <p>
                  Combine full-time employees (for core expertise, institutional knowledge) with contractors or managed service providers (for surge capacity, specialized domains). This flexibility lets you scale up 3x for a 2-month project sprint without permanent headcount bloat. Platforms like Scale AI offer on-demand annotator pools for this model.
                </p>
              </section>

              <section id="conclusion" className="mt-12 scroll-mt-24">
                <h2>Conclusion: Scale with Confidence</h2>
                <p>
                  Scaling annotation teams is as much about organizational design and leadership as it is about hiring. By phasing growth, maintaining strict reviewer ratios, embedding proactive QA, fostering feedback cultures, and leveraging enterprise tooling, teams sustain 5x-10x expansion while improving quality and retention.
                </p>
                <p>
                  The lessons are clear: document rigorously, iterate via post-mortems, invest in people as much as process, and adopt hybrid human-AI workflows to cut costs 50-60% without sacrificing accuracy. Start small, validate your systems with pilots, then scale deliberately—speed follows structure.
                </p>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                  <h3 className="mb-3 text-2xl font-semibold">Ready to scale your annotation team with confidence?</h3>
                  <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                    Our team has guided dozens of companies through 10x annotation team growth. Let's design a custom scaling plan with phased hiring, quality controls, and enterprise tooling.
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
                    q: "What's the optimal annotator-to-reviewer ratio?",
                    a: "Maintain 1:10 (one reviewer per 10 annotators) as a baseline. Complex domains (medical, legal) may need 1:7, while simple tasks (bounding boxes on clear images) can stretch to 1:15. Monitor review queue depth—if backlogs exceed 3 days, add reviewers.",
                  },{
                    q: "How fast can I realistically scale my team?",
                    a: "Sustainable growth is 2-3x every 2-3 months with phased hiring and QA gates. Faster expansion (5x in one month) risks quality collapse and coordination chaos. Plan 6-9 months to go from 10 to 100 annotators reliably.",
                  },{
                    q: "Should I hire full-time employees or contractors?",
                    a: "Hybrid approach works best: 20-30% full-time core team for institutional knowledge and complex tasks, 70-80% contractors or managed services for flexibility and surge capacity. Adjust based on project duration and budget.",
                  },{
                    q: "How do I prevent annotator burnout?",
                    a: "Enforce breaks every 90 minutes, rotate tasks to maintain variety, recognize quality over quotas, conduct monthly one-on-ones, and watch for warning signs (declining accuracy, working through breaks). Empathetic leadership boosts retention 25%.",
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
                    quote: "We scaled from 15 to 120 annotators in 8 months using phased hiring and AI pre-labeling. Quality metrics stayed flat while throughput increased 6x. The key was adding reviewers early.",
                    author: "Head of Data Operations, Healthcare AI Unicorn",
                  },{
                    quote: "Implementing weekly calibration sessions and peer reviews cut our annotation drift by 70%. Our inter-annotator agreement improved from 0.72 to 0.88 even as we tripled team size.",
                    author: "VP of ML Engineering, Autonomous Robotics Startup",
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
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>5x Sustained Growth • 25% Better Retention • Quality at Scale</span>
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
