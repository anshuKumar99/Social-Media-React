import { MdDelete } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { BiSolidLike } from "react-icons/bi";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card my-5" style={{ width: "28rem", margin: "auto" }}>
      <img
        src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-67789-607812.jpg&fm=jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-5"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary me-1">
            {tag}
          </span>
        ))}
        <div className="reactions my-2">
          <span className="fs-4">
            <FcLike />
          </span>
          <span className="text-primary fs-5">
            <BiSolidLike />
          </span>
          <span className="text-warning fs-5">
            <BsFillEmojiSurpriseFill />
          </span>
          <span> Lorem Ipsum and {post.reactions} others</span>
        </div>
        <hr />
        <div
          className="alert alert-secondary mt-2 mb-0 d-flex justify-content-around"
          role="alert"
        >
          <button className="btn btn-outline-primary" type="submit">
            <BiLike /> Like
          </button>
          <button className="btn btn-outline-primary" type="submit">
            <FaRegCommentAlt /> Comment
          </button>
          <button className="btn btn-outline-primary" type="submit">
            <PiShareFat /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
