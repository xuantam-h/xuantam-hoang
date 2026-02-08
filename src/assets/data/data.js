const frontSkills = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'PHP',
    'SASS',
    /*
    'Git',
    'React',
    'Redux',
    'Redux Toolkit',
    'MongoDB',
    'Node.js',
    'Swagger',
    'Jest',
    'WordPress',
    'Drupal',
    'SASS',
    'Bootstrap',
    'Tailwind CSS',
    'Framer Motion',
    'Figma',
    'Adobe XD',
    'Adobe Photoshop',*/
]

const frameworksSkills = [
    'React',
    'Tailwind CSS',
    'Bootstrap',
    'Redux',
]

const toolsSkills = [
    'Github',
    'Git',
    'Figma',
    'Adobe XD',
]

const projects = [
    {
        name: "Agence K4",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress", "ACF Pro", "Bootstrap", "Adobe XD"],
        url: "https://www.agencek4.fr/",
        image: "./project-agencek4.webp",
        summary: "Projet de création d'un CV inspiré par une page produit IKEA. HTML/CSS/Tailwind CSS",
        description: "Intégration d'un CV entièrement en HTML/CSS/Tailwind CSS inspiré d'une page produit IKEA",
    },
    {
        name: "Beausite Immobilier",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress", "Cron", "Google Maps API", "ACF Pro", "Bootstrap", "Adobe XD"],
        url: "https://www.beausite-immobilier.com/",
        image: "./project-beausite.webp",
        summary: "Projet de création d'un CV inspiré par une page produit IKEA. HTML/CSS/Tailwind CSS",
        description: "Intégration d'un CV entièrement en HTML/CSS/Tailwind CSS inspiré d'une page produit IKEA",
    },
    {
        name: "Elite Sport performance",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress", "ACF Pro", "Bootstrap", "Adobe XD"],
        url: "https://elitesportperformance.fr/operation-coach-sportif/",
        image: "./project-elite.webp",
        summary: "Projet de création d'un CV inspiré par une page produit IKEA. HTML/CSS/Tailwind CSS",
        description: "Intégration d'un CV entièrement en HTML/CSS/Tailwind CSS inspiré d'une page produit IKEA",
    },
    {
        name: "Ritoni",
        tags: ["HTML", "CSS", "JS", "PHP", "WordPress", "ACF Pro", "Bootstrap", "Adobe XD"],
        url: "/",
        image: "./project-ritoni.webp",
        summary: "Projet de création d'un CV inspiré par une page produit IKEA. HTML/CSS/Tailwind CSS",
        description: "Intégration d'un CV entièrement en HTML/CSS/Tailwind CSS inspiré d'une page produit IKEA",
    },
    {
        name: "Portfolio Ikea",
        tags: ["HTML", "CSS", "Tailwind CSS"],
        url: "https://github.com/xuantam-h/ikea-resume",
        image: "./project-ikea.webp",
        summary: "Projet de création d'un CV inspiré par une page produit IKEA. HTML/CSS/Tailwind CSS",
        description: "Intégration d'un CV entièrement en HTML/CSS/Tailwind CSS inspiré d'une page produit IKEA",
    },
    {
        name: "Argent Bank",
        tags: ["HTML", "CSS", "React", "Create-react-app", "React-router", "Redux", "Redux-toolkit", "MongoDB", "Swagger"],
        url: "https://github.com/xuantam-h/ArgentBank-website",
        image: "./project-argentbank.webp",
        summary: "Projet de création d'une application bancaire sous React, gestion des states avec Redux, appels API avec Redux Toolkit, gestion des utilisateurs et dashboard",
        description: "Création d'une application bancaire avec Create React App (CRA). La gestion des states se fait avec Redux. Authentification des utilisateurs avec token (JWT) et gestion du profil. Appel API avec RTK et création d'endpoints au niveau du Swagger pour gérer les transactions bancaires.",
    },
]

const social = [
    {
        name: "Github",
        url: "https://github.com/xuantam-h",
        image: "./github-mark-white.svg",
    },
    {
        name: "LinkedIn",
        url: "https://fr.linkedin.com/in/xuantam-hoang",
        image: "./LinkedIn_icon.svg",
    },
]

