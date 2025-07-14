import styles from "./FooterIa.module.scss";

export default function FooterIa(){

  return( 
    <section className={styles.legales}> 
        <div className={styles.wrapper}>                

            <div className={styles.info}>
                <h3>Información detallada, en cumplimiento con la Resolución 4600-E/2017 del Ministerio de Educación de la Nación (República Argentina).</h3>

                <h4>A. Denominación de la carrera</h4>
                <p>Certificación de Estudios de Posgrado en Enseñanza y Aprendizaje con Inteligencia Artificial. </p>                

                <h4>B. Titulación que se expide</h4>
                <p>Certificación de Estudios de Posgrado en Enseñanza y Aprendizaje con Inteligencia Artificial. (Título propio)</p>             
               
                <h4>C. Grado académico de la carrera</h4>
                <p>Curso de posgrado.</p>       
                 
                <h4>D. Resolución Ministerial que otorga a la titulación el debido reconocimiento oficial y la consecuente validez del título en cuestión</h4>
                <p>No aplica. Esta propuesta académica cuenta con la aprobación del Consejo Académico de la FLACSO Argentina según la Resolución 23-03-24.</p>         
                 
                <h4>E. Requisitos de admisión</h4>
                <p>El curso de posgrado está destinado a docentes del ámbito escolar.<br />
                    Es requisito contar con un título universitario y/o terciario no universitario de 4 años de duración.<br />
                    La metodología que estructura esta propuesta académica prevé además la diversidad de experiencias y niveles de conocimientos de los destinatarios.<br />
                    </p>               

                <h4>F. Resolución de acreditación emitida por la COMISIÓN NACIONAL DE EVALUACIÓN Y ACREDITACIÓN UNIVERSITARIA, cuando se trate de una titulación incorporada al régimen del artículo 43 de la Ley No 24.521 o de una carrera de posgrado.</h4>
                <p>No aplica.</p>
                               
                <h4>G. Modalidad</h4>
                <p>Educación a distancia.</p>               
                  
                <h4>H. Duración</h4>
                <p>14 semanas.</p>
               
                <h4>I. Carga Horaria</h4>
                <p>110 horas reloj.</p>                                

            </div>

            <footer className={styles.footer}>
                <div className={styles.col_left}>
                    <a href="https://flacso.pent.org.ar/" rel="noopener noreferrer" target="_blank">Proyecto Educación y Nuevas Tecnologías<br />Facultad Latinoamericana de Ciencias Sociales - Sede Argentina</a>
                </div> 
                <div className={styles.col_right}>
                    <a href="https://www.instagram.com/pentflacso/" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/instagram_white_icon.svg" alt="Logo Instagram"/>
                    </a>
                    <a href="https://twitter.com/pent_flacso" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/twitter_x_white_icon.svg" alt="Logo Instagram"/>
                    </a>  
                    <a href="https://www.facebook.com/pentflacso.argentina" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/facebook_white_icon.svg" alt="Logo Instagram"/>
                    </a>                                            
                    <a href="https://www.linkedin.com/company/pent-proyecto-educaci-n-y-nuevas-tecnolog-as---flacso-argentina/?originalSubdomain=ar" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/linkedin_white_icon.svg" alt="Logo Instagram"/>
                    </a>
                    <a href="https://www.youtube.com/user/PENTFLACSO" rel="noopener noreferrer" target="_blank">
                        <img src="../assets/icons/youtube_white_icon.svg" alt="Logo Instagram"/>
                    </a>
                </div>                     
            </footer>

        </div> 
    </section>               
  );
}