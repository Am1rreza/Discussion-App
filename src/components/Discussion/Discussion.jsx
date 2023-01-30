import { discussions } from "../../discussions";
import Comment from "../Comment/Comment";
import NestedComment from "../NestedComment/NestedComment";
import "./discussion.css";

const Discussion = () => {
  const discussionsData = discussions;

  // functions
  const getUserAvatar = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.user.avatar;
  };

  const getRepliesData = (id) => {
    const discussion = discussionsData.find((d) => id === d.id);
    return discussion.replies;
  };

  return (
    <main>
      <header>
        <img src={getUserAvatar(3)} alt="avatar-1" />
        <input type="text" placeholder="Start a discussion" />
      </header>
      <Comment discussionsData={discussionsData} commentId={3}>
        <NestedComment discussionsData={getRepliesData(3)} commentId={5} />
        <NestedComment discussionsData={getRepliesData(3)} commentId={6} />
      </Comment>
    </main>
  );
};

export default Discussion;
