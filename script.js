document.addEventListener("DOMContentLoaded", function() {
  const postForm = document.getElementById("post-form");
  const forumContainer = document.querySelector(".container");

  postForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const author = document.getElementById("post-author").value;

    const newPost = document.createElement("div");
    newPost.classList.add("forum-post");

    const postTitle = document.createElement("div");
    postTitle.classList.add("post-title");
    postTitle.textContent = title;

    const postContent = document.createElement("div");
    postContent.classList.add("post-content");
    postContent.textContent = content;

    const postAuthor = document.createElement("div");
    postAuthor.classList.add("post-author");
    postAuthor.textContent = "Posted by: " + author;

    newPost.appendChild(postTitle);
    newPost.appendChild(postContent);
    newPost.appendChild(postAuthor);

    forumContainer.appendChild(newPost);

    postForm.insertAdjacentElement('afterend', newPost);

    postForm.reset();
  });
});
