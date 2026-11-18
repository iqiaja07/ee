const aestheticPublishers = {
  "Danur": "Bukune",
  "KKN di Desa Penari": "Bukune",
  "Surat Kecil Untuk Tuhan": "Inandra Published",
  "Catatan Dokter Muda": "GagasMedia"
};

function createAestheticCover(title, author, colors, motif) {
  const publisher = aestheticPublishers[title] || "";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
      <defs>
        <linearGradient id="coverGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colors[0]}"/>
          <stop offset="100%" stop-color="${colors[1]}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="900" fill="url(#coverGradient)"/>
      ${motif}
      <rect x="42" y="42" width="516" height="816" rx="8" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width="2"/>
      <text x="70" y="115" fill="#ffffff" font-family="Georgia,serif" font-size="22" letter-spacing="5">NOVEL</text>
      <text x="70" y="655" fill="#ffffff" font-family="Georgia,serif" font-size="48" font-weight="700">${title}</text>
      <rect x="70" y="690" width="110" height="4" fill="#f8d58a"/>
      <text x="70" y="750" fill="#ffffff" fill-opacity=".9" font-family="Arial,sans-serif" font-size="24">${author}</text>
      <text x="70" y="795" fill="#ffffff" fill-opacity=".72" font-family="Arial,sans-serif" font-size="16" letter-spacing="2">${publisher}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const books = [
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    publisher: "Bentang Pustaka",
    genre: "Adventure",
    year: "2005",
    cover: "https://covers.openlibrary.org/b/id/7079796-L.jpg"
  },
  {
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    publisher: "Kepustakaan Populer Gramedia",
    genre: "Drama",
    year: "2017",
    cover: "https://covers.openlibrary.org/b/id/10648285-L.jpg"
  },
  {
    title: "Bumi",
    author: "Tere Liye",
    publisher: "Gramedia Pustaka Utama",
    genre: "Fantasy",
    year: "2014",
    cover: "https://covers.openlibrary.org/b/id/12810708-L.jpg"
  },
  {
    title: "Dilan 1990",
    author: "Pidi Baiq",
    publisher: "Pastel Books",
    genre: "Romance",
    year: "2014",
    cover: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/product-1/2019/4/3/2570595/2570595_c452f3bd-909a-4c51-90df-14301d73de26_1006_1006.jpg~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1789795965&x-signature=TfxameTM5ZHKIiw4E3AuuzqYDLQ%3D"
  },
  {
    title: "Perahu Kertas",
    author: "Dee Lestari",
    publisher: "Bentang Pustaka",
    genre: "Romance",
    year: "2009",
    cover: createAestheticCover("Perahu Kertas", "Dee Lestari", ["#0f766e", "#164e63"], '<path d="M85 470 L300 300 L515 470 L300 540 Z" fill="#f8d58a" opacity=".9"/><path d="M300 300 V540" stroke="#164e63" stroke-width="8"/><path d="M80 565 C210 520 390 625 520 570" fill="none" stroke="#ffffff" stroke-opacity=".6" stroke-width="5"/>')
  },
  {
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    publisher: "Gramedia Pustaka Utama",
    genre: "Drama",
    year: "2009",
    cover: "https://covers.openlibrary.org/b/id/14303993-L.jpg"
  },
  {
    title: "Pulang",
    author: "Leila S. Chudori",
    publisher: "Kepustakaan Populer Gramedia",
    genre: "Drama",
    year: "2012",
    cover: "https://covers.openlibrary.org/b/id/15094936-L.jpg"
  },
  {
    title: "Ronggeng Dukuh Paruk",
    author: "Ahmad Tohari",
    publisher: "Dunia Pustaka Jaya",
    genre: "Drama",
    year: "1982",
    cover: "https://covers.openlibrary.org/b/id/4317176-L.jpg"
  },
  {
    title: "Ayat-Ayat Cinta",
    author: "Habiburrahman El Shirazy",
    publisher: "Republika",
    genre: "Romance",
    year: "2004",
    cover: createAestheticCover("Ayat-Ayat Cinta", "Habiburrahman El Shirazy", ["#7c2d12", "#be123c"], '<circle cx="420" cy="320" r="130" fill="#f8d58a" opacity=".82"/><path d="M130 420 C220 330 350 350 475 470" fill="none" stroke="#fff7ed" stroke-width="9" stroke-opacity=".75"/><path d="M120 470 C250 375 375 410 500 525" fill="none" stroke="#fff7ed" stroke-width="4" stroke-opacity=".55"/>')
  },
  {
    title: "Supernova",
    author: "Dee Lestari",
    publisher: "Truedee Books",
    genre: "Sains",
    year: "2001",
    cover: createAestheticCover("Supernova", "Dee Lestari", ["#172554", "#581c87"], '<circle cx="300" cy="365" r="112" fill="#f8d58a" opacity=".9"/><circle cx="300" cy="365" r="165" fill="none" stroke="#f8d58a" stroke-width="3" stroke-opacity=".7"/><circle cx="300" cy="365" r="220" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity=".45"/><circle cx="130" cy="210" r="5" fill="#ffffff"/><circle cx="480" cy="190" r="7" fill="#ffffff"/><circle cx="475" cy="540" r="5" fill="#ffffff"/>')
  },
  {
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    publisher: "Hasta Mitra",
    genre: "Drama",
    year: "1980",
    cover: "https://covers.openlibrary.org/b/id/6643692-L.jpg"
  },
  {
    title: "Pangeran Diponegoro",
    author: "Peter Carey",
    publisher: "Kepustakaan Populer Gramedia",
    genre: "Adventure",
    year: "2011",
    cover: createAestheticCover("Pangeran Diponegoro", "Peter Carey", ["#451a03", "#78350f"], '<path d="M105 500 C180 405 420 405 495 500" fill="#f8d58a" opacity=".85"/><path d="M300 180 L355 350 L480 350 L380 425 L420 555 L300 475 L180 555 L220 425 L120 350 L245 350 Z" fill="#f8d58a" opacity=".75"/><path d="M95 575 H505" stroke="#ffffff" stroke-width="4" stroke-opacity=".55"/>')
  },
  {
    title: "Danur",
    author: "Risa Saraswati",
    publisher: "Bukune",
    genre: "Horor",
    year: "2011",
    cover: createAestheticCover("Danur", "Risa Saraswati", ["#111827", "#334155"], '<circle cx="430" cy="330" r="125" fill="#dbeafe" opacity=".18"/><path d="M110 570 C190 410 410 410 500 570" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-opacity=".5"/><circle cx="180" cy="300" r="4" fill="#ffffff"/><circle cx="245" cy="240" r="3" fill="#ffffff"/>')
  },
  {
    title: "KKN di Desa Penari",
    author: "SimpleMan",
    publisher: "Bukune",
    genre: "Horor",
    year: "2019",
    cover: createAestheticCover("KKN di Desa Penari", "SimpleMan", ["#052e16", "#14532d"], '<path d="M300 160 C230 300 250 430 300 555 C350 430 370 300 300 160Z" fill="#facc15" opacity=".22"/><path d="M95 575 C160 450 205 450 260 575 M340 575 C395 450 440 450 505 575" fill="none" stroke="#fef3c7" stroke-width="4" stroke-opacity=".6"/>')
  },
  {
    title: "Surat Kecil Untuk Tuhan",
    author: "Agnes Davonar",
    publisher: "Inandra Published",
    genre: "Sad",
    year: "2008",
    cover: createAestheticCover("Surat Kecil Untuk Tuhan", "Agnes Davonar", ["#164e63", "#155e75"], '<path d="M125 360 L300 245 L475 360 L300 480Z" fill="#fef3c7" opacity=".85"/><path d="M125 360 L300 505 L475 360" fill="none" stroke="#fef3c7" stroke-width="5"/><circle cx="440" cy="170" r="52" fill="#fef3c7" opacity=".35"/>')
  },
  {
    title: "Hujan",
    author: "Tere Liye",
    publisher: "Gramedia Pustaka Utama",
    genre: "Sad",
    year: "2016",
    cover: "https://covers.openlibrary.org/b/id/10872657-L.jpg"
  },
  {
    title: "Catatan Dokter Muda",
    author: "Ferdiriva Hamzah",
    publisher: "GagasMedia",
    genre: "Kedokteran",
    year: "2008",
    cover: createAestheticCover("Catatan Dokter Muda", "Ferdiriva Hamzah", ["#0f766e", "#115e59"], '<path d="M300 180 V510 M135 345 H465" stroke="#ecfeff" stroke-width="34" stroke-linecap="round" opacity=".82"/><circle cx="300" cy="345" r="185" fill="none" stroke="#99f6e4" stroke-width="3" stroke-opacity=".7"/>')
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    publisher: "Dutton Books",
    genre: "Kedokteran",
    year: "2012",
    cover: "https://covers.openlibrary.org/b/id/7418786-L.jpg"
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    publisher: "George Newnes",
    genre: "Mystery",
    year: "1887",
    cover: "https://covers.openlibrary.org/b/id/6717853-L.jpg"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publisher: "Doubleday",
    genre: "Mystery",
    year: "2003",
    cover: "https://covers.openlibrary.org/b/id/9255229-L.jpg"
  }
];

const catalogExpansion = {
  Adventure: [
    ["The Hobbit", "J.R.R. Tolkien", "George Allen & Unwin", "1937"], ["Treasure Island", "Robert Louis Stevenson", "Cassell and Company", "1883"], ["The Call of the Wild", "Jack London", "Macmillan", "1903"], ["Around the World in Eighty Days", "Jules Verne", "Pierre-Jules Hetzel", "1872"], ["The Three Musketeers", "Alexandre Dumas", "Baudry's European Library", "1844"], ["Journey to the Center of the Earth", "Jules Verne", "Pierre-Jules Hetzel", "1864"], ["The Lost World", "Arthur Conan Doyle", "Hodder & Stoughton", "1912"], ["King Solomon's Mines", "H. Rider Haggard", "Cassell and Company", "1885"], ["The Adventures of Tom Sawyer", "Mark Twain", "American Publishing Company", "1876"], ["The Adventures of Huckleberry Finn", "Mark Twain", "Chatto & Windus", "1884"], ["The Count of Monte Cristo", "Alexandre Dumas", "Pétion", "1844"], ["The Prisoner of Zenda", "Anthony Hope", "J.W. Arrowsmith", "1894"], ["The Man in the Iron Mask", "Alexandre Dumas", "Le Siècle", "1847"], ["The Last of the Mohicans", "James Fenimore Cooper", "Carey & Lea", "1826"], ["The Swiss Family Robinson", "Johann David Wyss", "J. J. Burgdorff", "1812"], ["The Coral Island", "R.M. Ballantyne", "T. Nelson and Sons", "1858"], ["The Mysterious Island", "Jules Verne", "Pierre-Jules Hetzel", "1874"], ["The Jungle Book", "Rudyard Kipling", "Macmillan", "1894"]
  ],
  Drama: [
    ["To Kill a Mockingbird", "Harper Lee", "J.B. Lippincott & Co.", "1960"], ["The Kite Runner", "Khaled Hosseini", "Riverhead Books", "2003"], ["A Thousand Splendid Suns", "Khaled Hosseini", "Riverhead Books", "2007"], ["The Book Thief", "Markus Zusak", "Picador", "2005"], ["The Great Gatsby", "F. Scott Fitzgerald", "Charles Scribner's Sons", "1925"], ["The Catcher in the Rye", "J.D. Salinger", "Little, Brown and Company", "1951"], ["The Road", "Cormac McCarthy", "Alfred A. Knopf", "2006"], ["The Color Purple", "Alice Walker", "Harcourt Brace Jovanovich", "1982"], ["Atonement", "Ian McEwan", "Jonathan Cape", "2001"], ["The Remains of the Day", "Kazuo Ishiguro", "Faber and Faber", "1989"], ["One Hundred Years of Solitude", "Gabriel García Márquez", "Editorial Sudamericana", "1967"], ["The Shadow of the Wind", "Carlos Ruiz Zafón", "Planeta", "2001"], ["The Namesake", "Jhumpa Lahiri", "Houghton Mifflin", "2003"], ["The God of Small Things", "Arundhati Roy", "IndiaInk", "1997"], ["The Poisonwood Bible", "Barbara Kingsolver", "HarperCollins", "1998"], ["The Secret Life of Bees", "Sue Monk Kidd", "Viking Press", "2001"], ["The Things They Carried", "Tim O'Brien", "Houghton Mifflin", "1990"], ["The Reader", "Bernhard Schlink", "Diogenes Verlag", "1995"]
  ],
  Fantasy: [
    ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "Bloomsbury", "1997"], ["The Fellowship of the Ring", "J.R.R. Tolkien", "George Allen & Unwin", "1954"], ["The Lion, the Witch and the Wardrobe", "C.S. Lewis", "Geoffrey Bles", "1950"], ["A Game of Thrones", "George R.R. Martin", "Bantam Spectra", "1996"], ["The Name of the Wind", "Patrick Rothfuss", "DAW Books", "2007"], ["The Golden Compass", "Philip Pullman", "Scholastic Point", "1995"], ["The Earthsea Wizard", "Ursula K. Le Guin", "Parnassus Press", "1968"], ["The Neverending Story", "Michael Ende", "Thienemann", "1979"], ["Stardust", "Neil Gaiman", "HarperCollins", "1999"], ["American Gods", "Neil Gaiman", "William Morrow", "2001"], ["The Once and Future King", "T.H. White", "Collins", "1958"], ["The Magicians", "Lev Grossman", "Viking Press", "2009"], ["The Priory of the Orange Tree", "Samantha Shannon", "Bloomsbury", "2019"], ["Jonathan Strange & Mr Norrell", "Susanna Clarke", "Bloomsbury", "2004"], ["The Ocean at the End of the Lane", "Neil Gaiman", "William Morrow", "2013"], ["The Inheritance Cycle", "Christopher Paolini", "Knopf Books", "2002"], ["The Last Unicorn", "Peter S. Beagle", "Viking Press", "1968"], ["The Wonderful Wizard of Oz", "L. Frank Baum", "George M. Hill Company", "1900"], ["The Graveyard Book", "Neil Gaiman", "HarperCollins", "2008"]
  ],
  Romance: [
    ["Pride and Prejudice", "Jane Austen", "T. Egerton", "1813"], ["Jane Eyre", "Charlotte Brontë", "Smith, Elder & Co.", "1847"], ["Wuthering Heights", "Emily Brontë", "Thomas Cautley Newby", "1847"], ["Sense and Sensibility", "Jane Austen", "Thomas Egerton", "1811"], ["The Notebook", "Nicholas Sparks", "Warner Books", "1996"], ["Me Before You", "Jojo Moyes", "Pamela Dorman Books", "2012"], ["The Fault in Our Stars", "John Green", "Dutton Books", "2012"], ["Normal People", "Sally Rooney", "Faber & Faber", "2018"], ["Call Me by Your Name", "André Aciman", "Farrar, Straus and Giroux", "2007"], ["The Time Traveler's Wife", "Audrey Niffenegger", "MacAdam/Cage", "2003"], ["The Bridges of Madison County", "Robert James Waller", "Warner Books", "1992"], ["Love in the Time of Cholera", "Gabriel García Márquez", "Editorial Sudamericana", "1985"], ["The Rosie Project", "Graeme Simsion", "Text Publishing", "2013"], ["One Day", "David Nicholls", "Hodder & Stoughton", "2009"], ["Eleanor & Park", "Rainbow Rowell", "St. Martin's Press", "2012"], ["The Hating Game", "Sally Thorne", "William Morrow", "2016"], ["The Spanish Love Deception", "Elena Armas", "Atria Books", "2021"], ["The Kiss Quotient", "Helen Hoang", "Berkley", "2018"], ["The Bridges of Madison County", "Robert James Waller", "Warner Books", "1992"]
  ],
  Sad: [
    ["The Fault in Our Stars", "John Green", "Dutton Books", "2012"], ["A Little Life", "Hanya Yanagihara", "Doubleday", "2015"], ["The Lovely Bones", "Alice Sebold", "Little, Brown and Company", "2002"], ["The Book of Memories", "Péter Nádas", "Faber and Faber", "1986"], ["Never Let Me Go", "Kazuo Ishiguro", "Faber and Faber", "2005"], ["The Art of Racing in the Rain", "Garth Stein", "Harper", "2008"], ["All the Bright Places", "Jennifer Niven", "Knopf Books", "2015"], ["The Perks of Being a Wallflower", "Stephen Chbosky", "Pocket Books", "1999"], ["Bridge to Terabithia", "Katherine Paterson", "Thomas Y. Crowell", "1977"], ["The Year of Magical Thinking", "Joan Didion", "Alfred A. Knopf", "2005"], ["The Travelling Cat Chronicles", "Hiro Arikawa", "Doubleday", "2012"], ["The Kite Runner", "Khaled Hosseini", "Riverhead Books", "2003"], ["The Last Lecture", "Randy Pausch", "Hyperion", "2008"], ["The Little Prince", "Antoine de Saint-Exupéry", "Reynal & Hitchcock", "1943"], ["The Giving Tree", "Shel Silverstein", "Harper & Row", "1964"], ["The Unbearable Lightness of Being", "Milan Kundera", "Harper & Row", "1984"], ["The Elegance of the Hedgehog", "Muriel Barbery", "Gallimard", "2006"], ["The Story of a Brief Marriage", "Anuk Arudpragasam", "Granta Books", "2016"]
  ],
  Sains: [
    ["Contact", "Carl Sagan", "Simon & Schuster", "1985"], ["The Martian", "Andy Weir", "Crown Publishing", "2011"], ["Project Hail Mary", "Andy Weir", "Ballantine Books", "2021"], ["Jurassic Park", "Michael Crichton", "Alfred A. Knopf", "1990"], ["The Andromeda Strain", "Michael Crichton", "Alfred A. Knopf", "1969"], ["Solaris", "Stanisław Lem", "Wydawnictwo Ministerstwa Obrony Narodowej", "1961"], ["Dune", "Frank Herbert", "Chilton Company", "1965"], ["Foundation", "Isaac Asimov", "Gnome Press", "1951"], ["Neuromancer", "William Gibson", "Phantasia Press", "1984"], ["Do Androids Dream of Electric Sheep?", "Philip K. Dick", "Doubleday", "1968"], ["The Time Machine", "H.G. Wells", "William Heinemann", "1895"], ["The War of the Worlds", "H.G. Wells", "William Heinemann", "1898"], ["The Invisible Man", "H.G. Wells", "C. Arthur Pearson", "1897"], ["Frankenstein", "Mary Shelley", "Lackington, Hughes, Harding, Mavor & Jones", "1818"], ["The Handmaid's Tale", "Margaret Atwood", "McClelland and Stewart", "1985"], ["The Dispossessed", "Ursula K. Le Guin", "Harper & Row", "1974"], ["Snow Crash", "Neal Stephenson", "Bantam Books", "1992"], ["The Left Hand of Darkness", "Ursula K. Le Guin", "Ace Books", "1969"], ["Children of Time", "Adrian Tchaikovsky", "Pan Macmillan", "2015"]
  ],
  Kedokteran: [
    ["The Physician", "Noah Gordon", "Simon & Schuster", "1986"], ["Coma", "Robin Cook", "G.P. Putnam's Sons", "1977"], ["The Silent Patient", "Alex Michaelides", "Celadon Books", "2019"], ["When Breath Becomes Air", "Paul Kalanithi", "Random House", "2016"], ["The Emperor of All Maladies", "Siddhartha Mukherjee", "Scribner", "2010"], ["Being Mortal", "Atul Gawande", "Metropolitan Books", "2014"], ["The Man Who Mistook His Wife for a Hat", "Oliver Sacks", "Gerald Duckworth & Co.", "1985"], ["Awakenings", "Oliver Sacks", "Duckworth", "1973"], ["The Gene", "Siddhartha Mukherjee", "Scribner", "2016"], ["The Immortal Life of Henrietta Lacks", "Rebecca Skloot", "Crown Publishing", "2010"], ["Cutting for Stone", "Abraham Verghese", "Alfred A. Knopf", "2009"], ["The English Patient", "Michael Ondaatje", "Bloomsbury", "1992"], ["The Death of Ivan Ilyich", "Leo Tolstoy", "The Russian Messenger", "1886"], ["The Plague", "Albert Camus", "Gallimard", "1947"], ["The Magic Mountain", "Thomas Mann", "S. Fischer Verlag", "1924"], ["Mount Misery", "Samuel Shem", "Delacorte Press", "1997"], ["The House of God", "Samuel Shem", "Richard Marek Publishers", "1978"], ["The Intern Blues", "Robert Marion", "William Morrow", "1989"]
  ],
  Mystery: [
    ["Murder on the Orient Express", "Agatha Christie", "Collins Crime Club", "1934"], ["And Then There Were None", "Agatha Christie", "Collins Crime Club", "1939"], ["The Hound of the Baskervilles", "Arthur Conan Doyle", "George Newnes", "1902"], ["The Girl with the Dragon Tattoo", "Stieg Larsson", "Norstedts Förlag", "2005"], ["Gone Girl", "Gillian Flynn", "Crown Publishing", "2012"], ["The Big Sleep", "Raymond Chandler", "Alfred A. Knopf", "1939"], ["The Maltese Falcon", "Dashiell Hammett", "Alfred A. Knopf", "1930"], ["In the Woods", "Tana French", "Viking Press", "2007"], ["The Woman in White", "Wilkie Collins", "Sampson Low", "1859"], ["The Moonstone", "Wilkie Collins", "Tinsley Brothers", "1868"], ["Rebecca", "Daphne du Maurier", "Victor Gollancz", "1938"], ["The Name of the Rose", "Umberto Eco", "Bompiani", "1980"], ["The Murder of Roger Ackroyd", "Agatha Christie", "William Collins, Sons", "1926"], ["The No. 1 Ladies' Detective Agency", "Alexander McCall Smith", "Polygon Books", "1998"], ["The Talented Mr. Ripley", "Patricia Highsmith", "Coward-McCann", "1955"], ["The Silence of the Lambs", "Thomas Harris", "St. Martin's Press", "1988"], ["The Postman Always Rings Twice", "James M. Cain", "Alfred A. Knopf", "1934"], ["The Mysterious Affair at Styles", "Agatha Christie", "John Lane", "1920"]
  ],
  Horor: [
    ["Dracula", "Bram Stoker", "Archibald Constable and Company", "1897"], ["Frankenstein", "Mary Shelley", "Lackington, Hughes, Harding, Mavor & Jones", "1818"], ["The Shining", "Stephen King", "Doubleday", "1977"], ["It", "Stephen King", "Viking Press", "1986"], ["Pet Sematary", "Stephen King", "Doubleday", "1983"], ["The Haunting of Hill House", "Shirley Jackson", "The Viking Press", "1959"], ["The Turn of the Screw", "Henry James", "Macmillan", "1898"], ["The Exorcist", "William Peter Blatty", "Harper & Row", "1971"], ["Interview with the Vampire", "Anne Rice", "Alfred A. Knopf", "1976"], ["Bird Box", "Josh Malerman", "Ecco Press", "2014"], ["The Woman in Black", "Susan Hill", "Viking Press", "1983"], ["The Hellbound Heart", "Clive Barker", "Headline", "1986"], ["House of Leaves", "Mark Z. Danielewski", "Pantheon Books", "2000"], ["The Ruins", "Scott Smith", "Alfred A. Knopf", "2006"], ["The Terror", "Dan Simmons", "Little, Brown and Company", "2007"], ["The Little Stranger", "Sarah Waters", "Virago Press", "2009"], ["The Other", "Thomas Tryon", "Alfred A. Knopf", "1971"], ["The Woman in Black", "Susan Hill", "Viking Press", "1983"], ["The Castle of Otranto", "Horace Walpole", "William Bathoe", "1764"]
  ]
};

