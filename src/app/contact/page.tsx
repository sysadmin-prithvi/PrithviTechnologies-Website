"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Send, Users, Target, Award, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@xequals-ai.com",
      description: "We'll respond within 1-2 business days"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Shop No.23, 3rd Floor, Vivekanand Corner, Desai Cross, Hubli, Karnataka",
      description: "By appointment only"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former ML researcher at Google Brain. PhD in Computer Vision from Stanford.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Tesla Autopilot engineer. Built annotation pipelines for 10M+ images.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      bio: "Previously at Scale AI. Expert in ML platform design and UX.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Led annotation teams at Amazon. 15+ years in ML infrastructure.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded", description: "Started with a vision to democratize AI annotation" },
    { year: "2020", event: "1M Annotations", description: "Processed our first million annotations" },
    { year: "2021", event: "Series A", description: "Raised $15M to scale platform and team" },
    { year: "2022", event: "Enterprise Launch", description: "Launched enterprise platform with Fortune 500 clients" },
    { year: "2023", event: "50M Annotations", description: "Reached 50M+ annotations milestone" },
    { year: "2024", event: "Global Expansion", description: "Opened offices in Europe and Asia" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precision First",
      description: "We obsess over data quality because your models deserve the best training data."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your ML goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We set the bar high and continuously innovate to stay ahead of the curve."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We leverage cutting-edge AI to make annotation faster, better, and more accessible."
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
                Let's Build Something Amazing Together
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Whether you're starting a new project or scaling an existing one, we're here to help
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Type of Inquiry</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or question..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out through any of these channels. We're always happy to help!
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="p-6 hover:border-primary/50 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <method.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-foreground mb-1">{method.detail}</p>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent">
                  <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Book a meeting or browse our guides and tutorials for instant answers.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button asChild className="w-full">
                      <Link href="https://outlook.office.com/bookwithme/user/16d11e30b2d346039bf4c4d899fcde80@xequals-ai.com/meetingtype/pCHGHjMD1keaoIyH12dwdg2?anonymous&ep=mlink">
                        Schedule Meeting
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="https://xequals-ai.com/resources/">
                        Visit Guides & Tutorials
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About xequals.ai</h2>
              <p className="text-xl text-muted-foreground">
                We're on a mission to make high-quality data annotation accessible to every ML team.
                Founded by AI researchers and engineers, we understand the challenges of building production ML systems.
              </p>
            </div>

            {/* Company Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:border-primary/50 transition-all">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-xl text-muted-foreground">
                Experienced leaders from top AI companies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Company Timeline */}
        {/* <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                From startup to industry leader
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-24">
                      <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                    </div>
                    <Card className="flex-1 p-6">
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us on Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We're always looking for talented people who share our passion for AI and data quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">View Open Positions</Button>
              <Button size="lg" variant="outline">Learn More About Us</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}