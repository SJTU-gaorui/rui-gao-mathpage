# Rui Gao — Academic Homepage

An English academic homepage for Rui Gao, Associate Research Fellow at Shaanxi Normal University since July 2026.

**Contact:** rui.gao@snnu.edu.cn

The website presents research interests, publications, preprints, academic background, invited talks, a research visit, teaching, and selected honors. It uses a traditional academic layout with serif typography, restrained blue links, an unobtrusive navigation column, and responsive styles for smaller screens.

## Project files

| File | Purpose |
| --- | --- |
| `dist/index.html` | All website content and publication links |
| `dist/style.css` | Desktop, mobile, accessibility, and print styles |
| `dist/favicon.svg` | Site icon |
| `dist/.nojekyll` | Plain static hosting |
| `.github/workflows/pages.yml` | GitHub Pages deployment |

There are no package dependencies, build tools, external fonts, analytics, or required JavaScript. Open `dist/index.html` directly to read the page locally.

## GitHub Pages

Repository: [SJTU-gaorui/rui-gao-mathpage](https://github.com/SJTU-gaorui/rui-gao-mathpage).

The website files and deployment workflow are included in this repository. To activate GitHub Pages for the first time:

1. Open [Settings → Pages](https://github.com/SJTU-gaorui/rui-gao-mathpage/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open [Deploy academic homepage](https://github.com/SJTU-gaorui/rui-gao-mathpage/actions/workflows/pages.yml) and select **Run workflow** on `main`. If an earlier run failed before Pages was activated, it can be rerun instead.

After a successful deployment, the expected homepage address is [sjtu-gaorui.github.io/rui-gao-mathpage](https://sjtu-gaorui.github.io/rui-gao-mathpage/). The URL becomes available only after GitHub Pages has been enabled and deployment has succeeded.

Subsequent changes to `dist` on `main` deploy automatically. Workflow configuration follows the [official GitHub Pages custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Updating the page

Edit the relevant section in `dist/index.html`, then update the “Updated” date in its footer. Existing paper list entries can be copied to add a publication. The ordered lists number themselves automatically. Add DOI or arXiv links only when a public record exists. All local asset links are relative, so the page works both at a domain root and under a project path.

## Content and editorial notes

Biographical information is based on the supplied Chinese CV, with the current appointment and email explicitly updated by Rui Gao. The original CV, phone numbers, and former Shanghai contact address are not included in this repository or the website.

The presentation draws on the direct, content-focused structure of [Terence Tao’s academic homepage](https://www.math.ucla.edu/~tao/) and [MIT mathematics faculty pages](https://math.mit.edu/directory/profile.html?pid=50); the page implementation is original.

Publication metadata was checked against the following primary sources on 5 September 2026:

- [Journal of Functional Analysis: article 111519](https://www.sciencedirect.com/science/article/abs/pii/S0022123626001837). The CV’s “Conpensated” typo was corrected to “Compensated”; volume 291, issue 3 was added.
- [Communications in Mathematics and Statistics](https://link.springer.com/article/10.1007/s40304-025-00487-w). The article is listed by the publisher as published online on 21 July 2026, so the CV’s “to appear” status was updated.
- [The Journal of Geometric Analysis](https://link.springer.com/article/10.1007/s12220-025-02072-7).
- [Calculus of Variations and Partial Differential Equations](https://link.springer.com/article/10.1007/s00526-024-02858-7). The published title is used instead of the CV’s expanded descriptive title.
- [AMS accepted papers](https://www.ams.org/cgi-bin/mstrack/accepted_papers/proc). The supplied DOI `10.1090/proc/16833` and “to appear” status are retained; no unverified volume or page numbers have been added.
- [arXiv:2407.11945](https://arxiv.org/abs/2407.11945) and [arXiv:2601.13101](https://arxiv.org/abs/2601.13101).

Titles of manuscripts without a public link remain based on the supplied CV. Translations of Chinese thesis and event titles are descriptive English translations.
