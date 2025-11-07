import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <span className="text-primary-foreground font-bold text-xl font-mono">X</span>
              </div>
              <span className="text-xl font-bold">xequals.ai</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform Your AI with High-Quality Data Annotation. Enterprise-grade annotation platform for ML teams.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/platform" className="text-muted-foreground hover:text-primary transition-colors">Platform</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/compliance" className="text-muted-foreground hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 xequals.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground">SOC 2</span>
                <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground">HIPAA</span>
                <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground">GDPR</span>
                <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}