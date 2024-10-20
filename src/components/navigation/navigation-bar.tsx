'use client';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {IoMdArrowDropdown} from 'react-icons/io';

import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {ModeToggle} from '../theme-toggle';
import {usePathname} from 'next/navigation';

const Links = [
  {title: 'about', href: '/'},
  {title: 'blog', href: '/blog'},
  {title: 'repositories', href: '/repositories'},
  {title: 'cv', href: '/cv'},
];

export default function NavigationBar({
  isOpen = true,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element {
  const pathname = usePathname();
  return (
    <>
      <div
        className='navbar grid grid-cols-2 gap-4 items-center justify-items-center fixed w-full h-auto py-2 justify-center bg-inherit left-0 z-10 border-b-2 border-white-300'
        style={{
          opacity: `${isOpen ? '1' : '0'}`,
          top: ` ${isOpen ? '0' : '-100%'}`,
        }}
      >
        <div>
          <Link href='/' legacyBehavior passHref>
            Mukesh M. Tandale
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {Links.map((link) => {
              const activeStyle =
                link.href === pathname
                  ? 'border-solid border-2 border-white-300'
                  : '';
              return (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${activeStyle}`}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuItem>
              <button className={navigationMenuTriggerStyle()} onClick={toggle}>
                {/* Close icon */}

                <IoMdArrowDropdown />
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
