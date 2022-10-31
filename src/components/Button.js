import { Data } from "./data";
import { useEffect, useState } from "react";

export default function Button() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    Data().then((data) => {
      setUserData(data);
    }).catch(err => console.log(err.message))
  });

  return (
    <div className="links">
      {userData && userData.map((item) => (
        <a key={item.id} id={item.id} href={item.link} className="link">
          {item.title}
        </a>
      ))}
    </div>
  );
}
