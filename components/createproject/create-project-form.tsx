'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';
import { createProject } from '@/lib/actions/projectActions/createProject';
import ButtonSubmit from '../button-submit';
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import Error from '../error';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(60, { message: 'Name must be less than 60 characters.' }),
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

  const { toast } = useToast();

  const {
    mutate: server_createProject,
    isPending: queryIsPending,
    error: queryError,
    data: queryData,
  } = useMutation({
    mutationFn: createProject,
    onError: (error) => {
      console.log('error on fetch');
      toast({
        title: error.message,
        duration: 2000,
        variant: 'destructive',
      });
    },
    onMutate: () => {
      console.log('mutating');
      toast({
        title: 'Creating project...',
        duration: 2000,
        variant: 'default',
        className: 'bg-foreground text-background',
      });
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (queryData) {
      if (queryData.status === 'success') {
        console.log('querydata success');
        toast({
          title: queryData.message,
          description: `${queryData.project?.name} ${queryData.project?.startDate} - ${queryData.project?.endDate}`,
          duration: 1600,
          variant: 'default',
          className: 'bg-accent text-accent-foreground ',
        });
        router.push(`/`);
      }
      if (queryData.status === 'error') {
        console.log('querydata error');
        toast({
          title: queryData.message,
          duration: 2000,
          variant: 'destructive',
        });
        router.push('/projects/create');
      }
    }
  }, [queryData, router, toast]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    server_createProject(values);
  };

  if (queryError) return <Error message={queryError.message} />;
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
                <Input
                  placeholder="Edit two videos..."
                  {...field}
                  className="bg-none"
                  disabled={queryIsPending}
                  required
                />
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
                <Textarea
                  className="max-h-28 min-h-28"
                  placeholder="Edit two videos..."
                  {...field}
                  required
                  disabled={queryIsPending}
                />
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
                <Input type="date" {...field} required disabled={queryIsPending} />
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
                <Input type="date" {...field} required disabled={queryIsPending} />
              </FormControl>
              <FormDescription>When you want to end this project.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonSubmit text="Create" variant="accent" />
      </form>
    </Form>
  );
};

export default CreateProjectForm;
