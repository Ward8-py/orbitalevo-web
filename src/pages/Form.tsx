import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    business_name: "",
    industry: "",
    description: "",
    unique: "",
    name: "",
    email: "",
    phone: "",
    contact_method: "Email",
    logo_status: "Select an option",
    brand_colors: "",
    brand_fonts: "",
    style: "Modern",
    domain_status: "No",
    domain_name: "",
    hosting: "",
    hosting_help: "Yes",
    goal: "",
    pages: "",
    content_status: "No, I need help creating content",
    features: "",
    inspiration: "",
    seo_keywords: "",
    socials: "",
    analytics: "Yes",
    start_date: "",
    launch_date: "",
    budget: "",
    notes: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Form submitted successfully! We'll be in touch soon.");
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sections = [
    {
      title: "Business Information",
      fields: [
        { name: "business_name", label: "Business Name", type: "input", required: true },
        { name: "industry", label: "Business Type / Industry", type: "input" },
        { name: "description", label: "Describe Your Business", type: "textarea" },
        { name: "unique", label: "What Makes Your Business Unique?", type: "textarea" }
      ]
    },
    {
      title: "Contact Information",
      fields: [
        { name: "name", label: "Full Name", type: "input", required: true },
        { name: "email", label: "Email Address", type: "email", required: true },
        { name: "phone", label: "Phone Number", type: "tel" },
        { name: "contact_method", label: "Preferred Contact Method", type: "select", options: ["Email", "WhatsApp", "Phone Call"] }
      ]
    },
    {
      title: "Branding",
      fields: [
        { name: "logo_status", label: "Do you have a logo?", type: "select", options: ["Select an option", "Yes, I have one", "No, I need one created"] },
        { name: "brand_colors", label: "Brand Colors", type: "input", placeholder: "e.g. #000000, #FF5733" },
        { name: "brand_fonts", label: "Brand Fonts", type: "input", placeholder: "e.g. Poppins, Lato" },
        { name: "style", label: "Style Preference", type: "select", options: ["Modern", "Minimalist", "Elegant", "Corporate", "Playful", "Artistic"] }
      ]
    },
    {
      title: "Domain & Hosting",
      fields: [
        { name: "domain_status", label: "Do you have a domain?", type: "select", options: ["Yes", "No", "No, need help registering"] },
        { name: "domain_name", label: "Domain Name (if available)", type: "input" },
        { name: "hosting", label: "Hosting Provider", type: "input" },
        { name: "hosting_help", label: "Need hosting assistance?", type: "select", options: ["Yes", "No"] }
      ]
    },
    {
      title: "Website Goals & Content",
      fields: [
        { name: "goal", label: "Main Goal of Website", type: "textarea", placeholder: "e.g. Showcase services, sell products..." },
        { name: "pages", label: "Pages Needed", type: "input", placeholder: "e.g. Home, About, Services, Contact" },
        { name: "content_status", label: "Content Ready?", type: "select", options: ["Yes", "No, I need help creating content"] },
        { name: "features", label: "Features Needed", type: "textarea", placeholder: "e.g. Gallery, Booking, Blog..." }
      ]
    },
    {
      title: "Marketing & Growth",
      fields: [
        { name: "seo_keywords", label: "SEO Keywords", type: "textarea" },
        { name: "socials", label: "Social Media Links", type: "textarea" },
        { name: "analytics", label: "Analytics Setup?", type: "select", options: ["Yes", "No"] }
      ]
    },
    {
      title: "Timeline & Budget",
      fields: [
        { name: "start_date", label: "Preferred Start Date", type: "date" },
        { name: "launch_date", label: "Desired Launch Date", type: "date" },
        { name: "budget", label: "Budget Range", type: "input", placeholder: "$500 - $1500" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Get Started
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll bring your vision to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * sectionIndex }}
                  className="space-y-6"
                >
                  <div className="border-b border-border pb-3">
                    <h2 className="text-2xl font-bold flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                        {sectionIndex + 1}
                      </span>
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.fields.map((field) => (
                      <div
                        key={field.name}
                        className={field.type === "textarea" || field.name.includes("description") || field.name.includes("goal") ? "md:col-span-2" : ""}
                      >
                        <label className="block font-medium mb-2 text-sm">
                          {field.label}
                          {field.required && <span className="text-destructive ml-1">*</span>}
                        </label>
                        
                        {field.type === "select" && field.options ? (
                          <Select
                            value={formData[field.name as keyof typeof formData]}
                            onValueChange={(value) => handleChange(field.name, value)}
                          >
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {field.options.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : field.type === "textarea" ? (
                          <Textarea
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            rows={3}
                            className="bg-background border-border resize-none"
                            required={field.required}
                          />
                        ) : (
                          <Input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            className="bg-background border-border"
                            required={field.required}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="space-y-6"
              >
                <div className="border-b border-border pb-3">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
                      8
                    </span>
                    Additional Notes
                  </h2>
                </div>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  placeholder="Any other details or requests..."
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </motion.section>

              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Form"
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Form;
