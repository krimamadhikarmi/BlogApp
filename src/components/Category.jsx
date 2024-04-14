import { Details } from "./Details";

export function Category({posts,limitPosts}) {
  const displayedPosts = limitPosts ? posts.slice(0, 2) : posts;
  return (
    <>
      {displayedPosts.map((post) => (
        <Details
          key={post.date}
          description={post.description}
          date={post.date}
          readtime={post.readtime}
        />
      ))}
    </>
  );
}