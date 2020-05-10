import React from "react";
/** @jsx jsx */
import { jsx, Heading, Box, Image, Link as TLink, Grid } from "theme-ui";
import { graphql, Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

const CarnetDeRoute: React.FC<GalerieData> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Galeries" description="Nos photos de voyage" />
      <Heading variant="styles.h2">Galeries</Heading>
      <Grid gap={4} columns={[1, 2, 4]}>
        {data.allPost.nodes.map((galerie) => (
          <TLink
            as={Link}
            to={galerie.slug}
            sx={{ "&:hover": { textDecoration: "none" } }}
            key={galerie.slug}
          >
            <Box
              sx={{
                boxShadow:
                  "rgba(0,0,0,0.15) 0px 32px 32px 0px, rgba(0,0,0,0.15) 0px 16px 16px 0px, rgba(0,0,0,0.15) 0px 8px 8px 0px, rgba(0,0,0,0.15) 0px 4px 4px 0px",
              }}
              p={2}
            >
              {console.log(galerie.slug)}
              <Image src={galerie.banner.childImageSharp.resize.src} />
              <Box sx={{ textAlign: "center" }} color="text">
                {galerie.description}
              </Box>
            </Box>
          </TLink>
        ))}
      </Grid>
    </Layout>
  );
};

interface GalerieData {
  data: {
    allPost: {
      nodes: Array<{
        slug: string;
        description: string;
        banner: {
          childImageSharp: {
            resize: {
              src: string;
            };
          };
        };
      }>;
    };
  };
}

export const query = graphql`
  query {
    allPost(
      sort: { fields: date, order: ASC }
      filter: { tags: { elemMatch: { slug: { eq: "galerie" } } } }
    ) {
      nodes {
        slug
        description
        banner {
          childImageSharp {
            resize(width: 200, height: 200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;

export default CarnetDeRoute;
