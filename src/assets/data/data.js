const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
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
    'Tailwind',
    'Figma',
    'Adobe XD',
    'Adobe Photoshop',
]

const projects = [
    {
        name: "Argent Bank",
        tags: ["HTML", "CSS", "React", "Create-react-app", "React-router", "Redux", "Redux-toolkit", "MongoDB", "Swagger"],
        url: "https://github.com/xuantam-h/ArgentBank-website",
        image: "./project-argentbank.webp",
        summary: "Projet de création d'une application bancaire sous React, gestion des states avec Redux, appel API avec Redux Toolkit, gestion des utilisateurs",
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
        name: "Sophie Bluel",
        tags: ["HTML", "CSS", "JavaScript", "Swagger", "Node.js"],
        url: "https://github.com/xuantam-h/portfolio-sophie-bluel",
        image: "./project-kasa.webp",
        summary: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
        description: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
    },
    {
        name: "Oh my Food !",
        tags: ["HTML", "CSS", "Responsive Web Design", "Animations"],
        url: "https://github.com/xuantam-h/p4-ohmyfood",
        image: "./project-ohmyfood.webp",
        summary: "Projet de création d'un site de livraison de plats en HTML/CSS. Approche mobile-first",
        description: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
    },
    {
        name: "Nina Carducci",
        tags: ["SEO", "Rich Snippet", "WAVE", "Référencement local"],
        url: "https://github.com/xuantam-h/ninacarducci",
        image: "./project-kasa.webp",
        summary: "Optimisation du référencement du site d'une photographe. Amélioration du rapport Lighthouse et réduction du temps de chargement du site",
        description: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
    },
    {
        name: "77events",
        tags: ["React", "React Developer Tools"],
        url: "https://github.com/xuantam-h/portfolio-sophie-bluel",
        image: "./project-kasa.webp",
        summary: "Projet de debug d'application React et création de tests unitaires Jest",
        description: "Projet de debug d'application React",
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
        url: "https://fr.linkedin.com/in/xuan-tam-hoang-6a1810116",
        image: "./LinkedIn_icon.svg",
    },
    {
        name: "X",
        url: "",
        image: "./x-logo.svg",
    },
]

const experiences = [
    {
        company: "Publicore",
        year: "2021-2022",
        location: "Colmar (68)",
        title: "Intégrateur Web",
        description: "J'ai été amené à rejoindre cette agence Web à taille humaine pendant un an. A l'aide du CMS WordPress et du CMS Prima créé sur-mesure, j'ai été chargé de développer, intégrer et gérer la maintenance de sites vitrines et e-commerce. En plus de mes missions d'intégrateur, j'ai également eu l'opportunité de traduire et de localiser des sites des clients de l'anglais vers le français. Je me servais également des outils de PAO (Adobe Photoshop, Adobe InDesign) pour réaliser des brochures et créer des visuels à destination des newsletters.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress", "Drupal", "Bootstrap", "Adobe XD", "Adobe InDesign", "Adobe Photoshop"],
    },
    {
        company: "Cekome",
        year: "2018-2019",
        location: "Colmar (68)",
        title: "Intégrateur Web",
        description: "Premier emploi obtenu dans le milieu du Web après avoir obtenu mon Master CAWEB. Développement, intégration et graphisme de sites sous le CMS WordPress. Création d'identités visuelles (logo, webdesign, charte graphique) pour les entreprises.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress", "Adobe Photoshop", "GIMP"],
    },
    {
        company: "Observatoire Régional du Tourisme d'Alsace",
        year: "2018-2019",
        location: "Colmar (68)",
        title: "Apprenti consultant SEO - Rédacteur Web",
        description: "Apprentissage réalisé dans le cadre de mon Master en tant que rédacteur Web. Mes missions consistaient à promouvoir l'observatoire sur les réseaux sociaux pour les professionnels (B2B) et d'alimenter la rubrique Blog du site. J'ai été amené à concevoir des visuels et des ",
        techs: ["HTML", "CSS", "SEO", "Réseaux sociaux", "Rédaction", "Adobe Photoshop"],
    }
]

export { skills, projects, social, experiences }