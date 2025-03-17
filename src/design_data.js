// Here course details

/*This Data Design was for single Data Design */
// single data design //=>
/*
const course = {
nameofCourse: 'DeVops Course',
nameofPerson: 'Mainul islam',
lesson: 44,
regularPrice: 7000,
salePrice: 90,
studentsAre: 50,
photo: 'https://interactivecaresbucket.s3.amazonaws.com/main_backend/media/Complete_Video_Editing_Career_Path_Batch_01/Sep-15.2-1.png.webp'
}

*/

/*Now Data Design with Multiple Model (use array Object)*/
const multipleCourse = [
    {
        nameofCourse: 'DeVops Course',
        nameofPerson: 'Mainul islam',
        lesson: 44,
        regularPrice: 8000,
        salePrice: 0,
        studentsAre: 0,
        photo: 'https://interactivecaresbucket.s3.amazonaws.com/main_backend/media/Complete_Video_Editing_Career_Path_Batch_01/Sep-15.2-1.png.webp'
    },

    {
        nameofCourse: 'python Essential Free Course',
        nameofPerson: 'kibria ahmed',
        lesson: 90,
        regularPrice: 9000,
        salePrice: 2000,
        studentsAre: 0,
        photo: "https://interactivecaresbucket.s3.amazonaws.com/main_backend/media/Python_Essentials%3A_Kickstart_Your_Coding_Journey/Website-Cover.jpg"
    },
    {
        nameofCourse: 'UI-UX Free Courses For Students',
        nameofPerson: 'CHan Mia',
        lesson: 50,
        regularPrice: 9500,
        salePrice: 3000,
        studentsAre: 0,
        photo: "https://interactivecaresbucket.s3.amazonaws.com/main_backend/media/UI/UX_Free_Course/ui_ux_poster_v2.webp"
    }
]