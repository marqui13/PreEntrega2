import NavBar from "../components/NavBar";
import productos from "../data/posts";
import styles from "../App.module.css";
import Card from "../components/Card";

export default function Audifonos() {
  let relojesInteligentes = productos.filter(
    (element) => element.category == "relojesInteligentes"
  );
  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            {relojesInteligentes.map((element, index) => (
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
