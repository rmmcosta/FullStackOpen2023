```mermaid
sequenceDiagram
 participant User
 participant Browser
 participant Server

 User->>Browser: Write text into the text field
 User->>Browser: Click the Save button

 Browser->>Server: AJAX POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa (with the new note data)
 activate Server
 Server-->>Browser: {"message":"note created"}
 deactivate Server

 Note right of Browser: The browser updates the list of notes in memory
