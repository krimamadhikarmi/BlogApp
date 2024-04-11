import { Category } from "./Category";
import { MyStoryTittle } from "./StoryTittle";

export function Post() {
  return (
    <div className="container mx-auto">
      <div class="py-16 lg:py-20">
        <div class="flex items-center pb-6">
          <MyStoryTittle />
          <a
            href="/blog"
            class="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary"
          >
            All posts
            <img
              src="./assets/img/long-arrow-right.png"
              class="ml-3"
              alt="arrow right"
            />
          </a>
          
        </div>
        <Category/>
      </div>
    </div>
  );
}
