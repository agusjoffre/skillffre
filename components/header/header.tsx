import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { neobrutalism } from '@clerk/themes';
import { Bell } from 'lucide-react';
import Link from 'next/link';

import { ModeToggle } from '../toggle-theme';
import { Button } from '../ui/button';
import CreateProjectBtn from './create-a-project-btn';
import LogoImage from './logo-image';
import Menu from './menu';

const Header = async () => {
  const user = await currentUser();
  return (
    <header className="flex items-center justify-between bg-muted px-10 py-4 shadow-sm shadow-muted sm:px-2 sm:py-6 md:px-10 xl:px-72">
      <div className="flex items-center gap-4">
        <Link href={'/'}>
          <LogoImage />
        </Link>
        <div className="hidden gap-8 sm:flex">
          <CreateProjectBtn width="auto" />
          {/* <SEARCHBAR/> hidden sm:flex */}
        </div>
      </div>
      <div className="flex items-center gap-4 sm:hidden">
        <ModeToggle />
        <Menu />
      </div>
      <div className="hidden items-center gap-10 sm:flex">
        {!user ? (
          <Link href={'/register'}>
            <Button>Sign In</Button>
          </Link>
        ) : (
          <div className="flex items-center gap-6">
            {/* <NOTIFICATION/> */}
            <Bell />
            <div className="flex items-center gap-2">
              <UserButton appearance={{ baseTheme: neobrutalism }} />
              <h3 className="text-xs font-normal">{user.fullName}</h3>
            </div>
          </div>
        )}

        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
