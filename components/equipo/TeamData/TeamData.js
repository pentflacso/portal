
import React from 'react'
import Link from 'next/link';
import styles from "./TeamData.module.scss";

const Equipo = ({team}) => {
    
    return (
      <div className={styles.wrapper}>
      <h1>Equipo</h1><br />
      
      {
        team.map(item => (
          <div>
          <h4>{item.cargo}</h4>
          
          {item.equipo.map(persona => (
            <Link className={styles.link} href={persona.url ? persona.url : "/" } ><p key={persona.nombre}>{persona.nombre}</p></Link>
          ))}
          <br/></div>
          ))
      }
      
      </div>
    )

}


export default Equipo