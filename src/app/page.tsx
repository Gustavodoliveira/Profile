import Image from "next/image";
import styles from "./page.module.css";
import img from "../../public/19362653.jpg";
import Btn from "@/components/btn/Btn";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.main_header}>
        <h1>Desenvolvedor Full Stack</h1>
        <Image
          src={img}
          alt="Desenvolvedor"
          width={350}
          height={300}
          className={styles.image_center}
        />
      </header>
      <section className={styles.main_contacts}>
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
      </section>
    </main>
  );
}
