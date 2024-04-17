import { Link } from "react-router-dom";
import PawelLink from "./PawelLink";
import { useState, useEffect } from "react";
import { getAllPawels } from "../../models/Pawel";

export default function PawelList() {
  const [pawels, setPawels] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPawels();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPawels(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Pawels not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Pawels are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Pawel list</h1>
      {
        pawels.map((pawel, index) => (
            <PawelLink key={index} name={pawel.name} id={pawel._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
