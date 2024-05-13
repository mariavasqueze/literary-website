import Image from "next/image";
import "./blog-comp.scss";
import { articles } from "./articles";
import { BlogItem } from "../BlogItem";

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
