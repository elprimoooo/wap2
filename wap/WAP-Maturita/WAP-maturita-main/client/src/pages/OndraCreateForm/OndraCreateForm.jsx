import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createOndra } from "../../models/Ondra";

export default function OndraCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const ondra = await createOndra(formData);
    if (ondra.status === 201) {
      redirectToSuccessPage(ondra.payload._id);
    } else {
      setInfo(ondra.msg);
    }
  };
//tady name zustava vzdy
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdondra/${id}`);
  };

  return (
    <>
      <h1>Ondra create form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="sila"
          placeholder="Enter number of sila"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rychlost"
          placeholder="Enter if there is a rychlost"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create ondra</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
