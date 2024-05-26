// Simple functionality to save and load notes with enhanced features

const notesContainer = document.getElementById('notes-container');
const textarea = document.getElementById('note-textarea');

// Function to create a new note element
function createNoteElement(text) {
  const note = document.createElement('div');
  note.classList.add('note');
  note.textContent = text;

  return note;
}

// Load saved notes from local storage (if any)
window.addEventListener('load', () => {
  const savedNotes = JSON.parse(localStorage.getItem('notepad-text') || '[]');
  savedNotes.forEach(noteText => {
    const noteElement = createNoteElement(noteText);
    notesContainer.appendChild(noteElement);
  });
});

// Save notes to local storage on textarea change and on Enter key press
textarea.addEventListener('input', () => {
  const noteText = textarea.value;
  localStorage.setItem('notepad-text', JSON.stringify([noteText]));
});

// ... existing JavaScript ...

const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');

// Add click event listener to the settings icon
settingsIcon.addEventListener('click', () => {
  settingsMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});


