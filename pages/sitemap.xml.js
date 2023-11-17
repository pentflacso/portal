function generateSiteMap(data) {

  const urlSetInitial = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`; 
  
  const urlSetEnd = `</sitemapindex>`;

  const urlNews = `<sitemap><loc>https://pent.flacso.org.ar/sitemap-news.xml</loc></sitemap>`;

  //Sitemap History
  let urlHistory = "";

  for (let i = 0; i < data; i++) {
    urlHistory +=`<sitemap><loc>https://pent.flacso.org.ar/sitemap-history.xml?page=${i}</loc></sitemap>`;
  }
  const xml = `${urlSetInitial}${urlNews}${urlHistory}${urlSetEnd}`;

  return xml;

}

  function SiteMapNews() {
    // getServerSideProps will do the heavy lifting
  }


export async function getServerSideProps({res}) {
    const request = await fetch(`https://redaccion.pent.org.ar/data/xmlpagehistory`);
    const data = await request.json();
    
    const contenidoPorPagina = 50;
    const cantidadPaginas = Math.ceil(data.page / contenidoPorPagina);

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(cantidadPaginas);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return { props: {} };    
}

export default SiteMapNews;