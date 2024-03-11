import service from "../../ContactService/Services/ContactService.js";

async function GetContacts(req, res) {
  res.status(200).send(await service.GetContacts());
}

async function GetContact(req, res) {
  try {
    let result = await service.GetContact(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
}

async function AddContact(req, res) {
  try {
    await service.AddContact(req.body);
    res.status(201).send({ message: "Contact added successfully" });
  } catch (err) {
    res.status(409).send({ status: 409, message: err.message });
  }
}

async function DeleteContact(req, res) {
  try {
    await service.DeleteContact(req.params.id);
    res.status(200).send({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
}

async function UpdateContact(req, res) {
  try {
    await service.UpdateContact(req.params.id, req.body);
    res.status(200).send({ message: "Contact updated successfully" });
  } catch (err) {
    res.status(404).send({ status: 404, message: err.message });
  }
}

export { GetContacts, GetContact, AddContact, DeleteContact, UpdateContact };
