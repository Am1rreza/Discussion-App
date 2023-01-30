import "./input.css";

const Input = ({ getUserAvatar }) => {
  return (
    <div className="inputBox">
      <header className="nestedInput">
        <img src={getUserAvatar(3)} alt="avatar-1" />
        <input type="text" placeholder="Reply" />
      </header>
    </div>
  );
};

export default Input;
