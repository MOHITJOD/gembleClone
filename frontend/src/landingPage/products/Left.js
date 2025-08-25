import React from "react";

function Left({
  imageURL,
  productName,
  productDec,
  link1,
  link2,
  link1Name,
  link2Name
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col p-4">
          <img src={imageURL} alt="proImg"></img>
        </div>
        <div
          className="col "
          style={{ paddingLeft: "9rem", paddingTop: "4rem" }}
        >
          <h3 className="pb-3">{productName}</h3>
          <p className="fs-5">{productDec}</p>
          <a
            href={link1}
            className="text-decoration-none fs-5"
            style={{ display: "inline-block" }}
          >
            {link1Name}
          </a>
          <a
            href={link2}
            className="text-decoration-none fs-5 ms-5"
            style={{ display: "inline-block" }}
          >
           {link2Name}
          </a>
         <div> <img
            src="assets/images/googlePlayBadge.svg"
            alt="playstor"
            className="me-5 mt-5"
          ></img>
          <img src="assets/images/appstorebadge.svg" alt="appstore" className="mt-5"></img></div>
        </div>
      </div>
    </div>
  );
}

export default Left;
