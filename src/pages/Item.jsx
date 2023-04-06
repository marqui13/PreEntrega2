import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import styles from "../App.module.css";
import Card from "../components/Card";

import { obtenerProductos } from "../firebase/firebase";
import { useState, useEffect } from "react";

export default function Item() {
  let item = "";
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((res) => {
      item = res.find((element) => element.id == id);
      setProductos(item);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            <Card
              key={productos.id}
              title={productos.nombre}
              likes={productos.likes}
              order={1}
              image={productos.imagen}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
