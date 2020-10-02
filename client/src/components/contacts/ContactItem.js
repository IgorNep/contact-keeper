import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

export const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { name, email, phone, type, _id } = contact;
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const onDeleteClick = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className="card bg-light ">
      <h2 className="card-title text-left">
        {name}{" "}
        <span
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
          style={{ float: "right" }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h2>

      <div className="card-body">
        {" "}
        <ul className="list">
          {email && (
            <li>
              <i className="fa fa-envelope-open"></i> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fa fa-phone"></i> {phone}
            </li>
          )}
        </ul>
        <p>
          <button
            className="btn btn-sm btn-dark"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-sm btn-danger" onClick={onDeleteClick}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

ContactItem.prototypes = {
  contact: PropTypes.object.isRequired,
};
