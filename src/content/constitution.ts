// Ygente principles are stored here as structured, typed content rather than
// in the flat `messages/*.json` files because the page renders an ordered
// document. Page chrome still lives in `messages/*.json` under
// `constitutionPage`.

export interface PrinciplesSection {
  /** Stable anchor id, e.g. "principle-i". */
  id: string;
  /** Small label above the title, e.g. "Principle I". */
  label?: string;
  title: string;
  /** Paragraphs of body copy. */
  body: string[];
}

type Locale = 'en' | 'es';

const en: PrinciplesSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    body: [
      'Ygente is a founder-led corporation building a growth network for Hispanic commerce. Ygente owns and operates the platform, protects the brand, sets commercial standards, and enters into contracts with ambassadors, creators, brands, regional partners, vendors, and customers.',
      'These principles are not a legal charter and do not create membership rights, shared ownership, self-governance, or independent authority. Participation in Ygente is governed by Ygente agreements, platform terms, licenses, and policies that apply to each role.',
      'The purpose of these principles is practical: to guide how the founders, executives, team, and partners build Ygente through trust, measurable commerce, and long-term opportunity.',
    ],
  },
  {
    id: 'principle-i',
    label: 'Principle I',
    title: 'Founder-Led Accountability',
    body: [
      'Ygente is led by its founders and executive team. They are responsible for strategy, operating priorities, platform standards, brand protection, financial discipline, legal compliance, and long-term growth.',
      'Leadership is accountable for building a durable network that serves customers, creates opportunity for creators and ambassadors, and helps brands reach Hispanic communities through trusted relationships.',
    ],
  },
  {
    id: 'principle-ii',
    label: 'Principle II',
    title: 'Trust Before Transaction',
    body: [
      'Trusted recommendations are the foundation of Ygente. Every product, campaign, partnership, and incentive should strengthen confidence between buyers, ambassadors, creators, and brands.',
      'Reputation must be earned through honest communication, reliable performance, customer feedback, and consistent behavior. Ygente should reward trust-building activity and protect the network from conduct that damages it.',
    ],
  },
  {
    id: 'principle-iii',
    label: 'Principle III',
    title: 'Commerce That Builds Community',
    body: [
      'Ygente exists to help commerce create broader opportunity. A successful transaction should help the buyer discover something useful, help a brand grow, help an ambassador or creator earn, and help local markets become more active.',
      'Community impact is created through real business execution: better campaigns, stronger local relationships, useful tools, fair incentives, practical training, and disciplined market development.',
    ],
  },
  {
    id: 'principle-iv',
    label: 'Principle IV',
    title: 'Local Knowledge With Ygente Standards',
    body: [
      'Local relationships matter. Regional partners and community operators can help Ygente understand markets, activate ambassadors and creators, support brands, and create culturally relevant campaigns.',
      'Local execution must operate within Ygente standards. Ygente sets the brand rules, platform policies, contract requirements, performance expectations, and escalation paths that keep the network consistent and trustworthy.',
    ],
  },
  {
    id: 'principle-v',
    label: 'Principle V',
    title: 'Clear Agreements',
    body: [
      'Every role in the network should be governed by clear agreements. Ambassadors, creators, brands, and regional partners participate through contracts, platform terms, licenses, policies, and commercial programs appropriate to their role.',
      'Clear agreements protect Ygente, the brand, the participants, and the customers. They also make expectations explicit: who may represent Ygente, what they may do, how compensation works, and what standards must be met.',
    ],
  },
  {
    id: 'principle-vi',
    label: 'Principle VI',
    title: 'Measurable Growth',
    body: [
      'Ygente should grow through measurable outcomes, not vague influence. We will prioritize tools that make recommendations, attribution, campaigns, conversions, payouts, and market performance easier to understand.',
      'AI should support this work by helping with curation, analytics, content, operations, and influence accounting while keeping the human relationship at the center of commerce.',
    ],
  },
  {
    id: 'principle-vii',
    label: 'Principle VII',
    title: 'Long-Term Prosperity',
    body: [
      'Ygente should choose durable growth over short-term extraction. We will be strongest when customers return, creators and ambassadors keep earning, brands see real ROI, and regional partners build repeatable local growth.',
      'A founder-led network can still carry a generational responsibility: to build infrastructure, opportunity, and trust that outlasts any single campaign or launch moment.',
    ],
  },
  {
    id: 'partner-commitment',
    title: 'The Partner Commitment',
    body: [
      'I will strengthen trust before seeking profit.',
      'I will serve customers, creators, ambassadors, and brands with integrity.',
      'I will protect the Ygente brand and platform.',
      'I will help my market grow responsibly.',
      'I will share opportunity and develop future market leaders.',
      'I will honor our culture while embracing innovation.',
      'I will measure success by the prosperity created for others.',
      'I will remember that every transaction represents a human relationship.',
      'I will help build Ygente for future generations.',
    ],
  },
];

