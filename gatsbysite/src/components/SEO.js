import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from 'react-helmet';

export default function SEO({title, children}) {
    
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `)

    return ( 
        <Helmet titleTemplate={`${site.siteMetadata.title}`}>
            <html lang='en' />
            <title>{site.siteMetadata.title}</title>
            <link rel="icon" type="image/svg+xml" />
            <link rel="alternate icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charset="UTF-8" />
            <meta name="description" content={site.siteMetadata.description} />
            <meta property="og:image" content={'/logo.svg'} />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:site_name" content={site.siteMetadata.tite} key="ogsitename"/>
            <meta property="og:description" content={site.siteMetadata.description} key="ogdesc" />
            {children}
        </Helmet>
    )


}