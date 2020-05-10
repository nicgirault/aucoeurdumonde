/** @jsx jsx */
import { Link } from "gatsby";
import { jsx, Flex, Image } from "theme-ui";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Image src="/logo.png" alt="logo" sx={{ width: 100 }} />
        <h1 sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
          {siteTitle}
        </h1>
      </Flex>
    </Link>
  );
};

export default HeaderTitle;
