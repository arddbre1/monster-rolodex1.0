import './card.styles.css';

const Card = ({ monster }) => {
  const { id, name, email, username } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{username}</p>
    </div>
  );
};

export default Card;
