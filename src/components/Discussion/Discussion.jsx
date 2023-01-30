import { discussions } from "../../discussions";
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
        <input type="text" placeholder="Start a discussion"/>
      </header>
    </main>
  );
};

export default Discussion;
