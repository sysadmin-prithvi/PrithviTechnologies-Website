"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Video, FileText, Quote, Star, Car } from "lucide-react";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "challenges", label: "Annotation Challenges" },
  { id: "core-techniques", label: "Core Annotation Techniques" },
  { id: "ai-optimization", label: "AI-Assisted Optimization" },
  { id: "real-time-pipeline", label: "Real-Time Pipeline Integration" },
  { id: "best-practices", label: "Best Practices" },
  { id: "tools-platforms", label: "Tools and Platforms" },
  { id: "conclusion", label: "Conclusion: Accelerate AV Annotation" },
  { id: "faq", label: "FAQ & Resources" },
];

export default function AVAnnotationArticle() {
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
                <Video className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Temporal Tracking • 3D Cuboids • HITL Workflows</span>
              </div>
              <h1 className="mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Video Annotation for Autonomous Vehicles: A Deep Dive
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                Master the technical techniques for frame-by-frame annotation that power safe, robust perception systems in self-driving cars.
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
                  {["50-60% Cost Reduction", "Doubled Throughput", "30-50% Edge Case Accuracy"].map((b, i) => (
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
                  Video annotation powers autonomous vehicle perception systems by labeling frames with objects, trajectories, and behaviors essential for safe navigation. This technical guide explores frame-by-frame techniques, challenges, and optimizations tailored to self-driving car datasets—delivering 50-60% cost reductions and doubled annotation throughput through AI-assisted workflows.
                </p>
              </section>

              <section id="challenges" className="mt-12 scroll-mt-24">
                <h2>Annotation Challenges</h2>
                <p>
                  Autonomous vehicles process high-speed video from multiple cameras, lidars, and radars, requiring precise labels for dynamic scenes like pedestrians crossing or vehicles merging. The complexity of AV annotation creates unique challenges that distinguish it from standard computer vision tasks.
                </p>
                <h3>Temporal Consistency Requirements</h3>
                <p>
                  Unlike static image labeling, video annotation demands temporal consistency across frames—objects must track smoothly without jumps or ID switches. A pedestrian identified as ID #47 in frame 100 must maintain that ID through frame 500, even through partial occlusions. Tracking failures degrade multi-object tracking (MOT) models and confuse trajectory prediction systems.
                </p>
                <h3>Environmental Variability</h3>
                <ul>
                  <li><strong>Occlusion:</strong> Vehicles, buildings, and foliage partially hide pedestrians and cyclists, requiring annotators to infer obscured boundaries</li>
                  <li><strong>Lighting Variation:</strong> Dawn, dusk, headlight glare, and tunnel transitions create extreme exposure changes within seconds</li>
                  <li><strong>Motion Blur:</strong> High-speed maneuvers or camera shake blur fast-moving objects, making precise bounding difficult</li>
                  <li><strong>Weather Conditions:</strong> Rain, snow, and fog reduce visibility and alter object appearance</li>
                </ul>
                <h3>Rare Edge Cases</h3>
                <p>
                  Safety-critical scenarios like emergency vehicles, construction zones, unusual pedestrian behaviors (jaywalking, wheelchair users), or debris in roadways occur infrequently but demand exhaustive labeling. Robust AV models require millions of annotated frames covering these long-tail events to achieve acceptable recall rates.
                </p>
                <h3>Scale and Cost</h3>
                <p>
                  Manual frame-by-frame annotation grows prohibitively expensive for terabyte-scale datasets from fleet testing. A single hour of 30fps video from 6 cameras generates 648,000 frames—annotating all manually at $0.05/frame costs $32,400 per vehicle-hour. Multiplied across thousands of test hours, costs spiral into millions without optimization.
                </p>
              </section>

              <section id="core-techniques" className="mt-12 scroll-mt-24">
                <h2>Core Annotation Techniques</h2>
                <p>
                  AV annotation employs specialized techniques that capture both spatial and temporal information required for perception and prediction models.
                </p>
                <h3>Bounding Boxes (2D)</h3>
                <p>
                  The foundational technique for object detection. Annotators draw rectangular boxes around vehicles, pedestrians, cyclists, and traffic signs. Efficient for initial detection but lacks precise boundaries and depth information. Best for classification and coarse localization.
                </p>
                <h3>Semantic and Instance Segmentation</h3>
                <p>
                  Pixel-level masks distinguish drivable surfaces, lane markings, and object boundaries with high precision. Semantic segmentation labels every pixel by class (road, sidewalk, vegetation), while instance segmentation differentiates individual objects (Car #1 vs Car #2). Critical for path planning and obstacle avoidance but 3-5x slower than bounding boxes.
                </p>
                <h3>3D Cuboids and Sensor Fusion</h3>
                <p>
                  3D bounding boxes project lidar point clouds into camera frames, providing depth, orientation, and volumetric extent. Annotators define 3D cuboid corners in camera view, which the platform maps to world coordinates via calibration. Essential for distance estimation, collision prediction, and trajectory forecasting. Requires specialized tools that fuse multi-sensor data.
                </p>
                <h3>Keypoint Annotation for Pose Estimation</h3>
                <p>
                  Identifies body joints, limb positions, and gaze direction for pedestrians and cyclists. Enables prediction of crossing intent, hand signals, and head orientation. Common keypoint sets include 17-point COCO skeleton or 21-point hand models. Demands domain expertise for consistent placement under occlusion.
                </p>
                <h3>Polyline Trajectory Tracing</h3>
                <p>
                  Advanced spline tools trace vehicle and pedestrian paths through time, capturing motion patterns for behavior prediction. Annotators mark centroid positions across frames, and the system interpolates smooth trajectories. Outputs feed directly into trajectory forecasting models (e.g., VectorNet, TNT).
                </p>
                <h3>Attribute Tagging and Semantics</h3>
                <p>
                  Beyond spatial labels, attributes add behavioral context: "vehicle turning left," "pedestrian carrying shopping bags," "cyclist signaling," "brake lights active." These semantic tags improve action recognition and intent prediction, reducing false positives in path planning.
                </p>
                <h3>Interpolation for Efficiency</h3>
                <p>
                  Frame interpolation auto-generates labels between manually annotated keyframes, cutting effort by 40-60% on predictable motions. Annotators label frames 0, 30, 60 for a straight-driving vehicle; the system fills intermediate boxes via linear interpolation. Works best for constant-velocity scenarios; fails on sharp turns or sudden stops requiring manual keyframe insertion.
                </p>
              </section>

              <section id="ai-optimization" className="mt-12 scroll-mt-24">
                <h2>AI-Assisted Optimization</h2>
                <p>
                  Machine learning models dramatically reduce manual annotation overhead by pre-labeling frames and prioritizing difficult examples for human review.
                </p>
                <h3>Pre-Labeling with Vision Models</h3>
                <p>
                  Pre-trained object detection models (YOLO, Faster R-CNN, EfficientDet) generate initial bounding boxes or segmentation masks across all frames. Annotators refine these predictions—correcting misclassifications, adjusting boundaries, adding missed objects—rather than starting from scratch. Pre-labeling reduces manual input by up to 60% in highway scenarios where models confidently detect vehicles and lane markings.
                </p>
                <h3>Human-in-the-Loop (HITL) Workflows</h3>
                <ol>
                  <li><strong>Model Pre-Labels:</strong> Vision model processes raw video, outputting boxes, masks, or tracks</li>
                  <li><strong>Human Refinement:</strong> Annotators review predictions, correcting errors and handling edge cases</li>
                  <li><strong>Feedback Loop:</strong> Corrections retrain the model via active learning, improving future pre-labels</li>
                </ol>
                <p>
                  This iterative cycle boosts quality while accelerating throughput. As the model learns domain-specific patterns (e.g., delivery trucks, scooters), pre-label accuracy climbs from 70% to 90%+, further reducing human effort.
                </p>
                <h3>Active Learning for Prioritization</h3>
                <p>
                  Active learning algorithms identify uncertain or informative frames—occlusions, night scenes, rare object classes—and route them to expert annotators. Confident predictions on routine highway driving auto-approve without review, while ambiguous urban intersections receive detailed scrutiny. This selective allocation cuts annotation costs by 30-50% while maintaining quality on critical scenarios.
                </p>
                <h3>Cross-Domain Transfer Learning</h3>
                <p>
                  Techniques proven in medical imaging (50-70% DICOM annotation speedup) and geospatial analysis (40-60% satellite cost reduction) adapt to video via temporal models. Recurrent architectures (LSTMs, Transformers) leverage prior frames to predict current labels, smoothing tracking and reducing flicker. Research shows sequence models cut video annotation time by 35-45% versus frame-independent approaches.
                </p>
              </section>

              <section id="real-time-pipeline" className="mt-12 scroll-mt-24">
                <h2>Real-Time Pipeline Integration</h2>
                <p>
                  Modern AV development demands continuous annotation pipelines that ingest streaming fleet data, annotate incrementally, and retrain models in near-real-time.
                </p>
                <h3>Streaming Video Annotation</h3>
                <p>
                  Fleet vehicles upload video to cloud storage via LTE/5G as they drive. Streaming pipelines trigger annotation workflows automatically: new footage routes to pre-labeling models, then to annotator queues, then to QA—all within hours of capture. This continuous flow accelerates model iteration from weeks to days, enabling 75% faster performance gains via online learning and rapid deployment cycles.
                </p>
                <h3>Feature Stores for Low-Latency Serving</h3>
                <p>
                  Feature stores cache trajectory embeddings, historical track features, and map context, enabling sub-10ms inference during real-time prediction. By pre-computing expensive features (optical flow, scene graphs, attention maps) and serving them from Redis or DynamoDB, perception systems respond within latency budgets critical for safety (typically &lt;100ms end-to-end).
                </p>
                <h3>Concept Drift Adaptation</h3>
                <p>
                  Traffic patterns, construction zones, and regional driving behaviors shift over time. Streaming annotation captures these changes—new lane configurations, emerging vehicle types (e-scooters, robotaxis), seasonal pedestrian clothing—and feeds them into retraining pipelines. Autonomous teams gain 30-50% accuracy on edge cases by retraining perception models hourly or daily on fresh annotated streams, mirroring fraud detection systems that adapt to evolving attack vectors.
                </p>
                <h3>GPU-Accelerated Pre-Labeling</h3>
                <p>
                  Tools like CVAT, Encord, and xequals.ai leverage GPU clusters to process terabyte-scale video in parallel. Batch inference across hundreds of videos simultaneously produces pre-labels overnight, ready for human review by morning. This parallelism transforms months-long annotation backlogs into week-long sprints, unblocking model development.
                </p>
              </section>

              <section id="best-practices" className="mt-12 scroll-mt-24">
                <h2>Best Practices</h2>
                <p>
                  Implementing efficient, high-quality AV annotation workflows requires strategic planning, robust tooling, and continuous optimization.
                </p>
                <h3>Diverse Seed Datasets</h3>
                <p>
                  Train initial pre-labeling models on datasets covering varied weather (rain, fog, snow, sun), times of day (dawn, noon, dusk, night), geographies (urban, suburban, rural, highways), and scenarios (construction, school zones, parking lots). Diversity ensures pre-labels generalize across deployment conditions, reducing manual corrections.
                </p>
                <h3>Confidence-Based Automated QC</h3>
                <p>
                  Use model confidence scores to flag low-quality predictions for review. Boxes with IoU &lt;0.6 or classification probabilities &lt;0.7 automatically route to QA queues, while high-confidence labels (IoU &gt;0.85, prob &gt;0.9) auto-approve after sampling spot checks. This risk-based quality control maintains accuracy while maximizing throughput.
                </p>
                <h3>Inter-Annotator Agreement (IAA) Enforcement</h3>
                <p>
                  Measure IAA on overlapping samples using metrics like Intersection over Union (IoU) for boxes and MOTA (Multiple Object Tracking Accuracy) for tracks. Target ≥0.80 IoU and ≥85% MOTA. Disagreements surface guideline ambiguities or insufficient training; adjudication workflows resolve conflicts and update standards.
                </p>
                <h3>Cloud Parallelism and Scalability</h3>
                <p>
                  Petabyte-scale AV datasets demand distributed annotation infrastructure. Cloud platforms (AWS, GCP, Azure) provide elastic compute for pre-labeling, object storage for video, and managed databases for metadata. Parallelize annotation across global teams in multiple time zones for 24/7 productivity.
                </p>
                <h3>ROS Integration for AV Stacks</h3>
                <p>
                  Integrate annotation pipelines with Robot Operating System (ROS) environments via rosbag imports/exports. This enables seamless data flow between simulation (CARLA, AirSim), annotation platforms, and training frameworks (PyTorch, TensorFlow), reducing friction and format conversions.
                </p>
                <h3>ROI Quantification</h3>
                <p>
                  Establish baseline metrics: cost per annotated frame, throughput (frames/hour/annotator), error rates, and model mAP. After implementing AI-assisted workflows, expect 50-60% cost drops, doubled throughput, and 5-10% mAP gains—mirroring Bosch Research's 60-70% efficiency improvements on semantic segmentation tasks. Track ROI monthly to justify infrastructure investments and optimize processes.
                </p>
              </section>

              <section id="tools-platforms" className="mt-12 scroll-mt-24">
                <h2>Tools and Platforms</h2>
                <p>
                  Choosing the right annotation platform significantly impacts productivity, quality, and integration complexity.
                </p>
                <h3>Enterprise Platforms</h3>
                <p>
                  <strong>xequals.ai</strong> offers video-specific tools optimized for AV: automatic frame interpolation, 3D cuboid projection from lidar, HITL workflows with active learning, and GPU-accelerated pre-labeling. Enterprise features include SOC 2/GDPR compliance for fleet data, dedicated support, and custom integrations with AV stacks. Demo workflows showcase timeline compression from weeks to days.
                </p>
                <p>
                  <strong>Scale AI</strong> and <strong>Labelbox</strong> provide managed annotation services with vetted annotator workforces, project management, and quality assurance. Ideal for teams lacking in-house annotation capacity or requiring rapid scaling.
                </p>
                <p>
                  <strong>Encord</strong> specializes in video and DICOM, offering advanced tracking, consensus workflows, and model-assisted labeling. Strong on medical and AV use cases.
                </p>
                <h3>Open-Source Options</h3>
                <p>
                  <strong>CVAT (Computer Vision Annotation Tool)</strong> from Intel supports video, interpolation, and auto-tracking. Self-hosted for data sovereignty; integrates with TensorFlow/PyTorch for pre-labeling. Requires DevOps expertise to deploy and scale.
                </p>
                <p>
                  <strong>Label Studio</strong> offers flexible schema configuration and ML backend support. Lighter weight than CVAT; suitable for smaller teams or prototyping.
                </p>
                <h3>Feature Serving</h3>
                <p>
                  <strong>Feast</strong> (Feature Store) integrates with annotation pipelines to serve real-time features during inference. Pairs well with streaming platforms (Kafka, Kinesis) for continuous data flow.
                </p>
                <h3>Security and Compliance</h3>
                <p>
                  For AV fleets collecting sensitive location and biometric data, prioritize platforms with SOC 2 Type II, ISO 27001, and GDPR certifications. Ensure data residency controls (US, EU regions), encryption at rest (AES-256) and in transit (TLS 1.3), and audit logging for compliance reviews.
                </p>
              </section>

              <section id="conclusion" className="mt-12 scroll-mt-24">
                <h2>Conclusion: Accelerate AV Annotation</h2>
                <p>
                  Video annotation is the backbone of autonomous vehicle perception—transforming raw sensor feeds into labeled training data that powers safe, reliable navigation. By adopting AI-assisted workflows, real-time pipelines, and best-practice quality controls, AV teams achieve 50-60% cost reductions, doubled throughput, and 30-50% accuracy gains on edge cases.
                </p>
                <p>
                  Start with diverse seed datasets, leverage pre-labeling and active learning, enforce temporal consistency through tracking tools, and integrate with streaming infrastructure for continuous model updates. The result: faster iteration cycles, robust perception systems, and accelerated paths to commercial deployment.
                </p>
                <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-6 text-center">
                  <h3 className="mb-3 text-2xl font-semibold">Ready to optimize your AV annotation pipeline?</h3>
                  <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                    Our team specializes in video annotation workflows for autonomous vehicles. Let's design a custom solution with AI-assisted labeling, 3D sensor fusion, and real-time integration.
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
                    q: "How much does video annotation cost for AV datasets?",
                    a: "Manual annotation costs $0.03-0.10 per frame depending on complexity. AI-assisted workflows reduce this by 50-60%, bringing costs to $0.015-0.05/frame. A typical project annotating 1M frames costs $15K-$50K instead of $30K-$100K.",
                  },{
                    q: "What's the difference between 2D and 3D annotation?",
                    a: "2D bounding boxes label objects in camera frames without depth. 3D cuboids incorporate lidar data to provide position, orientation, and size in world coordinates—essential for distance estimation and path planning.",
                  },{
                    q: "How do I ensure temporal consistency across frames?",
                    a: "Use tracking tools that propagate object IDs across frames, enforce interpolation for smooth motion, and apply automated QC to detect ID jumps or tracking failures. Regular calibration with annotators prevents drift.",
                  },{
                    q: "Can I integrate annotation with my ROS-based AV stack?",
                    a: "Yes. Most platforms support rosbag import/export for seamless data flow. xequals.ai offers native ROS integration with automated pipelines from sensor capture to annotated training sets.",
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
                    quote: "Switching to AI-assisted video annotation cut our labeling costs by 58% and doubled our dataset growth rate. We now annotate 2M frames monthly instead of 800K.",
                    author: "VP of Perception, AV Startup (Series B)",
                  },{
                    quote: "3D cuboid annotation with sensor fusion improved our distance estimation mAP from 0.68 to 0.84. The workflow integration with ROS saved us weeks of manual data wrangling.",
                    author: "Principal Engineer, Autonomous Trucking Company",
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
            <Car className="h-4 w-4 text-primary" />
            <span>50-60% Cost Savings • Doubled Throughput • AV-Optimized</span>
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
