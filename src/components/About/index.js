import Social from "../Social";

const About = () => {
    return (
        <section id="about" className="padding-global">
            <div className="container">
                <p className="section-subtitle">01.</p>
                <h2 className="section-title">Un développeur passionné et hyper-connecté</h2>
                <p>Bonjour ! Je m'appelle Xuan-Tam Hoang. Diplômé d'un Master spécialisé dans la conception de sites Web et actuellement en formation intégralement à distance chez OpenClassrooms,
                je me spécialise dans la réalisation de <strong>sites vitrines</strong> et <strong>e-commerce</strong>. Fort d'une expérience de deux ans en agence Web, je suis capable de concevoir des <strong>sites ou applications responsive</strong> en respectant les standards du Web.</p>
                <Social/>
            </div>
        </section>
    );
};

export default About;