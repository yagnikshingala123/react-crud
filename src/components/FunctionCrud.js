import React, { useCallback, useState } from "react";
import CallBack from "./CallBack";

const FunctionCrud = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  // const decrement = () => {
  //   if(count !== 0){
  //     setCount(count-1)
  //   }
  // }
  // const handleData = () => {
  //   setData([...data, "entry"]);
  // };

  const handleData = useCallback(() => {
    setData([...data, "entry"]);
  }, [data]);
  

  return (
    <div>
      <CallBack data={data} handleData={handleData} />
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      {/* <button onClick={decrement}>
      -
    </button> */}
    </div>
  );
};

export default FunctionCrud;
