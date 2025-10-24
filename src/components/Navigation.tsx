import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Bot, FileText, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "AI Services", url: "/ai-services", icon: Bot },
  { name: "Get Started", url: "/form", icon: FileText },
  { name: "Contact", url: "/contact", icon: Mail },
];

export function Navigation() {
  const location = useLocation();
  const activeTab = navItems.find(item => item.url === location.pathname)?.name || navItems[0].name;

  return (
    <div className="fixed bottom-6 sm:top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 bg-card/80 border border-border backdrop-blur-lg py-2 px-2 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300",
                "text-muted-foreground hover:text-foreground",
                isActive && "text-foreground"
              )}
            >
              <span className="hidden md:inline relative z-10">{item.name}</span>
              <span className="md:hidden relative z-10">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-0"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-primary rounded-b-full">
                    <div className="absolute w-16 h-8 bg-primary/30 rounded-full blur-md -top-3 -left-3" />
                    <div className="absolute w-10 h-6 bg-primary/40 rounded-full blur-md -top-2" />
                    <div className="absolute w-6 h-4 bg-primary/50 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
