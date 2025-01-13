import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('https://backend-url.example.com/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(response.data);
    };
    fetchContacts();
  }, [token]);

  return (
    <div>
      <UserMenu />
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
