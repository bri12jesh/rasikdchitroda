 async function loadGallery() {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();

        const gallery = document.getElementById('gallery');
        gallery.innerHTML = '';

        data.forEach(img => {
          const col = document.createElement('div');
          col.className = 'col-md-4 col-sm-6 mb-2';

          const card = document.createElement('div');
          card.className = 'card shadow-sm border-0';

          const image = document.createElement('img');
          image.src = img.path;
          image.alt = img.title;
          image.className = 'card-img-top';

          // const cardBody = document.createElement('div');
          // cardBody.className = 'card-body text-center';

        //   const title = document.createElement('h5');
        //   title.className = 'card-title';
        //   title.textContent = img.title;

        //   cardBody.appendChild(title);
          card.appendChild(image);
          // card.appendChild(cardBody);
          col.appendChild(card);
          gallery.appendChild(col);
        });
      } catch (error) {
        console.error("Error loading gallery:", error);
      }
    }

    // Load gallery on page load
    loadGallery();