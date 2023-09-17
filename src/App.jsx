import Blogs from './components/Blog/Blogs';
import Bookmarks from './components/Bookmark/Bookmarks';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5 flex">
        <Blogs></Blogs>
        <Bookmarks ></Bookmarks>
      </main>
    </>
  );
}

export default App;
