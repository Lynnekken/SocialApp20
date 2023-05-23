import React from "react";
import Heading from "../../GenericComponents/Heading";



  
const Profile = () => {
  return (
    <div>
      <Heading title={"Profile"} className={"heading1"}/>
      
      <div>
      <img src="img/rad.jpg"/> 
      <div className="img-fluid" alt="ProfileImage"></div>
      <div className="img-thumbnail" ></div>
      </div>

      <label>

      <div className="row g-3">
  <div className="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Location/City</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Location/City"/>
  </div>



</div>

</label>
</div>
  
  );
};
  
export default Profile;