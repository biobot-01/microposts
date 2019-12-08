/**
 * UI Library
 * Library for handing data in html UI
 * 
 * @version 1.0.0
 * @author Kevin Michael
 * @license MIT
 * 
 **/

class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  // Show all posts
  showPosts(posts) {
    let output = '';
    
    posts.forEach(post => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>

            <p class="card-text">${post.body}</p>
            
            <a class="card-link edit" href="#" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>

            <a class="card-link delete" href="#" data-id="${post.id}">
              <i class="fa fa-remove text-danger"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.posts-container');
    // Get posts
    const posts = document.querySelector('#posts');
    // Insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear form fields
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form for edit state
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Clear ID hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  // Change the form state
  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.classList.add('btn-warning');
      this.postSubmit.classList.remove('btn-primary');

      // Create cancel button
      const button = document.createElement('button');
      button.className = 'btn btn-light btn-block post-cancel';
      button.appendChild(document.createTextNode('Cancel Edit'));
      // Get parent
      const cardForm = document.querySelector('.card-form');
      // Insert cancel button
      cardForm.append(button);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.classList.add('btn-primary');
      this.postSubmit.classList.remove('btn-warning');

      // Remove cancel button if in DOM
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // Clear ID from hidden field
      this.clearIdInput();
      // Clear form fields
      this.clearFields();
    }
  }
}

export const ui = new UI();