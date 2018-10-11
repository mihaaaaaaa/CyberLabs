let interfaceBilder = {};

interfaceBilder.parent = $('.js-mainParent');
interfaceBilder.interfaces = {
	login:
	'<div class="auth-panel">\
		<h1 id="CyberBananaLabs">CyberBananaLabs</h1>\
		<div class="card">\
			<form class="auth-form">\
				<fieldset class="input js-authParent">\
					<label for="userPass">Incert User Pass</label>\
					<div class="input__container">\
						<input id="userPass" type="text" class="input__field js-authInput" autocomplete="off">\
						<div class="input__btn js-authBtn">></div>\
					</div>\
					<div class="input__error">\
						<span>Wrong User Pass</span>\
					</div>\
				</fieldset>\
			</form>\
		</div>\
	</div>'
};

interfaceBilder.build = function(interface){
	interfaceBilder.parent.html(interfaceBilder.interfaces[interface]);
};

interfaceBilder.showMassage = function(message) {
	interfaceBilder.hideCurrent();
	setTimeout(function() {interfaceBilder.parent.html('<h1>' + message + '</h1>')}, 1000);
};

interfaceBilder.hideCurrent = function(){
	interfaceBilder.parent.find('div').fadeOut(500);
};

