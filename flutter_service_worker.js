'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "60d2c3654fdf9b9c1db0462aa60ca7b4",
".git/config": "e7646d1eefc2993b83f8d8d0d81c398f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ee204d25c1477466b34b4f61d5625206",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63f0080e3a8127da54da6092786cdf52",
".git/logs/refs/heads/main": "63f0080e3a8127da54da6092786cdf52",
".git/logs/refs/remotes/origin/main": "24638474a90e7e04f4e1bd3301fbbc80",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/c4e7dac7413cf9ddc1102c9c4bf1ee421d9ef6": "64a6c3fba45096a8af2a470b21f0d51a",
".git/objects/06/fec8ee406302de8e83ca39adfd2258aae6fe0c": "010b5599da4716c30dc94f614df992ca",
".git/objects/07/682b0eb385f1d56ea06ded220c99486e73543b": "83a8e95da0164732b39882e8fbe8d643",
".git/objects/0e/fd541cbf50b79f451bc77c65b306603588b4ae": "d53404a6192e65ee79843bbf9aa3a511",
".git/objects/0f/c06f5411be84e91f11aac1a4c19b060de20a31": "af7d68132d61c9ebf37af3586012fef1",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/8472490411af38b2510e8d2a35644f7e74852b": "fe1b4b5eb7063001e9565fe17fedac7b",
".git/objects/1b/03fb050925e8fb5bfbb3a42dc94cf0beb7bf21": "19836bae463a257637336c0af70ba9eb",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/645800d73832d09083377c5272786128186bb6": "e89c74823c91a573ba83a17ad77e8560",
".git/objects/2e/a4b92e37197c6ba03aa1b7a7e76f7ec8d354fe": "557ec5ec9ca72ca65f491e078fb3730f",
".git/objects/33/d11edd8fbc7f6666f356b64dae45615290474e": "d649abd1979cc0deec1bd0b5f86f9ba3",
".git/objects/34/26ed99259fdf000ca378977b4d94e6f2c1f5db": "6b2dceb73a3df1e0405a379948b335c1",
".git/objects/38/8e294f7bd5dcdf6605eb2f9111f25d51065efb": "4e49dada38d52ba1ab933e78bceba533",
".git/objects/3b/1b53b20ec39f748eeae6b44a0239cc679a32a2": "267caa1548c1cfd42e3399d316724f92",
".git/objects/42/feb1df84a3d85f361060d3198239ed6916e242": "fa484063522618630b8262aa8680bc40",
".git/objects/49/d800c9863e13556368b7a2b76b2df5ce2efd97": "af63450d6aac1fcb40400744c6bf4aee",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/54/0f7b7da3349efbac6a6abedc5a9f4e5b1eab75": "61640ca665e8ce7521e03eb6a8d3e96d",
".git/objects/55/29fc4fad4edc174bae4c015e3ba85a8639c923": "07f05ec0d82e462f7c9d426cd73cceb4",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/77/48c5a9118142932db656b942b7960d3608a225": "be8b07c4ff510567f7dac0b5305d33cc",
".git/objects/77/fc2156a216b618b3c2f4966694d7f803b88094": "44806366ce03eb4c49602cdeb3cf0938",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/87/b57144eb618c6cead6c4a8d0b132b44022c5e9": "d702b5999a5edf8ef49d04437c775a02",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7dc098e54e01543a4e0c6eb99e1168c8eacd35": "2ed6342abdb72c7438b7c7823d92ae4e",
".git/objects/8a/9f19ffc8c6338a51d52a8d98f054248a7b99fb": "58a47aa31c5fcd4c778cd3d8b53b7af0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/687bb94d460ee436b15f6af876466fb8554770": "cf61a7207eda4505bf70084a95fab59b",
".git/objects/95/28b0587d21b124f4e9f6aa26b6de566a6247b7": "79ce6ea8c1abed9c6c6a49adafa5052e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/4189f13f7c85636dd5522122b4151e2eaec084": "c905efaab34555d339eda0c312172c53",
".git/objects/98/4e795c95d0ecfd5d12423b45239bbe4a3f8dc4": "8ebbeef1b512f5e5759a9001817aacd3",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/40a707689c956aa0e7a7a8fa1b90dfa6012d27": "f6938c6a3561958e810479dad663592a",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/f65f2cfb68fe3abbc3977f4437de148f695dec": "e7a027062fa9d581d557cd85c3bb7051",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/aa/bae3dd1d043f6056e85890f4f81f4120e7fdec": "574c3bc5477b54071eac9d2278cc33c9",
".git/objects/b1/072f97ae4b4f09004ec01d2007410ec03ef8f1": "888e805c1ed55c3c46304c921f4566f7",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/a9924b5c365ae62a42a2851d476b4d27cb21fc": "d8e2ed6ac1f85359b70d3bb418e514d4",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e09a49d69b0cecdee138fadee7d8532c7daafb": "49bdbc15f90a594f24b5e449812f77f8",
".git/objects/bb/700562e331290f1e1da0c7036bcaa8f1c80dc4": "0f1dd2f3ef81bc7f94d5b369080ee765",
".git/objects/bd/9f1489484beac131162ea75089636f927058aa": "aff27635df60671bac83163394040df8",
".git/objects/c3/668a8d786c814a2d2a2af3ece3f11d10619064": "95502d2ddbcdac17316db5600d9c9653",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/8a32c2a7ca09460b5d083cc3a8f1cc1d4c8d60": "3fab8475d8fcdffa96a9071a5f112c64",
".git/objects/c9/34231e5dc69bf74cd8c27f2a8c6a7c5c3be139": "2cc700e3d08365d47950a17555502f73",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cf/c0bcd6e78954ae235a8cee7bed9b7baf885514": "23913e897206734639b42a30a255ad57",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7745f408a758ed7095766897c45fd6dbf60604": "0295b3ddc14f9cf2b516866082cf9472",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/10210203b3361d4f5efebdf6a4a43de746f3c5": "bb7972aa779641141f8c80517d575664",
".git/objects/e6/d0639b85cfa02a65423ac046c813b857ec91ef": "58ba6c6bca2a0da7ced86eed41227a47",
".git/objects/e8/59cf0203ea70b41774ce27466f03094338ea66": "6e1de63ecdbf152536719de03b10eb04",
".git/objects/e9/f3df9366c7469ccaa82722feb2fa492fbcbe82": "51e25a0bd2bf4dbfcb11e89039cb4ff0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/7422f0a95e4164932af3c658c0b3c5fa5f301b": "985d0de86388d6b2a80cdd73017ab29e",
".git/objects/f5/7896adbea19e8fb17406f65f89d4f3a614fcf0": "fc84f2a08cd18779ccd205cc1f5a52a0",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "31ecd8275adb87dce04c193aa38b0e87",
".git/refs/remotes/origin/main": "31ecd8275adb87dce04c193aa38b0e87",
"assets/AssetManifest.bin": "967883753030b75eba491a9f9c1f2bc2",
"assets/AssetManifest.bin.json": "8cfc608782df4e00fbb360635a2bb186",
"assets/AssetManifest.json": "8831c8eb00a6cc948538e1d918982115",
"assets/assets/FONTS/WixMadeforDisplay/WixMadeforDisplay-Bold.ttf": "d5f05b32d20bf3c87ef5f49febec7094",
"assets/assets/FONTS/WixMadeforDisplay/WixMadeforDisplay-ExtraBold.ttf": "71945aa1be1d15393e8926e9b3e30db2",
"assets/assets/FONTS/WixMadeforDisplay/WixMadeforDisplay-Medium.ttf": "0488a051e463e303c8277b7a23fe8bf7",
"assets/assets/FONTS/WixMadeforDisplay/WixMadeforDisplay-Regular.ttf": "c4fd729f06212ff9d718a7382c6dbee6",
"assets/assets/FONTS/WixMadeforDisplay/WixMadeforDisplay-SemiBold.ttf": "fea743568c4583717e0d6a04295f1af8",
"assets/assets/IMAGES/carrinho_vazio.jpg": "7c35efa9f8eff2e0c0a6e046bd2685e3",
"assets/assets/IMAGES/icon_confirmacao.png": "8a5ac9b098b411cedf95254d7bdec83e",
"assets/assets/IMAGES/icon_confirmacao2.png": "c8d22d7eb6b593a8af0ee8997aec317a",
"assets/assets/IMAGES/icon_confirmacao3.png": "265cc8753d81be6e24cb662d98546c9f",
"assets/assets/IMAGES/logo.png": "4f828a8266c786980346ec35542d5a45",
"assets/FontManifest.json": "668c842c2f68a62a5395ba6a79f2b504",
"assets/fonts/MaterialIcons-Regular.otf": "e9061f285f1cb864aa7e9076433bf5e5",
"assets/NOTICES": "28806fe40ae81bf1caaf521fd7496a78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "a9e4cf00aab0543e8cf862906629f224",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icon_confirmacao2.png": "c8d22d7eb6b593a8af0ee8997aec317a",
"index.html": "f7d5ef3f8396e055271009a64157aa18",
"/": "f7d5ef3f8396e055271009a64157aa18",
"main.dart.js": "9fb88c3903492f272f333d0fed241153",
"manifest.json": "41e8a8825367dd2984fa63eac2913b64",
"version.json": "faaaeaf833378c9b6fe0a9580a116e40"};
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
