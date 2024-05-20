'use server';

import { Status } from '@/lib/types';
import { currentUser } from '@clerk/nextjs/server';
import { Skill } from '@prisma/client';

enum SkillMessage {
  SKILL_CREATED = 'Skill created successfully',
  SKILL_EXISTS = 'Skill already exists',
  SKILL_NOT_CREATED = 'Skill could not be created',
}

export const createSkill = async (): Promise<{ status: Status; message: SkillMessage; skill: Skill | null }> => {
  const user = await currentUser();
  if (!user) return { status: Status.ERROR, message: SkillMessage.SKILL_NOT_CREATED, skill: null };

  // check if exists

  return {
    status: Status.SUCCESS,
    message: SkillMessage.SKILL_CREATED,
    skill: null,
  };
};
