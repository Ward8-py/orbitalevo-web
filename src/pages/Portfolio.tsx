import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online store with seamless checkout experience and inventory management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics-driven platform for business intelligence and data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Beautiful dining experience showcase with online reservations and menu.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["WordPress", "PHP", "MySQL"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    title: "Real Estate Portal",
    description: "Property listings platform with advanced search and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma"],
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 5,
    title: "Healthcare App",
    description: "Patient management system with appointment scheduling and records.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "AI"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Creative Agency",
    description: "Portfolio showcase with stunning animations and case studies.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    tags: ["Webflow", "GSAP", "Three.js"],
    color: "from-pink-500/20 to-purple-500/20"
  }
];

const Portfolio = () => {
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
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming visions into stunning digital experiences. Here's a showcase of our recent work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden aspect-video">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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
            Want to see more? Let's discuss your project.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
