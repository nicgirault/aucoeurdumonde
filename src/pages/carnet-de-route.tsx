import React from "react";
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { graphql } from "gatsby";
import PostItem, { PostItemData } from "../components/PostItem";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

const CarnetDeRoute: React.FC<CarnetDeRouteData> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Carnet de Route" description="Liste des articles de voyage" />
      <Heading variant="styles.h2">Carnet de Route</Heading>
      <section sx={{ my: 5 }}>
        {data.allPost.nodes
          .filter((post) =>
            post.tags.every(
              ({ name }) => name !== "English Article" && name !== "Preparation"
            )
          )
          .map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
      </section>
    </Layout>
  );
};

interface CarnetDeRouteData {
  data: {
    allPost: {
      nodes: PostItemData[];
    };
  };
}

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: ASC }, limit: 100) {
      nodes {
        slug
        title
        description
        banner {
          childImageSharp {
            resize(width: 300, height: 169, quality: 90) {
              src
            }
          }
        }
        date(formatString: "DD/MM/YYYY")
        tags {
          name
        }
        description
      }
    }
  }
`;

export default CarnetDeRoute;
