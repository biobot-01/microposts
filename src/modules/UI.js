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
}

export const ui = new UI();