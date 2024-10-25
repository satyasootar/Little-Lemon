import React from 'react';

export const Carousel = () => {
  const images = [
    { src: "./images/Dish1.svg", alt: "Dish 1" },
    { src: "./images/Dish2.svg", alt: "Dish 2" },
    { src: "./images/Dish3.svg", alt: "Dish 3" },
    { src: "./images/Dish4.jpg", alt: "Dish 4" },
    // Add more images if needed
  ];

  return (
    <div style={{ backgroundColor: "#495E57", color: "white", paddingBottom: "60px" }}>
      <div style={{ textAlign: "center", padding: "4rem 2rem", backgroundColor: "#333333" }}>
        <h2 style={{ color: "#F4CE14", fontSize: "36px", marginBottom: "1rem" }}>Gallery</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
