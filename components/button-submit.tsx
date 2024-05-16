import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

type Props = {
  text: string;
  variant: 'accent' | 'default' | 'destructive';
};

const ButtonSubmit = ({ text, variant }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={variant} disabled={pending}>
      {text}
    </Button>
  );
};

export default ButtonSubmit;
