import { z } from 'zod';

const today = new Date();
const startMaxDay = new Date();
startMaxDay.setDate(today.getDate() + 365);

const formSchema = z.object({
  name: z.string().min(2).max(25),
  description: z.string().min(4).max(150),
  startDate: z.date().min(today).max(startMaxDay),
  endDate: z
    .date()
    .min(today)
    .max(new Date(today.getTime() + 1000 * 60 * 60 * 24 * 365)),
  skills: z.array(z.string()),
});

const CreateProjectForm = () => {
  return <div>CreateProjectForm</div>;
};

export default CreateProjectForm;
