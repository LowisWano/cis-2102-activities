import axios from "axios";

export const getUserNotes = async (token) => {
  const response = await axios.get('/notes/', { headers: { "Authorization" : token } });
  return response.data;
}

export const createNote = async (noteEntry, token) => {
  if (!noteEntry || !token){
    throw Error("Fields should not be empty!")
  }

  try{
    const response = await axios.post('/notes/', noteEntry, { headers: { "Authorization" : token } });
    return response.data;
  }catch(e){
    console.log(e);
  }
}

export const deleteNote = async (id, token) => {
  if (!id || !token){
    throw Error("Delete note failed.")
  }

  try{
    const response = await axios.delete(`/notes/${id}`, { headers: { "Authorization" : token } });
    return response.data  
  }catch(e){
    console.log(e);
  }
}

export const editNote = async (note, token) => {
  if (!note || !token){
    throw Error("Delete note failed.")
  }

  try{
    const response = await axios.put(`/notes/${note.id}`, note, { headers: { "Authorization" : token } });
    return response.data  
  }catch(e){
    console.log(e)
  }
}