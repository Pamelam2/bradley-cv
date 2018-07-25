$('#orals').on('click', function() {
    $('#oralPresentation').show();
})

$('#orals').on('click', function() {
    $('#guestLectures').hide();
})

$('#orals').on('click', function() {
    $('#posterPresentation').hide();
})

$('#poster').on('click', function() {
    $('#posterPresentation').show();
})

$('#poster').on('click', function() {
    $('#oralPresentation').hide();
})

$('#poster').on('click', function() {
    $('#guestLectures').hide();
})

$('#guest').on('click', function() {
    $('#guestLectures').show();
})

$('#guest').on('click', function() {
    $('#oralPresentation').hide();
})

$('#guest').on('click', function() {
    $('#posterPresentation').hide();
})

$('#home').on('click', function() {
    $('#homeName').show();
})
