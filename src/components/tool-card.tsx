import { Tool } from "@content";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { images, brand, name, definition, content } = tool;

  return (
    <article className="flex items-center gap-6 rounded-xl bg-white px-4 py-3 shadow-sm sm:px-8 sm:py-6">
      <div className="grow">
        <h3 className="font-semibold">
          {brand} {name}
        </h3>

        <h6 className="text-primary">{definition}</h6>

        <p className="text-mute mt-4">{content}</p>
      </div>

      {images && (
        <img
          src={images}
          alt={name}
          className="size-24 rounded-2xl bg-zinc-50 object-contain sm:size-32"
        />
      )}
    </article>
  );
}
