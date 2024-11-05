import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contactsList = useSelector(selectContacts);
  const filterWord = useSelector(selectNameFilter);

  const filteredList = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filterWord.toLowerCase().trim())
  );

  return (
    <ul className={css.contactList}>
      {filteredList.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};
