import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

export const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, updateContact, clearCurrent } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: "", email: "", phone: "", type: "personal" });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    // setContact({ name: "", email: "", phone: "", type: "personal" });
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit contact" : "Add contact"}
      </h2>
      <input
        type="text"
        value={name}
        name="name"
        placeholder="name"
        onChange={onChange}
      />
      <input
        type="text"
        value={email}
        name="email"
        placeholder="email"
        onChange={onChange}
      />
      <input
        type="text"
        value={phone}
        name="phone"
        placeholder="phone"
        onChange={onChange}
      />
      <h5>Contact type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      Personal
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add contact"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-secondary btn-block" onClick={clearAll}>
            Clear Fields
          </button>
        </div>
      )}
    </form>
  );
};
