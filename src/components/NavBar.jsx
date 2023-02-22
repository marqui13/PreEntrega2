import { Link } from "react-router-dom";
import CartWidget from "./cartWidget";

export default function NavBar() {
  return (
    <header className="flex justify-between bg-lime-500 h-16 items-center px-5">
      <a href="" className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
        <Link to={"/"}>
          <span className="font-bold text-xl">Tu Tienda Virtual</span>
        </Link>
      </a>
      <div className="flex gap-2">
        <Link to={"/audifonos"}>
          <div>Audifonos</div>
        </Link>

        <div className="border-l border-gray-300"></div>
        <Link to={"/relojes-inteligentes"}>
          <div>Relojes Inteligentes</div>
        </Link>
        <div className="border-l border-gray-300"></div>
        <Link to={"/drones"}>
          <div>Drones</div>
        </Link>
        <button className="bg-primary text-white p-1 rounded-full"></button>
      </div>

      {/* Componente Carrito */}
      <CartWidget />
    </header>
  );
}
