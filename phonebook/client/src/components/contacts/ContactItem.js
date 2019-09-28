import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  console.log(phone);
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        {}
        <span style={{ float: "right" }} className={type === "professional" ? "badge badge-success" : "badge-primary"}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="lsit">
        {email && (
          <li>
            <i className="fas fa-envelope-open"> {email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"> {phone}</i>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactItem;
