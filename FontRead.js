function jsonOutput() {
    // XMLHttpRequestインスタンスを作成
    let request = new XMLHttpRequest();

    // JSONファイルが置いてあるパスを記述
    request.open('GET', 'FontData.json');
    request.send();

    // JSON読み込み時の処理
    request.onreadystatechange = () => {
        // 全てのデータを受信・正常に処理された場合
        if (request.readyState == 4 && request.status == 200) {
            // JSONデータを変換
            let json = JSON.parse(request.responseText);
            console.log(json);

            // 生成したHTMLを入れておく変数
            let html = '';
            // 生成したモーダル用のHTMLを入れておく変数
            let modal = '';
            // Font種類を保存する変数
            let weightFont = '';

            // JSONにあるオブジェクト数の分だけfor文で処理
            for (let i = 0; i < json.length; i++) {
                // Font種類
                for (let j = 0; j < json[i].weight.length; j++) {
                    switch (json[i].weight[j]) {
                        case 1:
                            weightFont += '<div class="weight1">Thin 100</div>';
                            break;
                        case 2:
                            weightFont += '<div class="weight2">Extra Light 200</div>';
                            break;
                        case 3:
                            weightFont += '<div class="weight3">Light 300</div>';
                            break;
                        case 4:
                            weightFont += '<div class="weight4">Regular 400</div>';
                            break;
                        case 5:
                            weightFont += '<div class="weight5">Medium 500</div>';
                            break;
                        case 6:
                            weightFont += '<div class="weight6">Semi Bold 600</div>';
                            break;
                        case 7:
                            weightFont += '<div class="weight7">Bold 700</div>';
                            break;
                        case 8:
                            weightFont += '<div class="weight8">Extra-bold 800</div>';
                            break;
                        case 9:
                            weightFont += '<div class="weight9">Black 900</div>';
                            break;
                    }
                }
                let htmlParts =
                    '<div class="col">' +
                        '<div class="card h-100 ' + json[i].css + ' ">' +
                            '<div class="card-header">' +
                                json[i].name +
                            '</div>' +
                            '<div class="card-body">' +
                                '<h2 class="card-title">' +
                                    json[i].type +
                                '</h2>' +
                                '<p class="card-text">' +
                                    'sample：彼らの機器や装置はすべて生命体だ。' +
                                '</p>' +
                                '<p class="card-text">' + // 日本語説明文
                                    json[i].description_JP +
                                '</p>' +
                                '<p class="card-text">' + // 英語説明文
                                    json[i].description +
                                '</p>' +
                                '<h3 class="card-text">' +
                                    weightFont +
                                '</h3>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                // 先述の変数の中に、出来上がったHTMLを格納
                html += htmlParts;
                weightFont = '';
            }
            // 変数に格納したHTMLを出力
            document.getElementById('font-data').innerHTML = html;
        }
    };
}
jsonOutput();