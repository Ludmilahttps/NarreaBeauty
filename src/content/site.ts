import { images } from "./images";
import type { Lang } from "@/lib/whatsapp";

type L = Record<Lang, string>;

export const contact = {
  brand: "Nárrea Rezende",
  brandSuffix: "Beauty",
  phoneDisplay: "+351 935 719 728",
  address: "9 Rue Étienne Marcel",
  city: "38000 Grenoble, France",
  instagram: "narrea.rezendebeauty",
  instagramUrl: "https://www.instagram.com/narrea.rezendebeauty/",
  mapEmbed:
    "https://www.google.com/maps?q=9+Rue+Etienne+Marcel,+38000+Grenoble,+France&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=9+Rue+Etienne+Marcel,+38000+Grenoble,+France",
};

export type CategoryId = "offres" | "mains" | "pieds" | "sourcils" | "epilation";

export const categories: { id: CategoryId; label: L; image: string }[] = [
  { id: "offres", label: { fr: "Offres", pt: "Promoções" }, image: images.nailsFrench },
  { id: "mains", label: { fr: "Mains", pt: "Mãos" }, image: images.nailsBurgundy },
  { id: "pieds", label: { fr: "Pieds", pt: "Pés" }, image: images.pedicure },
  { id: "sourcils", label: { fr: "Sourcils", pt: "Sobrancelhas" }, image: images.brows1 },
  { id: "epilation", label: { fr: "Épilation", pt: "Depilação" }, image: images.epilation },
];

export type Service = {
  id: string;
  category: CategoryId;
  name: L;
  desc: L;
  price: number;
  oldPrice?: number;
  /** Free upper-lip wax included */
  gift?: boolean;
};

