import Container from "@/components/container";
import Photos from "@/app/photos/photos";
import { Metadata } from "next";
import { lastPhotos } from "./action";
import { Social, SocialButton } from "@/components/social";
import { SOCIAL } from "@/lib/const";
import { IconBrandInstagram, IconBrandVsco } from "@tabler/icons-react";

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
      <Container className="space-y-8">
        <h1 className="font-semibold">{metadata.description}</h1>
        <Social>
          <SocialButton href={SOCIAL.instagram} className="w-auto px-4">
            <IconBrandInstagram stroke={1.5} size={21} /> Instagram
          </SocialButton>

          <SocialButton href={SOCIAL.vsco} className="w-auto px-4">
            <IconBrandVsco stroke={1.5} size={20} /> VSCO
          </SocialButton>
        </Social>
      </Container>

      <Container size="large" className="mt-8 sm:mt-16">
        <Photos data={photos} />
      </Container>
    </>
  );
}
