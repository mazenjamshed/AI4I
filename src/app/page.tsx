import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BookOpen, Target, Shield, Zap, Globe, Brain, Lock, Building } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const pillars = [
    {
      icon: BookOpen,
      title: "AI Literacy",
      description: "Building a foundation for AI understanding across society"
    },
    {
      icon: Target,
      title: "Industry Competitiveness",
      description: "Ensuring Irish businesses lead in AI adoption and innovation"
    },
    {
      icon: Users,
      title: "Public Literacy",
      description: "Empowering citizens with AI knowledge and skills"
    },
    {
      icon: Brain,
      title: "Skills & Academic Pipeline",
      description: "Developing the next generation of AI talent and expertise"
    },
    {
      icon: Zap,
      title: "Infrastructure & Energy",
      description: "Building the computational foundation for AI growth"
    },
    {
      icon: Shield,
      title: "Ethics & Risk Management",
      description: "Ensuring responsible and trustworthy AI development"
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Protecting AI systems and infrastructure from threats"
    },
    {
      icon: Building,
      title: "Central Leadership",
      description: "Coordinated government approach to AI strategy"
    }
  ];

  const stats = [
    { label: "Global AI Ranking", value: "6th", description: "Ireland ranked 6th worldwide for AI vibrancy per capita" },
    { label: "Economic Impact", value: "€250bn", description: "Potential GDP addition by 2035 with AI adoption" },
    { label: "Literacy Gap", value: "57%", description: "Of adults don't engage with AI - urgent action needed" },
    { label: "EU Deadline", value: "Feb 2025", description: "National AI literacy required by EU AI Act" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="bg-background border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/ai4i-logo.png"
                  alt="AI4Ireland Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">AI4Ireland</h1>
                <p className="text-xs text-muted-foreground">Consortium for AI Excellence</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#pillars" className="text-sm font-medium hover:text-primary transition-colors">Pillars</a>
              <a href="#action" className="text-sm font-medium hover:text-primary transition-colors">Call to Action</a>
              <Button size="sm">Contact us</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dublin-skyline.jpg"
            alt="Dublin Skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-white/20 text-white border-white/30">
              URGENT CALL TO ACTION
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Accelerating Ireland&apos;s
              <span className="text-yellow-300"> AI Future</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI4Ireland is a consortium of industry, academia, and associations driving urgent action to 
              accelerate Ireland&apos;s global positioning to equip industry and our population to respond to 
              the risks and opportunities of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
                Join the Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-primary/10 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                  <CardTitle className="text-lg">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/tech-campus.jpg"
            alt="Tech Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">About AI4Ireland</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A united front for Ireland&apos;s AI transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center border-primary/10">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leading companies driving innovation and adoption across sectors
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary/10">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Academia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    World-class research institutions and educational partners
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary/10">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Associations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Trade groups and professional organizations united for change
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  AI4Ireland recognises the urgent and immediate need to protect Ireland&apos;s unique strengths 
                  in an AI future: world-class life sciences and medtech, a deep technology footprint, and 
                  a highly skilled, English-speaking workforce. Our goal is not only to adopt AI early and 
                  appropriately, but to ambitiously drive future competitiveness and ensure general preparedness 
                  across society for the changes coming our way as a nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/academic-campus.jpg"
            alt="Academic Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Strategic Pillars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eight focus areas driving Ireland&apos;s AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 group">
                <CardHeader className="text-center">
                  <pillar.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="action" className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="/government-building.jpg"
            alt="Government Building"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-white/20 text-white border-white/30">
              PRIMARY ASKS
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Urgent Actions Required</h2>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
              To secure Ireland&apos;s AI future, we need immediate government action on these critical priorities
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">National AI Literacy</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Mandate National AI Literacy Policy</li>
                    <li>• Invest in ongoing CME and public sector training</li>
                    <li>• Provide clear AI guidance in schools</li>
                    <li>• Build trusted, human-centered AI nation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Skills & Infrastructure</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Establish national AI Centre of Excellence</li>
                    <li>• Create AI for Bioprocessing centre at NIBRT</li>
                    <li>• Develop National AI compute and data strategy</li>
                    <li>• Invest in clean-power and digital infrastructure</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Leadership & Governance</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Place AI policy in Taoiseach&apos;s office</li>
                    <li>• Formalise AI observatory and advisory forum</li>
                    <li>• Publish measurable targets and reporting</li>
                    <li>• Clarify position on EU sovereignty</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Funding & Investment</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-2 text-sm text-white/80">
                    <li>• Allocate ring-fenced dedicated AI funding</li>
                    <li>• Set per-capita investment benchmarks</li>
                    <li>• Leverage existing funding tools</li>
                    <li>• Establish AI cybersecurity fund</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90">
              Support Our Call to Action
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI4Ireland</h3>
              <p className="text-sm text-muted-foreground">
                Driving urgent action to accelerate Ireland&apos;s global positioning in AI literacy and infrastructure.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Strategic Pillars</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Get Involved</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Join us in shaping Ireland&apos;s AI future. Contact us to learn more about our initiatives and how you can contribute.
              </p>
              <p className="text-sm text-primary font-medium mb-4">
                info@ai4i.ai
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AI4Ireland Consortium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}