const genreCoverPalettes = {
  Adventure: ["#78350f", "#c2410c"], Drama: ["#1f2937", "#7f1d1d"], Fantasy: ["#312e81", "#0f766e"], Romance: ["#9f1239", "#be123c"], Sad: ["#164e63", "#334155"], Sains: ["#172554", "#0f766e"], Kedokteran: ["#115e59", "#155e75"], Mystery: ["#171717", "#57534e"], Horor: ["#111827", "#450a0a"]
};

Object.entries(catalogExpansion).forEach(([genre, entries]) => {
  const existingTitles = new Set(books.filter((book) => book.genre === genre).map((book) => book.title));
  entries.forEach(([title, author, publisher, year]) => {
    if (existingTitles.has(title)) return;
    books.push({ title, author, publisher, genre, year, cover: createAestheticCover(title, author, genreCoverPalettes[genre], `<circle cx="430" cy="300" r="120" fill="#f8d58a" opacity=".2"/><path d="M100 570 C210 430 390 650 500 500" fill="none" stroke="#f8d58a" stroke-width="8" opacity=".65"/>`) });
  });
});

Object.keys(genreCoverPalettes).forEach((genre) => {
  const seen = new Set();
  const uniqueBooks = books.filter((book) => {
    if (book.genre !== genre || seen.has(book.title)) return false;
    seen.add(book.title);
    return true;
  }).slice(0, 20);
  books.splice(0, books.length, ...books.filter((book) => book.genre !== genre), ...uniqueBooks);
});

