import { FC, useRef, useEffect } from "react";
import styles from "./Messages.module.scss";
import Message from "../Message/Message";
import { TypeMessage } from "../../module/ChatMessageType";

interface MessageProps {
  messages: TypeMessage[];
}

const Messages: FC<MessageProps> = ({ messages }) => {
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <>
      <div className={styles.container} ref={messageListRef}>
        {messages.map((msg, index) => (
          <Message message={msg} key={index} />
        ))}
      </div>
    </>
  );
};

export default Messages;