export const services: Service[] = [
  // Offres
  {
    id: "promo-semi",
    category: "offres",
    name: { fr: "Manucure et pédicure semi-permanentes", pt: "Mãos e pés semipermanentes" },
    desc: {
      fr: "Manucure complète + vernis semi-permanent / Pédicure complète + vernis semi-permanent.",
      pt: "Manicure completa + esmaltação semipermanente / Pedicure completa + esmaltação semipermanente.",
    },
    price: 60,
    oldPrice: 70,
  },
  {
    id: "promo-trad",
    category: "offres",
    name: {
      fr: "Soins complets traditionnels des mains et des pieds",
      pt: "Mãos e pés tradicionais completos",
    },
    desc: {
      fr: "Manucure et pédicure complètes avec vernis à ongles traditionnel.",
      pt: "Manicure e pedicure completas com esmalte tradicional.",
    },
    price: 50,
    oldPrice: 60,
  },
  // Mains
  {
    id: "gel-complete",
    category: "mains",
    name: { fr: "Application complète en gel", pt: "Alongamento completo em gel" },
    desc: {
      fr: "Extensions d'ongles en gel (Soft Gel ou F1) + manucure combinée.",
      pt: "Alongamento de unhas em gel (Soft Gel ou F1) + manicure combinada.",
    },
    price: 60,
  },
  {
    id: "gel-renfort",
    category: "mains",
    name: { fr: "Gel sur ongles — Renforcement", pt: "Banho de gel — Blindagem" },
    desc: {
      fr: "Renfort pour protéger les ongles naturels + vernis (traditionnel ou semi-permanent).",
      pt: "Reforço para proteger as unhas naturais + esmalte (tradicional ou semipermanente).",
    },
    price: 35,
  },
  {
    id: "manu-semi",
    category: "mains",
    name: { fr: "Manucure semi-permanente", pt: "Manicure semipermanente" },
    desc: {
      fr: "Manucure combinée + vernis semi-permanent.",
      pt: "Manicure combinada + esmaltação semipermanente.",
    },
    price: 30,
  },
  {
    id: "manu-trad",
    category: "mains",
    name: { fr: "Manucure traditionnelle", pt: "Manicure tradicional" },
    desc: {
      fr: "Manucure combinée + vernis traditionnel.",
      pt: "Manicure combinada + esmalte tradicional.",
    },
    price: 25,
  },
  // Pieds
  {
    id: "pedi-semi",
    category: "pieds",
    name: { fr: "Pédicure complète semi-permanente", pt: "Pedicure completa semipermanente" },
    desc: {
      fr: "Soin des cuticules, limage, exfoliation et hydratation + vernis semi-permanent.",
      pt: "Cutilagem, lixamento, esfoliação e hidratação + esmaltação semipermanente.",
    },
    price: 40,
  },
  {
    id: "pedi-trad",
    category: "pieds",
    name: { fr: "Pédicure complète traditionnelle", pt: "Pedicure completa tradicional" },
    desc: {
      fr: "Soin des cuticules, limage, exfoliation et hydratation + vernis traditionnel.",
      pt: "Cutilagem, lixamento, esfoliação e hidratação + esmalte tradicional.",
    },
    price: 35,
  },
  // Sourcils
  {
    id: "brow-lamination",
    category: "sourcils",
    name: { fr: "Brow lamination", pt: "Brow lamination" },
    desc: {
      fr: "Réalignement des poils pour plus de volume et un regard plus fourni.",
      pt: "Realinhamento dos fios para mais volume e um olhar mais preenchido.",
    },
    price: 40,
    oldPrice: 50,
    gift: true,
  },
  {
    id: "brow-henne",
    category: "sourcils",
    name: { fr: "Dessin des sourcils + henné", pt: "Design de sobrancelhas + henna" },
    desc: {
      fr: "Restructuration sur mesure et application de henné pour un regard intensifié.",
      pt: "Design personalizado e aplicação de henna para um olhar marcado.",
    },
    price: 25,
    gift: true,
  },
  {
    id: "brow-design",
    category: "sourcils",
    name: { fr: "Dessin des sourcils", pt: "Design de sobrancelhas" },
    desc: {
      fr: "Une ligne pensée pour la forme de votre visage.",
      pt: "Um desenho pensado para o formato do seu rosto.",
    },
    price: 15,
    gift: true,
  },
  // Épilation
  {
    id: "epil-visage",
    category: "epilation",
    name: { fr: "Épilation du visage", pt: "Depilação do rosto" },
    desc: {
      fr: "Épilation à la cire des poils du visage et de la lèvre supérieure.",
      pt: "Depilação com cera dos pelos do rosto e do buço.",
    },
    price: 15,
  },
  {
    id: "epil-aisselles",
    category: "epilation",
    name: { fr: "Épilation des aisselles", pt: "Depilação das axilas" },
    desc: {
      fr: "Épilation complète des aisselles à la cire.",
      pt: "Depilação completa das axilas com cera.",
    },
    price: 15,
  },
];

export type GalleryItem = {
  src: string;
  alt: L;
  kind: "ongles" | "sourcils";
  ratio: string;
};

export const gallery: GalleryItem[] = [
  {
    src: images.nailsFrench,
    kind: "ongles",
    ratio: "1245 / 1440",
    alt: {
      fr: "French manucure avec marguerites peintes à la main",
      pt: "Francesinha com margaridas pintadas à mão",
    },
  },
  {
    src: images.brows1,
    kind: "sourcils",
    ratio: "1086 / 1366",
    alt: { fr: "Sourcils avant et après lamination", pt: "Sobrancelhas antes e depois da laminação" },
  },
  {
    src: images.nailsBurgundy,
    kind: "ongles",
    ratio: "1440 / 1920",
    alt: { fr: "Ongles courts vernis bordeaux", pt: "Unhas curtas esmaltadas em bordô" },
  },
  {
    src: images.nailsLavender,
    kind: "ongles",
    ratio: "1 / 1",
    alt: {
      fr: "Ongles amande lavande avec fleurs séchées",
      pt: "Unhas amendoadas lavanda com flores secas",
    },
  },
  {
    src: images.brows2,
    kind: "sourcils",
    ratio: "1 / 1",
    alt: { fr: "Restructuration des sourcils avant et après", pt: "Design de sobrancelhas antes e depois" },
  },
  {
    src: images.nailsHearts,
    kind: "ongles",
    ratio: "1 / 1",
    alt: {
      fr: "Ongles blanc lacté avec petits cœurs rouges",
      pt: "Unhas branco leitoso com pequenos corações vermelhos",
    },
  },
];