const storyProfiles = {
  "Laskar Pelangi": {
    pages: [
      ["Sekolah Muhammadiyah", "Di Belitong, sepuluh anak mempertahankan sekolah sederhana mereka. Ikatan persahabatan dan kegigihan Bu Muslimah membuat pendidikan terasa seperti sebuah perjuangan bersama."],
      ["Mimpi yang Tumbuh", "Lintang menunjukkan kecerdasan luar biasa meski harus menempuh perjalanan jauh setiap hari. Ikal dan kawan-kawannya belajar bahwa keterbatasan tidak harus mematikan rasa ingin tahu."],
      ["Ujian Kehidupan", "Kemiskinan, jarak sosial, dan ancaman penutupan sekolah menguji mereka. Setiap anak menemukan cara sendiri untuk tetap berani bermimpi."],
      ["Warisan Persahabatan", "Kenangan masa sekolah menjadi bekal bagi mereka untuk melihat dunia lebih luas. Cerita ini menegaskan bahwa pendidikan dan persahabatan dapat mengubah arah hidup."]
    ]
  },
  "Laut Bercerita": {
    pages: [
      ["Jejak yang Hilang", "Biru Laut dan kawan-kawannya hidup dalam suasana politik yang penuh tekanan. Diskusi, buku, dan keberanian mereka perlahan membawa mereka ke ruang gerakan bawah tanah."],
      ["Perlawanan", "Pilihan untuk melawan ketidakadilan membuat mereka harus berpindah tempat dan menyembunyikan identitas. Persahabatan menjadi sumber keberanian sekaligus titik kerentanan."],
      ["Penangkapan", "Laut menghadapi kekerasan dan penghilangan paksa. Dari sudut pandang keluarga, kehilangan itu berubah menjadi penantian panjang yang tidak pernah benar-benar selesai."],
      ["Ingatan yang Menolak Hilang", "Leila S. Chudori mempertemukan suara korban, keluarga, dan generasi berikutnya. Laut terus hidup melalui ingatan dan keberanian untuk menyebut kebenaran."]
    ]
  },
  "Bumi": {
    pages: [
      ["Rahasia Raib", "Raib tampak seperti remaja biasa, tetapi kemampuan menghilangnya membuka pintu menuju dunia paralel. Rahasia itu perlahan diketahui oleh Seli dan Ali."],
      ["Dunia Paralel", "Ketiganya masuk ke Klan Bulan dan menemukan masyarakat dengan aturan, teknologi, serta sejarah yang berbeda dari bumi. Petualangan mereka segera berubah menjadi misi berbahaya."],
      ["Kekuatan dan Pilihan", "Raib, Seli, dan Ali belajar mengendalikan kemampuan masing-masing. Mereka harus bekerja sama menghadapi kekuatan yang ingin memanfaatkan keseimbangan antar dunia."],
      ["Persahabatan", "Di balik fantasi dan pertempuran, inti cerita tetap berada pada kepercayaan. Mereka pulang dengan pemahaman baru tentang diri, keluarga, dan tanggung jawab."]
    ]
  },
  "Dilan 1990": {
    pages: [
      ["Pertemuan di Bandung", "Milea mengenal Dilan, siswa yang percaya diri dan memiliki cara bicara yang tidak biasa. Tahun 1990 menjadi latar bagi hubungan yang tumbuh melalui percakapan kecil dan kejutan sederhana."],
      ["Masa Sekolah", "Kedekatan mereka berkembang di tengah suasana kelas, teman-teman, dan gaya hidup remaja Bandung. Dilan mendekati Milea dengan humor dan perhatian yang sulit ditebak."],
      ["Cemburu dan Batas", "Hubungan mereka tidak selalu tenang. Masa lalu, teman, dan cara Dilan menghadapi masalah membuat Milea harus menimbang rasa nyaman dan kekhawatirannya."],
      ["Kenangan Remaja", "Kisah ini menangkap manis-pahit cinta pertama: spontan, jenaka, dan penuh kenangan. Milea melihat bahwa sebuah hubungan juga dibentuk oleh pilihan dan batas yang mereka buat."]
    ]
  },
  "Perahu Kertas": {
    pages: [
      ["Dua Arah Mimpi", "Kugy mencintai dongeng dan menulis dengan cara yang unik, sementara Keenan tumbuh dengan bakat melukis. Pertemuan mereka mempertemukan dua mimpi yang sama-sama ingin bebas."],
      ["Jarak", "Kenyataan keluarga, pendidikan, dan hubungan lain membuat Kugy dan Keenan berjalan ke arah berbeda. Perasaan mereka tetap hadir meskipun jarang diucapkan."],
      ["Menemukan Suara", "Kugy belajar mempercayai tulisannya dan Keenan berusaha mempertahankan dunia seninya. Keduanya perlu berhenti mengejar harapan orang lain."],
      ["Pulang kepada Mimpi", "Perahu kertas menjadi simbol pesan yang dilepas menuju tujuan. Cerita berakhir pada keberanian untuk memilih hidup dan cinta yang benar-benar mereka yakini."]
    ]
  },
  "Negeri 5 Menara": {
    pages: [
      ["Keputusan Alif", "Alif harus meninggalkan rencana sekolah umum dan masuk ke pondok Madani. Perpisahan dari kampung halaman terasa berat, tetapi membuka pertemuan dengan lima sahabat baru."],
      ["Man Jadda Wajada", "Para sahibul menara hidup dalam disiplin, bahasa asing, dan jadwal padat. Semboyan pondok mengajarkan bahwa kesungguhan adalah langkah pertama menuju cita-cita."],
      ["Persahabatan", "Alif dan lima kawannya membentuk ikatan yang kuat sambil memandang menara sebagai simbol masa depan. Mereka mulai berani membayangkan dunia di luar pondok."],
      ["Cita-Cita yang Menyeberang", "Setelah bertahun-tahun ditempa, masing-masing sahabat mengejar jalannya sendiri. Pelajaran pondok tetap menjadi kompas ketika mereka menghadapi dunia yang lebih luas."]
    ]
  },
  "Pulang": {
    pages: [
      ["Dapur dan Pengasingan", "Dimas Suryo menjalani hidup sebagai eksil politik di Paris setelah gejolak politik Indonesia. Ia membangun restoran bersama kawan-kawan yang sama-sama kehilangan rumah."],
      ["Keluarga yang Terpisah", "Di Jakarta, keluarga Dimas menghadapi stigma dan ketidakpastian. Jarak geografis berubah menjadi jarak emosional yang diwariskan kepada generasi berikutnya."],
      ["Identitas", "Laras tumbuh dengan pertanyaan tentang tanah air dan masa lalu ayahnya. Restoran menjadi ruang tempat sejarah, makanan, dan kenangan saling bertemu."],
      ["Arti Pulang", "Pulang tidak hanya berarti kembali ke sebuah tempat. Ia berarti berdamai dengan sejarah, mengakui luka, dan memberi generasi baru kesempatan untuk memilih masa depannya."]
    ]
  },
  "Ronggeng Dukuh Paruk": {
    pages: [
      ["Dukuh yang Gersang", "Dukuh Paruk hidup dalam kemiskinan dan memegang tradisi ronggeng sebagai pusat kebudayaan. Srintil tumbuh dengan takdir yang dianggap telah ditentukan masyarakat."],
      ["Srintil", "Ketika Srintil menjadi ronggeng, ia memperoleh penghormatan sekaligus kehilangan sebagian kebebasan. Rasus memandangnya dengan cinta, tetapi sulit melawan aturan kampung."],
      ["Perubahan Zaman", "Pilihan politik dan pergolakan sosial membawa ancaman ke dukuh. Warga yang sebelumnya hidup dalam tradisi dipaksa menghadapi kecurigaan dan kekerasan."],
      ["Harga Sebuah Tradisi", "Nasib Srintil dan Rasus memperlihatkan bagaimana kemiskinan, tradisi, dan kekuasaan dapat membentuk hidup seseorang. Dukuh itu meninggalkan pertanyaan tentang kebebasan dan martabat."]
    ]
  },
  "Ayat-Ayat Cinta": {
    pages: [
      ["Kairo dan Keyakinan", "Fahri menjalani kehidupan sebagai mahasiswa Indonesia di Mesir. Ia berusaha menjaga prinsip agama, persahabatan, dan sikap terbuka di tengah lingkungan yang beragam."],
      ["Pertemuan", "Hubungan Fahri dengan Maria, Aisha, dan orang-orang di sekitarnya berkembang melalui percakapan, pertolongan, dan perbedaan cara memahami cinta."],
      ["Ujian", "Tuduhan dan masalah hukum mengguncang kehidupan Fahri. Ia harus menghadapi prasangka sambil mempertahankan keyakinan dan menghormati orang-orang yang terlibat."],
      ["Cinta dan Keteguhan", "Cinta dalam novel ini diposisikan sebagai tanggung jawab dan pengorbanan, bukan sekadar perasaan. Fahri belajar bahwa keteguhan juga harus disertai kasih dan keadilan."]
    ]
  },
  "Supernova": {
    pages: [
      ["Percakapan tentang Semesta", "Kisah dibuka dengan percakapan intelektual tentang cinta, sains, dan kesadaran. Gagasan itu menjadi pintu menuju rangkaian kehidupan yang saling terhubung."],
      ["Tokoh dan Topeng", "Rana, Ferre, dan tokoh-tokoh lain membawa ambisi serta luka masing-masing. Hubungan mereka memperlihatkan benturan antara identitas pribadi dan tuntutan sosial."],
      ["Cinta sebagai Eksperimen", "Novel memadukan refleksi ilmiah dengan drama batin. Para tokohnya menguji batas kebebasan, moralitas, dan keberanian untuk mengakui keinginan."],
      ["Jaringan Kehidupan", "Supernova meninggalkan kesan bahwa manusia tidak berdiri sendiri. Setiap keputusan memengaruhi jaringan hubungan yang lebih besar, seperti partikel dalam semesta."]
    ]
  },
  "Bumi Manusia": {
    pages: [
      ["Minke", "Minke adalah pribumi terpelajar yang hidup di tengah hierarki kolonial. Pendidikan memberinya kemampuan membaca dunia, tetapi juga membuatnya semakin sadar pada ketidakadilan."],
      ["Nyai Ontosoroh", "Pertemuan dengan Nyai Ontosoroh mengguncang pandangan Minke tentang perempuan, keluarga, dan martabat. Ia melihat kecerdasan yang tidak diakui oleh hukum kolonial."],
      ["Cinta dan Hukum", "Hubungan Minke dan Annelies berhadapan dengan aturan rasial serta kekuasaan pengadilan. Kehidupan pribadi mereka berubah menjadi pertarungan melawan sistem."],
      ["Menjadi Manusia", "Minke belajar bahwa menjadi terpelajar berarti berani bersikap adil. Kisahnya menjadi renungan tentang kebebasan, kolonialisme, dan harga diri manusia."]
    ]
  },
  "Pangeran Diponegoro": {
    pages: [
      ["Jawa pada Awal Abad ke-19", "Peter Carey menempatkan Diponegoro dalam perubahan besar di Jawa: perebutan pengaruh, tekanan ekonomi, dan campur tangan kolonial yang semakin kuat."],
      ["Pangeran dan Keyakinan", "Diponegoro dibentuk oleh lingkungan keraton, tradisi, dan keyakinan spiritual. Ia melihat ketidakadilan bukan hanya sebagai persoalan politik, tetapi juga persoalan moral."],
      ["Perang Jawa", "Ketegangan berkembang menjadi perang besar yang melibatkan bangsawan, ulama, petani, dan pasukan kolonial. Strategi dan aliansi berubah seiring panjangnya konflik."],
      ["Warisan Sejarah", "Kisah Diponegoro menunjukkan bahwa sejarah lahir dari pertemuan keputusan pribadi dan kekuatan zaman. Warisannya tetap penting untuk memahami perlawanan dan identitas Indonesia."]
    ]
  }
};

