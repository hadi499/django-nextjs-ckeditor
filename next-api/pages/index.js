import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function Home({ ninjas }) {
  console.log(ninjas);
  return (
    <div className={styles.container}>
      <h1>django api</h1>
      {ninjas.map((ninja) => (
        <h3 key={ninja.id}>{ninja.name}</h3>
      ))}
    </div>
  );
}
