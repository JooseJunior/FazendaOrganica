import styles from "./styles.module.css";
import link from "next/link";

export default function Card(){
    return(
        <section className={styles.card}>
            <img 
                src={imagem} 
                alt={titulo}
            />
            <h2 className={styles.titulo}>
                Titulo
            </h2>
            <p className={styles.texto}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quae velit vitae consequatur fugiat inventore debitis? 
                Assumenda voluptatum dolorum, sunt, repudiandae a aut
                ut dolore eaque perspiciatis voluptates, officiis quae illum.
            </p>
            <link rel="/laranja" className={styles.botao}href="" >
                Saiba Mais
            </link>
        </section>
    )
}