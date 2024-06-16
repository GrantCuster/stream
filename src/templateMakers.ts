export function MakeWrapper({
  head,
  content,
}: {
  head: string;
  content: string;
}) {
  return `<html>
  <head>
    ${head}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/index.css" />
  </head>
  <body>
    <div class="content">
      ${content}
    </div>
  </body>
</html>`;
}

export function MakePostLink(
  replyTo: string | null,
  timestamp: string,
  htmlContent: string,
  isReplied: boolean,
  truncated: boolean,
  postlinkFunction: string,
) {
  return `<div>
<div class="spacer"></div>
<div class="gray px-2 mono">${timestamp}</div>
<div class="half-spacer"></div>
<div class="px-2 post border relative border-gray-800 cursor-pointer truncate" onclick="${postlinkFunction}" style="">

${replyTo ? `<div class="half-spacer"></div><div class="gray mono">Thread</div>` : ""}
${htmlContent}
${isReplied ? `<div class="gray mono">Thread</div><div class="half-spacer"></div>
` : ""}
${truncated ? `<div class="gray mono">Read more</div><div class="half-spacer"></div>
` : ""}
</div>
</div>`;
}

export function MakePageHead({
  title,
  description,
  image_link,
}: {
  title: string;
  description: string;
  image_link: string;
}) {
  return `<title>${title} - Grant's Garden</title>
<meta name="description" content="${description}" />
<meta property="og:title" content="${title} - Grant's Garden" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image_link}" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content="${image_link}" />
<script src="/index.js"></script>`;
}

export function MakeIndexHeader() {
  return `<div class="px-2" style="display: flex; align-items: center; gap: 6px;"><svg swidth="36" height="36" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" fill="transparent"/>
<rect x="-2" y="5" width="10" height="1" fill="var(--green)"/>
<rect x="-2" y="7" width="10" height="1" fill="var(--green)"/>
<rect x="7" y="5" width="1" height="7" fill="var(--green)"/>
<rect x="16" y="5" width="6" height="1" fill="var(--green)"/>
<rect x="16" y="7" width="6" height="1" fill="var(--green)"/>
<rect x="16" y="5" width="1" height="8" fill="var(--green)"/>
<rect x="13" y="5" width="1" height="4" fill="var(--green)"/>
<rect x="10" y="5" width="4" height="1" fill="var(--green)"/>
<rect x="10" y="5" width="1" height="5" fill="var(--green)"/>
<rect x="11" y="9" width="2" height="1" fill="var(--green)"/>
<rect x="10" y="7" width="4" height="1" fill="var(--green)"/>
<rect x="8" y="4" width="2" height="1" fill="var(--green)"/>
<rect x="14" y="4" width="2" height="1" fill="var(--green)"/>
<rect x="6" y="10" width="1" height="1" fill="var(--green)"/>
<rect x="3" y="9" width="3" height="1" fill="var(--green)"/>
<rect x="2" y="10" width="1" height="3" fill="var(--green)"/>
<rect x="4" y="11" width="1" height="1" fill="var(--green)"/>
<rect x="4" y="14" width="11" height="1" fill="var(--green)"/>
<rect x="15" y="13" width="1" height="1" fill="var(--green)"/>
<rect x="3" y="13" width="1" height="1" fill="var(--green)"/>
</svg>
<div class="green">Grant's garden</div></div>`;
}

export function MakePostPage(
  timestamp: string,
  htmlContent: string,
) {
  return `<div class="px-2" style="display: flex; align-items: center; gap: 6px;"><svg swidth="36" height="36" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" fill="transparent"/>
<rect x="-2" y="5" width="10" height="1" fill="var(--green)"/>
<rect x="-2" y="7" width="10" height="1" fill="var(--green)"/>
<rect x="7" y="5" width="1" height="7" fill="var(--green)"/>
<rect x="16" y="5" width="6" height="1" fill="var(--green)"/>
<rect x="16" y="7" width="6" height="1" fill="var(--green)"/>
<rect x="16" y="5" width="1" height="8" fill="var(--green)"/>
<rect x="13" y="5" width="1" height="4" fill="var(--green)"/>
<rect x="10" y="5" width="4" height="1" fill="var(--green)"/>
<rect x="10" y="5" width="1" height="5" fill="var(--green)"/>
<rect x="11" y="9" width="2" height="1" fill="var(--green)"/>
<rect x="10" y="7" width="4" height="1" fill="var(--green)"/>
<rect x="8" y="4" width="2" height="1" fill="var(--green)"/>
<rect x="14" y="4" width="2" height="1" fill="var(--green)"/>
<rect x="6" y="10" width="1" height="1" fill="var(--green)"/>
<rect x="3" y="9" width="3" height="1" fill="var(--green)"/>
<rect x="2" y="10" width="1" height="3" fill="var(--green)"/>
<rect x="4" y="11" width="1" height="1" fill="var(--green)"/>
<rect x="4" y="14" width="11" height="1" fill="var(--green)"/>
<rect x="15" y="13" width="1" height="1" fill="var(--green)"/>
<rect x="3" y="13" width="1" height="1" fill="var(--green)"/>
</svg>
<div class="green"><a href="/" class="home-link">Grant's garden</a></div></div>
<div class="spacer"></div>
<div class="gray px-2 mono">${timestamp}</div>
<div class="half-spacer"></div>
<div class="px-2 border relative post border-gray-800">
${htmlContent}
</div>`;
}

export function MakeThreadPage({
  threadLength,
  posts,
}: {
  threadLength: number;
  posts: string;
}) {
  return `<div class="px-2"><div class="green"><a href="/" class="home-link">Grant's garden</a></div>
<div class="gray mono"><div>Thread &middot; ${threadLength} posts</div></div></div>
    ${posts}`;
}

export function MakePostInThread({
  timestamp,
  htmlContent,
}: {
  timestamp: string;
  htmlContent: string;
}) {
  return `<div class="spacer"></div>
<div class="gray px-2 mono">${timestamp}</div>
<div class="half-spacer"></div>
<div class="px-2 border relative post border-gray-800">
${htmlContent}
</div>`;
}