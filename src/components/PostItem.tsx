import React from "react";
import { jsx, Link as TLink, Flex, Box, Image, Divider } from "theme-ui";
import { Link } from "gatsby";

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <>
      <TLink
        as={Link}
        to={post.slug}
        sx={{ "&:hover": { textDecoration: "none" } }}
      >
        <Box sx={{ "&:hover": { backgroundColor: "muted" } }} pt={3} pb={3}>
          <Flex key={post.slug}>
            <Box sx={{ flexShrink: 0 }} mr={2}>
              {post.banner && (
                <Image
                  src={post.banner.childImageSharp.resize.src}
                  sx={{ display: "block" }}
                />
              )}
            </Box>
            <Box sx={{ flex: "1 1 auto", color: `text` }}>
              <Flex sx={{ flexDirection: "column" }}>
                <Box sx={{ fontSize: [1, 2, 3] }}>{post.title}</Box>
                <Box sx={{ fontSize: 1 }}>{post.description}</Box>
                <Box>
                  <time>{post.date}</time>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </TLink>
      <Divider sx={{ margin: 0 }} />
    </>
  );
};

interface PostItemProps {
  post: PostItemData;
}
export interface PostItemData {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: Array<{ name: string }>;
  banner: {
    childImageSharp: {
      resize: {
        src: string;
      };
    };
  } | null;
}

export default PostItem;
