// スクロール用矢印アイコンの表示
var showArrowButton = {
	prizeDetail:     true,			// 賞品詳細
	prizeList:       true,			// 賞品一覧
	nomerikomi:      true,			// のめり込み診断
	favorite:        true,			// お気に入り一覧
	exchangeHistory: true,			// 交換履歴
	memberProfile:   false,			// 初回登録
};

$(function() {

	alert('a1');
	// 文字入力の際にソフトウェアキーボードを表示する
	initKeyboard();
	

});

/**
 * 文字入力の際にソフトウェアキーボードを表示する
 */
function initKeyboard() {
	var showKeyboard = false;
	// キーボード表示
	$(document).on('click', 'input[type="text"]', function() {
	alert('a2');
		showScreenKeyboard(0);
		alert('a3');
		showKeyboard = true;
	});
	// input以外をタップしたときにキーボードを隠す
	$(document).click(function(e) {
		if(showKeyboard && !$(e.target).closest('input').length ){
			hideScreenKeyboard();
			showKeyboard = false;
		}
	});
}



