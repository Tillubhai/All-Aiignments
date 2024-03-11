import express from "express";
const router = express.Router();
import {
  GetContacts,
  GetContact,
  AddContact,
  DeleteContact,
  UpdateContact,
} from "../../ContactService/Controllers/contactController.js";
import VerifyTokenMiddleware from "../auth/auth.js";

// router.get("/contacts", VerifyTokenMiddleware, GetContacts);
// router.get("/contacts/:id", VerifyTokenMiddleware, GetContact);
// router.post("/contacts", VerifyTokenMiddleware, AddContact);
// router.delete("/contacts/:id", VerifyTokenMiddleware, DeleteContact);
// router.put("/contacts/:id", VerifyTokenMiddleware, UpdateContact);

router.get("/contacts", GetContacts);
router.get("/contacts/:id", GetContact);
router.post("/contacts", AddContact);
router.delete("/contacts/:id", DeleteContact);
router.put("/contacts/:id", UpdateContact);
export default router;
