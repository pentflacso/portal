import Head from "next/head";

const MetaProducts = ({
  title,
  description,
  keywords,
  author,
  publisher,
  year,
  category,
  license,
  resourceLink,
  oaiIdentifier
}) => {
  return (
    <Head>
        {/* DC META */ }
        <meta name="DC.type" content="página" />
        <meta name="DC.language" content="es-AR" />
        {title && <meta name="DC.title" content={title} />}
        {description && <meta name="DC.description" content={description} />}
        {author && <meta name="DC.creator" content={author} />}
        {resourceLink &&  <meta name="DC.identifier" content={resourceLink} />}
        {year && <meta name="DC.date" content={year} /> }
        {category && <meta name="DC.subject" content={category} /> }
        {license && <meta name="DC.rights" content={license} /> }
        {publisher && <meta name="DC.publisher" content={publisher} /> }
        {keywords && <meta name="DC.keywords" content={keywords} />}


        {/* GOOGLE SCOLAR META */ }
        <meta name="citation_language" content="es-AR" />
        {year && <meta name="citation_year" content={year} />}
        {title && <meta name="citation_title" content={title} />}
        {description && <meta name="citation_description" content={description} />}
        {author && <meta name="citation_author" content={author} />}
        {resourceLink &&  <meta name="citation_link" content={resourceLink} /> }
        {year && <meta name="citation_year" content={year} /> }
        {category && <meta name="citation_category" content={category} /> }
        {license && <meta name="citation_license" content={license} /> }
        {publisher && <meta name="citation_publisher" content={publisher} /> }


        {oaiIdentifier && <meta name="oai_identifier" content={oaiIdentifier} />}
    </Head>
  );
};

export default MetaProducts;