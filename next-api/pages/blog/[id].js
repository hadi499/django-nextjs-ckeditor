import parse from "html-dom-parser";
import ReactHtmlParser from "react-html-parser";
export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://127.0.0.1:8000/api/" + id + "/");
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  const data = ninja.content;
  return (
    <div>
      <h1>{ninja.title}</h1>
      {ReactHtmlParser(data)}
    </div>
  );
};

export default Details;
