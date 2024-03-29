/*********************************************************************

 freo | インラインフレーム (2022/01/10)

 Copyright(C) 2009-2022 freo.jp
 customized：cccabinet（https://cccabinet.jpn.org/)

*********************************************************************/

$(document).ready(function() {
	//メディア管理（tablesorter非公式フォーク版）
	$('#media').tablesorter({
		sortList :[[1,1]],
		emptyTo: 'top',
		headers: {
			2: { sorter: 'digit' },
			3: { sorter: false },
			4: { sorter: false }
		}
	});

	//メディアアップロード欄追加
	$('#media_add').click(function() {
		$('#media_file').append($('#media_template').html());
	});
	$('#media_template').hide();

	//メディア挿入
	$('a.insert').click(function() {
		parent.$.markItUp( { placeHolder: $(this).attr('title') } );
		parent.$.fn.colorbox.close();
	});

	//漫画挿入（漫画表示プラグイン用）
	$('form#media_comic_insert').submit(function() {
		var media_comic = {
			path: $(this).find('input[name=\'plugin_media_comic[path]\']').val(),
			columns: $(this).find('input[name=\'plugin_media_comic[columns]\']:checked').val(),
			direction: $(this).find('input[name=\'plugin_media_comic[direction]\']:checked').val(),
			devide: $(this).find('input[name=\'plugin_media_comic[devide]\']:checked').val(),
			end: $(this).find('input[name=\'plugin_media_comic[end]\']:checked').val(),
			navigation: $(this).find('input[name=\'plugin_media_comic[navigation]\']:checked').val()
		}

		var parameters = [];

		if (media_comic.columns == '1') {
			parameters.push('columns=1');
		}
		if (media_comic.direction == 'ltr') {
			parameters.push('direction=ltr');
		}
		if (media_comic.devide == 'on') {
			parameters.push('devide=on');
		}
		if (media_comic.end == 'on') {
			parameters.push('end=on');
		}
		if (media_comic.navigation == 'off') {
			parameters.push('navigation=off');
		}

		var parameter = parameters.join('&');

		if (parameter) {
			parameter = '?' + parameter;
		}

		var content = '<a href="' + media_comic.path + parameter + '">漫画</a>';

		parent.$.markItUp( { placeHolder: content } );
		parent.$.fn.colorbox.close();

		return false;
	});

	//閲覧制限
	if ($('#article_restriction').val() == 'group') {
		$('#article_password').hide();
	} else if ($('#article_restriction').val() == 'password') {
		$('#article_group').hide();
	} else {
		$('#article_group, #article_password').hide();
	}
	$('#article_restriction').change(function() {
		if ($(this).val() == 'group') {
			$('#article_group').show();
			$('#article_password').hide();
		} else if ($(this).val() == 'password') {
			$('#article_group').hide();
			$('#article_password').show();
		} else {
			$('#article_group, #article_password').hide();
		}
	});

	//削除確認
	$('a.delete').click(function() {
		return confirm('本当に削除してもよろしいですか？');
	});
	$('form.delete').submit(function() {
		return confirm('本当に削除してもよろしいですか？');
	});

	//ColorBox
	var extensions = ['gif', 'GIF', 'jpeg', 'JPEG', 'jpg', 'JPG', 'jpe', 'JPE', 'png', 'PNG'];

	var target = '';
	$.each(extensions, function() {
		if (target) {
			target += ',';
		}
		target += 'a[href$=\'.' + this + '\']';
	});
	$(target).colorbox({ maxWidth:'95%', maxHeight:'95%' });

	$('a.colorbox').colorbox({ width:'80%', height:'80%', iframe:true });
});
