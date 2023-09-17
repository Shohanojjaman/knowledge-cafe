import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { title, cover, postDate, hashtags, author, authorImage, readingTime } = blog;

  return (
    <>
      <div className="space-y-6">
        <img src={cover} alt={`Image of ${title}`} className="w-full rounded-lg" />
        <div className="flex justify-between items-center">
          <div className="flex gap-6 ">
            <img className="h-14" src={authorImage} alt={`Image of ${author}`} />
            <div>
              <h5 className="text-header text-2xl">{author}</h5>
              <p className="text-body text-base">{postDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-body">0{readingTime} min read</p>
            <svg
              className="cursor-pointer"
              onClick={() => handleAddToBookmark(blog)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z"
                stroke="#111111"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-4xl text-header">{title}</h3>
        <div>
          {hashtags.map((tag, index) => (
            <span className="mr-4" key={index}>
              <a className="text-body font-medium" href={tag}>
                {tag}
              </a>
            </span>
          ))}
        </div>
        <button
          onClick={() => handleMarkAsRead(readingTime)}
          className="text-xl font-medium bg-transparent underline text-[#6047EC] border-none cursor-pointer">
          Mark as read
        </button>
      </div>
      <hr className="bg-[#1111111A] h-[1px] border-none my-8" />
    </>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
