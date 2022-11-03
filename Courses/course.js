const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");
const list4 = document.getElementById("list4");
const list5 = document.getElementById("list5");
const list6 = document.getElementById("list6");
const list7 = document.getElementById("list7");
const header = document.getElementById("header");
const LL = document.getElementById("lectures");
const courseName = document.getElementById("courseName");
const teacherName = document.getElementById("teacherName");
const syllabusView = document.getElementById("syllabusView");
const video_ = document.getElementById("video_");
const sm1 = document.getElementById("sm1");
const lectCount = document.getElementById("lectCount");


const urlParams=new URLSearchParams(window.location.search);
let [key]=urlParams;
console.log(key);



fetch("https://www.backend.cf/api/courses/").then(res => res.json()).then(data => {
    console.log(data);

    const ul = document.createElement("ul");
    ul.classList.add("subList");
    for(let i = 0; i < data.length; i++){
        
        const li = document.createElement("li");
        li.id = `sub${i+1}`;
        li.classList.add("sub");

        const a = document.createElement("a");
        a.href = `./Course.html?course=${ data[i].course_id}`;
        a.innerHTML = data[i].course_name;

        li.appendChild(a);

        ul.appendChild(li);
    }

    sm1.appendChild(ul);

});


  
  fetch(`https://www.backend.cf/api/courses/id/${key[1]}`, {
    method: 'GET'
  }).then(res=>res.json())
    .then(result => {


        //for lecture section
        const ul_tag = document.createElement("ul");
        ul_tag.classList.add("lect");

        //
        courseName.innerHTML = result[0].course_name;
        teacherName.innerHTML = result[0].teacher.teacher_name;
        syllabusView.href = `https://www.backend.cf/api/${result[0].syllabus}`;


        // add youtube video by dynamic addition of link 
    
    
    for(let i = 0; i < result.course_lectures.length; i++){  //data.course_lectures.length

        const li_tag = document.createElement("li");
        li_tag.id = `list${i+1}`;

        const a_tag = document.createElement("a");
        a_tag.href = result.course_lectures[i];   // this have to be updated    
        a_tag.innerHTML = result.course_lectures[i];//data.course_lectures[i]; 

        li_tag.appendChild(a_tag);
        ul_tag.appendChild(li_tag);
        console.log(`list${i}`);
    }

    LL.appendChild(ul_tag);

    

    })
    .catch(error => console.log(error));