import PropTypes from 'prop-types';

const ReadingTime = ({ readingTime }) => {
  return (
    <div className="rounded-lg border-[#6047EC] border-2 border-solid p-6 text-center bg-[#6047EC1A]">
      <h4 className="text-[#6047EC] text-2xl">Spent time on read : {readingTime} min</h4>
    </div>
  );
};

ReadingTime.propTypes = {
  readingTime: PropTypes.number,
};

export default ReadingTime;
