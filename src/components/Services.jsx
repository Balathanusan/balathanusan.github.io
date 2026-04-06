"use client";

import { services } from "@/lib/constants";

export default function Services() {
  return (
    <div id="services" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="font-bold text-center text-2xl mb-4">
        Dienstleistungen
      </div>
      <p className="text-white/50 text-center max-w-2xl mx-auto mb-16">
        Ich biete massgeschneiderte Lösungen für Ihre digitalen Projekte — von
        der Konzeption bis zur Umsetzung.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-secondary rounded-md p-6 hover:shadow-theme-inset transition-shadow"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <div className="font-semibold text-lg mb-2">{service.title}</div>
            <p className="text-white/50 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
