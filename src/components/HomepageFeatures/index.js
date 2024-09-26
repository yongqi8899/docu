import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Zu Mir",
    Svg: require("@site/static/img/me.svg").default,
    description: (
      <>
        Ich bin ein leidenschaftlicher Full-Stack-Entwickler, der es sich zur
        Aufgabe gemacht hat, fesselnde Web-Erlebnisse zu schaffen. Mit Expertise
        in JavaScript, TypeScript und Frameworks wie React, Vue und Nuxt
        entwickle ich benutzerfreundliche und ansprechende Oberflächen. Im
        Bereich 3D lasse ich mit Three.js Magie lebendig werden. Für das Backend
        nutze ich leistungsstarke Technologien wie Node.js, Express.js, SQL und
        MongoDB. Als lebenslanger Lernender erkunde ich ständig neue
        Technologien und kreative Ansätze. Mein Fokus liegt auf der
        Frontend-Entwicklung, wo ich elegante und funktionale Lösungen liefere.
        Lass uns zusammenarbeiten, um deine digitalen Visionen mit einer
        positiven und inspirierenden Herangehensweise umzusetzen!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="flex flex-row">
      <div className="text--center ">
        <Svg role="img"  />
      </div>
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
