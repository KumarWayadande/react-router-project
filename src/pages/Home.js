import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const handleNavigate = (urlPath) => {
        navigate(urlPath);
    }

  return (
    <>
      <h1>This is home page</h1>
      <button onClick={() => handleNavigate("pages")}>Goto Pages</button>
    </>
  );
}
