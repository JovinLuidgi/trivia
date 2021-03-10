import React, { Component, useState, useEffect } from "react";

function Image(props) {
  let [cardname, setCardName] = useState(null);

  // const example = `hello ${someVariable}`;

  useEffect(() => {
    fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURI(
        props.cname
      )}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.data[0]);
        setCardName(data);
      });
  }, []);
  return <img src={cardname?.data[0].card_images[0].image_url} />;
  // return null;
}

export default Image;
