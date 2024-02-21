import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/VictorSalome.png"
          />
          <div className={styles.authorInfo}>
            <strong>Victor Salome</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="21 de Fevereiro às 14:58h"
          dateTime="2024-02-2024 14:58:30"
        >
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
          🚀.
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>{" "}
        </p>

        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
