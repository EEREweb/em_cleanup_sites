// Define functions for Internet Explorer
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}
if (!String.prototype.repeat) {
	String.prototype.repeat= function(n){
		n= n || 0;
		return Array(n+1).join(this);
	}
}

// custom JS functions

// removes last line if empty from multi-line string 
	function removeTrailingLine(long_string) {
		var x = long_string;
		if(x.split(/\r?\n/).pop().length == 0) {
			return x.substring(0, x.lastIndexOf("\n"));
		} else {
			return x;
		}
	}
	
	//get querystring vars and place them in Global object - qs
	var sourceURL = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
	var qryStr = sourceURL.substring(sourceURL.indexOf("?"));

    var qs = (function (a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i) {
            var p = a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+|%2B/g, " ").replace("_and_", " & "));
        }
        return b;
	})(qryStr.substr(1).split('&'));
    //})(window.location.search.substr(1).split('&'));

	
	// swap element at one position with another
	Array.prototype.move = function(from, to) {
		this.splice(to, 0, this.splice(from, 1)[0]);
	};