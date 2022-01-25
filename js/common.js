window.addEventListener("popstate", function (evnet) {

	alert('表單已失效');
	location.reload();
})
$(document).ready(function () {

	//判斷國家
	$(".native").click(function() {
		$(".userID").attr("placeholder","");
	});
	$(".foreigner").click(function() {
		$(".userID").attr("placeholder","請輸入護照或身分證件編號");
	});

	//Email認證
	$(".btn_confirm").click(function () {
	    
	    if ($('#email').val().length != 0) {
	        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	        if (regex.test($('#email').val())) {
	            $(this).fadeOut();
	            $(".mail_box").fadeIn(500);
	        }
	    }
	});

	//報名組別
	$("#student").click(function(){
		$("#school_box").show();
		$("#school_box input").attr("required", "required");
		$("#retrun_box").show();
	});
	$("#working").click(function(){
		$("#school_box").hide();
		$("#school_box input").removeAttr("required");
		$("#retrun_box").show();
	});
	$("#foreigner").click(function () {
		$("#school_box").hide();
		$("#school_box input").removeAttr("required");
		$("#retrun_box").hide();
	});

	if ($("#student").is(':checked')) {
		$("#retrun_box").show();
	}
	if ($("#working").is(':checked')) {
		$("#retrun_box").show();
	}
	if ($("#foreigner").is(':checked')) {
		$("#retrun_box").hide();
		$("#home").hide();
	}

	//上傳檔案
	$(".upload_box, #upload_btn").on("change","#upload_input",function(){
	    var filePath = $(this).val();
	    var f = this.files[0];

		if (f.size > 10485760 || f.fileSize > 10485760) {
	        $('#upload_input').val("");
	        $('#file_name').html("");
	        $('#previewImage').attr('src', '');
	        $(".upload_box").addClass("onfocus");
	        $(".file_note").show();
			$(".file_error").html("請確認照片檔案小於10MB後再重新上傳，謝謝。</br> Max File Size： 10MB").fadeIn();
	        return false
	    }
	    else
	    {
	        $(".file_error").html("").fadeIn();
	    }

	    if (f.type == 'image/png' || f.type == 'image/jpg' || f.type == 'image/bmp' || f.type == 'image/jpeg') {
			var arr=filePath.split('\\');
			var fileName=arr[arr.length-1];
			$(".upload_box").removeClass("onfocus");
			$(".file_note").hide();
			$(".file_name").html(fileName);

			if (this.files && this.files[0]) {
			    var reader = new FileReader();

			    reader.onload = function (e) {
			        $('#previewImage').attr('src', e.target.result);
			    }

			    reader.readAsDataURL(this.files[0]);
			}
		} else {
		    $('#upload_input').val("");
		    $('#file_name').html("");
		    $('#previewImage').attr('src', '');
			// $(".file_name").html("");
			$(".upload_box").addClass("onfocus");
			$(".file_note").show();
			$(".file_error").html("※ 您未上傳文件，或著您上傳的文件類型有誤！</br> Allow File Format： JPG、PNG、BMP").fadeIn();
			return false 
		}
	});

	//退件方式
	$("#inPerson").click(function(){
		$("#del_address_box").hide();
		$("#del_address").removeAttr("required");
		$('#del_address').val('');
		$('#checkAddress').prop('checked', false);
		$('#del_address').prop('readonly', false);
	});
	$("#carry").click(function(){
		$("#del_address_box").show();
		$("#del_address").attr("required","required");
	});
	if ($("#carry").is(':checked')) {
		$("#del_address_box").show();
		$("#del_address").attr("required", "required");
	}


	// 先取得 .license 及其各種高度
	// 判斷是否停用 $submit
	var $terms = $('.license'),
		_height = $terms.find("ol").outerHeight(), 
		_scrollHeight =  $terms.prop('scrollHeight'), 
		_maxScrollHeight = _scrollHeight - _height - 20;
		_least = 0, // 距離底部多少就可以, 0 表示得完全到底部
		$submit = $('.agreed').attr('disabled', _maxScrollHeight > _least);
 
	// 當 #terms 中捲軸捲動時
	$('.license').scroll(function(){
		var $this = $(this);
		// 如果高度已經達到指定的高度就啟用 $submit
		if(_maxScrollHeight - $this.scrollTop() <= _least){
			$submit.attr('disabled', false);
			$(".agreed_txt").removeClass("disabled");
			$(".license_note").fadeOut();
			$this.removeClass("focus");
		}
	});


	//判斷未勾選時，同意書hightlight
	$(".btn_send").click(function(){
		if (!$(".agreed_1").is(":checked") || !$(".agreed_2").is(":checked")) {
			$(".license").addClass("focus").scrollTop(0);
			$(".license_note").show();
		} else {
			$(".license").removeClass("focus");
		}
	});

});