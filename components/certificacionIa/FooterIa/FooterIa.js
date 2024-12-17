import styles from "./FooterIa.module.scss";

export default function FooterIa(){

  return( 
    <section className={styles.legales}> 
        <div className={styles.wrapper}>                

            <div className={styles.info}>
                <h3>Información detallada, en cumplimiento con la Resolución 4600-E/2017 del Ministerio de Educación de la Nación (República Argentina).</h3>

                <h4>A. Denominación de la carrera</h4>
                <p>Diploma Superior en Ciencias Sociales con mención en Educación En Línea y Entornos Virtuales Multiplataforma.</p>                

                <h4>B. Titulación que se expide</h4>
                <p>Diplomado/a Superior en Ciencias Sociales con mención en Educación en Línea y Entornos Virtuales multiplataforma. (Título propio)</p>             
               
                <h4>C. Grado académico de la carrera</h4>
                <p>Posgrado.</p>       
                 
                <h4>D. Resolución Ministerial que otorga a la titulación el debido reconocimiento oficial y la consecuente validez del título en cuestión</h4>
                <p>RM 2022-1340-APN-ME.</p>         
                 
                <h4>E. Requisitos de admisión</h4>
                <p>La diplomatura está destinada a profesionales interesados/as en el campo de la educación en línea. Abarca a quienes ya se desarrollan en este campo o a aquellos/as que busquen iniciarse en el mismo en diversos ámbitos (por ejemplo: universitarios, de educación formal, en organismos estatales en diversos niveles jurisdiccionales, en empresas y en otras organizaciones de la sociedad civil, entre otros).</p><p>Se requiere título de educación superior universitario o no universitario de 4 años como mínimo, en las áreas de educación, psicología, humanidades, ciencias sociales o en el campo de las tecnologías de la información y las comunicaciones. Serán también admitidos profesionales de otros campos que estén interesados en la formación ofrecida y/o que se desarrollen laboralmente en la educación en línea / e-learning o en instancias de formación en general. En estos casos se requerirá la presentación de un currículum abreviado.</p><p>Esta heterogeneidad de perfiles no sólo es viabilizada sino que es esperada y valorada en la medida que refleja la realidad de este campo de conocimientos y desarrollo que es per se interdisciplinario. La propuesta de este diploma asume el desarrollo de contenidos y actividades de aprendizaje que ponen en juego esta multiplicidad de perfiles profesionales.</p><p>La metodología que estructura esta propuesta académica prevé además la diversidad de experiencias y niveles de conocimientos de los destinatarios.</p>               

                <h4>F. Resolución de acreditación emitida por la COMISIÓN NACIONAL DE EVALUACIÓN Y ACREDITACIÓN UNIVERSITARIA, cuando se trate de una titulación incorporada al régimen del artículo 43 de la Ley No 24.521 o de una carrera de posgrado.</h4>
                <p>No aplica.</p>
                               
                <h4>G. Modalidad</h4>
                <p>Educación a distancia.</p>               
                  
                <h4>H. Duración</h4>
                <p>10 meses.</p>
               
                <h4>I. Carga Horaria</h4>
                <p>279 horas reloj.</p>                                

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