const express = require("express");

const app = express();
app.use(express.json());

let notes = [
  {
    id: 1,
    title: "Note 1",
    description: "This is the first note"
  },
  {
    id: 2,
    title: "Note 2",
    description: "This is the second note"
  },
  {
    id: 3,
    title: "Note 3",
    description: "This is the third note"
  },
  {
    id: 4,
    title: "Note 4",
    description: "This is the fourth note"
  },
  {
    id: 5,
    title: "Note 5",
    description: "This is the fifth note"
  },
  {
    id: 6,
    title: "Note 6",
    description: "This is the sixth note"
  },
  {
    id: 7,
    title: "Note 7",
    description: "This is the seventh note"
  },
  {
    id: 8,
    title: "Note 8",
    description: "This is the eighth note"
  },
  {
    id: 9,
    title: "Note 9",
    description: "This is the ninth note"
  },
  {
    id: 10,
    title: "Note 10",
    description: "This is the tenth note"
  }
];

app.get('/notes', (req, res) => {
  res.send(notes);
});

app.get('/notes/:id', (req, res) => {
  res.send(notes.find(note=>note.id === parseInt(req.params.id)));
});

app.post('/notes', (req, res) => {
  const body = req.body;
  // add validation
  if(!body.title){
    return res.status(400).json({ error: "missing title" })
  }
  
  if(!body.description){
    return res.status(400).json({ error: "missing description" })
  }

  const newNote = {
    id: notes[notes.length-1].id + 1,
    title: body.title,
    description: body.description
  }
  notes.push(newNote);
  return res.send(newNote);
});

app.put('/notes/:id', (req, res) => {
  const n = notes.findIndex(note=>note.id === parseInt(req.params.id));
  const body = req.body;
  
  notes[n] = {
    ...notes[n], 
    title: body.title,
    description: body.description 
  };

  res.send(notes[n])
})

app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(note=>note.id!=parseInt(req.params.id));
  res.status(204).end();
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});