import React from 'react';
import { ContactsContainer } from './styled';
import { IconType } from 'react-icons';
import Link from 'next/link';

interface ContactsProps {
  Icon: IconType;
  text: string;
  Class?: string;
  href: string;
  title: string;
}

const Contacts = (props: ContactsProps) => {
  return (
    <ContactsContainer className={props.Class}>
      <props.Icon />
      <Link href={props.href} target="_blank">
        {props.text}
      </Link>
    </ContactsContainer>
  );
};

export default Contacts;
