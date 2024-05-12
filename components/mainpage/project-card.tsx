import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import SkillBadge from '../skill-badge';

const ProjectCard = () => {
  return (
    <Card className=" min-w-full lg:min-w-72">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="l text-xl font-semibold xl:text-2xl">Edit two videos in a week</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span className="font-semibold text-foreground sm:text-xs lg:text-sm xl:text-base">@agusjoffre</span>
          <span className="text-xs font-medium text-foreground">95% coincidences</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1">
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
      </CardContent>
      <CardFooter className="px-2">
        <Link href={`/project/id`}>
          <Button variant={'link'}>More information</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
