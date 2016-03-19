(function(ext) {
    // Cleanup function when the extension is unloaded
	var ShowNever = true;
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.Toggle = function() {
		if (ShowNever) {
			ShowNever = false;
		} else {
			ShowNever = true;
		}
	}
	
	ext.Never = function() {
		return false;
	}

    // Block and block menu descriptions
	if (ShowNever) {
        var descriptor = {
          blocks: [
		    ['h', 'Never', 'Never'],
		    [' ', 'Toggle', 'Toggle'],
          ]
        };
	} else {
        var descriptor = {
          blocks: [
		    [' ', 'Toggle', 'Toggle'],
		  ]
		};
	}

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});