import "katex/dist/katex.min.css";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const MarkLatex = ({ content }) => {
  const htmlDecode = (input) => {
    var e = document.createElement("div");
    e.innerHTML = input;
    const data = (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlDecode(
            e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
          ),
        }}
      />
    );
    return data.toString();
  };
  return (
    <ReactMarkdown
      // children={htmlDecode(content)}
      children={content?.replace("/n", "   /n")}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );
};

export default MarkLatex;
