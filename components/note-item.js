class NoteItem extends HTMLElement {
    set note(data) {
      this.innerHTML = `
        <div class="note">
          <h3>${data.title}</h3>
          <p>${data.body}</p>
        </div>
      `;
    }
  }
  
  customElements.define('note-item', NoteItem);
  