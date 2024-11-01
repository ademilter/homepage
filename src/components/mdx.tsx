import * as React from "react";
import cx from "@/lib/cx";
import type { MDXComponents } from "mdx/types";
import { getMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Content = getMDXComponent(code);

  return (
    <div className="post-body mt-10 text-zinc-800">
      {/* @ts-ignore */}
      <Content components={components} />
    </div>
  );
}

function Strong(props: React.ComponentProps<"strong">) {
  return <strong className="" {...props} />;
}

function Hr(props: React.ComponentProps<"hr">) {
  return <hr className="my-14 border-0 border-b border-black opacity-10" />;
}

function Ul(props: React.ComponentProps<"ul">) {
  return (
    <ul
      className="list-inside list-disc space-y-2 marker:text-zinc-400"
      {...props}
    />
  );
}

function Ol(props: React.ComponentProps<"ol">) {
  return <ol className="list-inside list-decimal space-y-2" {...props} />;
}

function Blockquote(props: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className="border-l-4 border-l-zinc-300 bg-gradient-to-r from-zinc-100 to-transparent px-4 py-3 font-serif italic"
      {...props}
    />
  );
}

function Quote({
  caption,
  cite,
  children,
  ...props
}: {
  caption: string;
  cite?: string;
} & React.ComponentProps<"figure">) {
  return (
    <figure className="bg-zinc-100 p-6 sm:rounded-xl" {...props}>
      <blockquote className="opacity-90">{children}</blockquote>
      <figcaption className="mt-2 font-serif opacity-70">
        {`— ${caption}`}
        {cite && (
          <>
            , <cite>{cite}</cite>
          </>
        )}
      </figcaption>
    </figure>
  );
}

function Figure({
  src,
  title,
  full = true,
  width,
}: {
  src: string;
  title: string;
  full?: boolean;
  width?: string;
} & React.ComponentProps<"figure">) {
  const imageStyle = {
    width: "auto",
    maxWidth: "none",
  };

  if (width) {
    imageStyle["width"] = "100%";
    imageStyle["maxWidth"] = width;
  }

  return (
    <figure
      className={cx("text-center", full && "md:-mx-24 lg:-mx-40 xl:-mx-60")}
    >
      <img
        src={src}
        alt={title}
        className="inline-flex rounded-lg"
        style={imageStyle}
      />
      <figcaption className="mx-16 mt-4 opacity-50">{title}</figcaption>
    </figure>
  );
}

function Head2(props: React.ComponentProps<"h2">) {
  return <h2 className="" {...props} />;
}

function Head3(props: React.ComponentProps<"h3">) {
  return <h3 className="!mb-2" {...props} />;
}

function Head4(props: React.ComponentProps<"h4">) {
  return <h4 className="!mb-1" {...props} />;
}

function Head5(props: React.ComponentProps<"h5">) {
  return <h5 className="" {...props} />;
}

/*

function img({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
} & React.ComponentProps<"img">) {
  return (
    <figure>
      <img src={src} alt={alt} {...props} />
      <figcaption>{alt}</figcaption>
    </figure>
  );
}
function Figure2({
  children,
  col,
  ...props
}: {
  col: string;
} & React.ComponentProps<"img">) {
  const childs: React.ReactNode[] = React.Children.map(
    children,
    (child: React.ReactElement) => {
      return React.cloneElement(child, {
        ...child.props,
      });
    },
  );

  if (!children) return null;

  return (
    <div
      className={cx(
        "text-center",
        "md:-mx-20 lg:-mx-48 xl:-mx-80",
        "grid gap-8",
        col,
      )}
    >
      {childs.map((child: React.ReactElement) => {
        const { src, title, width, height } =
          child.props as React.ComponentProps<"img">;
        return (
          <figure key={child.key}>
            {width ? (
              <img
                className="rounded-lg"
                src={src}
                alt={title}
                width={width}
                height={height}
              />
            ) : (
              <img className="rounded" src={src} alt={title} {...props} />
            )}
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      })}
    </div>
  );
}*/

const components: MDXComponents = {
  Strong,
  Hr,
  Ul,
  Ol,
  Blockquote,
  Head2,
  Head3,
  Head4,
  Head5,
  Quote,
  Figure,
};

export default components;
