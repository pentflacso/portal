function generateSiteMap(data) {

    const urlSetInitial = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`; 
    
    const urlSetEnd = `</urlset>`;

    const listUrl = data.news.map(n => {
        return `<url>
                    <loc>
                    https://pent.flacso.org.ar/${n.url}
                    </loc>
                    <lastmod>${n.dateXML}</lastmod>
                    <news:news>
                      <news:publication>
                        <news:name>PENT FLACSO</news:name>
                        <news:language>es</news:language>
                      </news:publication>
                      <news:publication_date>${n.dateXML}</news:publication_date>
                      <news:title>${n.title}</news:title>                      
                    </news:news>       
                </url>`;
    }).join('');

    const xml = `${urlSetInitial}${listUrl}${urlSetEnd}`;

    return xml;

  }

  function SiteMapNews() {
    // getServerSideProps will do the heavy lifting
  }


export async function getServerSideProps({res}) {
    const request = await fetch(`https://redaccion.pent.org.ar/data/news/all/20/0`);
    const data = await request.json();
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(data);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return { props: {} };


}

export default SiteMapNews;