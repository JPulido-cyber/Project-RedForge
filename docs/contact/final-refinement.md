# Contact page final refinement

The Contact page retains the approved RedForge shell, grid background, typography, border system, navigation, footer, and color palette.

## Hierarchy

1. Compact page introduction
2. Dominant professional-email panel
3. Direct LinkedIn, GitHub, and Resume / Profile actions
4. Response and information-safety expectations
5. Global footer

The previous equal-width cards were removed because email is the primary task. The page does not add a contact form or collect visitor information.

## Public channels

- Email: `j.pulido.cyber@outlook.com`
- LinkedIn: the existing public profile linked from the global footer
- GitHub: `JPulido-cyber`, matching the global footer
- Resume / Profile: the existing evidence-first About route

No downloadable résumé was introduced because the repository does not contain an approved public résumé asset.

## Client behavior

Only the copy-address control is a Client Component. It uses the browser Clipboard API, announces success or failure through an `aria-live` region, and leaves email and all professional links functional without JavaScript.
