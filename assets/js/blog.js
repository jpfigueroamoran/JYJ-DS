const posts = [
    {
      title: 'Mi primera publicación',
      category: 'General',
      content: 'Contenido de la primera publicación...'
    },
    {
      title: 'Nuevas características en mi sitio web',
      category: 'Actualizaciones',
      content: 'Contenido de la segunda publicación...'
    },
    {
      title: 'Cómo crear un blog con HTML, CSS y JavaScript',
      category: 'Tutoriales',
      content: 'Contenido de la tercera publicación...'
    }
  ];
  
  // Función para mostrar las publicaciones
  function showPosts() {
    const blogPosts = document.getElementById('blog-posts');
    blogPosts.innerHTML = '';
  
    for (const post of posts) {
      const postElement = document.createElement('div');
      postElement.classList.add('card', 'mb-3');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h3');
      title.classList.add('card-title');
      title.textContent = post.title;
  
      const category = document.createElement('p');
      category.classList.add('card-text');
      category.textContent = `Categoría: ${post.category}`;
  
      const content = document.createElement('p');
      content.classList.add('card-text');
      content.textContent = post.content;
  
      cardBody.appendChild(title);
      cardBody.appendChild(category);
      cardBody.appendChild(content);
  
      postElement.appendChild(cardBody);
  
      blogPosts.appendChild(postElement);
    }
  }
  
  // Función para mostrar las categorías
  function showCategories() {
    const categories = document.getElementById('categories');
  
    const uniqueCategories = [...new Set(posts.map(post => post.category))];
  
    for (const category of uniqueCategories) {
      const categoryItem = document.createElement('li');
      categoryItem.textContent = category;
  
      categories.appendChild(categoryItem);
    }
  }
  
  // Mostrar las publicaciones y categorías al cargar la página
  showPosts();
  showCategories();