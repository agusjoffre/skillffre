'use server';
import { formSchema } from '@/components/createproject/create-project-form';
import { Status } from '@/lib/types';
import prisma from '@/prisma/prismaClient';
import { currentUser } from '@clerk/nextjs/server';
import { Project } from '@prisma/client';
import { redirect } from 'next/navigation';
import { z } from 'zod';

enum ProjectMessage {
  PROJECT_CREATED = 'Project created successfully',
  PROJECT_EXISTS = 'Project already exists',
  PROJECT_NOT_CREATED = 'Project could not be created',
}

export const createProject = async (
  values: z.infer<typeof formSchema>,
): Promise<{ status: Status; message: ProjectMessage; project: Project | null }> => {
  const user = await currentUser();
  if (!user) redirect('/register');

  const newProject: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> = {
    name: values.name,
    creatorID: user.id,
    description: values.description,
    startDate: values.startDate,
    endDate: values.endDate,
  };

  /* checking if a project already exists with the same name and creator */
  const existingProject = await prisma.project.findFirst({
    where: {
      name: values.name,
      creatorID: user.id,
    },
  });
  if (existingProject)
    return { status: Status.ERROR, message: ProjectMessage.PROJECT_EXISTS, project: existingProject };

  /* create new project */
  const createdProject = await prisma.project.create({ data: newProject });
  if (!createdProject) return { status: Status.ERROR, message: ProjectMessage.PROJECT_NOT_CREATED, project: null };

  return {
    status: Status.SUCCESS,
    message: ProjectMessage.PROJECT_CREATED,
    project: createdProject,
  };
};
