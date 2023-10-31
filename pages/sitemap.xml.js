function generateSiteMap(data) {

  const urlSetInitial = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`; 
  
  const urlSetEnd = `</sitemapindex>`;

  const listUrl = data.page.map(n => {
      return ` <sitemap>
                  <loc>
                  https://pent.flacso.org.ar/sitemap-${n}.xml
                  </loc>      
              </sitemap>`;
  }).join('');

  const xml = `${urlSetInitial}${listUrl}${urlSetEnd}`;

  return xml;

}

  function SiteMapNews() {
    // getServerSideProps will do the heavy lifting
  }


export async function getServerSideProps({res}) {
    //const request = await fetch(`https://redaccion.pent.org.ar/data/news/all/20/0`);
    //const data = await request.json();
    
    const data = {page: ["history-index", "news"]};
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
}

export default SiteMapNews;