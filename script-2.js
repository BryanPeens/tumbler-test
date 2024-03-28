document.addEventListener("DOMContentLoaded", function () {

  let apiKey = "UVHidgwWtNYfWtfAVtfjc2g4EHwmDOjuPkPmYhaL1VqdgneZ0D";
  let pokemonImages = [];

  function getTumblr() {
    let tag = "pokemongo";
    let limit = 20; // Change the limit to the desired number of posts
    let apiUrl = `https://api.tumblr.com/v2/tagged?tag=${tag}&limit=${limit}&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        console.log(data)

        let jsonData = JSON.parse(data);

        let posts = jsonData.response;
          for (let i = 0; i < posts.length; i++) {
            let post = posts[i];
            // Check if the post contains the tag "pokemon"
            // if (post.tags.includes("pokemongo", "pikachu", "charizard")) {
              // Extract blog name, image URL, and entire post content
              let blogName = post.blog.name;
              let imageUrl = post.photos && post.photos[0].original_size.url; // Check if post.photos is defined
              let entirePostContent = post.body; // Change this line to get the entire post content
              pokemonImages.push({ blogName, imageUrl, entirePostContent });
            // }
          }

          displayPokemonImages();
          initCarousel();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function displayPokemonImages() {
    let searchResultsElement = document.getElementById("searchResults");
    if (searchResultsElement) {
      searchResultsElement.textContent = ""; // Clear previous content
      for (let i = 0; i < pokemonImages.length; i++) {
        let pokemon = pokemonImages[i];
        let postElement = document.createElement("li");
        postElement.classList.add("bg-white", "rounded", "shadow", "p-4", "overflow-y-scroll", "overflow-x-hidden", "max-h-64" );

        // Blog name
        let titleElement = document.createElement("h3");
        titleElement.textContent = pokemon.blogName;
        titleElement.classList.add("font-semibold", "text-lg", "mb-2");
        postElement.appendChild(titleElement);

        // Image
        if (pokemon.imageUrl) {
          // Check if imageUrl is defined
          let imgElement = document.createElement("img");
          imgElement.className = "h-40 w-full object-cover";
          imgElement.src = pokemon.imageUrl;
          postElement.appendChild(imgElement);
        }

        // Entire post content
        let contentElement = document.createElement("p");
        contentElement.innerHTML = pokemon.entirePostContent; // Use innerHTML to render HTML content
        contentElement.classList.add("text-sm");
        postElement.appendChild(contentElement);

        searchResultsElement.appendChild(postElement);
      }
    } else {
      console.error("searchResults element not found");
    }
  }

  getTumblr(); // Call getTumblr() when the script is executed
});


function initCarousel() {
  var glide01 = new Glide(".glide-01", {
    type: "carousel",
    focusAt: "center",
    perView: 5,
    autoplay: 1200,
    animationDuration: 700,
    gap: 44,
    classes: {
      activeNav: "[&>*]:bg-slate-700",
    },
    breakpoints: {
      1024: {
        perView: 2,
      },
      640: {
        perView: 1,
      },
    },
  });

  glide01.mount();
}


