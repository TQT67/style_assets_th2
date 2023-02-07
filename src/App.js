import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import style from "./styles.module.css";

function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return (current = current + 1);
    });
  };
  const textStyle = numClicked % 2 === 0 ? style.textBlue : style.textRed;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h2 className={textStyle}>You clicked {numClicked} times</h2>
      {/* Dùng Styled-Components */}
      {/* <StyledText numClicked={numClicked}>You clicked {numClicked} times</StyledText> */}
    </div>
  );
}
// Dùng CSS Inline
{
  /* <h2
  style={{
    color: numClicked % 2 === 0 ? "blue" : "red",
  }}
>
  You clicked {numClicked} times
</h2>; */
}

export default App;
