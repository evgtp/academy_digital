import { ChangeEvent, FC, useState } from "react";

interface LoginProps {
  ws: WebSocket | null;
}

const initialUser = {
  username: "",
  password: "",
};

const Login: FC<LoginProps> = ({ ws }) => {
  const [user, setUser] = useState<{ username: string; password: string }>(
    initialUser
  );
  const { username, password } = user;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAuth = () => {
    ws?.send(
      JSON.stringify({
        type: "auth",
        username,
        password,
      })
    );
  };

  const handleRegister = () => {
    ws?.send(
      JSON.stringify({
        type: "register",
        username,
        password,
      })
    );
  };

  return (
    <div>
      <div>
        <h2>Вход</h2>
      </div>
      <div>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleAuth}>Login</button>
      </div>
    </div>
  );
};

export default Login;
