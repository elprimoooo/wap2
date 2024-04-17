import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPawel } from "../../models/Pawel";

export default function PawelCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const pawel = await createPawel(formData);
    if (pawel.status === 201) {
      redirectToSuccessPage(pawel.payload._id);
    } else {
      setInfo(pawel.msg);
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
    return navigate(`/createdpawel/${id}`);
  };

  return (
    <>
      <h1>Pawel create form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="nalada"
          placeholder="Enter nalada"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="chytrost"
          placeholder="Enter chytrost"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create pawel</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
