import { Link } from "react-router-dom";
import SchejbalLink from "./SchejbalLink";
import { useState, useEffect } from "react";
import { getAllSchejbals } from "../../models/Schejbal";

export default function SchejbalList() {
  const [schejbals, setSchejbals] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllSchejbals();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSchejbals(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Schejbals not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Schejbals are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Schejbal list</h1>
      {
        schejbals.map((schejbal, index) => (
            <SchejbalLink key={index} name={schejbal.name} id={schejbal._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
