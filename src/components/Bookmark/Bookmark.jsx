import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-white rounded-lg p-5">
      <h4 className='text-xl font-semibold text-header'>{bookmark.title}</h4>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
