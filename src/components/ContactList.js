import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Hamza",
  //     email: "h@",
  //   },
  // ];
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler()}
        key={contact.id}
      />
    );
  });
  return (
    <div>
      <div className="main" style={{ marginTop: "100px" }}>
        <h2>
          Contact List{" "}
          <Link to={"/add"}>
            <button type="submit" style={{ marginLeft: "20vh" }}>
              Add contact
            </button>
          </Link>
        </h2>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
