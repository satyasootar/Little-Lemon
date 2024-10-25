import React from 'react';
import { Carousel } from './Carousel';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#495E57", color: "white", paddingBottom: "60px" }}>
      {/* About Section */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "60px",
        padding: "2rem 1rem",
      }}>
        <div style={{ maxWidth: "718px" }}>
          <p className="title" style={{ color: "#F4CE14" }}>Little Lemon</p>
          <p className="title" style={{ fontWeight: "300", fontSize: "36px" }}>Chicago</p>
          <p className="description" style={{
            maxWidth: "100%",
            fontSize: "16px",
            marginBottom: "4rem",
            padding: "0 1rem",
          }}>
            Adrian and Mario, respected hotel owners in Chicago, are renowned for providing exceptional guest experiences.
            Combining modern amenities with personalized service, they ensure a comfortable and seamless stay for every visitor.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src="./images/Owners.svg" alt="Owners" style={{ width: "100%", maxWidth: "400px" }} />
        </div>
      </div>

      {/* History Section */}
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h2 style={{ color: "#F4CE14", fontSize: "32px", marginBottom: "1rem" }}>Our History</h2>
        <p style={{ fontSize: "16px", maxWidth: "700px", margin: "0 auto", padding: "0 1rem" }}>
          Founded in 1998, Little Lemon has grown from a small family-owned establishment to a beloved Chicago dining
          destination. Inspired by Mediterranean flavors and modern culinary techniques, Adrian and Mario have worked to create
          a space where guests can enjoy both comfort and elegance.
        </p>
      </div>

      {/* Team Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "2rem",
        gap: "20px",
      }}>
        <div style={{ width: "90%", maxWidth: "350px", textAlign: "center" }}>
          <img src="./images/Mario.svg" alt="Chef Mario" style={{ width: "100%", borderRadius: "10px" }} />
          <p style={{ color: "#F4CE14", fontSize: "20px", marginTop: "1rem" }}>Chef Mario</p>
          <p>Mario is the culinary mastermind behind Little Lemon’s unique flavors, blending Mediterranean techniques with fresh ingredients.</p>
        </div>
        <div style={{ width: "90%", maxWidth: "350px", textAlign: "center" }}>
          <img src="./images/Adrino.svg" alt="Chef Adrian" style={{ width: "100%", borderRadius: "10px" }} />
          <p style={{ color: "#F4CE14", fontSize: "20px", marginTop: "1rem" }}>Chef Adrian</p>
          <p>Adrian brings decades of hospitality experience to the team, focusing on making every guest feel at home.</p>
        </div>
      </div>

      {/* Gallery Section */}
      <Carousel />

      {/* Call to Action Section */}
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <h2 style={{ color: "#F4CE14", fontSize: "32px", marginBottom: "1rem" }}>Experience Little Lemon</h2>
        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "16px",
          marginBottom: "2rem",
          padding: "0 1rem",
        }}>
          Whether you’re visiting for a romantic dinner or a casual lunch with friends, Little Lemon welcomes you to experience
          our unique blend of comfort, flavor, and ambiance. Reserve a table and discover the difference.
        </p>
        <Link to='/reservation'>
          <button className='btn-1'>
            Book a Table
          </button>
        </Link>
      </div>
    </div>
  );
};
