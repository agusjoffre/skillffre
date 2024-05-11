'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

const LogoImage = () => {
  const { theme } = useTheme();

  return (
    <Image
      width={150}
      height={150}
      src={theme === 'dark' ? '/logo-dark.png' : theme === 'light' ? '/logo-light.png' : '/logo-green.png'}
      alt="Skillffre Logo"
    />
  );
};

export default LogoImage;
