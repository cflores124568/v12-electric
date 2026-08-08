export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqs: readonly FaqItem[] = [
  {
    question: "What areas does V12 Electric serve?",
    answer:
      "V12 Electric serves Palm Springs, Cathedral City, Desert Hot Springs, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Indio, and Coachella in California's Coachella Valley.",
  },
  {
    question: "What electrical services does V12 Electric provide?",
    answer:
      "Services include EV charger installation, panel and service upgrades, residential and commercial electrical work, inspections, troubleshooting, smart-home wiring, Lutron lighting controls, and electrical design planning.",
  },
  {
    question: "How do I request an electrical quote?",
    answer:
      "Call or text (760) 567-6593, or send the project city, service needed, and a short description through the contact form. Photos of the panel and work area can help clarify the next step.",
  },
  {
    question: "Does an EV charger or panel upgrade require a permit?",
    answer:
      "Permit and inspection requirements depend on the property and scope. V12 Electric reviews capacity, equipment, utility requirements, routing, and the local permit path before installation is scheduled.",
  },
] as const;

export const serviceFaqs: Record<string, readonly FaqItem[]> = {
  "electrical-systems": [
    {
      question: "What is included in a complete electrical system project?",
      answer:
        "A complete project can include service equipment, panels, branch circuits, grounding, devices, lighting, equipment connections, labeling, testing, and coordination with the plans and other trades.",
    },
    {
      question: "When should electrical planning begin?",
      answer:
        "Planning should begin before walls close and before major equipment is ordered. Early load, routing, device, and lighting decisions reduce changes during construction.",
    },
    {
      question: "Can an existing system be planned for future loads?",
      answer:
        "Yes. A capacity review can account for likely additions such as EV charging, HVAC, appliances, pools, workshops, or an addition before the final scope is selected.",
    },
  ],
  "ev-charger-installation": [
    {
      question: "Can V12 Electric install Tesla and universal Level 2 chargers?",
      answer:
        "Yes. V12 Electric installs Tesla Wall Connectors and universal Level 2 charging equipment with a dedicated circuit, suitable mounting, and a route planned around the parking location.",
    },
    {
      question: "Do I need a panel upgrade for a Level 2 EV charger?",
      answer:
        "Not always. A panel and load review determines whether the existing service has capacity or whether load management, a smaller charging circuit, or a service upgrade is appropriate.",
    },
    {
      question: "Does an EV charger installation need a permit?",
      answer:
        "Requirements vary by city and scope. The installation plan should account for the local permit and inspection path before work is scheduled.",
    },
  ],
  "panel-service-upgrades": [
    {
      question: "How do I know whether my electrical panel needs an upgrade?",
      answer:
        "Common reasons include insufficient capacity for new equipment, obsolete or damaged equipment, repeated capacity problems, insurance or inspection findings, or a larger remodel that changes the property's loads.",
    },
    {
      question: "What happens before a panel or service upgrade?",
      answer:
        "The process starts with a load and condition review, then equipment, grounding, routing, utility requirements, permits, inspection, and any required outage are coordinated.",
    },
    {
      question: "Can a panel upgrade add room for an EV charger or new HVAC?",
      answer:
        "Yes. Current and planned loads can be evaluated together so the selected equipment supports the property instead of solving only one immediate addition.",
    },
  ],
  "residential-electrical": [
    {
      question: "What residential electrical work does V12 Electric handle?",
      answer:
        "Residential work includes repairs, remodel and addition wiring, outlets, switches, GFCI protection, ceiling fans, fixtures, appliance circuits, outdoor electrical, panel work, and safety corrections.",
    },
    {
      question: "Can electrical work be completed in a finished home?",
      answer:
        "Yes. Access, routing, protection of nearby finishes, and cleanup are planned before work begins. The available route and repair scope depend on the existing construction.",
    },
    {
      question: "Should electrical work be planned before a remodel starts?",
      answer:
        "Yes. Confirming loads, device locations, lighting, equipment, and panel capacity early helps avoid conflicts and changes after finishes are installed.",
    },
  ],
  "commercial-electrical": [
    {
      question: "What types of commercial electrical work are available?",
      answer:
        "V12 Electric supports retail, galleries, offices, and other businesses with lighting, tenant-improvement wiring, dedicated equipment circuits, service work, maintenance, troubleshooting, and code corrections.",
    },
    {
      question: "Can work be coordinated around business operations?",
      answer:
        "The scope can be sequenced around access, customers, staff, equipment, and required shutdowns. The practical schedule depends on the work and inspection requirements.",
    },
    {
      question: "Can you troubleshoot a commercial circuit before recommending replacement?",
      answer:
        "Yes. Troubleshooting isolates the failed device, connection, circuit, load, or upstream issue so the recommendation is based on the cause of the problem.",
    },
  ],
  "electrical-inspections": [
    {
      question: "What does a practical electrical inspection cover?",
      answer:
        "The review can cover panel and breaker condition, grounding and bonding observations, GFCI and AFCI protection, visible wiring, devices, and conditions related to a remodel or equipment change.",
    },
    {
      question: "When is an electrical inspection useful?",
      answer:
        "An inspection is useful for an older property, recurring electrical concerns, rental turnover, sale preparation, a planned remodel, or before adding equipment that may affect capacity.",
    },
    {
      question: "Will I receive next-step recommendations?",
      answer:
        "Yes. The goal is to separate immediate safety or reliability concerns from planned improvements and explain the practical next steps.",
    },
  ],
  "troubleshooting-repairs": [
    {
      question: "What causes a breaker to keep tripping?",
      answer:
        "Possible causes include an overloaded circuit, a failing breaker, damaged wiring, a loose connection, a faulty device, or equipment trouble. Testing is needed to identify the actual cause.",
    },
    {
      question: "Can you diagnose flickering lights or dead outlets?",
      answer:
        "Yes. V12 Electric traces the affected circuit and checks devices, connections, protection, loads, and upstream equipment before recommending a repair.",
    },
    {
      question: "Is replacing a breaker always the solution?",
      answer:
        "No. A tripping breaker may be responding to a problem elsewhere. The circuit and connected loads should be diagnosed before parts are replaced.",
    },
  ],
  "smart-home-wiring": [
    {
      question: "What should be planned before installing smart-home devices?",
      answer:
        "Plan device locations, reliable power, neutral requirements, control wiring, network locations, equipment space, low-voltage pathways, and how the system may expand.",
    },
    {
      question: "Can smart-home wiring be added during a remodel?",
      answer:
        "Yes. A remodel is a useful time to add power, control-ready wiring, and structured pathways while wall and ceiling access is available.",
    },
    {
      question: "Does smart-home equipment still need conventional electrical planning?",
      answer:
        "Yes. Smart devices still depend on safe circuits, suitable boxes, correct controls, reliable power, and an electrical system with appropriate capacity.",
    },
  ],
  "lutron-lighting-controls": [
    {
      question: "What is included in Lutron lighting-control planning?",
      answer:
        "Planning can include fixture loads, switching, dimming compatibility, scene behavior, control locations, equipment space, color temperature, and coordination with the architecture.",
    },
    {
      question: "Can Lutron controls be installed in an existing home?",
      answer:
        "Often, yes. The right approach depends on existing wiring, neutral availability, fixture compatibility, control goals, and access to the affected locations.",
    },
    {
      question: "Why should fixtures and controls be selected together?",
      answer:
        "Fixture and dimmer compatibility affects range, flicker, noise, and reliability. Coordinating them early produces more predictable lighting and scene control.",
    },
  ],
  "design-planning": [
    {
      question: "What does electrical design planning include?",
      answer:
        "It can include plan review, loads, equipment, panels, fixture and device locations, switching, controls, routing, trade coordination, and infrastructure for future needs.",
    },
    {
      question: "Who does V12 Electric coordinate with?",
      answer:
        "V12 Electric can coordinate electrical decisions with homeowners, builders, designers, architects, equipment vendors, and other trades involved in the project.",
    },
    {
      question: "Why plan electrical work before construction begins?",
      answer:
        "Early planning exposes capacity, access, routing, equipment, and sequencing issues while they are still easier to solve and before finished work has to change.",
    },
  ],
};

export const toFaqSchema = (faqs: readonly FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
