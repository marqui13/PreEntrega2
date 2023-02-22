import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import productos from "../data/posts";
import styles from "../App.module.css";
import Card from "../components/Card";

export default function Item() {
  const { id } = useParams();
  const item = productos.find((element) => element.id == id);

  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            <Card
              key={item.id}
              title={item.title}
              likes={item.likes}
              image={item.image}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
