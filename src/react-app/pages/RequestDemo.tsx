import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Textarea } from "@/react-app/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/react-app/components/ui/card";
import { Label } from "@/react-app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react-app/components/ui/select";
import { CheckCircle, Calendar, Users, School, Sparkles } from "lucide-react";
import { Link } from "react-router";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    role: "",
    studentCount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Demo request submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        schoolName: "",
        role: "",
        studentCount: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://019c60c0-d4f7-7efa-b79d-4617b9aaaa97.mochausercontent.com/uniq-high-resolution-logo-transparent.png"
              alt="UniqCamp"
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/demo" className="text-sm font-medium text-primary">
              Request Demo
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Link to="/contact">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full border border-secondary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">See UniqCamp in Action</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              Request a Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Experience firsthand how UniqCamp can transform your school's dismissal process. Schedule a personalized demo with our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent shadow-xl shadow-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl">What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      icon: <School className="w-5 h-5" />,
                      title: "Complete Platform Tour",
                      desc: "Explore all features across parent, teacher, and admin apps",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Live QR System Demo",
                      desc: "See real-time dismissal requests and notifications",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5" />,
                      title: "Security Features",
                      desc: "Learn about geofencing, verification, and safety protocols",
                    },
                    {
                      icon: <Calendar className="w-5 h-5" />,
                      title: "Implementation Plan",
                      desc: "Get a customized roadmap for your school",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Demo Duration</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our demos typically last 30-45 minutes, with time for Q&A.
                  </p>
                  <h4 className="font-semibold mb-3">Available Times</h4>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM EST
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Demo Request Form */}
            <Card className="lg:col-span-3 border-2 shadow-xl shadow-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Fill in Your Details</CardTitle>
                <p className="text-muted-foreground">We'll reach out within 24 hours to schedule your demo</p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Request Received!</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Thank you for your interest in UniqCamp. Our team will contact you within 24 hours to schedule your personalized demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="border-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@school.edu"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (234) 567-890"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="border-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="schoolName">School Name *</Label>
                      <Input
                        id="schoolName"
                        name="schoolName"
                        placeholder="Springfield Elementary School"
                        value={formData.schoolName}
                        onChange={handleChange}
                        required
                        className="border-2"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) => handleSelectChange("role", value)}
                          required
                        >
                          <SelectTrigger className="border-2">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="principal">Principal</SelectItem>
                            <SelectItem value="administrator">Administrator</SelectItem>
                            <SelectItem value="teacher">Teacher</SelectItem>
                            <SelectItem value="it-manager">IT Manager</SelectItem>
                            <SelectItem value="superintendent">Superintendent</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentCount">Number of Students *</Label>
                        <Select
                          value={formData.studentCount}
                          onValueChange={(value) => handleSelectChange("studentCount", value)}
                          required
                        >
                          <SelectTrigger className="border-2">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-100">0-100</SelectItem>
                            <SelectItem value="100-300">100-300</SelectItem>
                            <SelectItem value="300-500">300-500</SelectItem>
                            <SelectItem value="500-1000">500-1000</SelectItem>
                            <SelectItem value="1000+">1000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your current dismissal process and any specific challenges..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[100px] border-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                      Schedule My Demo
                      <Calendar className="ml-2 w-4 h-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to receive communications from UniqCamp. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto">
            Join 500+ Schools Already Using UniqCamp
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "98%", label: "Customer Satisfaction" },
              { value: "50K+", label: "Daily Dismissals" },
              { value: "70%", label: "Time Saved" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <img
                src="https://019c60c0-d4f7-7efa-b79d-4617b9aaaa97.mochausercontent.com/uniq-high-resolution-logo-transparent.png"
                alt="UniqCamp"
                className="h-8 w-auto"
              />
              <p className="text-sm text-muted-foreground">
                Revolutionizing school dismissal management with smart technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/#benefits" className="hover:text-foreground transition-colors">Benefits</Link></li>
                <li><Link to="/#how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/demo" className="hover:text-foreground transition-colors">Request Demo</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} UniqCamp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
