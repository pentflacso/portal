export function handleServerRedirect(res, data) {
  if (res.status === 500) {
    // Redirige a la página 505.js en caso de error del servidor
    return {
        redirect: {
          destination: '/505',
          permanent: false, // Puedes cambiarlo a true si deseas un redireccionamiento permanente (301)
        }
      }
  } else if (res.status === 400 || data.status == false){
    console.log("entre");
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