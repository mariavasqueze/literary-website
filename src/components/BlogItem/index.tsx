import "./blog-item.scss";
import Image from "next/image";

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
