/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	
	tinymce.PluginManager.add('tts', function(editor) {

		//may not be needed in TinyMCE 4, this was a 3 work-around...
		//function ttsCleanup() {
			//tinyMCE.execCommand("mceCleanup");
			//tinyMCE.execCommand("mceCleanup");
			//tinyMCE.execCommand("mceCleanup");
			//tinyMCE.execCommand("mceCleanup");
		//}

		function clearRateFormatting() {
			//!!! redundant! - move to object or array or figure out another way? tinymce.activeEditor.formatter.remove('rate') no work
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: +1.0', rateClass: 'rcRatePlus100'});
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: +0.75', rateClass: 'rcRatePlus75'});
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: +0.50', rateClass: 'rcRatePlus50'});
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: +0.25', rateClass: 'rcRatePlus25'});
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: -0.25', rateClass: 'rcRateMinus25'});
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: -0.50', rateClass: 'rcRateMinus50'});
			tinymce.activeEditor.formatter.remove('rate', {rateTitle: 'Rate: -0.75', rateClass: 'rcRateMinus75'});
		}

		function clearPitchFormatting() {
			//!!! redundant!
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: +100%', pitchClass: 'rcPitchPlus100'});
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: +75%', pitchClass: 'rcPitchPlus75'});
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: +50%', pitchClass: 'rcPitchPlus50'});
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: +25%', pitchClass: 'rcPitchPlus25'});
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: -25%', pitchClass: 'rcPitchMinus25'});
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: -50%', pitchClass: 'rcPitchMinus50'});
			tinymce.activeEditor.formatter.remove('pitch', {pitchTitle: 'Pitch: -75%', pitchClass: 'rcPitchMinus75'});
		}

		function clearVolumeFormatting() {
			//!!! redundant!
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: +50%', volumeClass: 'rcVolumePlus50'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: +40%', volumeClass: 'rcVolumePlus40'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: +30%', volumeClass: 'rcVolumePlus30'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: +20%', volumeClass: 'rcVolumePlus20'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: +10%', volumeClass: 'rcVolumePlus10'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: -10%', volumeClass: 'rcVolumeMinus10'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: -20%', volumeClass: 'rcVolumeMinus20'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: -30%', volumeClass: 'rcVolumeMinus30'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: -40%', volumeClass: 'rcVolumeMinus40'});
			tinymce.activeEditor.formatter.remove('volume', {volumeTitle: 'Volume: -50%', volumeClass: 'rcVolumeMinus50'});
		}

		function clearEmphasisFormatting() {
			tinymce.activeEditor.formatter.remove('emphasis', {emphasisTitle: 'Emphasis: Strong', emphasisClass: 'rcEmphasisStrong'});
			tinymce.activeEditor.formatter.remove('emphasis', {emphasisTitle: 'Emphasis: Moderate', emphasisClass: 'rcEmphasisModerate'});
		}

		//test: Is this still needed in TinyMCE4?
		/*
		editor.on('keyup', function(e) {
			if(e.keyCode == 8) {
				ttsCleanup();
			}
		});
		*/

		editor.on('init', function(args) {
			tinymce.activeEditor.formatter.register('voice', {
				inline: 'div', 
				attributes: {
					title: "%voiceTitle"
				}, 
				classes: '%voiceClass', 
				merge_siblings: false
			});

			tinymce.activeEditor.formatter.register('rate', {
				inline: 'div', 
				attributes: {
					title: "%rateTitle"
				}, 
				classes: '%rateClass',
				merge_siblings: false
			});

			tinymce.activeEditor.formatter.register('pitch', {
				inline: 'div', 
				attributes: {
					title: "%pitchTitle"
				}, 
				classes: '%pitchClass', 
				merge_siblings: false
			});

			tinymce.activeEditor.formatter.register('volume', {
				inline: 'div', 
				attributes: {
					title: "%volumeTitle"
				}, 
				classes: '%volumeClass', 
				merge_siblings: false
			});

			tinymce.activeEditor.formatter.register('emphasis', {
				inline: 'div', 
				attributes: {
					title: "%emphasisTitle"
				}, 
				classes: '%emphasisClass', 
				merge_siblings: false
			});
		});

		editor.addButton('voice', {
			type: 'menubutton',
			icon: false,
			title: 'Voice',
			onclick: function() {
				
			},
			menu: [ //really need to open this up so that it can be defined in TinyMCE settings, with this as default?
				{
					text: 'Male',
					onclick: function() {
						//!!!Do something!
					}
				},
				{
					text: 'Female',
					onclick: function() {
						//!!!Do something!
					}
				},
				{
					text: 'Robot',
					onclick: function() {
						//!!!Do something!
					}
				},
				{
					text: 'How to set plugin options in general init settings?',
					onclick: function() {
						
					}
				}
			]
		});

		editor.addButton('rate', {
			type: 'menubutton',
			icon: false,
			title: 'Rate',
			onclick: function() {
				
			},
			menu: [
				{
					text: '+100%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: +1.0', rateClass: 'rcRatePlus100'});
					}
				},
				{
					text: '+75%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: +0.75', rateClass: 'rcRatePlus75'});
					}
				},
				{
					text: '+50%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: +0.50', rateClass: 'rcRatePlus50'});
					}
				},
				{
					text: '+25%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: +0.25', rateClass: 'rcRatePlus25'});
					}
				},
				{
					text: 'normal/default speed',
					onclick: function() {
						clearRateFormatting();
					}
				},
				{
					text: '-25%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: -0.25', rateClass: 'rcRateMinus25'});
					}
				},
				{
					text: '-50%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: -0.50', rateClass: 'rcRateMinus50'});
					}
				},
				{
					text: '-75%',
					onclick: function() {
						clearRateFormatting();
						tinymce.activeEditor.formatter.apply('rate', {rateTitle: 'Rate: -0.75', rateClass: 'rcRateMinus75'});
					}
				}
			]
		});

		editor.addButton('pitch', {
			type: 'menubutton',
			title: 'Pitch',
			icon: false,
			onclick: function() {
				
			},
			menu: [
				{
					text: '+100%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +100%', pitchClass: 'rcPitchPlus100'});
					}
				},
				{
					text: '+75%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +75%', pitchClass: 'rcPitchPlus75'});
					}
				},
				{
					text: '+50%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +50%', pitchClass: 'rcPitchPlus50'});
					}
				},
				{
					text: '+25%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +25%', pitchClass: 'rcPitchPlus25'});
					}
				},
				{
					text: 'normal/default pitch',
					onclick: function() {
						clearPitchFormatting();
					}
				},
				{
					text: '-25%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +100%', pitchClass: 'rcPitchMinus25'});
					}
				},
				{
					text: '+50%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +100%', pitchClass: 'rcPitchMinus50'});
					}
				},
				{
					text: '-75%',
					onclick: function() {
						clearPitchFormatting();
						tinymce.activeEditor.formatter.apply('pitch', {pitchTitle: 'Pitch: +100%', pitchClass: 'rcPitchMinus75'});
					}
				}
			]
		});

		editor.addButton('volume', {
			type: 'menubutton',
			title: 'Volume',
			image: '/js/tts/img/btnVolume.png',
			icon: false,
			onclick: function() {
				
			},
			menu: [
				{
					text: '+50% (note: likely to clip)',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: +50%', volumeClass: 'rcVolumePlus50'});
					}
				},
				{
					text: '+40% (note: likely to clip)',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: +40%', volumeClass: 'rcVolumePlus40'});
					}
				},
				{
					text: '+30% (note: likely to clip)',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: +30%', volumeClass: 'rcVolumePlus30'});
					}
				},
				{
					text: '+20% (note: likely to clip)',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: +20%', volumeClass: 'rcVolumePlus20'});
					}
				},
				{
					text: '+10% (note: likely to clip)',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: +10%', volumeClass: 'rcVolumePlus10'});
					}
				},
				{
					text: 'normal/default volume',
					onclick: function() {
						clearVolumeFormatting();
					}
				},
				{
					text: '-10%',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: -10', volumeClass: 'rcVolumeMinus10'});
					}
				},
				{
					text: '-20%',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: -20%', volumeClass: 'rcVolumeMinus20'});
					}
				},
				{
					text: '-30%',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: -30%', volumeClass: 'rcVolumeMinus30'});
					}
				},
				{
					text: '-40%',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: -40%', volumeClass: 'rcVolumeMinus40'});
					}
				},
				{
					text: '-50%',
					onclick: function() {
						clearVolumeFormatting();
						tinymce.activeEditor.formatter.apply('volume', {volumeTitle: 'Volume: -50%', volumeClass: 'rcVolumeMinus50'});
					}
				}
			]
		});

		editor.addButton('emphasis', {
			type: 'menubutton',
			title: 'Emphasis',
			icon: false,
			onclick: function() {
				
			},
			menu: [
				{
					text: 'Strong',
					onclick: function() {
						clearEmphasisFormatting();
						tinymce.activeEditor.formatter.apply('emphasis', {emphasisTitle: 'Emphasis: Strong', emphasisClass: 'rcEmphasisStrong'});
					}
				},
				{
					text: 'Moderate',
					onclick: function() {
						clearEmphasisFormatting();
						tinymce.activeEditor.formatter.apply('emphasis', {emphasisTitle: 'Emphasis: Moderate', emphasisClass: 'rcEmphasisModerate'});
					}
				},
				{
					text: 'None',
					onclick: function() {
						clearEmphasisFormatting();
					}
				}
			]
		});

		editor.addButton('pause', {
			type: 'menubutton',
			title: 'Pause',
			icon: false,
			onclick: function() {
				
			},
			menu: [
				{
					text: 'Strong',
					onclick: function() {
						editor.execCommand('mceInsertContent', false, tinyMCE.activeEditor.dom.createHTML('img', {
							'src' : '/js/tts/img/iconPause.png',
							'alt' : 'strong',
							'class' : 'pause',
							'title' : 'pause: strong',
							'border' : 0
						}));
					}
				},
				{
					text: 'Medium',
					onclick: function() {
						tinyMCE.execCommand('mceInsertContent', false, tinyMCE.activeEditor.dom.createHTML('img', {
							'src' : '/js/tts/img/iconPause.png',
							'alt' : 'medium',
							'class' : 'pause',
							'title' : 'pause: medium',
							'border' : 0
						}));
					}
				},
				{
					text: 'Weak',
					onclick: function() {
						tinyMCE.execCommand('mceInsertContent', false, tinyMCE.activeEditor.dom.createHTML('img', {
							'src' : '/js/tts/img/iconPause.png',
							'alt' : 'weak',
							'class' : 'pause',
							'title' : 'pause: weak',
							'border' : 0
						}));
					}
				}
			]
		});

	});



	//tinymce.create('tinymce.plugins.TTS', {
		

		/*
		init : function(ed, url) {
			
			this.url = url;
			
			ed.onKeyUp.add(function(ed, e) {
				//console.debug('Key up event: ' + e.keyCode);
				if(e.keyCode == 8) {
					//for embedded elements, I'm sure there's a more elegant way to do this...
					tinyMCE.execCommand("mceCleanup");
					tinyMCE.execCommand("mceCleanup");
					tinyMCE.execCommand("mceCleanup");
					tinyMCE.execCommand("mceCleanup");
				}
			});
			
			
			ed.addCommand('getSSML', function() {
				var content = tinymce.activeEditor.getContent();
				
				function rep(re, str) {
					content = content.replace(re, str);
				};
				
				rep(/<br.*?\/>/gi, " ");
				rep(/<span [^>]*title="rate: ([^">]+)">(.*?)<\/span>/gi, '<prosody rate="$1">$2</prosody>');
				rep(/<span [^>]*title="pitch: ([^">]+)">(.*?)<\/span>/gi, '<prosody pitch="$1">$2</prosody>');
				rep(/<span [^>]*title="volume: ([^">]+)">(.*?)<\/span>/gi, '<prosody volume="$1">$2</prosody>');
				rep(/<span [^>]*title="emphasis: ([^">]+)">(.*?)<\/span>/gi, '<emphasis level="$1">$2</emphasis>');
				rep(/<img.*?alt=\"(.*?)\".*?\/>/gi, '<break strength="$1" /> ');
			
				return content;
			});
			
			

		},
		createControl : function(n, cm) {
			var c;
			
			switch (n) {
				case 'rate':
					c = cm.createMenuButton('rate', {
						title : 'Rate',
						image : tinyMCE.baseURL + '/plugins/tts/img/btnRate.png',
						icons : false
					});
	
					c.onRenderMenu.add(function(c, m) {
						var i, fMatches;
						var fRef = Array('rcRatePlus100','rcRatePlus75','rcRatePlus50','rcRatePlus25','rcRateMinus25','rcRateMinus50','rcRateMinus75');
						function removeRateFormatters() {
							fMatches = tinyMCE.activeEditor.formatter.matchAll(fRef);
							for(i=0; i<fMatches.length; i++) {
								tinyMCE.activeEditor.formatter.remove(fMatches[i]);
							}
						}
						
						tinymce.activeEditor.formatter.register('rcRatePlus100', {inline : 'span', attributes : {title : "rate: +1.0"}, classes : 'rcRatePlus100', exact: true});
						tinymce.activeEditor.formatter.register('rcRatePlus75', {inline : 'span', attributes : {title : "rate: +0.75"}, classes : 'rcRatePlus75', exact: true});
						tinymce.activeEditor.formatter.register('rcRatePlus50', {inline : 'span', attributes : {title : "rate: +0.50"}, classes : 'rcRatePlus50', exact: true});
						tinymce.activeEditor.formatter.register('rcRatePlus25', {inline : 'span', attributes : {title : "rate: +0.25"}, classes : 'rcRatePlus25', exact: true});
						tinymce.activeEditor.formatter.register('rcRateMinus25', {inline : 'span', attributes : {title : "rate: -0.25"}, classes : 'rcRateMinus25', exact: true});
						tinymce.activeEditor.formatter.register('rcRateMinus50', {inline : 'span', attributes : {title : "rate: -0.50"}, classes : 'rcRateMinus50', exact: true});
						tinymce.activeEditor.formatter.register('rcRateMinus75', {inline : 'span', attributes : {title : "rate: -0.75"}, classes : 'rcRateMinus75', exact: true});
	
						m.add({title : '+100%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRatePlus100');
						}});
	
						m.add({title : '+75%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRatePlus75');
						}});
						
						m.add({title : '+50%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRatePlus50');
						}});
						
						m.add({title : '+25%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRatePlus25');
						}});
						
						m.add({title : 'normal/default speed', onclick : function() {
							removeRateFormatters();
						}});
						
						m.add({title : '-25%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRateMinus25');
						}});
						
						m.add({title : '-50%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRateMinus50');
						}});
						
						m.add({title : '-75%', onclick : function() {
							removeRateFormatters();
							tinyMCE.activeEditor.formatter.apply('rcRateMinus75');
						}});
					
					});
					
					// Return the new menu button instance
					return c;
				case 'pitch':
					c = cm.createMenuButton('pitch', {
						title : 'Pitch',
						image : tinyMCE.baseURL + '/plugins/tts/img/btnPitch.png',
						icons : false
					});
	
					c.onRenderMenu.add(function(c, m) {
						var i, fMatches;
						var fRef = Array('rcPitchPlus100','rcPitchPlus75','rcPitchPlus50','rcPitchPlus25','rcPitchMinus25','rcPitchMinus50','rcPitchMinus75','rcPitchMinus100');
						function removePitchFormatters() {
							fMatches = tinyMCE.activeEditor.formatter.matchAll(fRef);
							for(i=0; i<fMatches.length; i++) {
								tinyMCE.activeEditor.formatter.remove(fMatches[i]);
							}
						}
						
						tinymce.activeEditor.formatter.register('rcPitchPlus100', {inline : 'span', attributes : {title : "pitch: +100%"}, classes : 'rcPitchPlus100', exact: true});
						tinymce.activeEditor.formatter.register('rcPitchPlus75', {inline : 'span', attributes : {title : "pitch: +75%"}, classes : 'rcPitchPlus75', exact: true});
						tinymce.activeEditor.formatter.register('rcPitchPlus50', {inline : 'span', attributes : {title : "pitch: +50%"}, classes : 'rcPitchPlus50', exact: true});
						tinymce.activeEditor.formatter.register('rcPitchPlus25', {inline : 'span', attributes : {title : "pitch: +25%"}, classes : 'rcPitchPlus25', exact: true});
						tinymce.activeEditor.formatter.register('rcPitchMinus25', {inline : 'span', attributes : {title : "pitch: -25%"}, classes : 'rcPitchMinus25', exact: true});
						tinymce.activeEditor.formatter.register('rcPitchMinus50', {inline : 'span', attributes : {title : "pitch: -50%"}, classes : 'rcPitchMinus50', exact: true});
						tinymce.activeEditor.formatter.register('rcPitchMinus75', {inline : 'span', attributes : {title : "pitch: -75%"}, classes : 'rcPitchMinus75', exact: true});
	
						m.add({title : '+100%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchPlus100');
						}});
	
						m.add({title : '+75%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchPlus75');
						}});
						
						m.add({title : '+50%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchPlus50');
						}});
						
						m.add({title : '+25%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchPlus25');
						}});
						
						m.add({title : 'normal/default pitch', onclick : function() {
							removePitchFormatters();
						}});
						
						m.add({title : '-25%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchMinus25');
						}});
						
						m.add({title : '-50%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchMinus50');
						}});
						
						m.add({title : '-75%', onclick : function() {
							removePitchFormatters();
							tinyMCE.activeEditor.formatter.apply('rcPitchMinus75');
						}});
					});
	
					// Return the new menu button instance
					return c;
				case 'volume':
					c = cm.createMenuButton('volume', {
						title : 'Volume',
						image : tinyMCE.baseURL + '/plugins/tts/img/btnVolume.png',
						icons : false
					});
	
					c.onRenderMenu.add(function(c, m) {
						var i, fMatches;
						var fRef = Array('rcVolumePlus50','rcVolumePlus40','rcVolumePlus30','rcVolumePlus20','rcVolumePlus10','rcVolumeMinus10','rcVolumeMinus20','rcVolumeMinus30','rcVolumeMinus40','rcVolumeMinus50');
						function removeVolumeFormatters() {
							fMatches = tinyMCE.activeEditor.formatter.matchAll(fRef);
							for(i=0; i<fMatches.length; i++) {
								tinyMCE.activeEditor.formatter.remove(fMatches[i]);
							}
						}
						
						tinymce.activeEditor.formatter.register('rcVolumePlus50', {inline : 'span', attributes : {title : "volume: +50%"}, classes : 'rcVolumePlus50', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumePlus40', {inline : 'span', attributes : {title : "volume: +40%"}, classes : 'rcVolumePlus40', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumePlus30', {inline : 'span', attributes : {title : "volume: +30%"}, classes : 'rcVolumePlus30', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumePlus20', {inline : 'span', attributes : {title : "volume: +20%"}, classes : 'rcVolumePlus20', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumePlus10', {inline : 'span', attributes : {title : "volume: +10%"}, classes : 'rcVolumePlus10', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumeMinus10', {inline : 'span', attributes : {title : "volume: -10%"}, classes : 'rcVolumeMinus10', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumeMinus20', {inline : 'span', attributes : {title : "volume: -20%"}, classes : 'rcVolumeMinus20', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumeMinus30', {inline : 'span', attributes : {title : "volume: -30%"}, classes : 'rcVolumeMinus30', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumeMinus40', {inline : 'span', attributes : {title : "volume: -40%"}, classes : 'rcVolumeMinus40', exact: true});
						tinymce.activeEditor.formatter.register('rcVolumeMinus50', {inline : 'span', attributes : {title : "volume: -50%"}, classes : 'rcVolumeMinus50', exact: true});
	
						m.add({title : '+50% (note: likely to clip)', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumePlus50');
						}});
	
						m.add({title : '+40% (note: likely to clip)', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumePlus40');
						}});
						
						m.add({title : '+30% (note: likely to clip)', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumePlus30');
						}});
						
						m.add({title : '+20% (note: likely to clip)', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumePlus20');
						}});
						
						m.add({title : '+10% (note: likely to clip)', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumePlus10');
						}});
						
						m.add({title : 'normal/default volume', onclick : function() {
							removeVolumeFormatters();
						}});
						
						m.add({title : '-10%', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumeMinus10');
						}});
						
						m.add({title : '-20%', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumeMinus20');
						}});
						
						m.add({title : '-30%', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumeMinus30');
						}});
						
						m.add({title : '-40%', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumeMinus40');
						}});
						
						m.add({title : '-50%', onclick : function() {
							removeVolumeFormatters();
							tinyMCE.activeEditor.formatter.apply('rcVolumeMinus50');
						}});
					});
	
					// Return the new menu button instance
					return c;
				case 'emphasis':
					c = cm.createMenuButton('emphasis', {
						title : 'Emphasis',
						image : tinyMCE.baseURL + '/plugins/tts/img/btnEmphasis.png',
						icons : false
					});
	
					c.onRenderMenu.add(function(c, m) {
						var i, fMatches;
						var fRef = Array('rcEmphasisModerate','rcEmphasisStrong');
						function removeEmphasisFormatters() {
							fMatches = tinyMCE.activeEditor.formatter.matchAll(fRef);
							for(i=0; i<fMatches.length; i++) {
								tinyMCE.activeEditor.formatter.remove(fMatches[i]);
							}
						}
						
						tinymce.activeEditor.formatter.register('rcEmphasisStrong', {inline : 'span', attributes : {title : "emphasis: strong"}, classes : 'rcEmphasisStrong', exact: true});
						tinymce.activeEditor.formatter.register('rcEmphasisModerate', {inline : 'span', attributes : {title : "emphasis: moderate"}, classes : 'rcEmphasisModerate', exact: true});
	
						m.add({title : 'strong', onclick : function() {
							removeEmphasisFormatters();
							tinyMCE.activeEditor.formatter.apply('rcEmphasisStrong');
						}});
						
						m.add({title : 'moderate', onclick : function() {
							removeEmphasisFormatters();
							tinyMCE.activeEditor.formatter.apply('rcEmphasisModerate');
						}});
						
						m.add({title : 'none', onclick : function() {
							removeEmphasisFormatters();
						}});
					});
	
					// Return the new menu button instance
					return c;
				case 'pause':
					c = cm.createMenuButton('pause', {
						title : 'Pause',
						image : tinyMCE.baseURL + '/plugins/tts/img/btnPause.png',
						icons : false
					});
	
					c.onRenderMenu.add(function(c, m) {
	
						m.add({title : 'strong', onclick : function() {
							tinyMCE.execCommand('mceInsertContent', false, tinyMCE.activeEditor.dom.createHTML('img', {
								'src' : tinyMCE.baseURL + '/plugins/tts/img/iconPause.png',
								'alt' : 'strong',
								'class' : 'pause',
								'title' : 'pause: strong',
								'border' : 0
							}));
						}});
						
						m.add({title : 'medium', onclick : function() {
							tinyMCE.execCommand('mceInsertContent', false, tinyMCE.activeEditor.dom.createHTML('img', {
								'src' : tinyMCE.baseURL + '/plugins/tts/img/iconPause.png',
								'alt' : 'medium',
								'class' : 'pause',
								'title' : 'pause: medium',
								'border' : 0
							}));
						}});
						
						m.add({title : 'weak', onclick : function() {
							tinyMCE.execCommand('mceInsertContent', false, tinyMCE.activeEditor.dom.createHTML('img', {
								'src' : tinyMCE.baseURL + '/plugins/tts/img/iconPause.png',
								'alt' : 'weak',
								'class' : 'pause',
								'title' : 'pause: weak',
								'border' : 0
							}));
						}});
					});
	
					// Return the new menu button instance
					return c;
				case 'phonetic':
					c = cm.createMenuButton('phonetic', {
						title : 'Phonetic Spelling',
						image : tinyMCE.baseURL + '/plugins/tts/img/btnPhonetic.png',
						icons : false,
						onclick : function() {
							tinyMCE.activeEditor.selection.setContent('[I need to look at creating a popup window for this one.]');
						}
					});
	
					// Return the new menu button instance
					return c;
			}
	
			return null;
		},
		getInfo : function() {
			return {
				longname : 'Text-To-Speech (TTS) Text Editor',
				author : 'Christopher Stevens',
				authorurl : 'http://www.christopherstevens.cc',
				infourl : 'http://www.christopherstevens.cc/blog/2011/03/07/tts-tinymce/',
				version : "0.5"
			};
		}
		*/
	//});


	// Register plugin
	//tinymce.PluginManager.add('tts', tinymce.plugins.TTS);
})();