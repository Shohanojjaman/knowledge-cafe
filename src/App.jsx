import { useState } from 'react';
import Blogs from './components/Blog/Blogs';
import Bookmarks from './components/Bookmark/Bookmarks';
import Header from './components/Header';
import './index.css';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
    console.log(bookmarks);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5 flex gap-6">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
