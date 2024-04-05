import { useEffect, useState } from "react";
import UserProfile from "./userProfile";

const GithubProfileFinder = () => {
  const [userName, setUser] = useState("HarperVenom");
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUser() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      console.log(data);
      data ? setUserData(data) : setUserData(null);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="finder-container">
      <div className="input-container">
        <input
          name="Search"
          placeholder="Enter profile username"
          value={userName}
          type="text"
          onChange={(e) => setUser(e.target.value)}
        />
        <button className="find-button" onClick={() => fetchUser()}>
          Find User
        </button>
      </div>
      {error ? (
        <div>Error: {error.message}</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : userData ? (
        userData.message ? (
          <div className="not-found">{userData.message}</div>
        ) : (
          <UserProfile
            avatar={userData.avatar_url}
            name={userData.name}
            date={userData.created_at}
            login={userData.login}
            url={userData.html_url}
            followers={userData.followers}
            following={userData.following}
            repos={userData.public_repos}
          ></UserProfile>
        )
      ) : null}
    </div>
  );
};

export default GithubProfileFinder;
