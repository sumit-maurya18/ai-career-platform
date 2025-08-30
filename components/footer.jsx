import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-gray-800 bg-background/40 backdrop-blur-sm">

            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* Left: Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start space-y-3">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="SensAI Logo"
                            width={160}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} SensAI. All rights reserved.
                    </p>
                </div>

                {/* Middle: Quick Links */}
                <div className="flex justify-center">
                    <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <Link href="/dashboard" className="hover:text-primary transition-colors">
                            Industry Insights
                        </Link>
                        <Link href="/resume" className="hover:text-primary transition-colors">
                            Resume Builder
                        </Link>
                        <Link href="/ai-cover-letter" className="hover:text-primary transition-colors">
                            Cover Letter
                        </Link>
                        <Link href="/interview" className="hover:text-primary transition-colors">
                            Interview Prep
                        </Link>
                    </nav>
                </div>

                {/* Right: Social Links */}
                <div className="flex justify-center md:justify-end gap-6">
                    <Link
                        href="mailto:contact@sensai.com"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="hidden group-hover:inline text-sm">Mail</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
