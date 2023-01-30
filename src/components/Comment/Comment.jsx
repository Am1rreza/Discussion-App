import "./comment.css";
import { AiFillLike } from "react-icons/ai";
import { IconContext } from "react-icons";

const Comment = ({ discussionsData, getUserAvatar,commentId }) => {
  // functions
  const getUserName = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.user.name;
  };

  const getCommentContent = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.text;
  };

  const isLikedIt = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.iLikedIt;
  };

  const getLikes = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.likes;
  };

  const getCommentDate = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    const date = discussion.date;
    return new Date(new Date(date) - new Date().getTime()).getHours();
  };

  return (
    <section>
      <div className="comment">
        <img src={getUserAvatar(commentId)} alt="avatar-2" />
        <div className="commentBox">
          <div className="commentTitle">
            <h3>{getUserName(commentId)}</h3>
            <span>{getCommentDate(commentId)}h ago</span>
          </div>
          <p className="commentContent">{getCommentContent(commentId)}</p>
          <div className="buttonBox">
            <button className={`likeBtn ${isLikedIt(commentId) && "activeBtn"}`}>
              <AiFillLike
                style={{
                  fontSize: "20px",
                  color: isLikedIt(commentId) ? "#fff" : "#909AB4",
                }}
              />
              <span>{getLikes(commentId)}</span>
            </button>
            <a href="#">Reply</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
