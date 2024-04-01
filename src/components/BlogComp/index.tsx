import Image from "next/image";
import "./blog-comp.scss";

import { articles } from "./articles";

type Article = {
  id: number;
  img: string;
  title: string;
  shortDesc: string;
  description: string;
  author: string;
  date: string;
};

interface BlogComponentProps {
  article: Article;
}

function BlogComponent() {
  return (
    <div className="blog-comp">
      <p className="blue-title articulos">Artículos y Blog</p>
      <div className="yellow-divider" />
      <div className="articles-wrap">
        {articles.slice(0, 3).map((article, index) => {
          return <BlogItem article={article} key={index} />;
        })}
      </div>
    </div>
  );
}

export default BlogComponent;

export const BlogItem = ({ article }: BlogComponentProps) => {
  return (
    <div className="blog-item">
      <Image
        src={`/assets/images/articles/${article.img}`}
        className="blog-img"
        alt="Blog 1"
        width={400}
        height={300}
      />
      <div className="item-info">
        <p className="title">{article.title}</p>
        <p className="description">{article.shortDesc}</p>
        <div className="bottom-wrap">
          <p className="link">Read More</p>
          <p className="date">{article.date}</p>
        </div>
      </div>
    </div>
  );
};
