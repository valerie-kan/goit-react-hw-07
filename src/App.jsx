import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/serchBox/SearchBox";
import { ContactList } from "./components/contactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
