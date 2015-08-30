jQuery(document).ready(function(){
	if (SpeechRec) {
		var _dialog_height;

		SpeechRec.preference_view = {};

		SpeechRec.preference_view._insertPreferenceDomElements = function() {
			var divDialog = document.createElement('div');
			divDialog.setAttribute('id', '_srconf_dialog');
			divDialog.setAttribute('title', '認識条件設定');

			var divGroup1= document.createElement('div');
			divGroup1.setAttribute('class', '_srconf_group');
			var divTitle1 = document.createElement('div');
			divTitle1.setAttribute('class', '_srconf_title');
			var labelTitle1 = document.createElement('label');
			labelTitle1.appendChild(document.createTextNode('雑音レベル'));
			divTitle1.appendChild(labelTitle1);
			var divValue1 = document.createElement('div');
			divValue1.setAttribute('class', '_srconf_value');
			var sbmmode_select = document.createElement('select');
			sbmmode_select.setAttribute('id', '_srconf_sbmmode');
			var optionValue1 = document.createElement('option');
			optionValue1.setAttribute('value', 0);
			optionValue1.appendChild(document.createTextNode('背景雑音/高, 始端検出/有り'));
			var optionValue2 = document.createElement('option');
			optionValue2.setAttribute('value', 1);
			optionValue2.appendChild(document.createTextNode('背景雑音/低, 始端検出/有り'));
			var optionValue3 = document.createElement('option');
			optionValue3.setAttribute('value', 2);
			optionValue3.appendChild(document.createTextNode('背景雑音/高, 始端検出/無し'));
			optionValue3.setAttribute('selected', true);
			var optionValue4 = document.createElement('option');
			optionValue4.setAttribute('value', 3);
			optionValue4.appendChild(document.createTextNode('背景雑音/低, 始端検出/無し'));
			sbmmode_select.appendChild(optionValue1);
			sbmmode_select.appendChild(optionValue2);
			sbmmode_select.appendChild(optionValue3);
			sbmmode_select.appendChild(optionValue4);
			divValue1.appendChild(sbmmode_select);
			divGroup1.appendChild(divTitle1);
			divGroup1.appendChild(divValue1);

			var divGroup2 = document.createElement('div');
			divGroup2.setAttribute('class', '_srconf_group');
			var divTitle2 = document.createElement('div');
			divTitle2.setAttribute('class', '_srconf_title');
			var divValue2 = document.createElement('div');
			var labelTitle2 = document.createElement('label');
			labelTitle2.appendChild(document.createTextNode('雑音抑圧'));
			divTitle2.appendChild(labelTitle2);
			divValue2.setAttribute('class', '_srconf_value');
			var nrflag_checkbox = document.createElement('input');
			nrflag_checkbox.setAttribute('type', 'checkbox');
			nrflag_checkbox.setAttribute('id', '_srconf_nrflag');
			nrflag_checkbox.setAttribute('name', '_srconf_nrflag');
			nrflag_checkbox.setAttribute('checked', 'checked');
			divValue2.appendChild(nrflag_checkbox);
			divGroup2.appendChild(divTitle2);
			divGroup2.appendChild(divValue2);

			var divGroup3= document.createElement('div');
			divGroup3.setAttribute('class', '_srconf_group');
			var divTitle3 = document.createElement('div');
			divTitle3.setAttribute('class', '_srconf_title');
			var labelTitle3 = document.createElement('label');
			labelTitle3.appendChild(document.createTextNode('認識結果の最大数'));
			divTitle3.appendChild(labelTitle3);
			var divValue3 = document.createElement('div');
			divValue3.setAttribute('class', '_srconf_value');
			var nbest_selct = document.createElement('select');
			nbest_selct.setAttribute('id', '_srconf_nbest');
			var divValue3_01 = document.createElement('option'); divValue3_01.setAttribute('value',  1); divValue3_01.appendChild(document.createTextNode('1'));
			var divValue3_02 = document.createElement('option'); divValue3_02.setAttribute('value',  2); divValue3_02.appendChild(document.createTextNode('2'));
			var divValue3_03 = document.createElement('option'); divValue3_03.setAttribute('value',  3); divValue3_03.appendChild(document.createTextNode('3'));
			var divValue3_04 = document.createElement('option'); divValue3_04.setAttribute('value',  4); divValue3_04.appendChild(document.createTextNode('4'));
			var divValue3_05 = document.createElement('option'); divValue3_05.setAttribute('value',  5); divValue3_05.appendChild(document.createTextNode('5'));
			var divValue3_06 = document.createElement('option'); divValue3_06.setAttribute('value',  6); divValue3_06.appendChild(document.createTextNode('6'));
			var divValue3_07 = document.createElement('option'); divValue3_07.setAttribute('value',  7); divValue3_07.appendChild(document.createTextNode('7'));
			var divValue3_08 = document.createElement('option'); divValue3_08.setAttribute('value',  8); divValue3_08.appendChild(document.createTextNode('8'));
			var divValue3_09 = document.createElement('option'); divValue3_09.setAttribute('value',  9); divValue3_09.appendChild(document.createTextNode('9'));
			var divValue3_10 = document.createElement('option'); divValue3_10.setAttribute('value', 10); divValue3_10.appendChild(document.createTextNode('10')); divValue3_10.setAttribute('selected', true);
			nbest_selct.appendChild(divValue3_01);
			nbest_selct.appendChild(divValue3_02);
			nbest_selct.appendChild(divValue3_03);
			nbest_selct.appendChild(divValue3_04);
			nbest_selct.appendChild(divValue3_05);
			nbest_selct.appendChild(divValue3_06);
			nbest_selct.appendChild(divValue3_07);
			nbest_selct.appendChild(divValue3_08);
			nbest_selct.appendChild(divValue3_09);
			nbest_selct.appendChild(divValue3_10);
			divValue3.appendChild(nbest_selct);
			divGroup3.appendChild(divTitle3);
			divGroup3.appendChild(divValue3);

			divDialog.appendChild(divGroup2);
			divDialog.appendChild(divGroup1);
			divDialog.appendChild(divGroup3);

			if (SpeechRec.is_chrome()) {
				_dialog_height = 300;
			}
			else {
				_dialog_height = 340;
				var divGroup4 = document.createElement('div');
				divGroup4.setAttribute('class', '_srconf_group');
				var divTitle4 = document.createElement('div');
				divTitle4.setAttribute('class', '_srconf_title');
				var divValue4 = document.createElement('div');
				var labelTitle4 = document.createElement('label');
				labelTitle4.appendChild(document.createTextNode('マイク側ポート番号'));
				divTitle4.appendChild(labelTitle4);
				divValue4.setAttribute('class', '_srconf_value');

				var micport_text = document.createElement('input');
				micport_text.setAttribute('type', 'text');
				micport_text.setAttribute('id', '_srconf_micport');
				micport_text.setAttribute('name', '_srconf_micport');
				micport_text.setAttribute('value', '2001');// 規定値は2001
				divValue4.appendChild(micport_text);
				divGroup4.appendChild(divTitle4);
				divGroup4.appendChild(divValue4);

				jQuery(micport_text)
					;

				divDialog.appendChild(divGroup4);
			}

			document.body.appendChild(divDialog);
		};

		SpeechRec.preference_view._insertPreferenceStyleSheets = function() {
			$('#_srconf_dialog').css('margin-top', '20px');
			$('#_srconf_dialog').css('visibility', 'hidden');
			$('._srconf_group').css('float', 'left');
			$('._srconf_group').css('width', '90%');
			$('._srconf_group').css('margin-left', '10px');
			$('._srconf_group').css('margin-bottom', '15px');
			$('._srconf_title').css('float', 'left');
			$('._srconf_title').css('width', '40%');
			$('._srconf_title').css('white-space', 'nowrap');
			$('._srconf_value').css('float', 'right');
			$('._srconf_value').css('width', '60%');
			$('#_srconf_nrflag').css('width', '1.4em');
			$('#_srconf_nrflag').css('height', '1.4em');
		};

		SpeechRec.show_preference = function(before_config_cb){
			$('#_srconf_dialog').css('visibility', 'visible');
			$('#_srconf_dialog').dialog({
				autoOpen: false,
				height: _dialog_height,
				width: 480,
				modal: true,
				buttons: {
					'設定': function(){
						var param = new Object();

						// ApiKey:
						// コンテンツプロバイダが直接指定( speechrec.js を編集 )するため、設定画面からは指定させない

						// NrFlag:
						param.NrFlag = $('#_srconf_nrflag').is(':checked');

						// SbmMode:
						param.SbmMode = $('#_srconf_sbmmode').val() - 0;// 文字列ではなく数値で

						// Nbest:
						param.Nbest = jQuery('#_srconf_nbest').val() - 0;// 文字列ではなく数値で

						// mic_recorder_port:
						if (! SpeechRec.is_chrome()) {
							param.mic_recorder_port = jQuery('#_srconf_micport').val() - 0;// 文字列ではなく数値で
						}

						if (before_config_cb instanceof Function) {
							before_config_cb(param);
						}
						SpeechRec.config(param);// 設定を実施

						$(this).dialog('close');
					},
				},
				close: function(){
					$(this).dialog('close');
				}
			});
			$('#_srconf_dialog').dialog('open');
		};

		SpeechRec.preference_view._insertPreferenceDomElements();
		SpeechRec.preference_view._insertPreferenceStyleSheets();
	}
});
