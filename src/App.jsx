import { useState, useEffect } from "react";
import carbonara from "./assets/carbonara.svg";
import matcha from "./assets/matcha.svg";
import pepperoni from "./assets/pepperoni.svg";
import sushi from "./assets/sushi.svg";
import burger  from "./assets/burger.svg";

export default function App() {
  const [count, setCount] = useState(0);

  const foods = [
    {
      id: 1,
      title: "Burger Juicy",
      body: "Burger daging sapi tebal dengan keju leleh dan saus spesial.",
      image: burger,
    },
    {
      id: 2,
      title: "Sushi Salmon",
      body: "Sushi segar dengan potongan salmon premium dan nasi Jepang.",
      image: sushi,
    },
    {
      id: 3,
      title: "Pizza Pepperoni",
      body: "Pizza renyah dengan topping pepperoni melimpah dan keju mozzarella.",
      image: pepperoni,
    },
    {
      id: 4,
      title: "Pasta Carbonara",
      body: "Pasta creamy dengan saus carbonara asli dan bacon renyah.",
      image: carbonara,
    },
    {
      id: 5,
      title: "Ice Cream Matcha",
      body: "Es krim matcha Jepang yang lembut dan menyegarkan.",
      image: matcha,
    },
  ];

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi 10!`);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Daffa Bagus Dhiananto</div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Menu</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* Card Grid */}
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-lg border shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img src={food.image} alt={food.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">{food.title}</h2>
              <p className="text-gray-600 text-sm">{food.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Counter Section */}
      <section className="flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Counter Demo</h1>
        <div className="text-4xl mb-4">{count}</div>
        <div className="flex gap-4">
          <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">+</button>
          <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">-</button>
          <button onClick={() => setCount(0)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Reset</button>
        </div>
      </section>
    </div>
  );
}
