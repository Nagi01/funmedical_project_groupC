jQuery(document).ready(function(){

	SpeechRec.config({ 'ApiKey':'4c5a522f4a315056516862506b6b5958522f707833304c6f43514e7872567939794376464d4b4a68393041' });

	SpeechRec.on_result(function(result){
		var new_txt = JSON.stringify(result, undefined, 2);
		jQuery('#result_textarea').val(new_txt);
	});

	SpeechRec.on_error(function(e) {
		var x = { 'name': e.name, 'message': e.message };
		console.error('▲コールバック関数 on_error が実行されました at ' + (new Date).toLocaleString() + '\n' + JSON.stringify(x));
	});
	SpeechRec.on_config(function(config){
		console.info('▲コールバック関数 on_config が実行されました( 音声認識を設定しました ): ' + JSON.stringify(config));
	});
	SpeechRec.on_start(function(){
		console.info('▲コールバック関数 on_start が実行されました( 音声認識を開始しました)');
	});
	SpeechRec.on_stop(function(){
		console.info('▲コールバック関数 on_stop が実行されました( 音声認識を停止しました / ユーザ操作 )');
	});
	SpeechRec.on_ask(function() {
		console.info('▲コールバック関数 on_ask が実行されました( マイクの使用可否を確認中です )');
	});
	SpeechRec.on_allow(function() {
		console.info('▲コールバック関数 on_allow が実行されました( マイクの使用が許可されました )');
	});
	SpeechRec.on_deny(function() {
		console.info('▲コールバック関数 on_deny が実行されました( マイクの使用が拒否されました )');
	});
	SpeechRec.on_voiceless(function(){
		console.warn('▲コールバック関数 on_voiceless が実行されました( 音声認識を停止しました / 始端が検出できませんでした )');
	});
	SpeechRec.on_voice_begin(function(){
		console.warn('▲コールバック関数 on_voice_begin が実行されました( 始端が検出されました ) at ' + (new Date).toLocaleString());
	});
	SpeechRec.on_voice_too_long(function(){
		console.warn('▲コールバック関数 on_voice_too_long が実行されました( 音声認識を停止しました / 終端が検出できませんでした ) at ' + (new Date).toLocaleString());
	});
	SpeechRec.on_voice_end(function(){
		console.warn('▲コールバック関数 on_voice_end が実行されました( 終端が検出されました ) at ' + (new Date).toLocaleString());
	});
	SpeechRec.on_no_result(function(){
		console.warn('▲コールバック関数 on_no_result が実行されました( 音声認識を停止しました / 認識結果が得られませんでした ) at ' + (new Date).toLocaleString());
	});
	SpeechRec.on_result(function(result){
		console.warn('▲コールバック関数 on_result が実行されました( 音声認識を停止しました / 認識結果を得ました ) at ' + (new Date).toLocaleString());
	});
	SpeechRec.on_mic_disabled(function(){
		console.info('▲コールバック関数 on_mic_disabled が実行されました( マイクが無効化されました )');
	});
	SpeechRec.on_mic_enabled(function(){
		console.info('▲コールバック関数 on_mic_enabled が実行されました( マイクが有効化されました )');
	});

	SpeechRec.on_error(function(e){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_config(function(config){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_stop(function(){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_deny(function(e) {
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_voiceless(function(){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_voice_too_long(function(){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_no_result(function(){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});
	SpeechRec.on_result(function(result){
		jQuery('#config_button').attr('disabled', false);
		jQuery('#start_button').attr('disabled', false);
	});

	jQuery('#config_button').click(function(){
		SpeechRec.show_preference(function(conf){
			console.info('▼API関数 config を実行します( 音声認識を設定します ): ' + JSON.stringify(conf));
		});
	});
	jQuery('#start_button').click(function(){
		jQuery('#start_button').attr('disabled', true);

		SpeechRec.show_recognition(function(){
			console.info('▼API関数 start を実行します( 音声認識を開始します )');
			jQuery('#result_textarea').val('');
			jQuery('#result_textarea').html('');
		}, function(){
			console.info('▼API関数 stop を実行します( 音声認識を停止します )');
		});
	});

	var Self = window.Self = {};
	Self.resize_content = function(){
		var ww = document.documentElement.clientWidth;
		var wh = document.documentElement.clientHeight;

		var cw = jQuery('#content_div').css('width').replace(/px$/, '');
		var ch = jQuery('#content_div').css('height').replace(/px$/, '');

		var cx = (ww - cw) / 2;
		var cy = (wh - ch) / 2;

		jQuery('#content_div').css('left', cx).css('top', cy);
	};
	Self.resize_content();
	jQuery(window).resize(function(){
		Self.resize_content();
	});

	SpeechRec.config({ 'OpusWorkerUrl':'./js/libopus.worker.js' });

});
