var Time = moment().format('MMMM Do YYYY, h:mm:ss a');
var Hour = moment()._d;

$('h1').text(Time);
//Button to set written plans in local storage for later retrieval
$('button').on('click', () => {
	localStorage.setItem('Words', $('textarea.words').val());
	localStorage.setItem('Words1', $('textarea.words1').val());
	localStorage.setItem('Words2', $('textarea.words2').val());
	localStorage.setItem('Words3', $('textarea.words3').val());
	localStorage.setItem('Words4', $('textarea.words4').val());
	localStorage.setItem('Words5', $('textarea.words5').val());
	localStorage.setItem('Words6', $('textarea.words6').val());
	localStorage.setItem('Words7', $('textarea.words7').val());
	localStorage.setItem('Words8', $('textarea.words8').val());
	localStorage.setItem('Words9', $('textarea.words9').val());
	localStorage.setItem('Words10', $('textarea.words10').val());
	localStorage.setItem('Words11', $('textarea.words11').val());
	localStorage.setItem('Words12', $('textarea.words12').val());
});
//Grab saved plans in local storage and paste them to planner
$('textarea.words').text(localStorage.getItem('Words'));
$('textarea.words1').text(localStorage.getItem('Words1'));
$('textarea.words2').text(localStorage.getItem('Words2'));
$('textarea.words3').text(localStorage.getItem('Words3'));
$('textarea.words4').text(localStorage.getItem('Words4'));
$('textarea.words5').text(localStorage.getItem('Words5'));
$('textarea.words6').text(localStorage.getItem('Words6'));
$('textarea.words7').text(localStorage.getItem('Words7'));
$('textarea.words8').text(localStorage.getItem('Words8'));
$('textarea.words9').text(localStorage.getItem('Words9'));
$('textarea.words10').text(localStorage.getItem('Words10'));
$('textarea.words11').text(localStorage.getItem('Words11'));
$('textarea.words12').text(localStorage.getItem('Words12'));

//If coditions to decide to color past hours; could use refactoring
if ($('span.1800').attr('class') < Hour) {
	$('textarea.words').css('background-color', 'blue');
}
if ($('span.1700').attr('class') < Hour) {
	$('textarea.words1').css('background-color', 'blue');
}
if ($('span.1600').attr('class') < Hour) {
	$('textarea.words2').css('background-color', 'blue');
}
if ($('span.1500').attr('class') < Hour) {
	$('textarea.words3').css('background-color', 'blue');
}
if ($('span.1400').attr('class') < Hour) {
	$('textarea.words4').css('background-color', 'blue');
}
if ($('span.1300').attr('class') < Hour) {
	$('textarea.words5').css('background-color', 'blue');
}
if ($('span.1200').attr('class') < Hour) {
	$('textarea.words6').css('background-color', 'blue');
}
if ($('span.1100').attr('class') < Hour) {
	$('textarea.words7').css('background-color', 'blue');
}
if ($('span.1000').attr('class') < Hour) {
	$('textarea.words8').css('background-color', 'blue');
}
if ($('span.0900').attr('class') < Hour) {
	$('textarea.words9').css('background-color', 'blue');
}
if ($('span.0800').attr('class') < Hour) {
	$('textarea.words10').css('background-color', 'blue');
}
if ($('span.0700').attr('class') < Hour) {
	$('textarea.words11').css('background-color', 'blue');
}
if ($('span.0600').attr('class') < Hour) {
	$('textarea.words12').css('background-color', 'blue');
}
//Button to clear local storage and refresh planner
$('button.clear').on('click', () => {
	localStorage.clear();
	location.reload();
	console.log('click');
});
