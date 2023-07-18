import "./posts.scss";
import Post from "../../components/post/Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Sunil Chhetri",
      userId: 1,
      profilePic: "http://surl.li/jevou",
      desc: "@The Mysore Dasara",
      img: "http://surl.li/jevqc",
    },
    {
      id: 2,
      name: "ms dhoni",
      userId: 2,
      profilePic: "http://surl.li/jevnf",
      desc: "@2011 World cup champions ",
      img: "http://surl.li/jevss",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
