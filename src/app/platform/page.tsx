"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Layers, Users, BarChart, Settings, Code, Cloud, 
  Lock, Shield, Key, Database, Zap, CheckCircle2 
} from "lucide-react";

export default function PlatformPage() {
  const platformFeatures = [
    {
      icon: Layers,
      title: "Configurable Templates",
      description: "Create custom annotation workflows with drag-and-drop template builder"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access control, team management, and real-time collaboration"
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track progress, quality metrics, and team performance in real-time"
    },
    {
      icon: Settings,
      title: "Workflow Automation",
      description: "Automate repetitive tasks with ML-assisted labeling and smart routing"
    },
    {
      icon: Code,
      title: "API & SDK",
      description: "Comprehensive REST API and Python SDK for seamless integration"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Native integration with AWS S3, Google Cloud Storage, and Azure Blob"
    }
  ];

  const integrations = [
    { name: "Python SDK", desc: "pip install xequals-sdk", icon: Code },
    { name: "REST API", desc: "RESTful endpoints", icon: Zap },
    { name: "AWS S3", desc: "Direct S3 integration", icon: Cloud },
    { name: "Google Cloud", desc: "GCS storage support", icon: Cloud },
    { name: "Webhooks", desc: "Event notifications", icon: Settings },
    { name: "Export Formats", desc: "COCO, YOLO, Pascal VOC", icon: Database }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data encrypted in transit (TLS 1.3) and at rest (AES-256)"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "SOC 2 Type II, HIPAA, GDPR, and ISO 27001 certified"
    },
    {
      icon: Key,
      title: "Role-Based Access",
      description: "Granular permissions and multi-factor authentication"
    },
    {
      icon: Database,
      title: "Data Residency",
      description: "Choose where your data is stored and processed"
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
                Powerful Platform for Every Team
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                From open-source to enterprise, we have a solution that scales with your needs
              </p>
            </div>
          </div>
        </section>

        {/* Platform Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="enterprise" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12">
                <TabsTrigger value="opensource">Open Source</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>
              
              <TabsContent value="opensource" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Open Source Platform</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Self-hosted solution for teams who want full control over their annotation infrastructure
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold mb-3">Features</h3>
                      <ul className="space-y-2">
                        {[
                          "Self-hosted deployment",
                          "Unlimited users & projects",
                          "Core annotation tools",
                          "Community support",
                          "Apache 2.0 license"
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Best For</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Research projects</li>
                        <li>• Academic institutions</li>
                        <li>• Small teams</li>
                        <li>• Proof of concept</li>
                        <li>• Custom deployments</li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://github.com">View on GitHub</Link>
                  </Button>
                </Card>
              </TabsContent>
              
              <TabsContent value="enterprise" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Enterprise Platform</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Fully managed cloud platform with advanced features, security, and dedicated support
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold mb-3">Features</h3>
                      <ul className="space-y-2">
                        {[
                          "Cloud-hosted (AWS/GCP/Azure)",
                          "Advanced AI-assisted labeling",
                          "Priority support & SLA",
                          "SSO & advanced security",
                          "Custom integrations",
                          "Dedicated account manager"
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Best For</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Enterprise ML teams</li>
                        <li>• Production workloads</li>
                        <li>• Regulated industries</li>
                        <li>• Large-scale projects</li>
                        <li>• Mission-critical applications</li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage annotation projects at scale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-all">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Seamless Integrations</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with your existing ML infrastructure and tools
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {integrations.map((integration, index) => (
                <Card key={index} className="p-6 text-center hover:border-primary/50 transition-all">
                  <integration.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-sm mb-1">{integration.name}</h4>
                  <p className="text-xs text-muted-foreground">{integration.desc}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="p-6 bg-secondary/50">
                <h3 className="text-lg font-semibold mb-3">API Example</h3>
                <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm font-mono">
{`import xequals

client = xequals.Client(api_key="your_key")

# Create annotation project
project = client.projects.create(
    name="Image Classification",
    type="image_classification"
)

# Upload data
project.upload_images(["img1.jpg", "img2.jpg"])

# Export annotations
annotations = project.export(format="coco")`}
                </pre>
              </Card>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade Security</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your data security and compliance is our top priority
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:border-primary/50 transition-all">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center gap-6 flex-wrap">
              {["SOC 2 Type II", "HIPAA", "GDPR", "ISO 27001", "CCPA"].map((cert, index) => (
                <div key={index} className="px-6 py-3 rounded-lg bg-secondary text-center">
                  <span className="font-semibold">{cert}</span>
                  <div className="text-xs text-muted-foreground mt-1">Certified</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Choose the platform that fits your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Try Enterprise Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com">View Open Source</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}