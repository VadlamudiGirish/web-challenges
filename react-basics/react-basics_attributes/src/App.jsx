import "./styles.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Hello</h2>
      <label htmlFor="input">Input</label>
      <input type="text" id="input" />
      <a href="https://www.wikipedia.org/" className="article__link">
        Click here to go to Wiki
      </a>
    </article>
  );
}
