const frontSkills = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'PHP',
    'Sass',
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
    {
        name: "Kasa",
        tags: ["HTML", "CSS", "React", "React-router"],
        url: "https://github.com/xuantam-h/kasa-react",
        image: "./project-kasa.webp",
        summary: "Projet d'un site d'agence immobilière utilisant React. Intégration fidèle des maquettes. Gestion des routes avec React-router",
        description: "Projet d'un site d'agence immobilière utilisant React. Intégration fidèle des maquettes. Gestion des routes avec React-router.",
    },
    {
        name: "77events",
        tags: ["React", "React Developer Tools", "Jest", "React Testing Library"],
        url: "https://github.com/xuantam-h/77events",
        image: "./project-77events.webp",
        summary: "Projet de debug d'application React et création de tests unitaires et fonctionnels avec Jest et React Testing Library",
        description: "Projet de debug d'application React d'une agence évènementielle. Utilisation de React Developer Tools. Création de tests unitaires et d'intégrations sous Jest et React Testing Library.",
    },
    {
        name: "Sophie Bluel",
        tags: ["HTML", "CSS", "JavaScript", "Swagger", "Node.js"],
        url: "https://github.com/xuantam-h/portfolio-sophie-bluel",
        image: "./project-sophie.webp",
        summary: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
        description: "Projet de création d'une page administration en JavaScript. Appels API pour l'authentification utilisateur utilisant la méthode JWT, ajouter ou supprimer des travaux de l'architecte à travers une modale accessible lorsque l'utilisateur est authentifié.",
    },
    {
        name: "Oh my Food !",
        tags: ["HTML", "CSS", "Responsive Web Design", "Animations"],
        url: "https://github.com/xuantam-h/p4-ohmyfood",
        image: "./project-ohmyfood.webp",
        summary: "Projet d'intégration d'un site de livraison de plats en HTML/CSS à partir d'une maquette Figma. Approche mobile-first et création d'animations uniques (loader)",
        description: "Projet d'intégration d'un site de livraison de plats en HTML/CSS à partir d'une maquette Figma. Approche mobile-first et création d'animations uniques (loader)",
    },
    {
        name: "Nina Carducci",
        tags: ["SEO", "Rich Snippet", "WAVE", "Référencement local", "Schema.org", "Minification"],
        url: "https://github.com/xuantam-h/ninacarducci",
        image: "./project-nina-carducci.webp",
        summary: "Optimisation du référencement du site d'une photographe. Amélioration du rapport Lighthouse et réduction du temps de chargement du site.",
        description: "Optimisation du référencement du site d'une photographe. Amélioration du rapport Lighthouse et réduction du temps de chargement du site (Accessibilité, taille et poids des images, ). Ajout du référencement local et microdonnées avec Schema.org. Ajouter les metas pour les réseaux sociaux pour contrôler l'affichage des posts partagés. Minification des fichiers JS et CSS pour améliorer les performances.",
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