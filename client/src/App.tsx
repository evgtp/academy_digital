import { FC } from "react";

// import React, { useState, useEffect, useRef } from "react";

// interface Message {
//   type: string;
//   sender?: string;
//   message?: string;
//   success?: boolean;
//   error?: string;
// }

// const App: React.FC = () => {
//   const [client, setClient] = useState<WebSocket | null>(null);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const messageInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const newClient = new WebSocket("ws://localhost:8080");
//     setClient(newClient);

//     newClient.onopen = () => {
//       console.log("WebSocket connection opened");
//     };

// newClient.onmessage = (message) => {
//   const data: Message = JSON.parse(message.data.toString());
//   setMessages((prevMessages) => [...prevMessages, data]);
// };

// newClient.onclose = () => {
//   console.log("WebSocket connection closed");
// };

// return () => {
//   newClient.close();
// };
//   }, []);

//   const handleLogin = () => {
//     if (client) {
//       client.send(
//         JSON.stringify({
//           type: "auth",
//           username,
//           password,
//         })
//       );
//     }
//   };

//   const handleRegister = () => {
//     if (client) {
//       client.send(
//         JSON.stringify({
//           type: "register",
//           username,
//           password,
//         })
//       );
//     }
//   };

//   const handleSendMessage = () => {
//     if (
//       client &&
//       isLoggedIn &&
//       messageInputRef.current &&
//       client.readyState === WebSocket.OPEN
//     ) {
//       const message = messageInputRef.current.value.trim();
//       if (message) {
//         client.send(
//           JSON.stringify({
//             type: "message",
//             message,
//           })
//         );
//         messageInputRef.current.value = "";
//       }
//     }
//   };

//   useEffect(() => {
//     if (client) {
//       client.onmessage = (message) => {
//         const data: Message = JSON.parse(message.data.toString());
//         if (data.type === "auth") {
//           setIsLoggedIn(data.success || false);
//         } else if (data.type === "register") {
//           if (data.success) {
//             setIsLoggedIn(true);
//           } else {
//             alert(data.error);
//           }
//         } else if (data.type === "message") {
//           setMessages((prevMessages) => [...prevMessages, data]);
//           setIsLoggedIn(true);
//         }
//       };
//     }
//   }, [client]);

//   return (
//     <div>
//       {!isLoggedIn && (
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//           <button onClick={handleRegister}>Register</button>
//         </div>
//       )}
//       {isLoggedIn && (
//         <div>
//           <div>
//             {messages.map((message, index) => (
//               <div key={index}>
//                 {message.sender ? `${message.sender}: ` : ""}
//                 {message.message}
//               </div>
//             ))}
//           </div>
//           <input
//             type="text"
//             placeholder="Type your message"
//             ref={messageInputRef}
//             onKeyPress={(e) => {
//               if (e.key === "Enter") {
//                 handleSendMessage();
//               }
//             }}
//           />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import AppRoutes from "./components/AppRoutes/AppRoutes";

const App: FC = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
