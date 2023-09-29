import React, { useContext, useEffect } from "react";
import { name } from "../App";
// import GlobleContext from "../context/GlobleContext";

function CallBack({ data, handleData }) {
    const context = useContext(name)

//   console.log("context",context);
  useEffect(()=>{
    // context.changeData()
  },[])
  return (
    <div>
      <button className="my-5" onClick={handleData}>click</button>
      <h1>{context}</h1>
      {data.map((value, index) => {
        return <p key={index}>{value + index}</p>;
      })}
    </div>
  );
}

export default React.memo(CallBack);
