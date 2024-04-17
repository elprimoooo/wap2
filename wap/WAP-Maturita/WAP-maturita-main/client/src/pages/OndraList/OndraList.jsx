import { Link } from "react-router-dom";
import OndraLink from "./OndraLink";
import { useState, useEffect } from "react";
import { getAllOndras } from "../../models/Ondra";

export default function OndraList() {
  const [ondras, setOndras] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllOndras();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setOndras(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Ondras not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Ondras are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Ondra list</h1>
      {
        ondras.map((ondra, index) => (
            <OndraLink key={index} name={ondra.name} id={ondra._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
