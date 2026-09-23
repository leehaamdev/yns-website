import { useEffect, useState, useRef } from "react";

const AutoType = ({
  text,
  delayMS = 100,
}: {
  text: string;
  delayMS?: number;
}) => {
  const [arrayText, setArrayText] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const startTyping = () => {
    setArrayText([]);
    setIndex(0);
    setIsTyping(true);

    text.split("").forEach((char, i) => {
      const timeout = setTimeout(() => {
        setArrayText((prev) => [...prev, char]);
        setIndex(i + 1);
        if (i + 1 === text.length) {
          setIsTyping(false);
        }
      }, i * delayMS);
      timeoutsRef.current.push(timeout);
    });
  };

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      startTyping();
    }, 500); // Delay before typing starts

    return () => {
      clearTimeout(initialDelay);
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  // useEffect(() => {
  //   if (!isTyping && index === text.length) {
  //     const pause = setTimeout(() => {
  //       startTyping();
  //     }, 5000); // Pause after complete typing

  //     return () => clearTimeout(pause);
  //   }
  // }, [isTyping]);

  return <h1 className="h-10">{arrayText.join("")}</h1>;
};

export default AutoType;
