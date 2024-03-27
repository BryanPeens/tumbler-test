// let apiKey = 'UVHidgwWtNYfWtfAVtfjc2g4EHwmDOjuPkPmYhaL1VqdgneZ0D';
// let blogNameInput = document.getElementById('blogNameInput');
// let tagInput = document.getElementById('tagInput');
// let submitButton = document.getElementById('submitButton');
// let error = document.getElementById('error');
// let searchResults = document.getElementById('searchResults');
// let postsContainer = document.getElementById('postsContainer');
// let favoritesContainer = document.getElementById('favorites');

// let posts = [];
// let favorites = [];

// submitButton.addEventListener('click', handleSubmit);

// function addToFavorites(post) {
//   favorites.push(post);
//   renderFavorites();
// }

// function removeFromFavorites(id) {
//   favorites = favorites.filter(post => post.id !== id);
//   renderFavorites();
// }

// function handleSubmit() {
//   let apiUrl;
//   let tagOnly = false;
//   let blogName = blogNameInput.value;
//   let tag = tagInput.value;
//   let results;
//   posts = [];
//   error.textContent = '';
//   searchResults.textContent = '';

//   if (!blogName && !tag) {
//     error.textContent = 'Please enter a blog name or tag.';
//     return;
//   } else if (blogName && tag) {
//     console.log(blogName + " " + tag);
//     apiUrl = `https://api.tumblr.com/v2/blog/${blogName}/posts?limit=20&api_key=${apiKey}&tag=${tag}&callback=?`;
//   } else if (blogName && !tag) {
//     console.log(blogName + " " + "noTag");
//     apiUrl = `https://api.tumblr.com/v2/blog/${blogName}/posts?limit=20&api_key=${apiKey}&callback=?`;
//   } else if (!blogName && tag) {
//     console.log("noName" + " " + tag);
//     tagOnly = true;
//     apiUrl = `https://api.tumblr.com/v2/tagged?tag=${tag}&limit=20&api_key=${apiKey}&callback=?`;
//   }

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       if (tagOnly) {
//         results = data.response;
//       } else {
//         results = data.response.posts;
//       }
//       renderPosts(results);
//     })
//     .catch(() => {
//       error.textContent = `Error fetching data.`; // Update error message
//     });
// }

// function renderFavorites() {
//   favoritesContainer.innerHTML = '';
//   favorites.forEach(post => {
//     let postElement = createPostElement(post, true);
//     favoritesContainer.appendChild(postElement);
//   });
// }

// function renderPosts(postsData) {
//   postsContainer.innerHTML = '';
//   if (!postsData || !postsData.length) {
//     error.textContent = 'No blog entries found for the specified tag.';
//     return;
//   }
//   searchResults.textContent = 'Search results:';
//   postsData.forEach(post => {
//     let postElement = createPostElement(post, false);
//     postsContainer.appendChild(postElement);
//   });
// }

// function createPostElement(post, isFavorite) {
//   let postElement = document.createElement('div');
//   postElement.classList.add('post');

//   let contentElement = document.createElement('div');
//   contentElement.classList.add('content');
//   // Sanitize post body before injecting into HTML
//   contentElement.textContent = post.body;

//   let actionButton = document.createElement('button');
//   actionButton.textContent = isFavorite ? 'Remove' : 'Add';
//   actionButton.addEventListener('click', () => {
//     isFavorite ? removeFromFavorites(post.id) : addToFavorites(post);
//   });

//   contentElement.appendChild(actionButton);
//   postElement.appendChild(contentElement);
//   return postElement;
// }
