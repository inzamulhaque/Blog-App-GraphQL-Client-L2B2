import "./PostCard.css";

const PostCard = ({ post }) => {
  const date = new Date(Number(post.createdAt));

  const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}-${date.getFullYear()}`;

  return (
    <div className="border w-96 m-4 p-4 rounded-md border-black-400">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <div className="text-state-500 text-sm text-gray-700 flex justify-between py-2">
        <p>{post.author.name}</p>
        <p>{formattedDate}</p>
      </div>
      <p className="text-sm">This is Content</p>
    </div>
  );
};

export default PostCard;
