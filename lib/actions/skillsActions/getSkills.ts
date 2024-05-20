'use server';
import prisma from '@/prisma/prismaClient';
import { Skill } from '@prisma/client';

export const getAllSkills = async () => {};
export const getSkillsBySearch = async (word: string): Promise<Skill[]> => {
  const foundedSkills = await prisma.skill.findMany({
    where: {
      name: {
        contains: word,
        mode: 'insensitive',
      },
    },
  });

  const a: Skill = {
    id: '1',
    name: 'test',
    projectId: '1',
    userId: '1',
  };

  return [a, ...foundedSkills];
};
