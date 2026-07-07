import { faq } from "@/data/faq";
import { fleet } from "@/data/fleet";
import { bookingServices, services } from "@/data/services";
import { Locale } from "@/lib/i18n";

type ServiceTranslation = {
  title: string;
  shortTitle: string;
  description: string;
  details: string;
  cta: string;
  keywords: string[];
};

type BookingServiceTranslation = {
  title: string;
  shortTitle: string;
  description: string;
  cta: string;
};

type FleetTranslation = {
  name: string;
  passengers: string;
  description: string;
};

const serviceTranslations: Record<Exclude<Locale, "fr">, Record<string, ServiceTranslation>> = {
  en: {
    medical: {
      title: "Licensed medical transport",
      shortTitle: "Licensed taxi",
      description: "Professional seated transport for consultations, hospital appointments, day hospitals and medical visits.",
      details:
        "Yas'Taxii assists patients with licensed medical trips from Gandelu, Crezancy and the Chateau-Thierry area. Trips are organized with punctuality, discretion and comfort, without asking for sensitive medical data.",
      cta: "View service",
      keywords: ["Licensed taxi Chateau-Thierry area", "Licensed medical transport Aisne", "Licensed taxi Gandelu Crezancy"]
    },
    airport: {
      title: "Airport transfers",
      shortTitle: "Airports",
      description: "Taxi shuttle to CDG, Orly, Beauvais and Paris airports, with organized pickup.",
      details:
        "For airport departures or arrivals, the ride is prepared according to your time, luggage and number of passengers. Yas'Taxii serves CDG, Orly and Beauvais from Chateau-Thierry and nearby towns.",
      cta: "View service",
      keywords: ["Taxi airport CDG", "Taxi airport Orly", "Taxi Beauvais", "Airport shuttle Aisne"]
    },
    stations: {
      title: "Station transfers",
      shortTitle: "Stations",
      description: "Taxi to Chateau-Thierry, Paris, Reims, Marne-la-Vallee and connecting stations.",
      details: "Yas'Taxii makes train connections easier with clear pickup, luggage help if needed and schedules adapted to your departure or arrival.",
      cta: "View service",
      keywords: ["Taxi Chateau-Thierry station", "Taxi Gare de Lyon", "Station transfer Aisne"]
    },
    business: {
      title: "Business / corporate",
      shortTitle: "Business",
      description: "Taxi for business trips, appointments, seminars, VIP clients, invoices and recurring organization.",
      details:
        "For companies, Yas'Taxii offers reliable transport for appointments, staff transfers, client pickups, seminars and recurring trips with invoice on request.",
      cta: "View service",
      keywords: ["Business taxi", "Corporate taxi", "Professional transport"]
    },
    tourism: {
      title: "Tourism and mobility",
      shortTitle: "Tourism",
      description: "Taxi for visits, outings, Paris, Reims, Champagne vineyards and tourist trips.",
      details:
        "Need a taxi to visit Chateau-Thierry, Champagne vineyards, the Jean de La Fontaine museum, Paris, Reims or other tourist destinations? Yas'Taxii offers comfortable and flexible transport.",
      cta: "View service",
      keywords: ["Tourism taxi Chateau-Thierry", "Taxi Paris Reims", "Long-distance taxi"]
    },
    assistance: {
      title: "Assistance and breakdown support",
      shortTitle: "Assistance",
      description: "Transport solution after a breakdown, immobilized vehicle, urgent need or return home.",
      details: "In case of an unexpected issue, breakdown or immobilized vehicle, Yas'Taxii can help you reach home, a station, a garage or an urgent appointment.",
      cta: "View service",
      keywords: ["Taxi assistance", "Urgent taxi transport", "Taxi return home"]
    }
  },
  es: {
    medical: {
      title: "Transporte medico autorizado",
      shortTitle: "Taxi autorizado",
      description: "Transporte sentado profesional para consultas, hospitalizaciones, hospital de dia y citas medicas.",
      details:
        "Yas'Taxii acompana a pacientes en trayectos medicos autorizados desde Gandelu, Crezancy y la zona de Chateau-Thierry, con puntualidad, discrecion y confort.",
      cta: "Ver servicio",
      keywords: ["Taxi autorizado Chateau-Thierry", "Transporte medico autorizado Aisne", "Taxi autorizado Gandelu Crezancy"]
    },
    airport: {
      title: "Traslados aeropuertos",
      shortTitle: "Aeropuertos",
      description: "Taxi lanzadera hacia CDG, Orly, Beauvais y aeropuertos parisinos con recogida organizada.",
      details: "Para salidas o llegadas al aeropuerto, el trayecto se prepara segun horario, equipaje y pasajeros. Yas'Taxii sirve CDG, Orly y Beauvais.",
      cta: "Ver servicio",
      keywords: ["Taxi aeropuerto CDG", "Taxi aeropuerto Orly", "Taxi Beauvais", "Lanzadera aeropuerto Aisne"]
    },
    stations: {
      title: "Traslados estaciones",
      shortTitle: "Estaciones",
      description: "Taxi hacia estaciones de Chateau-Thierry, Paris, Reims, Marne-la-Vallee y conexiones.",
      details: "Yas'Taxii facilita sus conexiones de tren con recogida clara, ayuda con equipaje si es necesario y horario adaptado.",
      cta: "Ver servicio",
      keywords: ["Taxi estacion Chateau-Thierry", "Taxi Gare de Lyon", "Traslado estacion Aisne"]
    },
    business: {
      title: "Profesional / empresa",
      shortTitle: "Empresas",
      description: "Taxi para citas profesionales, seminarios, clientes VIP, facturacion y trayectos recurrentes.",
      details: "Para empresas, Yas'Taxii ofrece una solucion fiable para citas, traslados de colaboradores, clientes, seminarios y trayectos recurrentes.",
      cta: "Ver servicio",
      keywords: ["Taxi profesional", "Taxi empresa", "Transporte profesional"]
    },
    tourism: {
      title: "Turismo y movilidad",
      shortTitle: "Turismo",
      description: "Taxi para visitas, salidas, Paris, Reims, vinedos de Champagne y trayectos turisticos.",
      details: "Necesita un taxi para visitar Chateau-Thierry, vinedos de Champagne, Paris, Reims u otros destinos? Yas'Taxii ofrece transporte comodo y flexible.",
      cta: "Ver servicio",
      keywords: ["Taxi turismo Chateau-Thierry", "Taxi Paris Reims", "Taxi larga distancia"]
    },
    assistance: {
      title: "Asistencia y averias",
      shortTitle: "Asistencia",
      description: "Solucion de transporte en caso de averia, vehiculo inmovilizado, vuelta a casa o urgencia.",
      details: "En caso de imprevisto, averia o vehiculo inmovilizado, Yas'Taxii puede acompanarle a casa, a una estacion, garaje o cita urgente.",
      cta: "Ver servicio",
      keywords: ["Asistencia taxi", "Taxi urgente", "Taxi vuelta a casa"]
    }
  },
  de: {
    medical: {
      title: "Zugelassener medizinischer Transport",
      shortTitle: "Zugelassenes Taxi",
      description: "Professioneller Sitztransport fur Konsultationen, Krankenhaus, Tagesklinik und medizinische Termine.",
      details:
        "Yas'Taxii begleitet Patienten bei zugelassenen medizinischen Fahrten ab Gandelu, Crezancy und Chateau-Thierry mit Punktlichkeit, Diskretion und Komfort.",
      cta: "Service ansehen",
      keywords: ["Zugelassenes Taxi Chateau-Thierry", "Medizinischer Transport Aisne", "Taxi Gandelu Crezancy"]
    },
    airport: {
      title: "Flughafentransfers",
      shortTitle: "Flughafen",
      description: "Taxi-Shuttle zu CDG, Orly, Beauvais und Pariser Flughafen mit organisierter Abholung.",
      details: "Fur Abflug oder Ankunft wird die Fahrt nach Uhrzeit, Gepack und Fahrgasten vorbereitet. Yas'Taxii bedient CDG, Orly und Beauvais.",
      cta: "Service ansehen",
      keywords: ["Taxi Flughafen CDG", "Taxi Flughafen Orly", "Taxi Beauvais", "Flughafen Shuttle Aisne"]
    },
    stations: {
      title: "Bahnhoftransfers",
      shortTitle: "Bahnhofe",
      description: "Taxi zu den Bahnhofen Chateau-Thierry, Paris, Reims, Marne-la-Vallee und Anschlussen.",
      details: "Yas'Taxii erleichtert Bahnanschlusse mit klarer Abholung, Gepackhilfe bei Bedarf und angepassten Zeiten.",
      cta: "Service ansehen",
      keywords: ["Taxi Bahnhof Chateau-Thierry", "Taxi Gare de Lyon", "Bahnhoftransfer Aisne"]
    },
    business: {
      title: "Business / Unternehmen",
      shortTitle: "Business",
      description: "Taxi fur Geschaftstermine, Seminare, VIP-Kunden, Rechnungen und wiederkehrende Fahrten.",
      details: "Fur Unternehmen bietet Yas'Taxii zuverlassige Fahrten fur Termine, Mitarbeitertransfers, Kundenempfang, Seminare und wiederkehrende Fahrten.",
      cta: "Service ansehen",
      keywords: ["Business Taxi", "Unternehmen Taxi", "Professioneller Transport"]
    },
    tourism: {
      title: "Tourismus und Mobilitat",
      shortTitle: "Tourismus",
      description: "Taxi fur Besichtigungen, Ausfluge, Paris, Reims, Champagne-Weinberge und touristische Fahrten.",
      details: "Brauchen Sie ein Taxi fur Chateau-Thierry, Champagne-Weinberge, Paris, Reims oder andere Ziele? Yas'Taxii bietet komfortable und flexible Fahrten.",
      cta: "Service ansehen",
      keywords: ["Tourismus Taxi Chateau-Thierry", "Taxi Paris Reims", "Langstrecken Taxi"]
    },
    assistance: {
      title: "Assistenz und Pannenhilfe",
      shortTitle: "Assistenz",
      description: "Transportlosung bei Panne, immobilisiertem Fahrzeug, Heimfahrt oder dringendem Bedarf.",
      details: "Bei unerwarteten Problemen, Panne oder immobilisiertem Fahrzeug kann Yas'Taxii Sie nach Hause, zum Bahnhof, zur Werkstatt oder zu einem Termin bringen.",
      cta: "Service ansehen",
      keywords: ["Taxi Assistenz", "Dringendes Taxi", "Taxi Heimfahrt"]
    }
  }
};

