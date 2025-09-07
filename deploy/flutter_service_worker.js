'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7df9c7881dbf1750dc76ffa5858ba09c",
"assets/AssetManifest.bin.json": "7845331f024942c5c8150f7ef52390fd",
"assets/AssetManifest.json": "b1a72f463a7aaa3e196a09a9bdab3cea",
"assets/assets/text/english/adult/cardiac_arrest.txt": "892f105a6fe758d4483ce0e976af7d6e",
"assets/assets/text/english/adult/choking.txt": "af9a436ad17a70308842e47acb8f33f0",
"assets/assets/text/english/adult/common_warning_sign.txt": "25221434899521d56a14924f42a4e982",
"assets/assets/text/english/adult/hand_bleeding.txt": "b172a9f16c0bc2d212c938994a35fde1",
"assets/assets/text/english/adult/head_bleeding.txt": "7a06dac4f0c57d04574396048f1f25f2",
"assets/assets/text/english/adult/leg_bleeding.txt": "a0734e2f8b2a6208d77d3ace746fb194",
"assets/assets/text/english/adult/nose_bleeding.txt": "9bc2b1801d00c8232cad5627298967d4",
"assets/assets/text/english/child/cardiac_arrest.txt": "373cd7864263f5ed16f5ee4b1895360c",
"assets/assets/text/english/child/choking.txt": "8514cb63b7341d685af704d42bedbd1d",
"assets/assets/text/english/child/common_warning_signs.txt": "18e7aab2e0c33b9c3669235732f7f331",
"assets/assets/text/english/child/hand_bleeding.txt": "4b975194211b5cec72dfb7bac0f934f5",
"assets/assets/text/english/child/head_bleeding.txt": "19e3c5e8180a0b02e4beb580c5a8c010",
"assets/assets/text/english/child/leg_bleeding.txt": "bbede5eb361ba33f1b2a5513db22e4ee",
"assets/assets/text/english/child/nose_bleeding.txt": "8bd51b56bfee0ab4ed2897efb3c4cc60",
"assets/assets/text/tamil/adult/cardiac_arrest.txt": "bf55e9cc9a0fc71f2056e3b4d57758c2",
"assets/assets/text/tamil/adult/choking.txt": "72d823aca8e5c387655b02d41256c404",
"assets/assets/text/tamil/adult/common_warning_signs.txt": "018031ce15755d6f9c9bea791aecbb21",
"assets/assets/text/tamil/adult/hand_bleeding.txt": "945a6a1470ba82580579060b8e19d618",
"assets/assets/text/tamil/adult/head_bleeding.txt": "6fcf1efb4bfb0c4730b200ad71f9f25a",
"assets/assets/text/tamil/adult/leg_bleeding.txt": "5109c7111c5f1f89a66c1573eabe1ef2",
"assets/assets/text/tamil/adult/nose_bleeding.txt": "d4f7a5fb393053147446c2e769c2cc97",
"assets/assets/text/tamil/child/cardiac_arrest.txt": "48a029b9d8cd61350b0c3ef047bfe565",
"assets/assets/text/tamil/child/choking.txt": "c48d7086616a0460830a84b363f9bcb9",
"assets/assets/text/tamil/child/common_warning_signs.txt": "018031ce15755d6f9c9bea791aecbb21",
"assets/assets/text/tamil/child/hand_bleeding.txt": "e1ea62006f66c2d08f7d1aeaad3c798a",
"assets/assets/text/tamil/child/head_bleeding.txt": "5de10c1274aeb32e39239deda860dc8d",
"assets/assets/text/tamil/child/leg_bleeding.txt": "3e9bf9ce77de5d270d1af28daf9319fe",
"assets/assets/text/tamil/child/nose_bleeding.txt": "9ddd5420f949439b1fe7f8cce61858b7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3aa61f46fcadd47edbb82a565edd4ce9",
"assets/NOTICES": "9cf67a63fd819178a7e8bd67dfb97c51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8747da28a593f2789d801ac8620bfcf0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0232e359384468eac3cf338bb5406cf",
"/": "f0232e359384468eac3cf338bb5406cf",
"main.dart.js": "a1b41d913043e6c939cf561b49026df8",
"manifest.json": "dd6cbb5eb87577c53487b919a1a68fe4",
"version.json": "9719e971edb003a81147af2a42bf2b80"};
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
