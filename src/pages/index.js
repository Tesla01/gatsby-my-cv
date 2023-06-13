import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { header, btn } from '../styles/home.module.css';
import { GatsbyImage } from 'gatsby-plugin-image';
;


export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>New Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt='Banner image'></GatsbyImage>
      </section>
    </Layout>
  );
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    }
  }
}
`