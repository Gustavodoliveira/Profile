'use client';

import Card from '@/components/Card/Card';
import {
  CardSection,
  ContactsSection,
  HardSkillContainer,
  IconsSection,
  MainContainer,
} from './styled';
import Icon from '@/components/Icon/Icon';
import {
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import Contacts from '@/components/Contacts/Contacts';
import { MdEmail } from 'react-icons/md';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

export default function Page() {
  return (
    <MainContainer>
      <HardSkillContainer>
        <h2>Skills</h2>
        <IconsSection>
          <Icon icon={SiReact} title="React" Class="react" />
          <Icon icon={SiRedux} title="Redux" Class="redux" />
          <Icon icon={SiMongodb} title="MongoDb" Class="mongoDb" />
          <Icon icon={SiMysql} title="MySql" Class="mySql" />
          <Icon icon={SiNodedotjs} title="Node" Class="node" />
          <Icon icon={SiNextdotjs} title="Next" Class="next" />
          <Icon icon={SiSass} title="Sass" Class="sass" />
          <Icon
            icon={TbBrandReactNative}
            title="React nativve"
            Class="react-native"
          />
          <Icon
            icon={SiStyledcomponents}
            title="Styled Components"
            Class="styled-Components"
          />
        </IconsSection>
      </HardSkillContainer>
      <CardSection>
        <h2>Projetos pessoais</h2>
        <div className="card_content">
          <Card />
          <Card />
          <Card />
        </div>
      </CardSection>
      <ContactsSection>
        <Contacts
          Icon={MdEmail}
          href="/"
          text="gustavod.oliveira@outlook.com"
          title="E-mail"
        />
        <Contacts
          Icon={FaInstagram}
          href="/"
          text="gustavod.oliveira@outlook.com"
          title="E-mail"
        />
        <Contacts
          Icon={FaTwitter}
          href="/"
          text="gustavod.oliveira@outlook.com"
          title="E-mail"
        />
      </ContactsSection>
    </MainContainer>
  );
}
