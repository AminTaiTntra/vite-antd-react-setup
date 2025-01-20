import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const fetchPosts = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) throw new Error("Error fetching data");
  return response.json();
};

export const PostById = () => {
  const location = useLocation();

  const id = location.pathname.split("/");

  console.log("id", id, location);
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPosts(id),
    staleTime: 10000,
  });

  if (isLoading) return <p> Loading...</p>;

  if (error) return <p> Error occured: {error.message}</p>;

  return <> {data.title}</>;
};
