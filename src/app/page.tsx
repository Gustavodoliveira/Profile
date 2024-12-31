import Image from "next/image";
import styles from "./page.module.css";
import img from "../../public/19362653.jpg";
import Btn from "@/components/btn/Btn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "@/components/projects/projects";
import { proj } from "../config/projectsAll";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.main_header}>
        <h2>Desenvolvedor Full Stack</h2>
        <Image
          src={img}
          alt="Desenvolvedor"
          width={350}
          height={300}
          className={styles.image_center}
        />
      </header>
      <section className={styles.main_contacts}>
        <div>
          <Btn
            className="btn_linkedin"
            link=""
            text="Linkedin"
            Icon={FaLinkedin}
            classIcon="icon_linkedin"
          />
          <Btn
            className="btn_github"
            link=""
            text="GitHub"
            Icon={FaGithub}
            classIcon="icon_github"
          />
        </div>
      </section>
      <section className={styles.main_project}>
        <h3>Projetos</h3>
        {proj.map((proj, index) => {
          return (
            <Projects
              title={proj.title}
              imgSrc={proj.image.src}
              technologiesIcon={proj.technologiesIcon}
              features={proj.features}
              url_back_end={proj.url_back_end}
              url_front_end={proj.url_front_end}
              alt="project"
              description={proj.description}
              key={index}
            />
          );
        })}
      </section>
    </main>
  );
}
