import { useUserContext } from "@/context/AuthProvider";
import {
  faCalendar,
  faLocationDot,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();
  if (!post.creator) return;
  console.log(post);

  return (
    <div className="flex bg-primarylight rounded-xl p-3  flex-col gap-3 mb-10">
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-2">
          <img
            src="https://placehold.co/400x400"
            className="rounded-full w-12 h-12"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-black">{post.creator.name}</h2>
            <p className="text-sm font-medium">@{post.creator.username}</p>
          </div>
        </div>
        <div className={`${user.id !== post.creator.$id && "hidden"} `}>
          <FontAwesomeIcon icon={faPenToSquare} className="text-2xl" />
        </div>
      </div>
      <Link to={"/profile"}>
        <img src={post.imageURL} className="rounded-xl object-fill " />
      </Link>
      <div className="flex gap-1 flex-wrap">
        <p className="bg-primary1 rounded-xl px-3 py-1">{post.type}</p>
        <p className="bg-primary1 rounded-xl px-3 py-1">{post.line}</p>
        <p className="bg-primary1 rounded-xl px-3 py-1">{post.paid}</p>
        <p className="bg-primary1 rounded-xl px-3 py-1">{post.invite}</p>
      </div>
      <Link to={"/profile"}>
        <h1 className="font-bold text-2xl">{post.title}</h1>
      </Link>
      <Link to={"/profile"}>
        <p className="text-sm ">{post.sm_des}</p>
      </Link>
      <div className="flex flex-row  items-center justify-around gap-2">
        <div className="flex flex-row items-center justify-center gap-1">
          <FontAwesomeIcon className="text-red-500" icon={faCalendar} />
          <p className="font-medium text-sm">
            {post.date} at {post.time}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <FontAwesomeIcon className="text-green-500" icon={faLocationDot} />
          <p className="font-medium text-sm">Kochi</p>
        </div>
      </div>
      <Button className="bg-btn rounded-xl text-black font-bold">
        <a href="https://www.instagram.com/sudosuanjal">Register</a>
      </Button>
    </div>
  );
};

export default PostCard;
