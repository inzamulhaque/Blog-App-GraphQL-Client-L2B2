import { gql, useQuery } from "@apollo/client";
import PostCard from "./PostCard";

const GET_POSTS = gql`
  query AllPosts {
    posts {
      title
      content
      createdAt
      published
      author {
        name
        email
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  console.log(data);

  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-4 pb-4">Posts</h1>
      <hr />
      <PostCard></PostCard>
    </div>
  );
};

export default Posts;
