import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import { AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const signUpSchema = z
  .object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .min(1, 'Please enter your email')
      .email('Invalid email address'),
    password: z
      .string({
        required_error: 'Please enter your password',
      })
      .regex(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,20}$/), 'Invalid password'),
    confirmPassword: z.string({
      required_error: 'Please confirm your password',
    }),
    age: z.optional(z.number().int().positive('Age must be a positive number')),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

export const FormExample = () => {
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      age: 18,
    },
  });

  const onSubmit: SubmitHandler<SignUpFormValues> = (data: SignUpFormValues) => {
    toast.success(
      <div>
        <AlertTitle>Sign up successful!</AlertTitle>
        <AlertDescription>
          Your email is <strong>{data.email}</strong>
          <br />
          Your password: <strong>{data.password}</strong>
          <br />
          Your age: <strong>{data.age}</strong>
        </AlertDescription>
      </div>,
    );
  };

  return (
    <div className="p-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} onChangeCapture={() => form.trigger('email')} />
                  </FormControl>
                  <FormDescription>This is your unique email for the account</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      onChangeCapture={() => {
                        form.trigger('password');
                      }}
                    />
                  </FormControl>
                  <FormDescription>This is your password</FormDescription>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Retype your password"
                      {...field}
                      onChangeCapture={() => form.trigger('confirmPassword')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={e => {
                        field.onChange(+e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="flex w-full justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
