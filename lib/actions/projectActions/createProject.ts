import { formSchema } from '@/components/createproject/create-project-form';
import prisma from '@/prisma/prismaClient';
import { currentUser } from '@clerk/nextjs/server';
import { Project } from '@prisma/client';
import { redirect } from 'next/navigation';
import { z } from 'zod';

enum ProjectStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

enum ProjectMessage {
  PROJECT_CREATED = 'Project created successfully',
  PROJECT_EXISTS = 'Project already exists',
  PROJECT_NOT_CREATED = 'Project could not be created',
}

export const createProject = async (
  values: z.infer<typeof formSchema>,
): Promise<{ status: ProjectStatus; message: ProjectMessage; project: Project | null }> => {
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
    return { status: ProjectStatus.ERROR, message: ProjectMessage.PROJECT_EXISTS, project: existingProject };

  /* create new project */
  const createdProject = await prisma.project.create({ data: newProject });
  if (!createdProject)
    return { status: ProjectStatus.ERROR, message: ProjectMessage.PROJECT_NOT_CREATED, project: null };

  return {
    status: ProjectStatus.SUCCESS,
    message: ProjectMessage.PROJECT_CREATED,
    project: createdProject,
  };
};
