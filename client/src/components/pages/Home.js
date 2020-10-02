import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import ContactFilter from "../contacts/ContactFilter";
import { ContactForm } from "../contacts/ContactForm";
import { Contacts } from "../contacts/Contacts";

export const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(
    () => {
      loadUser();
    },
    //eslint-disable-next-line
    []
  );
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};
