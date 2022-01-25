import $ from "jquery";
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

import './styles/index.scss';

document.querySelectorAll('.rating__star').forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    })
     
})

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 5000,
        'max': 10000
    }
});
