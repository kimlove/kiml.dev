import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ img }) => {
  const data = useStaticQuery(graphql`
    query {
      trulyImage: file(relativePath: { eq: "work/index/truly.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trulyImage2: file(relativePath: { eq: "work/index/truly2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      {img === 'truly' && (
        <Img fluid={data.trulyImage.childImageSharp.fluid} />
      )}
      {img === 'truly2' && (
        <Img fluid={data.trulyImage2.childImageSharp.fluid} />
      )}
    </>
  );
};

export default Image;
