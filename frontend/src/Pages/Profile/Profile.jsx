import "./Profile.css";
import GoBack from "./../../Components/GoBack/GoBack";
import React, { useContext } from "react";
import { UserContext } from "../../Context/Contexts";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <section className="profile-container">
      <GoBack title={"My Profile"} />
      <div className="profile-top">
        <img src="./testprofileimage.png" alt="Image not Found" />
        <label for="file-upload" class="custom-file-upload">
          <i className="fa-solid fa-camera"></i>
        </label>
        <input type="file" name="fileupload" id="file-upload" />
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <p className="info-title">Firstname</p>
          <input
            type="text"
            name="user-firstname"
            id="userfirstname"
            defaultValue={user?.firstName}
          />
        </div>
        <div className="profile-info">
          <p className="info-title"></p>
          <p className="info-title">Lastname</p>
          <input
            type="text"
            name="user-lastname"
            id="userlastname"
            defaultValue={user?.lastName}
          />
        </div>
        <div className="profile-info">
          <p className="info-title">E-Mail</p>
          <input
            type="text"
            name="user-email"
            id="useremail"
            defaultValue={user?.email}
          />
        </div>
        <div className="profile-info">
          <p className="info-title">Shipping Adress</p>
          <input
            type="text"
            name="user-adress"
            id="useradress"
            defaultValue={"Test"}
          />
        </div>
      </div>
      <div className="profile-bottom">
        <button className="btn-light">Update Profile</button>
      </div>
    </section>
  );
};

export default Profile;
