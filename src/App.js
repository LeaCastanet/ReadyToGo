import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isOn1, setIsOn1] = useState(false);
  const handleClickOn1 = () => {
    setIsOn1(!isOn1);
  };
  const [isOff1, setIsOff1] = useState(false);
  const handleClickOff1 = () => {
    setIsOff1(!isOff1);
  };

  const [isOn2, setIsOn2] = useState(false);
  const handleClickOn2 = () => {
    setIsOn2(!isOn2);
  };
  const [isOff2, setIsOff2] = useState(false);
  const handleClickOff2 = () => {
    setIsOff2(!isOff2);
  };

  const [isOn3, setIsOn3] = useState(false);
  const handleClickOn3 = () => {
    setIsOn3(!isOn3);
  };
  const [isOff3, setIsOff3] = useState(false);
  const handleClickOff3 = () => {
    setIsOff3(!isOff3);
  };

  return (
    <div className="container">
      <Header title="Ready to go" />
      <div className="items">
        <div className="buttonOnOff">
          <div className="ligne1">
            <button
              className={isOn1 ? "violet" : "white"}
              onClick={handleClickOn1}
            >
              on
            </button>
            <button
              className={!isOn1 ? "violet" : "white"}
              onClick={handleClickOn1}
            >
              off
            </button>
          </div>
          <div className="ligne2">
            <button
              className={isOn2 ? "violet" : "white"}
              onClick={handleClickOn2}
            >
              on
            </button>
            <button
              className={!isOn2 ? "violet" : "white"}
              onClick={handleClickOn2}
            >
              off
            </button>
          </div>
          <div className="ligne3">
            <button
              className={isOn3 ? "violet" : "white"}
              onClick={handleClickOn3}
            >
              on
            </button>
            <button
              className={!isOn3 ? "violet" : "white"}
              onClick={handleClickOn3}
            >
              off
            </button>
          </div>
        </div>
        <div className="buttonGoReset">
          <button className={isOn1 && isOn2 && isOn3 ? "green" : "red"}>
            <p>{isOn1 && isOn2 && isOn3 ? "🚀 Go ! 🚀" : "No way !"}</p>
          </button>
          <button
            className="buttonReset"
            onClick={() => {
              {
                setIsOn1(false);
                setIsOn2(false);
                setIsOn3(false);
              }
            }}
          >
            reset
          </button>
        </div>
      </div>
      <Footer footer="Made with React at LeReacteur by Léa" />
    </div>
  );
}

export default App;
