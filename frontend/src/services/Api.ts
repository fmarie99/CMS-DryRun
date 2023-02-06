import axios from "axios";
import { Contact } from "../interfaces/Contact";
import { CreateContact } from "../interfaces/CreateContact";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Create CRUD for the API to get, post, put and delete data
// Path: frontend\src\services\Crud.ts

export const getContacts = async (): Promise<Contact[]> => {
  const { data } = await api.get("/contacts");
  return data;
};

export const getContact = async (id: string): Promise<Contact> => {
  const { data } = await api.get(`/contacts/${id}`);
  return data;
};

export const createContact = async (contact: CreateContact): Promise<Contact> => {
  const { data } = await api.post("/contacts", contact);
  return data;
};

export const updateContact = async (contact: Contact): Promise<Contact> => {
  const { data } = await api.put(`/contacts/${contact.id}`, contact);
  return data;
};

export const deleteContact = async (id: string): Promise<Contact> => {
  const { data } = await api.delete(`/contacts/${id}`);
  return data;
};
