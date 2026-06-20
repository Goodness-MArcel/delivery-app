"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Award, 
  MapPin, 
  RefreshCw 
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Fully Insured Delivery",
    description: "Every package is insured up to ₦500,000. Your items are 100% protected.",
    color: "text-emerald-600",
  },
  {
    icon: Users,
    title: "Verified & Trusted Riders",
    description: "All riders are background-checked, trained, and rated by customers.",
    color: "text-teal-600",
  },
  {
    icon: Award,
    title: "4.95 Star Rating",
    description: "Trusted by over 8,450+ customers with excellent reviews.",
    color: "text-cyan-600",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "Late delivery? We refund 50% of your delivery fee.",
    color: "text-emerald-600",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Live GPS tracking from pickup to delivery with photo proof.",
    color: "text-teal-600",
  },
  {
    icon: RefreshCw,
    title: "Money-Back Guarantee",
    description: "Not satisfied? Get a full refund within 24 hours.",
    color: "text-cyan-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on trust. Backed by guarantees.
          </p>
        </motion.div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/60 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-9 h-9 ${feature.color}`} strokeWidth={2.25} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-16 opacity-75"
        >
          <div className="flex items-center gap-3 text-gray-500">
            <ShieldCheck className="w-6 h-6" /> <span className="font-medium">Insured Delivery</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <Award className="w-6 h-6" /> <span className="font-medium">Top Rated</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <Users className="w-6 h-6" /> <span className="font-medium">Verified Riders</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}