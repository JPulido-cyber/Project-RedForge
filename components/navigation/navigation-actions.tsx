import { SocialLinks } from "@/components/footer";

export function NavigationActions() {
  return (
    <div className="nav-actions">
      <SocialLinks />
      <a className="resume-button" href="/contact#resume">
        RESUME
      </a>
    </div>
  );
}
