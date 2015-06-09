(function() {
	var localStore = window.localStorage;
	var appCache = window.applicationCache;
	if (!appCache && !localStore) {
		alert('caching and storing isn\'t avaliable.')
		return;
	}
	console.log(appCache, localStore)
	function check() {
		switch (appCache) {
			case appCache.UNCHANGED:
				return 'UNCHANGED'
				break;
			case appCache.IDLE:
				return 'IDLE';
				break;
			case appCache.CHECKING:
				return 'CHECKING';
				break;
			case appCache.DOWNLOADING:
				return 'DOWNLOADING';
				break;
			case appCache.UPDATEREADY:
				return 'UPDATEREADY';
				break;
			case appCache.OBSOLETE:
				return 'OBSOLETE';
				break;
			default:
				return 'UKNOWN CACHE STATUS';
				break;
		}
	}

	window.addEventListener('load', checkManifest, false)

	function checkManifest(e) {
		appCache.addEventListener('updateready', updatingManifest, false);
		appCache.addEventListener('error', errorHandler, false);
		appCache.addEventListener('obsolete', errorHandler, false);
		appCache.addEventListener('cached', firstCache, false);
	}

	function updatingManifest(e) {
		appCache.update()

		if (appCache.status === 4) {
			appCache.swapCache();
			window.location.reload();
		} else {
			console.log('Nothing new, site already cached')
		}
	}

	function errorHandler(e) {
		alert('Can\'t caching files ' + this.status);
	}

	function firstCache(e) {
		console.log('first caching have already been')
	}

})();