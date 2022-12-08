import styles from './About.module.css'

export default function About() {
    return(
        <>
            <h1 className={styles.abouth1}>¡Hola mi nombre es Jonathan!</h1>
            <p className={styles.aboutP}>Tengo 22 años, soy ingeniero mecatrónico y ya había trabajado un poco programando con php.
            Decidí ingresar al bootcamp de soyHenry porque en realidad me apasiona bastante el tema de la programación
            Y vi en Henry una oportunidad para aumentar mis conocimientos y además fortalecer mis habilidades blandas.
            <br/>
            <br/>
            En realidad siento que ha sido una de las mejores deciciones que he podido tomar,
            Simplemente lo que he aprendido no se limita a conocimientos, también he mejorado mi estilo de vida casi en todos 
            los aspectos, me he vuelto más responsable, autodidacta, y he aprendido a manejar mejor mis tiempos para así lograr hacer más tareas en un día.
            </p>
        </>
        
    )
}