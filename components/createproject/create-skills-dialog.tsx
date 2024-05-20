import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CheckCircle2, CircleX, DiamondPlus } from 'lucide-react';
import { Button } from '../ui/button';

const CreateSkillsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={'default'} type="button" className="flex items-center gap-2">
          <DiamondPlus width={18} height={18} />
          <span className="hidden sm:block">Skills required</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Project skills</DialogTitle>
          <DialogDescription>Add the skills required for this project.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          {/* submit skills button */}
          <Button type="button" variant={'accent'} className="flex items-center gap-2 sm:w-full">
            <CheckCircle2 width={18} height={18} />
            <span className="hidden sm:block">Done</span>
          </Button>
          <DialogClose asChild>
            <Button type="button" variant={'destructive'} className="flex items-center gap-2 sm:w-full">
              <CircleX width={18} height={18} />
              <span className="hidden sm:block">Cancel</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSkillsDialog;
