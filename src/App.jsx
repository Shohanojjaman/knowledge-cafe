import { useState } from 'react';
import Blogs from './components/Blog/Blogs';
import Bookmarks from './components/Bookmark/Bookmarks';
import Header from './components/Header';
import ReadingTime from './components/ReadingTime';
import './index.css';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  };
  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5 flex gap-6">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <div className="w-1/3 space-y-6">
          <ReadingTime readingTime={readingTime}></ReadingTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </main>
    </>
  );
}

export default App;
