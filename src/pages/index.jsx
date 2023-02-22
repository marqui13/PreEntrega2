import NavBar from "../components/NavBar";
import React from "react";

import styles from "../App.module.css";
import Card from "../components/Card";
import posts from "../data/posts";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <NavBar />
      <main className={styles.section}>
        <section className={styles.container}>
          <div className={styles.layout}>
            {posts.map((element, index) => (
              <Link to={`/item/${element.id}`}>
                <Card
                  key={element.id}
                  title={element.title}
                  likes={element.likes}
                  order={element.id}
                  image={element.image}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
