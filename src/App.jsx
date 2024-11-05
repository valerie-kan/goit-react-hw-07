import "./App.css";

import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/serchBox/SearchBox";
import { ContactList } from "./components/contactList/ContactList";

function App() {
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
