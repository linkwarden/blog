"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/releases/v2.4","metadata":{"permalink":"/releases/v2.4","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v2.4.md","source":"@site/blog/releases/v2.4.md","title":"Linkwarden 2.4","description":"Today, we\'re excited to announce the release of Linkwarden 2.4! \ud83e\udd73 This update brings significant improvements and new features to enhance your experience.","date":"2023-11-27T10:00:00.000Z","formattedDate":"November 27, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":2.15,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-11-27T10:00","image":"https://raw.githubusercontent.com/linkwarden/blog/main/static/assets/v2.4/banner.jpeg","tags":["release"]},"unlisted":false,"nextItem":{"title":"Linkwarden 2.3","permalink":"/releases/v2.3"}},"content":"Today, we\'re excited to announce the release of **[Linkwarden 2.4](https://github.com/linkwarden/linkwarden)**! \ud83e\udd73 This update brings significant improvements and new features to enhance your experience.\\n\\nBefore we start, we\'d like to express our sincere thanks to all of our **[Cloud](https://linkwarden.app/#pricing)** subscription users. Your support is crucial to our growth and allows us to continue improving. Thank you for being such an important part of our journey. \ud83d\ude80\\n\\n\x3c!-- ![Launch image](/assets/v2.4/banner.jpeg) --\x3e\\n\\n<video controls width=\\"100%\\">\\n  <source src=\\"/assets/v2.4/demo_vid.mp4\\"/>\\n</video>\\n\\n\x3c!--truncate--\x3e\\n\\n## What\'s New?\\n\\n:::tip\\n\\nWe\'re actively bringing new features to Linkwarden users around the globe. If you like our work, please [Star our repo on GitHub](https://github.com/linkwarden/linkwarden)! \u2b50\ufe0f Your support means a lot to us.\\n\\n:::\\n\\n### \ud83c\udfa8 Much Improved Design\\n\\nEnjoy a visual upgrade with sleeker icons, enhanced coloring, and redesigned link cards for a more engaging experience. Huge thanks to [DaisyUI](https://daisyui.com) for this!\\n\\n### \ud83c\udfdb\ufe0f All Bookmarks Now Get Archived!\\n\\nThere is a background script that automatically processes each link, creating archived versions without any user intervention. So from now on, every bookmark you save, **including those imported from other sources**, is automatically preserved, this means you\'ll have access to your favorite article even if the original content is gone!\\n\\n### \ud83d\uddc3\ufe0f Archive Formats Other Than Webpages\\n\\nYou can now archive Links that contain a PDF or Image and link preservation is no longer limited to webpages, for example: https://www.africau.edu/images/default/sample.pdf\\n\\n### \ud83d\udccb Added Compact List View\\n\\nThis new feature introduces a list-based format for viewing bookmarks. It\'s designed for those who prefer a more structured and straightforward way to browse their saved links. This view can be especially handy for quickly scanning through numerous bookmarks, making it easier to find what you\'re looking for.\\n\\n### \ud83d\udc4d Enhanced User Experience\\n\\nThere are many improvements made to enhance the user experience of the app, like for instance you can now add new Collections right from the navbar. Also when you try to delete a Link, you get a \\"Are you sure\\" prompt to prevent accidentally deletion of your Links.\\n\\n### \ud83d\udd10 Added Many More Single Sign-On and Oauth Integrations\\n\\nFrom Authentik, to Apple, Google, and more... The list goes on.\\n\\n:::note\\n\\nSSO integration is only available for **Enterprise** and **self-hosted** users. <br/>\\nFor self-hosted users, please visit the **[docs](https://docs.linkwarden.app/self-hosting/sso-oauth)** for more info on setting up everything.\\n\\n:::\\n\\n### \ud83c\udf10 Relocated Our Server\\n\\nIt\'s also worth mentioning that we\'ve moved our [Cloud](https://linkwarden.app/#pricing) instance server to Hetzner\'s data center in Virginia, USA, and our S3 bucket is now in NYC, optimizing performance and reliability.\\n\\n### \u2705 And more...\\n\\nCheck out the full changelog below.\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v2.3.0...v2.4.0"},{"id":"/releases/v2.3","metadata":{"permalink":"/releases/v2.3","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v2.3.md","source":"@site/blog/releases/v2.3.md","title":"Linkwarden 2.3","description":"We\'re happy to announce Linkwarden 2.3!","date":"2023-11-24T10:00:00.000Z","formattedDate":"November 24, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":1.3,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-11-24T10:00","tags":["release"]},"unlisted":false,"prevItem":{"title":"Linkwarden 2.4","permalink":"/releases/v2.4"},"nextItem":{"title":"Link Rot and Its Impact on the Web","permalink":"/articles/link-rot-and-its-impact-on-the-web"}},"content":"We\'re happy to announce **Linkwarden 2.3**!\\n\\n\x3c!--truncate--\x3e\\n\\n:::info\\n\\nThis is the changelog for Linkwarden v2.3. <br/>\\nFor more info, please visit our **[Website](https://linkwarden.app)** and/or our **[GitHub](https://github.com/linkwarden/linkwarden)** page.\\n\\n:::\\n\\n## What\'s New?\\n\\n### \ud83c\udf1f Enhanced Public Page\\n\\nWe\'ve transformed the public page with many exciting updates!\\n\\n- Now featuring advanced search capabilities, versatile filtering options, and intuitive sorting tools.\\n- Dark mode support for the public page!\\n- Visually stunning makeover for a more engaging and user-friendly experience!\\n- Share the archived formats with the public.\\n- View the team that\'s collaborating on the Collection.\\n\\nIf you want to make a Collections public, simply click on the three dots on a Collection card, click on \\"Share/Collaborate\\", click on \\"Make this a public collection\\", and finally click \\"Save.\\"\\n\\n![Screenshot](/assets/v2.3/public_page.png)\\n\\n### \ud83d\udd25 More Intuitive and Informative Sidebar\\n\\nWe\'ve upgraded the sidebar to enhance your browsing efficiency!\\n\\n- Display the total count of Links in each Collection and Tags.\\n- Display which Collections are public right from your sidebar.\\n\\nEnjoy a more informative and seamless navigation experience directly from your sidebar.\\n\\n<div align=\\"center\\">\\n<img\\n  src={require(\'/assets/v2.3/sidebar.jpg\').default}\\n  alt=\\"Screenshot\\"\\n/>\\n</div>\\n\\n### \ud83d\udd10 Secure Single Sign-On with Keycloak Integration\\n\\nEnhancing security and convenience, we\'ve implemented Keycloak (OIDC) for streamlined Single Sign-On (SSO) login capabilities. Experience a safer, more efficient authentication process!\\n\\n:::note\\n\\nSSO and Keycloak integration is only available for **Enterprise** and **self-hosted** users. <br/>\\nFor self-hosted users, please visit the **[docs](https://docs.linkwarden.app/self-hosting/environment-variables#keycloak-settings)** on setting the environment variables for connecting to your Keycloak instance.\\n\\n:::\\n\\n### \u2705 And more...\\n\\nCheck out the full changelog below.\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v2.2.1...v2.3.0"},{"id":"/articles/link-rot-and-its-impact-on-the-web","metadata":{"permalink":"/articles/link-rot-and-its-impact-on-the-web","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/articles/link-rot-and-its-impact-on-the-web.md","source":"@site/blog/articles/link-rot-and-its-impact-on-the-web.md","title":"Link Rot and Its Impact on the Web","description":"Explore strategies to prevent link rot, a common issue where web links become obsolete, and learn how to prevent it.","date":"2023-11-13T10:00:00.000Z","formattedDate":"November 13, 2023","tags":[{"label":"link rot","permalink":"/tags/link-rot"},{"label":"web maintenance","permalink":"/tags/web-maintenance"},{"label":"digital archiving","permalink":"/tags/digital-archiving"},{"label":"website management","permalink":"/tags/website-management"},{"label":"archive","permalink":"/tags/archive"},{"label":"bookmark management","permalink":"/tags/bookmark-management"},{"label":"bookmark","permalink":"/tags/bookmark"}],"readingTime":2.26,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-11-13T10:00","tags":["link rot","web maintenance","digital archiving","website management","archive","bookmark management","bookmark"],"title":"Link Rot and Its Impact on the Web","description":"Explore strategies to prevent link rot, a common issue where web links become obsolete, and learn how to prevent it.","keywords":["link rot","web maintenance","digital archiving","website management","archive","bookmark management","bookmark"],"image":"https://blog.linkwarden.app/assets/images/link_rot-287f7ef9adbb7eaf35091d7f5ba9f1c2.jpeg"},"unlisted":false,"prevItem":{"title":"Linkwarden 2.3","permalink":"/releases/v2.3"},"nextItem":{"title":"Linkwarden 2.2","permalink":"/releases/v2.2"}},"content":"![link rot](/assets/articles/link_rot.jpeg)\\n\\nHave you ever clicked on a link hoping to find specific information, only to be greeted with an error message - perhaps something like a 404 not found error? This frustrating experience is known as \\"Link Rot,\\" a common issue in the ever-evolving digital landscape. In this post, we\'ll explore what link rot is, why it happens, and practical solutions to mitigate its impact.\\n\\n\x3c!--truncate--\x3e\\n\\n## What is Link Rot?\\n\\nLink Rot occurs when hyperlinks on the internet become obsolete or broken. It\'s similar to having a map that leads to a location that no longer exists. In the digital world, these are links that once led to active web pages but now lead to dead ends, resulting in the loss of valuable online resources for everyone.\\n\\n## How common is it?\\n\\nLink Rot is actually pretty common. In fact, a [recent study](https://ahrefs.com/blog/link-rot-study/) showed that more than 66% of links to websites in the last 9 years are dead. This means we\'re only dealing with less than 34% of the internet since then!\\n\\n## Why Does Link Rot Happen?\\n\\n1. **Webpage Removal or Relocation:** Websites are dynamic. Content gets deleted, moved, or updated, often without redirecting the old links to the new pages. A small example of why a website might choose to do this is illustrated in this article: [CNET is deleting old articles to try to improve its Google Search ranking](https://www.theverge.com/2023/8/9/23826342/cnet-content-pruning-deleting-articles-google-seo).\\n\\n2. **Domain Changes:** Changes in domain names or website ownership can lead to link rot, as previous links may not be preserved.\\n\\n3. **Expired Content:** Some content is time-sensitive or temporary, leading to its eventual removal or deletion.\\n\\n4. **Technical Issues:** Server problems and changes in URL structures can also make a link inactive.\\n\\n## The Solution to Link Rot\\n\\n1. **Regular Link Audits:** Website owners should regularly check and update their links. Tools like broken link checkers can automate this process.\\n\\n2. **Using Permalinks:** When possible, use permalinks which are less likely to change over time.\\n\\n3. **Implementing Redirects:** If a page is moved, setting up a redirect from the old URL to the new one can prevent link rot.\\n\\n4. **Archiving Services:** Using a bookmark and web archiving service like [Linkwarden](https://linkwarden.app) not only helps you to preserve webpages automatically but also offers powerful organization features. Linkwarden works by generating screenshots, PDFs, and other formats from a webpage, ensuring accessibility to the link content even if the original content is gone.\\n\\n## Verdict\\n\\nLink Rot is an inevitable part of the internets lifecycle. However, understanding its causes and implementing effective strategies can significantly reduce its impact. By being proactive and using the right tools and practices, we can ensure a more stable and user-friendly digital experience."},{"id":"/releases/v2.2","metadata":{"permalink":"/releases/v2.2","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v2.2.md","source":"@site/blog/releases/v2.2.md","title":"Linkwarden 2.2","description":"We\'re happy to announce Linkwarden 2.2!","date":"2023-11-11T10:00:00.000Z","formattedDate":"November 11, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":0.225,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-11-11T10:00","tags":["release"]},"unlisted":false,"prevItem":{"title":"Link Rot and Its Impact on the Web","permalink":"/articles/link-rot-and-its-impact-on-the-web"},"nextItem":{"title":"Linkwarden 2.1","permalink":"/releases/v2.1"}},"content":"We\'re happy to announce **[Linkwarden 2.2](https://github.com/linkwarden/linkwarden)**!\\n\\n\x3c!--truncate--\x3e\\n\\n## What\'s New?\\n\\n### \ud83d\udccc New Pinned Links Route\\n\\nView all your pinned links in a separate route.\\n\\n### \ud83c\udf9a\ufe0f Clear Links Instead of Blurred\\n\\nYou can now make the icons clear instead of blurred.\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v2.1.0...v2.2.0"},{"id":"/releases/v2.1","metadata":{"permalink":"/releases/v2.1","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v2.1.md","source":"@site/blog/releases/v2.1.md","title":"Linkwarden 2.1","description":"We\'re happy to announce Linkwarden 2.1!","date":"2023-11-10T10:00:00.000Z","formattedDate":"November 10, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":0.455,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-11-10T10:00","tags":["release"]},"unlisted":false,"prevItem":{"title":"Linkwarden 2.2","permalink":"/releases/v2.2"},"nextItem":{"title":"Announcing Linkwarden 2.0","permalink":"/releases/v2.0"}},"content":"We\'re happy to announce **[Linkwarden 2.1](https://github.com/linkwarden/linkwarden)**!\\n\\n\x3c!--truncate--\x3e\\n\\n## What\'s New?\\n\\n### \ud83d\udd25 Better Looking Dashboard Stats\\n\\nEnjoy a more visually appealing overview of your stats at a glance.\\n\\n<div align=\\"center\\">\\n<img\\n  src={require(\'/assets/v2.1/redesigned-stats.jpeg\').default}\\n  alt=\\"Screenshot\\"\\n  width=\\"80%\\"\\n/>\\n</div>\\n\\n### \ud83c\udf9a\ufe0f Toggle Blurred Link Icons Visibility\\n\\nYou can now choose to disable the visibility of the blurred link icons based on your preferences.\\n\\n### \u2139\ufe0f Display Version Number\\n\\nStay informed with the version number displayed right at the bottom of your settings sidebar.\\n\\n<div align=\\"center\\">\\n<img\\n  src={require(\'/assets/v2.1/version-number.jpeg\').default}\\n  alt=\\"Screenshot\\"\\n  width=\\"60%\\"\\n/>\\n</div>\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v2.0.0...v2.1.0"},{"id":"/releases/v2.0","metadata":{"permalink":"/releases/v2.0","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v2.0.md","source":"@site/blog/releases/v2.0.md","title":"Announcing Linkwarden 2.0","description":"Today, we are happy to announce Linkwarden 2.0! \ud83e\udd73","date":"2023-11-07T10:00:00.000Z","formattedDate":"November 7, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":1.72,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-11-07T10:00","image":"https://blog.linkwarden.app/assets/images/v2.0-launch-9d5e77cb1606aecfab6f14a0127519a7.jpeg","tags":["release"]},"unlisted":false,"prevItem":{"title":"Linkwarden 2.1","permalink":"/releases/v2.1"},"nextItem":{"title":"Linkwarden 1.2","permalink":"/releases/v1.2"}},"content":"Today, we are happy to announce **[Linkwarden 2.0](https://github.com/linkwarden/linkwarden/releases/tag/v2.0.0)**! \ud83e\udd73\\n\\nThis is a new **major** version of Linkwarden, coming with many exciting new features and optimizations.\\n\\nBefore we start, we\'d like to express our sincere thanks to all of our [Cloud](https://linkwarden.app/#pricing) subscription users. Your support is crucial to our growth and allows us to continue improving. Thank you for being such an important part of our journey. \ud83d\ude80\\n\\n![Launch image](/assets/v2.0/v2.0-launch.jpeg)\\n\\n\x3c!--truncate--\x3e\\n\\nThis release includes breaking changes which we documented carefully in the [v2 upgrade guide](https://docs.linkwarden.app/self-hosting/upgrading/to-linkwarden-v2). If you are a Cloud subscription user, the only thing you\'ll have to do is **upgrading your browser extension** to the latest version (1.2.0 and above).\\n\\n## Whats New?\\n\\n### \ud83d\udcd6 New archivable format: Readable view\\n\\nIntroducing a clean, readable format for archived webpages. This format captures and saves all the important details of a webpage, clearing out the clutter for you.\\n\\n![Readable view format](/assets/v2.0/readable_view.png)\\n\\n### \ud83d\udd0d Full text search functionality\\n\\nEnhanced search capabilities to allow full text searches within saved bookmarks.\\n\\n### \ud83d\udcdd Rename and Remove Tags functionality\\n\\nUsers can now easily rename or delete tags associated with their bookmarks.\\n\\n### \ud83d\udd51 Recent Links in dashboard\\n\\nDashboard now displays the most recently added bookmarks for quick access.\\n\\n### \u21aa\ufe0f Added rearchive functionality\\n\\nUsers can now rearchive webpages (refresh formats) to update the stored content.\\n\\n### \ud83d\udca5 Delete profile functionality\\n\\nUsers have the option to permanently delete their account and associated data.\\n\\n### \u2b06\ufe0f Increased max import size\\n\\nRaised the limit on the size of bookmark imports.\\n\\n### \ud83c\udf10 Added indicators for public collections\\n\\nVisual cues have been added to distinguish public collections from private ones.\\n\\n### \ud83d\uddc2\ufe0f Seperated owned/member collections\\n\\nCollections owned by the user and those they are a member of are now shown separately for a more organized user interface.\\n\\n### \u26a1\ufe0f Refactored API routes\\n\\nWe improved the structure of API endpoints for better efficiency and maintenance.\\n\\n### \ud83d\udd27 Bug fixes, security patches, and optimizations\\n\\nResolved a bug that caused images to reload unnecessarily.\\n\\n### \u2705 And more...\\n\\nCheck out the full changelog below.\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v1.2.5...v2.0.0"},{"id":"/releases/v1.2","metadata":{"permalink":"/releases/v1.2","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v1.2.md","source":"@site/blog/releases/v1.2.md","title":"Linkwarden 1.2","description":"We\'re happy to announce Linkwarden 1.2!","date":"2023-10-19T10:00:00.000Z","formattedDate":"October 19, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":1.065,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-10-19T10:00","tags":["release"]},"unlisted":false,"prevItem":{"title":"Announcing Linkwarden 2.0","permalink":"/releases/v2.0"},"nextItem":{"title":"Linkwarden 1.1","permalink":"/releases/v1.1"}},"content":"We\'re happy to announce **Linkwarden 1.2**!\\n\\n\x3c!--truncate--\x3e\\n\\n## What\'s New?\\n\\n### \u2194\ufe0f Added Import/Export to Linkwarden Functionality\\n\\nEffortlessly migrate your data in and out of Linkwarden, making it easier than ever to manage and backup your information securely.\\n\\n### \u2699\ufe0f Redesigned Settings Page\\n\\nWe\'ve revamped the Settings page with a sleek new design to improve navigability and user experience. The intuitive layout now makes it easier to configure Linkwarden to your liking.\\n\\n### \ud83c\udf9b\ufe0f Tweak-able Archive Formats\\n\\nTailor your archive formats to meet your specific needs with our new tweak-able settings. This feature allows for customization in how data is archived, providing a personalized user experience and efficient data management.\\n\\n### \ud83d\udc1c Many Bug Fixes + Optimizations\\n\\nThis update includes numerous bug fixes and optimizations that contribute to a smoother, more efficient user experience.\\n\\n### \ud83c\udfdb\ufe0f New Archivable Format: [Wayback Machine](https://archive.org)\\n\\nExtend your archiving options with the newly supported Wayback Machine format. Now, easily save and access your data through archive.org, ensuring long-term preservation and accessibility of your digital assets.\\n\\n_Disabled by default._ To enable it, head to the settings page, click on the \\"Archive\\" tab in the sidebar, and check the \\"Archive.org snapshot\\" checkbox, then click on \\"Save\\":\\n\\n![Screenshot](https://github.com/linkwarden/linkwarden/assets/93432314/639d9da8-073e-41fa-ba3f-32b174331ff2)\\n\\n### \u2705 And more...\\n\\nCheck out the full changelog below.\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v1.1.0...v1.2.0"},{"id":"/releases/v1.1","metadata":{"permalink":"/releases/v1.1","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/releases/v1.1.md","source":"@site/blog/releases/v1.1.md","title":"Linkwarden 1.1","description":"We\'re happy to announce Linkwarden 1.1!","date":"2023-10-11T10:00:00.000Z","formattedDate":"October 11, 2023","tags":[{"label":"release","permalink":"/tags/release"}],"readingTime":0.695,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","date":"2023-10-11T10:00","tags":["release"]},"unlisted":false,"prevItem":{"title":"Linkwarden 1.2","permalink":"/releases/v1.2"},"nextItem":{"title":"Introducing Linkwarden","permalink":"/introducing-linkwarden"}},"content":"We\'re happy to announce **Linkwarden 1.1**!\\n\\n\x3c!--truncate--\x3e\\n\\n## What\'s New?\\n\\n### \ud83e\udde9 Browser Extension\\n\\nAdd your favourite bookmarks without ever leaving your current tab. Star it over [here](https://github.com/linkwarden/browser-extension)!\\n\\n### \ud83d\udc33 Fully Added Support for Docker\\n\\nSetup your own self-hosted instance easily, check out the instructions [here](https://docs.linkwarden.app/self-hosting/installation).\\n\\n### \ud83d\udeab Disable Registration to Outsiders\\n\\nYou can now disable registration for the public so it\'s only you and your team who has access to your own instance, check out the instructions [here](https://docs.linkwarden.app/self-hosting/environment-variables).\\n\\n### \u26c5\ufe0f Dark/Light mode support\\n\\nChoose what\'s best for yourself! Toggle dark/light mode right under the profile photo dropdown.\\n\\n### \u2b07\ufe0f Import your Bookmarks from other Browsers\\n\\nSupports every major browsers out there, including Chrome, Brave, Edge, Firefox and Safari, import bookmarks right from your profile settings.\\n\\n### \u2705 And more...\\n\\nCheck out the full changelog below.\\n\\n**Full Changelog**: https://github.com/linkwarden/linkwarden/compare/v1.0.1...v1.1.0"},{"id":"/introducing-linkwarden","metadata":{"permalink":"/introducing-linkwarden","editUrl":"https://github.com/linkwarden/blog/blob/main/blog/introducing-linkwarden.md","source":"@site/blog/introducing-linkwarden.md","title":"Introducing Linkwarden","description":"We\'re very happy to introduce Linkwarden to help you manage your webpages and bookmarks!","date":"2023-07-30T10:00:00.000Z","formattedDate":"July 30, 2023","tags":[{"label":"linkwarden","permalink":"/tags/linkwarden"},{"label":"blog","permalink":"/tags/blog"},{"label":"link rot","permalink":"/tags/link-rot"}],"readingTime":0.765,"hasTruncateMarker":true,"authors":[{"name":"Daniel","title":"Linkwarden maintainer","url":"https://github.com/daniel31x13","email":"hello@daniel31x13.io","imageURL":"https://github.com/daniel31x13.png","key":"daniel"}],"frontMatter":{"authors":"daniel","tags":["linkwarden","blog","link rot"],"date":"2023-07-30T10:00"},"unlisted":false,"prevItem":{"title":"Linkwarden 1.1","permalink":"/releases/v1.1"}},"content":"We\'re very happy to introduce [Linkwarden](https://linkwarden.app) to help you manage your webpages and bookmarks!\\n\\nLinkwarden is a self-hosted, open-source collaborative bookmark manager to collect, organize and preserve webpages.\\n\\n\x3c!--truncate--\x3e\\n\\nWe created Linkwarden for the following reasons:\\n\\n1. Preserve web pages that might vanish or change over time.\\n\\n2. Organize and store webpages in a single centralized hub.\\n\\n3. Share bookmarks and collaborate on collections with others easily.\\n\\n4. Promote users control over their data and privacy.\\n\\nThe objective is to organize useful webpages and articles you find across the web in one place, and since useful webpages can go away (see the inevitability of [Link Rot](https://www.howtogeek.com/786227/what-is-link-rot-and-how-does-it-threaten-the-web/)), Linkwarden also saves a copy of each webpage as a Screenshot and PDF, ensuring accessibility even if the original content is no longer available.\\n\\nAdditionally, Linkwarden is designed with collaboration in mind, sharing links with the public and/or allowing multiple users to work together seamlessly.\\n\\n![Showcase image](/assets/showcase_image.png)"}]}')}}]);