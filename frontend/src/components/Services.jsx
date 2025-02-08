import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://mycitylife.ca/wp-content/uploads/2020/02/top-10-restaurants.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "https://tse1.mm.bing.net/th?id=OIP.J3D2eyzZ7WaPpfrWepp2UgHaE8&pid=Api&P=0&h=180",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "https://tse2.mm.bing.net/th?id=OIP.UkI53SjkBXPg6y4VC4WxXwHaEU&pid=Api&P=0&h=180",
      title: "Camping Trip Planning",
    },
    {
      id: 4,
      url: "https://blog.dubaicityguide.com/site/wp-content/uploads/2023/06/DEF-2023_Summit_Expo-City_01.jpg",
      title: "Game Night Planning",
    },
    {
      id: 5,
      url: "https://png.pngtree.com/back_origin_pic/03/91/31/216a8c258305188af56217c3b58b99c5.jpg",
      title: "Party Planning",
    },
    {
      id: 6,
      url: "https://www.wedinspire.com/wp-content/uploads/2020/06/Hales.jpg",
      title: "Wedding Planning",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;