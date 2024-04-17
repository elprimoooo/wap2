import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createDavid } from "../../models/David";

export default function DavidCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const david = await createDavid(formData);
    if (david.status === 201) {
      redirectToSuccessPage(david.payload._id);
    } else {
      setInfo(david.msg);
    }
  };
//tady name zustava
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createddavid/${id}`);
  };

  return (
    <>
      <h1>David create form</h1>

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
          name="iq"
          placeholder="Enter number of iq"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="vek"
          placeholder="Enter vek"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create david</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
