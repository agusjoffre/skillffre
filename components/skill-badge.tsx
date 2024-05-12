import { Badge } from '@/components/ui/badge';

type Props = {
  /* skill: Skill */
};

const SkillBadge = (props: Props) => {
  return (
    <Badge variant={'default'} className="rounded-full text-xs font-medium">
      {/* skill.name */}Fullstack developer
    </Badge>
  );
};

export default SkillBadge;
