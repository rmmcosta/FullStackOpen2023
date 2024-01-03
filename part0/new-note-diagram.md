```mermaid
sequenceDiagram
   participant User
   participant Browser
   participant Server

   User->>Browser: Write text into the text field
   User->>Browser: Click the Save button

   Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (with the new note data)
   activate Server
   Server-->>Browser: Acknowledge the receipt of the new note (302 found)
   deactivate Server

   Note right of Browser: The browser updates the list of notes

   Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
   activate Server
   Server-->>Browser: Page Html (304 Not Modified*)
   deactivate Server

   Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
   activate Server
   Server-->>Browser: main.css (304 Not Modified*)
   deactivate Server

   Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
   activate Server
   Server-->>Browser: main.js (304 Not Modified*)
   deactivate Server

   Note left of Server: the "304 Not Modified" is answered when the cache is not disabled. Otherwise a "200 OK" will be returned and those files transfered again. 

   Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
   activate Server
   Server-->>Browser: data.json (200 OK - Updated list of notes)
   deactivate Server
