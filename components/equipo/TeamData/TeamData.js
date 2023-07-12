
import React from 'react'
import Link from 'next/link';
import styles from "./TeamData.module.scss";

const Equipo = ({team, title}) => {
  
    return (

      <div className={styles.wrapper}>

      <h2>{title[0].value}</h2>
      
      {
        team.map((item, i)  => (
          <div key={i} className={styles.team_area}>

            <h5>{item.cargo}</h5>
            
            {item.equipo.map((persona, i) => (
              <>
              <Link key={i} className={styles.member} href={persona.alias ? persona.alias : "/"}>{persona.nombre}</Link>
              
              
              </>
            ))}

          </div>
          ))
      }
      
      </div>
    )

}


export default Equipo