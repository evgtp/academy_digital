import { FC, useState } from "react";

import styles from "./AddMessageForm.module.scss";

interface AddMessageFormProps {
  ws: WebSocket | null;
}

const AddMessageForm: FC<AddMessageFormProps> = ({ ws }) => {
  const [message, setMessage] = useState("");

  const handleMessageSend = () => {
    ws?.send(
      JSON.stringify({
        type: "message",
        message,
      })
    );
    setMessage("");
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default AddMessageForm;
