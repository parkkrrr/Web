// Import animate.css
import 'animate.css';

// Add animation to grid items on page load
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.classList.add('fadeIn');
});