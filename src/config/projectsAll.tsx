import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import imgCadastro from "../../public/cadastro.jpg";
import { StaticImageData } from "next/image";

export type features = {
  title: string;
  description: string[];
};

export type iconClass = {
  icon: IconType;
  classIcon: string;
};

export type projects = {
  title: string;
  image: StaticImageData;
  technologiesIcon: iconClass[];
  description: string;
  features: string[];
  url_back_end: string;
  url_front_end: string;
  url_project_deploy?: string;
};

const proj1: projects = {
  title: "Cadastro",
  image: imgCadastro,
  technologiesIcon: [
    {
      icon: FaReact,
      classIcon: "icon_react",
    },
    {
      icon: SiSpring,
      classIcon: "icon_springBoot",
    },
  ],
  description:
    "O aplicativo é uma ferramenta simples e intuitiva para gerenciar o cadastro de pessoas e seus respectivos departamentos dentro de uma organização. Ele é projetado para empresas, instituições ou projetos que precisam de uma solução eficiente para organizar e acessar informações de equipe.",
  features: [
    "Insira dados pessoais como nome completo, e-mail, telefone, e cargo.",
    "Campos personalizados para atender necessidades específicas da organização.",
  ],
  url_back_end: "https://github.com/Gustavodoliveira/Cadastros",
  url_front_end: "https://github.com/Gustavodoliveira/Cadastros-App-Mobile",
};

export const proj: projects[] = [proj1];
