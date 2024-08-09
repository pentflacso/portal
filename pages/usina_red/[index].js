// pages/index.js
const HomePage = () => {
    return <div>Redireccionando...</div>;
  };
  
  export async function getServerSideProps({ req, res }) {
    const { url } = req; // Captura la URL actual.
  
    if (url) {
      const destinationURL = `https://flacso.pent.org.ar${url}`;
      res.writeHead(302, { Location: destinationURL });
      res.end();
    }
  
    return { props: {} };
  }
  
  export default HomePage;