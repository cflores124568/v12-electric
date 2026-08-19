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
    {
      question: "Do you work directly with builders and general contractors?",
      answer:
        "Yes. V12 Electric coordinates with builders, designers, and other trades through rough-in and finish, and attends coordination meetings when the schedule calls for it.",
    },
    {
      question: "How is a whole-system project priced?",
      answer:
        "Pricing follows the scope after the walkthrough and load review. Larger projects are quoted in writing by phase so it is clear what is included at rough-in and at trim.",
    },  ],
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
    {
      question: "How long does an EV charger installation take?",
      answer:
        "A straightforward installation is usually completed in a day. A long conduit run, a panel change, or a required upgrade adds time, and any of that is identified before scheduling.",
    },
    {
      question: "Should the charger be hardwired or plugged into a 14-50 outlet?",
      answer:
        "It depends on the equipment and the location. Hardwiring supports higher continuous output and outdoor installations; a receptacle can make sense for portable equipment in a garage.",
    },  ],
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
    {
      question: "How long is the power off during a panel upgrade?",
      answer:
        "Most of the day, though the exact window depends on the equipment, the utility, and inspection timing. The schedule is set in advance so you can plan around it.",
    },
    {
      question: "Is 200-amp service always the right answer?",
      answer:
        "No. The right service size comes from a load calculation. Some properties are fine at 125 or 150 amps, and others need more once EV charging, HVAC, and pool equipment are counted.",
    },  ],
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
    {
      question: "Do you handle small jobs, or only large projects?",
      answer:
        "Both. Single fixture and outlet work is welcome, and it is often scheduled alongside other items so one visit covers the whole list.",
    },
    {
      question: "Will drywall need to be cut, and who patches it?",
      answer:
        "Routing is chosen to keep cuts as small as possible. Where access holes are needed, we identify them beforehand and confirm who is handling patch and paint.",
    },  ],
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
    {
      question: "Can work be done after hours or on closed days?",
      answer:
        "Yes. Evening, early morning, and closed-day scheduling is common for commercial work where a shutdown during business hours is not workable.",
    },
    {
      question: "Do you work with property managers and landlords?",
      answer:
        "Yes. Scope, access, and documentation can be coordinated with property managers, landlords, and tenants so everyone approves the work before it starts.",
    },  ],
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
    {
      question: "How long does an inspection take?",
      answer:
        "Most properties take one to two hours, depending on size, panel count, and how much of the wiring is accessible.",
    },
    {
      question: "Is the inspection fee applied to the repair work?",
      answer:
        "Ask when scheduling. Where an inspection leads directly into a repair or upgrade scope, the review is credited toward that work in most cases.",
    },  ],
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
    {
      question: "How is troubleshooting billed?",
      answer:
        "Diagnosis is billed for the time it takes to find the cause. Once the problem is identified, you get the repair price before any work is authorized.",
    },
    {
      question: "Can the problem be found without opening walls?",
      answer:
        "Usually. Most faults are located at devices, terminations, and the panel. If access is needed, the location is narrowed down first so any opening is small and deliberate.",
    },  ],
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
    {
      question: "Do smart switches need a neutral wire?",
      answer:
        "Most do. Older homes often have switch loops without a neutral, which is why the box condition is confirmed before devices are selected.",
    },
    {
      question: "Do you install the devices, or only the wiring?",
      answer:
        "Both are possible. V12 Electric can install and connect the devices, or provide the electrical infrastructure for an integrator to commission the system.",
    },  ],
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
    {
      question: "What is the difference between Caséta, RA3, and HomeWorks?",
      answer:
        "Caséta suits single rooms and smaller homes, RA3 covers whole-home control with keypads and scenes, and HomeWorks handles larger properties with deeper integration and custom programming.",
    },
    {
      question: "Who sets the lighting scenes?",
      answer:
        "V12 Electric programs and tunes the scenes on site, at night, with you present, then labels the keypads and leaves the programming documented.",
    },  ],
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
    {
      question: "Can V12 Electric review plans drawn by someone else?",
      answer:
        "Yes. Plans from an architect, designer, or another contractor can be reviewed, with conflicts, omissions, and capacity concerns returned in writing.",
    },
    {
      question: "When in the schedule should planning happen?",
      answer:
        "Before framing where possible, and no later than the pre-drywall walkthrough. Every decision made after that point costs more to change.",
    },  ],
};

export const serviceAreaFaqs: readonly FaqItem[] = [
  {
    question: "Which cities does V12 Electric serve?",
    answer:
      "V12 Electric works throughout the Coachella Valley: Palm Springs, Cathedral City, Desert Hot Springs, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Indio, and Coachella. Each city has its own page with local services, utility, and permit details.",
  },
  {
    question: "Do permit requirements change from city to city?",
    answer:
      "Yes. Each city runs its own building department, and requirements depend on the scope of the work. V12 Electric identifies the likely permit path for the property and accounts for inspection timing before installation is scheduled.",
  },
  {
    question: "Is the work different in one part of the valley than another?",
    answer:
      "The code is the same valley-wide, but the properties are not. Mid-century remodels, newer gated communities, and working commercial spaces each bring different panel conditions, routing constraints, and equipment expectations.",
  },
  {
    question: "What if the property sits outside the Coachella Valley?",
    answer:
      "Send the address and a short description of the work. V12 Electric will confirm whether it is close enough to cover before anything is scheduled.",
  },
] as const;

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
