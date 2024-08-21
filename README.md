# personal-notes-api
This is a simple RESTful API created using Node.js and express to manage personal notes.

API Endpoints
○	GET /notes : Retrieve all notes.
○	GET /notes/:id : Retrieve a specific note by ID.
○	GET /notes/search/:keyword : Retrieve notes containing the given keyword.
○	GET /notes/priority/:priority : Retrieve notes of given priority.
○	POST /notes: Add a new note with a title, content, and priority.
○	PUT /notes/:id : Update a specific note by ID.
○	PATCH /notes/:id : Patch a specific note by ID.
○	DELETE /notes/:id : Delete a specific note by ID.

Implements middleware to log request details, handle error and validate input.
Created or updated notes must have both title and content whereas default priorit is set as low.

Notes are stored locally in a JSON file.

Implements search functionality via keywords and priorities.
