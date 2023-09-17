import Blogs from './components/Blog/Blogs';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5 flex">
        <Blogs></Blogs>
        <div className="w-1/3"></div>
      </main>
    </>
  );
}

export default App;
