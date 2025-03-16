
// Data loading from data-desing section
// 1st photo loading 
const photoLoading = document.getElementById('for-img')
photoLoading.setAttribute('src', course.photo)
// lesson data loading 
const courseLessons = document.getElementById('course-module');
courseLessons.innerHTML = `Total-lesson-${course.lesson}`
// students data loading 
const students = document.getElementById('admission');
students.innerHTML = `Total ${course.studentsAre}-students`

// price-data-loading (have many twist here )
const totalPrice = document.querySelector('#all-price span, span');
totalPrice.innerHTML = course.salePrice > 0 ? ` <span class="font-bold text-yellow-400" >TK:${course.salePrice}</span>
     <span class="line-through" >TK:${course.regularPrice}</span>` :
    ` <span class="font-bold text-white shadow animate-pulse" >TK:${course.regularPrice}</span>`
