import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthProvider";
import {
  useDeletePost,
  usePostById,
} from "@/lib/react-query/queriesAndMutations";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data, isPending } = usePostById(id || "");
  const { user } = useUserContext();
  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();

  const handleDeletePost = () => {
    deletePost({ postID: data?.$id, imageID: data?.imageID });
  };

  const handleButtonClick = () => {
    window.open(data?.link, "_blank");
  };

  return (
    <div className="p-10 md:w-[1000px] m-auto">
      <h2 className="font-bold text-2xl">Program details</h2>
      {isPending ? (
        <>loading...</>
      ) : (
        <div className="m-8 bg-primarylight p-5 rounded-xl">
          {/* for image */}
          <div>
            <img
              src={data?.imageURL}
              className="rounded-xl object-center h-auto m-auto w-full"
            />
          </div>
          {/* for heading and owner */}
          <div className="mt-3">
            <h2 className="font-bold text-xl">{data?.title}</h2>
            <p className="text-sm"> --- by {data?.creator.name}</p>
          </div>
          {/* for content */}
          <div className="m-4">
            <p className="font-medium text-md">{data?.about}</p>
          </div>
          {/* for timing */}
          <div className="bg-primary1 flex flex-row gap-2 rounded-xl">
            <div className="m-auto bg-white rounded-xl w-1/3 text-center">
              <h2 className="text-black">6 - 5</h2>
              <h3 className="text-dominant">JUN</h3>
            </div>
            <div className="w-2/3 m-auto text-center">
              <p>6pm to 11 pm</p>
              <p>kochi</p>
            </div>
          </div>

          <div className="flex flex-row w-full gap-2 my-5">
            <Button
              onClick={handleButtonClick}
              className={`${
                user.id === data?.creator.$id ? "w-3/4" : "w-full"
              } bg-btn rounded-xl text-black font-bold`}
            >
              <p>Register</p>
            </Button>
            {user.id === data?.creator.$id ? (
              <Button
                className="bg-btn rounded-xl text-black font-bold w-1/4"
                onClick={handleDeletePost}
              >
                {isPending ? (
                  <p>loading..</p>
                ) : (
                  <FontAwesomeIcon icon={faTrashCan} />
                )}
              </Button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
