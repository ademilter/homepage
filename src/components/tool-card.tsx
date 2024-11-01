import { Tool } from "@content";

export default function ToolCard({ tool }: { tool: Tool }) {
  const { images, brand, name, definition, content } = tool;

  return (
    <article className="border-b-default/10 flex items-start gap-6 border-b py-4 sm:gap-10 sm:py-8">
      <div className="grow">
        <h6 className="text-mute block">{definition}</h6>
        <h3 className="mt-1 font-semibold">
          {brand} {name}
        </h3>

        <p className="text-mute">{content}</p>
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
