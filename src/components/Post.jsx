import { Category } from "./Category";
import { MyStoryTittle } from "./StoryTittle";

export function Post() {
  const posts = [
    {
      description: "Quis hendrerit dolor magna eget est lorem ipsum dolor sit",
      date: "July 19, 2020",
      readtime: "4 min read",
    },
    {
      description: "Senectus et netus et malesuada fames ac turpis egestas integer",
      date: "June 30, 2020",
      readtime: "5 min read",
    },
    {
      description: "Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies",
      date: "June 26, 2020",
      readtime: "3 min read",
    },
  ];


  return (
    <div className="container mx-auto">
      <div className="py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <MyStoryTittle />
          {posts.length > 3 ? (
            <a href="/blog" className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
              All posts
              <img
                src="./assets/img/long-arrow-right.png"
                className="ml-3"
                alt="arrow right"
              />
            </a>
          ) : null}
          
        </div>
        <Category posts={posts} />
      </div>
    </div>
  );
}