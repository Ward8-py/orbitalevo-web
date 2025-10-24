import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Globe } from "@/components/ui/globe";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Palette, Code, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Tailored to match your brand identity perfectly"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable and scalable web solutions"
    },
    {
      icon: Sparkles,
      title: "Modern Tech",
      description: "Built with cutting-edge technologies"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <AnimatedGridPattern className="opacity-20" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bring Your Business{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  To Life
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Professional web development that transforms your vision into stunning reality
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <RainbowButton onClick={() => navigate("/form")}>
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[400px] lg:h-[600px] hidden lg:block"
            >
              <Globe className="animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              We deliver excellence in every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border-primary/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's transform your business vision into a stunning digital reality
              </p>
              <RainbowButton onClick={() => navigate("/form")} className="mx-auto">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </RainbowButton>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
