import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Bell, MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import CreateProjectBtn from './create-a-project-btn';

const Menu = async () => {
  const user = await currentUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MenuIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col  justify-center">
          <DropdownMenuItem>
            {!user ? (
              <Link href={'/register'} className="w-full">
                <Button className="w-full">Sign in</Button>
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                {/* <NOTIFICATION/> */}
                <Bell />
                <Image
                  className="rounded-full"
                  src={user.imageUrl}
                  alt={`${user.username} ${user.fullName} profile image`}
                  width={30}
                  height={30}
                />
                <h3 className="text-wrap text-xs font-medium">{user.fullName}</h3>
              </div>
            )}
          </DropdownMenuItem>

          {user ? (
            <>
              <DropdownMenuItem>
                {/* CREATE A PROJECT */}
                <CreateProjectBtn width="full" />
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SignOutButton>
                  <Button className="w-full" variant={'destructive'}>
                    Sign Out
                  </Button>
                </SignOutButton>
              </DropdownMenuItem>
            </>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Menu;
