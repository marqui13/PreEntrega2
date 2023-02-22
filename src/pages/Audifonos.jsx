import NavBar from "../components/NavBar";
import productos from "../data/posts";
import styles from "../App.module.css";
import Card from "../components/Card";

export default function Audifonos() {
  let audifonos = productos.filter(
    (element) => element.category == "audifonos"
  );
  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            {audifonos.map((element, index) => (
              <Card
                key={element.id}
                title={element.title}
                likes={element.likes}
                order={element.id}
                image={element.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