const detailedStoryPages = {
  "Laskar Pelangi": [
    ["Sekolah di Ujung Belitong", "Di sebuah kampung miskin di Belitong, sekolah Muhammadiyah hampir kehilangan murid dan terancam ditutup. Bu Muslimah dan Pak Harfan menunggu murid kesepuluh agar sekolah itu tetap dapat berdiri, sementara anak-anak datang dengan seragam dan perlengkapan seadanya."],
    ["Sepuluh Sahabat", "Ikal, Lintang, Mahar, Sahara, Harun, dan kawan-kawannya tumbuh sebagai kelompok yang sangat berbeda. Ada yang unggul dalam matematika, ada yang berbakat seni, dan ada yang membutuhkan perhatian khusus, tetapi mereka menemukan kebahagiaan dalam kebersamaan."],
    ["Lintang dan Jalan Panjang", "Lintang menempuh perjalanan jauh dengan sepeda untuk bersekolah dan tetap menjadi murid paling cemerlang. Kecerdasannya membuat mereka berani menghadapi sekolah PN Timah, meskipun kehidupan keluarganya semakin berat dan waktu belajarnya harus dibagi dengan pekerjaan."],
    ["Mahar dan Keajaiban", "Mahar membawa imajinasi ke dalam kehidupan sekolah melalui seni dan pertunjukan. Saat kelompok mereka mengikuti perlombaan, kreativitasnya membuktikan bahwa anak-anak dari sekolah kecil juga mampu membuat orang lain melihat Belitong dengan cara baru."],
    ["Perpisahan yang Pahit", "Keadaan ekonomi akhirnya memaksa Lintang meninggalkan sekolah, sebuah kehilangan yang sangat membekas bagi seluruh sahabatnya. Mereka mulai memahami bahwa bakat dan kerja keras tidak selalu cukup ketika kemiskinan mengambil pilihan seseorang."],
    ["Mimpi yang Bertahan", "Tahun-tahun berlalu, tetapi kenangan tentang Bu Muslimah, Pak Harfan, dan sekolah kecil itu tetap menjadi sumber kekuatan. Ikal memandang kembali masa kecilnya sebagai awal dari perjalanan panjang mengejar pendidikan dan mimpi."]
  ],
  "Laut Bercerita": [
    ["Biru Laut dan Winatra", "Biru Laut Wibisana menjadi bagian dari kelompok mahasiswa yang membaca, berdiskusi, dan mengkritik ketidakadilan politik. Bersama kawan-kawan Winatra, ia berpindah dari satu tempat aman ke tempat lain ketika aktivitas mereka mulai diawasi."],
    ["Rumah dan Perlawanan", "Laut menyimpan banyak hal dari keluarganya agar mereka tidak ikut terancam. Di tengah rapat rahasia, penyebaran tulisan, dan perjalanan menuju daerah-daerah yang tertindas, ia belajar bahwa perlawanan membutuhkan keberanian sekaligus pengorbanan."],
    ["Penangkapan", "Laut dan beberapa rekannya ditangkap oleh aparat dan dibawa ke tempat yang tidak diketahui. Kekerasan yang mereka alami tidak hanya melukai tubuh, tetapi juga memutus hubungan mereka dengan keluarga dan dunia di luar ruang tahanan."],
    ["Asmara dan Penantian", "Di bagian lain cerita, Asmara Jati dan keluarganya menjalani hidup dengan ketidakhadiran Laut sebagai pusat luka. Mereka menunggu kabar, mencari kesaksian, dan berusaha mempertahankan ingatan agar Laut tidak hilang untuk kedua kalinya."],
    ["Reformasi dan Nama-Nama", "Perubahan politik tidak langsung menghapus ketakutan atau menjawab nasib semua orang yang hilang. Teman-teman Laut berkumpul, menyebut nama mereka, dan menolak membiarkan sejarah selesai hanya karena rezim telah berganti."],
    ["Laut yang Terus Bercerita", "Cerita berakhir sebagai kesaksian tentang keluarga, cinta, dan tanggung jawab untuk mengingat. Laut tidak kembali secara fisik, tetapi suaranya hadir dalam keberanian generasi berikutnya untuk menuntut kebenaran."]
  ],
  "Bumi": [
    ["Raib dan Kamar yang Menghilang", "Raib menjalani kehidupan remaja biasa sampai ia menyadari bahwa menutup wajah dengan kedua tangan dapat membuat tubuhnya lenyap. Kemampuan itu awalnya ia sembunyikan, termasuk dari orang-orang terdekatnya."],
    ["Seli dan Ali", "Seli memiliki kekuatan yang berkaitan dengan listrik, sedangkan Ali adalah teman yang cerdas, kritis, dan gemar membongkar benda. Ketiganya mulai menyadari bahwa kemampuan mereka bukan kebetulan dan memiliki kaitan dengan dunia lain."],
    ["Klan Bulan", "Sebuah lorong membawa mereka ke Klan Bulan, tempat teknologi tinggi dan kemampuan khusus menjadi bagian dari kehidupan. Mereka bertemu tokoh-tokoh yang membantu menjelaskan sejarah antarklan sekaligus memperingatkan bahaya yang sedang mendekat."],
    ["Pelarian dan Pengejaran", "Raib, Seli, dan Ali harus bergerak cepat ketika kekuatan yang ingin menguasai dunia paralel memburu mereka. Perjalanan mereka memperlihatkan bahwa kemampuan luar biasa juga membawa tanggung jawab dan risiko besar."],
    ["Mengendalikan Diri", "Raib belajar bahwa kekuatannya bukan hanya alat untuk menyelamatkan diri. Ia harus berani menghadapi rasa takut, mempercayai sahabat, dan memahami bahwa keputusan kecil dapat memengaruhi keselamatan banyak orang."],
    ["Pintu yang Belum Tertutup", "Setelah melewati konflik di Klan Bulan, ketiganya kembali dengan pengalaman yang mengubah cara mereka melihat dunia. Namun, hubungan antar klan dan rahasia asal-usul mereka menunjukkan bahwa petualangan itu baru memasuki tahap pertama."]
  ],
  "Dilan 1990": [
    ["Milea Pindah ke Bandung", "Milea pindah dari Jakarta ke Bandung dan mulai beradaptasi dengan sekolah barunya. Sebelum perkenalan resmi, seorang siswa bernama Dilan menyapanya dengan ramalan dan kalimat-kalimat yang membuatnya penasaran."],
    ["Pendekatan yang Berbeda", "Dilan tidak mendekati Milea dengan cara romantis yang biasa. Ia mengirim hadiah kecil, menyampaikan candaan, dan membuat kejutan yang terasa ringan, tetapi perlahan membuat Milea menunggu kehadirannya."],
    ["Teman, Geng, dan Masa Sekolah", "Kehidupan sekolah mereka diwarnai teman-teman, geng motor, guru, dan aturan yang sering dilanggar. Milea melihat sisi Dilan yang lucu sekaligus impulsif, terutama ketika ia menghadapi masalah dengan orang lain."],
    ["Beni dan Rasa Cemburu", "Hubungan Milea dengan Beni dari masa lalu menjadi sumber ketegangan. Dilan menunjukkan rasa cemburu dan protektif, sedangkan Milea harus belajar membedakan perhatian, kebebasan, dan sikap yang mulai melewati batas."],
    ["Menjadi Pasangan", "Milea dan Dilan akhirnya menjalani hubungan yang lebih jelas, tetapi kedekatan itu tetap penuh tarik-ulur. Mereka menikmati percakapan dan momen sederhana, sambil berhadapan dengan konsekuensi dari pilihan Dilan di luar sekolah."],
    ["Kenangan yang Tidak Sederhana", "Masa remaja mereka berakhir dengan perasaan yang campur aduk. Milea mengingat Dilan sebagai sosok yang membuat tahun 1990 terasa istimewa, tetapi juga sebagai seseorang yang memaksanya memahami arti batas dan keputusan."]
  ],
  "Perahu Kertas": [
    ["Kugy dan Dongeng", "Kugy menyukai dongeng, menulis dengan gaya jenaka, dan mengirimkan pesan melalui perahu kertas ke laut. Ia kuliah di Bandung sambil menyembunyikan keinginan menjadi penulis cerita anak dari banyak orang."],
    ["Keenan Pulang", "Keenan kembali ke Indonesia setelah lama tinggal di luar negeri. Ia memiliki bakat melukis yang kuat, tetapi berada di bawah tekanan ayahnya untuk memilih jalan hidup yang dianggap lebih aman dan terhormat."],
    ["Pertemuan dan Kedekatan", "Kugy dan Keenan bertemu melalui sahabat-sahabat mereka dan segera menemukan kecocokan dalam cara melihat dunia. Perasaan tumbuh, tetapi keduanya tidak langsung berani mengakui bahwa hubungan itu lebih dari persahabatan."],
    ["Jalan yang Berpisah", "Kondisi keluarga, pekerjaan, dan hubungan dengan orang lain membuat Kugy dan Keenan menjauh. Mereka mencoba menjalani hidup masing-masing, namun karya, kenangan, dan perasaan lama terus muncul di tempat yang tidak terduga."],
    ["Menjadi Diri Sendiri", "Kugy mulai serius mengembangkan tulisannya dan Keenan berusaha merebut kembali ruang untuk melukis. Keduanya memahami bahwa cinta tidak dapat menjadi alasan untuk meninggalkan mimpi atau hidup berdasarkan keinginan orang lain."],
    ["Pesan yang Menemukan Tujuan", "Perahu kertas menjadi lambang pesan yang dilepas tanpa kepastian akan sampai. Pada akhirnya, Kugy dan Keenan belajar bahwa pulang bukan hanya kembali kepada seseorang, tetapi juga kembali kepada diri dan mimpi yang pernah mereka tinggalkan."]
  ],
  "Negeri 5 Menara": [
    ["Alif dan Keputusan di Kampung", "Alif ingin melanjutkan sekolah umum dan mengejar cita-cita seperti tokoh yang ia kagumi, tetapi ibunya memilihkan Pondok Madani. Dengan berat hati ia meninggalkan Maninjau dan memulai kehidupan baru yang jauh dari rumah."],
    ["Pondok Madani", "Di pondok, Alif bertemu Raja, Said, Atang, Dulmajid, dan Baso. Mereka berasal dari daerah berbeda, tinggal dalam disiplin ketat, dan belajar bahasa serta pelajaran agama dengan jadwal yang hampir tidak memberi ruang untuk bermalas-malasan."],
    ["Semboyan yang Menggerakkan", "Ustaz Salman dan para guru menanamkan keyakinan bahwa kesungguhan dapat membuka jalan. Kalimat Man Jadda Wajada menjadi pengingat ketika Alif gagal, rindu rumah, atau merasa tidak cukup pintar untuk mengikuti pelajaran."],
    ["Sahibul Menara", "Enam sahabat sering duduk di bawah menara masjid sambil membayangkan masa depan masing-masing. Mereka saling menguatkan, berdebat, dan menyimpan cita-cita untuk melihat dunia di luar batas kampung dan pondok."],
    ["Perpisahan dan Jalan Masing-Masing", "Waktu di pondok membawa perubahan dan beberapa perpisahan yang menyakitkan, termasuk ketika salah satu sahabat harus pulang karena keadaan keluarga. Alif menyadari bahwa persahabatan juga berarti merelakan orang lain mengejar jalannya."],
    ["Mimpi yang Menjadi Nyata", "Setelah lulus, para sahibul menara menyebar ke berbagai tempat dan profesi. Ingatan tentang pondok, guru, dan semboyan mereka menjadi bekal ketika cita-cita yang dulu hanya dibicarakan akhirnya mulai terwujud."]
  ],
  "Pulang": [
    ["Dimas di Paris", "Dimas Suryo hidup sebagai eksil di Paris setelah peristiwa politik 1965 membuatnya tidak dapat kembali ke Indonesia. Bersama Nugroho, Tjai, dan Risjaf, ia membangun Restoran Naga Merah sebagai tempat bertahan dan mengenang tanah air."],
    ["Surat dari Jakarta", "Di Jakarta, Surti membesarkan anak-anaknya dalam bayang-bayang stigma terhadap keluarga Dimas. Surat dan kabar yang datang dari jauh memperlihatkan bahwa perpisahan politik telah mengubah keputusan kecil di dalam rumah."],
    ["Laras dan Pertanyaan Identitas", "Laras tumbuh dengan pertanyaan tentang ayahnya dan hubungan keluarganya dengan Indonesia. Ia mewarisi rasa ingin tahu yang mendorongnya mencari cerita masa lalu, bukan hanya versi resmi yang selama ini ia dengar."],
    ["Restoran sebagai Rumah", "Restoran Naga Merah menjadi ruang pertemuan bagi orang-orang yang terusir dan orang-orang yang ingin memahami mereka. Makanan, percakapan, dan aroma dapur menjadi cara Dimas menyimpan Indonesia ketika pulang secara fisik tidak mungkin dilakukan."],
    ["Generasi Berikutnya", "Anak-anak Dimas menghadapi pilihan berbeda dari orang tuanya. Mereka dapat memilih tempat tinggal dan identitas sendiri, tetapi tetap harus berhadapan dengan sejarah keluarga yang tidak pernah benar-benar selesai."],
    ["Pulang dengan Ingatan", "Pulang akhirnya berarti menghadapi luka tanpa membiarkannya menghapus masa depan. Dimas dan keluarganya menemukan bahwa tanah air dapat hadir melalui bahasa, makanan, ingatan, dan keberanian untuk menceritakan sejarah secara jujur."]
  ],
  "Ronggeng Dukuh Paruk": [
    ["Dukuh Paruk dan Ronggeng", "Dukuh Paruk hidup dalam kemiskinan dan memandang ronggeng sebagai pusat kehormatan kampung. Srintil sejak kecil diarahkan menuju peran itu, sementara Rasus menyimpan perasaan yang tidak mudah ia ucapkan."],
    ["Srintil Menjadi Ronggeng", "Setelah dianggap memenuhi syarat tradisi, Srintil mulai menjalani latihan dan upacara yang mengubah kedudukannya. Ia dipuja sebagai simbol kebanggaan dukuh, tetapi tubuh dan pilihannya semakin dianggap milik masyarakat."],
    ["Rasus Menjauh", "Rasus mencintai Srintil, namun sulit menerima aturan yang mengiringi kehidupan seorang ronggeng. Ia memilih pergi dan mencari dunia yang lebih luas, meski perpisahan itu tidak menghapus ikatan batin mereka."],
    ["Kekuasaan Masuk ke Dukuh", "Perubahan politik membuat simbol-simbol tradisi dibaca sebagai tanda keberpihakan. Warga Dukuh Paruk yang tidak memahami permainan kekuasaan ikut terseret, dan pesta yang dahulu dianggap biasa berubah menjadi sumber kecurigaan."],
    ["Hukuman dan Kehancuran", "Ketika aparat dan kelompok politik bertindak, Srintil kehilangan ruang aman dan martabatnya. Dukuh mengalami ketakutan, kelaparan, serta perpecahan yang memperlihatkan betapa mudah rakyat kecil dijadikan korban."],
    ["Cinta, Trauma, dan Harapan", "Pertemuan kembali Srintil dan Rasus membawa luka yang tidak bisa diselesaikan dengan kata-kata sederhana. Kisah mereka menjadi kritik terhadap kemiskinan dan tradisi yang tidak memberi pilihan, sekaligus penghormatan terhadap manusia yang terus mencari martabat."]
  ],
  "Ayat-Ayat Cinta": [
    ["Fahri di Al-Azhar", "Fahri menjalani kehidupan sebagai mahasiswa Indonesia di Kairo dan berusaha memahami agama melalui belajar serta pergaulan. Ia tinggal bersama teman-teman yang membentuk lingkungan sosial sekaligus menjadi saksi perjalanan hidupnya."],
    ["Maria dan Aisha", "Maria menunjukkan perhatian kepada Fahri melalui percakapan dan sikap terbuka, sedangkan Aisha hadir sebagai perempuan yang menjaga prinsip dan memiliki latar keluarga yang kuat. Fahri harus menghadapi perasaan yang tumbuh dengan penuh pertimbangan."],
    ["Tetangga dan Perbedaan", "Fahri berusaha menolong orang-orang di sekitarnya, termasuk mereka yang berbeda agama dan latar sosial. Sikap itu menimbulkan kedekatan, tetapi juga membuat kehidupan pribadinya mudah disalahpahami oleh lingkungan."],
    ["Tuduhan", "Sebuah tuduhan serius membuat Fahri berhadapan dengan hukum dan opini publik. Ia kehilangan kebebasan, sementara keluarganya dan orang-orang terdekat mencari cara untuk membuktikan fakta di tengah tekanan masyarakat."],
    ["Pengadilan dan Kesetiaan", "Proses hukum menjadi ujian bagi keyakinan Fahri dan hubungan dengan orang-orang yang mencintainya. Dukungan Aisha, kesaksian Maria, dan bantuan sahabat memperlihatkan bahwa kebenaran membutuhkan keberanian untuk bersuara."],
    ["Cinta sebagai Tanggung Jawab", "Penyelesaian konflik tidak hanya berbicara tentang siapa yang dicintai Fahri, tetapi juga tentang bagaimana ia memperlakukan manusia lain. Cinta dipahami sebagai kesetiaan, pengampunan, dan tanggung jawab moral."]
  ],
  "Supernova": [
    ["Kepingan Pertama", "Novel dibuka dengan percakapan antara tokoh yang memakai nama samaran dan membahas cinta, sains, serta keberadaan manusia. Percakapan itu menjadi bingkai yang menghubungkan cerita pribadi dengan gagasan yang lebih luas."],
    ["Rana dan Ferre", "Rana menjalani kehidupan yang tampak mapan, sedangkan Ferre dikenal sebagai sosok sukses yang menyimpan kekosongan. Pertemuan mereka membentuk hubungan intens yang menantang batas moral, identitas, dan kehidupan yang telah mereka bangun."],
    ["Dunia yang Tidak Sederhana", "Tokoh-tokoh lain hadir dengan latar dan keinginan masing-masing, sehingga cerita bergerak melalui banyak sudut pandang. Tidak ada keputusan yang berdiri sendiri karena setiap hubungan membawa konsekuensi bagi orang lain."],
    ["Membaca Diri", "Percakapan tentang teori, mitos, dan teknologi berjalan bersamaan dengan pergulatan batin para tokoh. Pengetahuan tidak hadir sebagai hiasan, tetapi menjadi cara mereka mempertanyakan apakah manusia benar-benar bebas menentukan hidupnya."],
    ["Krisis Pilihan", "Hubungan yang semakin rumit memaksa tokoh-tokohnya mengakui keinginan yang selama ini disembunyikan. Mereka menghadapi risiko kehilangan reputasi, pasangan, dan gambaran tentang diri yang telah mereka percaya."],
    ["Jaringan Supernova", "Pada akhirnya, kisah personal dan gagasan kosmik saling berkelindan. Supernova menggambarkan manusia sebagai bagian dari jaringan besar, tempat cinta, pengetahuan, dan pilihan kecil dapat mengubah arah kehidupan."]
  ],
  "Bumi Manusia": [
    ["Minke dan Dunia Kolonial", "Minke adalah pemuda pribumi yang bersekolah di HBS dan mampu menulis dalam bahasa Belanda. Keistimewaan pendidikan itu tidak menghapus kenyataan bahwa ia tetap berada di bawah aturan rasial kolonial."],
    ["Keluarga Nyai Ontosoroh", "Di Wonokromo, Minke bertemu Nyai Ontosoroh dan anaknya, Annelies. Nyai yang tidak mendapat pendidikan formal justru mengelola rumah, perusahaan, dan pendidikan anak-anaknya dengan kecerdasan serta ketegasan."],
    ["Cinta Minke dan Annelies", "Minke dan Annelies saling mencintai, tetapi hubungan mereka berada dalam masyarakat yang membedakan manusia berdasarkan asal-usul. Kedekatan itu membuat Minke semakin dekat dengan keluarga Nyai dan semakin berani menilai ulang adat kolonial."],
    ["Hukum yang Tidak Adil", "Ketika urusan keluarga dan status hukum Annelies dipersoalkan, pengadilan menjadi arena yang menentukan hidup mereka. Nyai Ontosoroh melawan dengan pengetahuan dan keberanian, meski sistem tidak menganggapnya memiliki kedudukan yang setara."],
    ["Kehilangan", "Keputusan hukum memisahkan orang-orang yang saling mencintai dan merampas hak mereka menentukan masa depan. Minke menyaksikan bagaimana bahasa, pendidikan, dan bukti tidak selalu cukup untuk mengalahkan kekuasaan."],
    ["Menjadi Terpelajar", "Minke akhirnya memahami bahwa pendidikan bukan hanya jalan untuk naik kelas sosial. Menjadi terpelajar berarti berani berpihak pada keadilan, menulis kesaksian, dan mempertahankan martabat manusia di tengah kolonialisme."]
  ],
  "Pangeran Diponegoro": [
    ["Jawa dan Keraton", "Peter Carey menggambarkan Jawa pada awal abad ke-19 sebagai ruang yang penuh perubahan. Keraton, pejabat kolonial, bangsawan, dan rakyat desa berada dalam jaringan kekuasaan yang membuat persoalan pribadi mudah berubah menjadi konflik politik."],
    ["Masa Muda Diponegoro", "Diponegoro dibentuk oleh lingkungan keraton sekaligus oleh kehidupan spiritual dan kedekatannya dengan masyarakat. Ia mengembangkan pandangan bahwa kepemimpinan bukan hanya hak keturunan, tetapi juga kewajiban menjaga keseimbangan dan keadilan."],
    ["Tekanan Kolonial", "Pajak, campur tangan dalam urusan keraton, dan perubahan tata ruang menambah kemarahan rakyat. Pemasangan patok di wilayah yang dianggap sakral menjadi salah satu pemicu yang membuat ketegangan berubah menjadi perlawanan terbuka."],
    ["Perang Jawa", "Perlawanan meluas dan melibatkan banyak lapisan masyarakat. Diponegoro menggunakan jaringan desa, tokoh agama, dan pasukan bergerak, sementara Belanda mengandalkan benteng, logistik, serta strategi untuk memecah kekuatan lawan."],
    ["Perundingan dan Penangkapan", "Setelah perang berlangsung lama, tekanan militer dan politik mempersempit ruang gerak Diponegoro. Pertemuan untuk membicarakan perdamaian berakhir dengan penangkapannya, sebuah peristiwa yang menjadi titik penting dalam sejarah perang tersebut."],
    ["Warisan Diponegoro", "Kisahnya tidak berhenti pada kekalahan militer atau pengasingan. Diponegoro meninggalkan warisan tentang kepemimpinan, iman, perlawanan terhadap kesewenang-wenangan, dan cara sejarah sebuah bangsa dibentuk oleh ingatan kolektif."]
  ]
};

