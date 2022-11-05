import { Data } from "./data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <Link key={item.id} id={item.id} data-aos={item.aosStyle} to={item.link} className="link">
          {item.title}
        </Link>
      ))}
    </div>
  );
}
