import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Sunil Chhetri",
      img: "http://surl.li/jevou"
    },
    {
      id: 2,
      name: "gobi manchurian",
      img: "http://surl.li/jevnu",
    },
    {
      id: 3,
      name: "mysore dasara",
      img: "http://surl.li/jevqc",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="storyimage" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="storyimage" />

          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