const bookingTranslations: Record<Exclude<Locale, "fr">, Record<string, BookingServiceTranslation>> = {
  en: {
    medical: { title: "Licensed medical transport", shortTitle: "Medical", description: "Professional seated transport for consultations, hospital stays and day hospitals.", cta: "Book" },
    airport: { title: "Station and airport transfers", shortTitle: "Stations and airports", description: "Departures and arrivals to Chateau-Thierry, CDG, Orly, Beauvais, stations and nearby towns.", cta: "Request a quote" },
    event: { title: "Classic taxi ride or private hire", shortTitle: "Private", description: "Chateau-Thierry area, CDG, Paris SNCF stations, Reims and nearby towns.", cta: "Book" },
    business: { title: "Business / corporate", shortTitle: "Business", description: "One-time or recurring trips, meetings, invoicing and organized pickup.", cta: "Request a quote" }
  },
  es: {
    medical: { title: "Transporte medico autorizado", shortTitle: "Medico", description: "Transporte sentado profesional para consultas, hospitalizaciones y hospital de dia.", cta: "Reservar" },
    airport: { title: "Traslados estaciones y aeropuertos", shortTitle: "Estaciones y aeropuertos", description: "Salidas y llegadas a Chateau-Thierry, CDG, Orly, Beauvais, estaciones y ciudades cercanas.", cta: "Pedir presupuesto" },
    event: { title: "Carrera clasica de taxi o puesta a disposicion", shortTitle: "Particular", description: "Zona de Chateau-Thierry, CDG, estaciones SNCF de Paris, Reims y ciudades cercanas.", cta: "Reservar" },
    business: { title: "Profesional / empresa", shortTitle: "Empresa", description: "Trayectos puntuales o recurrentes, citas, facturacion y recogida organizada.", cta: "Pedir presupuesto" }
  },
  de: {
    medical: { title: "Zugelassener medizinischer Transport", shortTitle: "Medizinisch", description: "Professioneller Sitztransport fur Konsultationen, Krankenhaus und Tagesklinik.", cta: "Buchen" },
    airport: { title: "Bahnhof- und Flughafentransfers", shortTitle: "Bahnhofe und Flughafen", description: "Abfahrten und Ankunfte nach Chateau-Thierry, CDG, Orly, Beauvais, Bahnhofe und Nachbarorte.", cta: "Angebot anfragen" },
    event: { title: "Klassische Taxifahrt oder Bereitstellung", shortTitle: "Privat", description: "Chateau-Thierry Gebiet, CDG, Pariser SNCF-Bahnhofe, Reims und Nachbarorte.", cta: "Buchen" },
    business: { title: "Business / Unternehmen", shortTitle: "Unternehmen", description: "Einmalige oder wiederkehrende Fahrten, Termine, Rechnung und organisierte Abholung.", cta: "Angebot anfragen" }
  }
};

