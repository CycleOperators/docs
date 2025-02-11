import React from "react";
import BlogLayout from "@theme-original/BlogLayout";
import type BlogLayoutType from "@theme/BlogLayout";
import type { WrapperProps } from "@docusaurus/types";
import ChangelogFooter from "@site/src/components/ChangelogFooter";

type Props = WrapperProps<typeof BlogLayoutType>;

export default function BlogLayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <BlogLayout {...props} />
      <ChangelogFooter />
    </>
  );
}
