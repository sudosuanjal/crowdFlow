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
import { useUpdatePost } from "@/lib/react-query/queriesAndMutations";
import { useNavigate } from "react-router-dom";
import { Models } from "appwrite";

const formSchema = z.object({
  title: z.string().min(2).max(2200),
  file: z.custom<File[]>(),
  sm_des: z.string().min(2).max(100),
  about: z.string().min(2).max(2200),
  date: z.string().min(2).max(10),
  time: z.string().min(2),
  type: z.string().min(2),
  line: z.string().min(2),
  paid: z.string().min(2),
  invite: z.string().min(2),
  link: z.string().min(2),
});

type EditFormProps = {
  post?: Models.Document;
};

const EditForm = (post: EditFormProps) => {
  const navigate = useNavigate();
  const { mutateAsync: updatePost, isPending } = useUpdatePost();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post ? post.post?.title : "",
      file: [],
      sm_des: post ? post.post?.sm_des : "",
      about: post ? post.post?.about : "",
      date: post ? post.post?.date : "",
      time: post ? post.post?.time : "",
      type: post ? post.post?.type : "",
      line: post ? post.post?.line : "",
      paid: post ? post.post?.paid : "",
      invite: post ? post.post?.invite : "",
      link: post ? post.post?.link : "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("btn clicked");

    const updatedPost = await updatePost({
      ...values,
      postId: post.post?.$id || "",
      imageID: post.post?.imageID,
      imageURL: post.post?.imageURL,
    });
    if (!updatedPost) console.log("post not created");
    navigate("/profile");
  }

  // console.log(typeof post.post?.$id);

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
                <FileUploader
                  fieldChange={field.onChange}
                  mediaUrl={post.post?.imageURL}
                />
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
            <FormItem>
              <FormLabel>
                What type of program (hackathon, seminar, events, workshops)
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="enter the type of program"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="line"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Offline or Online</FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="type ur answer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Paid or Free</FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="type ur answer"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="invite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Invitation ( "open for all" or "only for current college
                students" )
              </FormLabel>
              <FormControl>
                <Input
                  className="rounded-xl border-none bg-primarylight"
                  placeholder="type ur answer"
                  {...field}
                />
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

export default EditForm;