const experiences = [
    {
        company: "Banque Nationale du Canada (BNC)",
        year: "2025-11/2025",
        location: "Montréal (QC)",
        title: "Développeur Web - Intégrateur Web",
        description: "J'ai été amené à rejoindre cette agence Web à taille humaine pendant un an. A l'aide du CMS WordPress et du CMS Prima créé sur-mesure, j'ai été chargé de développer, intégrer et gérer la maintenance de sites vitrines et e-commerce. En plus de mes missions d'intégrateur, j'ai également eu l'opportunité de traduire et de localiser des sites des clients de l'anglais vers le français. Je me servais également des outils de PAO (Adobe Photoshop, Adobe InDesign) pour réaliser des brochures et créer des visuels à destination des newsletters.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "Adobe Experience Manager (AEM)", "Adobe XD", "Figma"],
        tasks: ["Intégration et maintenance du site sous Adobe Experience Manager (AEM)", "Développement et maintenance d’interfaces web responsives et accessibles", "Optimisation des performances et compatibilité multi-navigateurs"],
    },
    {
        company: "Agence K4",
        year: "2024-03/2025",
        location: "Strasbourg (67)",
        title: "Développeur Web - Intégrateur Web",
        description: "J'ai été amené à rejoindre cette agence Web à taille humaine pendant un an. A l'aide du CMS WordPress et du CMS Prima créé sur-mesure, j'ai été chargé de développer, intégrer et gérer la maintenance de sites vitrines et e-commerce. En plus de mes missions d'intégrateur, j'ai également eu l'opportunité de traduire et de localiser des sites des clients de l'anglais vers le français. Je me servais également des outils de PAO (Adobe Photoshop, Adobe InDesign) pour réaliser des brochures et créer des visuels à destination des newsletters.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "Twig", "MySQL", "WordPress", "Drupal", "Bootstrap", "Adobe XD", "Figma", "Adobe Photoshop"],
        tasks: ["Intégration et maintenance de sites vitrine et e-commerce sous WordPress, Drupal et Prestashop", "Création de thèmes WP sur-mesure from scratch", "Traitement de tickets client et support technique mensuel", "Intégration de maquettes réalisées sous Figma et Adobe XD", "Optimisation SEO et performances des sites", "Participation au chantier R&D et veille technologique active", "Versionning des projets avec Git", " Intégration d’infolettres avec le framework de mail responsive MJML"],
    },
    {
        company: "Publicore",
        year: "2021-2022",
        location: "Colmar (68)",
        title: "Intégrateur Web",
        description: "J'ai été amené à rejoindre cette agence Web à taille humaine pendant un an. A l'aide du CMS WordPress et du CMS Prima créé sur-mesure, j'ai été chargé de développer, intégrer et gérer la maintenance de sites vitrines et e-commerce. En plus de mes missions d'intégrateur, j'ai également eu l'opportunité de traduire et de localiser des sites des clients de l'anglais vers le français. Je me servais également des outils de PAO (Adobe Photoshop, Adobe InDesign) pour réaliser des brochures et créer des visuels à destination des newsletters.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "Twig", "MySQL", "WordPress", "Drupal", "Bootstrap", "Adobe XD", "Adobe InDesign", "Adobe Photoshop"],
        tasks: ["Intégration et maintenance de sites vitrine et e-commerce sous WordPress, Joomla! et Prima", "Création d’un thème enfant sous WordPress", "Intégration de maquettes réalisées sous Figma et Adobe XD", "Intégration de pages de contenu sous le plugin Visual Composer", "Intégration et mise à jour de mails transactionnels", "Participation au R&D et veille technologique", "Versionning des projets avec Git", "Réaliser des brochures et infographies avec Adobe InDesign"],
    },
    {
        company: "Cekome",
        year: "2018-2019",
        location: "Colmar (68)",
        title: "Intégrateur Web",
        description: "Premier emploi obtenu dans le milieu du Web après avoir obtenu mon Master CAWEB. Développement, intégration et graphisme de sites sous le CMS WordPress. Création d'identités visuelles (logo, webdesign, charte graphique) pour les entreprises.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress", "Adobe Photoshop", "GIMP"],
        tasks: ["Intégration et maintenance de sites vitrine sous WordPress", "Création d’identités visuelles, charte graphique et logos"],
    },
    {
        company: "Observatoire Régional du Tourisme d'Alsace",
        year: "2018-2019",
        location: "Colmar (68)",
        title: "Apprenti consultant SEO - Rédacteur Web",
        description: "Apprentissage réalisé dans le cadre de mon Master en tant que rédacteur Web. Mes missions consistaient à promouvoir l'observatoire sur les réseaux sociaux pour les professionnels (B2B) et d'alimenter la rubrique Blog du site. J'ai été amené à concevoir des visuels et des infographies à destination des professionnels du tourisme.",
        techs: ["HTML", "CSS", "SEO", "Réseaux sociaux", "Rédaction", "Adobe Photoshop"],
        tasks: ["Alimentation du blog en rédigeant des articles de veille à destination des professionnels du tourisme (B2B)", "Gestion des réseaux sociaux de l’Observatoire du Tourisme", "Analyse des performances SEO du site web (Analytics, Search console, SEMrush)", "Optimisation des balises méta (titres, descriptions) pour améliorer la visibilité sur les moteurs de recherche", "Référencement local et microdonnées avec Schema.org"],
    }
]

export { frontSkills, frameworksSkills, toolsSkills, projects, social, experiences }