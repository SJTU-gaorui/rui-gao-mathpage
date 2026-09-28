# Rui Gao — Academic Homepage

An English and Simplified Chinese academic homepage for Rui Gao, Associate Research Fellow at Shaanxi Normal University since July 2026. English is the default language at the site root; the language links in the top-right corner switch between the two versions.

**Contact:** rui.gao@snnu.edu.cn

The website presents research interests, publications, preprints, academic background, and invited talks, with an emphasis on geometric variational problems in higher codimension. The preprint list includes Gao–Zhu's September 2026 arXiv paper on min-max theory and free-boundary (H)-disks. It uses a traditional academic layout with serif typography, restrained blue links, an unobtrusive navigation column, and responsive styles for smaller screens.

## Project files

| File | Purpose |
| --- | --- |
| `dist/index.html` | English homepage (default) |
| `dist/zh.html` | Simplified Chinese homepage |
| `dist/style.css` | Desktop, mobile, accessibility, and print styles |
| `dist/page-views.js` | Shared page-view counter with localized loading and error states |
| `dist/assets/rui-gao-avatar-v2.webp` | Optimized illustrated portrait shared by both pages |
| `dist/favicon.svg` | Site icon |
| `dist/.nojekyll` | Plain static hosting |
| `.github/workflows/pages.yml` | GitHub Pages deployment |

There are no package dependencies, build tools, or external fonts. Content and language switching work without JavaScript. A small optional script displays the shared page-view counter. Open `dist/index.html` directly to read the page locally; local viewing does not increment the public count.

## GitHub Pages

Repository: [SJTU-gaorui/rui-gao-mathpage](https://github.com/SJTU-gaorui/rui-gao-mathpage).

The website files and deployment workflow are included in this repository. To activate GitHub Pages for the first time:

1. Open [Settings → Pages](https://github.com/SJTU-gaorui/rui-gao-mathpage/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open [Deploy academic homepage](https://github.com/SJTU-gaorui/rui-gao-mathpage/actions/workflows/pages.yml) and select **Run workflow** on `main`. If an earlier run failed before Pages was activated, it can be rerun instead.

After a successful deployment, the expected homepage address is [sjtu-gaorui.github.io/rui-gao-mathpage](https://sjtu-gaorui.github.io/rui-gao-mathpage/). The URL becomes available only after GitHub Pages has been enabled and deployment has succeeded.

Subsequent changes to `dist` on `main` deploy automatically. Workflow configuration follows the [official GitHub Pages custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Updating the page

Edit the corresponding sections in both `dist/index.html` and `dist/zh.html`, then update the date in each footer. Keep section IDs, publication links, and academic facts synchronized. Existing paper list entries can be copied to add a publication. The ordered lists number themselves automatically. Add DOI or arXiv links only when a public record exists. All local asset and language links are relative, so the pages work both at a domain root and under a project path.

Language switching uses ordinary HTML links and works without JavaScript, cookies, or browser-language detection. The root always serves English. The Chinese page translates the biography, research, academic background, talks, and interface; paper titles, author names, and journal names retain their original bibliographic form for accurate searching and citation. Both pages include language metadata and an accessible current-language indicator.

## Page-view counter

The footer uses the public [CounterAPI.com API](https://counterapi.com/#options) with namespace `sjtu-gaorui.github.io`, action `view`, and key `rui-gao-mathpage`. Both language pages share this key; changing it starts a separate counter. Counting begins on 28 September 2026, without estimating earlier traffic.

Each published page load, including a language switch, sends one counting request. This measures approximate page views, not unique people; the provider may filter duplicate or abusive requests. Local files, preview sites, and forks do not send requests. Browser Do Not Track and Global Privacy Control preferences are respected.

The counter uses the provider's durable storage, not browser storage. Requests omit credentials, cookies, and referrers; no external JavaScript is loaded. The provider still receives normal connection metadata such as the IP address and browser headers, as described in its [privacy FAQ](https://counterapi.com/#faq).

The script times out after ten seconds and shows a localized unavailable state on failure, without blocking the homepage or retrying an increment. JavaScript-disabled visitors see an explanatory note. A non-incrementing diagnostic read is available at `https://counterapi.com/api/sjtu-gaorui.github.io/view/rui-gao-mathpage?readOnly=true`.

## Content and editorial notes

Biographical information is based on the supplied Chinese CV, with the current appointment and email explicitly updated by Rui Gao. The original CV, phone numbers, and former Shanghai contact address are not included in this repository or the website.

The avatar was generated from Rui Gao’s supplied ID photograph as a restrained editorial cartoon, preserving the hairstyle, browline glasses, white shirt, and facial likeness. Fine navy linework and a pale blue-gray background coordinate with the existing academic design. Only the optimized illustrated avatar is published; the original photograph is not included in this repository.

The presentation draws on the direct, content-focused structure of [Terence Tao’s academic homepage](https://www.math.ucla.edu/~tao/) and [MIT mathematics faculty pages](https://math.mit.edu/directory/profile.html?pid=50); the page implementation is original.

Publication metadata was checked against the following primary sources on 5 September 2026:

- [Journal of Functional Analysis: article 111519](https://www.sciencedirect.com/science/article/abs/pii/S0022123626001837). The CV’s “Conpensated” typo was corrected to “Compensated”; volume 291, issue 3 was added.
- [Communications in Mathematics and Statistics](https://link.springer.com/article/10.1007/s40304-025-00487-w). The article is listed by the publisher as published online on 21 July 2026, so the CV’s “to appear” status was updated.
- [The Journal of Geometric Analysis](https://link.springer.com/article/10.1007/s12220-025-02072-7).
- [Calculus of Variations and Partial Differential Equations](https://link.springer.com/article/10.1007/s00526-024-02858-7). The published title is used instead of the CV’s expanded descriptive title.
- [AMS accepted papers](https://www.ams.org/cgi-bin/mstrack/accepted_papers/proc). The supplied DOI `10.1090/proc/16833` and “to appear” status are retained; no unverified volume or page numbers have been added.
- [arXiv:2407.11945](https://arxiv.org/abs/2407.11945) and [arXiv:2601.13101](https://arxiv.org/abs/2601.13101).

Titles of manuscripts without a public link remain based on the supplied CV. Translations of Chinese thesis and event titles are descriptive English translations.
