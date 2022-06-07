import { useState } from "react";

const Fetchbasic = () =>{

  const buttonColor = {backgroundColor:'green',color:'#fff',padding:'10px 15px',borderRadius:'6px',border:'none',cursor:'pointer',marginLeft:'20px'}

  const [datas, setDatas] = useState();
 const getAPI = () => {fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {setDatas(data)})};

  return(
      <>
      <button onClick={getAPI} style={buttonColor}>Click to get user list</button>
      <pre>{JSON.stringify(datas,null,2)}</pre>
      </>

  );
}

export default Fetchbasic