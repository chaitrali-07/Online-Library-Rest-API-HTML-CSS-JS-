const API_URL = "http://localhost:8080/books";
const genreContainer = document.getElementById("bookGenres");
const messageDiv = document.getElementById("message");


// Fetch and display books
async function fetchBooks() {
  try {
    const res = await fetch(API_URL);
    const books = await res.json();
    displayBooks(books);
  } catch (err) {
    console.error("Error fetching books:", err);
  }
}

// Display books grouped by genre
function displayBooks(books) {
  genreContainer.innerHTML = "";
  const genres = {};

  books.forEach(book => {
    if (!genres[book.genre]) genres[book.genre] = [];
    genres[book.genre].push(book);
  });

  Object.keys(genres).forEach(genre => {
    const section = document.createElement("div");
    section.classList.add("genre-section");
    section.innerHTML = `<h2>${genre}</h2>`;

    genres[genre].forEach(book => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      bookCard.innerHTML = `
        <strong>${book.bkname}</strong> by ${book.bkauth} <br>
        Quantity: ${book.quantity} <br>
        Status: ${book.available ? "Available" : "Not Available"} <br>
        <button class="borrow-button" ${!book.available || book.quantity <= 0 ? "disabled" : ""} onclick="borrowBook(${book.bkid})">Borrow</button>
        <button class="borrow-button" onclick="returnBook(${book.bkid})">Return</button>
      `;

      section.appendChild(bookCard);
    });

    genreContainer.appendChild(section);
  });
}

// Borrow book
async function borrowBook(id) {
  try {
    const res = await fetch(`${API_URL}/${id}/borrow`, { method: "PUT" });
    if (res.ok) {
      showMessage("Book borrowed successfully!");
      fetchBooks();
    }
  } catch (err) {
    console.error(err);
  }
}

// Return book
async function returnBook(id) {
  try {
    const res = await fetch(`${API_URL}/${id}/return`, { method: "PUT" });
    if (res.ok) {
      showMessage("Book returned successfully!");
      fetchBooks();
    }
  } catch (err) {
    console.error(err);
  }
}

// Show message
function showMessage(msg) {
  messageDiv.textContent = msg;
  setTimeout(() => messageDiv.textContent = "", 3000);
}

// Add book form
document.getElementById("addBookForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const book = {
    bkname: document.getElementById("bkname").value,
    bkauth: document.getElementById("bkauth").value,
    genre: document.getElementById("genreInput").value,
    quantity: parseInt(document.getElementById("quantity").value),
    available: document.getElementById("available").checked
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    });
    if (res.ok) {
      showMessage("Book added successfully!");
      e.target.reset();
      fetchBooks();
    }
  } catch (err) {
    console.error(err);
  }
});

// Initial load
fetchBooks();
