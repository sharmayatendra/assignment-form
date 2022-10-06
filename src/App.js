import logo from "./logo.svg";
import axios from "axios";
import { Card } from "./components/Card";
import "./App.css";
import { useEffect, useState } from "react";
import { getUser } from "./services/getUser";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    (async () => {
      try {
        const response = await getUser();
        setUsers(response.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 p-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {users.length > 0 ? (
        users.map((user) => <Card user={user} />)
      ) : (
        <span>API fails</span>
      )}
    </div>
  );
}

export default App;
