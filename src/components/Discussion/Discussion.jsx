import { discussions } from "../../discussions";
import Comment from "../Comment/Comment";
import "./discussion.css";

const Discussion = () => {
  const discussionsData = discussions;

  // functions
  const getUserAvatar = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.user.avatar;
  };

  return (
    <main>
      <header>
        <img src={getUserAvatar(3)} alt="avatar-1" />
        <input type="text" placeholder="Start a discussion" />
      </header>
      <Comment
        discussionsData={discussionsData}
        getUserAvatar={getUserAvatar}
        commentId={3}
      >
      </Comment>
    </main>
  );
};

export default Discussion;
