/* ---------- BOOK DATA ---------- */
const BOOKS = [
  // SCIENCE
  { id:1, title:"The Selfish Gene", author:"Richard Dawkins", cat:"Science", year:1976, rating:4.6, cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=70" },
  { id:1, title:"The Selfish Gene", author:"Richard Dawkins", cat:"Science", year:1976, rating:4.6, cover:"https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=70" },
  { id:2, title:"Cosmos", author:"Carl Sagan", cat:"Science", year:1980, rating:4.9, cover:"https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=300&q=70" },
  { id:3, title:"The Gene: An Intimate History", author:"Siddhartha Mukherjee", cat:"Science", year:2016, rating:4.7, cover:"https://images.unsplash.com/photo-1576671081837-49000212a370?w=300&q=70" },
  { id:4, title:"Astrophysics for People in a Hurry", author:"Neil deGrasse Tyson", cat:"Science", year:2017, rating:4.5, cover:"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=300&q=70" },
  { id:4, title:"Astrophysics for People in a Hurry", author:"Neil deGrasse Tyson", cat:"Science", year:2017, rating:4.5, cover:"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=300&q=70" },
  { id:4, title:"Astrophysics for People in a Hurry", author:"Neil deGrasse Tyson", cat:"Science", year:2017, rating:4.5, cover:"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=300&q=70" },
  { id:4, title:"Astrophysics for People in a Hurry", author:"Neil deGrasse Tyson", cat:"Science", year:2017, rating:4.5, cover:"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=300&q=70" },
  { id:4, title:"Astrophysics for People in a Hurry", author:"Neil deGrasse Tyson", cat:"Science", year:2017, rating:4.5, cover:"https://images.unsplash.com/photo-1610296669228-602fa827fc1f?w=300&q=70" },
  // ART
  { id:5, title:"The Story of Art", author:"E.H. Gombrich", cat:"Art", year:1950, rating:4.8, cover:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&q=70" },
  { id:7, title:"The Shock of the New", author:"Robert Hughes", cat:"Art", year:1980, rating:4.5, cover:"https://images.unsplash.com/photo-1569091791842-7cfb64e04797?w=300&q=70" },
  { id:9, title:"Art: A World History", author:"Dorling Kindersley", cat:"Art", year:1997, rating:4.4, cover:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=70" },
  { id:11, title:"Rich Dad Poor Dad", author:"Robert Kiyosaki", cat:"Commercial", year:1997, rating:4.5, cover:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=70" },
  { id:12, title:"The Lean Startup", author:"Eric Ries", cat:"Commercial", year:2011, rating:4.6, cover:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=70" },
  { id:13, title:"Zero to One", author:"Peter Thiel", cat:"Commercial", year:2014, rating:4.7, cover:"https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=300&q=70" },
  { id:13, title:"Zero to One", author:"Peter Thiel", cat:"Commercial", year:2014, rating:4.7, cover:"https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=300&q=70" },
  { id:13, title:"Zero to One", author:"Peter Thiel", cat:"Commercial", year:2014, rating:4.7, cover:"https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=300&q=70" },
  { id:13, title:"Zero to One", author:"Peter Thiel", cat:"Commercial", year:2014, rating:4.7, cover:"https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=300&q=70" },
  { id:14, title:"Good to Great", author:"Jim Collins", cat:"Commercial", year:2001, rating:4.6, cover:"https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?w=300&q=70" },
  { id:15, title:"Atomic Habits", author:"James Clear", cat:"Commercial", year:2018, rating:4.9, cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&q=70" },
  { id:15, title:"Atomic Habits", author:"James Clear", cat:"Commercial", year:2018, rating:4.9, cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&q=70" },
  { id:15, title:"Atomic Habits", author:"James Clear", cat:"Commercial", year:2018, rating:4.9, cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&q=70" },
  { id:15, title:"Atomic Habits", author:"James Clear", cat:"Commercial", year:2018, rating:4.9, cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&q=70" },
  { id:15, title:"Atomic Habits", author:"James Clear", cat:"Commercial", year:2018, rating:4.9, cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&q=70" },
  { id:15, title:"Atomic Habits", author:"James Clear", cat:"Commercial", year:2018, rating:4.9, cover:"https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=300&q=70" },
];

const FEATURED = [
  { title:"The Hidden Life of Trees", author:"Peter Wohlleben", genre:"Science", desc:"A revelatory look at the social life of forests and the astonishing communication between trees.", rating:5, available:true, img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80" },
  { title:"Sapiens", author:"Yuval Noah Harari", genre:"History", desc:"A sweeping narrative of humankind from the Stone Age to the modern era.", rating:5, available:true, img:"https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&q=80" },
  { title:"The Alchemist", author:"Paulo Coelho", genre:"Fiction", desc:"A magical journey of following one's dreams.", rating:5, available:false, img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80" },
  { title:"Ikigai", author:"Francesc Miralles", genre:"Self-Help", desc:"The Japanese secret to a long and happy life.", rating:4, available:true, img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
  { title:"Deep Work", author:"Cal Newport", genre:"Productivity", desc:"Rules for focused success in a distracted world.", rating:5, available:true, img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80" },
];

/* ---------- MOBILE NAVIGATION ---------- */
const siteNavToggle = document.getElementById('siteNavToggle');
const siteNavMobile = document.getElementById('siteNavMobile');

if (siteNavToggle && siteNavMobile) {
  siteNavToggle.addEventListener('click', () => {
    const isOpen = siteNavMobile.classList.toggle('open');
    siteNavToggle.classList.toggle('open', isOpen);
    siteNavToggle.setAttribute('aria-expanded', String(isOpen));
    siteNavMobile.setAttribute('aria-hidden', String(!isOpen));
  });

  siteNavMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNavMobile.classList.remove('open');
      siteNavToggle.classList.remove('open');
      siteNavToggle.setAttribute('aria-expanded', 'false');
      siteNavMobile.setAttribute('aria-hidden', 'true');
    });
  });
}

/* ---------- RENDER BOOKS CATALOGUE ---------- */
function starHTML(rating) {
  let s = '';
  for(let i=1; i<=5; i++) {
    s += `<i class="fa-${i<=Math.floor(rating)?'solid':'regular'} fa-star"></i>`;
  }
  return s;
}

function renderBooks(list) {
  const grid = document.getElementById('booksGrid');
  if(!list.length){
    grid.innerHTML = '<div class="no-results"><i class="fa-solid fa-book-open" style="font-size:2.5rem;color:var(--blue-200);display:block;margin-bottom:12px"></i>No books found. Try a different search.</div>';
    return;
  }
  grid.innerHTML = list.map(b => `
    <div class="book-card">
      <div class="book-cover">
        <img src="${b.cover}" alt="${b.title}" loading="lazy" />
        <span class="book-category-badge">${b.cat}</span>
      </div>
      <div class="book-info">
        <h4>${b.title}</h4>
        <p class="author">${b.author}</p>
        <div class="book-meta">
          <span class="book-rating">${starHTML(b.rating)} ${b.rating}</span>
          <span class="book-year">${b.year}</span>
        </div>
      </div>
    </div>
  `).join('');
}

let currentCat = 'all';
let searchQ = '';

function filterBooks() {
  let list = BOOKS;
  if(currentCat !== 'all') list = list.filter(b => b.cat === currentCat);
  if(searchQ) {
    const q = searchQ.toLowerCase();
    list = list.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
    );
  }
  renderBooks(list);
}

document.getElementById('searchInput').addEventListener('input', e => {
  searchQ = e.target.value;
  filterBooks();
});

document.getElementById('filterTabs').addEventListener('click', e => {
  if(!e.target.classList.contains('filter-tab')) return;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  currentCat = e.target.dataset.cat;
  filterBooks();
});

renderBooks(BOOKS);

/* ---------- RENDER FEATURED ---------- */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = FEATURED.map((f, i) => `
    <div class="featured-card ${i===0?'main':''}">
      <img class="fc-image" src="${f.img}" alt="${f.title}" loading="lazy" />
      <div class="fc-body">
        <div class="fc-genre">${f.genre}</div>
        <div class="fc-title">${f.title}</div>
        <div class="fc-author">by ${f.author}</div>
        ${i===0?`<p class="fc-desc">${f.desc}</p>`:''}
        <div class="fc-footer">
          <span class="fc-stars">${starHTML(f.rating)}</span>
          <span class="fc-available ${f.available?'yes':'no'}">${f.available?'Available':'Checked Out'}</span>
        </div>
      </div>
    </div>
  `).join('');
}
renderFeatured();

/* ---------- BACK TO TOP VISIBILITY ---------- */
window.addEventListener('scroll', () => {
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
});

/* ---------- BACK TO TOP ---------- */
document.getElementById('back-top').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* ---------- SCROLL REVEAL ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

/* ---------- HERO PARTICLES ---------- */
const particleContainer = document.getElementById('particles');
for(let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 60 + 20;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    left:${Math.random()*100}%;
    animation-duration:${Math.random()*15+8}s;
    animation-delay:${Math.random()*10}s;
  `;
  particleContainer.appendChild(p);
}

/* ---------- TOAST HELPER ---------- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ---------- SHOW/HIDE PASSWORD (registration) ---------- */
document.querySelectorAll('.pw-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    const icon = btn.querySelector('i');
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    icon.classList.toggle('fa-eye', !show);
    icon.classList.toggle('fa-eye-slash', show);
    btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });
});

/* ---------- DEMO PASSWORD HASH ----------
   Client-only demo: hashes the password in the browser with SHA-256 before
   it ever touches storage, so nothing is kept as plain text. A production
   deployment should send credentials over HTTPS to a backend that hashes
   them with a proper algorithm such as bcrypt or argon2. ------------------ */
async function holHashText(text) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}
function holGetUsers() {
  try { return JSON.parse(localStorage.getItem('holUsers') || '[]'); }
  catch (e) { return []; }
}
function holSaveUsers(users) {
  localStorage.setItem('holUsers', JSON.stringify(users));
}
function holSetFieldError(groupId, errorId, show) {
  const group = document.getElementById(groupId);
  const err = document.getElementById(errorId);
  if (group) group.classList.toggle('invalid', show);
  if (err) err.classList.toggle('show', show);
}

/* ---------- REGISTRATION FORM ---------- */
const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
  registrationForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const regAlert = document.getElementById('regAlert');
    const regAlertMsg = document.getElementById('regAlertMsg');
    if (regAlert) regAlert.style.display = 'none';

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const studentId = document.getElementById('studentId').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const department = document.getElementById('department').value.trim();
    const level = document.getElementById('level').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const genre = document.getElementById('genre').value;
    const termsOk = document.getElementById('terms').checked;

    let valid = true;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!firstName || !lastName) valid = false;
    if (!studentId) valid = false;
    if (!emailOk) valid = false;
    if (!department) valid = false;
    if (!level) valid = false;
    if (password.length < 8) valid = false;
    if (confirmPassword !== password || !confirmPassword) valid = false;
    if (!genre) valid = false;
    if (!termsOk) valid = false;

    const users = holGetUsers();
    const emailTaken = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    const idTaken = users.some(u => u.studentId.toLowerCase() === studentId.toLowerCase());

    if (!valid || emailTaken || idTaken) {
      if (regAlert && regAlertMsg) {
        if (emailTaken) regAlertMsg.textContent = 'An account with this email already exists. Try logging in instead.';
        else if (idTaken) regAlertMsg.textContent = 'This Student ID is already registered.';
        else if (confirmPassword !== password) regAlertMsg.textContent = 'Passwords do not match.';
        else if (password.length < 8) regAlertMsg.textContent = 'Password must be at least 8 characters long.';
        else regAlertMsg.textContent = 'Please fill in all required fields correctly.';
        regAlert.style.display = 'flex';
      }
      return;
    }

    const btn = document.getElementById('regSubmitBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating account…';

    const passwordHash = await holHashText(password);
    users.push({
      name: `${firstName} ${lastName}`,
      studentId, email, department,
      level, genre, passwordHash,
      joined: new Date().toISOString()
    });
    holSaveUsers(users);

    setTimeout(() => {
      registrationForm.style.display = 'none';
      document.getElementById('regSuccess').style.display = 'block';
      showToast('Welcome aboard! Account created successfully.');
    }, 500);
  });
}

/* ---------- CONTACT FORM (only present on contact.html-style pages) ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Message Sent!';
      btn.style.background = 'var(--blue-500)';
      showToast('Message sent! We\'ll get back to you within 24 hours.');
      this.reset();
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}