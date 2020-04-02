// 第2章: UNIXコマンドの基礎
// hightemp.txtは，日本の最高気温の記録を「都道府県」「地点」「℃」「日」の
// タブ区切り形式で格納したファイルである．
// 以下の処理を行うプログラムを作成し，hightemp.txtを入力ファイルとして実行せよ．
// さらに，同様の処理をUNIXコマンドでも実行し，プログラムの実行結果を確認せよ．

// 10. 行数のカウント
// 行数をカウントせよ．確認にはwcコマンドを用いよ．

const pattern = /\n/;

// catchHightemp()
// .then(hightemp => {
//     document.getElementById('hightemp').innerText = hightemp;
//     console.log('interesting');
// })

catchHightemp()
    .then(response => {
        let counter = 0;
        const res = response;
        const r = res.split(/\n/);
        console.log(r);
        r.forEach(item => counter++);
        console.log(counter);
    });



async function catchHightemp() {
    const response = await fetch('hightemp.txt');
    const blob = await response.blob();
    return await blob.text();
    
}


