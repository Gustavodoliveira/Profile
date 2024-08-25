import Image from "next/image";
import styles from "./page.module.css";
import Svg from "@/app/assets/Rectangle.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
      <Image src={Svg} alt="gustavo image perfil" />
    </main>
  );
}
