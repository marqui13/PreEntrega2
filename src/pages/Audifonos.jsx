import NavBar from "../components/NavBar";
import styles from "../App.module.css";
import Card from "../components/Card";
import { obtenerProductos } from "../firebase/firebase";
import { useState, useEffect } from "react";

export default function Audifonos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((res) => {
      res = res.filter((element) => element.categoria == "audifonos");
      setProductos(res);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            {productos.map((element, index) => (
              <div>
                <Card
                  key={element.id}
                  title={element.nombre}
                  likes={element.likes}
                  order={element.id}
                  image={element.imagen}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