function expandStoryToTwentyPages(book, pages) {
  const chapterNames = [
    "Bab 1 - Dunia Sebelum Perubahan",
    "Bab 2 - Tokoh-Tokoh Bertemu",
    "Bab 3 - Hubungan Mulai Teruji",
    "Bab 4 - Tanda Pertama Konflik",
    "Bab 5 - Pilihan yang Tidak Terhindarkan",
    "Bab 6 - Konsekuensi Awal",
    "Bab 7 - Tekanan dari Lingkungan",
    "Bab 8 - Rahasia Masa Lalu",
    "Bab 9 - Rencana yang Gagal",
    "Bab 10 - Titik Balik",
    "Bab 11 - Masalah Mencapai Puncak",
    "Bab 12 - Tokoh Utama Bertindak",
    "Bab 13 - Konfrontasi",
    "Bab 14 - Pengorbanan",
    "Bab 15 - Kebenaran Terungkap",
    "Bab 16 - Setelah Kehilangan",
    "Bab 17 - Jalan Penyelesaian",
    "Bab 18 - Dampak bagi Orang Lain",
    "Bab 19 - Pilihan Terakhir",
    "Bab 20 - Tamat"
  ];

  const sourceIndexForPage = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5];
  const continuations = [
    "Cerita dimulai dari keadaan ini; kebiasaan dan hubungan awal menjadi dasar bagi semua keputusan berikutnya.",
    "Pertemuan tersebut memperlihatkan tujuan dan kelemahan setiap tokoh, sehingga pembaca memahami apa yang mereka pertaruhkan.",
    "Kedekatan yang terbentuk membuat perubahan kecil terasa penting dan menghubungkan kehidupan pribadi dengan konflik utama.",
    "Gangguan pertama muncul dari keadaan yang tidak dapat mereka kendalikan, lalu memaksa mereka meninggalkan rutinitas.",
    "Tokoh utama memilih satu jalan, sementara pilihan lain mulai tertutup. Keputusan ini menjadi sebab langsung dari masalah berikutnya.",
    "Akibatnya segera terlihat dalam hubungan keluarga, persahabatan, pekerjaan, atau komunitas tempat mereka hidup.",
    "Lingkungan sekitar ikut bereaksi dan memperbesar masalah, sehingga konflik tidak lagi hanya menjadi urusan satu tokoh.",
    "Petunjuk tentang masa lalu menjelaskan mengapa seseorang bertindak demikian dan membuat peristiwa sebelumnya terasa lebih masuk akal.",
    "Upaya pertama untuk memperbaiki keadaan tidak berhasil. Kegagalan itu membuat tokoh-tokohnya menyadari bahwa cara lama tidak cukup.",
    "Sebuah informasi atau pertemuan mengubah arah cerita dan memberi kesempatan baru, tetapi juga meningkatkan risiko yang harus mereka tanggung.",
    "Konflik mencapai keadaan paling genting; kepentingan yang berlawanan tidak mungkin lagi disembunyikan atau ditunda.",
    "Tokoh utama berhenti menunggu bantuan dan mengambil tindakan berdasarkan pengetahuan yang telah dikumpulkan sejak awal cerita.",
    "Tindakan itu membawa mereka berhadapan langsung dengan sumber persoalan, bukan hanya dengan gejala yang tampak di permukaan.",
    "Penyelesaian menuntut kehilangan atau pengorbanan. Tidak semua keinginan dapat dipenuhi tanpa melukai pihak lain.",
    "Kebenaran yang terbuka mengubah cara tokoh-tokohnya memahami hubungan dan peristiwa yang telah mereka lalui.",
    "Sesudah konflik memuncak, mereka harus hidup dengan akibat nyata dari pilihan tersebut dan menerima bahwa keadaan tidak bisa kembali seperti semula.",
    "Langkah-langkah kecil untuk memperbaiki keadaan mulai dilakukan, meskipun luka dan persoalan lama belum sepenuhnya selesai.",
    "Perubahan tokoh utama berdampak pada orang-orang di sekitarnya dan memperjelas gagasan utama yang dibawa cerita.",
    "Pada keputusan terakhir, tokoh-tokohnya memilih berdasarkan pengalaman, bukan lagi berdasarkan ketakutan atau harapan yang naif.",
    `Perjalanan ${book.title} berakhir dengan konsekuensi yang jelas dan perubahan yang menetap. Ini adalah ringkasan naratif orisinal berdasarkan alur umum karya, bukan salinan teks novel.`
  ];

  return chapterNames.map((chapter, index) => {
    const sourcePage = pages[Math.min(sourceIndexForPage[index], pages.length - 1)];
    return [
      `${chapter}: ${sourcePage[0]}`,
      `${sourcePage[1]} ${continuations[index]}`
    ];
  });
}

