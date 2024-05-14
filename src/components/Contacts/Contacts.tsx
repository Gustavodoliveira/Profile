import React from 'react';
import {
  ContactsContainer,
  ContainerMediaSocialAndImage,
  MediaSocialContainer,
  MyApresentation,
} from './styled';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import img from '../../../public/images/frequency-wave-7776034_1280.jpg';
import Image from 'next/image';

const Contacts = () => {
  return (
    <ContactsContainer>
      <ContainerMediaSocialAndImage>
        <Image
          src={img.src}
          alt="gustavo de oliveira"
          width={200}
          height={200}
          className="image_perfil"
        />
        <MediaSocialContainer>
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </MediaSocialContainer>
      </ContainerMediaSocialAndImage>

      <MyApresentation>
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
          asperiores quaerat, a eius, tempora ipsa placeat quos quasi
          voluptates, explicabo tenetur voluptate ab molestias. Dolore
          temporibus aperiam ullam quam.
        </article>
      </MyApresentation>
    </ContactsContainer>
  );
};

export default Contacts;
