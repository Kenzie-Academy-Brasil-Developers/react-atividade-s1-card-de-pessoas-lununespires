import "./style.css";

function Card({ name, age, country }) {
  return (
    <div className="card">
      <div className="card__user">
        <p>Dev: {name}</p>
        <p>Idade: {age}</p>
        <p>Pais: {country}</p>
      </div>
    </div>
  );
}

export default Card