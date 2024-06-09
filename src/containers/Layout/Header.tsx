import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { HiLogin, HiPaperAirplane } from 'react-icons/hi';
import { ThemeSwitch } from '@/ui/ThemeSwitch';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();
  const menuItems = ['خانه', 'خروج'];

  return (
    <Navbar disableAnimation isBordered className={`bg-primary-400 p-1 `}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <HiPaperAirplane />
          <p className="font-bold text-inherit">برنامه ریزی</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <HiPaperAirplane />
          <p className="font-bold text-inherit">برنامه ریزی</p>
        </NavbarBrand>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        {/* <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent
        justify="end"
        className={`${status === 'loading' && !session ? 'opacity-0' : 'opacity-100'}`}
      >
        <NavbarItem>
          {!session && status !== 'loading' && (
            <Button
              onClick={() => signIn('github')}
              as={Link}
              color="default"
              href="#"
              variant="solid"
            >
              ورود
              <HiLogin />
            </Button>
          )}
          {session && (
            <Button
              onClick={() => signOut()}
              as={Link}
              color="default"
              href="#"
              variant="solid"
            >
              خروج
              <HiLogin />
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
