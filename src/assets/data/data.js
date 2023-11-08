const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'Git',
    'React',
    'Create-React-App',
    'Redux',
    'Redux Toolkit',
    'SASS',
    'Bootstrap',
    'Tailwind',
    'MongoDB',
    'Node.js',
    'Swagger',
]

const projects = [
    {
        name: "Argent Bank",
        tags: ["HTML", "CSS", "React", "Create-react-app", "React-router", "Redux", "Redux-toolkit", "MongoDB", "Swagger"],
        url: "https://github.com/xuantam-h/ArgentBank-website",
        image: "./project-argentbank.webp",
        summary: "Projet d'une application bancaire sous React, gestion des states avec Redux, appel API avec RTK",
        description: "Création d'une application bancaire avec Create React App (CRA). La gestion des states se fait avec Redux. Authentification des utilisateurs avec token (JWT). Appel API avec RTK et création d'endpoints au niveau du Swagger pour gérer les transactions bancaires.",
    },
    {
        name: "Kasa",
        tags: ["HTML", "CSS", "React", "React-router"],
        url: "https://github.com/xuantam-h/kasa-react",
        image: "./project-kasa.webp",
        summary: "Projet d'un site d'agence immobilière utilisant React. Gestion des routes avec React-router",
        description: "",
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
        summary: "Projet de création d'un site de livraison de plats en HTML/CSS. Approche mobile-first.",
        description: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
    },
    {
        name: "Nina Carducci",
        tags: ["SEO", "Rich Snippet", "WAVE", "Référencement local"],
        url: "https://github.com/xuantam-h/ninacarducci",
        image: "./project-kasa.webp",
        summary: "Optimisation du référencement du site d'une photographe. Amélioration du rapport Lighthouse et réduction du temps de chargement du site.",
        description: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
    },
    {
        name: "Sophie Bluel",
        tags: ["HTML", "CSS", "JavaScript", "Swagger", "Node.js"],
        url: "https://github.com/xuantam-h/portfolio-sophie-bluel",
        image: "./project-kasa.webp",
        summary: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
        description: "Projet de création d'une page administration. Appel API pour ajouter, supprimer des travaux de l'architecte",
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

export { skills, projects, social }