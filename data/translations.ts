import { Locale } from "@/lib/i18n";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      booking: "Reserver",
      fleet: "Flotte",
      reviews: "Avis",
      destinations: "Taxis partenaires",
      faq: "FAQ",
      contact: "Contact",
      more: "Infos utiles"
    },
    common: {
      call: "Appeler",
      whatsapp: "WhatsApp",
      book: "Reserver",
      quote: "Demander un devis",
      learnMore: "En savoir plus",
      continue: "Continuer",
      back: "Retour",
      send: "Envoyer",
      edit: "Modifier",
      choose: "Choisir",
      close: "Masquer",
      showServices: "Afficher les services"
    },
    headerSubtitle: "Taxi conventionne gares et aeroports",
    footerText:
      "Taxi conventionne de Gandelu, Crezancy et toute l'agglomeration de Chateau-Thierry pour transport medical, gares, aeroports, courses privees et deplacements professionnels dans le departement de l'Aisne et les secteurs voisins.",
    legal: "Legal",
    mentions: "Mentions legales",
    privacy: "Politique de confidentialite",
    rights: "Tous droits reserves.",
    hero: {
      badge: "De toute l'agglomeration de Chateau-Thierry vers toutes destinations",
      title: "Votre taxi conventionne, gares, aeroports et toutes distances",
      text:
        "Taxi conventionne de Gandelu, Crezancy et toute l'agglomeration de Chateau-Thierry pour trajets medicaux, transferts, courses privees et deplacements professionnels.",
      book: "Reserver maintenant",
      quote: "Demander un devis",
      imageAlt: "Taxi Yas'Taxii vers gares et aeroports",
      highlights: [
        "Ponctualite",
        "Confort",
        "Securite",
        "24h/24 - 7j/7",
        "Transport medical conventionne",
        "Gares et aeroports",
        "Paiement CB si besoin",
        "Devis rapide"
      ]
    },
    servicesSection: {
      eyebrow: "Prestations",
      title: "Nos differents services taxi",
      text:
        "Un resume clair des prestations Yas'Taxii. Pour plus d'informations, chaque service dispose d'une section detaillee sur la page Services.",
      all: "Voir tous les services"
    },
    fleetSection: {
      eyebrow: "Notre flotte",
      title: "Taxi ou Taxi Van, selon vos passagers",
      text: "Deux formats simples, lisibles et rassurants pour choisir le vehicule adapte au trajet.",
      services: "Voir les services"
    },
    booking: {
      eyebrow: "Reservation / devis",
      title: "Un parcours simple en 4 etapes",
      intro: "Choisissez votre vehicule, la prestation, completez les informations utiles et validez le recapitulatif avant envoi.",
      comfortEyebrow: "Confort a bord",
      comfortTitle: "Equipements disponibles pour les longs trajets",
      comfortText: "A preciser dans le formulaire selon votre besoin.",
      steps: ["Vehicule", "Prestation", "Informations", "Recapitulatif"],
      step: "Etape",
      successTitle: "Votre demande a bien ete envoyee !",
      successText:
        "Merci, nous avons bien recu votre demande. Notre equipe va l'etudier et vous repondra dans les plus brefs delais. Un email recapitulatif vous a ete envoye.",
      newRequest: "Envoyer une nouvelle demande",
      showComfort: "Voir les equipements",
      comfortItems: [
        "Siege bebe 360 degres convertible en cosy",
        "Rehausseur",
        "Cosy bebe",
        "Oreiller de voyage",
        "Glaciere a compression (-20 degres)",
        "Prise 220V",
        "Attelage",
        "Porte-velos jusqu'a 3 velos"
      ],
      fields: {
        fullName: "Nom et prenom",
        email: "Email",
        phone: "Telephone",
        pickupAddress: "Adresse de prise en charge",
        destinationAddress: "Adresse d'arrivee",
        appointmentReason: "Motif du rendez-vous",
        appointmentReasonOther: "Precisez le motif",
        appointmentDate: "Date du rendez-vous",
        appointmentTime: "Heure du rendez-vous",
        passengers: "Nombre de passagers",
        luggage: "Nombre de bagages",
        babySeat: "Besoin d'un siege bebe",
        flightOrTrainNumber: "Numero de vol ou train optionnel",
        departureDateTime: "Date et heure de depart",
        eventAddress: "Adresse de l'evenement",
        eventDate: "Date de l'evenement",
        pickupTime: "Heure de prise en charge souhaitee",
        returnTime: "Heure de retour",
        company: "Nom de la societe",
        contactName: "Nom du contact",
        businessEmail: "Email professionnel",
        invoiceNeeded: "Besoin d'une facture",
        tripFrequency: "Trajet",
        comment: "Commentaire optionnel"
      },
      options: {
        yes: "Oui",
        no: "Non",
        dayHospital: "Hopital de jour",
        consultation: "Consultation",
        other: "Autre",
        oneTime: "Ponctuel",
        recurring: "Recurrent"
      },
      errors: {
        required: "Champ obligatoire",
        precise: "Merci de preciser",
        taxiPassengers: "Le Taxi accepte entre 1 et 4 passagers.",
        vanPassengers: "Le Taxi Van accepte entre 1 et 8 passagers."
      },
      confirmTitle: "Recapitulatif avant envoi",
      confirmationLabels: {
        vehicle: "Vehicule choisi",
        service: "Prestation choisie",
        fullName: "Nom et prenom",
        company: "Societe",
        contactName: "Contact",
        email: "Email",
        businessEmail: "Email professionnel",
        phone: "Telephone",
        pickupAddress: "Prise en charge",
        destinationAddress: "Arrivee",
        eventAddress: "Evenement / rendez-vous",
        appointmentReason: "Motif",
        appointmentReasonOther: "Precision du motif",
        appointmentDate: "Date rendez-vous",
        appointmentTime: "Heure rendez-vous",
        departureDateTime: "Depart",
        eventDate: "Date",
        pickupTime: "Heure prise en charge",
        returnTime: "Heure retour",
        passengers: "Passagers",
        luggage: "Bagages",
        babySeat: "Siege bebe",
        flightOrTrainNumber: "Vol / train",
        invoiceNeeded: "Facture",
        tripFrequency: "Trajet",
        comment: "Commentaire"
      }
    },
    contact: {
      eyebrow: "Contact",
      title: "Besoin d'un taxi ou d'un devis rapide ?",
      success: "Votre message a bien ete envoye.",
      message: "Message"
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions frequentes"
    }
  },
  en: {
    nav: { home: "Home", services: "Services", booking: "Book", fleet: "Fleet", reviews: "Reviews", destinations: "Partner taxis", faq: "FAQ", contact: "Contact", more: "Useful info" },
    common: { call: "Call", whatsapp: "WhatsApp", book: "Book", quote: "Request a quote", learnMore: "Learn more", continue: "Continue", back: "Back", send: "Send", edit: "Edit", choose: "Choose", close: "Hide", showServices: "Show services" },
    headerSubtitle: "Licensed taxi, stations and airports",
    footerText: "Licensed taxi from Gandelu, Crezancy and the Chateau-Thierry area for medical transport, stations, airports, private rides and business trips in Aisne and nearby areas.",
    legal: "Legal",
    mentions: "Legal notice",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    hero: {
      badge: "From the Chateau-Thierry area to every destination",
      title: "Your licensed taxi for stations, airports and long-distance rides",
      text: "Licensed taxi from Gandelu, Crezancy and the Chateau-Thierry area for medical trips, transfers, private rides and business travel.",
      book: "Book now",
      quote: "Request a quote",
      imageAlt: "Yas'Taxii taxi to stations and airports",
      highlights: ["Punctuality", "Comfort", "Safety", "24/7", "Licensed medical transport", "Stations and airports", "Card payment if needed", "Fast quote"]
    },
    servicesSection: { eyebrow: "Services", title: "Our taxi services", text: "A clear summary of Yas'Taxii services. Each service has a detailed section on the Services page.", all: "View all services" },
    fleetSection: { eyebrow: "Our fleet", title: "Taxi or Taxi Van, depending on passengers", text: "Two clear vehicle formats to choose the right option for your trip.", services: "View services" },
    booking: {
      eyebrow: "Booking / quote",
      title: "A simple 4-step process",
      intro: "Choose your vehicle and service, fill in the useful details and validate the summary before sending.",
      comfortEyebrow: "On-board comfort",
      comfortTitle: "Equipment available for long journeys",
      comfortText: "Please mention your needs in the form.",
      steps: ["Vehicle", "Service", "Information", "Summary"],
      step: "Step",
      successTitle: "Your request has been sent!",
      successText: "Thank you, we have received your request. Our team will review it and reply as soon as possible. A summary email has been sent to you.",
      newRequest: "Send a new request",
      showComfort: "View equipment",
      comfortItems: ["360 baby seat convertible into cosy", "Booster seat", "Baby cosy", "Travel pillow", "Compression cooler (-20 deg C)", "220V socket", "Tow bar", "Bike rack up to 3 bikes"],
      fields: { fullName: "Full name", email: "Email", phone: "Phone", pickupAddress: "Pickup address", destinationAddress: "Arrival address", appointmentReason: "Appointment reason", appointmentReasonOther: "Specify the reason", appointmentDate: "Appointment date", appointmentTime: "Appointment time", passengers: "Number of passengers", luggage: "Number of bags", babySeat: "Need a baby seat", flightOrTrainNumber: "Optional flight or train number", departureDateTime: "Departure date and time", eventAddress: "Event address", eventDate: "Event date", pickupTime: "Desired pickup time", returnTime: "Return time", company: "Company name", contactName: "Contact name", businessEmail: "Business email", invoiceNeeded: "Need an invoice", tripFrequency: "Trip", comment: "Optional comment" },
      options: { yes: "Yes", no: "No", dayHospital: "Day hospital", consultation: "Consultation", other: "Other", oneTime: "One-time", recurring: "Recurring" },
      errors: { required: "Required field", precise: "Please specify", taxiPassengers: "Taxi accepts 1 to 4 passengers.", vanPassengers: "Taxi Van accepts 1 to 8 passengers." },
      confirmTitle: "Summary before sending",
      confirmationLabels: { vehicle: "Selected vehicle", service: "Selected service", fullName: "Full name", company: "Company", contactName: "Contact", email: "Email", businessEmail: "Business email", phone: "Phone", pickupAddress: "Pickup", destinationAddress: "Arrival", eventAddress: "Event / appointment", appointmentReason: "Reason", appointmentReasonOther: "Reason details", appointmentDate: "Appointment date", appointmentTime: "Appointment time", departureDateTime: "Departure", eventDate: "Date", pickupTime: "Pickup time", returnTime: "Return time", passengers: "Passengers", luggage: "Bags", babySeat: "Baby seat", flightOrTrainNumber: "Flight / train", invoiceNeeded: "Invoice", tripFrequency: "Trip", comment: "Comment" }
    },
    contact: { eyebrow: "Contact", title: "Need a taxi or a quick quote?", success: "Your message has been sent.", message: "Message" },
    faq: { eyebrow: "FAQ", title: "Frequently asked questions" }
  },
  es: {
    nav: { home: "Inicio", services: "Servicios", booking: "Reservar", fleet: "Flota", reviews: "Opiniones", destinations: "Taxis socios", faq: "FAQ", contact: "Contacto", more: "Info util" },
    common: { call: "Llamar", whatsapp: "WhatsApp", book: "Reservar", quote: "Pedir presupuesto", learnMore: "Mas informacion", continue: "Continuar", back: "Volver", send: "Enviar", edit: "Modificar", choose: "Elegir", close: "Ocultar", showServices: "Mostrar servicios" },
    headerSubtitle: "Taxi autorizado, estaciones y aeropuertos",
    footerText: "Taxi autorizado desde Gandelu, Crezancy y la zona de Chateau-Thierry para transporte medico, estaciones, aeropuertos, trayectos privados y profesionales.",
    legal: "Legal",
    mentions: "Aviso legal",
    privacy: "Politica de privacidad",
    rights: "Todos los derechos reservados.",
    hero: {
      badge: "Desde la zona de Chateau-Thierry hacia todos los destinos",
      title: "Su taxi autorizado para estaciones, aeropuertos y largas distancias",
      text: "Taxi autorizado desde Gandelu, Crezancy y Chateau-Thierry para trayectos medicos, traslados, viajes privados y profesionales.",
      book: "Reservar ahora",
      quote: "Pedir presupuesto",
      imageAlt: "Taxi Yas'Taxii hacia estaciones y aeropuertos",
      highlights: ["Puntualidad", "Confort", "Seguridad", "24/7", "Transporte medico autorizado", "Estaciones y aeropuertos", "Pago con tarjeta si es necesario", "Presupuesto rapido"]
    },
    servicesSection: { eyebrow: "Servicios", title: "Nuestros servicios de taxi", text: "Un resumen claro de los servicios Yas'Taxii. Cada servicio tiene una seccion detallada en la pagina Servicios.", all: "Ver todos los servicios" },
    fleetSection: { eyebrow: "Nuestra flota", title: "Taxi o Taxi Van, segun sus pasajeros", text: "Dos formatos claros para elegir el vehiculo adecuado.", services: "Ver servicios" },
    booking: {
      eyebrow: "Reserva / presupuesto",
      title: "Un proceso sencillo en 4 pasos",
      intro: "Elija el vehiculo, el servicio, complete los datos y valide el resumen antes de enviar.",
      comfortEyebrow: "Confort a bordo",
      comfortTitle: "Equipamiento disponible para trayectos largos",
      comfortText: "Indiquelo en el formulario segun sus necesidades.",
      steps: ["Vehiculo", "Servicio", "Informacion", "Resumen"],
      step: "Paso",
      successTitle: "Su solicitud ha sido enviada.",
      successText: "Gracias, hemos recibido su solicitud. Nuestro equipo la revisara y respondera lo antes posible. Se le ha enviado un email de resumen.",
      newRequest: "Enviar una nueva solicitud",
      showComfort: "Ver equipamiento",
      comfortItems: ["Silla bebe 360 convertible", "Elevador", "Cosy bebe", "Almohada de viaje", "Nevera de compresion (-20 deg C)", "Toma 220V", "Enganche", "Portabicicletas hasta 3 bicicletas"],
      fields: { fullName: "Nombre y apellido", email: "Email", phone: "Telefono", pickupAddress: "Direccion de recogida", destinationAddress: "Direccion de llegada", appointmentReason: "Motivo de la cita", appointmentReasonOther: "Precise el motivo", appointmentDate: "Fecha de la cita", appointmentTime: "Hora de la cita", passengers: "Numero de pasajeros", luggage: "Numero de maletas", babySeat: "Necesita silla bebe", flightOrTrainNumber: "Numero de vuelo o tren opcional", departureDateTime: "Fecha y hora de salida", eventAddress: "Direccion del evento", eventDate: "Fecha del evento", pickupTime: "Hora de recogida deseada", returnTime: "Hora de regreso", company: "Empresa", contactName: "Persona de contacto", businessEmail: "Email profesional", invoiceNeeded: "Necesita factura", tripFrequency: "Trayecto", comment: "Comentario opcional" },
      options: { yes: "Si", no: "No", dayHospital: "Hospital de dia", consultation: "Consulta", other: "Otro", oneTime: "Puntual", recurring: "Recurrente" },
      errors: { required: "Campo obligatorio", precise: "Por favor precise", taxiPassengers: "El Taxi acepta de 1 a 4 pasajeros.", vanPassengers: "El Taxi Van acepta de 1 a 8 pasajeros." },
      confirmTitle: "Resumen antes de enviar",
      confirmationLabels: { vehicle: "Vehiculo elegido", service: "Servicio elegido", fullName: "Nombre y apellido", company: "Empresa", contactName: "Contacto", email: "Email", businessEmail: "Email profesional", phone: "Telefono", pickupAddress: "Recogida", destinationAddress: "Llegada", eventAddress: "Evento / cita", appointmentReason: "Motivo", appointmentReasonOther: "Detalle del motivo", appointmentDate: "Fecha de cita", appointmentTime: "Hora de cita", departureDateTime: "Salida", eventDate: "Fecha", pickupTime: "Hora de recogida", returnTime: "Hora de regreso", passengers: "Pasajeros", luggage: "Maletas", babySeat: "Silla bebe", flightOrTrainNumber: "Vuelo / tren", invoiceNeeded: "Factura", tripFrequency: "Trayecto", comment: "Comentario" }
    },
    contact: { eyebrow: "Contacto", title: "Necesita un taxi o un presupuesto rapido?", success: "Su mensaje ha sido enviado.", message: "Mensaje" },
    faq: { eyebrow: "FAQ", title: "Preguntas frecuentes" }
  },
  de: {
    nav: { home: "Start", services: "Services", booking: "Buchen", fleet: "Flotte", reviews: "Bewertungen", destinations: "Partner-Taxis", faq: "FAQ", contact: "Kontakt", more: "Infos" },
    common: { call: "Anrufen", whatsapp: "WhatsApp", book: "Buchen", quote: "Angebot anfragen", learnMore: "Mehr erfahren", continue: "Weiter", back: "Zuruck", send: "Senden", edit: "Andern", choose: "Auswahlen", close: "Ausblenden", showServices: "Services anzeigen" },
    headerSubtitle: "Zugelassenes Taxi, Bahnhofe und Flughafen",
    footerText: "Zugelassenes Taxi ab Gandelu, Crezancy und Chateau-Thierry fur medizinische Fahrten, Bahnhofe, Flughafen, private Fahrten und Geschaftsreisen.",
    legal: "Rechtliches",
    mentions: "Impressum",
    privacy: "Datenschutz",
    rights: "Alle Rechte vorbehalten.",
    hero: {
      badge: "Von Chateau-Thierry zu allen Zielen",
      title: "Ihr Taxi fur Bahnhofe, Flughafen und Langstrecken",
      text: "Zugelassenes Taxi ab Gandelu, Crezancy und Chateau-Thierry fur medizinische Fahrten, Transfers, private Fahrten und Geschaftsreisen.",
      book: "Jetzt buchen",
      quote: "Angebot anfragen",
      imageAlt: "Yas'Taxii Taxi zu Bahnhofen und Flughafen",
      highlights: ["Punktlichkeit", "Komfort", "Sicherheit", "24/7", "Zugelassener medizinischer Transport", "Bahnhofe und Flughafen", "Kartenzahlung bei Bedarf", "Schnelles Angebot"]
    },
    servicesSection: { eyebrow: "Leistungen", title: "Unsere Taxi-Leistungen", text: "Eine klare Ubersicht der Yas'Taxii Leistungen. Jede Leistung hat Details auf der Services-Seite.", all: "Alle Services ansehen" },
    fleetSection: { eyebrow: "Unsere Flotte", title: "Taxi oder Taxi Van, je nach Fahrgasten", text: "Zwei klare Fahrzeugformate fur die passende Fahrt.", services: "Services ansehen" },
    booking: {
      eyebrow: "Buchung / Angebot",
      title: "Ein einfacher Ablauf in 4 Schritten",
      intro: "Wahlen Sie Fahrzeug und Leistung, geben Sie die Daten ein und bestatigen Sie die Zusammenfassung.",
      comfortEyebrow: "Komfort an Bord",
      comfortTitle: "Ausstattung fur lange Fahrten",
      comfortText: "Bitte im Formular nach Bedarf angeben.",
      steps: ["Fahrzeug", "Leistung", "Informationen", "Zusammenfassung"],
      step: "Schritt",
      successTitle: "Ihre Anfrage wurde gesendet.",
      successText: "Vielen Dank, wir haben Ihre Anfrage erhalten. Unser Team pruft sie und antwortet schnellstmoglich. Eine Zusammenfassung wurde per E-Mail gesendet.",
      newRequest: "Neue Anfrage senden",
      showComfort: "Ausstattung anzeigen",
      comfortItems: ["360-Babysitz", "Sitzerhohung", "Baby-Cosy", "Reisekissen", "Kompressionskuhlbox (-20 deg C)", "220V Steckdose", "Anhangerkupplung", "Fahrradtrager bis 3 Fahrrader"],
      fields: { fullName: "Vor- und Nachname", email: "E-Mail", phone: "Telefon", pickupAddress: "Abholadresse", destinationAddress: "Zieladresse", appointmentReason: "Grund des Termins", appointmentReasonOther: "Grund angeben", appointmentDate: "Termindatum", appointmentTime: "Terminzeit", passengers: "Anzahl Fahrgaste", luggage: "Anzahl Gepackstucke", babySeat: "Babysitz benotigt", flightOrTrainNumber: "Flug- oder Zugnummer optional", departureDateTime: "Abfahrtsdatum und Uhrzeit", eventAddress: "Eventadresse", eventDate: "Eventdatum", pickupTime: "Gewunschte Abholzeit", returnTime: "Ruckfahrtzeit", company: "Firmenname", contactName: "Kontaktname", businessEmail: "Geschaftliche E-Mail", invoiceNeeded: "Rechnung benotigt", tripFrequency: "Fahrt", comment: "Optionaler Kommentar" },
      options: { yes: "Ja", no: "Nein", dayHospital: "Tagesklinik", consultation: "Sprechstunde", other: "Andere", oneTime: "Einmalig", recurring: "Wiederkehrend" },
      errors: { required: "Pflichtfeld", precise: "Bitte angeben", taxiPassengers: "Das Taxi akzeptiert 1 bis 4 Fahrgaste.", vanPassengers: "Der Taxi Van akzeptiert 1 bis 8 Fahrgaste." },
      confirmTitle: "Zusammenfassung vor dem Senden",
      confirmationLabels: { vehicle: "Gewahltes Fahrzeug", service: "Gewahlte Leistung", fullName: "Vor- und Nachname", company: "Firma", contactName: "Kontakt", email: "E-Mail", businessEmail: "Geschaftliche E-Mail", phone: "Telefon", pickupAddress: "Abholung", destinationAddress: "Ankunft", eventAddress: "Event / Termin", appointmentReason: "Grund", appointmentReasonOther: "Details", appointmentDate: "Termindatum", appointmentTime: "Terminzeit", departureDateTime: "Abfahrt", eventDate: "Datum", pickupTime: "Abholzeit", returnTime: "Ruckfahrt", passengers: "Fahrgaste", luggage: "Gepack", babySeat: "Babysitz", flightOrTrainNumber: "Flug / Zug", invoiceNeeded: "Rechnung", tripFrequency: "Fahrt", comment: "Kommentar" }
    },
    contact: { eyebrow: "Kontakt", title: "Brauchen Sie ein Taxi oder ein schnelles Angebot?", success: "Ihre Nachricht wurde gesendet.", message: "Nachricht" },
    faq: { eyebrow: "FAQ", title: "Haufige Fragen" }
  }
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
