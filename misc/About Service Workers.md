## The fetch event listener
respondWith is a method under the event object
caches.match is one under the caches object
This .match() method returns a promise
The promise is resoved with a .then(res)
The response returns either the response 
from the cache, or that from the network

## Cache Versioning
waitUntil, then use the caches.keys() method
that method returns a promise
to resolve this promise, 
we filter the keys that don't match the current
version and delete them using the caches.delete method