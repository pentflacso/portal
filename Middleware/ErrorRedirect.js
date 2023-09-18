export async function handleServerRedirect(res) {
  //Error 500 proveniente de los QUERY de la API
  if (res.status === 500) {
    // Redirige a la página 505.js en caso de error del servidor
    return {
        redirect: {
          destination: '/505',
          permanent: false, // Puedes cambiarlo a true si deseas un redireccionamiento permanente (301)
        }
      }
  //Error 400    
  } else if (res.status === 400){
    return {
        redirect: {
          destination: '/404',
          permanent: false, // Puedes cambiarlo a true si deseas un redireccionamiento permanente (301)
        }
      }        
  }else{
    const data = await res.json();

    //Paginas no encontradas
    if(data.status == false){
      return {
        redirect: {
          destination: '/404',
          permanent: false, // Puedes cambiarlo a true si deseas un redireccionamiento permanente (301)
        }
      }  
    }else{
      return { props: data  }
    }
  }
}