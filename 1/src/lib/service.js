import axios from "axios";

const getData = async (id) => {
  const { data: userCreds } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const { data: userPosts } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  return { ...userCreds, posts: [...userPosts] };
};

export default getData;
