import React, { useState } from "react";
import "./Manage.css";

type FormField = {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
};

type DogData = {
  name: string;
  age: string;
  height: string;
  color: string;
  favoriteToy: string;
  favoriteMeal: string;
};

const formFields: FormField[] = [
  { label: "Name", name: "name", type: "text", placeholder: "Charlie" },
  { label: "Age", name: "age", type: "number", placeholder: "3" },
  { label: "Height", name: "height", type: "text", placeholder: "20 inches" },
  { label: "Color", name: "color", type: "text", placeholder: "Brown" },
  {
    label: "Favorite Toy",
    name: "favoriteToy",
    type: "text",
    placeholder: "Ball",
  },
  {
    label: "Favorite Meal",
    name: "favoriteMeal",
    type: "text",
    placeholder: "Chicken",
  },
];

const Manage = () => {
  const [dogData, setDogData] = useState<DogData>({
    name: "",
    age: "",
    height: "",
    color: "",
    favoriteToy: "",
    favoriteMeal: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New Dog Added:", dogData);
    setDogData({
      name: "",
      age: "",
      height: "",
      color: "",
      favoriteToy: "",
      favoriteMeal: "",
    });
  };

  const resolveFormFieldValue = (name: string) => {
    return dogData[name as keyof DogData];
  };

  return (
    <div className="manage-container">
      <h1>Add a New Dog</h1>

      <main>
        <form onSubmit={handleSubmit} className="dog-form">
          {formFields.map(({ label, name, type, placeholder }) => (
            <div key={name} className="form-group">
              <label htmlFor={name}>{label}: </label>
              <input
                id={name}
                type={type}
                name={name}
                value={resolveFormFieldValue(name)}
                onChange={handleChange}
                required
                placeholder={placeholder}
              />
            </div>
          ))}

          <button
            type="submit"
            className="submit-button"
            onClick={() =>
              alert(`Dog name: ${dogData.name} was added successfully!`)
            }
          >
            Add Dog
          </button>
        </form>
      </main>

      <div className="dogs-form-image" tabIndex={0}>
        <img
          src={`https://placedog.net/1000/300/random?id=128`}
          alt="Random Dog"
        />
      </div>
    </div>
  );
};

export default Manage;
