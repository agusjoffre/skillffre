import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArchiveXIcon } from 'lucide-react';

type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return (
    <Alert>
      <ArchiveXIcon className="h-6 w-6" />
      <AlertTitle className="font-bold text-foreground">Oh! Something went wrong</AlertTitle>
      <AlertDescription className="font-semibold text-foreground">{message}</AlertDescription>
    </Alert>
  );
};

export default Error;