const fleetTranslations: Record<Exclude<Locale, "fr">, Record<string, FleetTranslation>> = {
  en: {
    eco: { name: "Taxi", passengers: "1 to 4 passengers", description: "Comfortable taxi for daily rides, stations, airports and licensed medical transport." },
    van: { name: "Taxi Van", passengers: "1 to 8 passengers", description: "Ideal for families, groups, stations, airports, events and business travel." }
  },
  es: {
    eco: { name: "Taxi", passengers: "1 a 4 pasajeros", description: "Taxi confortable para trayectos diarios, estaciones, aeropuertos y transporte medico autorizado." },
    van: { name: "Taxi Van", passengers: "1 a 8 pasajeros", description: "Ideal para familias, grupos, estaciones, aeropuertos, eventos y viajes profesionales." }
  },
  de: {
    eco: { name: "Taxi", passengers: "1 bis 4 Fahrgaste", description: "Komfortables Taxi fur Alltagsfahrten, Bahnhofe, Flughafen und medizinischen Transport." },
    van: { name: "Taxi Van", passengers: "1 bis 8 Fahrgaste", description: "Ideal fur Familien, Gruppen, Bahnhofe, Flughafen, Events und Geschaftsreisen." }
  }
};

const faqTranslations: Record<Exclude<Locale, "fr">, typeof faq> = {
  en: [
    { question: "How can I book a taxi?", answer: "You can book by phone, WhatsApp or via the booking/quote form. We then confirm the useful trip details." },
    { question: "Is medical transport covered?", answer: "Yas'Taxii provides licensed medical transport. Coverage depends on your situation and documents. No medical diagnosis is requested on the website." },
    { question: "Which airports do you serve?", answer: "We serve Paris Charles-de-Gaulle, Orly, Beauvais, stations and nearby towns from the Chateau-Thierry area and neighboring departments." },
    { question: "Which payment methods are accepted?", answer: "Payment can be organized according to the trip. Card payment is available if needed, to be confirmed when booking." },
    { question: "Can I request a quote?", answer: "Yes. The form allows you to request a clear quote, especially for airports, long distances and business trips." },
    { question: "Do you offer business rides?", answer: "Yes, we support companies for one-time or recurring rides, with invoice if needed." },
    { question: "Can I book for several people?", answer: "Yes. Choose Taxi up to 4 passengers or Taxi Van up to 8 passengers." },
    { question: "How can I change or cancel a request?", answer: "Contact us quickly by phone or WhatsApp with your request details to change or cancel your trip." }
  ],
  es: [
    { question: "Como reservar un taxi?", answer: "Puede reservar por telefono, WhatsApp o mediante el formulario de reserva/presupuesto. Luego confirmamos los datos utiles del trayecto." },
    { question: "El transporte medico esta cubierto?", answer: "Yas'Taxii ofrece transporte medico autorizado. La cobertura depende de su situacion y documentos. No se pide diagnostico medico en el sitio." },
    { question: "Que aeropuertos cubren?", answer: "Servimos Paris Charles-de-Gaulle, Orly, Beauvais, estaciones y ciudades cercanas desde Chateau-Thierry y departamentos vecinos." },
    { question: "Que medios de pago aceptan?", answer: "El pago puede organizarse segun el trayecto. La tarjeta bancaria esta prevista si es necesario, a confirmar en la reserva." },
    { question: "Puedo pedir presupuesto?", answer: "Si. El formulario permite pedir un presupuesto claro, especialmente para aeropuertos, largas distancias y trayectos profesionales." },
    { question: "Ofrecen trayectos profesionales?", answer: "Si, acompanamos a empresas para trayectos puntuales o recurrentes, con posibilidad de factura." },
    { question: "Puedo reservar para varias personas?", answer: "Si. Elija Taxi hasta 4 pasajeros o Taxi Van hasta 8 pasajeros." },
    { question: "Como modificar o cancelar una solicitud?", answer: "Contactenos rapidamente por telefono o WhatsApp con los datos de su solicitud." }
  ],
  de: [
    { question: "Wie buche ich ein Taxi?", answer: "Sie konnen telefonisch, per WhatsApp oder uber das Buchungs-/Angebotsformular buchen. Danach bestatigen wir die Fahrtdaten." },
    { question: "Wird medizinischer Transport ubernommen?", answer: "Yas'Taxii bietet zugelassenen medizinischen Transport. Die Ubernahme hangt von Ihrer Situation und Ihren Dokumenten ab." },
    { question: "Welche Flughafen bedienen Sie?", answer: "Wir bedienen Paris Charles-de-Gaulle, Orly, Beauvais sowie Bahnhofe und Nachbarorte ab Chateau-Thierry und benachbarten Departements." },
    { question: "Welche Zahlungsmethoden akzeptieren Sie?", answer: "Die Zahlung kann je nach Fahrt organisiert werden. Kartenzahlung ist bei Bedarf moglich und wird bei der Buchung bestatigt." },
    { question: "Kann ich ein Angebot anfragen?", answer: "Ja. Das Formular ermoglicht ein klares Angebot, besonders fur Flughafen, Langstrecken und Geschaftsfahrten." },
    { question: "Bieten Sie Geschaftsfahrten an?", answer: "Ja, wir begleiten Unternehmen bei einmaligen oder wiederkehrenden Fahrten, mit Rechnung wenn gewunscht." },
    { question: "Kann ich fur mehrere Personen buchen?", answer: "Ja. Wahlen Sie Taxi bis 4 Fahrgaste oder Taxi Van bis 8 Fahrgaste." },
    { question: "Wie kann ich eine Anfrage andern oder stornieren?", answer: "Kontaktieren Sie uns schnell telefonisch oder per WhatsApp mit den Details Ihrer Anfrage." }
  ]
};

export function getLocalizedServices(locale: Locale) {
  if (locale === "fr") return services;
  return services.map((service) => ({ ...service, ...serviceTranslations[locale][service.id] }));
}

export function getLocalizedBookingServices(locale: Locale) {
  if (locale === "fr") return bookingServices;
  return bookingServices.map((service) => ({ ...service, ...bookingTranslations[locale][service.id] }));
}

export function getLocalizedFleet(locale: Locale) {
  if (locale === "fr") return fleet;
  return fleet.map((vehicle) => ({ ...vehicle, ...fleetTranslations[locale][vehicle.id] }));
}

export function getLocalizedFaq(locale: Locale) {
  if (locale === "fr") return faq;
  return faqTranslations[locale];
}
