import { notesData } from './data/notes.js';

const container = document.getElementById('notes-container');

function renderNotes(noteList) {
  container.innerHTML = '';
  noteList.forEach(note => {
    const item = document.createElement('note-item');
    item.note = note;
    container.appendChild(item);
  });
}

renderNotes(notesData);

document.querySelector('note-form').addEventListener('note-added', (e) => {
  notesData.unshift(e.detail); 
  renderNotes(notesData);
});
