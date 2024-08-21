const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../../data/notes.json");
let file = require(filePath);

const saveToDb = () => {
  fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
};

exports.getAllNotes = (req, res) => {
  res.status(200).json(file.notes);
};

exports.getNoteById = (req, res) => {
  const note = file.notes.find((n) => n.id == req.params.id);
  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).json({ message: "Note not found. Check the ID." });
  }
};

exports.getNoteByKeywords = (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const notes = file.notes.filter((n) => n.title.toLowerCase().includes(keyword));
  if (notes.length > 0) {
    res.status(200).json(notes);
  } else {
    res.status(404).json({ message: "No notes found with the given keyword. Try a different keyword.S" });
  }
};

exports.getNoteByPriority = (req, res) => {
  const priority = req.params.priority.toLowerCase();
  const notes = file.notes.filter((n) => n.priority.toLowerCase() === priority);
  if (notes.length > 0) {
    res.status(200).json(notes);
  } else {
    res.status(404).json({ message: "No notes found with the given priority. Try a different priority." });
  }
};

exports.createNote = (req, res) => {
  const { title, content, priority = "low" } = req.body;
 
  const newNote = {
    id: file.notes.length + 1,
    title,
    content,
    priority,
  }
  
  file.notes.push(newNote);
  saveToDb();
  res.status(201).json(newNote);
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content, priority = "low"} = req.body;

  const note = file.notes.find(n => n.id == id);
  
  if (note) {
    note.title = title;
    note.content = content;
    note.priority = priority;

    saveToDb();
    res.status(200).json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

exports.patchNote = (req, res) => {
  const { id } = req.params;
  const { title, content, priority = "low"} = req.body;

  const note = file.notes.find(n => n.id == id);
  
  if (note) {
    note.title = title;
    note.content = content;
    note.priority = priority;

    saveToDb();
    res.status(200).json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
};

exports.deleteNote = (req, res) => {
  file.notes = file.notes.filter((n) => n.id != req.params.id);
  saveToDb();
  res.status(204).end();
};
