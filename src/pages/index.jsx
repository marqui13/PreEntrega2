import NavBar from "../components/NavBar";
import { useState, useContext, useEffect } from "react";

import styles from "../App.module.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { obtenerProductos } from "../firebase/firebase";

export default function Index() {
  const { cart, setCart } = useContext(CartContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  async function agregarCarrito(id) {
    const producto = posts.find((element) => element.id == id);
    if (cart.includes(producto)) {
      alert("El producto ya está en el carrito");
      return;
    }
    setCart([...cart, producto]);
    console.log(cart);
  }
  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            {productos.map((element, index) => (
              <div>
                <Link to={`/item/${element.id}`}>
                  <Card
                    key={element.id}
                    title={element.nombre}
                    likes={element.likes}
                    order={index+1}
                    image={element.imagen}
                  />
                </Link>
                <input type="number" name="" id="" min="0" value="0" />
                <button onClick={() => agregarCarrito(element.id)}>
                  Agregar a carrito
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
