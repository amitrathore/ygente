// The Constitution of the Ygente Network Commonwealth — Founding Edition (v1.0).
//
// The full text is stored here as structured, typed content rather than in the
// flat `messages/*.json` files: it is a long, structured document (preamble +
// 23 articles + principles + pledge + epilogue) that reads and renders far more
// cleanly as an ordered list of sections. Page chrome (title, intro, CTAs) still
// lives in `messages/*.json` under `constitutionPage`.

export interface ConstitutionSection {
  /** Stable anchor id, e.g. "article-v". */
  id: string;
  /** Small label above the title, e.g. "Article V". Omitted for non-article sections. */
  label?: string;
  title: string;
  /** Paragraphs of body copy. */
  body: string[];
}

type Locale = 'en' | 'es';

const en: ConstitutionSection[] = [
  {
    id: 'preamble',
    title: 'Preamble',
    body: [
      'We, the founding members of the Ygente Network Commonwealth, establish this Constitution to create a lasting economic institution dedicated to the flourishing of Hispanic communities throughout the United States, Latin America, and wherever our people live.',
      'We believe commerce is more than the exchange of goods. Commerce creates relationships. Relationships create trust. Trust creates prosperity. Prosperity strengthens families. Strong families strengthen communities. Strong communities strengthen nations.',
      'Technology should amplify these human relationships—not replace them.',
      'We reject economic systems that extract wealth from communities without reinvesting in them. Instead, we embrace a model in which prosperity circulates, opportunity expands, leadership is earned through service, and every generation leaves the next stronger than it found it.',
      'The Ygente Network Commonwealth exists not simply to build a successful company, but to build enduring economic infrastructure for our people. This Constitution establishes the principles by which that future shall be built.',
    ],
  },
  {
    id: 'article-i',
    label: 'Article I',
    title: 'The Commonwealth',
    body: [
      'Ygente is a Network Commonwealth. A Network Commonwealth is a federation of self-governing communities united by shared principles, shared infrastructure, shared identity, and shared prosperity.',
      'It is neither a traditional corporation, a franchise system, a cooperative, nor a loose association of independent organizations. It is a living network composed of many autonomous communities working toward one common purpose.',
      'Each community strengthens the whole. The whole strengthens each community. Membership is voluntary. Stewardship is earned. Prosperity is shared.',
    ],
  },
  {
    id: 'article-ii',
    label: 'Article II',
    title: 'Mission',
    body: [
      'The mission of the Commonwealth is to cultivate the most trusted economic network serving Hispanic communities throughout the world.',
      'We pursue this mission by empowering local entrepreneurs, strengthening Hispanic-owned businesses, supporting creators and ambassadors, enabling trusted commerce, investing in local communities, preserving Hispanic culture, and expanding opportunity across generations.',
      'Success shall not be measured solely by profit, but by the prosperity created for our communities.',
    ],
  },
  {
    id: 'article-iii',
    label: 'Article III',
    title: 'The Platform and the Commonwealth',
    body: [
      'The Platform and the Commonwealth are distinct.',
      'The Ygente Platform consists of software, marketplace infrastructure, payment systems, identity systems, analytics, communication tools, and governance technology. The Platform exists to serve the Commonwealth.',
      'The Commonwealth consists of people, families, businesses, creators, ambassadors, institutions, stewards, councils, and communities.',
      'Technology serves people. People do not serve technology.',
    ],
  },
  {
    id: 'article-iv',
    label: 'Article IV',
    title: 'The Commons',
    body: [
      'The Commonwealth maintains shared assets known collectively as The Commons: the Ygente name, trademarks, visual identity, software, governance framework, educational resources, data standards, operating protocols, reputation systems, and marketplace infrastructure.',
      'The Commons belong to the Commonwealth as a whole. No Territory owns the Commons. Every Territory benefits from them. Every Territory contributes to them. The Commons shall be protected for future generations.',
    ],
  },
  {
    id: 'article-v',
    label: 'Article V',
    title: 'Stewardship',
    body: [
      'Communities are never owned. Communities are stewarded. A Steward accepts responsibility for cultivating the long-term prosperity of a Territory.',
      'Stewardship is founded upon service, integrity, competence, trust, and accountability. Authority exists because responsibility exists.',
      'No Steward possesses permanent authority. Stewardship must continually be earned through contribution. Failure to uphold the Covenant may result in the transfer of stewardship.',
    ],
  },
  {
    id: 'article-vi',
    label: 'Article VI',
    title: 'The Commonwealth Covenant',
    body: [
      'Every member of the Commonwealth accepts four enduring commitments. We shall: Grow the Community. Protect the Brand. Share Prosperity. Steward the Future.',
      'These obligations are reciprocal. The Commonwealth supports every member. Every member strengthens the Commonwealth.',
    ],
  },
  {
    id: 'article-vii',
    label: 'Article VII',
    title: 'The Principle of Stewardship',
    body: [
      'The purpose of leadership is not control. The purpose of leadership is cultivation.',
      'Every Steward shall create opportunity, develop future leaders, encourage entrepreneurship, strengthen trust, preserve culture, and mentor successors.',
      'Leadership exists to multiply leadership.',
    ],
  },
  {
    id: 'article-viii',
    label: 'Article VIII',
    title: 'Territories',
    body: [
      'The Commonwealth is organized through Territories. A Territory represents a living economic community.',
      'Territories may include countries, states, provinces, departments, counties, municipalities, cities, neighborhoods, ZIP Codes, and recognized diaspora communities. Territories may evolve as communities evolve.',
      'Every Territory exists to create local prosperity while strengthening the Commonwealth.',
    ],
  },
  {
    id: 'article-ix',
    label: 'Article IX',
    title: 'The Territorial Network',
    body: [
      'The Commonwealth grows through a recursive network of Territories: Commonwealth → Country → State or Province → Region or County → City → Neighborhood → ZIP Code → Community.',
      'Each Territory belongs to a parent Territory. Each parent exists to support—not dominate—its children.',
    ],
  },
  {
    id: 'article-x',
    label: 'Article X',
    title: 'Subsidiarity',
    body: [
      'The Commonwealth adopts the Principle of Subsidiarity. Decisions should always be made by the smallest capable community. Higher levels intervene only when coordination across multiple Territories is necessary.',
      'This preserves local knowledge, local accountability, local innovation, and local identity. Centralization shall always be the exception. Never the default.',
    ],
  },
  {
    id: 'article-xi',
    label: 'Article XI',
    title: 'The Flow of Prosperity',
    body: [
      'Economic value should circulate throughout the Commonwealth. Every transaction strengthens multiple participants simultaneously: buyers, businesses, ambassadors, creators, local Territories, regional Territories, national Territories, and the Commonwealth.',
      'Prosperity is designed to circulate. Not concentrate. Every purchase becomes an investment in community.',
    ],
  },
  {
    id: 'article-xii',
    label: 'Article XII',
    title: 'The Royalty of the Commons',
    body: [
      'The Commonwealth maintains one unified brand and one unified platform. All Territories contribute a Commonwealth Royalty.',
      'This royalty supports technology, cybersecurity, innovation, legal protection, international expansion, research, education, and brand stewardship.',
      'The Royalty is not a tax. It is each Territory’s investment in the Commons that benefit everyone.',
    ],
  },
  {
    id: 'article-xiii',
    label: 'Article XIII',
    title: 'Community Treasuries',
    body: [
      'Every Territory maintains a Community Treasury. Treasuries are invested locally.',
      'Examples include entrepreneur grants, scholarships, creator sponsorships, business education, local marketing, cultural celebrations, emergency assistance, and community events.',
      'The purpose of every Treasury is long-term prosperity. Not short-term extraction.',
    ],
  },
  {
    id: 'article-xiv',
    label: 'Article XIV',
    title: 'Trust Capital',
    body: [
      'The Commonwealth recognizes Trust as its highest form of capital. Trust is earned through honesty, reliability, generosity, competence, mentorship, and service.',
      'Trust creates opportunity. Opportunity creates prosperity. Financial wealth without trust does not create resilient communities.',
      'Trust Capital shall influence leadership opportunities, stewardship eligibility, and reputation within the network.',
    ],
  },
  {
    id: 'article-xv',
    label: 'Article XV',
    title: 'Representation',
    body: [
      'Representation begins locally: Community → Neighborhood → ZIP Code → City → County → State → Country → Commonwealth Council.',
      'Representation flows upward. Support flows downward. Knowledge flows in every direction.',
    ],
  },
  {
    id: 'article-xvi',
    label: 'Article XVI',
    title: 'The Commonwealth Council',
    body: [
      'The Commonwealth Council serves as guardian—not ruler—of the Commonwealth.',
      'Its responsibilities include protecting the Constitution, safeguarding the Commons, preserving the mission, ensuring fairness, coordinating international initiatives, resolving constitutional disputes, and maintaining long-term continuity.',
      'The Council exists to enable local prosperity. Never to replace local leadership.',
    ],
  },
  {
    id: 'article-xvii',
    label: 'Article XVII',
    title: 'Membership',
    body: [
      'The Commonwealth welcomes all who embrace its mission. Participants may include consumers, businesses, ambassadors, creators, educators, nonprofit organizations, students, investors, civic leaders, and cultural organizations.',
      'Every participant contributes differently. Every participant possesses inherent dignity. Every participant strengthens the network.',
    ],
  },
  {
    id: 'article-xviii',
    label: 'Article XVIII',
    title: 'The Economy of Reciprocity',
    body: [
      'The Commonwealth rejects extractive economics. Instead, it embraces reciprocity. Those who receive support should, when able, support others.',
      'Knowledge should be shared. Success should be multiplied. Communities should become stronger because successful members reinvest in those who follow.',
    ],
  },
  {
    id: 'article-xix',
    label: 'Article XIX',
    title: 'Innovation',
    body: [
      'Innovation is a public responsibility within the Commonwealth. Technology shall be developed to increase trust, transparency, opportunity, participation, inclusion, and efficiency.',
      'Innovation shall never undermine the dignity or agency of the communities it serves.',
    ],
  },
  {
    id: 'article-xx',
    label: 'Article XX',
    title: 'Culture',
    body: [
      'Culture is an economic asset. Language, traditions, history, creativity, food, music, literature, and family are sources of strength.',
      'The Commonwealth exists not merely to preserve Hispanic culture, but to help it flourish through commerce, education, and collaboration.',
    ],
  },
  {
    id: 'article-xxi',
    label: 'Article XXI',
    title: 'Generational Stewardship',
    body: [
      'The Commonwealth measures success across generations. Every Steward accepts responsibility for preparing future Stewards.',
      'Leadership is successful only when it becomes unnecessary because new leaders have emerged. We inherit the work of previous generations. We prepare the foundation for those yet to come.',
    ],
  },
  {
    id: 'article-xxii',
    label: 'Article XXII',
    title: 'The Circle of Prosperity',
    body: [
      'Every act of commerce should strengthen the buyer, the seller, the ambassador, the creator, the neighborhood, the Territory, the Commonwealth, and future generations.',
      'Prosperity should move in circles. Not pipelines.',
    ],
  },
  {
    id: 'article-xxiii',
    label: 'Article XXIII',
    title: 'Amendments',
    body: [
      'This Constitution is a living covenant. It may evolve through the wisdom and experience of the Commonwealth.',
      'Any amendment shall remain faithful to the Founding Principles: Stewardship over Ownership, Reciprocity over Extraction, Subsidiarity over Centralization, Trust before Transaction, Community before Institution, and Long-term Prosperity over Short-term Gain.',
      'No amendment may contradict these principles.',
    ],
  },
  {
    id: 'founding-principles',
    title: 'The Founding Principles',
    body: [
      'Stewardship over Ownership — We care for communities; we do not possess them.',
      'Reciprocity over Extraction — Value should circulate back into the communities that create it.',
      'Subsidiarity over Centralization — Decisions belong as close as possible to the people affected.',
      'Trust before Transaction — Relationships create sustainable economies.',
      'Community before Institution — The organization exists to serve people, not the reverse.',
      'Prosperity through Participation — Everyone who contributes should have the opportunity to benefit.',
      'Leadership through Service — Authority is earned by empowering others.',
      'Innovation with Purpose — Technology exists to strengthen human flourishing.',
      'One Commonwealth, Many Communities — Unity does not require uniformity.',
      'Seven-Generation Thinking — Every important decision should consider its impact on those who will inherit the Commonwealth long after today’s leaders are gone.',
    ],
  },
  {
    id: 'founding-pledge',
    title: 'The Founding Pledge',
    body: [
      'I will strengthen trust before seeking profit.',
      'I will leave my community stronger than I found it.',
      'I will serve before I lead.',
      'I will protect the Commons entrusted to us.',
      'I will share opportunity.',
      'I will cultivate future leaders.',
      'I will honor our culture while embracing innovation.',
      'I will measure success by the prosperity created for others.',
      'I will remember that every transaction represents a human relationship.',
      'I will help build a Commonwealth worthy of future generations.',
      'For our people. By our people. Together. Forever.',
    ],
  },
  {
    id: 'epilogue',
    title: 'Epilogue: The Long Vision',
    body: [
      'This Constitution is intended to endure beyond any individual founder, executive, or generation. It envisions Ygente not as a company that owns communities, but as a permanent institution that enables them.',
      'The platform may evolve, technologies will change, and markets will expand, but the Commonwealth’s purpose remains constant: to strengthen the economic, cultural, and social fabric of Hispanic communities through trust, stewardship, and shared prosperity.',
      'If successful, the Ygente Network Commonwealth will be measured not only by its revenues or valuation, but by the number of thriving local economies it helps create, the entrepreneurs it empowers, the creators it elevates, the businesses it grows, and the families whose opportunities expand because they chose to build together rather than alone.',
    ],
  },
];

