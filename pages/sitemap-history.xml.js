function generateSiteMap(data) {

  const urlSetInitial = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:history="http://www.google.com/schemas/sitemap-history/0.9">`; 
  
  const urlSetEnd = `</urlset>`;

    const listUrl = data.urls.map(n => {
        return `<url>
                    <loc>https://pent.flacso.org.ar${n.url}</loc>      
                </url>`;
    }).join('');

    const xml = `${urlSetInitial}${listUrl}${urlSetEnd}`;

    return xml;

  }

  function SiteMapHistory() {
    // getServerSideProps will do the heavy lifting
  }


export async function getServerSideProps({res, query}) {
    const page = query.page;

    // Define el número de resultados por página
    const resultadosPorPagina = 50;
    const numeroDePagina = parseInt(page, 10) || 0;

    const inicial = numeroDePagina * resultadosPorPagina;
    const final = (numeroDePagina + 1) * resultadosPorPagina;

    //console.log("inicial: ", inicial, " final: ", final)

    const request = await fetch(`https://redaccion.pent.org.ar/data/xmlhistory/${final}/${inicial}`);
    const data = await request.json();

    //console.log("cantidad: ", data.urls.length);

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return { props: {} };
}

export default SiteMapHistory;