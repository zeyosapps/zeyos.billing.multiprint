window.addEvent('domready', function() {
	var table = $('table'),
		Selection = [];
	
	for (var Chk = parent.document.querySelectorAll('#page td.tbl_chk > input:checked'), I = 0, L = Chk.length; I < L; I++)
		Selection.push(Chk[I].value);
		
	console.log('Selection', Selection);
		
	if (Selection.length == 0) {
		table.adopt(new Element('div', {'class': 'alert-danger', 'html': 'No selection'}));
		return;
	}
	
	table.adopt(new Element('div', {'class': 'alert-warning', 'html': '<b>' + Selection.length + '</b> elements selected'}));
	$('btnSubmit').erase('disabled');
	$('hdnSelection').set('value', Selection.join(','));
	
	$('btnClose').addEvent('click', function() {
		ZeyOSApi.hidePop();
	});
});
