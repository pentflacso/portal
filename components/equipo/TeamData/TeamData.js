
import React from 'react'
import Link from 'next/link';
import styles from "./TeamData.module.scss";

const Equipo = ({team, title}) => {
  
    return (

      <div className={styles.wrapper}>

      <h2>{title[0].value}</h2>
      
      {
        team.map((item, a)  => (
          <div key={a} className={styles.team_area}>

            <h5>{item.cargo}</h5>
            
            {item.equipo.map((persona, j) => (
              <Link key={j} className={styles.member} href={persona.alias ? persona.alias : "/"}>{persona.nombre}</Link>
            ))}

          </div>
          ))
      }
      
      </div>
    )

}


export default Equipo