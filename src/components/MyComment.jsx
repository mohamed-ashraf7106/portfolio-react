import React, { useState,useEffect} from "react";
import "./mycomment.css";

function MyComment() {
  const words = ['Welcome to my portfolio', "Have fun",'Nice to meet you'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [Writing, setWriting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        const currentWord = words[currentWordIndex];
        if (Writing) {
          if (index < currentWord.length) {
            setIndex(index + 1);
            return currentWord.slice(0, index + 1);
          } else {
            setWriting(false);
          }
        } else {
          if (index > 0) {
            setIndex(index - 1);
            return currentWord.slice(0, index - 1);
          } else {
            setWriting(true);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
        return prevText;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [index, Writing, currentWordIndex]);

  return (
    <span>
      {text}
      <span className="blinking">|</span>
    </span>
  );
}
export default MyComment;
