import repo from "../../ContactService/Repository/ContactRepository.js";
import { v4 as uuid } from "uuid";

async function GetContacts() {
  return await repo.GetContacts();
}

async function GetContact(id) {
  let res = await repo.GetContact(id);
  if (res == null) {
    throw Error(`Contact with contact id: ${id} does not exists`);
  } else {
    return res;
  }
}

async function AddContact(contact) {
  let res = await repo.GetContact(contact.contactid);
  if (res != null) {
    throw Error(`Contact with contact id: ${contact.contactid} already exists`);
  } else {
    await repo.AddContact(contact);
  }
}

async function DeleteContact(id) {
  let res = await repo.GetContact(id);
  if (res == null) {
    throw Error(`Contact with contact id: ${id} does not exists`);
  } else {
    await repo.DeleteContact(id);
  }
}

async function UpdateContact(id, contact) {
  let res = await repo.GetContact(id);
  if (res == null) {
    throw Error(`Contact with contact id: ${id} does not exists`);
  } else {
    await repo.UpdateContact(id, contact);
  }
}

export default {
  GetContacts,
  GetContact,
  AddContact,
  DeleteContact,
  UpdateContact,
};
