import PostCard from "@/components/shared/PostCard";
import { useRecentEvents } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Events = () => {
  const { data: posts, isPending } = useRecentEvents();
  console.log(posts?.documents.length === 0);

  return (
    <>
      <div className="flex flex-1">
        <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
          <div className="max-w-screen-sm flex flex-col items-center w-full gap-6 md:gap-9">
            <h2 className="text-[24px] font-bold leading-[140%] tracking-tighter md:text-[30px] text-left w-full">
              Events
            </h2>
            {isPending && !posts ? (
              <>
                <h2>loading...</h2>
              </>
            ) : (
              <ul>
                {posts?.documents.map((post: Models.Document) => (
                  <PostCard post={post} key={post.sm_des} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
