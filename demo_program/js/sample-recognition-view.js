jQuery(document).ready(function(){
	if (SpeechRec) {

		SpeechRec._recognition_img_width  = 100;
		SpeechRec._recognition_img_height = 100;

		SpeechRec._recognition_img_pre_selector = null;
		SpeechRec._recognition_can_stop         = false;

		SpeechRec._recognition_resize = function(){

			var mw = document.documentElement.clientWidth;
			var mh = document.documentElement.clientHeight;
			jQuery('#_srrecg_mask')
				.css('position', 'absolute')
				.css('left', 0)
				.css('top', 0)
				.css('width', mw)
				.css('height', mh)
				;

			var ix = (mw - SpeechRec._recognition_img_width) / 2;
			var iy = (mh - SpeechRec._recognition_img_height) / 2;

			jQuery('._srrecg_imgs').each(function(){
				jQuery(this)
					.css('position', 'absolute')
					.css('left', ix + 'px')
					.css('top', iy + 'px')
					.css('width', SpeechRec._recognition_img_width + 'px')
					.css('height', SpeechRec._recognition_img_height + 'px')
					;
			});

		};

		SpeechRec._recognition_create = function(){
			if (jQuery('#_srrecg_mask')[0]) {
				return;
			}

			var speechrec_recognition_mask = document.createElement("div");
			speechrec_recognition_mask.setAttribute('id', '_srrecg_mask');
			jQuery(speechrec_recognition_mask)
				.css('z-index', 99)// max:2147483647 
				.css('margin', 0)
				.css('padding', 0)
				.css('background-color', '#dddddd')
				.css('opacity', 0.8)
				.css('position', 'absolute')
				.css('left', 0)
				.css('top', 0)
				.css('width', document.documentElement.clientWidth)
				.css('height', document.documentElement.clientHeight)
				;

			var img_n = document.createElement("img");
			img_n.setAttribute('id', '_srrecg_img_n');
			img_n.setAttribute('class', '_srrecg_imgs');
			img_n.setAttribute('src', 'img/none.png');

			var img_0 = document.createElement("img");
			img_0.setAttribute('id', '_srrecg_img_0');
			img_0.setAttribute('class', '_srrecg_imgs');
			img_0.setAttribute('src', 'img/speak_now_0.png');

			var img_1 = document.createElement("img");
			img_1.setAttribute('id', '_srrecg_img_1');
			img_1.setAttribute('class', '_srrecg_imgs');
			img_1.setAttribute('src', 'img/speak_now_1.png');

			var img_2 = document.createElement("img");
			img_2.setAttribute('id', '_srrecg_img_2');
			img_2.setAttribute('class', '_srrecg_imgs');
			img_2.setAttribute('src', 'img/speak_now_2.png');

			var img_3 = document.createElement("img");
			img_3.setAttribute('id', '_srrecg_img_3');
			img_3.setAttribute('class', '_srrecg_imgs');
			img_3.setAttribute('src', 'img/speak_now_3.png');

			var img_4 = document.createElement("img");
			img_4.setAttribute('id', '_srrecg_img_4');
			img_4.setAttribute('class', '_srrecg_imgs');
			img_4.setAttribute('src', 'img/speak_now_4.png');

			var img_5 = document.createElement("img");
			img_5.setAttribute('id', '_srrecg_img_5');
			img_5.setAttribute('class', '_srrecg_imgs');
			img_5.setAttribute('src', 'img/speak_now_5.png');

			var img_6 = document.createElement("img");
			img_6.setAttribute('id', '_srrecg_img_6');
			img_6.setAttribute('class', '_srrecg_imgs');
			img_6.setAttribute('src', 'img/speak_now_6.png');

			var img_7 = document.createElement("img");
			img_7.setAttribute('id', '_srrecg_img_7');
			img_7.setAttribute('class', '_srrecg_imgs');
			img_7.setAttribute('src', 'img/speak_now_7.png');

			var img_8 = document.createElement("img");
			img_8.setAttribute('id', '_srrecg_img_8');
			img_8.setAttribute('class', '_srrecg_imgs');
			img_8.setAttribute('src', 'img/speak_now_8.png');

			var img_9 = document.createElement("img");
			img_9.setAttribute('id', '_srrecg_img_9');
			img_9.setAttribute('class', '_srrecg_imgs');
			img_9.setAttribute('src', 'img/speak_now_9.png');

			var img_a = document.createElement("img");
			img_a.setAttribute('id', '_srrecg_img_a');
			img_a.setAttribute('class', '_srrecg_imgs');
			img_a.setAttribute('src', 'img/speak_now_10.png');

			var img_b = document.createElement("img");
			img_b.setAttribute('id', '_srrecg_img_b');
			img_b.setAttribute('class', '_srrecg_imgs');
			img_b.setAttribute('src', 'img/speak_now_11.png');

			var img_c = document.createElement("img");
			img_c.setAttribute('id', '_srrecg_img_c');
			img_c.setAttribute('class', '_srrecg_imgs');
			img_c.setAttribute('src', 'img/speak_now_12.png');

			var img_d = document.createElement("img");
			img_d.setAttribute('id', '_srrecg_img_d');
			img_d.setAttribute('class', '_srrecg_imgs');
			img_d.setAttribute('src', 'img/speak_now_13.png');

			var img_e = document.createElement("img");
			img_e.setAttribute('id', '_srrecg_img_e');
			img_e.setAttribute('class', '_srrecg_imgs');
			img_e.setAttribute('src', 'img/speak_now_14.png');

			var img_f = document.createElement("img");
			img_f.setAttribute('id', '_srrecg_img_f');
			img_f.setAttribute('class', '_srrecg_imgs');
			img_f.setAttribute('src', 'img/speak_now_15.png');

			var img_g = document.createElement("img");
			img_g.setAttribute('id', '_srrecg_img_g');
			img_g.setAttribute('class', '_srrecg_imgs');
			img_g.setAttribute('src', 'img/speak_now_16.png');

			var img_r = document.createElement("img");
			img_r.setAttribute('id', '_srrecg_img_r');
			img_r.setAttribute('class', '_srrecg_imgs');
			img_r.setAttribute('src', 'img/recognizing.png');

			speechrec_recognition_mask.appendChild(img_n);
			speechrec_recognition_mask.appendChild(img_0);
			speechrec_recognition_mask.appendChild(img_1);
			speechrec_recognition_mask.appendChild(img_2);
			speechrec_recognition_mask.appendChild(img_3);
			speechrec_recognition_mask.appendChild(img_4);
			speechrec_recognition_mask.appendChild(img_5);
			speechrec_recognition_mask.appendChild(img_6);
			speechrec_recognition_mask.appendChild(img_7);
			speechrec_recognition_mask.appendChild(img_8);
			speechrec_recognition_mask.appendChild(img_9);
			speechrec_recognition_mask.appendChild(img_a);
			speechrec_recognition_mask.appendChild(img_b);
			speechrec_recognition_mask.appendChild(img_c);
			speechrec_recognition_mask.appendChild(img_d);
			speechrec_recognition_mask.appendChild(img_e);
			speechrec_recognition_mask.appendChild(img_f);
			speechrec_recognition_mask.appendChild(img_g);
			speechrec_recognition_mask.appendChild(img_r);

			jQuery('body')[0].appendChild(speechrec_recognition_mask);

			jQuery('#_srrecg_img_n').hide();
			jQuery('#_srrecg_img_0').hide();
			jQuery('#_srrecg_img_1').hide();
			jQuery('#_srrecg_img_2').hide();
			jQuery('#_srrecg_img_3').hide();
			jQuery('#_srrecg_img_4').hide();
			jQuery('#_srrecg_img_5').hide();
			jQuery('#_srrecg_img_6').hide();
			jQuery('#_srrecg_img_7').hide();
			jQuery('#_srrecg_img_8').hide();
			jQuery('#_srrecg_img_9').hide();
			jQuery('#_srrecg_img_a').hide();
			jQuery('#_srrecg_img_b').hide();
			jQuery('#_srrecg_img_c').hide();
			jQuery('#_srrecg_img_d').hide();
			jQuery('#_srrecg_img_e').hide();
			jQuery('#_srrecg_img_f').hide();
			jQuery('#_srrecg_img_g').hide();
			jQuery('#_srrecg_img_r').hide();

			// コールバックを設定
			//SpeechRec.on_config(function(config){
			//});
			SpeechRec.on_start(function(){
				jQuery(SpeechRec._recognition_img_pre_selector).hide();
				jQuery('#_srrecg_img_0').show();
				SpeechRec._recognition_img_pre_selector = '#_srrecg_img_0';
			});
			SpeechRec.on_stop(function(){
				SpeechRec._recognition_can_stop = false;
				jQuery('#_srrecg_mask').hide();
			});
			SpeechRec.on_error(function(e) {
				SpeechRec._recognition_can_stop = false;
				jQuery('#_srrecg_mask').hide();
			});
			//SpeechRec.on_ask(function() {
			//});
			SpeechRec.on_allow(function() {
				SpeechRec._recognition_can_stop = true;
			});
			SpeechRec.on_deny(function(e) {
				jQuery('#_srrecg_mask').hide();
			});
			SpeechRec.on_voiceless(function(){
				SpeechRec._recognition_can_stop = false;
				jQuery('#_srrecg_mask').hide();
			});
			//SpeechRec.on_voice_begin(function(){
			//});
			SpeechRec.on_voice_too_long(function(){
				SpeechRec._recognition_can_stop = false;
				jQuery('#_srrecg_mask').hide();
			});
			SpeechRec.on_voice_end(function(){
				jQuery(SpeechRec._recognition_img_pre_selector).hide();
				jQuery('#_srrecg_img_r').show();
				SpeechRec._recognition_img_pre_selector = '#_srrecg_img_r';
			});
			SpeechRec.on_no_result(function(){
				SpeechRec._recognition_can_stop = false;
				jQuery('#_srrecg_mask').hide();
			});
			SpeechRec.on_result(function(result){
				SpeechRec._recognition_can_stop = false;
				jQuery('#_srrecg_mask').hide();
			});
			SpeechRec.on_proc(function(info){
				var volume = info.volume;

				var new_selector = '';
				if (volume > -10) {
					new_selector = '#_srrecg_img_g';
				}
				else if (volume > -20) {
					new_selector = '#_srrecg_img_f';
				}
				else if (volume > -30) {
					new_selector = '#_srrecg_img_e';
				}
				else if (volume > -32) {
					new_selector = '#_srrecg_img_d';
				}
				else if (volume > -34) {
					new_selector = '#_srrecg_img_c';
				}
				else if (volume > -36) {
					new_selector = '#_srrecg_img_b';
				}
				else if (volume > -38) {
					new_selector = '#_srrecg_img_a';
				}
				else if (volume > -40) {
					new_selector = '#_srrecg_img_9';
				}
				else if (volume > -42) {
					new_selector = '#_srrecg_img_8';
				}
				else if (volume > -44) {
					new_selector = '#_srrecg_img_7';
				}
				else if (volume > -46) {
					new_selector = '#_srrecg_img_6';
				}
				else if (volume > -48) {
					new_selector = '#_srrecg_img_5';
				}
				else if (volume > -50) {
					new_selector = '#_srrecg_img_4';
				}
				else if (volume > -52) {
					new_selector = '#_srrecg_img_3';
				}
				else if (volume > -60) {
					new_selector = '#_srrecg_img_2';
				}
				else if (volume > -70) {
					new_selector = '#_srrecg_img_1';
				}
				else {// < -70
					new_selector = '#_srrecg_img_0';
				}
				jQuery(SpeechRec._recognition_img_pre_selector).hide();
				jQuery(new_selector).show();
				SpeechRec._recognition_img_pre_selector = new_selector;
			});

			jQuery('#_srrecg_mask')
				.click(function(){
					if (SpeechRec._recognition_can_stop === true) {
						if (SpeechRec._recognition_before_stop_cb instanceof Function) {
							SpeechRec._recognition_before_stop_cb();
						}

						jQuery(SpeechRec._recognition_img_pre_selector).hide();
						jQuery('#_srrecg_img_r').show();
						SpeechRec._recognition_img_pre_selector = '#_srrecg_img_r';

						SpeechRec.stop();
					}
				})
				.hide()
				;

			SpeechRec._recognition_can_stop = false;
		};

		SpeechRec.show_recognition = function(before_start_cb, before_stop_cb){
			if (before_start_cb instanceof Function) {
				before_start_cb();
			}
			SpeechRec._recognition_before_stop_cb = before_stop_cb;
 
			jQuery(SpeechRec._recognition_img_pre_selector).hide();
			jQuery('#_srrecg_img_n').show();
			SpeechRec._recognition_img_pre_selector = '#_srrecg_img_n';

			jQuery('#_srrecg_mask').show();

			jQuery(window).resize(SpeechRec._recognition_resize);
			SpeechRec._recognition_resize();

			SpeechRec.start();
		};

		SpeechRec._recognition_create();

	}
});
