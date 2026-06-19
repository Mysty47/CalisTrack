import { useEffect, useState } from "react";


function App() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
        .then((res) => res.text())
        .then((data) => setMessage(data))
        .catch((err) => console.error(err));
  }, []);

  return (
      <div>
          <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          />
          <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
      </div>
  );
}

export default App;