import { Link, useParams } from "react-router-dom";

export default function ProjectDetail() {
  const {productId} = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{`Product Id : ${productId}`}</p>
      <button><Link to=".." relative="path">Back</Link></button>
    </>
  );
}
