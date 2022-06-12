import { useEffect, useState } from "react";

const Fetchbasic = () => {

  const [datas, setDatas] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {setDatas(data)})
  },[]);
  
  return(
      <>
      <pre>{JSON.stringify(datas,null,2)}</pre>
      </>

  );
}

export default Fetchbasic