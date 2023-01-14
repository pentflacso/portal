import styles from "./TeamData.module.scss";
import React from 'react'

const Equipo = ({team}) => {
    
    return (
      <div className={styles.wrapper}>
      <h1>Equipo</h1><br />
      
      {
        team.map(item => (
          <div>
          <h4>{item.cargo}</h4>
          
          {item.equipo.map(persona => (
            <a className={styles.link} href={persona.url} target="_blank"><p key={persona.nombre}>{persona.nombre}</p></a>
          ))}
          <br/></div>
          ))
      }
      
      </div>
    )

}


export default Equipo