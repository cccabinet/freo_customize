# 変更ログ

詳しくは、各リリースファイルのREADME.mdを参照してください。

## [1.1.2] - 2023-08-15

### カスタマイズの内容

- JSライブラリのバージョン表記を一部省略したのを再度最新バージョンの表記に変更。
- TinyMCE6の設定を調整。

バージョンアップは、以下のファイルを最新版付属のものに差し替えてください。<br>（★：管理画面用バージョンも該当、■：レスポンシブバージョン（差分版も同様）も該当））

- freo/js/admin.js ★■
- freo/js/tinymce/langs/ja.js ★■
- freo/libs/freo/internals/setup/default.php ■
- freo/libs/freo/prepare.php ■
- freo/libs/freo/version.php ■
- freo/templates/header.html ■
- freo/templates/internals/admin/header.html ★■
- freo/templates/internals/admin/iframe_header.html ★■
- markItUp!/freo/templates/internals/admin/header.html ★■
- plugins/form/templates/plugins/form/iframe_header.html ■
- plugins/media_comic/templates/plugins/media_comic/default.html ■
- plugins_catalog/catalog/templates/plugins/catalog/iframe_header.html ■
- plugins_catalog/catalog_order/templates/plugins/catalog_order/admin_order_print.html ★■
- template_custom/freo/templates/header.html ■
- freo/libs/freo/version.php ★■
- （レスポンシブ版、レスポンシブ差替版のみ）freo/libs/freo/checker.php ←カスタマイズ版の表記が抜けていたので修正

## [1.1.1] - 2023-08-07

### カスタマイズの内容

- PHPファイル内のJSライブラリのバージョン表記を一部省略したものに変更。
- TinyMCE6用翻訳ファイルの更新（「ページ区切り」を「続きを読むを挿入」に変更）

バージョンアップは、以下のファイルを最新版付属のものに差し替えてください。<br>（★：管理画面用バージョンも該当、■：レスポンシブバージョン（差分版も同様）も該当））

- freo/js/tinymce/langs/ja.js ★■
- freo/libs/freo/internals/setup/default.php ■
- freo/libs/freo/prepare.php ■
- freo/libs/freo/version.php ■

## [1.1.0] - 2023-08-06

### カスタマイズの内容

- TinyMCE6に対応。
- 他のライブラリもバージョン表記を一部省略したものに変更。

バージョンアップは、以下のファイルを最新版付属のものに差し替えてください。<br>（★：管理画面用バージョンも該当、■：レスポンシブバージョン（差分版も同様）も該当））

- freo/js/admin.js ★■
- freo/js/tinymce/langs/ja.js ★■
- freo/templates/header.html ■
- freo/templates/internals/admin/header.html ★■
- freo/templates/internals/admin/iframe_header.html ★■
- markItUp!/freo/templates/internals/admin/header.html ★■
- plugins/form/templates/plugins/form/iframe_header.html ■
- plugins/media_comic/templates/plugins/media_comic/default.html ■
- plugins_catalog/catalog/templates/plugins/catalog/iframe_header.html ■
- plugins_catalog/catalog_order/templates/plugins/catalog_order/admin_order_print.html ★■
- template_custom/freo/templates/header.html ■
- freo/libs/freo/version.php ★■

## [1.0.3] - 2022-08-16

### カスタマイズの内容

- 制限パスワードのインプットタイプの修正（input type="text" ⇒ input type="password"）
- 拍手プラグインのお礼管理画面でTinyMCE用のメディア登録・メディア管理プラグインを導入したのに、アイコン画像を削除し忘れたので削除
- タグの位置の修正
- セットアップ設定編集ファイルの修正（jquery.jsをCDNに変更したので、設定の変更）
- cssファイルのカスマイズ版表記の修正（CSS Validation Serviceによると、cssファイルで@charset 規則が指定できるのは、スタイルシートの最初の部分のみとのことで、カスタマイズ表記を後に移動）

バージョンアップは、以下のファイルを最新版付属のものに差し替えてください。<br>（★：管理画面用バージョンも該当、■：レスポンシブバージョン（差分版も同様）も該当））

- freo/css/admin.css ★■
- freo/css/common.css ★
- freo/css/error.css
- freo/css/iframe.css ★■
- freo/css/setup.css
- template_custom/freo/css/default.css
- freo/templates/internals/admin/entry_form.html ★■
- freo/templates/internals/admin/iframe_media_form.html ★■
- freo/templates/internals/admin/media_form.html ★■
- freo/templates/internals/admin/page_form.html ★■
- markItUp!/freo/templates/internals/admin/entry_form.html ★■
- markItUp!/freo/templates/internals/admin/page_form.html ★■
- plugins/clap/templates/plugins/clap/admin_thank_form.html ★■
- plugins/circle/templates/plugins/circle/form.html ■
- freo/libs/freo/prepare.php ■
- freo/libs/freo/version.php ★■



## [1.0.2] - 2022-08-07

### カスタマイズの内容

