import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import {
  Users,
  Shield,
  Smartphone,
  QrCode,
  Bell,
  CheckCircle,
  School,
  Car,
  Lock,
  Clock,
  MapPin,
  UserCheck,
  Calendar,
  Monitor,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://019c60c0-d4f7-7efa-b79d-4617b9aaaa97.mochausercontent.com/uniq-high-resolution-logo-transparent.png"
              alt="UniqCamp"
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <a href="/demo">
            <Button className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">Request Demo</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary/10 text-secondary-foreground border-secondary/20 px-4 py-1.5">
              <Sparkles className="w-3 h-3 mr-1.5" />
              The Future of School Dismissal Management
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              Streamline Student Dismissal with Smart Technology
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              UniqCamp revolutionizes school dismissals with QR-based student pickup, real-time notifications, and comprehensive safety tracking for parents, teachers, and administrators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="/demo">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="#features">
                <Button size="lg" variant="outline" className="border-2 hover:border-primary/50 hover:bg-primary/5 transition-all">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Schools Served", value: "500+" },
              { label: "Daily Dismissals", value: "50K+" },
              { label: "Parent Satisfaction", value: "98%" },
              { label: "Time Saved", value: "70%" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2 transform hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold text-secondary drop-shadow-lg">{stat.value}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features by Role Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Comprehensive Solutions for Every Role</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored features for administrators, teachers, parents, and transportation providers
            </p>
          </div>

          <div className="space-y-16">
            {/* Super Admin Features */}
            <FeatureSection
              title="Super Admin Dashboard"
              icon={<Shield className="w-10 h-10" />}
              color="primary"
              features={[
                "Complete school management and oversight",
                "Staff, student, and parent data management",
                "Payment invoices and financial tracking",
                "Technical support request monitoring",
                "Role-based permissions for internal staff",
                "Application logs for development and debugging",
                "School blocking and removal capabilities",
              ]}
            />

            {/* Parent Features */}
            <FeatureSection
              title="Parent Application"
              icon={<Smartphone className="w-10 h-10" />}
              color="secondary"
              features={[
                "Secure mobile OTP login",
                "QR code scanning for daily dismissal requests",
                "Schedule early dismissals with approval workflow",
                "Add and manage authorized guardians",
                "Track permitted cab drivers for pickup/drop-off",
                "Real-time pickup status notifications",
                "Request parent-teacher meetings",
                "Manage multiple students across schools",
                "Automatic pickup confirmation",
                "Geofencing-based dismissal requests",
              ]}
            />

            {/* Teacher Features */}
            <FeatureSection
              title="Teacher Portal"
              icon={<UserCheck className="w-10 h-10" />}
              color="primary"
              features={[
                "Approve early dismissal requests",
                "Monitor daily pickup and drop-off status",
                "Direct parent communication",
                "Send notifications to parents",
                "Approve daily dismissal requests",
                "Verify students at school gates",
                "Bus/cab student verification",
                "Schedule parent meetings",
              ]}
            />

            {/* Principal/Admin Features */}
            <FeatureSection
              title="Principal & Admin Control"
              icon={<School className="w-10 h-10" />}
              color="secondary"
              features={[
                "Final approval on early dismissals",
                "Role and permission management",
                "Comprehensive pickup/drop status dashboard",
                "Push notification system",
                "Class-wise dismissal checkout layers",
                "Upload and manage staff details",
                "Student data management with photos",
                "Configure pickup methods (self, parent, cab, bus)",
                "Manage permitted cab driver details",
                "TV display notices (lost & found, holidays)",
                "Auto-confirmation settings",
                "Payment management",
                "Technical support requests",
                "Student dismissal controls",
              ]}
            />

            {/* Personal Cab Features */}
            <FeatureSection
              title="Personal Cab Driver App"
              icon={<Car className="w-10 h-10" />}
              color="primary"
              features={[
                "Secure mobile OTP login",
                "Group dismissal requests to teachers",
                "Student acceptance confirmation",
                "View assigned student groups",
              ]}
            />

            {/* TV Display Features */}
            <FeatureSection
              title="TV Display System"
              icon={<Monitor className="w-10 h-10" />}
              color="secondary"
              features={[
                "Dynamic QR code generation for dismissal requests",
                "Multiple route/gate configurations",
                "QR code expiry timer (configurable)",
                "Network status monitoring",
                "Real-time class and section display",
                "Automated gate routing guidance",
                "Digital notice board",
                "Geofencing verification",
                "Real-time dismissal notifications",
                "Wall-mounted QR code alternative",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose UniqCamp?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of a modern, secure, and efficient dismissal system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enhanced Safety",
                description: "QR codes, geofencing, and authorized guardian verification ensure only approved individuals can pick up students.",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Time Efficiency",
                description: "Reduce dismissal time by up to 70% with automated workflows and real-time coordination.",
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: "Real-Time Updates",
                description: "Instant notifications keep parents, teachers, and administrators informed at every step.",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Geofencing Technology",
                description: "Location-based dismissal requests ensure parents are physically present at school.",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Secure Access",
                description: "OTP-based authentication and role-based permissions protect sensitive student data.",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Complete Transparency",
                description: "Track every dismissal with comprehensive logs and status updates for accountability.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Multi-School Support",
                description: "Manage students across multiple schools from a single parent account.",
              },
              {
                icon: <QrCode className="w-8 h-8" />,
                title: "Contactless Process",
                description: "Touch-free QR code scanning reduces physical contact and speeds up dismissals.",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Flexible Scheduling",
                description: "Schedule early dismissals and parent-teacher meetings with automated approval workflows.",
              },
            ].map((benefit) => (
              <Card key={benefit.title} className="group border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, secure process that works seamlessly for everyone
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Parent Arrives & Scans QR Code",
                description: "Parent arrives at school and scans the dynamic QR code displayed on TV screens or wall-mounted codes. Geofencing verifies they're physically present.",
              },
              {
                step: 2,
                title: "Dismissal Request Sent",
                description: "The system instantly notifies the child's teacher and administrator with the dismissal request, including parent details and verification status.",
              },
              {
                step: 3,
                title: "Teacher Approval",
                description: "Teacher reviews the request on their mobile app and approves the dismissal, sending the student from class to the designated pickup point.",
              },
              {
                step: 4,
                title: "Safe Pickup Completed",
                description: "Parent receives real-time notification when the child is dismissed. Auto-confirmation ensures accountability for every pickup.",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
                  {step.step}
                </div>
                <div className="flex-1 pt-2 space-y-2">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section id="future" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary-foreground border-secondary/20 px-4 py-1.5">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Coming Soon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Future Roadmap</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're constantly innovating to bring you more powerful features
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Automated Attendance",
                description: "Smart attendance tracking integrated with dismissal data",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "After-School Programs",
                description: "Comprehensive after-school activity management",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "AI-Powered Timetables",
                description: "Intelligent scheduling using artificial intelligence",
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Advanced Notifications",
                description: "Enhanced early dismissal request system with predictive analytics",
              },
            ].map((item) => (
              <Card key={item.title} className="border-2 hover:border-secondary/50 transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 text-center relative space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
            Ready to Transform Your School's Dismissal Process?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join hundreds of schools already using UniqCamp to create safer, faster, and more efficient student dismissals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="/demo">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 shadow-xl hover:shadow-2xl transition-all">
                Schedule a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
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
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#benefits" className="hover:text-foreground transition-colors">Benefits</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#future" className="hover:text-foreground transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/demo" className="hover:text-foreground transition-colors">Request Demo</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
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

function FeatureSection({
  title,
  icon,
  color,
  features,
}: {
  title: string;
  icon: React.ReactNode;
  color: "primary" | "secondary";
  features: string[];
}) {
  const colorClasses = {
    primary: {
      bg: "from-primary/10 via-primary/5 to-transparent",
      border: "border-primary/20",
      icon: "text-primary bg-primary/10",
    },
    secondary: {
      bg: "from-secondary/10 via-secondary/5 to-transparent",
      border: "border-secondary/20",
      icon: "text-secondary-foreground bg-secondary/10",
    },
  };

  const classes = colorClasses[color];

  return (
    <Card className={`group border-2 ${classes.border} bg-gradient-to-br ${classes.bg} hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1`}>
      <CardContent className="p-8 md:p-10">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl ${classes.icon} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
