import IconLike from "@/components/icons/like";
import cx from "@/lib/cx";

export default function Rating({
  rate,
  rating,
}: {
  rate: number;
  rating: number;
}) {
  return (
    <IconLike
      size={10}
      className={cx(
        rate <= rating
          ? "fill-red-400 text-red-400 dark:fill-red-500 dark:text-red-500 dark:opacity-50"
          : "fill-black text-black opacity-20 dark:fill-white dark:text-white"
      )}
    />
  );
}
