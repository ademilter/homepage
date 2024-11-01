import Container from "@/components/container";
import Photos from "@/app/photos/photos";
import { Metadata } from "next";
import { lastPhotos } from "./action";

export const metadata: Metadata = {
  title: "Fotoğraflar",
  description:
    "Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor. Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı yakalayabilmeyi öğretiyor.",
};

export const revalidate = 86400; // 60*60*24

export default async function PhotosPage() {
  const photos = await lastPhotos();

  return (
    <>
      <Container>
        <h1 className="font-semibold">{metadata.description}</h1>
      </Container>

      <Container size="large" className="mt-8 sm:mt-16">
        <Photos data={photos} />
      </Container>
    </>
  );
}
