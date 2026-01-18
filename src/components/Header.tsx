"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/platform", label: "Platform" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }];


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
              <span className="text-primary-foreground font-bold text-xl font-mono">X</span>
            </div>
            <span className="text-xl font-bold !whitespace-pre-line">XEqualsAI</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary text-muted-foreground hover:text-foreground">

                {link.label}
              </Link>
            )}
            <Button variant="outline" size="sm" asChild>
              <Link href="/annotation/login">Login</Link>
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">

            {mobileMenuOpen ?
            <X className="h-6 w-6" /> :

            <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>

      {mobileMenuOpen &&
      <div className="md:hidden border-t border-border/40">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}>

                {link.label}
              </Link>
            )}
            <Button variant="outline" size="sm" asChild className="w-full mt-2">
              <Link href="/annotation/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            </Button>
            </nav>
        </div>
      }
    </header>);

}