export const dictionary = {
  fr: {
    nav: {
      about: "L'atelier",
      services: "Prestations",
      gallery: "Galerie",
      experience: "Expérience",
      contact: "Contact",
      book: "Réserver",
      menu: "Menu",
      close: "Fermer",
    },
    hero: {
      eyebrow: "Ongles · Sourcils · Cils — Grenoble",
      line1: "Des mains qui",
      line2: "racontent",
      accent: "votre",
      line3: "histoire.",
      sub: "Des soins délicats, réalisés sans hâte, dans un atelier intimiste au cœur de Grenoble.",
      cta: "Choisir un soin",
      secondary: "Voir la galerie",
      seal: "SUR RENDEZ-VOUS · GRENOBLE · NÁRREA REZENDE · ",
      scroll: "Défiler",
    },
    marquee: ["Manucure", "Gel", "Pédicure", "Brow lamination", "Henné", "Épilation", "Semi-permanent"],
    about: {
      number: "01",
      eyebrow: "L'atelier",
      title1: "Un rendez-vous",
      title2: "rien que pour vous.",
      p1: "Derrière chaque soin, il y a une écoute. Je prends le temps de comprendre votre style, votre quotidien et ce que vous attendez de vos mains, de vos pieds ou de votre regard.",
      p2: "L'atelier accueille une cliente à la fois, sur rendez-vous. Un moment calme, des gestes précis et des finitions soignées : c'est ma façon de vous dire que vous comptez.",
      quote: "La rareté chez l'autre ne peut pas déterminer votre propre valeur.",
      pillars: [
        {
          title: "Hygiène rigoureuse",
          text: "Matériel nettoyé et désinfecté, accessoires individuels, poste préparé avant chaque cliente.",
        },
        {
          title: "Une cliente à la fois",
          text: "Un moment privé, sans attente ni précipitation, entièrement consacré à vous.",
        },
        {
          title: "Finitions précises",
          text: "Un travail minutieux, pensé pour durer et pour vous ressembler.",
        },
      ],
    },
    services: {
      number: "02",
      eyebrow: "Prestations & tarifs",
      title1: "Choisissez",
      title2: "votre soin.",
      intro: "Touchez une prestation : WhatsApp s'ouvre avec un message prêt à envoyer. Je vous réponds pour confirmer le créneau.",
      all: "Tout",
      book: "Réserver",
      gift: "Épilation de la lèvre supérieure offerte",
      from: "€",
    },
    gallery: {
      number: "03",
      eyebrow: "Galerie",
      title1: "Le détail",
      title2: "fait la différence.",
      all: "Tout",
      nails: "Ongles",
      brows: "Sourcils",
      beforeAfter: "Avant · Après",
      beforeAfterTitle: "Sourcils restructurés",
      beforeAfterHint: "Faites glisser pour comparer",
      before: "Avant",
      after: "Après",
      instagram: "Plus de réalisations sur Instagram",
      open: "Agrandir la photo",
      prev: "Photo précédente",
      next: "Photo suivante",
      close: "Fermer",
    },
    experience: {
      number: "04",
      eyebrow: "L'expérience",
      title1: "Chaque étape,",
      title2: "avec soin.",
      steps: [
        { title: "L'échange", text: "On parle de vos envies, de la forme, de la couleur et de votre rythme de vie." },
        { title: "La préparation", text: "Hygiène des mains ou des pieds, soin des cuticules, mise en forme." },
        { title: "La réalisation", text: "Des gestes précis, sans précipitation, avec des produits choisis avec soin." },
        { title: "La finition", text: "Chaque détail est vérifié avant que vous ne repartiez." },
        { title: "Les conseils", text: "Je vous explique comment prolonger le résultat à la maison." },
      ],
      howTitle: "Réserver en 3 gestes",
      how: [
        "Choisissez votre prestation sur le site.",
        "WhatsApp s'ouvre avec votre message prêt.",
        "Je vous confirme le jour et l'heure.",
      ],
    },
    faq: {
      number: "05",
      eyebrow: "Questions fréquentes",
      title1: "Bon",
      title2: "à savoir.",
      items: [
        {
          q: "Comment prendre rendez-vous ?",
          a: "Choisissez une prestation sur le site : WhatsApp s'ouvre avec un message déjà rédigé. Il suffit de l'envoyer, je vous réponds pour fixer le jour et l'heure.",
        },
        {
          q: "Où se trouve l'atelier ?",
          a: "Au 9 Rue Étienne Marcel, 38000 Grenoble. L'atelier reçoit uniquement sur rendez-vous.",
        },
        {
          q: "Combien de temps tient un vernis semi-permanent ?",
          a: "En général deux à trois semaines, selon la nature de vos ongles et votre quotidien. Je vous donne des conseils pour le prolonger.",
        },
        {
          q: "Puis-je venir avec une photo d'inspiration ?",
          a: "Avec plaisir. Envoyez-la sur WhatsApp au moment de la réservation, nous l'adapterons ensemble à vos ongles.",
        },
        {
          q: "Que se passe-t-il si j'ai un empêchement ?",
          a: "Prévenez-moi dès que possible sur WhatsApp, idéalement 24 h à l'avance, afin que le créneau puisse profiter à une autre cliente.",
        },
        {
          q: "Le cadeau sourcils, c'est quoi ?",
          a: "Pour toute prestation sourcils, l'épilation de la lèvre supérieure vous est offerte.",
        },
      ],
    },
    contact: {
      number: "06",
      eyebrow: "Contact",
      title1: "Au plaisir",
      title2: "de vous recevoir.",
      addressLabel: "Adresse",
      hoursLabel: "Horaires",
      hours: "Uniquement sur rendez-vous",
      phoneLabel: "WhatsApp",
      directions: "Itinéraire",
      whatsapp: "Écrire sur WhatsApp",
      mapTitle: "Plan d'accès à l'atelier",
    },
    footer: {
      madeIn: "Fait avec soin à Grenoble",
      rights: "Tous droits réservés.",
      tagline: "Ongles · Sourcils · Cils",
    },
    floating: "Réserver",
    langLabel: "Langue",
  },
  pt: {
    nav: {
      about: "O ateliê",
      services: "Serviços",
      gallery: "Galeria",
      experience: "Experiência",
      contact: "Contato",
      book: "Agendar",
      menu: "Menu",
      close: "Fechar",
    },
    hero: {
      eyebrow: "Unhas · Sobrancelhas · Cílios — Grenoble",
      line1: "Mãos que",
      line2: "contam a",
      accent: "sua",
      line3: "história.",
      sub: "Cuidados delicados, feitos sem pressa, num ateliê intimista no coração de Grenoble.",
      cta: "Escolher um serviço",
      secondary: "Ver a galeria",
      seal: "COM HORA MARCADA · GRENOBLE · NÁRREA REZENDE · ",
      scroll: "Rolar",
    },
    marquee: ["Manicure", "Gel", "Pedicure", "Brow lamination", "Henna", "Depilação", "Semipermanente"],
    about: {
      number: "01",
      eyebrow: "O ateliê",
      title1: "Um horário",
      title2: "só para você.",
      p1: "Por trás de cada atendimento existe escuta. Eu reservo o tempo necessário para entender o seu estilo, a sua rotina e o que você espera das suas mãos, dos seus pés ou do seu olhar.",
      p2: "O ateliê recebe uma cliente por vez, com hora marcada. Um momento tranquilo, gestos precisos e acabamento cuidadoso: é a minha forma de dizer que você importa.",
      quote: "A escassez do outro não pode determinar o seu autovalor.",
      pillars: [
        {
          title: "Higiene rigorosa",
          text: "Materiais limpos e desinfetados, acessórios individuais, bancada preparada para cada cliente.",
        },
        {
          title: "Uma cliente por vez",
          text: "Um momento reservado, sem espera e sem pressa, totalmente dedicado a você.",
        },
        {
          title: "Acabamento preciso",
          text: "Um trabalho minucioso, pensado para durar e para ter a sua cara.",
        },
      ],
    },
    services: {
      number: "02",
      eyebrow: "Serviços & valores",
      title1: "Escolha",
      title2: "o seu cuidado.",
      intro: "Toque em um serviço: o WhatsApp abre com uma mensagem pronta para enviar. Eu respondo para confirmar o horário.",
      all: "Todos",
      book: "Agendar",
      gift: "Depilação do buço de presente",
      from: "€",
    },
    gallery: {
      number: "03",
      eyebrow: "Galeria",
      title1: "O detalhe",
      title2: "faz a diferença.",
      all: "Todos",
      nails: "Unhas",
      brows: "Sobrancelhas",
      beforeAfter: "Antes · Depois",
      beforeAfterTitle: "Sobrancelhas redesenhadas",
      beforeAfterHint: "Arraste para comparar",
      before: "Antes",
      after: "Depois",
      instagram: "Mais trabalhos no Instagram",
      open: "Ampliar a foto",
      prev: "Foto anterior",
      next: "Próxima foto",
      close: "Fechar",
    },
    experience: {
      number: "04",
      eyebrow: "A experiência",
      title1: "Cada etapa,",
      title2: "com cuidado.",
      steps: [
        { title: "A conversa", text: "Falamos sobre o que você deseja: formato, cor e a sua rotina." },
        { title: "O preparo", text: "Higienização das mãos ou dos pés, cutilagem e modelagem." },
        { title: "A execução", text: "Gestos precisos, sem pressa, com produtos escolhidos com carinho." },
        { title: "O acabamento", text: "Cada detalhe é conferido antes de você ir embora." },
        { title: "Os cuidados", text: "Eu explico como prolongar o resultado em casa." },
      ],
      howTitle: "Agende em 3 passos",
      how: [
        "Escolha o seu serviço no site.",
        "O WhatsApp abre com a mensagem pronta.",
        "Eu confirmo o dia e o horário.",
      ],
    },
    faq: {
      number: "05",
      eyebrow: "Perguntas frequentes",
      title1: "Bom",
      title2: "saber.",
      items: [
        {
          q: "Como faço para agendar?",
          a: "Escolha um serviço no site: o WhatsApp abre com uma mensagem já escrita. É só enviar que eu respondo para combinar o dia e o horário.",
        },
        {
          q: "Onde fica o ateliê?",
          a: "Na 9 Rue Étienne Marcel, 38000 Grenoble. O atendimento é somente com hora marcada.",
        },
        {
          q: "Quanto tempo dura a esmaltação semipermanente?",
          a: "Em geral de duas a três semanas, dependendo das suas unhas e da sua rotina. Eu passo dicas para fazer durar mais.",
        },
        {
          q: "Posso levar uma foto de referência?",
          a: "Claro! Envie pelo WhatsApp na hora de agendar e adaptamos juntas às suas unhas.",
        },
        {
          q: "E se eu tiver um imprevisto?",
          a: "Me avise o quanto antes pelo WhatsApp, de preferência com 24 h de antecedência, para que o horário possa ser oferecido a outra cliente.",
        },
        {
          q: "Qual é o presente nas sobrancelhas?",
          a: "Em qualquer serviço de sobrancelhas, a depilação do buço é por minha conta.",
        },
      ],
    },
    contact: {
      number: "06",
      eyebrow: "Contato",
      title1: "Será um prazer",
      title2: "receber você.",
      addressLabel: "Endereço",
      hoursLabel: "Horários",
      hours: "Somente com hora marcada",
      phoneLabel: "WhatsApp",
      directions: "Como chegar",
      whatsapp: "Falar no WhatsApp",
      mapTitle: "Mapa de acesso ao ateliê",
    },
    footer: {
      madeIn: "Feito com carinho em Grenoble",
      rights: "Todos os direitos reservados.",
      tagline: "Unhas · Sobrancelhas · Cílios",
    },
    floating: "Agendar",
    langLabel: "Idioma",
  },
};

export type Dictionary = (typeof dictionary)["fr"];
