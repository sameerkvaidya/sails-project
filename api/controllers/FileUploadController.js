/*
 * file upload controller
 *  
 */

var FileUploadController = {
	
	upload: function(req, res){
		return res.send('file upload done');
	},

	download: function(req, res){
		return res.send('file download done');
	}


}


module.exports = FileUploadController;