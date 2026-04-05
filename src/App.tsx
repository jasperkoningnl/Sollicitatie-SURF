/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MonitorSmartphone, LayoutTemplate, Users, Kanban, Target, Mail, Phone, Linkedin, ArrowUp, ArrowRight } from 'lucide-react';

const sections = [
  {
    id: "techniek",
    tag: "Techniek & Communicatie",
    title: "Van ICT-journalist tot digitaal regisseur",
    color: "orange",
    icon: MonitorSmartphone,
    paragraphs: [
      "Mijn technische nieuwsgierigheid begon vroeg. Voor mijn eerste stage bij De Telegraaf las ik het handboek HTML 4. Als ICT-journalist bij PC Magazine en ZDNet.nl schreef ik dagelijks over technologie voor een breed publiek. Niet als programmeur, maar als vertaler: complexe techniek omzetten naar heldere taal.",
      "Die vaardigheid gebruik ik nog steeds. Bij Nederland van Boven dook ik in de wereld van geodata en vertaalde dat naar datavisualisaties voor televisie. Als projectleider bij VPRO Digitaal voerde ik het gesprek met interaction designers, ontwikkelaars en vormgevers. En als eindredacteur bij Brainwash stuur ik de digitale strategie aan."
    ],
    highlights: ["PC Magazine & ZDNet.nl", "Nederland van Boven", "VPRO Digitaal", "Brainwash"],
    image: null
  },
  {
    id: "cms",
    tag: "CMS'en & Online Kanalen",
    title: "Thuis in elk systeem",
    color: "blue",
    icon: LayoutTemplate,
    paragraphs: [
      "In mijn carrière werkte ik met WordPress, Magnolia, Prepr, Waxtrapp en vele andere content management systemen. Daarnaast nieuwsbriefsystemen, social media tools en specifieke platforms voor online communities. Elk systeem heeft zijn eigen logica en beperkingen, en ik vind het een uitdaging om die te leren kennen en er het maximale uit te halen.",
      "Bij de VPRO was ik verantwoordelijk voor de opzet van de sociale kanalen van VPRO, Tegenlicht en later Brainwash. Van strategie tot dagelijkse uitvoering. Ik zette VPROGids.nl op als channel manager en werkte met tools als JIRA, Trello, Notion en Airtable voor workflowbeheer.",
      "Momenteel experimenteer ik met het zelf bouwen van kleine tools met behulp van AI. Niet omdat ik developer wil worden, maar omdat ik wil begrijpen hoe deze technologie werkt. Om te snappen welke mogelijkheden en risico's ermee gepaard gaan."
    ],
    highlights: ["WordPress", "Magnolia", "Prepr", "JIRA", "Notion"],
    image: null
  },
  {
    id: "communities",
    tag: "Communities",
    title: "Betrokkenheid creëren en vasthouden",
    color: "green",
    icon: Users,
    paragraphs: [
      "Een sterk online kanaal draait om de mensen die het gebruiken. Dat leerde ik al vroeg bij de NCRV, waar ik de online forums van Stand.nl en Rondom Tien modereerde. In een tijd dat online communities nog nieuw waren, ontdekte ik hoe je een veilige en levendige plek voor gesprek creëert.",
      "Bij de VPRO bouwde ik verder aan die ervaring. Voor programma's als Landroof en Café de Liefde ontwikkelde ik online communities waar kijkers actief konden meedoen. Bij Tegenlicht hielp ik het netwerk van lokale Meet Ups groeien: een mooi voorbeeld van hoe online en offline betrokkenheid elkaar versterken.",
      "Dat de online communities van SURF bij deze functie horen, maakt de rol extra aantrekkelijk. Het communities-platform is dé plek waar inhoudelijke interactie met de doelgroep plaatsvindt, en ik weet uit ervaring hoe je zo'n platform levend houdt."
    ],
    highlights: ["Stand.nl & Rondom Tien", "Landroof & Café de Liefde", "Tegenlicht Meet Ups", "Brainwash socials"],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000" // Generic community/meeting image
  },
  {
    id: "projecten",
    tag: "Projecten & Stakeholders",
    title: "Van wens naar werkend platform",
    color: "red",
    icon: Kanban,
    paragraphs: [
      "Als projectleider bij VPRO Digitaal stuurde ik de ontwikkeling aan van platforms als VPRO.nl en HollandDoc.nl. Interne wensen ophalen bij redacties, die vertalen naar een plan van aanpak, en het traject met externe ontwikkelpartijen begeleiden. Bij Nederland van Boven coördineerde ik een crossmediaal project met buitenlandse databedrijven, belangenorganisaties en interne afdelingen, inclusief de organisatie van een hackathon.",
      "Bij de VPRO maakte ik de invoering van agile werken mee. Ik werkte met JIRA, schreef user stories en begeleidde gebruikerstests bij het opzetten van de app Koos voor VPRO Gids. Als eindredacteur ben ik verantwoordelijk voor budgetten, planning en het bewaken van de lijn op meerdere kanalen tegelijk.",
      "Als content manager bij GezondheidsNet was ik zelfstandig verantwoordelijk voor conceptontwikkeling, het selecteren van partners voor design en techniek, en de integratie van een Nederlandse en internationale medische encyclopedie."
    ],
    highlights: ["HollandDoc.nl", "Nederland van Boven", "App Koos (VPRO Gids)", "GezondheidsNet"],
    // Placeholder for the uploaded presentation image
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000" 
  },
  {
    id: "waarom-surf",
    tag: "Waarom SURF?",
    title: "Technologie met maatschappelijke impact",
    color: "purple",
    icon: Target,
    paragraphs: [
      "Na jaren in de Hilversumse mediawereld wil ik een nieuwe stap maken. Niet weg van wat ik goed kan, maar naar een omgeving waar ik het anders kan inzetten. Een coöperatie die technologie voor het hoger onderwijs en onderzoek verzorgt, en dat doet vanuit samenwerking en kennisdeling, spreekt me aan.",
      "De missie van SURF raakt aan wat mij drijft: technologie toegankelijk maken voor een breed publiek. In de mediawereld deed ik dat voor kijkers en lezers. Bij SURF zou ik dat doen voor onderwijs en onderzoek, een sector die er echt toe doet.",
      "De manier waarop SURF met haar leden werkt, de autonomie die medewerkers krijgen, de nadruk op zelfstandigheid en de open cultuur: dat past bij hoe ik het beste werk. Niet als uitvoerder van opdrachten, maar als iemand die meedenkt, verbindt en de regie voert."
    ],
    highlights: ["Coöperatieve structuur", "Onderwijs & onderzoek", "Autonomie & eigenaarschap"],
    image: null
  }
];

