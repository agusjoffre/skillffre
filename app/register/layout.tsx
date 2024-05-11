import LogoImage from '@/components/header/logo-image';
import Link from 'next/link';
import React from 'react';

const RegisterLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-10 ">
      <div className="pt-12">
        <Link href={'/'}>
          <LogoImage />
        </Link>
      </div>

      {children}
    </div>
  );
};

export default RegisterLayout;
