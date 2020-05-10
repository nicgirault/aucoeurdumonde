import React from "react";
/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import Articles from "../components/Articles";

const CarnetDeRoute: React.FC = () => {
  return (
    <Layout>
      <SEO title="Carnet de Route" description="Liste des articles de voyage" />
      <Heading variant="styles.h2">Carnet de Route</Heading>
      <section sx={{ my: 5 }}>
        <Articles limit={100} />
      </section>
    </Layout>
  );
};

export default CarnetDeRoute;
