import { FC } from "react";

import style from "./Chat.module.scss";
import AddMessageForm from "../AddMessageForm/AddMessageForm";
import Messages from "../Messages/Messages";
import { TypeMessage } from "../../module/ChatMessageType";

interface ChatProps {
  messages: TypeMessage[];
  ws: WebSocket | null;
}

const Chat: FC<ChatProps> = ({ messages, ws }) => {
  return (
    <div className={style.chat}>
      <Messages messages={messages} />
      <AddMessageForm ws={ws} />
    </div>
  );
};

export default Chat;
