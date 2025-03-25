import "./styles.css";

export default function App() {
  return <>{HelloWorldArticle()}</>;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!!!</h1>
      <p>My second React Component</p>
    </article>
  );
}
