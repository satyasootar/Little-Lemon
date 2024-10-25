import React from 'react';
import { Cards } from './Cards'; // Assuming you have a Cards component for individual items

const menuItems = {
  appetizers: [
    {
      title: "Greek Salad",
      description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.",
      pricing: "$12.99",
      img: "./images/HighlightCardImg-1.png"
    },
    {
      title: "Bruschetta",
      description: "Our bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil.",
      pricing: "$6.99",
      img: "./images/HighlightCardImg-3.png"
    },
    {
      title: "Bruschetta",
      description: "Our bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil.",
      pricing: "$6.99",
      img: "./images/HighlightCardImg-3.png"
    },
    {
      title: "Bruschetta",
      description: "Our bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil.",
      pricing: "$6.99",
      img: "./images/HighlightCardImg-3.png"
    },
  ],
  mainCourses: [
    {
      title: "Lemon Herb Grilled Chicken",
      description: "Juicy grilled chicken marinated in lemon and herbs, served with seasonal vegetables.",
      pricing: "$15.99",
      img: "/images/HighlightCardImg-1.png"
    },
    {
      title: "Pasta Primavera",
      description: "Pasta tossed with fresh vegetables and a light olive oil sauce.",
      pricing: "$13.99",
      img: "/images/HighlightCardImg-1.png"
    },
    {
      title: "Pasta Primavera",
      description: "Pasta tossed with fresh vegetables and a light olive oil sauce.",
      pricing: "$13.99",
      img: "/images/HighlightCardImg-1.png"
    },
    {
      title: "Pasta Primavera",
      description: "Pasta tossed with fresh vegetables and a light olive oil sauce.",
      pricing: "$13.99",
      img: "/images/HighlightCardImg-1.png"
    },
  ],
  desserts: [
    {
      title: "Lemon Tart",
      description: "A refreshing lemon tart topped with whipped cream.",
      pricing: "$5.99",
      img: "/images/HighlightCardImg-2.png"
    },
    {
      title: "Chocolate Mousse",
      description: "Rich and creamy chocolate mousse served with a hint of mint.",
      pricing: "$6.99",
      img: "/images/HighlightCardImg-2.png"
    },
  ],
  drinks: [
    {
      title: "Fresh Lemonade",
      description: "Refreshing lemonade made with fresh lemons and a hint of mint.",
      pricing: "$3.99",
      img: "/images/HighlightCardImg-1.png"
    },
    {
      title: "Fresh Lemonade",
      description: "Refreshing lemonade made with fresh lemons and a hint of mint.",
      pricing: "$3.99",
      img: "/images/HighlightCardImg-1.png"
    },
    {
      title: "Fresh Lemonade",
      description: "Refreshing lemonade made with fresh lemons and a hint of mint.",
      pricing: "$3.99",
      img: "/images/HighlightCardImg-1.png"
    },
  ],
};

export const Menu = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", fontSize: "36px", color: "#495E57", marginBottom: "40px" }}>
        Food Menu
      </h2>

      {Object.entries(menuItems).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "60px" }}>
          <h3 style={{ fontSize: "30px", color: "#F4CE14" }}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap", // Allows items to wrap into new lines on smaller screens
            justifyContent: "flex-start", // Align items to the left
            gap: "20px", // Add gap between cards
          }}>
            {items.map((item, index) => (
              <div key={index} style={{
                flex: "1 1 calc(25% - 20px)", // Default for laptop view
                maxWidth: "calc(25% - 20px)", // Default for laptop view
                marginBottom: "20px",
                '@media (max-width: 768px)': {
                  flex: "1 1 100%", // Stack each card on mobile
                  maxWidth: "100%",
                }
              }}>
                <Cards
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  pricing={item.pricing}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
