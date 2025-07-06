import { Link } from 'react-router-dom';

const BookCard = ({ title, author, image, id }) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="flex flex-col gap-3 pb-3">
        <div
          className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl bg-gray-200"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div>
          <p className="text-[#131118] text-base font-medium leading-normal">{title}</p>
          <p className="text-[#6e6388] text-sm font-normal leading-normal">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
