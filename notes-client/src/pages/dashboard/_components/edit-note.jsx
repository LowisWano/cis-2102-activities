import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react";

import { editNote, getUserNotes } from "@/services/notes.service"

export default function EditNoteModal({ note, setNotes }) {
  const [editedNote, setEditedNote] = useState(note);
  const [open, setOpen] = useState(false);

  const cachedUser = JSON.parse(localStorage.getItem("token"));
  const editNoteHandler = async (e) => {
    try{
      e.preventDefault();
      await editNote(editedNote, cachedUser.token);
      const updatedNotes = await getUserNotes(cachedUser.token);
      setNotes(updatedNotes);
      setOpen(false);
    }catch(e){
      console.log(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value, 
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button>
        <Pencil/>
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[500px]">
      <DialogHeader>
        <DialogTitle>Edit Note</DialogTitle>
        <DialogDescription>
          Edit your note by changing the details below.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={editNoteHandler}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={editedNote.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Content</Label>
            <Textarea
              id="content"
              name="content"
              value={editedNote.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-4">
            </div>
          </div>
        </div>
        <DialogFooter className="mt-4">
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  )
}