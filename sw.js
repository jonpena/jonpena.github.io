if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
    new Promise((s) => {
      if ("document" in self) {
        const e = document.createElement("script");
        (e.src = a), (e.onload = s), document.head.appendChild(e);
      } else (e = a), importScripts(a), s();
    }).then(() => {
      let e = s[a];
      if (!e) throw new Error(`Module ${a} didn’t register its module`);
      return e;
    })
  );
  self.define = (i, r) => {
    const f =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[f]) return;
    let d = {};
    const b = (e) => a(e, f),
      t = { module: { uri: f }, exports: d, require: b };
    s[f] = Promise.all(i.map((e) => t[e] || b(e))).then((e) => (r(...e), d));
  };
}
define(["./workbox-08e67d2d"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        {
          url: "assets/css3.webp",
          revision: "387d874f15e8c2d922da642eadc5d8b9",
        },
        {
          url: "assets/favicon-512x512.png",
          revision: "52949d30ab51336ba60f05219e91c89a",
        },
        {
          url: "assets/favicon.png",
          revision: "e215905cb39b01bcf2f32125d2784dd8",
        },
        {
          url: "assets/flags.png",
          revision: "416250f60d785a2e02f17e054d2e4e44",
        },
        {
          url: "assets/flags@2x.png",
          revision: "d429a5777afaf2fc349652e812e9bb11",
        },
        {
          url: "assets/git.webp",
          revision: "7480ed5e0f51b0aec28002dd7b40bbac",
        },
        {
          url: "assets/github.webp",
          revision: "128dd7d9aa0aafbbfb694ed9ba8a3065",
        },
        {
          url: "assets/html5.webp",
          revision: "5d5e1108b16e5354c240bb2e64e316e8",
        },
        { url: "assets/js.webp", revision: "8f815b649f5f53a56418b6e1f4fbf9c6" },
        {
          url: "assets/postcss.webp",
          revision: "1ea154783545257daecbac500f886104",
        },
        {
          url: "assets/react.webp",
          revision: "38f050edb8f2eee8dbf77e17509ff317",
        },
        {
          url: "assets/sass.webp",
          revision: "03ee06e278ee9ae34f5df4ae11fd3e03",
        },
        {
          url: "assets/site-1.webp",
          revision: "53d3e39399578f03f9a23805f8ddabe2",
        },
        {
          url: "assets/site-2.webp",
          revision: "d9e7d37a9e6af1e7bdaa34392a9dc7b7",
        },
        {
          url: "assets/site-3.webp",
          revision: "681ab85cfc145a4aac647f3f90ca2bee",
        },
        {
          url: "assets/tailwind.webp",
          revision: "bd6adc568f411e408b95a471043708d0",
        },
        {
          url: "assets/typescript.webp",
          revision: "f524d999097cb6f54ab9da6c6fc3f574",
        },
        { url: "es/index.html", revision: "fa2705e97c164226e503717179216f4e" },
        { url: "index.html", revision: "8d3dbd41a15cb39daacaaf83b771f8a1" },
        { url: "main.js", revision: "f9012d8203f2b3dfade2e6ac887456c2" },
        { url: "manifest.json", revision: "edabf2be370da3ebda2f76b4a1fbbe59" },
        { url: "style.css", revision: "061b184f0de39040a9c16a034b401e58" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
