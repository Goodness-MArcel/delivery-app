"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Package, 
  Laptop, 
  ShoppingBag, 
  UtensilsCrossed, 
  Pill 
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Documents & Letters",
    description: "Passports, contracts, certificates, and important paperwork delivered same-day.",
    color: "text-emerald-600",
  },
  {
    icon: Package,
    title: "Parcels & Packages",
    description: "Small to medium packages securely delivered across town within minutes.",
    color: "text-teal-600",
  },
  {
    icon: Laptop,
    title: "Electronics & Fragile Items",
    description: "Phones, laptops, gadgets, and delicate items handled with extra care.",
    color: "text-cyan-600",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Shopping",
    description: "Pick up from any store or marketplace and deliver straight to your door.",
    color: "text-emerald-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Grocery",
    description: "Hot meals, groceries, and perishable items delivered fresh and fast.",
    color: "text-teal-600",
  },
  {
    icon: Pill,
    title: "Medicine & Essentials",
    description: "Urgent medicines, baby products, and daily essentials delivered quickly.",
    color: "text-cyan-600",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From important documents to daily essentials — we deliver almost anything, anywhere in town.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-9 h-9 ${service.color}`} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description with text-sm as requested */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 text-emerald-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more 
                  <span className="text-xl">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-4">Can’t find what you need?</p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-3xl font-semibold transition">
            Send Any Package →
          </button>
        </motion.div>
      </div>
    </section>
  );
}