# freoをあれこれカスタマイズ（管理画面版）

### 各リリースバージョンの説明
- [main：フルバージョン](https://github.com/cccabinet/freo_customize/tree/main)<br>モバイル用テンプレートを除く全ファイルを収納
- [diff：差替版](https://github.com/cccabinet/freo_customize/tree/diff)<br>変更のあったファイルのみを収納
- **admin：管理画面版**（←現在のバージョン）<br>管理用関連ファイルのみを収納
- [responsive：レスポンシブ版](https://github.com/cccabinet/freo_customize/tree/responsive)<br>バグ修正、JSプラグインの更新、レスポンシブに対応したモバイル用テンプレートを除く全ファイルを収納
- [responsive_diff：レスポンシブ差替版](https://github.com/cccabinet/freo_customize/tree/responsive_diff)<br>バグ修正やJSプラグインの更新、レスポンシブに対応をして変更のあったファイルのみを収納

## ファイル構成
<details>
<summary>構成の内容を開く</summary>
<pre><code>freo_customize/
├── freo/
│   ├── css/
│   │   ├── admin.css（管理画面用）
│   │   ├── common.css（HTML再定義用）
│   │   └── iframe.css（インラインフレーム用）
│   ├── images/
│   │   └── tablesorter/（tablesorter用のファイルを差替）
│   ├── js/
│   │   ├── tinymce/ (TinyMCE用のファイルを追加）
│   │   │   ├── langs/ja.js（日本語表記ファイル）
│   │   │   └── plugins/
│   │   │       ├── freomedia/（freoメディア管理プラグイン）
│   │   │       ├── freomediaform/（freoメディア登録プラグイン）
│   │   │       └── netabare/（ネタバレボタンプラグイン）
│   │   ├── admin.js（管理画面用）
│   │   ├── iframe.js（インラインフレーム用）
│   │   ├── jquery.hidearea.js（ネタバレボタン用を追加）
│   │   └── jQuery.jTagging.min.js（タグの候補をタグクラウド一覧で表示用を追加）
│   ├── libs/
│   │   ├── freo/
│   │   │   ├── internals/
│   │   │   │   ├── admin/
│   │   │   │   │   ├── entry_form.php（管理画面用エントリー入力ファイル）
│   │   │   │   │   ├── media.php（管理画面用メディア管理ファイル）
│   │   │   │   │   ├── media_delete.php（管理画面用メディア削除ファイル）
│   │   │   │   │   └── page_form.php（管理画面用ページ入力ファイル）
│   │   │   │   ├── comment/post.php（コメント登録用ファイル）
│   │   │   │   └── file/default.php（ファイル表示用ファイル）
│   │   │   ├── plugins/
│   │   │   │   ├── config.filemanager.php（ファイル管理プラグインの設定ファイルを追加）
│   │   │   │   ├── display.entry_calender.php（エントリーカレンダー表示プラグインの表示ファイル）
│   │   │   │   └── page.filemanager.php（ファイル管理プラグインのページファイルを追加）
│   │   │   ├── common.php（共通関数ファイル）
│   │   │   ├── initialize.php（初期化処理ファイル）
│   │   │   ├── pictogram.php（絵文字関数ファイル）
│   │   │   ├── transfer.php（セッションID自動付加関数ファイル）
│   │   │   └── version.php（バージョン情報ファイル）
│   │   └── smarty/
│   │       └── plugins/（Smarty用プラグインを追加）
│   └── templates/
│       ├── internals/admin/（管理用htmlテンプレート）
│       └── plugins/
│           ├── export/（エクスポートプラグインのテンプレート）
│           ├── filemanager/（ファイル管理プラグインのテンプレートを追加）
│           └── import/（インポートプラグインのテンプレート）
│
├── markItUp!/
│   ├── freo/
│   │   ├── js/
│   │   │   ├── admin.js（管理画面差替用）
│   │   │   └── iframe.js（インラインフレーム差替用）
│   │   ├── markitup/（markItUp!関連ファイルを差替・追加）
│   │   └── templates/internals/admin/
│   │       ├── entry_form.html（エントリー登録/編集の差替テンプレート）
│   │       ├── header.html（管理用ヘッダの差替テンプレート）
│   │       ├── information_form.html（インフォメーション登録/編集の差替テンプレート）
│   │       └── page_form.html（ページ登録/編集の差替テンプレート）
│   └── plugins/
│       └── clap/【拍手送信プラグイン】
│           └── templates/plugins/clap/admin_thank_form.html（お礼登録/編集の差替テンプレート）
│
├── plugins/
│   ├── bookmark/【ブックマーク登録プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── bookmark_tagcloud/【ブックマークタグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.bookmark_tagcloud.php（設定ファイル）※
│   ├── circle/【サークル管理プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── circle_tagcloud/【サークルタグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.circle_tagcloud.php（設定ファイル）※
│   ├── clap/【拍手送信プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── count/【カウンタプラグイン】
│   │   └── templates/
│   ├── entry_tagcloud/【エントリータグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.entry_tagcloud.php（設定ファイル）※
│   ├── entry_tagmanager/【エントリータグ管理プラグイン】
│   │   ├── libs/freo/plugins/
│   │   │   ├── config.entry_tagmanager.php（設定ファイル）
│   │   │   └── end.entry_tagmanager.php
│   │   └── templates/
│   ├── filter_confirm/【フィルター認証確認プラグイン】
│   │   └── templates/
│   ├── form/【フォーム管理プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── menu/【メニュー登録プラグイン】
│   │   └── templates/
│   ├── message/【メッセージ登録プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── page_calender/【ページカレンダー表示プラグイン】
│   │   └── libs/freo/plugins/display.page_calender.php（表示ファイル）
│   ├── page_pid_update/【ページ親ID一括変更プラグイン】
│   │   └── templates/
│   ├── page_tagcloud/【ページタグクラウド表示プラグイン】
│   │   └── libs/freo/plugins/config.page_tagcloud.php（設定ファイル）※
│   ├── page_tagmanager/【ページタグ管理プラグイン】
│   │   ├── libs/freo/plugins/
│   │   │   ├── config.page_tagmanager.php（設定ファイル）
│   │   │   └── end.page_tagmanager.php
│   │   └── templates/
│   ├── paint/【イラスト投稿プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── parts/【ブログパーツ管理プラグイン】
│   │   └── templates/
│   ├── popularity/【人気コンテンツプラグイン】
│   │   └── templates/
│   ├── profile/【プロフィール拡張プラグイン】
│   │   └── templates/（管理用テンプレートのみ）
│   ├── riddle/【なぞなぞ認証プラグイン】
│   │   └── templates/
│   └── task/【タスク登録プラグイン】
│       └── templates/
│
└── plugins_catalog/
    ├── catalog/【ショッピングカートプラグイン】
    │   ├── libs/freo/plugins/page.catalog.php（ページファイル）
    │   └── templates/
    │       └── plugins/catalog/（管理用テンプレートのみ）
    ├── catalog_order/【注文管理プラグイン】
    │   └── templates/
    │       └── plugins/catalog_order/（管理用テンプレート＋cancel_complete.html）
    └── catalog_tagcloud/【ショッピングカートタグクラウド表示プラグイン】
        └── libs/freo/plugins/config.catalog_tagcloud.php（設定ファイル）※
</code></pre>
</details>
※のファイルは、[登録/編集画面にタグの候補をタグクラウド一覧で表示する](https://cccabinet.jpn.org/view/69)ために使用

## フォルダの種類
- **freo**<br>freo（v1.21.0）本体のうち、`css/`、`images/`、`js/`、`libs/`、`templates/` の管理用関連ファイルに[ファイル管理プラグイン](https://freo.jp/plugin/filemanager.html)と[Smarty用プラグイン](https://freo.jp/plugin/smarty/index.html)を追加し、[プレビュー表示を訪問者向けの表示](https://freo.jp/document/customize/preview.html)のテンプレートに差替<br>※`freo/css/colorbox.css`、`freo/js/jquery.js`、`freo/js/jquery.colorbox.js`、`freo/js/jquery.tablesorter.js`、`freo/images/colorbox/`、`freo/tinymce/` は不要のため削除済みなので、差し替える場合は同ファイルを削除してもOK<br>:bulb:**freo本体を設置したものに上書きして差替えて下さい**
- **markItUp!**<br>[テキストエディタをTinyMCEからmarkItUp!に変更する](https://freo.jp/document/customize/markitup.html)場合のJSやテンプレートの差替ファイル<br>※同梱しているmarkItUp!本体は最新版にし、さらに[拡張版](https://cccabinet.jpn.org/view/102)（一部を除く）を導入済み<br>:bulb:**一旦freo本体の差替版を設置してから上書きして差替えて下さい**（`freo/js/tinymce/` は不要なので削除してもOK）
- **plugins**<br>[freoの公式サイトで配布されているプラグイン](https://freo.jp/plugin/)（ファイル管理プラグインとショッピングカート系プラグインを除く）の管理用テンプレートファイルなど<br>:bulb:**プラグイン本体を設置したものに上書きして差替えて下さい**
- **plugins_catalog**<br>[ショッピングカートプラグイン](https://freo.jp/plugin/catalog.html)と[注文管理プラグイン](https://freo.jp/plugin/catalog_order.html)の管理用テンプレートファイルなど<br>:bulb:ショッピングカートプラグインはシェアウェアなので、他のプラグインのテンプレートと分けています<br>:bulb:**プラグイン本体を設置したものに上書きして差替えて下さい**

## カスタマイズの内容
### バグの修正やファイルの追加
- GitHubの[freo本体のPRの修正](https://github.com/refirio/freo/pulls)、[freo公式プラグインのPRの修正](https://github.com/refirio/freo-plugins/pulls)も追加
- 追加のバグ修正
  - [カレンダーの祝日定義の変更・延長](https://cccabinet.jpn.org/view/104)<br>エントリーカレンダー表示プラグイン、[ページーカレンダー表示プラグイン](https://freo.jp/plugin/page_calender.html)の祝日定義は2020年までしかないので2050年までに延長<br>※ [【修正】freoをphp7以上でエラーが起こらないように修正](https://github.com/refirio/freo/pull/11)の修正も両プラグインに追加済み
    - 2016年以降、山の日の追加
    - 2019年の改元による休日の追加や天皇誕生日の変更
    - 2020年、2021年の東京五輪開催・延期に伴う祝日の移動
    - ※データ元：100年分の祝日リスト（2021年7月以降の変更に対応）<br>　https://zangyoukeisan.cocolog-nifty.com/blog/2011/09/post-b23f.html
  - 認証フォームのパスワード入力欄の修正<br>パスワード入力欄を `input type="text"` から `input type="password"` に修正
  - [ショッピングカートプラグイン](https://freo.jp/plugin/catalog.html)の商品配送方法・料金などの変更<br>※すでにプラグインを導入済みの場合は[sqlファイルをダウンロード](https://cccabinet.jpn.org/view/106)してインポートしてください
    - 普通郵便に定形外郵便（規格内・規格外それぞれ250gまで）を追加<br>※規格内とは、長辺34cm以内、短辺25cm以内、厚さ3cm以内および重量1kg以内のもの
    - 配送方法に日本郵便の[ゆうメール](https://www.post.japanpost.jp/service/yu_mail/)、[ゆうパケット](https://www.post.japanpost.jp/service/yu_packet/index.html)、[クリックポスト](https://www.post.japanpost.jp/service/clickpost/index.html)【未使用に設定済】、[スマートレター](https://www.post.japanpost.jp/service/smartletter/)【未使用に設定済】を追加（未使用のものは状態を「使用」に変更してから使用してください）<br>※クリックポストは事前に利用者情報の登録手続が必要
    - 配送方法にヤマト運輸の[ネコポス](https://business.kuronekoyamato.co.jp/service/lineup/nekoposu/)【未使用に設定済】と[宅急便コンパクト](https://business.kuronekoyamato.co.jp/service/lineup/takkyubin_compact/index.html)【未使用に設定済】を追加（料金などの設定を自分に合わせてから状態を「使用」に変更して使用してください）
    - ヤマト運輸のメール便（mail_10, mail_20）が、2015年3月で廃止されたので未使用に変更
    - 料金が2019年10月に値上げされたので変更
    - ゆうパック（60サイズ）とゆうパック（80サイズ）の地域別送料を2019年10月に消費税が10%になったのに伴い値上げされたので変更（それぞれ東京都から差し出した場合の基本料金）
    - 支払い方法に[宅急便コレクト](https://business.kuronekoyamato.co.jp/service/lineup/payment_daibiki/?gclid=CjwKCAiAvriMBhAuEiwA8Cs5lQnzAWhgtTZttg-Vi_6pzSILK34zo91YkfOGC9UjzVdJ9Z2nBuZNjhoCZEMQAvD_BwE)（ヤマト運輸の法人向け代金引換サービス）を追加
  - フッタのfreo.jpのリンクURLを http://freo.jp から https://freo.jp に変更
  - ファイル管理プラグインの管理対象除外ディレクトリの変更<br>TinyMCEの入っているフォルダがTinyMCE4で `tiny_mce` から `tinymce` に変更になったので変更
- [ファイル管理プラグイン](https://freo.jp/plugin/filemanager.html)を標準で導入
- freoの公式サイトで配布されている[Smarty用プラグイン](https://freo.jp/plugin/smarty/index.html)を標準で導入
- エントリー・ページ・インフォメーション登録時の[プレビュー表示を訪問者向けの表示](https://freo.jp/document/customize/preview.html)に差替
### JSライブラリの更新とCDN化
- jQuery、ColorBox、tablesorter（非公式フォーク版）、TinyMCE、markItUp!を最新版に更新<br>さらにjQuery、ColorBox、tablesorter、TinyMCEはCDNで読み込み設定済み（旧版のファイルは削除済み）
  - [ColorBoxのレスポンシブ設定](https://cccabinet.jpn.org/view/65)
  - [メディアの挿入ファイルを更新日時順に](https://cccabinet.jpn.org/view/96)
  - [freoにTinyMCE5を導入する](https://cccabinet.jpn.org/view/103)<br>カラーパレットも調整（基本の16カラー+オレンジ+文字色）
  - **TinyMCE6に対応**（v1.1.0）
  - [メディア管理/メディア登録をTinyMCEのプラグインにする](https://cccabinet.jpn.org/view/105)
  - [TinyMCEのモバイル表示に対応](https://cccabinet.jpn.org/view/101)
  - [markItUp!の設定を調整](https://cccabinet.jpn.org/view/102)<br>カラーパレットも調整（基本の16カラー+オレンジ+文字色）
### レスポンシブに対応
- 管理用画面がレスポンシブ表示に対応<br>ビューポート480px以下の場合は、管理メニュー画面は簡易的にボタンで開閉可能に
### 関連プラグインの設定など
- 各テンプレートファイルに関連プラグイン（Smarty用プラグインも含む）を導入したときに反映されるよう調整<br>※該当するプラグインが導入されていないときは表示されません（Smarty用プラグインを除く）
- 各画面のタイトルを設定<br>[タイトル設定プラグイン](https://freo.jp/plugin/title.html)でタイトルを追加している場合はそちらを優先して表示
- 管理画面のフッタにはfreoのバージョンが入るように変更
- 一部のテンプレートファイルにどの項目のコードが分かるようにコメントを追加
- 関連するページへ戻るリンク、登録/編集後の確認リンクなどを追加
### 公式サイトに記載されているカスタマイズによる機能追加
- [ネタバレボタンの実装](https://freo.jp/document/customize/hidearea.html)
  - [TinyMCE5用ネタバレ入力プラグインも導入](https://cccabinet.jpn.org/view/103#netabare)
  - [markItUp!の場合には設定を追加](https://cccabinet.jpn.org/view/102)
- [日時のセレクトボックス化と現在日時の一括入力](https://freo.jp/document/customize/datetime.html)
### freoカスタマイズ集に記載されているカスタマイズなど個人的に機能追加
- ページ送りの修正<br>`ページ 1 ... 3 4 5  ... 7` のように表示（該当ページが1ページ以下の場合はページ移動全体を非表示）<br>※参考：[カラーミーショップにページネーション（ページング）を実装する方法](https://magnets.jp/web_design/7661/)
- 投稿者ユーザーの権限を制限
  - [投稿者ユーザーがエクスポートやインポートプラグインにアクセスできないようする](https://cccabinet.jpn.org/view/88)
  - [投稿者ユーザーがログインしたとき他ユーザーの情報を表示させない](https://cccabinet.jpn.org/view/87)
  - [注文管理プラグイン画面で投稿者ユーザーの権限を制限](https://cccabinet.jpn.org/view/90)
- エントリーとページの管理画面情報の変更
  - [管理画面に閲覧制限情報を表示](https://cccabinet.jpn.org/view/78)
  - [管理画面の状態のカスタマイズ](https://cccabinet.jpn.org/view/64)
- [管理画面に未承認データの表示](https://cccabinet.jpn.org/view/77)
- [ユーザー管理を権限順に](https://cccabinet.jpn.org/view/76)
- エントリーとページなどの登録/編集画面に[タグの候補をタグクラウド一覧で表示](https://cccabinet.jpn.org/view/69)<br>※使用できるように、[エントリータグクラウド表示プラグイン](https://freo.jp/plugin/entry_tagcloud.html)、[ページタグクラウド表示プラグイン](https://freo.jp/plugin/page_tagcloud.html)、[ブックマークタグクラウド表示プラグイン](https://freo.jp/plugin/bookmark_tagcloud.html)、[サークルタグクラウド表示プラグイン](https://freo.jp/plugin/circle_tagcloud.html)、[ショッピングカートタグクラウド表示プラグイン](https://freo.jp/plugin/catalog_tagcloud.html)の設定ファイルにdisplayファイルの読み込み設定の追加済み
- [コメント管理画面にコメントを表示](https://cccabinet.jpn.org/view/84)<br>※投稿先の表示はさせていません
- 編集画面で登録画像を表示
  - [編集画面で添付ファイルとイメージの画像を表示](https://cccabinet.jpn.org/view/60)
  - [編集画面でオプションの画像を表示](https://cccabinet.jpn.org/view/63)
