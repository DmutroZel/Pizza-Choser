$('.koshukContainer').hide(0);
$('.pizzaItem').hide(0); 

let angle = 0;
$('#nextBtn').click(function () {

    angle += 90;
    $('.pizzaPlace').css('transform', `rotate(${angle}deg)`);
})

$('#btnKoshuk').click(function () {
    $('.koshukContainer').slideToggle(300);
})

 $('#pizza1').click(function () {
    $('#pizza1').hide(100);
    $('#pizza1Hide').show(100);
 })
 
$('#exitBtn').click(function () {
    $('#pizza1').show(100);
    $('#pizza1Hide').hide(100); })



 $('#pizza2').click(function () {
    $('#pizza2').hide(100);
   $('#pizza2Hide').show(100);

})
$('#exitBtn2').click(function () {
    $('#pizza2').show(100);
    $('#pizza2Hide').hide(100); })



$('#pizza3').click(function () {
    $('#pizza3').hide(100);
   $('#pizza3Hide').show(100);

})
$('#exitBtn3').click(function () {
    $('#pizza3').show(100);
    $('#pizza3Hide').hide(100); })


$('#pizza4').click(function () {
    $('#pizza4').hide(100);
   $('#pizza4Hide').show(100);

})
$('#exitBtn4').click(function () {
    $('#pizza4').show(100);
    $('#pizza4Hide').hide(100); })



















