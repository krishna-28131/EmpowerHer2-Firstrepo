// script.js - DOM Book Management App
const IMAGE_URL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

const bookForm = document.getElementById('bookForm');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const categoryInput = document.getElementById('category');
const booksGrid = document.getElementById('booksGrid');
const sortBtn = document.getElementById('sortBtn');
const filterSelect = document.getElementById('filterSelect');

let books = loadBooksFromStorage();
let sortAsc = true; // true => A→Z, false => Z→A
let activeFilter = 'All';

function loadBooksFromStorage(){
  try {
    const raw = localStorage.getItem('domBooks_v1');
    if(!raw) return [];
    return JSON.parse(raw);
  } catch(e){
    console.error("Could not parse books from storage", e);
    return [];
  }
}

function saveBooksToStorage(){
  localStorage.setItem('domBooks_v1', JSON.stringify(books));
}

function createBookObject(title, author, category){
  return {
    id: Date.now().toString() + Math.random().toString(36).slice(2,7),
    title: title.trim(),
    author: author.trim(),
    category,
    imageUrl: IMAGE_URL
  };
}

function addBook(book){
  books.push(book);
  saveBooksToStorage();
  renderBooks();
}

function deleteBookById(id){
  books = books.filter(b => b.id !== id);
  saveBooksToStorage();
  renderBooks();
}

function compareTitleAsc(a,b){
  return a.title.localeCompare(b.title, undefined, {sensitivity:'base'});
}

function compareTitleDesc(a,b){
  return b.title.localeCompare(a.title, undefined, {sensitivity:'base'});
}

function renderBooks(){
  // Apply filter
  let displayList = books.slice();
  if(activeFilter !== 'All'){
    displayList = displayList.filter(b => b.category === activeFilter);
  }

  // Apply sort
  displayList.sort(sortAsc ? compareTitleAsc : compareTitleDesc);

  // Clear grid
  booksGrid.innerHTML = '';

  if(displayList.length === 0){
    booksGrid.innerHTML = `<div style="padding:2rem;text-align:center;color:var(--muted)">No books to show.</div>`;
    return;
  }

  // Build cards
  displayList.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card card';

    const img = document.createElement('img');
    img.src = book.imageUrl;
    img.alt = book.title;

    const body = document.createElement('div');
    body.className = 'book-body';

    const titleEl = document.createElement('div');
    titleEl.className = 'book-title';
    titleEl.textContent = book.title;

    const authorEl = document.createElement('div');
    authorEl.className = 'book-author';
    authorEl.textContent = `by ${book.author}`;

    const catEl = document.createElement('div');
    catEl.className = 'book-category';
    catEl.textContent = book.category;

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => {
      if(confirm(`Delete "${book.title}" by ${book.author}?`)){
        deleteBookById(book.id);
      }
    };

    body.appendChild(titleEl);
    body.appendChild(authorEl);
    body.appendChild(catEl);
    body.appendChild(delBtn);

    card.appendChild(img);
    card.appendChild(body);

    booksGrid.appendChild(card);
  });
}

// Form submit
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const category = categoryInput.value;

  if(!title.trim() || !author.trim()){
    alert('Please fill Title and Author.');
    return;
  }

  const newBook = createBookObject(title, author, category);
  addBook(newBook);

  // reset form
  bookForm.reset();
  titleInput.focus();
});

// Sort button
sortBtn.addEventListener('click', () => {
  sortAsc = !sortAsc;
  sortBtn.textContent = sortAsc ? 'Sort: A → Z' : 'Sort: Z → A';
  renderBooks();
});

// Filter select
filterSelect.addEventListener('change', (e) => {
  activeFilter = e.target.value;
  renderBooks();
});

// initial render
renderBooks();
