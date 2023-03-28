import "katex/dist/katex.min.css";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const MarkLatex = ({ content }) => {

  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      skipHtml
    />
  );
};

export default MarkLatex;
