/** @jsx jsx */
import { jsx, Text, Divider } from "theme-ui";
import { Link } from "gatsby";

import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import Articles from "../../../components/Articles";
import TripOnMap from "./map";
// @ts-ignore
import Bottom from "../texts/bottom";

const Homepage = () => {
  const { basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Text sx={{ fontSize: 3 }}>
          Au Coeur Du Monde, c'est le tour du monde de Nicolas et Olivier, à
          l'aventure et à la découverte des religions.
        </Text>
      </section>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <TripOnMap />
      </section>

      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Title text="Carnet de route">
          <Link to={replaceSlashes(`/${basePath}/carnet-de-route`)}>
            Voir tous les articles
          </Link>
        </Title>
        <Articles limit={3} />
      </section>

      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <List>
          <Bottom />
        </List>
      </section>
    </Layout>
  );
};

export default Homepage;
