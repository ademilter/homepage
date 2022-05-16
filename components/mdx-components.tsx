import React from "react";
import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackCodeViewer,
} from "@codesandbox/sandpack-react";

export function CodeBlock({ children }: { children: React.ReactElement }) {
  const code = children.props.children.trim();
  const extension = children.props.className.split("-")[1];

  return (
    <div className="group relative">
      {/* @ts-ignore */}
      <SandpackProvider
        customSetup={{
          entry: `index.${extension}`,
          files: {
            [`index.${extension}`]: code,
          },
        }}
      >
        {/* @ts-ignore */}
        <SandpackThemeProvider>
          <button
            className="z-10 absolute right-1 top-1.5 w-10 h-10 cursor-pointer transition
             opacity-0 group-hover:opacity-100 group-focus:opacity-100"
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
          >
            <svg fill="none" viewBox="0 0 12 13" width="16px">
              <g clipPath="url(#a)">
                <path
                  d="M8.21 1.344H2.317c-.54 0-.983.463-.983 1.03v7.212h.983V2.374H8.21v-1.03Zm1.474 2.06H4.281c-.54 0-.983.464-.983 1.03v7.213c0 .566.442 1.03.983 1.03h5.403c.54 0 .983-.464.983-1.03V4.435c0-.567-.442-1.03-.983-1.03Zm0 8.243H4.281V4.435h5.403v7.212Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path
                    d="M0 0h12v12H0z"
                    fill="currentColor"
                    transform="translate(0 .676)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <SandpackCodeViewer />
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
}

const MDXComponents = {
  pre: CodeBlock,
};

export default MDXComponents;
