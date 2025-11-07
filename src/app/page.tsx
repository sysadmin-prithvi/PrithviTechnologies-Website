"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Zap, Shield, Award, Users, TrendingUp, Star, Quote } from "lucide-react";

export default function Home() {
  const valueProps = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Reduce annotation time by 80% with AI-assisted labeling and smart automation workflows."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2, HIPAA, and GDPR compliant. Your data is encrypted and protected at all levels."
    },
    {
      icon: Award,
      title: "Unmatched Quality",
      description: "99.9% accuracy with multi-stage QA process and expert annotator network."
    },
    {
      icon: Users,
      title: "Flexible Teams",
      description: "Scale seamlessly with our managed workforce or use your own annotation team."
    }
  ];

  const clients = [
    "Google Cloud", "Microsoft Azure", "AWS", "Meta", "OpenAI", "Anthropic"
  ];

  const testimonials = [
    {
      quote: "xequals.ai transformed our annotation workflow. We reduced costs by 60% while improving data quality.",
      author: "Sarah Chen",
      role: "Head of ML, TechCorp",
      rating: 5
    },
    {
      quote: "The platform's flexibility and API integration made it seamless to integrate with our existing ML pipeline.",
      author: "Michael Rodriguez",
      role: "CTO, DataFlow AI",
      rating: 5
    },
    {
      quote: "Best-in-class security and compliance features. Essential for our healthcare AI applications.",
      author: "Dr. Emily Watson",
      role: "Chief Data Officer, MedTech Solutions",
      rating: 5
    }
  ];

  const stats = [
    { value: "50M+", label: "Annotations Completed" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Trusted by Fortune 500 Companies</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Transform Your AI with High-Quality Data Annotation
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Enterprise-grade annotation platform for image, video, text, and audio data. Scale your ML projects with precision and speed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="text-lg h-14 px-8" asChild>
                  <Link href="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose xequals.ai</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built for ML teams who demand precision, speed, and scalability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:border-primary/50">
                  <prop.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Trusted by Industry Leaders</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {clients.map((client, index) => (
                <div key={index} className="text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  {client}
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex justify-center gap-8 flex-wrap">
              {[
                { icon: CheckCircle2, text: "SOC 2 Type II" },
                { icon: CheckCircle2, text: "HIPAA Compliant" },
                { icon: CheckCircle2, text: "GDPR Ready" },
                { icon: CheckCircle2, text: "ISO 27001" }
              ].map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <cert.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-xl text-muted-foreground">Join hundreds of companies transforming their ML workflows</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 relative hover:shadow-lg transition-all">
                  <Quote className="h-10 w-10 text-primary/20 absolute top-4 right-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI/ML Lifecycle Schematic */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Seamless Integration in Your ML Pipeline</h2>
              <p className="text-xl text-muted-foreground">From data collection to model deployment</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { title: "Data Collection", desc: "Import from any source" },
                  { title: "Annotation", desc: "Our platform", highlight: true },
                  { title: "Quality Check", desc: "Multi-stage QA" },
                  { title: "Model Training", desc: "Your ML pipeline" },
                  { title: "Deployment", desc: "Production ready" }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <Card className={`p-6 text-center ${step.highlight ? 'border-primary bg-primary/5' : ''}`}>
                      <div className={`w-10 h-10 rounded-full ${step.highlight ? 'bg-primary' : 'bg-secondary'} text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold`}>
                        {index + 1}
                      </div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </Card>
                    {index < 4 && (
                      <ArrowRight className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your AI?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start annotating with xequals.ai today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}