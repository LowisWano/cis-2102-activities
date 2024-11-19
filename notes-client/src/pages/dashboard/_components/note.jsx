import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import EditNoteModal from "./edit-note";
import { deleteNote, getUserNotes } from "@/services/notes.service";

export default function Note({ note, setNotes }) {
  const cachedUser = JSON.parse(localStorage.getItem("token"));

  const deleteHandler = async () => {
    try{
      const result = await deleteNote(note.id, cachedUser.token);
      const updatedNotes = await getUserNotes(cachedUser.token);
      setNotes(updatedNotes)
    }catch(e){
      console.log(e)
    }
    
  }
  return (
    <Card className="flex justify-between">
      <div>
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div>
            {
              note.content
            }
          </div>
        </CardContent>
      </div>
    
    <div className="flex justify-center items-center p-3 gap-2">
      <EditNoteModal note={note} setNotes={setNotes}/>
      <Button variant="destructive" onClick={deleteHandler}><Trash2/></Button>
    </div>
      
    </Card>
  )
}