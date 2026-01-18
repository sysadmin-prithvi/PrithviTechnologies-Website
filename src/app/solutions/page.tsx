"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Image, Video, Mic, FileText, Activity, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SolutionsPage() {
  const annotationTypes = [
    {
      icon: Image,
      title: "Image Annotation",
      description: "Precise labeling for computer vision models",
      features: [
        "Object Detection & Bounding Boxes",
        "Semantic & Instance Segmentation",
        "Image Classification & Tagging",
        "Keypoint & Landmark Detection",
        "3D Cuboid Annotation"
      ]
    },
    {
      icon: Video,
      title: "Video Annotation",
      description: "Frame-by-frame tracking and temporal analysis",
      features: [
        "Object Tracking Across Frames",
        "Activity Recognition",
        "Frame Interpolation",
        "Scene Understanding",
        "Motion Path Tracking"
      ]
    },
    {
      icon: Mic,
      title: "Audio Annotation",
      description: "Speech and sound labeling for audio models",
      features: [
        "Speech Transcription",
        "Speaker Diarization",
        "Emotion & Sentiment Analysis",
        "Sound Event Detection",
        "Audio Classification"
      ]
    },
    {
      icon: FileText,
      title: "Text/NLP Annotation",
      description: "Natural language processing data labeling",
      features: [
        "Named Entity Recognition (NER)",
        "Text Classification",
        "Sentiment Analysis",
        "Relationship Extraction",
        "Intent Recognition"
      ]
    },
    {
      icon: Activity,
      title: "Multi-Domain Data",
      description: "Specialized annotation for complex datasets",
      features: [
        "IoT & Sensor Data",
        "Time Series Analysis",
        "Robotics & Autonomous Systems",
        "Multimodal Data Fusion",
        "LiDAR & Point Cloud"
      ]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "Medical imaging analysis and patient data processing",
      examples: ["Radiology image segmentation", "Disease detection", "Patient monitoring"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      industry: "Autonomous Vehicles",
      description: "Training self-driving systems with precision",
      examples: ["Lane detection", "Pedestrian tracking", "Traffic sign recognition"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
    },
    {
      industry: "Agriculture",
      description: "Smart farming and crop monitoring solutions",
      examples: ["Crop disease detection", "Yield prediction", "Drone imagery analysis"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
    },
    {
      industry: "Retail & E-commerce",
      description: "Product recognition and customer analytics",
      examples: ["Visual search", "Inventory management", "Customer behavior analysis"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
    },
    {
      industry: "Research & Academia",
      description: "Scientific data analysis and experimentation",
      examples: ["Experimental data labeling", "Survey analysis", "Pattern recognition"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
    },
    {
      industry: "Security & Surveillance",
      description: "Real-time threat detection and monitoring",
      examples: ["Anomaly detection", "Face recognition", "Behavioral analysis"],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop"
    }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Data Upload",
      description: "Import your datasets from any source - cloud storage, APIs, or direct upload"
    },
    {
      step: "2",
      title: "Task Configuration",
      description: "Define annotation guidelines, provide sample annotated data, create custom templates, and set quality thresholds"
    },
    {
    step: "3",
    title: "Expert Human Review",
    description: "Skilled annotators carefully label your data, focusing on edge cases and project-specific nuances."
    },
    {
    step: "4",
    title: "Multi‑Stage Quality Assurance",
    description: "Independent QA passes and consensus checks ensure up to 99.9% label accuracy before approval."
    },
    {
      step: "5",
      title: "Export & Integration",
      description: "Download annotated data in any format or integrate via API"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Data Annotation Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                From images to audio, we provide expert annotation services across all data types for your ML and AI projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Annotation Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Data Annotation Types</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized tools and expertise for every type of data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {annotationTypes.map((type, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-all">
                  <type.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases by Industry */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Use Cases</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading companies across diverse industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.industry}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{useCase.industry}</h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-1">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Walkthrough */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Annotation Workflow</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Streamlined process from data upload to delivery
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {workflowSteps.map((item, index) => (
                  <Card key={index} className="p-6 relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Average turnaround time: 24-48 hours for most projects
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Start Your First Project</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Annotating?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get expert annotation services tailored to your project needs
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}