import profile from '../assets/images/profile.png';
import '../index.css';

const Header = () => {
  return (
    <header className="container mx-auto max-sm:px-4 flex justify-between items-center mb-8 border-0 border-b border-[#11111126] border-solid">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className="h-full" src={profile} alt="" />
    </header>
  );
};

export default Header;
