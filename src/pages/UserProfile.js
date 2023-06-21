import React from "react";

const UserProfile = (props) => (
  <div className="profile-wrap">
    <h3>{props.name}</h3>

    <table>
      <thead>
        {Object.keys(props).map((key) => {
          return <th key={key}>{key}</th>;
        })}
      </thead>
      <tbody>
        <tr>

        {Object.values(props).map((key) => {
          return <td key={key}>
          
            { key === props.picture ? <img src={key} alt="user-icon" /> : key}
            
            </td>;
        })}
    </tr>

      </tbody>
    </table>
  </div>
);

export default UserProfile;
