import Contact from "../../ContactService/models/Contact.js";
// import {v4: uuidv4} from 'uuid';

async function GetContacts() {
  return await Contact.find({});
}

async function GetContact(id) {
  return await Contact.findOne({ contactid: id });
}

async function AddContact(contact) {
  let newContact = new Contact({
    // _id: uuidv4(),
    contactid: contact.contactid,
    firstname: contact.firstname,
    lastname: contact.lastname,
    email: contact.email,
    city: contact.city,
    phone: contact.phone,
  });

  return await newContact.save();
}

async function DeleteContact(id) {
  await Contact.deleteOne({ contactid: id });
}

async function UpdateContact(id, contact) {
  await Contact.updateOne(
    { contactid: id },
    {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      city: contact.city,
      phone: contact.phone,
    }
  );
}

export default {
  GetContacts,
  GetContact,
  AddContact,
  DeleteContact,
  UpdateContact,
};
