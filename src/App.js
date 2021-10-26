import './App.css';
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [dataArray, setDataArray] = useState([]);


  function removeButtonClicked() {
    if (counter === 0) { }
    else {
      setCounter(counter - 1)
      makeStars(counter - 1)
    }
  }

  function addButtonClicked() {
    setCounter(counter + 1)
    makeStars(counter + 1)
  }

  function makeStars(counter) {
    var array = new Array(counter).fill("hi")
    setDataArray(array)
  }

  return (
    <div className="App">
      <div id="heading">
        <div class="bold">LOGO</div>
        <div>menu</div>
      </div>

      <center><div id="main">
        <div><button id="remove" type="submit"
          onClick={removeButtonClicked} >remove 1</button></div>
        <div id="counterDiv" class="bold largeText">{counter}</div>
        <div><button id="add" type="submit"
          onClick={addButtonClicked}>Add 1</button></div>
      </div></center>

      <center>
        <div id="starDiv">
          {dataArray.map(() => {
            return (
              <div className="starBox">
                <img className="starBoxImage" src="./starLogo.png" />
              </div>
            )
          })}
        </div>
      </center>
    </div>
  );
}

export default App;