const colorStyles: Record<string, { tagBg: string; tagText: string; highlightBg: string; highlightText: string }> = {
  orange: {
    tagBg: "bg-[#f58220]", // SURF Orange
    tagText: "text-white",
    highlightBg: "bg-orange-50",
    highlightText: "text-orange-800"
  },
  blue: {
    tagBg: "bg-[#0077c8]", // SURF Blue
    tagText: "text-white",
    highlightBg: "bg-blue-50",
    highlightText: "text-blue-800"
  },
  green: {
    tagBg: "bg-[#00a390]", // SURF Green
    tagText: "text-white",
    highlightBg: "bg-emerald-50",
    highlightText: "text-emerald-800"
  },
  red: {
    tagBg: "bg-[#e3004f]", // SURF Red/Pink
    tagText: "text-white",
    highlightBg: "bg-rose-50",
    highlightText: "text-rose-800"
  },
  purple: {
    tagBg: "bg-[#702082]", // SURF Purple
    tagText: "text-white",
    highlightBg: "bg-purple-50",
    highlightText: "text-purple-800"
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const current = sectionElements.find(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-sans text-slate-900">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            {/* SURF Logo */}
            <img 
              src="https://www.surf.nl/themes/surf/logo.svg" 
              alt="SURF" 
              className="h-8 cursor-pointer"
              onClick={scrollToTop}
              referrerPolicy="no-referrer"
            />
            <div className="hidden md:flex flex-col border-l border-slate-200 pl-6">
              <span className="text-sm font-bold text-slate-900">Jasper Koning</span>
              <span className="text-xs text-slate-500">Sollicitatie Productowner</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className={`text-sm font-bold transition-colors hover:text-black ${activeSection === section.id ? 'text-black border-b-2 border-black pb-1' : 'text-slate-500'}`}
              >
                {section.tag}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-6">
                Interactieve sollicitatie
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] mb-8 tracking-tight">
                De verbindende factor tussen techniek, content en gebruiker
              </h1>
              
              <div className="prose prose-lg prose-slate max-w-none text-slate-700 space-y-6">
                <p className="text-xl leading-relaxed font-medium">
                  Welkom. Ik ben Jasper Koning, eindredacteur bij Brainwash (omroep HUMAN) en daarvoor o.a. werkzaam bij VPRO, PC Magazine en NCRV. Mijn hele carrière beweeg ik me op het snijvlak van techniek, content en coördinatie.
                </p>
                <p className="text-lg leading-relaxed">
                  Op deze pagina laat ik zien hoe mijn achtergrond aansluit op de rol van Product Owner Communicatiekanalen bij SURF.
                </p>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#techniek" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc72c] text-black font-bold hover:bg-[#ffb800] transition-colors">
                  Lees mijn verhaal
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/jasperkoning" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              {/* Decorative background elements inspired by SURF */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#f58220]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0077c8]/10 rounded-full blur-3xl"></div>
              
              <div className="relative rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-none overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://media.licdn.com/dms/image/v2/C4E03AQFLR4DPvrs2SQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516235169483?e=1776902400&v=beta&t=Qc6Fa229YTF_dXOxpJUyM7J8_AxLU2nrrzL3Z9sF0MQ" 
                  alt="Jasper Koning" 
                  className="w-full h-auto object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {sections.map((section, index) => {
            const styles = colorStyles[section.color];
            const isEven = index % 2 === 0;
            
            return (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
                  
                  {/* SURF-style Tag */}
                  <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${styles.tagBg} ${styles.tagText}`}>
                      {section.tag}
                    </span>
                  </div>

                  <div className="mt-12 block">
                    {section.image && (
                      <div className={`mb-6 lg:mb-4 w-full lg:w-5/12 ${!isEven ? 'lg:float-right lg:ml-8' : 'lg:float-left lg:mr-8'}`}>
                        <div className={`overflow-hidden shadow-lg ${!isEven ? 'rounded-tl-[40px] rounded-bl-[40px] rounded-br-[40px] rounded-tr-none' : 'rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] rounded-tl-none'}`}>
                          <img 
                            src={section.image} 
                            alt={section.title} 
                            className="w-full h-auto object-cover aspect-[4/3]"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                    )}
                    
                    <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6 tracking-tight leading-tight">
                      {section.title}
                    </h3>
                    
                    <div className="space-y-5 text-slate-700 leading-relaxed text-lg mb-10">
                      {section.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    
                    <div className="clear-both pt-6 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {section.highlights.map((highlight, i) => (
                          <span 
                            key={i} 
                            className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-bold ${styles.highlightBg} ${styles.highlightText}`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* Footer - SURF Purple Style */}
      <footer className="bg-[#702082] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div 
                className="bg-white inline-flex items-center justify-center px-5 py-3 rounded-full mb-8 cursor-pointer"
                onClick={scrollToTop}
              >
                <img 
                  src="https://www.surf.nl/themes/surf/logo.svg" 
                  alt="SURF" 
                  className="h-6"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Jasper Koning</h2>
              <p className="text-purple-200 mb-8">Sollicitatie Productowner Communicatiekanalen</p>
            </div>
            
            <div className="md:col-span-4">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-4">
                <a href="mailto:kingjay@gmail.com" className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  kingjay@gmail.com
                </a>
                <a href="tel:0652633802" className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  06-52633802
                </a>
                <a href="https://linkedin.com/in/jasperkoning" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-purple-100 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                  linkedin.com/in/jasperkoning
                </a>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col md:items-end justify-between">
              <button 
                onClick={scrollToTop}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors mb-8 md:mb-0"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-200">
            <p>Deze pagina is gebouwd met behulp van AI als onderdeel van mijn sollicitatie.</p>
            <p>April 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
