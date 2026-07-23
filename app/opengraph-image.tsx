import { createSocialImage, socialImageSize } from "@/lib/seo";

export const alt = "RedForge engineering platform";
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createSocialImage();
}
