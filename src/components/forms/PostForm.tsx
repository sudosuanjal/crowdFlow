import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Textarea } from "../ui/textarea";
import FileUploader from "./FileUploader";
import { useCreatePost } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z.object({
  title: z.string().min(2).max(2200),
  file: z.custom<File[]>(),
  sm_des: z.string().min(2).max(100),
  about: z.string().min(2).max(2200),
  date: z.string().min(2).max(10),
  time: z.string().min(2),
  type: z.enum(["hackathon", "workshop", "seminar", "event"], {
    required_error: "You need to select a program type",
  }),
  line: z.enum(["offline", "online"], {
    required_error: "You need to select a type",
  }),
  paid: z.enum(["free", "paid"], {
    required_error: "You need to select a type",
  }),
  invite: z.enum(["open for all", "only for current college students"], {
    required_error: "You need to select a type",
  }),
  link: z.string().min(2),
});

const PostForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: createPost, isPending } = useCreatePost();
  const { user } = useUserContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      file: [],
      sm_des: "",
      about: "",
      date: "",
      time: "",
      link: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const newPost = await createPost({ ...values, userId: user.id });
    if (!newPost) console.log("post not created");
    navigate("/profile");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sm_des"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Small description about the program</FormLabel>
              <FormControl>
                <Textarea
                  className="rounded-xl border-none bg-primarylight custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>All about the program</FormLabel>
              <FormControl>
                <Textarea
                  className="h-36 bg-primarylight rounded-xl border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 !important"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <FileUploader fieldChange={field.onChange} mediaUrl="" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="type ur date with 'dd/mm/yyyy'"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="type ur time with '00:00'"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>What type of program</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="hackathon" />
                    </FormControl>
                    <FormLabel className="font-normal">Hackathon</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="workshop" />
                    </FormControl>
                    <FormLabel className="font-normal">Workshop</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="seminar" />
                    </FormControl>
                    <FormLabel className="font-normal">Seminar</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="event" />
                    </FormControl>
                    <FormLabel className="font-normal">Event</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="line"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Offline or Online</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="offline" />
                    </FormControl>
                    <FormLabel className="font-normal">Offline</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="online" />
                    </FormControl>
                    <FormLabel className="font-normal">Online</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paid"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Offline or Online</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="free" />
                    </FormControl>
                    <FormLabel className="font-normal">Free</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="paid" />
                    </FormControl>
                    <FormLabel className="font-normal">Paid</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="invite"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Invitation</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="open for all" />
                    </FormControl>
                    <FormLabel className="font-normal">Open for all</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="only for current college students" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Only for Current college students
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Invitation ( "open for all" or "only for current college
                students" )
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="inlcude https://"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{isPending ? "loading..." : "Submit"}</Button>
      </form>
    </Form>
  );
};

export default PostForm;

// for vercel update
//i created this
