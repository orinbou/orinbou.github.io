// ブラウザ判定
function getBrowser(){
    var ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var name = 'unknown';

    if (ua.indexOf("iphone") != -1) {
        name = 'iphone';
    } else if(ua.indexOf('ipad') != -1) {
        name = 'ipad';
    } else if(ua.indexOf('android') != -1) {
        name = 'android';
    } else if (ua.indexOf("msie") != -1) {
        if (ver.indexOf("msie 6.") != -1) {
            name = 'ie6';
        } else if (ver.indexOf("msie 7.") != -1) {
            name = 'ie7';
        } else if (ver.indexOf("msie 8.") != -1) {
            name = 'ie8';
        } else if (ver.indexOf("msie 9.") != -1) {
            name = 'ie9';
        } else if (ver.indexOf("msie 10.") != -1) {
            name = 'ie10';
        } else {
            name = 'ie';
        }
    } else if(ua.indexOf('trident/7') != -1) {
        name = 'ie11';
    } else if (ua.indexOf('chrome') != -1) {
        name = 'chrome';
    } else if (ua.indexOf('safari') != -1) {
        name = 'safari';
    } else if (ua.indexOf('opera') != -1) {
        name = 'opera';
    } else if (ua.indexOf('firefox') != -1) {
        name = 'firefox';
    }
    return name;
}

// カードタグID取得
function readTagID() {
    var tagId = '';
    var browser = getBrowser();
    // パーソナルビューア向け
    if (browser == 'android') {
        if (android_nfc && android_nfc.readTagID) {
            tagId = android_nfc.readTagID();
        }
    // スペシャルビューア向け
    } else if (browser.indexOf('ie') != -1) {
        if (window.external && window.external.readTagID) {
            tagId = window.external.readTagID();
        }
    }
    return tagId;
}

// カードタグID取得
function getTagID() {
    var tagId = '';
    var browser = getBrowser();
    // パーソナルビューア向け
    if (browser == 'android') {
        if (android_nfc && android_nfc.getTagID) {
            tagId = android_nfc.getTagID();
        }
    // スペシャルビューア向け
    } else if (browser.indexOf('ie') != -1) {
        if (window.external && window.external.getTagID) {
            tagId = window.external.getTagID();
        }
    }
    return tagId;
}

// カードタグIDクリア
function clearTagID() {
    var browser = getBrowser();
    // パーソナルビューア向け
    if (browser == 'android') {
        if (android_nfc && android_nfc.clearTagID) {
            android_nfc.clearTagID();
        }
    // スペシャルビューア向け
    } else if (browser.indexOf('ie') != -1) {
        if (window.external && window.external.clearTagID) {
            window.external.clearTagID();
        }
    }
}

// 店舗ID取得
function getHallID() {
    var hallId = '';
    var browser = getBrowser();
    // パーソナルビューア向け
    if (browser == 'android') {
        if (android_nfc && android_nfc.getHallID) {
            hallId = android_nfc.getHallID();
        }
    // スペシャルビューア向け
    } else if (browser.indexOf('ie') != -1) {
        if (window.external && window.external.getHallID) {
            hallId = window.external.getHallID();
        }
    }
    return hallId;
}

// 端末ID取得
function getDeviceID() {
    var deviceId = '';
    var browser = getBrowser();
    // パーソナルビューア向け
    if (browser == 'android') {
        if (android_nfc && android_nfc.getDeviceID) {
            deviceId = android_nfc.getDeviceID();
        }
    // スペシャルビューア向け
    } else if (browser.indexOf('ie') != -1) {
        if (window.external && window.external.getDeviceID) {
            deviceId = window.external.getDeviceID();
        }
    }
    return deviceId;
}

// スクリーンキーボード表示
function showScreenKeyboard(displayTabIdx) {
alert('c1');
    var browser = getBrowser();
    // スペシャルビューア向け
 
        alert('c2');
            window.external.notify("showScreenKeyboard");
            alert('c3');

   
}

// スクリーンキーボード非表示
function hideScreenKeyboard() {
    var browser = getBrowser();
    // スペシャルビューア向け
    if (browser.indexOf('ie') != -1) {
        if (window.external && window.external.hideScreenKeyboard) {
            
             window.external.notify("hideScreenKeyboard");
        }
    }
}

// カードリーダー読取りモード切り替え
function switchReaderMode (modeId) {
	var browser = getBrowser();
	
	if (browser.indexOf('ie') != -1) {
		if (window.external && typeof(window.external.switchReaderMode) !== 'undefined') {
			window.external.switchReaderMode(modeId);
		}
	}
}



