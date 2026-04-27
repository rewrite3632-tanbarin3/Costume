document.addEventListener('DOMContentLoaded', function() {
    // クラス名 "luminous" がついたリンクをすべて取得して初期化
    const luminousElements = document.querySelectorAll('.luminous');
    
    if (luminousElements.length > 0) {
        luminousElements.forEach(el => {
            new Luminous(el, {
                caption: (trigger) => trigger.querySelector('img').getAttribute('alt'), // 画像のaltをキャプションにする
                closeOnScroll: true // スクロールで閉じる設定（スタイリッシュな挙動）
            });
        });
    }
});