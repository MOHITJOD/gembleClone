import React from "react";

function Right({name,description,link,linkName,img}) {
  return (
    <div className="container" style={{marginTop:"10rem" , marginBottom:"10rem"}}>
      <div className="row ">
        <div className="col">
          <h3>{name}</h3>
          <p className="fs-5">
           {description}
          </p>
          <a className="text-decoration-none fs-5" href={link}>{linkName}</a>
        </div>
        <div className="col">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Right;
