//import styles from '../styles/Home.module.css'
import styles from '../styles/Card.module.scss'


export default function Home() {
  return (
    <main className={styles.container}>

      <div className={styles.card}>
      
          <section className={ styles.imagem }>
          </section>
          
          <section className={styles.botton_card}>
            <div className={styles.text}>
                <h3>Get <b>insights</b> that help your business grow.</h3>
                <p>
                  Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                  experience, and overall efficiency.
                </p>
            </div>
            
            <div className={styles.information}>
              <div className={styles.cards_infos}>
                  <span> 10k+ </span> 
                  <p>companies</p>  
              </div>

              <div className={styles.cards_infos}>
                <span> 314 </span>
                <p>templates</p>  
              </div>

              <div className={styles.cards_infos}>
                <span> 12m+</span>
                <p>queries</p>  
              </div>

            </div>
          </section>
      </div>
    </main>
  )
}


