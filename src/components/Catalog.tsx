import React from "react";
import DogCard from "./DogCard";
import "./Catalog.css";
import { Helmet } from "react-helmet";

const dogs = [
  {
    id: 1,
    name: "Buddy",
    age: 3,
    picture: "https://http.dog/200.jpg",
    height: "24 inches",
    color: "Golden",
    favoritePortFeature: "Fetching Ball",
    favoriteMeal: "Chicken and Rice",
  },
  {
    id: 2,
    name: "Bella",
    age: 2,
    picture: "https://http.dog/204.jpg",
    height: "22 inches",
    color: "Brown",
    favoritePortFeature: "Jumping",
    favoriteMeal: "Buchari",
  },
  {
    id: 3,
    name: "Charlie",
    age: 4,
    picture: "https://http.dog/203.jpg",
    height: "26 inches",
    color: "Black",
    favoritePortFeature: "Chasing Frisbees",
    favoriteMeal: "Beef Stew",
  },
  {
    id: 4,
    name: "Daisy",
    age: 1,
    picture: "https://http.dog/599.jpg",
    height: "20 inches",
    color: "White",
    favoritePortFeature: "Digging",
    favoriteMeal: "Green Day",
  },
  {
    id: 5,
    name: "Max",
    age: 5,
    picture: "https://http.dog/530.jpg",
    height: "30 inches",
    color: "Sable",
    favoritePortFeature: "Swimming",
    favoriteMeal: "Fish and Chips",
  },
  {
    id: 6,
    name: "Luna",
    age: 3,
    picture: "https://http.dog/496.jpg",
    height: "22 inches",
    color: "Brindle",
    favoritePortFeature: "Barking at Birds",
    favoriteMeal: "Pasta",
  },
  {
    id: 7,
    name: "Rocky",
    age: 6,
    picture: "https://http.dog/561.jpg",
    height: "28 inches",
    color: "Fawn",
    favoritePortFeature: "Running",
    favoriteMeal: "Chicken Nuggets",
  },
];

const Catalog: React.FC = () => {
  return (
    <section className="catalog">
      <Helmet>
        <title>The Dogs Catalog</title>
      </Helmet>

      <h1>Dogs Catalog</h1>
      <ul className="dog-cards-container" aria-label="Dogs Catalog">
        {dogs.map((dog, index) => (
          <DogCard key={index} {...dog} />
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
