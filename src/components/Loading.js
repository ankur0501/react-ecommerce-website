import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Loading({ text = "Loading" }) {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = setInterval(() => {
      setContent((prev) => (prev === `${text}...` ? text : `${prev}.`));
    }, 300);

    return () => clearInterval(id);
  }, [text]);

  return (
    <div style={styles.container}>
      <ClipLoader color="#FF6F61" size={30} />
      <span style={styles.text}>{content}</span>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "18px",
  },
  text: {
    marginLeft: "10px",
    color: "#FF6F61",
    verticalAlign: "middle",
  },
};
