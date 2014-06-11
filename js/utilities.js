var Util = (function(){{

	function readUntil(str, pattern, startIndex){
		for(var i = 0; i < str.length; i++){
			var regex = assembleBeginsWithRegexFromPattern(pattern);
			str.substr(i).test(regex)
		}
	}
	
	function assembleBeginsWithRegexFromPattern(pattern){
		if(pattern typeof String){
			return new RegExp("^" + pattern);
		}else if(pattern instaceof Array){
			
		}
	}

})();