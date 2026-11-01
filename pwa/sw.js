/* Minimal service worker so browsers treat Cypht as an installable app.
 * It intentionally has no fetch handler and caches nothing: mail data must
 * never be served from a cache. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
