"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Zap, Building2, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and proof of concepts",
      icon: Zap,
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Up to 5,000 annotations/month",
        "5 team members",
        "Core annotation tools",
        "Email support",
        "API access",
        "Basic analytics",
        "Cloud storage (10GB)"
      ],
      cta: "Start Free Trial",
      highlighted: false
    },
    {
      name: "Professional",
      description: "For growing teams with production workloads",
      icon: Building2,
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Up to 50,000 annotations/month",
        "Unlimited team members",
        "All annotation tools",
        "Priority support",
        "Advanced API & webhooks",
        "Advanced analytics & reporting",
        "Cloud storage (100GB)",
        "Custom templates",
        "AI-assisted labeling",
        "Quality assurance tools"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large-scale operations",
      icon: Sparkles,
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited annotations",
        "Unlimited team members",
        "All Professional features",
        "24/7 phone & email support",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment option",
        "SSO & advanced security",
        "SLA guarantees",
        "Custom data residency",
        "White-label options",
        "Custom ML model training"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const comparisonFeatures = [
    {
      category: "Annotation Features",
      features: [
        { name: "Image Annotation", starter: true, pro: true, enterprise: true },
        { name: "Video Annotation", starter: true, pro: true, enterprise: true },
        { name: "Text/NLP Annotation", starter: true, pro: true, enterprise: true },
        { name: "Audio Annotation", starter: false, pro: true, enterprise: true },
        { name: "AI-Assisted Labeling", starter: false, pro: true, enterprise: true },
        { name: "Custom Workflows", starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: "Team & Collaboration",
      features: [
        { name: "Team Members", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Role-based Access", starter: true, pro: true, enterprise: true },
        { name: "Project Management", starter: "Basic", pro: "Advanced", enterprise: "Enterprise" },
        { name: "Real-time Collaboration", starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: "Integration & API",
      features: [
        { name: "REST API", starter: true, pro: true, enterprise: true },
        { name: "Python SDK", starter: true, pro: true, enterprise: true },
        { name: "Webhooks", starter: false, pro: true, enterprise: true },
        { name: "Custom Integrations", starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Support & SLA",
      features: [
        { name: "Email Support", starter: true, pro: true, enterprise: true },
        { name: "Priority Support", starter: false, pro: true, enterprise: true },
        { name: "24/7 Phone Support", starter: false, pro: false, enterprise: true },
        { name: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
        { name: "SLA Guarantees", starter: false, pro: false, enterprise: true }
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Choose the plan that fits your needs. All plans include a 14-day free trial.
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-12">
                <Label htmlFor="billing-toggle" className={!isAnnual ? "font-semibold" : ""}>
                  Monthly
                </Label>
                <Switch 
                  id="billing-toggle" 
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                />
                <Label htmlFor="billing-toggle" className={isAnnual ? "font-semibold" : ""}>
                  Annual
                  <span className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    Save 20%
                  </span>
                </Label>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`p-8 relative ${
                    plan.highlighted 
                      ? 'border-primary shadow-lg scale-105' 
                      : ''
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <plan.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold">
                            ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                          </span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        {isAnnual && (
                          <p className="text-sm text-muted-foreground mt-2">
                            ${plan.annualPrice} billed annually
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-4xl font-bold">Custom</div>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full mb-6" 
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <Link href={plan.monthlyPrice ? "/signup" : "/contact"}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Comparison</h2>
              <p className="text-xl text-muted-foreground">
                Compare all features across plans
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-center py-4 px-4">Starter</th>
                    <th className="text-center py-4 px-4">Professional</th>
                    <th className="text-center py-4 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section, sectionIdx) => (
                    <>
                      <tr key={`section-${sectionIdx}`} className="bg-secondary/50">
                        <td colSpan={4} className="py-3 px-4 font-semibold">
                          {section.category}
                        </td>
                      </tr>
                      {section.features.map((feature, featureIdx) => (
                        <tr key={`feature-${sectionIdx}-${featureIdx}`} className="border-b border-border">
                          <td className="py-3 px-4">{feature.name}</td>
                          <td className="text-center py-3 px-4">
                            {typeof feature.starter === 'boolean' ? (
                              feature.starter ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )
                            ) : (
                              <span className="text-sm">{feature.starter}</span>
                            )}
                          </td>
                          <td className="text-center py-3 px-4">
                            {typeof feature.pro === 'boolean' ? (
                              feature.pro ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )
                            ) : (
                              <span className="text-sm">{feature.pro}</span>
                            )}
                          </td>
                          <td className="text-center py-3 px-4">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? (
                                <Check className="h-5 w-5 text-primary mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )
                            ) : (
                              <span className="text-sm">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Pricing FAQ</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Can I change plans later?",
                    a: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle."
                  },
                  {
                    q: "What happens after my free trial?",
                    a: "After 14 days, you'll be automatically enrolled in the plan you selected. Cancel anytime before the trial ends with no charge."
                  },
                  {
                    q: "Do you offer refunds?",
                    a: "Yes, we offer a 30-day money-back guarantee on all annual plans."
                  },
                  {
                    q: "What payment methods do you accept?",
                    a: "We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers."
                  },
                  {
                    q: "Are there any setup fees?",
                    a: "No setup fees for Starter and Professional plans. Enterprise plans may include implementation services."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}