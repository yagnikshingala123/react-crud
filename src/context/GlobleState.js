import GlobleContext from "./GlobleContext";
import React, { useState } from "react";

function GlobleState(props) {
  const [state, setState] = useState({ name: "yagnik", age: "23" });

  const changeData = () => {
    setTimeout(() => {
        setState({
            name:"yash",
            age:"20"
        })
    },2000);
  };
  return (
    <GlobleContext.Provider value={{state,changeData}}>
      {props.children}
    </GlobleContext.Provider>
  );
}

export default GlobleState;