books.forEach((book) => {
  const profile = storyProfiles[book.title];
  const pages = detailedStoryPages[book.title] || profile?.pages || [[
    "Awal Cerita",
    `Kisah ${book.title} karya ${book.author} dimulai dari tokoh dan latar yang menjadi dasar konflik utama.`
  ]];

  storyProfiles[book.title] = {
    pages: expandStoryToTwentyPages(book, pages)
  };
});

let currentGenre = "Semua";
let selectedBook = null;
let currentPage = 1;
let isTurningPage = false;
let currentLanguage = localStorage.getItem("pustakaLanguage") || "id";
const coverLookupCache = new Map();

const translations = {
  id: {
    catalog: "Katalog", shelf: "Rak Saya", librarian: "Pustakawan", login: "Masuk", profile: "Profile", settings: "Pengaturan", logout: "Keluar", explore: "Jelajahi Perpustakaan →", welcome: "Selamat datang di IQORGMslim Digital Library. Temukan berbagai karya, jelajahi genre favoritmu, dan nikmati pengalaman membaca digital dengan tampilan modern.", discover: "Temukan Buku", search: "Cari judul atau penulis...", all: "Semua", save: "Simpan", saved: "Tersimpan", read: "Baca", previous: "← Sebelumnya", next: "Selanjutnya →", profileInfo: "Atur identitas yang tampil di akun perpustakaanmu.", changePhoto: "Ganti foto", saveProfile: "Simpan profile", settingsSubtitle: "Pilih bahasa yang digunakan di seluruh website.", genre: { Horor: "Horor", Romance: "Romansa", Adventure: "Petualangan", Fantasy: "Fantasi", Sad: "Sedih", Sains: "Sains", Kedokteran: "Kedokteran", Mystery: "Misteri", Drama: "Drama" }
  },
  en: {
    catalog: "Catalog", shelf: "My Shelf", librarian: "Librarian", login: "Login", profile: "Profile", settings: "Settings", logout: "Logout", explore: "Explore Library →", welcome: "Welcome to IQORGMslim Digital Library. Discover remarkable works, explore your favorite genres, and enjoy a modern digital reading experience.", discover: "Discover Books", search: "Search by title or author...", all: "All", save: "Save", saved: "Saved", read: "Read", previous: "← Previous", next: "Next →", profileInfo: "Manage the identity shown on your library account.", changePhoto: "Change photo", saveProfile: "Save profile", settingsSubtitle: "Choose the language used throughout the website.", genre: { Horor: "Horror", Romance: "Romance", Adventure: "Adventure", Fantasy: "Fantasy", Sad: "Sad", Sains: "Science", Kedokteran: "Medicine", Mystery: "Mystery", Drama: "Drama" }
  }
};

function text(key) { return translations[currentLanguage][key]; }

function applyLanguage(language = currentLanguage) {
  currentLanguage = language;
  localStorage.setItem("pustakaLanguage", language);
  const dictionary = translations[language];
  const nav = document.querySelectorAll("nav button");
  if (nav[0]) nav[0].textContent = dictionary.catalog;
  if (nav[1]) nav[1].textContent = dictionary.shelf;
  if (nav[2]) nav[2].textContent = dictionary.librarian;
  const login = document.querySelector(".login");
  if (login) login.textContent = dictionary.login;
  const explore = document.querySelector(".explore");
  if (explore) explore.textContent = dictionary.explore;
  const heroText = document.querySelector(".hero-content > p");
  if (heroText) heroText.textContent = dictionary.welcome;
  const discover = document.querySelector(".section-title h2");
  if (discover) discover.textContent = dictionary.discover;
  const search = getEl("searchInput");
  if (search) search.placeholder = dictionary.search;
  const genres = document.querySelectorAll(".genre");
  genres.forEach((button) => { const key = button.dataset.genre; button.textContent = key === "Semua" ? dictionary.all : dictionary.genre[key] || key; });
  const accountButtons = document.querySelectorAll(".account-menu button");
  if (accountButtons[0]) accountButtons[0].textContent = dictionary.profile;
  if (accountButtons[1]) accountButtons[1].textContent = dictionary.settings;
  if (accountButtons[2]) accountButtons[2].textContent = dictionary.logout;
  const profileInfo = document.querySelector(".profile-info");
  if (profileInfo) profileInfo.textContent = dictionary.profileInfo;
  const profileUpload = document.querySelector(".profile-upload");
  if (profileUpload) profileUpload.childNodes[0].textContent = `${dictionary.changePhoto} `;
  const profileSubmit = document.querySelector("#profileForm .auth-submit");
  if (profileSubmit) profileSubmit.textContent = dictionary.saveProfile;
  const settingsSubtitle = getEl("settingsSubtitle");
  if (settingsSubtitle) settingsSubtitle.textContent = dictionary.settingsSubtitle;
  document.querySelectorAll(".language-option").forEach((button) => button.classList.toggle("active", button.dataset.language === language));
  const previous = getEl("previous");
  const next = getEl("next");
  if (previous) previous.textContent = dictionary.previous;
  if (next) next.textContent = dictionary.next;
  renderBooks();
  renderShelf();
}
let savedBookTitles = JSON.parse(localStorage.getItem("savedBookTitles") || "[]");

