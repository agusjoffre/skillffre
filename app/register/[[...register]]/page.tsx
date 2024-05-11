import { SignUp } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';

const RegisterPage = () => {
  return (
    <div className="pb-12">
      <SignUp path="/register" appearance={{ baseTheme: neobrutalism }} />
    </div>
  );
};

export default RegisterPage;
