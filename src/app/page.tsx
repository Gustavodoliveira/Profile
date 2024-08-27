import Image from "next/image";
import styles from "./page.module.css";
import Svg from "@/app/assets/Rectangle.svg";
import Button from "@/components/button/Button";
import {
  AiFillFolderOpen,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>Desenvolvedor Full Stack</h1>
      </header>
      <section className={styles.container_profile}>
        <div className={styles.container_profile_aboutMe}>
          <div className={styles.container_profile_aboutMe_image}>
            <Image src={Svg} alt="gustavo image perfil" />
            <div>
              <Link href={"/"}>
                <AiFillInstagram className={styles.instagram} />
              </Link>
              <Link href={"/"}>
                <AiFillMail className={styles.mail} />
              </Link>
            </div>
          </div>
          <div className={styles.container_profile_aboutMe_text}>
            <h2>Sobre min</h2>
            <p>
              Olá eu sou o Gustavo de Oliveira e sou desenvolvedor full stack
              com foco em <i>Node js</i> e no front-end usando <i>Next js</i> e
              também utilizo <i>React Native</i> e estou estudando tecnologia há
              1 ano com alguma experiencia em projetos pessoais
            </p>
          </div>
        </div>
        <div className={styles.container_profile_contacts}>
          <Link
            href={"https://www.linkedin.com/in/gustavo-oliveira-5465782b3/"}
            target="_blank"
          >
            <Button classIcon="linkedin" Icon={AiFillLinkedin}>
              Linkedin
            </Button>
          </Link>
          <Link href={"https://github.com/Gustavodoliveira"} target="_blank">
            <Button classIcon="github" Icon={AiFillGithub}>
              GitHub
            </Button>
          </Link>
          <Link href={"/"}>
            <Button classIcon="curriculo" Icon={AiFillFolderOpen}>
              Curriculo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
