import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(8, { message: "password must be 8 characters" }),
});
const Login = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="my-10 mx-10 flex flex-col gap-5  "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-center">
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl className="rounded-xl">
                <Input
                  className="text-center"
                  placeholder="enter ur email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-center">
              <FormLabel className="text-lg">Password</FormLabel>
              <FormControl className="rounded-xl">
                <Input
                  className="text-center"
                  placeholder="enter ur password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 font-bold rounded p-1"
          type="submit"
        >
          Submit
        </Button>
        <p className="text-center">
          don't have an account?
          <br />
          <Link className="text-dominant" to={"/signup"}>
            Signup
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default Login;
