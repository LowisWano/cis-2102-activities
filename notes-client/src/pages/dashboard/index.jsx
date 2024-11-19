import Note from "./_components/note"
import { getUserNotes } from "@/services/notes.service"
import { useState, useEffect } from "react";
import AddNoteModal from "./_components/add-note";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SquareCheck } from "lucide-react";

export default function DashboardPage() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const cache = JSON.parse(localStorage.getItem("token"));
      if (!cache?.token) {
        console.log("token missing")
        return;
      }

      getUserNotes(cache.token)
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.error('Failed to fetch notes:', error);
        });

    } catch (error) {
      console.error('Failed to parse token from localStorage:', error);
    }
  }, []);
  
  if(!notes){
    return (
      <div>loading...</div>
    )
  }

  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  }
  
  return (
    <div>
      <div className="flex justify-between pb-10">
        <AddNoteModal setNotes={setNotes} />
        <Button className="gap-2" variant="destructive" onClick={logoutHandler}>
          <span className="hidden sm:inline">Log out</span>
          <LogOut className="h-4 w-4"/>
        </Button>
      </div>
      
      <div className="flex flex-col gap-3">
        {
          (notes.length === 0) ?
          <div className="text-gray-500 flex items-center justify-center flex-col gap-1 h-72">
                    <SquareCheck className="h-14 w-14 mb-1" />
                    <p className="text-lg">Empty for now...</p>
                    <p>Create a new note by clicking the Add Note button</p>
          </div>
          : notes.map(n  => (
            <Note key={n.id} note={n} setNotes={setNotes} />
        ))
        }
      </div>
    </div>
    
  )
}