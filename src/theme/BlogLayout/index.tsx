import React from "react";
import BlogLayout from "@theme-original/BlogLayout";
import type BlogLayoutType from "@theme/BlogLayout";
import type { WrapperProps } from "@docusaurus/types";
import ChangelogFooter from "@site/src/components/ChangelogFooter";
import Head from "@docusaurus/Head";

type Props = WrapperProps<typeof BlogLayoutType>;

export default function BlogLayoutWrapper(props: Props): JSX.Element {
  return (
    <>
      <Head>
        <meta property="og:image" content="img/cycleops.png" />
        <meta name="twitter:image" content="img/cycleops.png" />
      </Head>
      <BlogLayout {...props} />
      <ChangelogFooter />
    </>
  );
}
