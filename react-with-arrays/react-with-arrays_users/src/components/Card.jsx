import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      {user.roles.map((role) => (
        <ul key={role} className="card__taglist">
          <Tag tag={role} />
        </ul>
      ))}

      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