- エントリー登録/ページ登録の状態の表示部分の「非公開」を「未公開」に修正（markItUp!のファイルも含む）
- TinyMCE関連ファイルの更新と修正
  - admin.jsのTinyMCEの設定部分を修正（文字列の区切りをスペース区切りに統一、textcolorプラグインは標準搭載されたので削除）
  - TinyMCE 日本語翻訳ファイルが更新されたので差替（"ページ区切り"を"「続きを読む」を挿入"に修正済み）

バージョンアップは、以下のファイルを最新版付属のものに差し替えてください。<br>
（★：管理画面用バージョンも該当、■：レスポンシブバージョン（差分版も同様）も該当）
- freo/templates/internals/admin/entry_form.html ★
- freo/templates/internals/admin/page_form.html ★
- markItUp!/freo/templates/internals/admin/entry_form.html ★
- markItUp!/freo/templates/internals/admin/page_form.html ★
- freo/js/admin.js ★■
- freo/js/tinymce/langs/ja.js ★■
- freo/libs/freo/version.php ★■



## [1.0.1] - 2022-02-10

### カスタマイズの内容

- ページ管理のページ並び順の表示を元に戻す。 
- 注文管理プラグインの不具合を修正。

バージョンアップは、以下のファイルを最新版付属のものに差し替えてください。<br>
（★：管理画面用バージョンも該当、■：レスポンシブバージョン（差分版も同様）も該当）
- freo/templates/internals/admin/page.html ★
- plugins_catalog/catalog/libs/freo/plugins/page.catalog.php ★■
- freo/libs/freo/version.php ★■



## [1.0.0] - 2022-01-10

### カスタマイズの内容

★：管理画面用バージョンも該当（テンプレートは管理画面用のみ該当）

■：レスポンシブバージョン（差分版も同様）も該当

#### ファイルの収納・追加など
- freoの最新版とfreoの公式サイトで配布されているプラグインを収納 ★■<br>（ショッピングカートプラグインはシェアウェアなので、関連プラグインは他のプラグインと分けて収納）
- freoでサイト全体を管理するためのテンプレート、CSSファイルを別途収納 ■
- テキストエディタをTinyMCEからmarkItUp!に変更する場合のJSやテンプレートの差替ファイルを別途収納  ★■
- ファイル管理プラグインをfreo本体に追加 ★■
- freoの公式サイトで配布されているSmarty用プラグインをfreo本体に追加 ★■
- エントリー・ページ・インフォメーション登録時のプレビュー表示を訪問者向けの表示に差替 ★■
#### バグの修正など
- GitHubのfreo本体のPRの修正、freo公式プラグインのPRの修正を追加 ★■
- カレンダーの祝日定義の変更・延長 ★■
- 認証フォームのパスワード入力欄の修正 ★■
- ショッピングカートプラグインの商品配送方法・料金などの変更 ★■
- フッタのfreo.jpのリンクURLを http://freo.jp から https://freo.jp に変更 ★■
- ファイル管理プラグインの管理対象除外ディレクトリの変更 ★■
#### JSプラグインの更新とCDN化
- jQuery、ColorBox、tablesorter（非公式フォーク版）、TinyMCE、markItUp!を最新版に更新<br>さらにjQuery、ColorBox、tablesorter、TinyMCEはCDNで読み込み設定済み（旧版のファイルは削除済み） ★■
#### レスポンシブに対応
- 表示用の画面だけでなく、管理用画面もレスポンシブ表示に対応 ★■
#### 関連プラグインの設定の追加など
- 各画面のタイトルを設定 ★
- 各テンプレートファイルに関連プラグイン（Smarty用プラグインも含む）を導入したときに反映されるよう調整 ★<br>※該当するプラグインが導入されていないときは表示されません
- 管理画面のフッタにはfreoのバージョンが入るように変更 ★
- 一部のテンプレートファイルにどの項目のコードが分かるようにコメントを追加 ★
- エントリーとページのコメントに表示されるメールアドレスを特殊なコードに変換
- NEW!マークの設定
- ユーティリティの新着画像でフィルターやパスワード制限などで閲覧できない記事に専用の画像を表示
- パスワード認証プラグインと直接リンク防止プラグインの各テンプレートのヘッダとフッタ部分を表示用のテンプレートをインクルードするのではなく直接コードを記載に変更
- 関連するページへ戻るリンク、登録/編集後の確認リンクなどを追加 ★
#### 公式サイトに記載されているカスタマイズによる機能追加
- ネタバレボタンの実装 ★
- 日時のセレクトボックス化と現在日時の一括入力 ★
- 検索プラグインで検索条件を入力していないときに検索結果を表示しない
- ページ一括表示プラグインと兄妹ページ表示プラグインの現在表示しているページのタイトルにはリンクしない
#### freoカスタマイズ集に記載されているカスタマイズなど個人的に機能追加
- ページ送りの修正<br>`ページ 1 ... 3 4 5 ... 7` のように表示 ★
- 投稿者ユーザーの権限を制限 ★
- エントリーとページの管理画面情報の変更 ★
- 管理画面に未承認データの表示 ★
- ユーザー管理を権限順に ★
- エントリーとページなどの登録/編集画面にタグの候補をタグクラウド一覧で表示 ★
- コメント管理画面にコメントを表示 ★
- 編集画面で登録画像を表示 ★
- エントリーギャラリー表示のファイルを限定
