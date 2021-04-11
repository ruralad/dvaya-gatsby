import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/pageFooter";

import style from "../styles/blog.module.css";

function Loading(props) {
  return (
    <main>
      <Helmet>
        <title>{props.loadState}</title>
      </Helmet>
      <div className={style.blog_loading}>
        <h1 className={style.loading_head}>SFI BLOG</h1>
        <p className={style.load_state}>{props.loadState}</p>
      </div>
    </main>
  );
}
class Index extends React.Component {
  state = {
    loading: true,
    blog: null,
  };

  async componentDidMount() {
    const url = "/api/blogcontent";
    const response = await fetch(url, { method: "get", mode: "cors" });
    const data = await response.json();
    this.setState({ blog: data, loading: false });

    console.log(this.state.blog);
  }
  render() {
    if (this.state.loading) {
      return <Loading loadState="loading..." />;
    }

    if (!this.state.blog) {
      return <Loading loadState="couldn't reach the server" />;
    }
    if (this.state.blog) {
      const newBlog = this.state.blog.reverse();
      return (
        <main>
          <Helmet>
            <title>Blog | Sfi Geci | Dvaya</title>
          </Helmet>
          <Navbar />
          <div className={style.hero}>
            <h1 className={style.page_title}>SFI GECI BLOG</h1>
            {newBlog.map((data, key) => {
              return (
                <div className={style.blog_box} id={"post" + key}>
                  <section className={style.blog_contents}>
                    <h3 className={style.blog_title}>{data.title}</h3>
                    <div className={style.blog_info}>
                      Post {this.state.blog.length - key} • {data.date} •{" "}
                      {data.author}
                    </div>
                    <p className={style.blog_text}>{data.text}</p>
                  </section>
                </div>
              );
            })}
            <Footer />
          </div>
        </main>
      );
    }
  }
}

export default Index;