function getEl(id) {
  return document.getElementById(id);
}

function getFallbackCover(book) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#172554"/>
          <stop offset="100%" stop-color="#0f766e"/>
        </linearGradient>
      </defs>
      <rect width="600" height="900" fill="url(#bg)"/>
      <circle cx="500" cy="120" r="170" fill="#f59e0b" opacity=".22"/>
      <circle cx="90" cy="790" r="220" fill="#fb7185" opacity=".18"/>
      <path d="M0 620 C170 500 300 760 600 570 L600 900 L0 900Z" fill="#020617" opacity=".32"/>
      <text x="54" y="110" fill="#fbbf24" font-family="Georgia,serif" font-size="24" letter-spacing="4">DIGITAL LIBRARY</text>
      <text x="54" y="610" fill="white" font-family="Georgia,serif" font-size="48" font-weight="700">${book.title}</text>
      <text x="54" y="665" fill="#dbeafe" font-family="Arial,sans-serif" font-size="24">${book.author}</text>
      <rect x="54" y="710" width="100" height="4" fill="#fbbf24"/>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createIntroOverlay() {
  const overlay = document.createElement("div");
  overlay.id = "introOverlay";

  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "99999";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.background = "radial-gradient(circle at center, #0f172a 0%, #020817 60%, #01050d 100%)";
  overlay.style.opacity = "1";
  overlay.style.transition = "opacity 700ms ease, transform 700ms ease";
  overlay.style.transform = "scale(1)";

  const text = document.createElement("div");
  text.textContent = "Perpustakaan Digital";
  text.style.fontFamily = "'Poppins', sans-serif";
  text.style.textAlign = "center";
  text.style.margin = "0";
  text.style.textShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  text.style.fontSize = "2.5rem";
  text.style.fontWeight = "800";
  text.style.letterSpacing = "0.2rem";
  text.style.color = "#dfe6ec";
  text.style.textTransform = "uppercase";
  text.style.opacity = "0";
  text.style.transform = "translateY(20px)";
  text.style.transition = "opacity 500ms ease, transform 500ms ease";

  overlay.appendChild(text);
  document.body.appendChild(overlay);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    });
  });

  return { overlay, text };
}

function startIntroAnimation() {
  const { overlay, text } = createIntroOverlay();

  setTimeout(() => {
    text.style.opacity = "0";
    text.style.transform = "translateY(-18px)";
    overlay.style.opacity = "0";
    overlay.style.transform = "scale(1.04)";

    setTimeout(() => {
      overlay.remove();
    }, 700);
  }, 1200);
}