const es: ConstitutionSection[] = [
  {
    id: 'preamble',
    title: 'Preámbulo',
    body: [
      'Nosotros, los miembros fundadores del Commonwealth en Red de Ygente, establecemos esta Constitución para crear una institución económica duradera, dedicada al florecimiento de las comunidades hispanas en los Estados Unidos, América Latina y dondequiera que viva nuestra gente.',
      'Creemos que el comercio es más que el intercambio de bienes. El comercio crea relaciones. Las relaciones crean confianza. La confianza crea prosperidad. La prosperidad fortalece a las familias. Las familias fuertes fortalecen a las comunidades. Las comunidades fuertes fortalecen a las naciones.',
      'La tecnología debe amplificar estas relaciones humanas—no reemplazarlas.',
      'Rechazamos los sistemas económicos que extraen riqueza de las comunidades sin reinvertir en ellas. En su lugar, abrazamos un modelo en el que la prosperidad circula, la oportunidad se expande, el liderazgo se gana mediante el servicio, y cada generación deja a la siguiente más fuerte de lo que la encontró.',
      'El Commonwealth en Red de Ygente existe no solo para construir una empresa exitosa, sino para construir infraestructura económica duradera para nuestra gente. Esta Constitución establece los principios sobre los cuales se construirá ese futuro.',
    ],
  },
  {
    id: 'article-i',
    label: 'Artículo I',
    title: 'El Commonwealth',
    body: [
      'Ygente es un Commonwealth en Red. Un Commonwealth en Red es una federación de comunidades autogobernadas, unidas por principios compartidos, infraestructura compartida, identidad compartida y prosperidad compartida.',
      'No es ni una corporación tradicional, ni un sistema de franquicias, ni una cooperativa, ni una asociación suelta de organizaciones independientes. Es una red viva compuesta por muchas comunidades autónomas que trabajan hacia un mismo propósito común.',
      'Cada comunidad fortalece al todo. El todo fortalece a cada comunidad. La membresía es voluntaria. El stewardship se gana. La prosperidad se comparte.',
    ],
  },
  {
    id: 'article-ii',
    label: 'Artículo II',
    title: 'Misión',
    body: [
      'La misión del Commonwealth es cultivar la red económica de mayor confianza al servicio de las comunidades hispanas de todo el mundo.',
      'Perseguimos esta misión empoderando a los emprendedores locales, fortaleciendo los negocios de propiedad hispana, apoyando a creadores y embajadores, habilitando el comercio de confianza, invirtiendo en las comunidades locales, preservando la cultura hispana y expandiendo la oportunidad a través de las generaciones.',
      'El éxito no se medirá únicamente por la ganancia, sino por la prosperidad creada para nuestras comunidades.',
    ],
  },
  {
    id: 'article-iii',
    label: 'Artículo III',
    title: 'La Plataforma y el Commonwealth',
    body: [
      'La Plataforma y el Commonwealth son distintos.',
      'La Plataforma Ygente consiste en software, infraestructura de marketplace, sistemas de pago, sistemas de identidad, analítica, herramientas de comunicación y tecnología de gobernanza. La Plataforma existe para servir al Commonwealth.',
      'El Commonwealth consiste en personas, familias, negocios, creadores, embajadores, instituciones, stewards, consejos y comunidades.',
      'La tecnología sirve a las personas. Las personas no sirven a la tecnología.',
    ],
  },
  {
    id: 'article-iv',
    label: 'Artículo IV',
    title: 'Los Bienes Comunes',
    body: [
      'El Commonwealth mantiene activos compartidos conocidos colectivamente como los Bienes Comunes: el nombre Ygente, las marcas registradas, la identidad visual, el software, el marco de gobernanza, los recursos educativos, los estándares de datos, los protocolos operativos, los sistemas de reputación y la infraestructura del marketplace.',
      'Los Bienes Comunes pertenecen al Commonwealth en su conjunto. Ningún Territorio es dueño de los Bienes Comunes. Todo Territorio se beneficia de ellos. Todo Territorio contribuye a ellos. Los Bienes Comunes serán protegidos para las generaciones futuras.',
    ],
  },
  {
    id: 'article-v',
    label: 'Artículo V',
    title: 'Stewardship',
    body: [
      'Las comunidades nunca se poseen. Las comunidades se cultivan mediante el stewardship. Un Steward acepta la responsabilidad de cultivar la prosperidad a largo plazo de un Territorio.',
      'El stewardship se funda en el servicio, la integridad, la competencia, la confianza y la responsabilidad. La autoridad existe porque existe la responsabilidad.',
      'Ningún Steward posee autoridad permanente. El stewardship debe ganarse continuamente mediante la contribución. No honrar el Pacto puede resultar en la transferencia del stewardship.',
    ],
  },
  {
    id: 'article-vi',
    label: 'Artículo VI',
    title: 'El Pacto del Commonwealth',
    body: [
      'Cada miembro del Commonwealth acepta cuatro compromisos perdurables. Nos comprometemos a: Hacer Crecer la Comunidad. Proteger la Marca. Compartir la Prosperidad. Cuidar el Futuro.',
      'Estas obligaciones son recíprocas. El Commonwealth apoya a cada miembro. Cada miembro fortalece al Commonwealth.',
    ],
  },
  {
    id: 'article-vii',
    label: 'Artículo VII',
    title: 'El Principio del Stewardship',
    body: [
      'El propósito del liderazgo no es el control. El propósito del liderazgo es el cultivo.',
      'Cada Steward creará oportunidad, desarrollará futuros líderes, fomentará el emprendimiento, fortalecerá la confianza, preservará la cultura y guiará a sus sucesores.',
      'El liderazgo existe para multiplicar el liderazgo.',
    ],
  },
  {
    id: 'article-viii',
    label: 'Artículo VIII',
    title: 'Territorios',
    body: [
      'El Commonwealth se organiza mediante Territorios. Un Territorio representa una comunidad económica viva.',
      'Los Territorios pueden incluir países, estados, provincias, departamentos, condados, municipios, ciudades, barrios, códigos postales y comunidades diaspóricas reconocidas. Los Territorios pueden evolucionar a medida que evolucionan las comunidades.',
      'Todo Territorio existe para crear prosperidad local mientras fortalece al Commonwealth.',
    ],
  },
  {
    id: 'article-ix',
    label: 'Artículo IX',
    title: 'La Red Territorial',
    body: [
      'El Commonwealth crece mediante una red recursiva de Territorios: Commonwealth → País → Estado o Provincia → Región o Condado → Ciudad → Barrio → Código Postal → Comunidad.',
      'Cada Territorio pertenece a un Territorio mayor. Cada Territorio mayor existe para apoyar—no dominar—a los que contiene.',
    ],
  },
  {
    id: 'article-x',
    label: 'Artículo X',
    title: 'Subsidiariedad',
    body: [
      'El Commonwealth adopta el Principio de Subsidiariedad. Las decisiones deben tomarse siempre por la comunidad capaz más pequeña. Los niveles superiores intervienen solo cuando es necesaria la coordinación entre múltiples Territorios.',
      'Esto preserva el conocimiento local, la responsabilidad local, la innovación local y la identidad local. La centralización será siempre la excepción. Nunca la norma.',
    ],
  },
  {
    id: 'article-xi',
    label: 'Artículo XI',
    title: 'El Flujo de la Prosperidad',
    body: [
      'El valor económico debe circular por todo el Commonwealth. Cada transacción fortalece a múltiples participantes de manera simultánea: compradores, negocios, embajadores, creadores, Territorios locales, Territorios regionales, Territorios nacionales y el Commonwealth.',
      'La prosperidad está diseñada para circular. No para concentrarse. Cada compra se convierte en una inversión en la comunidad.',
    ],
  },
  {
    id: 'article-xii',
    label: 'Artículo XII',
    title: 'La Regalía de los Bienes Comunes',
    body: [
      'El Commonwealth mantiene una marca unificada y una plataforma unificada. Todos los Territorios contribuyen con una Regalía del Commonwealth.',
      'Esta regalía sostiene la tecnología, la ciberseguridad, la innovación, la protección legal, la expansión internacional, la investigación, la educación y el cuidado de la marca.',
      'La Regalía no es un impuesto. Es la inversión de cada Territorio en los Bienes Comunes que benefician a todos.',
    ],
  },
  {
    id: 'article-xiii',
    label: 'Artículo XIII',
    title: 'Tesorerías Comunitarias',
    body: [
      'Todo Territorio mantiene una Tesorería Comunitaria. Las tesorerías se invierten localmente.',
      'Los ejemplos incluyen becas para emprendedores, becas de estudio, patrocinios a creadores, educación empresarial, marketing local, celebraciones culturales, asistencia de emergencia y eventos comunitarios.',
      'El propósito de toda Tesorería es la prosperidad a largo plazo. No la extracción a corto plazo.',
    ],
  },
  {
    id: 'article-xiv',
    label: 'Artículo XIV',
    title: 'Trust Capital',
    body: [
      'El Commonwealth reconoce la Confianza como su forma más alta de capital. La confianza se gana con honestidad, fiabilidad, generosidad, competencia, mentoría y servicio.',
      'La confianza crea oportunidad. La oportunidad crea prosperidad. La riqueza financiera sin confianza no crea comunidades resilientes.',
      'El Trust Capital influirá en las oportunidades de liderazgo, la elegibilidad para el stewardship y la reputación dentro de la red.',
    ],
  },
  {
    id: 'article-xv',
    label: 'Artículo XV',
    title: 'Representación',
    body: [
      'La representación comienza a nivel local: Comunidad → Barrio → Código Postal → Ciudad → Condado → Estado → País → Consejo del Commonwealth.',
      'La representación fluye hacia arriba. El apoyo fluye hacia abajo. El conocimiento fluye en todas las direcciones.',
    ],
  },
  {
    id: 'article-xvi',
    label: 'Artículo XVI',
    title: 'El Consejo del Commonwealth',
    body: [
      'El Consejo del Commonwealth sirve como guardián—no como gobernante—del Commonwealth.',
      'Sus responsabilidades incluyen proteger la Constitución, salvaguardar los Bienes Comunes, preservar la misión, garantizar la justicia, coordinar iniciativas internacionales, resolver disputas constitucionales y mantener la continuidad a largo plazo.',
      'El Consejo existe para habilitar la prosperidad local. Nunca para reemplazar el liderazgo local.',
    ],
  },
  {
    id: 'article-xvii',
    label: 'Artículo XVII',
    title: 'Membresía',
    body: [
      'El Commonwealth da la bienvenida a todos los que abrazan su misión. Los participantes pueden incluir consumidores, negocios, embajadores, creadores, educadores, organizaciones sin fines de lucro, estudiantes, inversionistas, líderes cívicos y organizaciones culturales.',
      'Cada participante contribuye de manera distinta. Cada participante posee dignidad inherente. Cada participante fortalece la red.',
    ],
  },
  {
    id: 'article-xviii',
    label: 'Artículo XVIII',
    title: 'La Economía de la Reciprocidad',
    body: [
      'El Commonwealth rechaza la economía extractiva. En su lugar, abraza la reciprocidad. Quienes reciben apoyo deben, cuando puedan, apoyar a otros.',
      'El conocimiento debe compartirse. El éxito debe multiplicarse. Las comunidades deben fortalecerse porque los miembros exitosos reinvierten en quienes vienen detrás.',
    ],
  },
  {
    id: 'article-xix',
    label: 'Artículo XIX',
    title: 'Innovación',
    body: [
      'La innovación es una responsabilidad pública dentro del Commonwealth. La tecnología se desarrollará para aumentar la confianza, la transparencia, la oportunidad, la participación, la inclusión y la eficiencia.',
      'La innovación nunca debe socavar la dignidad o la agencia de las comunidades a las que sirve.',
    ],
  },
  {
    id: 'article-xx',
    label: 'Artículo XX',
    title: 'Cultura',
    body: [
      'La cultura es un activo económico. El idioma, las tradiciones, la historia, la creatividad, la comida, la música, la literatura y la familia son fuentes de fortaleza.',
      'El Commonwealth existe no solo para preservar la cultura hispana, sino para ayudarla a florecer a través del comercio, la educación y la colaboración.',
    ],
  },
  {
    id: 'article-xxi',
    label: 'Artículo XXI',
    title: 'Stewardship Generacional',
    body: [
      'El Commonwealth mide el éxito a través de las generaciones. Cada Steward acepta la responsabilidad de preparar a los futuros Stewards.',
      'El liderazgo solo tiene éxito cuando se vuelve innecesario porque han surgido nuevos líderes. Heredamos el trabajo de las generaciones anteriores. Preparamos los cimientos para las que aún han de venir.',
    ],
  },
  {
    id: 'article-xxii',
    label: 'Artículo XXII',
    title: 'El Círculo de la Prosperidad',
    body: [
      'Cada acto de comercio debe fortalecer al comprador, al vendedor, al embajador, al creador, al barrio, al Territorio, al Commonwealth y a las generaciones futuras.',
      'La prosperidad debe moverse en círculos. No en tuberías.',
    ],
  },
  {
    id: 'article-xxiii',
    label: 'Artículo XXIII',
    title: 'Enmiendas',
    body: [
      'Esta Constitución es un pacto vivo. Puede evolucionar mediante la sabiduría y la experiencia del Commonwealth.',
      'Toda enmienda deberá permanecer fiel a los Principios Fundacionales: Stewardship sobre Propiedad, Reciprocidad sobre Extracción, Subsidiariedad sobre Centralización, Confianza antes que Transacción, Comunidad antes que Institución, y Prosperidad a Largo Plazo sobre Ganancia Inmediata.',
      'Ninguna enmienda puede contradecir estos principios.',
    ],
  },
  {
    id: 'founding-principles',
    title: 'Los Principios Fundacionales',
    body: [
      'Stewardship sobre Propiedad — Cuidamos a las comunidades; no las poseemos.',
      'Reciprocidad sobre Extracción — El valor debe volver a circular en las comunidades que lo crean.',
      'Subsidiariedad sobre Centralización — Las decisiones pertenecen lo más cerca posible de las personas afectadas.',
      'Confianza antes que Transacción — Las relaciones crean economías sostenibles.',
      'Comunidad antes que Institución — La organización existe para servir a las personas, no al revés.',
      'Prosperidad mediante la Participación — Todo el que contribuye debe tener la oportunidad de beneficiarse.',
      'Liderazgo mediante el Servicio — La autoridad se gana empoderando a otros.',
      'Innovación con Propósito — La tecnología existe para fortalecer el florecimiento humano.',
      'Un Commonwealth, Muchas Comunidades — La unidad no requiere uniformidad.',
      'Pensamiento a Siete Generaciones — Toda decisión importante debe considerar su impacto en quienes heredarán el Commonwealth mucho después de que los líderes de hoy ya no estén.',
    ],
  },
  {
    id: 'founding-pledge',
    title: 'El Juramento Fundacional',
    body: [
      'Fortaleceré la confianza antes de buscar la ganancia.',
      'Dejaré mi comunidad más fuerte de lo que la encontré.',
      'Serviré antes de liderar.',
      'Protegeré los Bienes Comunes que se nos confían.',
      'Compartiré la oportunidad.',
      'Cultivaré a los futuros líderes.',
      'Honraré nuestra cultura mientras abrazo la innovación.',
      'Mediré el éxito por la prosperidad creada para otros.',
      'Recordaré que cada transacción representa una relación humana.',
      'Ayudaré a construir un Commonwealth digno de las generaciones futuras.',
      'Por nuestra gente. Con nuestra gente. Juntos. Para siempre.',
    ],
  },
  {
    id: 'epilogue',
    title: 'Epílogo: La Visión a Largo Plazo',
    body: [
      'Esta Constitución está destinada a perdurar más allá de cualquier fundador, ejecutivo o generación. Concibe a Ygente no como una empresa que posee comunidades, sino como una institución permanente que las habilita.',
      'La plataforma podrá evolucionar, las tecnologías cambiarán y los mercados se expandirán, pero el propósito del Commonwealth permanece constante: fortalecer el tejido económico, cultural y social de las comunidades hispanas a través de la confianza, el stewardship y la prosperidad compartida.',
      'Si tiene éxito, el Commonwealth en Red de Ygente se medirá no solo por sus ingresos o su valuación, sino por la cantidad de economías locales prósperas que ayude a crear, los emprendedores que empodere, los creadores que eleve, los negocios que haga crecer y las familias cuyas oportunidades se expandan porque eligieron construir juntas en vez de solas.',
    ],
  },
];

export const constitution: Record<Locale, ConstitutionSection[]> = { en, es };

export function getConstitution(locale: string): ConstitutionSection[] {
  return locale === 'es' ? constitution.es : constitution.en;
}
