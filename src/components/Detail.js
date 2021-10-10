import React from "react";

import products from "../products";
import { useParams, Redirect } from "react-router";

function Detail() {
  const { ProductSlug } = useParams();
  const cookie = products.find((product) => product.slug === ProductSlug);
  if (!cookie) return <Redirect to="/"></Redirect>;
  return (
    <div className="detail">
      {cookie && ( // if there is cookie show its data
        <>
          <h5>{cookie.name}</h5>
          <img src={cookie.image} alt="cookie" />
          <p>{cookie.price} KD</p>
          <p>{cookie.description}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
