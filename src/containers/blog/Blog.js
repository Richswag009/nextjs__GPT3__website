import Article from "@/components/article/Article";
import React from "react";

const Blog = () => {
  return (
    <section className="sections" id="blog">
      {/* blog heading */}
      <div>
        <h1 class="gradient__text font-extrabold text-2xl">
          A lot is happening. We are blogging about it
        </h1>
      </div>

      {/* blog content */}
      <div className="flex justify-between flex-col lg:flex-row gap-x-16 ">
        {/* group a */}
        <div className="mt-10 ">
          <Article
            title="GPT-3 and Open AI is the future,Let us explore how it is?"
            date="Apr 20, 2023"
            imgUrl="/assets/blog01.png"
          />
        </div>

        {/* group b */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 mt-10">
          <Article
            title="GPT-3 and Open AI is the future,Let us explore how it is?"
            date="Apr 20, 2023"
            imgUrl="/assets/blog02.png"
          />
          <Article
            title="GPT-3 and Open AI is the future,Let us explore how it is?"
            date="Apr 20, 2023"
            imgUrl="/assets/blog03.png"
          />
          <Article
            title="GPT-3 and Open AI is the future,Let us explore how it is?"
            date="Apr 20, 2023"
            imgUrl="/assets/blog04.png"
          />
          <Article
            title="GPT-3 and Open AI is the future,Let us explore how it is?"
            date="Apr 20, 2023"
            imgUrl="/assets/blog05.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
