'use client';
import {useState} from 'react';
import NavigationBar from './navigation-bar';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavigationBar toggle={toggle} isOpen={true} />
    </>
  );
}
