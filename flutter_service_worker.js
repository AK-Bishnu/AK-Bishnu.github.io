'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"index.html": "190f64c96ce174ac26ac5c543bf82a87",
"/": "190f64c96ce174ac26ac5c543bf82a87",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/AssetManifest.bin": "4767f93466edca7e27366acbbe292747",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ac3595c8ea2acaf6c33b9e6e9c746a94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/NOTICES": "656bae685cf9b0cca84a977606633f3a",
"assets/AssetManifest.json": "0219ab6d664625bf07e09c70d63cdb96",
"assets/assets/django.png": "4a014b83961b7163a8fefedc0f23f9ce",
"assets/assets/c++.png": "0b849c72f38362fe12072a4916660013",
"assets/assets/tetris/t-2.png": "2b32ce0caeef277c77c5493c291dca02",
"assets/assets/tetris/t-1.png": "0bacf2cb87a4fdcac032a2764985cb55",
"assets/assets/tetris/t-3.png": "e04b8001e869f00e01ab984a5526c5ba",
"assets/assets/cm_trader/paymentChk.jpg": "8cbf674272189ca40299ade59f76087e",
"assets/assets/cm_trader/firebase.png": "d7b2bbf6b2358bdc238dd9dd499bf889",
"assets/assets/cm_trader/drawer.jpg": "c07ce703c5c6581df286698b871fcc2f",
"assets/assets/cm_trader/userHome.jpg": "ae3e976188b1370c0c5288911c2d5c74",
"assets/assets/cm_trader/support.jpg": "92e7243c62ec576b12a4ba0dda52d738",
"assets/assets/cm_trader/userM.jpg": "02351d1c1c0360e155a74451a5b081f3",
"assets/assets/cm_trader/auth.jpeg": "837193e33f91aa2e396f38310aea13d6",
"assets/assets/cm_trader/signin.jpg": "7bf978c38c85d47b823b32c589adbe90",
"assets/assets/cm_trader/cover.png": "9427304d950485324d75bce108771780",
"assets/assets/cm_trader/adminHome.jpg": "85a66f13eb132262d6823ee7ede73b53",
"assets/assets/quick_enhancer/qh1.jpg": "f2d1725bee5d5e6431d19b5bd54996aa",
"assets/assets/quick_enhancer/qh4.jpg": "505abe6302cc8cff3b0cd422599fce78",
"assets/assets/quick_enhancer/qh2.jpg": "252e1147d7735597c611f0822ed38c54",
"assets/assets/quick_enhancer/cover.png": "1a837e4e53dfc87e43eb631dfd4f4c21",
"assets/assets/quick_enhancer/qh3.jpg": "fe5b7e7092ee6e5efaad1e5cdf0bcc34",
"assets/assets/meAvatar.jpg": "46b5b9ba1a9431dc0bc0f348263ccf8f",
"assets/assets/sqlite.png": "bcde9773b4917da8037675f2cd44d497",
"assets/assets/akShop/akshopCover.png": "6cee521a00bc7c11a7b7b629c5b3df32",
"assets/assets/akShop/PD_D.jpg": "6f438fa93f8c036805c6acceeadf5a87",
"assets/assets/akShop/loginD.jpg": "c65e5b6580e43d25c1fe27ad56015bce",
"assets/assets/akShop/MenuB.jpg": "5ce2eb54525d3e217a03513251e57bfb",
"assets/assets/akShop/adminPanel.png": "d916d8f3b4a7e7384a974b3ab9d4c727",
"assets/assets/akShop/RegD.jpg": "2afde0c0fd6d50e460768fd3f01ec7a6",
"assets/assets/akShop/CartD.jpg": "82b1c9bbf65e3a2c58c837712e618db5",
"assets/assets/akShop/HomeB.jpg": "ff7c186b2ec158ee3594dcb2b8b7f774",
"assets/assets/akShop/HomeD.jpg": "2e25b548eb8281a8b6c9517efff06cbe",
"assets/assets/akShop/PD_B.jpg": "f7d1deee21e04eb1dc88713d6b641d98",
"assets/assets/akShop/OdersD.jpg": "ae7d8599f58761de2510a600ca438673",
"assets/assets/akShop/CreateOrdD.jpg": "5f5f53e685eec0a4a59a9cfc08c1e3e5",
"assets/assets/akShop/FavD.jpg": "41f6c5fe0b25cbc8bb1b73639532540d",
"assets/assets/akShop/MenuD.jpg": "744762abc088e7283f0a2aac58b3f812",
"assets/assets/learn_c/c-5.jpg": "f61bcecd8fc6392bace73ffdfaf516ea",
"assets/assets/learn_c/c-6.jpg": "bbe36d570d0f6e55b1ab8816c3ee1712",
"assets/assets/learn_c/c-3.jpg": "ec0195fae1795cde5146206d2db337fc",
"assets/assets/learn_c/c-1.jpg": "f16a7018af577e8c1bb48ce75476c5bf",
"assets/assets/learn_c/c-4.jpg": "2d73a8cf92e315627ea9acb2b5d4b55f",
"assets/assets/learn_c/c-2.jpg": "e04e77f7594c131f2fc03dd9f57edcf3",
"assets/assets/animation.json": "64aca52642e741c6fc21e70e7f9fa0dc",
"assets/assets/java.png": "52e63e173acc94e65ad70a7ae555c2e7",
"assets/assets/sound_bound/c2.jpeg": "a1ec7887f31a7f05e3a710f997a27b1a",
"assets/assets/sound_bound/h1.jpg": "2685de431b46282c48a14fb98b63287f",
"assets/assets/sound_bound/s_cover.png": "76ad616881a288a4fb9dd4eed014bb1a",
"assets/assets/sound_bound/c1.jpeg": "a8fe561b5a48bd14f98d485d99f7e0b6",
"assets/assets/sound_bound/h3.jpg": "8557b90bc32671ada1d0afb6905d14a4",
"assets/assets/sound_bound/h2.jpg": "cb75e5f6d1103d54ff5be5ab30fc4421",
"assets/assets/snake/s-2.png": "b29e251c02d600c29b879d5e14e2270d",
"assets/assets/snake/s-4.png": "f3fa52b2d51f7e4a4472f8b1b82ace40",
"assets/assets/snake/s-1.png": "139fb404e9c7c36e1456b3a51121f5f7",
"assets/assets/snake/s-3.png": "0faf2c31b3ec89fd1789c676fa543921",
"assets/assets/easytrade/e.png": "02c5db3605c0f45d949294c6735d659c",
"assets/assets/easytrade/e4.jpg": "fc980fc94738ad7226a43448bf75036e",
"assets/assets/easytrade/e2.jpg": "9316e5204806c7256d6f132c4cd8ce0a",
"assets/assets/easytrade/e6.jpg": "3b4115c57d64312e9a86e75ce58cfb5a",
"assets/assets/easytrade/e3.jpg": "05a5069cdd01dc9b2a6838e049904377",
"assets/assets/easytrade/e5.jpg": "56aaff35b49b270409cb82736ae81afd",
"assets/assets/easytrade/e1.jpg": "879f1e03e82d9aff80d30def000f53de",
"assets/assets/C.png": "fda56f4e75cfb7e4d945d0bd29144d1f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "a0ab774cc1cb60ab3140c2f4d4c47548",
"assets/AssetManifest.bin.json": "dd302e0e829d8e5a73f6240cd1c3b52e",
"flutter_bootstrap.js": "b844ff4afe20b1339eac506ec58f6505",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "c89ab62fc4e60eec165930d51c12a3ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
