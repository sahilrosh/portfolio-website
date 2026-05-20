"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Award,
  Github,
  Linkedin,
  CheckCircle2,
  ExternalLink,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
interface CredlyBadge {
  id: string;
  title: string;
  credlyUrl: string;
  /** Image or PDF under public/ (e.g. /badges/name.png or .pdf) */
  previewSrc: string;
}

interface CertificateItem {
  id: string;
  title: string;
  /** Shown inline when set (e.g. PNG under public/) */
  imageSrc?: string;
  /** Optional PDF for download / iframe when no image */
  pdfPath?: string;
}

function isPdfPath(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

function CredlyBadgeCard({
  badge,
  index,
}: {
  badge: CredlyBadge;
  index: number;
}) {
  const [showRaster, setShowRaster] = React.useState(true);
  const previewUrl = encodeURI(badge.previewSrc);
  const pdf = isPdfPath(badge.previewSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card className="h-full overflow-hidden p-0 hover:shadow-lg transition-shadow">
        <div className="flex flex-col h-full rounded-lg">
          <div className="relative flex items-center justify-center bg-muted/40 dark:bg-muted/20 p-2 min-h-[200px]">
            {pdf ? (
              <iframe
                title={badge.title}
                src={previewUrl}
                className="h-[200px] w-full rounded-md border-0 bg-neutral-100 dark:bg-neutral-900"
              />
            ) : showRaster ? (
              <img
                src={badge.previewSrc}
                alt={badge.title}
                className="max-h-[180px] w-auto max-w-full object-contain rounded-md shadow-sm"
                onError={() => setShowRaster(false)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground text-center px-4 py-8">
                <Award className="w-14 h-14 opacity-70" aria-hidden />
                <span className="text-xs">
                  Add a preview at{" "}
                  <code className="text-[10px] bg-muted px-1 py-0.5 rounded">
                    public{badge.previewSrc}
                  </code>
                </span>
              </div>
            )}
          </div>
          <div className="p-5 flex flex-col flex-1 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
              {badge.title}
            </h3>
            <a
              href={badge.credlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              View on Credly
              <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function CertificateCard({
  cert,
  index,
}: {
  cert: CertificateItem;
  index: number;
}) {
  const imageUrl = cert.imageSrc ? encodeURI(cert.imageSrc) : null;
  const pdfUrl = cert.pdfPath ? encodeURI(cert.pdfPath) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card className="overflow-hidden p-0 h-full hover:shadow-lg transition-shadow flex flex-col">
        <div className="p-5 pb-0 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-primary" aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground leading-snug">
              {cert.title}
            </h3>
            {pdfUrl ? (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Download PDF
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
        <div className="p-4 pt-3 flex-1 min-h-0">
          <div className="rounded-lg border border-border overflow-hidden bg-muted/30">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={cert.title}
                className="w-full h-auto max-h-[min(70vh,720px)] object-contain object-top bg-neutral-100 dark:bg-neutral-950"
              />
            ) : pdfUrl ? (
              <iframe
                title={cert.title}
                src={pdfUrl}
                className="w-full min-h-[420px] h-[min(70vh,560px)] border-0 bg-neutral-100 dark:bg-neutral-950"
              />
            ) : null}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function BadgesSection({
  badges,
  certificates,
}: {
  badges: CredlyBadge[];
  certificates: CertificateItem[];
}) {
  return (
    <section id="badges-section" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Badges & Certifications
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Credly-backed Unity credentials and downloadable certificates (AR,
            VR, and essentials).
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold text-foreground mb-6 tracking-tight"
        >
          Badges
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, index) => (
            <CredlyBadgeCard key={badge.id} badge={badge} index={index} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold text-foreground mb-6 tracking-tight"
        >
          Certificates
        </motion.h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-section" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:sahil8055roshan@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      sahil8055roshan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+919880700801"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9880700801
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      Bangalore, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>

              <Separator className="my-8" />

              <div>
                <h4 className="font-medium text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-3 items-center">
                  {[
                    { icon: Github, href: "https://github.com/sahilrosh" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/sahil-roshan-299469286/" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                  <a
                    href="/resume.pdf"
                    download="Sahil_Roshan_Resume.pdf"
                    className="ml-auto text-sm text-muted-foreground hover:text-primary transition-colors underline"
                  > <b>
                    Download Resume
                    </b>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
                      <p className="text-sm text-destructive">{error}</p>
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    <Send className="w-4 h-4 mr-2" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const CREDLY_BADGES: CredlyBadge[] = [
  {
    id: "unity-vr",
    title: "Unity VR Development",
    credlyUrl:
      "https://www.credly.com/badges/44a15bfa-387a-4d5a-bd84-0f505d3e581e/public_url",
    previewSrc: "/badges/Unity VR Development.pdf",
  },
  {
    id: "unity-mobile-ar",
    title: "Unity Mobile AR Development",
    credlyUrl:
      "https://www.credly.com/badges/7fec38ba-8417-477f-807f-9aa9fc21a6f8/public_url",
    previewSrc: "/badges/Unity Mobile AR Development.pdf",
  },
  {
    id: "unity-essentials",
    title: "Unity Essentials",
    credlyUrl:
      "https://www.credly.com/badges/2564f6e5-b513-48ad-ae15-b7cb2ea7ee64/public_url",
    previewSrc: "/badges/Unity Essentials.pdf",
  },
];

const CERTIFICATES: CertificateItem[] = [
  {
    id: "unity-certified-associate",
    title: "Unity Certified Associate",
    imageSrc: "/Certificates/unity certificate associate.png",
    pdfPath: "/Certificates/Unity Certified Associate.pdf",
  },
];

// Main Experience Component
export function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <BadgesSection badges={CREDLY_BADGES} certificates={CERTIFICATES} />
      <ContactSection />
    </div>
  );
}

