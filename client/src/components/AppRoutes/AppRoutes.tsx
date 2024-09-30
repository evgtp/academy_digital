import { useEffect, useState } from "react";
import { TypeMessage } from "../../module/ChatMessageType";
import { useNavigate, useRoutes } from "react-router-dom";
import Login from "../Login/Login";
import Chat from "../Chat/Chat";

const AppRoutes = () => {
  const [client, setClient] = useState<WebSocket | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [messages, setMessages] = useState<TypeMessage[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setClient(ws);
    ws.onopen = (event) => {
      console.log("Open:", event);
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case "register":
          if (message.success) {
            alert("Регистрация прошла успешно");
            setIsAuth(true);
          } else {
            alert(`Регистрация не удалась: ${message.error}`);
          }
          break;
        case "auth":
          if (message.success) {
            alert("Авторизция прошла успешно");
            setIsAuth(true);
            navigate("/chat");
          } else {
            alert("Авторизация не удалась");
          }
          break;
        case "message":
          const data = JSON.parse(event.data);
          setMessages((prevMessages) => [...prevMessages, data]);
          break;
        default:
          break;
      }
    };

    ws.onclose = (event) => {
      console.log("Close:", event);
    };
    ws.onerror = (error) => {
      console.error("Error WebSocket:", error);
    };

    return () => {
      console.log("Closing WebSocket");
      ws.close();
    };
  }, []);

  const router = useRoutes([
    {
      path: "/",
      element: <Login ws={client} />,
    },
    {
      path: "/chat",
      element: <Chat ws={client} messages={messages} />,
    },
  ]);

  return router;
};

export default AppRoutes;
