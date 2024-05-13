import "./autor.scss";
import Layout from "@/components/Layout/Layout";

function AutorPage() {
  return (
    <Layout type="blue">
      <div className="autor-page">
        <div className="title-section">
          <h3 className="articulos-title">Sobre el Autor</h3>
          <div className="yellow-divider" />
          <p className="articulos-desc">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </p>
        </div>

        <div className="autor-content"></div>
      </div>
    </Layout>
  );
}

export default AutorPage;
