import { FC } from "react";
import styles from "./Message.module.scss";

import { TypeMessage } from "../../module/ChatMessageType";

interface MessageProps {
  message: TypeMessage;
}

const Message: FC<MessageProps> = ({ message }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__sender}>{message.sender}</div>
      <div className={styles.item__message}>{message.message}</div>
    </div>
  );
};

export default Message;
