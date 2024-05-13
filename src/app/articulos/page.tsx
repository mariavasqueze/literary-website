import "./articulos.scss";
import Layout from "@/components/Layout/Layout";
import { articles } from "../../components/BlogComp/articles";
import { BlogItem } from "../../components/BlogItem";

function ArticulosPage() {
  return (
    <Layout type="blue">
      <div className="articulos-wrap">
        <div className="title-section">
          <h3 className="articulos-title">Artículos</h3>
          <div className="yellow-divider" />
          <p className="articulos-desc">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </p>
        </div>

        <div className="main-content">
          <div className="all-articulos">
            {articles.map((article, index) => {
              return <BlogItem article={article} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ArticulosPage;
