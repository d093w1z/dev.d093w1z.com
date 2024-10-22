'use client';
import Link from 'next/link';
import {cn} from '@/lib/utils';
import {IoMdMenu} from 'react-icons/io';
import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {ModeToggle} from '../theme-toggle';
import {usePathname} from 'next/navigation';

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

const Links = [
  {title: 'about', href: '/'},
  {title: 'blog', href: '/blog'},
  {title: 'repositories', href: '/repositories'},
  {title: 'cv', href: '/cv'},
];

// export function NavigationBar3(): JSX.Element {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = React.useState(true);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div
//         className={`navbar grid grid-cols-2 gap-4 items-center justify-items-center fixed w-full h-auto py-2 justify-center bg-inherit left-0 z-10 border-b-2 border-white-300 transition-all duration-300 ${
//           isOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-100%]'
//         }`}
//       >
//         <div>
//           <Link href='/' legacyBehavior passHref>
//             Mukesh M. Tandale
//           </Link>
//         </div>
//         <div className={isOpen ? '' : 'hidden'}>
//           <NavigationMenu>
//             <NavigationMenuList>
//               {Links.map((link) => {
//                 const activeStyle =
//                   link.href === pathname
//                     ? 'border-solid border-2 border-white-300'
//                     : '';
//                 return (
//                   <NavigationMenuItem key={link.href}>
//                     <Link href={link.href} legacyBehavior passHref>
//                       <NavigationMenuLink
//                         className={`${navigationMenuTriggerStyle()} ${activeStyle}`}
//                       >
//                         {link.title}
//                       </NavigationMenuLink>
//                     </Link>
//                   </NavigationMenuItem>
//                 );
//               })}
//               <NavigationMenuItem>
//                 <ModeToggle />
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//         <div className={isOpen ? 'hidden' : ''}>
//           <Sheet>
//             <SheetTrigger>
//               <button
//                 className={navigationMenuTriggerStyle()}
//                 onClick={toggleNavbar}
//               >
//                 {/* Close icon */}
//                 <IoMdClose />
//               </button>
//             </SheetTrigger>

//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle>Are you absolutely sure?</SheetTitle>
//                 <SheetDescription>
//                   This action cannot be undone. This will permanently delete
//                   your account and remove your data from our servers.
//                 </SheetDescription>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </>
//   );
// }

export default function NavigationBar(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='px-4 fixed w-full bg-inherit z-10 border-b-2 border-white-300'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
            legacyBehavior
          >
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Mukesh M. Tandale
            </span>
          </Link>

          <div
            data-collapse-toggle='navbar-default'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <Sheet>
              <SheetTrigger>
                <div
                  className='text-2xl md:hidden'
                  onClick={toggleNavbar}
                  aria-label='Toggle navigation'
                >
                  <IoMdMenu />
                </div>
              </SheetTrigger>

              {/* Toggle the menu visibility */}
              <div
                className={`${isOpen ? '' : 'hidden'} md:flex md:items-center`}
              >
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                      {/* Navigation container */}
                      <div className='w-full pt-10 flex justify-center items-center'>
                        <NavigationMenu>
                          {/* Navigation elements always in column */}
                          <NavigationMenuList className='flex flex-col gap-4'>
                            {Links.map((link) => {
                              const activeStyle =
                                link.href === pathname
                                  ? 'border-b-2 border-white-300'
                                  : '';
                              return (
                                <NavigationMenuItem key={link.href}>
                                  <Link
                                    href={link.href}
                                    legacyBehavior
                                    passHref
                                  >
                                    <NavigationMenuLink
                                      className={`${navigationMenuTriggerStyle()} ${activeStyle}`}
                                    >
                                      {link.title}
                                    </NavigationMenuLink>
                                  </Link>
                                </NavigationMenuItem>
                              );
                            })}
                          </NavigationMenuList>
                        </NavigationMenu>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                  {/* Center-aligned footer */}
                  <SheetFooter className='items-center mt-6'>
                    <ModeToggle />
                  </SheetFooter>
                </SheetContent>
              </div>
            </Sheet>
          </div>

          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <div
              className={`transition-all duration-300 md:flex md:items-center md:justify-center hidden`}
            >
              <NavigationMenu>
                <NavigationMenuList className='flex md:flex-row'>
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
                    <ModeToggle />
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
