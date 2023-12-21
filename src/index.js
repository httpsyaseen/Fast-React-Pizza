import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header ">
      <h1> Fast react Pizza and Co.</h1>
    </header>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openingHours = 12;
  const closingHours = 24;

  const isOpen = openingHours <= hours && hours <= closingHours;

  return (
    <footer className="footer">
      <h3>
        {isOpen ? (
          <Order closingHours={closingHours} openingHours={openingHours} />
        ) : (
          <p>
            We're really happy to welcome you between {openingHours - 12}:00 pm
            and {closingHours - 12}:00 am.
          </p>
        )}
      </h3>
    </footer>
  );
}

function Order({ closingHours, openingHours }) {
  return (
    <div className="order">
      <p>
        We are currently Open from {openingHours}:00 pm to {closingHours - 12}
        :00 am. You can contact us online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData ? pizzaData : [];
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic italian cusine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our Menu. Please come back Later</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
