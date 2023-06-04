import React, { useState } from "react";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: { city: "", country: "India" },
  });

  const updateName = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const updateEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const updateCity = (e) => {
    setUserData({
      ...userData,
      address: { ...userData.address, city: e.target.value },
    });
  };

  return (
    <>
      <div>ContactForm</div>
      <p>
        <input value={userData.name} placeholder="name" onChange={updateName} />
      </p>
      <p>
        <input
          value={userData.email}
          placeholder="email"
          onChange={updateEmail}
        />
      </p>
      <p>
        <input
          value={userData.address.city}
          placeholder="city"
          onChange={updateCity}
        />
      </p>
      <p style={{ backgroundColor: "#FFD580" }}>{JSON.stringify(userData)}</p>
    </>
  );
};

export default ContactForm;
