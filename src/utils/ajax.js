import $ from 'jquery';
//import  Bluebird from 'bluebird';
//import * as _ from 'lodash';
//import bootstrapData from '../bootstrap-data.js';

const ajaxDefaults = {
	method: 'GET',
	contentType: 'application/json'
};

/*function jqErrHandler(opt, jqXHR) {
	if (jqXHR.status == 200) {
		// handling 200 responses with no body
		return Bluebird.resolve();
	}

	const errText = jqXHR.status === 500 ? 'An unknown error occurred.' : jqXHR.responseText;
	const err = new Error(errText || 'An unknown error occurred.');
	err.statusCode = jqXHR.status;
	if (jqXHR.status === 409) err.isConflict = true;
	/*if ((jqXHR.status === 401 || jqXHR.status === 403) && !opt.ignoreAuth) {
		window.location = bootstrapData.headerUrl.logOutUrl;
	}
	throw err;
}*/

function checkSuccessStatus(response) {
	const isSuccess = response && response.status && response.status.toLowerCase() === 'success';
	if (!isSuccess && !response.error) {
		// Handle non-success response but with no error node
		throw new Error('An unknown error occurred');
	}
	return response;
}


export default function ajax(options) {
	/*if (_.isString(options)) {
		return ajax({uri: options});
	}
	const { expectSuccessStatus, checkForError=true, ...otherOpts } = options;
	const opt = _.defaults(otherOpts, ajaxDefaults);

	// jquery wants url property, even though it doesn't have to be a url..
	if (opt.uri) {
		opt.url = opt.uri;
	}
	/*let result = Bluebird.resolve($.ajax(opt))
		.catch(jqErrHandler.bind(null, opt))
		.then( (response)=> {
				return response;
		});*/
   let result = $.ajax({url: options.url, type: options.method, success: function(result){
        return result
    }});
	return result;
}
