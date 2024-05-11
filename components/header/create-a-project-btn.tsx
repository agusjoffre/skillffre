import Link from 'next/link';

import { Button } from '../ui/button';

type Props = {
  width: 'full' | 'auto' | 'fit';
};

const CreateProjectBtn = ({ width = 'auto' }: Props) => {
  let w;
  switch (width) {
    case 'auto':
      w = 'auto';
      break;
    case 'fit':
      w = 'fit';
      break;
    case 'full':
      w = '100%';
      break;
    default:
      w = 'auto';
      break;
  }

  return (
    <Link href={'/project/create'} style={{ width: w }}>
      <Button variant={'accent'} style={{ width: w }}>
        Create a project
      </Button>
    </Link>
  );
};

export default CreateProjectBtn;
