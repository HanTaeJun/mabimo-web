import { useEffect, useState } from "react";

function Home() {
  const [msg, setMsg] = useState("");

  const serverMsgTest = () => {
    fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setMsg(data.message))
    .catch((err) => {
      console.error("API 호출 오류: ", err);
      // alert("API 호출 오류: "+err);
    });
  }

  const serverMsgReset = () => {
    setMsg("");
  }

  return <div>
    <h2>홈페이지입니다 {msg}</h2>
    <button onClick={serverMsgTest}>TEST</button>
    <button onClick={serverMsgReset}>RESET</button>
  </div>;
}
export default Home;
