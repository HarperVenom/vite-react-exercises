import "./profile.css";

const UserProfile = ({
  avatar,
  name,
  date,
  login,
  url,
  followers,
  following,
  repos,
}) => {
  const createdDate = new Date(date);

  return (
    <div className="profile-container">
      <img src={avatar ? avatar : ""} className="picture"></img>
      <div className="info-container">
        <div className="username">
          <div className="label">{name ? "Name" : "Username"}</div>
          <div className="info">{name ? name : login}</div>
        </div>
        <div className="date">
          <div className="label">Joined at:</div>
          <div className="info">
            {date
              ? createdDate.getDate() +
                " " +
                createdDate.toLocaleString("en-us", { month: "short" }) +
                " " +
                createdDate.getFullYear()
              : ""}
          </div>
        </div>
        <div className="link">
          <div className="label">Profile Link</div>
          <a className="info" href={url ? url : ""}>
            {url ? url : "no link"}
          </a>
        </div>
        <div className="followers">
          <div className="label">Followers</div>
          <div className="info">{followers ? followers : "0"}</div>
        </div>
        <div className="following">
          <div className="label">Following</div>
          <div className="info">{following ? following : "0"}</div>
        </div>
        <div className="repos">
          <div className="label">Public Repositories</div>
          <div className="info">{repos ? repos : "0"}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