const es: PrinciplesSection[] = [
  {
    id: 'overview',
    title: 'Resumen',
    body: [
      'Ygente es una corporación liderada por fundadores que construye una red de crecimiento para el comercio hispano. Ygente posee y opera la plataforma, protege la marca, define estándares comerciales y firma contratos con embajadores, creadores, marcas, socios regionales, proveedores y clientes.',
      'Estos principios no son una carta legal y no crean derechos de membresía, propiedad compartida, autogobierno ni autoridad independiente. La participación en Ygente se rige por acuerdos de Ygente, términos de plataforma, licencias y políticas que correspondan a cada rol.',
      'El propósito de estos principios es práctico: guiar cómo los fundadores, ejecutivos, equipo y socios construyen Ygente mediante confianza, comercio medible y oportunidad de largo plazo.',
    ],
  },
  {
    id: 'principle-i',
    label: 'Principio I',
    title: 'Responsabilidad Liderada por Fundadores',
    body: [
      'Ygente es liderada por sus fundadores y equipo ejecutivo. Ellos son responsables de la estrategia, prioridades operativas, estándares de plataforma, protección de marca, disciplina financiera, cumplimiento legal y crecimiento de largo plazo.',
      'El liderazgo es responsable de construir una red duradera que sirva a los clientes, cree oportunidades para creadores y embajadores, y ayude a las marcas a llegar a comunidades hispanas mediante relaciones confiables.',
    ],
  },
  {
    id: 'principle-ii',
    label: 'Principio II',
    title: 'Confianza Antes que Transacción',
    body: [
      'Las recomendaciones confiables son la base de Ygente. Cada producto, campaña, alianza e incentivo debe fortalecer la confianza entre compradores, embajadores, creadores y marcas.',
      'La reputación debe ganarse mediante comunicación honesta, desempeño confiable, comentarios de clientes y conducta consistente. Ygente debe recompensar la actividad que construye confianza y proteger la red de conductas que la dañen.',
    ],
  },
  {
    id: 'principle-iii',
    label: 'Principio III',
    title: 'Comercio que Construye Comunidad',
    body: [
      'Ygente existe para ayudar a que el comercio cree oportunidad más amplia. Una transacción exitosa debe ayudar al comprador a descubrir algo útil, ayudar a una marca a crecer, ayudar a un embajador o creador a ganar, y ayudar a que los mercados locales sean más activos.',
      'El impacto comunitario se crea mediante ejecución real de negocio: mejores campañas, relaciones locales más fuertes, herramientas útiles, incentivos justos, capacitación práctica y desarrollo disciplinado de mercados.',
    ],
  },
  {
    id: 'principle-iv',
    label: 'Principio IV',
    title: 'Conocimiento Local con Estándares de Ygente',
    body: [
      'Las relaciones locales importan. Los socios regionales y operadores comunitarios pueden ayudar a Ygente a entender mercados, activar embajadores y creadores, apoyar marcas y crear campañas culturalmente relevantes.',
      'La ejecución local debe operar dentro de estándares de Ygente. Ygente define las reglas de marca, políticas de plataforma, requisitos contractuales, expectativas de desempeño y rutas de escalamiento que mantienen la red consistente y confiable.',
    ],
  },
  {
    id: 'principle-v',
    label: 'Principio V',
    title: 'Acuerdos Claros',
    body: [
      'Cada rol en la red debe regirse por acuerdos claros. Embajadores, creadores, marcas y socios regionales participan mediante contratos, términos de plataforma, licencias, políticas y programas comerciales apropiados para su rol.',
      'Los acuerdos claros protegen a Ygente, la marca, los participantes y los clientes. También hacen explícitas las expectativas: quién puede representar a Ygente, qué puede hacer, cómo funciona la compensación y qué estándares deben cumplirse.',
    ],
  },
  {
    id: 'principle-vi',
    label: 'Principio VI',
    title: 'Crecimiento Medible',
    body: [
      'Ygente debe crecer mediante resultados medibles, no influencia vaga. Priorizaremos herramientas que faciliten entender recomendaciones, atribución, campañas, conversiones, pagos y desempeño de mercados.',
      'La IA debe apoyar este trabajo mediante curaduría, analítica, contenido, operaciones y contabilidad de influencia, manteniendo la relación humana en el centro del comercio.',
    ],
  },
  {
    id: 'principle-vii',
    label: 'Principio VII',
    title: 'Prosperidad de Largo Plazo',
    body: [
      'Ygente debe elegir crecimiento duradero sobre extracción de corto plazo. Seremos más fuertes cuando los clientes regresen, los creadores y embajadores sigan ganando, las marcas vean ROI real y los socios regionales construyan crecimiento local repetible.',
      'Una red liderada por fundadores todavía puede cargar una responsabilidad generacional: construir infraestructura, oportunidad y confianza que duren más que cualquier campaña o momento de lanzamiento.',
    ],
  },
  {
    id: 'partner-commitment',
    title: 'El Compromiso del Socio',
    body: [
      'Fortaleceré la confianza antes de buscar la ganancia.',
      'Serviré a clientes, creadores, embajadores y marcas con integridad.',
      'Protegeré la marca y la plataforma Ygente.',
      'Ayudaré a mi mercado a crecer de forma responsable.',
      'Compartiré oportunidad y desarrollaré futuros líderes de mercado.',
      'Honraré nuestra cultura mientras abrazo la innovación.',
      'Mediré el éxito por la prosperidad creada para otros.',
      'Recordaré que cada transacción representa una relación humana.',
      'Ayudaré a construir Ygente para las generaciones futuras.',
    ],
  },
];

export const companyPrinciples: Record<Locale, PrinciplesSection[]> = { en, es };

export function getCompanyPrinciples(locale: string): PrinciplesSection[] {
  return locale === 'es' ? companyPrinciples.es : companyPrinciples.en;
}
