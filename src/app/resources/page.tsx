"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, FileText, Download, Search, Calendar, ArrowRight, Award } from "lucide-react";

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "Best Practices for Image Annotation in Computer Vision",
      excerpt: "Learn the proven techniques for high-quality image labeling that improves model accuracy.",
      category: "Tutorial",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      href: "#"
    },
    {
      title: "How AI-Assisted Annotation Reduces Costs by 60%",
      excerpt: "Discover how machine learning models can pre-label your data and accelerate workflows.",
      category: "Article",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      href: "/resources/ai-assisted-annotation-reduces-costs-60"
    },
    {
      title: "Video Annotation for Autonomous Vehicles: A Deep Dive",
      excerpt: "Technical insights into frame-by-frame annotation for self-driving car systems.",
      category: "Technical",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      href: "#"
    },
    {
      title: "Scaling Your Annotation Team: Lessons Learned",
      excerpt: "Real-world strategies for managing large annotation projects and distributed teams.",
      category: "Case Study",
      date: "2023-12-20",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      href: "#"
    },
    {
      title: "The Future of NLP: Trends in Text Annotation",
      excerpt: "Emerging techniques in natural language processing and their impact on annotation.",
      category: "Article",
      date: "2023-12-15",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
      href: "#"
    }
  ];

  const caseStudies = [
    {
      company: "HealthTech AI",
      industry: "Healthcare",
      title: "Reducing Radiology Annotation Time by 75%",
      results: "50K images annotated, 99.8% accuracy, 3-week delivery",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
    },
    {
      company: "AutoDrive Systems",
      industry: "Autonomous Vehicles",
      title: "Scaling Object Detection for Self-Driving Cars",
      results: "2M frames annotated, 15 object classes, Real-time pipeline",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop"
    },
    {
      company: "AgriVision",
      industry: "Agriculture",
      title: "Crop Disease Detection with 98% Accuracy",
      results: "100K drone images, 25 disease types, 95% cost reduction",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop"
    }
  ];

  const whitepapers = [
    {
      title: "The Complete Guide to Data Annotation for Machine Learning",
      description: "Comprehensive 50-page guide covering all aspects of annotation",
      pages: "50 pages",
      format: "PDF"
    },
    {
      title: "ROI Calculator: In-House vs. Outsourced Annotation",
      description: "Financial analysis and decision framework for annotation strategies",
      pages: "15 pages",
      format: "PDF + Excel"
    },
    {
      title: "Security & Compliance in Data Annotation",
      description: "Best practices for GDPR, HIPAA, and SOC 2 compliance",
      pages: "32 pages",
      format: "PDF"
    },
    {
      title: "Benchmark Report: Annotation Platform Comparison 2024",
      description: "Independent analysis of top annotation tools and platforms",
      pages: "45 pages",
      format: "PDF"
    }
  ];

  const faqs = [
    {
      category: "General",
      questions: [
        { q: "What types of data can you annotate?", a: "We support image, video, text, audio, and multi-modal data annotation." },
        { q: "How long does annotation typically take?", a: "Most projects are completed within 24-48 hours, depending on volume and complexity." },
        { q: "Can I use my own annotation team?", a: "Yes, our platform supports both managed workforce and bring-your-own-team models." }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        { q: "Are you HIPAA compliant?", a: "Yes, we are HIPAA, SOC 2, GDPR, and ISO 27001 certified." },
        { q: "How is my data protected?", a: "All data is encrypted with AES-256 at rest and TLS 1.3 in transit." },
        { q: "Can I control where my data is stored?", a: "Yes, enterprise customers can choose their data residency region." }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        { q: "How does pricing work?", a: "We offer per-project, per-annotation, and subscription-based pricing models." },
        { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial with full platform access." },
        { q: "What payment methods do you accept?", a: "We accept all major credit cards, ACH, and wire transfers for enterprise." }
      ]
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
                Resources & Knowledge Center
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Guides, case studies, and best practices to help you succeed with data annotation
              </p>
              <div className="max-w-xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search articles, guides, case studies..." 
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="blog" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 mb-12">
                <TabsTrigger value="blog">Blog</TabsTrigger>
                <TabsTrigger value="cases">Case Studies</TabsTrigger>
                <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              {/* Blog Tab */}
              <TabsContent value="blog" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <Button variant="ghost" className="group/btn" asChild>
                          <Link href={post.href}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Case Studies Tab */}
              <TabsContent value="cases" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.company}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-primary font-semibold mb-2">{study.industry}</div>
                        <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                        <p className="text-muted-foreground mb-4">{study.results}</p>
                        <Button variant="ghost" asChild>
                          <Link href="#">
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* Whitepapers Tab */}
              <TabsContent value="whitepapers" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {whitepapers.map((paper, index) => (
                    <Card key={index} className="p-6 hover:border-primary/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                            <FileText className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                          <p className="text-muted-foreground mb-4">{paper.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span>{paper.pages}</span>
                            <span>•</span>
                            <span>{paper.format}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {faqs.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-2xl font-semibold mb-6">{section.category}</h3>
                      <div className="space-y-4">
                        {section.questions.map((item, idx) => (
                          <Card key={idx} className="p-6">
                            <h4 className="font-semibold mb-2 flex items-start gap-2">
                              <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              {item.q}
                            </h4>
                            <p className="text-muted-foreground ml-7">{item.a}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Download className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">Download Starter Pack</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get our complete annotation workflow templates, dataset examples, and best practices guide
              </p>
              <Button size="lg">
                Download Free Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our team is here to help you get started
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}