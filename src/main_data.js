
// Data loading from data-desing section

// THis is the work with single Data loading =>

/*
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
*/


// -catch the html div tag use Id-tag 
const every_courses = document.getElementById('everyCourses');


// Multiple Data loading
let fullCourse = "";
multipleCourse.forEach((items, index) => {
     fullCourse += `   
 <div
            class="w-1/4  border-2 h-[400px] rounded-xl mt-10 shadow-md shadow-green-500/50 mb-10 border-green-300 opacity-100 cursor-pointer hover:-translate-y-6">
          
            <img class="animate-pulse" id="for-img"
                src="${items.photo}"
                alt="">
     
            <div>
                <p class="font-bold text-[20px]" id="course-name">"${items.nameofCourse}"</p>
                <p class="font-bold text-[15px]" id="person-name">${items.nameofPerson}</p>
                <p class="font-bold text-[15px]" id="course-module">Total-lesson${items.lesson}</p>
            </div>
          
          <div class=" flex justify-around mt-40 items-center" id="all-price">
             ${items.salePrice > 0 ?
               '<span class="line-through font-bold">Tk:' + items.regularPrice + '</span><span class="font-bold text-yellow-400">Tk: ' + items.salePrice + ' </span>'
               :
               '<span class="font-bold text-white shadow animate-pulse">Tk: ' + items.regularPrice + ' </span>'
          }
           <button class="bg-green-400 rounded px-2 py-1 font-bold flex" id="admission">Total-students-${items.studentsAre}</button>
          </div>
           
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-14 -mt-60 mx-[300px] animate-bounce" fill="green"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class=" mx-[300px] font-bold ">CalllUs</span>
            </div>
 </div>
        `
})

every_courses.innerHTML = fullCourse;

