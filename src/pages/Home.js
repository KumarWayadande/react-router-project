import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/pages");
    }

  return (
    <>
      <h1>This is home page</h1>
      <button onClick={handleNavigate}>Goto Pages</button>
    </>
  );
}
