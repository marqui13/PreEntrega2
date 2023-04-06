import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { CartContext } from "../CartContext";
import { obtenerProductos } from "../firebase/firebase";
import styles from "../App.module.css";

export default function Index() {
  const { cart, setCart } = useContext(CartContext);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await obtenerProductos();
      setProductos(res);
    }
    fetchData();
  }, []);

  function agregarCarrito(id) {
    const producto = productos.find((element) => element.id === id);
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
              <div key={element.id}>
                <Link to={`/item/${element.id}`}>
                  <Card
                    key={element.id}
                    title={element.nombre}
                    likes={element.likes}
                    order={index + 1}
                    image={element.imagen}
                  />
                </Link>
                <div onClick={() => agregarCarrito(element.id)}>
                  Agregar al carrito
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
