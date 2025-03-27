class NoteForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <form id="note-form" style="margin-top:1rem;">
          <div style="margin-bottom:0.5rem;">
            <input type="text" id="title" placeholder="Judul catatan" required style="width:100%;padding:0.5rem;" />
            <p id="title-error" style="color:red;font-size:0.9rem;margin:0.25rem 0 0;"></p>
          </div>
          <div style="margin-bottom:0.5rem;">
            <textarea id="body" placeholder="Isi catatan" required style="width:100%;padding:0.5rem;height:100px;"></textarea>
            <p id="body-error" style="color:red;font-size:0.9rem;margin:0.25rem 0 0;"></p>
          </div>
          <button type="submit" id="submit-btn" disabled style="margin-top:0.5rem;padding:0.5rem 1rem;">Tambah Catatan</button>
        </form>
      `;
  
      const form = this.querySelector('#note-form');
      const titleInput = this.querySelector('#title');
      const bodyInput = this.querySelector('#body');
      const submitButton = this.querySelector('#submit-btn');
  
      const titleError = this.querySelector('#title-error');
      const bodyError = this.querySelector('#body-error');
  
      const validateForm = () => {
        const title = titleInput.value.trim();
        const body = bodyInput.value.trim();
  
        titleError.textContent = '';
        bodyError.textContent = '';
  
        if (!title) {
          titleError.textContent = 'Judul catatan wajib diisi.';
        } else if (title.length < 3) {
          titleError.textContent = 'Judul minimal 3 karakter.';
        }
  
        if (!body) {
          bodyError.textContent = 'Isi catatan wajib diisi.';
        } else if (body.length < 5) {
          bodyError.textContent = 'Isi catatan minimal 5 karakter.';
        }
  
        submitButton.disabled = !(title && body && title.length >= 3 && body.length >= 5);
      };
  
      titleInput.addEventListener('input', validateForm);
      bodyInput.addEventListener('input', validateForm);
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const title = titleInput.value.trim();
        const body = bodyInput.value.trim();
  
        if (!title || !body) return;
  
        const newNote = {
          id: +new Date(),
          title,
          body,
          archived: false, 
        };
  
        this.dispatchEvent(new CustomEvent('note-added', {
          detail: newNote,
          bubbles: true,
        }));
  
        titleInput.value = '';
        bodyInput.value = '';
        validateForm();
      });
    }
  }
  
  customElements.define('note-form', NoteForm);
  