import Container from "@/components/container";
import Photos from "@/components/photos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotoğraflar",
  description:
    "Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı yakalayabilmeyi öğretiyor.",
};

export const revalidate = 86400; // 60*60*24

export default async function PhotosPage() {
  const photos = [] as any;

  return (
    <>
      <Container>
        <h1 className="text-xl sm:text-2xl">{metadata.description}</h1>
      </Container>

      <Container size="large" className="mt-14 sm:mt-20">
        <Photos data={photos} />
      </Container>
    </>
  );
}