function setNavActive(index) {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

function isAuthenticated() {
  const loggedInFromServer = new URLSearchParams(window.location.search).get("logged_in") === "1";
  if (loggedInFromServer) {
    localStorage.setItem("pustakaSession", "active");
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  return Boolean(localStorage.getItem("pustakaCurrentUser") || localStorage.getItem("pustakaSession") === "active");
}

function unlockAuthenticatedFeatures() {
  document.querySelectorAll(".requires-auth").forEach((element) => element.classList.remove("requires-auth"));
  const loginButton = document.querySelector(".login");
  const accountArea = getEl("accountArea");
  if (loginButton) loginButton.style.display = "none";
  if (accountArea) accountArea.classList.add("visible");
  renderProfile();
}

function getProfile() {
  return JSON.parse(localStorage.getItem("pustakaProfile") || "{}");
}

function defaultAvatar() {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#26231d"/><circle cx="60" cy="43" r="22" fill="#c9a86a"/><path d="M22 108c5-29 24-42 38-42s33 13 38 42" fill="#c9a86a"/></svg>')}`;
}

function renderProfile() {
  const profile = getProfile();
  const avatar = profile.photo || defaultAvatar();
  const headerAvatar = getEl("headerAvatar");
  const profilePhoto = getEl("profilePhoto");
  if (headerAvatar) headerAvatar.src = avatar;
  if (profilePhoto) profilePhoto.src = avatar;
}

function openProfile() {
  if (!requireLogin()) return;
  const profile = getProfile();
  getEl("profileUsername").value = profile.username || JSON.parse(localStorage.getItem("pustakaCurrentUser") || "{}").name || "";
  getEl("profileBio").value = profile.bio || "";
  renderProfile();
  getEl("accountMenu").classList.remove("show");
  getEl("profileOverlay").classList.add("show");
}

function closeProfile() {
  const overlay = getEl("profileOverlay");
  if (overlay) overlay.classList.remove("show");
}

function openSettings() {
  if (!requireLogin()) return;
  getEl("accountMenu").classList.remove("show");
  getEl("settingsOverlay").classList.add("show");
}

function closeSettings() {
  const overlay = getEl("settingsOverlay");
  if (overlay) overlay.classList.remove("show");
}

function saveProfile(event) {
  event.preventDefault();
  const profile = getProfile();
  profile.username = getEl("profileUsername").value.trim();
  profile.bio = getEl("profileBio").value.trim();
  localStorage.setItem("pustakaProfile", JSON.stringify(profile));
  renderProfile();
  closeProfile();
}

function logoutUser() {
  localStorage.removeItem("pustakaCurrentUser");
  localStorage.removeItem("pustakaSession");
  localStorage.removeItem("pustakaProfile");
  const destination = isLocalPage() ? "perpus.html" : "yttta.php";
  window.location.href = destination;
}

function requireLogin() {
  if (isAuthenticated()) return true;
  openLogin();
  return false;
}

function showCatalog(animate = true) {
  if (!requireLogin()) return;
  const hero = getEl("hero");
  const library = getEl("library");
  const shelf = getEl("shelf");
  const admin = getEl("admin");

  if (hero) {
    hero.style.display = "grid";
    hero.classList.remove("is-hidden", "is-exiting");
    hero.style.opacity = animate ? "1" : "0";
    hero.style.transition = animate ? "opacity .6s ease" : "none";
  }
  if (library) {
    library.style.display = "block";
    library.classList.add("library-view");
    library.classList.remove("library-enter");
    library.style.opacity = animate ? "0" : "1";
    library.style.transition = animate ? "opacity .7s ease" : "none";
  }

  if (shelf) shelf.classList.remove("active");
  if (admin) admin.classList.remove("active");

  const firstSection = library.querySelector(".section:not(.dashboard)");
  if (firstSection) firstSection.style.display = "block";

  setNavActive(0);
  renderBooks();
  if (animate) {
    window.requestAnimationFrame(() => {
      if (hero) hero.style.opacity = "0";
      if (library) library.style.opacity = "1";
    });
    window.setTimeout(() => {
      if (hero) {
        hero.style.display = "none";
        hero.classList.add("is-hidden");
        hero.style.opacity = "";
        hero.style.transition = "";
      }
      if (library) library.style.transition = "";
    }, 650);
  } else {
    if (hero) {
      hero.style.display = "none";
      hero.classList.add("is-hidden");
    }
  }
  if (library) window.scrollTo({ top: 0, behavior: "auto" });
}

function showShelf() {
  if (!requireLogin()) return;
  const hero = getEl("hero");
  const library = getEl("library");
  const shelf = getEl("shelf");
  const admin = getEl("admin");

  if (hero) hero.style.display = "none";
  if (library) library.style.display = "block";

  if (shelf) shelf.classList.add("active");
  if (admin) admin.classList.remove("active");

  const firstSection = library.querySelector(".section:not(.dashboard)");
  if (firstSection) firstSection.style.display = "none";

  setNavActive(1);
  renderShelf();
}

function showAdmin() {
  if (!requireLogin()) return;
  const hero = getEl("hero");
  const library = getEl("library");
  const shelf = getEl("shelf");
  const admin = getEl("admin");

  if (hero) hero.style.display = "none";
  if (library) library.style.display = "block";

  if (shelf) shelf.classList.remove("active");
  if (admin) admin.classList.add("active");

  const firstSection = library.querySelector(".section:not(.dashboard)");
  if (firstSection) firstSection.style.display = "none";

  setNavActive(2);
}

function openLibrary() {
  if (!requireLogin()) return;
  showCatalog();
}

function searchBooks() {
  renderBooks();
}

function filterGenre(genre, button) {
  currentGenre = genre;

  document.querySelectorAll(".genre").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (button) button.classList.add("active");

  renderBooks();
}

function renderBooks() {
  const grid = getEl("bookGrid");
  if (!grid) return;

  const input = getEl("searchInput");
  const search = input ? input.value.trim().toLowerCase() : "";

  grid.innerHTML = "";

  const filtered = books.filter((book) => {
    const genreMatch = currentGenre === "Semua" || book.genre === currentGenre;
    const searchMatch =
      !search ||
      book.title.toLowerCase().includes(search) ||
      book.author.toLowerCase().includes(search);

    return genreMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; color: #bdbdbd;">
        Buku tidak ditemukan.
      </div>
    `;
    return;
  }

  filtered.forEach((book) => {
    const card = document.createElement("article");
    card.className = "book-card";

    card.innerHTML = `
      <img class="cover" data-title="${book.title}" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src=getFallbackCover(books.find((item) => item.title === this.alt));" />
      <small>${book.genre}</small>
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <div class="card-buttons">
        <button type="button" class="read-btn">${text("read")}</button>
        <button type="button" class="save-btn ${savedBookTitles.includes(book.title) ? "saved" : ""}">${savedBookTitles.includes(book.title) ? text("saved") : text("save")}</button>
      </div>
    `;

    card.querySelector(".read-btn").addEventListener("click", () => {
      openReader(book.title);
    });

    card.querySelector(".save-btn").addEventListener("click", () => {
      saveBook(book);
    });

    grid.appendChild(card);
  });

  loadRealCovers(filtered, grid);
}

async function findRealCover(book) {
  if (coverLookupCache.has(book.title)) return coverLookupCache.get(book.title);

  const query = encodeURIComponent(`intitle:${book.title} inauthor:${book.author}`);
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&printType=books`);
    if (!response.ok) throw new Error("Cover service unavailable");
    const result = await response.json();
    const volume = (result.items || []).find((item) => item.volumeInfo?.imageLinks?.thumbnail);
    const cover = volume?.volumeInfo?.imageLinks?.thumbnail?.replace(/^http:/, "https:");
    coverLookupCache.set(book.title, cover || null);
    return cover || null;
  } catch (error) {
    coverLookupCache.set(book.title, null);
    return null;
  }
}

async function loadRealCovers(displayedBooks, container) {
  await Promise.all(displayedBooks.map(async (book) => {
    const cover = await findRealCover(book);
    if (!cover) return;
    const image = container.querySelector(`img[data-title="${CSS.escape(book.title)}"]`);
    if (image) image.src = cover;
  }));
}

function saveBook(book) {
  if (!savedBookTitles.includes(book.title)) {
    savedBookTitles.push(book.title);
    localStorage.setItem("savedBookTitles", JSON.stringify(savedBookTitles));
  }

  renderBooks();
  renderShelf();
}

function renderShelf() {
  const shelfBooks = getEl("shelfBooks");
  if (!shelfBooks) return;

  const savedBooks = savedBookTitles
    .map((title) => books.find((book) => book.title === title))
    .filter(Boolean);

  if (savedBooks.length === 0) {
    shelfBooks.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; color: #999; padding: 35px 0;">
        Belum ada buku yang disimpan.
      </div>
    `;
    return;
  }

  shelfBooks.innerHTML = savedBooks.map((book) => `
    <article class="book-card">
      <img class="cover" data-title="${book.title}" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null; this.src=getFallbackCover(books.find((item) => item.title === this.alt));" />
      <small>${book.genre}</small>
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <div class="card-buttons">
        <button type="button" class="read-btn" data-title="${book.title}">${text("read")}</button>
        <button type="button" class="save-btn saved" data-title="${book.title}">${text("saved")}</button>
      </div>
    </article>
  `).join("");

  shelfBooks.querySelectorAll(".read-btn").forEach((button) => {
    button.addEventListener("click", () => openReader(button.dataset.title));
  });

  shelfBooks.querySelectorAll(".save-btn").forEach((button) => {
    button.addEventListener("click", () => removeSavedBook(button.dataset.title));
  });

  loadRealCovers(savedBooks, shelfBooks);
}

function removeSavedBook(title) {
  savedBookTitles = savedBookTitles.filter((savedTitle) => savedTitle !== title);
  localStorage.setItem("savedBookTitles", JSON.stringify(savedBookTitles));
  renderBooks();
  renderShelf();
}

function getBookProfile(book) {
  return storyProfiles[book.title] || {
    pages: [
      ["Tentang Buku Ini", `${book.title} adalah novel karya ${book.author}, diterbitkan oleh ${book.publisher} pada ${book.year}. Edisi ini hadir sebagai kartu katalog dan ringkasan pengantar, bukan salinan teks novel berhak cipta.`],
      ["Cerita Berlanjut", "Bagian ini melanjutkan pembacaan tanpa mengulang pengenalan tokoh, latar, atau informasi bibliografi dari halaman sebelumnya. Baca edisi resmi untuk menikmati cerita lengkapnya."]
    ]
  };
}

function renderReaderPage() {
  if (!selectedBook) return;

  const profile = getBookProfile(selectedBook);
  const totalPages = profile.pages.length;
  const page = profile.pages[currentPage - 1];
  const pageNumber = getEl("pageNumber");
  const pageTitle = getEl("pageTitle");
  const pageText = getEl("pageText");
  const progressBar = getEl("progressBar");
  const prevBtn = getEl("previous");
  const nextBtn = getEl("next");

  if (pageNumber) pageNumber.textContent = `HALAMAN ${currentPage} / ${totalPages}`;
  if (pageTitle) pageTitle.textContent = page[0];
  if (pageText) pageText.textContent = page[1];
  if (progressBar) progressBar.style.width = `${(currentPage / totalPages) * 100}%`;
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages;
}

function openReader(title) {
  const book = books.find((b) => b.title === title);
  if (!book) return;

  selectedBook = book;
  currentPage = 1;

  const overlay = getEl("readerOverlay");
  if (!overlay) return;

  const titleEl = getEl("readerTitle");
  const authorEl = getEl("readerAuthor");
  if (titleEl) titleEl.textContent = book.title;
  if (authorEl) authorEl.textContent = currentPage === 1
    ? `${book.author} | ${book.publisher} | ${book.year} | ${book.genre}`
    : "Lanjutan cerita";
  renderReaderPage();

  overlay.classList.add("show");
  overlay.style.display = "block";
}

function closeReader() {
  const overlay = getEl("readerOverlay");
  if (!overlay) return;

  overlay.classList.remove("show");
  overlay.style.display = "none";
}

function openLogin() {
  if (isAuthenticated()) {
    showCatalog();
    return;
  }
  const overlay = getEl("loginOverlay");
  if (!overlay) return;
  resetLoginForm();
  overlay.classList.add("show");
  const email = getEl("catalogEmail");
  if (email) email.focus();
}

function bindPasswordToggles() {
  document.querySelectorAll(".password-toggle").forEach((button) => {
    button.onclick = () => {
      const input = getEl(button.dataset.target);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      button.textContent = input.type === "password" ? "Lihat" : "Sembunyikan";
    };
  });
}

function resetLoginForm() {
  const form = getEl("authForm");
  const title = getEl("loginTitle");
  const subtitle = getEl("loginSubtitle");
  if (!form || !title || !subtitle) return;
  form.dataset.localMode = "login";
  title.textContent = "Masuk ke perpustakaan";
  subtitle.textContent = "Masuk untuk melanjutkan membaca dan menyimpan koleksi bukumu.";
  form.innerHTML = `
    <label for="catalogEmail">Email</label>
    <input id="catalogEmail" name="email" type="email" autocomplete="email" required>
    <label for="catalogPassword">Password</label>
    <div class="password-field"><input id="catalogPassword" name="password" type="password" autocomplete="current-password" required><button class="password-toggle" type="button" data-target="catalogPassword">Lihat</button></div>
    <button class="auth-submit" type="submit" name="login">Masuk ke perpustakaan</button>`;
  form.onsubmit = null;
  bindPasswordToggles();
}

function closeLogin() {
  const overlay = getEl("loginOverlay");
  if (overlay) overlay.classList.remove("show");
}

function isLocalPage() {
  return window.location.protocol === "file:";
}

function showAuthMessage(message) {
  const element = getEl("authMessage");
  if (!element) return;
  element.textContent = message;
  element.classList.add("show");
}

function openLocalRegister(event) {
  if (!isLocalPage()) return true;
  event.preventDefault();
  const form = getEl("authForm");
  const title = getEl("loginTitle");
  const subtitle = getEl("loginSubtitle");
  if (!form || !title || !subtitle) return false;
  form.dataset.localMode = "register";
  title.textContent = "Daftar akun baru";
  subtitle.textContent = "Buat akun terlebih dahulu sebelum masuk ke perpustakaan.";
  form.innerHTML = `
    <label for="catalogName">Nama lengkap</label>
    <input id="catalogName" name="name" type="text" required>
    <label for="catalogEmail">Email</label>
    <input id="catalogEmail" name="email" type="email" required>
    <label for="catalogPassword">Password minimal 8 karakter</label>
    <div class="password-field"><input id="catalogPassword" name="password" type="password" minlength="8" required><button class="password-toggle" type="button" data-target="catalogPassword">Lihat</button></div>
    <button class="auth-submit" type="submit" name="register">Daftar akun</button>`;
  bindPasswordToggles();
  form.onsubmit = (submitEvent) => {
    submitEvent.preventDefault();
    const email = getEl("catalogEmail").value.trim().toLowerCase();
    const users = JSON.parse(localStorage.getItem("pustakaUsers") || "[]");
    if (users.some((user) => user.email === email)) {
      showAuthMessage("Email sudah terdaftar di perangkat ini.");
      return;
    }
    users.push({ name: getEl("catalogName").value.trim(), email, password: getEl("catalogPassword").value });
    localStorage.setItem("pustakaUsers", JSON.stringify(users));
    showAuthMessage("Akun berhasil dibuat. Silakan masuk dengan akun tersebut.");
    resetLoginForm();
  };
  return false;
}

function openLocalForgot(event) {
  if (!isLocalPage()) return true;
  event.preventDefault();
  const email = window.prompt("Masukkan email akun lokal:");
  if (email) window.alert("Mode lokal aktif. Password dapat dibuat ulang dengan mendaftar menggunakan email baru.");
  return false;
}

function handleLocalLogin(event) {
  if (!isLocalPage() || event.currentTarget.dataset.localMode === "register") return;
  event.preventDefault();
  const email = getEl("catalogEmail").value.trim().toLowerCase();
  const password = getEl("catalogPassword").value;
  const users = JSON.parse(localStorage.getItem("pustakaUsers") || "[]");
  const user = users.find((item) => item.email === email && item.password === password);
  if (!user) {
    showAuthMessage("Email atau password lokal salah. Silakan daftar terlebih dahulu.");
    return;
  }
  localStorage.setItem("pustakaCurrentUser", JSON.stringify(user));
  localStorage.setItem("pustakaSession", "active");
  unlockAuthenticatedFeatures();
  closeLogin();
  openLibrary();
  showAuthMessage(`Selamat datang, ${user.name || user.email}.`);
}

function changePage(step) {
  if (!selectedBook || isTurningPage) return;

  const totalPages = getBookProfile(selectedBook).pages.length;
  const nextPage = Math.max(1, Math.min(totalPages, currentPage + step));
  if (nextPage === currentPage) return;

  const paper = getEl("paper");
  isTurningPage = true;

  currentPage = nextPage;

  if (paper) {
    paper.classList.remove("turn-next", "turn-prev");
    void paper.offsetWidth;
    paper.classList.add(step > 0 ? "turn-next" : "turn-prev");

    window.setTimeout(() => {
      renderReaderPage();
    }, 320);

    window.setTimeout(() => {
      paper.classList.remove("turn-next", "turn-prev");
      isTurningPage = false;
    }, 800);
  } else {
    renderReaderPage();
    isTurningPage = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const alreadyAuthenticated = isAuthenticated();
  if (alreadyAuthenticated) unlockAuthenticatedFeatures();
  const library = getEl("library");
  if (library) library.style.display = "none";

  const hero = getEl("hero");
  if (hero) hero.style.display = "grid";

  const searchInput = getEl("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", searchBooks);
  }

  const prevBtn = getEl("previous");
  const nextBtn = getEl("next");
  const closeBtn = document.querySelector(".close");
  const authForm = getEl("authForm");
  const profileForm = getEl("profileForm");
  const moreButton = getEl("moreButton");
  const photoInput = getEl("profilePhotoInput");

  if (prevBtn) prevBtn.addEventListener("click", () => changePage(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => changePage(1));
  if (closeBtn) closeBtn.addEventListener("click", closeReader);
  if (authForm) authForm.addEventListener("submit", handleLocalLogin);
  if (profileForm) profileForm.addEventListener("submit", saveProfile);
  if (moreButton) moreButton.addEventListener("click", () => getEl("accountMenu").classList.toggle("show"));
  if (photoInput) photoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const profile = getProfile();
      profile.photo = reader.result;
      localStorage.setItem("pustakaProfile", JSON.stringify(profile));
      renderProfile();
    };
    reader.readAsDataURL(file);
  });
  document.querySelectorAll(".language-option").forEach((button) => button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
    closeSettings();
  }));
  bindPasswordToggles();
  applyLanguage();

  startIntroAnimation();
  renderBooks();
});

window.showCatalog = showCatalog;
window.showShelf = showShelf;
window.showAdmin = showAdmin;
window.openLibrary = openLibrary;
window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.openLocalRegister = openLocalRegister;
window.openLocalForgot = openLocalForgot;
window.handleLocalLogin = handleLocalLogin;
window.openProfile = openProfile;
window.closeProfile = closeProfile;
window.logoutUser = logoutUser;
window.openSettings = openSettings;
window.closeSettings = closeSettings;
window.searchBooks = searchBooks;
window.filterGenre = filterGenre;
window.openReader = openReader;
window.closeReader = closeReader;
window.changePage = changePage;