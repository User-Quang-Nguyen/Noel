// var boxgift = document.querySelector('.box-gift')
// var Close = document.querySelector('.fa-xmark')
// var boxContent = document.querySelector('.box-content')
// var content =document.querySelector('.content')

// boxgift.onclick = function(){
//     boxgift.classList.toggle('active')
//     // boxContent.classList.add('active')
// }
// content.onclick = function(){
//     boxContent.classList.add('active')
// }
// Close.onclick = function(){
//     boxContent.classList.remove('active')
// }

var boxgift = document.querySelector('.box-gift');
var Close = document.querySelector('.fa-xmark');
var boxContent = document.querySelector('.box-content');
var content = document.querySelector('.content');

// Khi click vào hộp quà, mở hoặc đóng box content
boxgift.onclick = function() {
    boxContent.classList.toggle('active');  // Toggle trạng thái mở/đóng
}

// Khi click vào nội dung, đóng box content
content.onclick = function() {
    boxContent.classList.add('active'); // Đảm bảo box content được mở khi click vào nội dung
}

// Khi click vào nút đóng (fa-xmark), đóng box content
Close.onclick = function() {
    boxContent.classList.remove('active');  // Xóa class 'active' để đóng box content
}
