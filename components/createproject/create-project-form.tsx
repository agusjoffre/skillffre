'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { createProject } from '@/lib/actions/projectActions/createProject';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(25, { message: 'Name must be less than 25 characters.' }),
  description: z
    .string()
    .min(4, { message: 'Description must be at least 4 characters.' })
    .max(150, { message: 'Description must be less than 150 characters.' }),
  startDate: z.string(),
  endDate: z.string(),
  skills: z.array(z.string()),
});

const CreateProjectForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startDate: new Date().toDateString(),
      endDate: new Date().toDateString(),
      description: '',
      name: '',
      skills: [''],
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createProject(values);
    form.reset();
    form.clearErrors();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Edit two videos..." {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea className="max-h-28 min-h-28" placeholder="Edit two videos..." {...field} required />
              </FormControl>
              <FormDescription>Try to be clear with your goals and needs</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start date</FormLabel>
              <FormControl>
                <Input type="date" {...field} required />
              </FormControl>
              <FormDescription>When you want to start working on this project.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End date</FormLabel>
              <FormControl>
                <Input type="date" {...field} required />
              </FormControl>
              <FormDescription>When you want to end this project.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={'accent'}>
          Create
        </Button>
      </form>
    </Form>
  );
};

export default CreateProjectForm;
