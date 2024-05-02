'use client';

import { HardSkillContainer, Icons, MainContainer } from './styled';
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

export default function Page() {
  return (
    <MainContainer>
      <HardSkillContainer>
        <h2>Hard Skills</h2>
        <Icons>
          <Icon icon={SiReact} title="React" Class="react" />
          <Icon icon={SiRedux} title="Redux" Class="redux" />
          <Icon icon={SiMongodb} title="MongoDb" Class="mongoDb" />
          <Icon icon={SiMysql} title="MySql" Class="mySql" />
          <Icon icon={SiNodedotjs} title="Node" Class="node" />
          <Icon icon={SiNextdotjs} title="Next" Class="next" />
          <Icon icon={SiSass} title="Sass" Class="sass" />
          <Icon
            icon={SiStyledcomponents}
            title="Styled Components"
            Class="styled-Components"
          />
        </Icons>
      </HardSkillContainer>
    </MainContainer>
  );
}
