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
import CreateSkillsContent from './create-skills-content';

const CreateSkillsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'default'} type="button" className="flex items-center gap-2">
          <DiamondPlus width={18} height={18} />
          <span>Skills required</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Project skills</DialogTitle>
          <DialogDescription>
            Add the skills required for this project. If the skill does not exist, it will be created.
          </DialogDescription>
        </DialogHeader>
        <CreateSkillsContent />
        <DialogFooter className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          {/* submit skills button */}
          <Button type="button" variant={'accent'} className="flex items-center gap-2 sm:w-full">
            <CheckCircle2 width={18} height={18} />
            <span>Done</span>
          </Button>
          <DialogClose asChild>
            <Button type="button" variant={'destructive'} className="flex items-center gap-2 sm:w-full">
              <CircleX width={18} height={18} />
              <span>Cancel</span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSkillsDialog;
