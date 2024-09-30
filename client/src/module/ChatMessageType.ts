export interface User {
  username: string;
  password: string;
}

// export interface TypeMessage {
//   type: string;
//   sender?: string;
//   message?: string;
//   success?: boolean;
//   error?: string;
// }

export interface TypeMessage {
  type?: string;
  sender?: string;
  message?: string;
  success?: boolean;
  error?: string;
}

export interface WebSocketMessage {
  type: "auth" | "message" | "register";
  username?: string;
  password?: string;
  message?: string;
  success?: boolean;
  error?: string;
}
