const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const validateNote = require("../middleware/validateNote");

router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteById);
router.get("/search/:keyword", noteController.getNoteByKeywords);
router.get("/priority/:priority", noteController.getNoteByPriority);

router.post("/", validateNote, noteController.createNote);

router.put("/:id", validateNote, noteController.updateNote);
router.patch("/:id", noteController.patchNote);

router.delete("/:id", noteController.deleteNote);

module.exports = router;
