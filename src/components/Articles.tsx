import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PostItem, { PostItemData } from "./Article";

const CarnetDeRoute: React.FC<{ limit: number }> = ({ limit }) => {
  const data = useStaticQuery<CarnetDeRouteData>(graphql`
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
  `);

  const posts = data.allPost.nodes
    .filter((post) =>
      post.tags.every(
        ({ name }) =>
          name !== "English Article" &&
          name !== "Preparation" &&
          name !== "galerie"
      )
    )
    .filter((_, index) => index < limit);

  return (
    <>
      {posts.map((post, index) => (
        <PostItem
          key={post.slug}
          post={post}
          isLast={index === posts.length - 1}
        />
      ))}
    </>
  );
};

interface CarnetDeRouteData {
  allPost: {
    nodes: PostItemData[];
  };
}

export default CarnetDeRoute;
