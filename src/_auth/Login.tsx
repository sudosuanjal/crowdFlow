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
import { Link, useNavigate } from "react-router-dom";
import { useLogIn } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthProvider";

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(8, { message: "password must be 8 characters" }),
});
const Login = () => {
  const navigate = useNavigate();
  const { mutateAsync: logIn } = useLogIn();
  const { checkAuthUser } = useUserContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const session = await logIn({
      email: values.email,
      password: values.password,
    });

    if (!session) console.log("session failed");

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();
      navigate("/profile");
    } else {
      console.log("loggin failed");
    }
  }

  return (
    <>
      <div className="bg-primarylight rounded-xl py-1 mx-10 m-auto mt-10 md:w-1/2 md:m-auto md:mt-10">
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
      </div>
    </>
  );
};

export default Login;
