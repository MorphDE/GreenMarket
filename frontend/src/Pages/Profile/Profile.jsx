import "./Profile.css";
import GoBack from "./../../Components/GoBack/GoBack";
import React, { useContext, useState } from "react";
import { TokenContext, UserContext } from "../../Context/Contexts";
import { backendUrl } from "../../api/api";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);

  const [firstName, setFirstname] = useState(user?.firstName);
  const [lastName, setLastname] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [street, setStreet] = useState(user?.address.street);
  const [houseNumber, setHouseNumber] = useState(user?.address.houseNumber);
  const [city, setCity] = useState(user?.address.city);

  const [errorMessage, setErrorMessage] = useState("");

  const updateProfile = async (e) => {
    console.log("updateProfile launched");

    e.preventDefault();

    const res = await fetch(`${backendUrl}/api/v1/users/updateUser`, {
      headers: { "Content-Type": "application/json", authorization: `Bearer ${token}` },
      method: "PATCH",
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        address: {
          street,
          houseNumber,
          city,
        },
      }),
      credentials: "include",
    });

    const data = await res.json();

    if (!data.result) return setErrorMessage(data.message || "Failed to verify update Profile");

    console.log(errorMessage);
    console.log("Profile Update successful");
    console.log(data.result);
  };

  return (
    <section className="profile-container">
      <GoBack title={"My Profile"} />
      <div className="profile-top">
        <img src="./testprofileimage.png" alt="Image not Found" />
        <label for="file-upload" className="custom-file-upload">
          <i className="fa-solid fa-camera"></i>
        </label>
        <input type="file" name="fileupload" id="file-upload" />
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <p className="info-title">Firstname</p>
          <input type="text" name="user-firstname" id="userfirstname" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="profile-info">
          <p className="info-title">Lastname</p>
          <input type="text" name="user-lastname" id="userlastname" value={lastName} onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className="profile-info">
          <p className="info-title">E-Mail</p>
          <input type="text" name="user-email" id="useremail" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="profile-info">
          <p className="info-title">Street</p>
          <input type="text" name="street" id="street" value={street} onChange={(e) => setStreet(e.target.value)} />
          <p className="info-title">House Number</p>
          <input type="text" name="housenumber" id="housenumber" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
          <p className="info-title">City</p>
          <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
      </div>
      <div className="profile-bottom">
        <button className="btn-light" onClick={updateProfile}>
          Update Profile
        </button>
      </div>
    </section>
  );
};

export default Profile;
