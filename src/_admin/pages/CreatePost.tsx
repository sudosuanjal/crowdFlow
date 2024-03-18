import PostForm from "@/components/forms/PostForm";

export const CreatePost = () => {
  return (
    <div className="flex flex-1 md:ml-[300px]">
      <div className="flex flex-col flex-1 items-center gap-10 py-10 px-5 md:px-8 lg:p-14">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <h2 className="text-[24px] font-bold leading-[140%] tracking-tighter md:text-[3opx] text-left w-full">
            Create Post
          </h2>
        </div>

        <PostForm />
      </div>
    </div>
  );
};
