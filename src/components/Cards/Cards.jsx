import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCards = () => {
  const cards = [
    {
      title: 'Criminal Law',
      text: 'Expert advice and representation in criminal matters.',
      img: 'https://cdn.pixabay.com/photo/2019/04/14/13/36/scam-4126798_1280.jpg'
    },
    {
      title: 'Family Law',
      text: 'Compassionate support in family and divorce cases.',
      img: 'https://cdn.pixabay.com/photo/2023/08/11/06/02/bride-8182890_1280.jpg'
    },
    {
      title: 'Corporate Law',
      text: 'Legal solutions for businesses of all sizes.',
      img: 'https://cdn.pixabay.com/photo/2017/10/30/18/44/hacking-2903156_1280.jpg   '
    }
  ];
  return (
    <div className="container-fluid px-0 my-5">
      <div className="row g-4 justify-content-center mx-0">
        {cards.map((card, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <div
              className="position-relative d-flex flex-column justify-content-end"
              style={{
                height: "400px",
                width: "300px",
                borderRadius: "16px",
                overflow: "hidden",
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "20px",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                  color: "white",
                }}
              >
                <h5 style={{ margin: 0 }}>{card.title}</h5>
                <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};

export default CustomCards;
