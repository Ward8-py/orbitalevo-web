import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  ShoppingCart, 
  Hotel, 
  Heart, 
  GraduationCap, 
  Building2, 
  Palette, 
  FileText, 
  Globe, 
  Building 
} from "lucide-react";

const aiServices = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Small & Local Business Automation",
    painPoint: "Many small businesses rely on manual work, WhatsApp communication, and basic social media marketing.",
    solutions: [
      "AI Chatbots for WhatsApp & Facebook",
      "Automated Product Descriptions & Social Posts",
      "Customer Retention Automation"
    ],
    monetization: "SaaS subscription or service package (e.g., AI assistant for $15/month)",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    painPoint: "Small online stores lack advanced recommendation systems or analytics.",
    solutions: [
      "AI-Powered Product Recommendation System",
      "Inventory Demand Forecasting",
      "Visual Search for Products"
    ],
    monetization: "Partner with online stores, take % of sales or charge for integration",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    icon: Hotel,
    title: "Hospitality & Tourism",
    painPoint: "Tourism is restarting slowly, but digital presence is weak.",
    solutions: [
      "AI-Powered Hotel Booking Assistant",
      "Review Analyzer",
      "Dynamic Pricing System"
    ],
    monetization: "Monthly service or per-property fee",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400"
  },
  {
    id: 4,
    icon: Heart,
    title: "Healthcare",
    painPoint: "Clinics are overwhelmed, and appointment scheduling is often manual.",
    solutions: [
      "AI Virtual Receptionist",
      "Medical Data Digitization",
      "Health Chatbots (symptom tracking, reminders)"
    ],
    monetization: "Monthly subscriptions to clinics or hospitals",
    color: "from-green-500/20 to-teal-500/20",
    iconColor: "text-green-400"
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "Education & Tutoring",
    painPoint: "Private institutes rely on repetitive manual processes and outdated content.",
    solutions: [
      "AI Content Generation for Teachers",
      "Grading Automation",
      "AI Learning Assistant for Students"
    ],
    monetization: "Subscription model for teachers/institutes or per-student access",
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400"
  },
  {
    id: 6,
    icon: Building2,
    title: "Construction, Real Estate & Engineering",
    painPoint: "Lack of data analytics, project documentation, and client communication automation.",
    solutions: [
      "AI Project Proposal Generator",
      "Site Image Analysis",
      "Smart Real Estate Listings"
    ],
    monetization: "Charge per generated proposal or per client integration",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-400"
  },
  {
    id: 7,
    icon: Palette,
    title: "Creative Industries",
    painPoint: "Many agencies rely on manual design and copywriting.",
    solutions: [
      "AI Ad Copy + Visual Generator",
      "Video Subtitling & Translation",
      "Brand Identity Generator"
    ],
    monetization: "Offer as creative AI packages for small agencies",
    color: "from-pink-500/20 to-purple-500/20",
    iconColor: "text-pink-400"
  },
  {
    id: 8,
    icon: FileText,
    title: "Administrative / Back-Office Automation",
    painPoint: "Businesses waste time on routine reporting and documentation.",
    solutions: [
      "Invoice Processing & Receipt Management",
      "Email / Document Summarization",
      "Automated Data Entry"
    ],
    monetization: "Automation setup as one-time service or monthly maintenance",
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400"
  },
  {
    id: 9,
    icon: Globe,
    title: "AI Outsourcing / Freelancing Hub",
    painPoint: "Skilled professionals have limited access to global markets.",
    solutions: [
      "Micro-agency using AI tools",
      "AI-powered BPO services",
      "Data annotation & AI content moderation"
    ],
    monetization: "Service-based — low-cost, high-efficiency with AI leverage",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400"
  },
  {
    id: 10,
    icon: Building,
    title: "Government & NGO Sectors",
    painPoint: "NGOs and local authorities have data overload but little automation.",
    solutions: [
      "AI Dashboard for Reports",
      "Document Summarization",
      "Translation & Localization AI Tools"
    ],
    monetization: "Contracts or consulting services",
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400"
  }
];

const AIServices = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            AI Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business with cutting-edge AI solutions tailored for modern challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className={`relative p-6 bg-gradient-to-br ${service.color}`}>
                  <div className="bg-background/80 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs mb-2">Pain Point</Badge>
                    <p className="text-sm text-muted-foreground">
                      {service.painPoint}
                    </p>
                  </div>

                  <div className="mb-4 flex-1">
                    <Badge variant="secondary" className="text-xs mb-2">AI Solutions</Badge>
                    <ul className="space-y-1">
                      {service.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Badge variant="secondary" className="text-xs mb-2">💰 Monetization</Badge>
                    <p className="text-sm text-muted-foreground">
                      {service.monetization}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Ready to implement AI in your business? Let's discuss your needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AIServices;
