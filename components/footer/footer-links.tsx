import { homepageContent } from "@/content/homepage";

import { NavigationLinks } from "@/components/navigation";

export function FooterLinks() {
  return <NavigationLinks items={homepageContent.navigation} />;
}
