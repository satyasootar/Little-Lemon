import React from 'react';

export const About = () => {
  return (
    <div style={{ height: "auto", backgroundColor: "#495E57", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "718px", paddingTop: "10px" }}>
        <p className='title' style={{ color: "#F4CE14" }}>Little Lemon</p>
        <p className='title' style={{ fontWeight: "300", fontSize: "44px", color: "white" }}>Chicago</p>
        <p className='description' style={{ width: "100%", maxWidth: "453px", color: "white", marginBottom: "4rem" }}>
          Adrian and Mario, respected hotel owners in Chicago, are renowned for providing exceptional guest experiences. Combining modern amenities with personalized service, they ensure a comfortable and seamless stay for every visitor.
        </p>
      </div>

      <div style={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
        <img src='./images/Owners.svg' alt='Owners' style={{ width: "100%", maxWidth: "500px" }} />
      </div>
    </div>
  );
};
