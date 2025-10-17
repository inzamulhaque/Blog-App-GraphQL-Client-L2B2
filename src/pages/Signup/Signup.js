import { gql, useMutation } from "@apollo/client";
import "./Signup.css";

const SIGNUP = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $bio: String
  ) {
    signup(name: $name, email: $email, password: $password, bio: $bio) {
      name
      email
    }
  }
`;

const Signup = () => {
  const [signup, { data, loading, error }] = useMutation(SIGNUP);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      bio: e.target.bio.value,
    };
    console.log("data: ", data);
    signup({ variables: data });
  };
  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <label htmlFor="">Your Name</label>
        <input name="name" type="text" />
        <label htmlFor="">Your Email</label>
        <input name="email" type="email" />
        <label htmlFor="">Your Password</label>
        <input name="password" type="password" />
        <label htmlFor="">Your Bio</label>
        <input name="bio" type="text" />
        <button type="submit" className="rounded-full p-2 bg-white text-black">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
