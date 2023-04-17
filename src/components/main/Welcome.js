import React, { useState, useEffect } from "react";

const Welcome = () => {
  const [galleryData, setGalleryData] = useState([]);
  const loadGalleryData = async () => {
    const resp = await fetch(
      "https://d1ar9s9ru9.execute-api.us-east-1.amazonaws.com/Production/gallery"
    );
    let jsonData = await resp.json();

    setGalleryData(jsonData);
  };
  useEffect(() => {
    loadGalleryData();
  });
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryData.map((image) => {
            if (image.name === "Attractions") {
              return (
                <img
                  className="hidesm"
                  src={image.url}
                  alt={`Intro Gallery ${image.name} Sample Pictures`}
                />
              );
            } else {
              return (
                <img
                  src={image.url}
                  alt={`Intro Gallery ${image.name} Sample Pictures`}
                />
              );
            }
          })}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
