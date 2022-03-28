import $ from "jquery";
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './styles/index.scss';


//Star rating
document.querySelectorAll('.rating__star').forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    })
     
});



//Pagination
window.onload = function(){
      //Range slider
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 5000,
            'max': 10000
        }
    });

    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });
    //Dropdown-menu-open
    var flag = 0;
    var dropdown = $('.dropdown-full');
    dropdown.click(function () {
      if (flag == 0){
        $('.dropdown-menu').slideDown()
        dropdown.css('border-color', 'rgba(31, 32, 65, 0.5)')
        flag = 1
      } else {
        $('.dropdown-menu').slideUp()
        dropdown.css('border-color', '')
        flag = 0
      }
    })
    // dropdown functional
    if ($(this).next().text() == 0)
      $(this).css('border-color', 'rgba(31, 32, 65, 0.25)')
    $('.counter__button-plus').click(function(){
      if ($(this).prev().text() < 2)
        $(this).prev().text(+$(this).prev().text() + 1)
    })
    $('.counter__button-minus').click(function () {
      if ($(this).next().text() > 0)
        $(this).next().text(+$(this).next().text() - 1); 
    });

    //checkbox-dropdown arrow rotation
    $('.checkbox-dropdown__title').click(function(e){
      e.preventDefault();
      $('.rotating').toggleClass("rotated");
      $('.checkbox-dropdown__list').slideToggle();
    })
}



