const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-swap="innerHTML" hx-target=".book-list">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          
          <form
          hx-post="/books" 
          hx-on::after-request="document.querySelector('form').reset()"
          hx-swap="beforeend"
          hx-target=".book-list ul" 
          >
            <input 
              id="title" 
              name="title"
              placeholder="Title" 
              type="text" 
              required
            />
            <input 
              id="author" 
              name="author"
              placeholder="Author" 
              type="text" 
              required
            />

            <button>Add Book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;