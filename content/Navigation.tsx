import React from "react";
import { jsx, Flex, Link as TLink, Box } from "theme-ui";
import { Link } from "gatsby";

export default ({ previous, next, gallery }) => {
  return (
    <Flex sx={{ justifyContent: "space-between" }}>
      {previous && (
        <NavigationLink to={previous}>Article Précédent</NavigationLink>
      )}
      {gallery && <NavigationLink to={gallery}>Photos</NavigationLink>}
      {next && <NavigationLink to={next}>Article Suivant</NavigationLink>}
    </Flex>
  );
};

const NavigationLink = ({ to, children }) => (
  <TLink as={Link} to={to} sx={{ "&:hover": { textDecoration: "none" } }}>
    <Box
      p={2}
      sx={{ border: "1px solid", borderColor: "text", borderRadius: 5 }}
      color="text"
    >
      {children}
    </Box>
  </TLink>
);
