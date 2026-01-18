"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, Users, Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Project Manager",
      type: "Full-time",
      location: "Hybrid",
      department: "Operations",
      description: "Lead projects to deliver high quality AI applications",
      responsibilities: [
        "Run end-to-end annotation projects—from planning to delivery",
        "Build clear plans, timelines, and resourcing",
        "Partner with clients to define needs and outcomes",
        "Track progress, quality, and team output",
        "Fix risks that could delay or reduce quality",
        "Work with QA to meet standards",
        "Improve workflows for speed and accuracy",
        "Share regular status updates"
      ],
      qualifications: [
        "Bachelor's in CS, Data, Business, or related",
        "1+ years in project management; data focus ideal",
        "Exposure to annotation/AI/ML is a plus",
        "Success leading complex teams/projects",
        "Excellent communication and client care"
      ],
      skills: [
        "Leadership and people management",
        "Strong organization and time planning",
        "Problem-solving and critical thinking",
        "Client communication and relationships",
        "Budget and resource planning",
        "Annotation basics and processes",
        "Proficient with PM software"
      ],
      workEnvironment: "Hybrid work model with some on-site presence required for team coordination and client meetings. Full-time position with occasional flexibility required for global client communication."
    },
    {
      title: "Software Developer Intern",
      type: "Full-time Internship",
      location: "Hybrid",
      department: "Engineering",
      description: "Hands-on experience designing, building, and deploying high quality AI applications",
      responsibilities: [
        "Assist in designing, developing, and testing Python-based software for machine learning applications",
        "Support building and experimenting with machine learning models for practical use cases",
        "Learn to manage ML workflows using tools like MLflow, from training to basic deployment",
        "Work in Linux environments, practicing Git for version control and code collaboration",
        "Document code, experiments, and processes to build strong development habits"
      ],
      qualifications: [
        "Recent graduate with Bachelor's degree in Computer Science, Data Science, Engineering, or related field",
        "0–12 months of experience in software development or personal projects",
        "Understanding of Python programming and machine learning concepts",
        "Familiarity with Linux, Git, or ML tools like MLflow (a plus)"
      ],
      skills: [
        "Foundational programming skills in Python",
        "Interest in machine learning frameworks and model basics",
        "Comfort with Linux commands and Git workflows",
        "Work autonomously as well as collaborate in team",
        "Strong curiosity and willingness to tackle new technical challenges"
      ],
      workEnvironment: "Hybrid work model with some on-site presence required for team coordination and client meetings. Full-time position with occasional flexibility required for client communication."
    }
  ];

  const benefits = [
    "Competitive compensation",
    "Hybrid work flexibility",
    "Professional development opportunities",
    "Collaborative team environment",
    "Work on cutting-edge AI projects",
    "Global client exposure"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Join Our Growing Team
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                Be part of a team building the future of AI-powered data annotation
              </p>
              <Button size="lg" asChild>
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
              <p className="text-muted-foreground">
                Join a dynamic team at the forefront of AI and machine learning
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="openings" className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Find the perfect role to grow your career
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-8 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-lg text-muted-foreground">{job.description}</p>
                      </div>
                      <Button size="lg" asChild>
                        <a href="mailto:info@xequals-ai.com?subject=Application for {job.title}">
                          Apply Now
                          <Mail className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {job.department}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Qualifications</h4>
                        <ul className="space-y-2">
                          {job.qualifications.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Required Skills</h4>
                        <ul className="space-y-2">
                          {job.skills.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-8 pb-8">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Work Environment
                      </h4>
                      <p className="text-muted-foreground text-sm">{job.workEnvironment}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Send your CV/resume to get started
            </p>
            <div className="flex items-center justify-center gap-2 text-lg mb-8">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@xequals-ai.com" className="text-primary hover:underline font-semibold">
                info@xequals-ai.com
              </a>
            </div>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://xequals-ai.com" target="_blank">
                Visit xequals-ai.com
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
