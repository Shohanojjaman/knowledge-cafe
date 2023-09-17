import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className=" bg-[#1111110D] p-7 rounded-lg space-y-4 self-start">
      <h4 className="text-2xl font-bold text-header">Bookmarked Blogs: {bookmarks.length}</h4>

      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
