import React from "react";
import "./DogCard.css";

interface DogCardProps {
  id: number; // Add id prop
  name: string;
  age: number;
  height: string;
  color: string;
  favoritePortFeature: string;
  favoriteMeal: string;
}

const DogCard: React.FC<DogCardProps> = ({
  id,
  name,
  age,
  height,
  color,
  favoritePortFeature,
  favoriteMeal,
}) => {
  const showAlert = () => {
    alert(`Dog's name is ${name}`);
  };

  return (
    <li className="dog-card">
      <article key={id} aria-labelledby={`dog-name-${id}`}>
        <img
          src={`https://placedog.net/400/400/random?id=${id}`}
          className="dog-image"
          alt={`Photo of ${name}`}
        />

        <h2 id={`dog-name-${id}`}>{name}</h2>

        <dl aria-label="Dog attributes">
          <div className="category">
            <dt className="category-label">ID:</dt>
            <dd className="category-value">{id}</dd>
          </div>
          <div className="category">
            <dt className="category-label">Age:</dt>
            <dd className="category-value">{age} years</dd>
          </div>
          <div className="category">
            <dt className="category-label">Height:</dt>
            <dd className="category-value">{height}</dd>
          </div>
          <div className="category">
            <dt className="category-label">Color:</dt>
            <dd className="category-value">{color}</dd>
          </div>
          <div className="category">
            <dt className="category-label">Favorite Feature:</dt>
            <dd className="category-value">{favoritePortFeature}</dd>
          </div>
          <div className="category last">
            <dt className="category-label">Favorite Meal:</dt>
            <dd className="category-value">{favoriteMeal}</dd>
          </div>
        </dl>

        <button className="dog-name-button" onClick={showAlert}
                aria-label="Alert dog's name">
          Click here to alert the dog's name
        </button>
      </article>
    </li>
  );
};

export default DogCard;
