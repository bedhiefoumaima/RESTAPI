import {
  GET_ALL_CONTACT,
  GET_CONTACT,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
} from "../constants/contacts";
import axios from "axios";
/////////getAllContacts/////////////////
export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get("/api/contact");
    dispatch({ type: GET_ALL_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL });
  }
};

///////////////addContact/////////////////////
export const addContact = (contact, history) => async (dispatch) => {
  try {
    await axios.post("/api/contact", contact);
    history.push("/contacts");
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL });
  }
};
//////////////getContact//////////////////////
export const getContact = (id) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL });
  }
};
///////////////////editContact////////////////
export const editContact = (id, contact, history) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, contact);
    dispatch(getAllContacts());
    history.push("/contacts");
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL });
  }
};
///////////deleteContact///////////////////
export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getAllContacts());
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL });
  }
};