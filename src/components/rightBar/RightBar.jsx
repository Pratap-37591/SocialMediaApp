import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="mensprofile"
              />
              <span>John sena</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="mensprofile"
              />
              <span>John sena</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="mensprofile"
              />
              <p>
                <span>John sena </span> Changed Profile picture
                </p>
            </div>
          <span>1 min ago</span>   
 </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
