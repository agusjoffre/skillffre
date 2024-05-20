'use client';
import { getSkillsBySearch } from '@/lib/actions/skillsActions/getSkills';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Error from '../error';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const CreateSkillsContent = () => {
  const [skillWritten, setSkillWritten] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const { data: foundedSkills, isError: foundIsError } = useQuery({
    queryKey: ['skills', skillWritten],
    queryFn: async () => {
      return await getSkillsBySearch(skillWritten);
    },
    enabled: !!skillWritten,
  });

  if (foundIsError) return <Error message="Error while fetching skills" />;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <Input
          placeholder="Skill name"
          type="text"
          value={skillWritten}
          onChange={(e) => {
            setSkillWritten(e.target.value);
            setOpen(true);
          }}
        />
        <Button variant={'outline'} type="button">
          Add
        </Button>
      </div>
      {foundedSkills && open && (
        <div className="flex flex-col gap-2 border-[1px] border-muted bg-background p-2 shadow-sm">
          {foundedSkills.map((skill) => (
            <Button
              type="button"
              variant={'outline'}
              className="flex items-center justify-start border-none px-2 hover:bg-muted"
              key={skill.id}
              onClick={() => {
                setSkillWritten(skill.name);
                setOpen(!open);
              }}
            >
              {skill.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateSkillsContent;
