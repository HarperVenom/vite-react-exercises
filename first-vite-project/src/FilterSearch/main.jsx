import { useEffect, useState } from "react";
import "./style.css";

const FilterSearch = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);

      const response = await fetch(`https://dummyjson.com/users`);
      const data = await response.json();

      setUsers(
        data.users.filter((user) =>
          filter
            ? user.firstName.toLowerCase().includes(filter.toLowerCase()) ||
              user.lastName.toLowerCase().includes(filter.toLowerCase())
              ? user.firstName + " " + user.lastName
              : null
            : null
        )
      );

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  return (
    <div className="filter-search">
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user">
              {user.firstName + " " + user.lastName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSearch;
