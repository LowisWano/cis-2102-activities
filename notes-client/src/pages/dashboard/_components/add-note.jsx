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
import { CopyPlus } from "lucide-react"

import { getUserNotes, createNote } from "@/services/notes.service"


export default function AddNoteModal({ setNotes }) {
  const [open, setOpen] = useState(false);

  const cachedUser = JSON.parse(localStorage.getItem("token"));

  const addNoteHandler = async (e) => {
    e.preventDefault()
    const fields = e.target

    try{
      const newNote = await createNote({
        title: fields.title.value,
        content: fields.content.value,
      }, cachedUser.token);  
      const updatedNotes = await getUserNotes(cachedUser.token);
      setNotes(updatedNotes)
      setOpen(false);
    }catch(e){
      console.log(e)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <span className="hidden sm:inline">Add Note</span>
          <CopyPlus className="h-4 w-4"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Note</DialogTitle>
          <DialogDescription>
            Create a new note by filling out the details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={addNoteHandler}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Add title"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Add content"
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