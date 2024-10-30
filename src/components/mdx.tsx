import * as React from "react";
import cx from "@/lib/cx";
import { StyleLink } from "@/components/link";
import type { MDXComponents } from "mdx/types";
import { getMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Content = getMDXComponent(code);

  return (
    <div className="post-body mt-10 leading-relaxed text-zinc-800 dark:text-zinc-200">
      {/* @ts-ignore */}
      <Content components={components} />
    </div>
  );
}

function ALink(props: React.ComponentProps<"a">) {
  return <StyleLink {...props} />;
}

function Strong(props: React.ComponentProps<"strong">) {
  return <strong className="font-semibold" {...props} />;
}

function Hr(props: React.ComponentProps<"hr">) {
  return (
    <hr className="my-14 border-0 border-b border-black opacity-10 dark:border-white" />
  );
}

function Ul(props: React.ComponentProps<"ul">) {
  return (
    <ul
      className="list-inside list-disc space-y-2 marker:text-zinc-400 dark:marker:text-zinc-600"
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
      className="border-l-4 border-l-zinc-300 bg-gradient-to-r from-zinc-100 to-transparent px-4 py-3 font-serif italic dark:border-l-zinc-600 dark:from-zinc-800"
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
    <figure
      className="bg-zinc-100 p-6 sm:rounded-xl dark:bg-zinc-800"
      {...props}
    >
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
      <figcaption className="mx-16 mt-4 text-sm opacity-50">{title}</figcaption>
    </figure>
  );
}

function Head2(props: React.ComponentProps<"h2">) {
  return <h2 className="text-2xl leading-tight font-bold" {...props} />;
}

function Head3(props: React.ComponentProps<"h3">) {
  return (
    <h3 className="!mb-2 text-xl leading-tight font-semibold" {...props} />
  );
}

function Head4(props: React.ComponentProps<"h4">) {
  return <h4 className="!mb-1 text-lg leading-snug font-semibold" {...props} />;
}

function Head5(props: React.ComponentProps<"h5">) {
  return <h5 className="font-semibold" {...props} />;
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
  ALink,
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
