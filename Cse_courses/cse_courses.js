fetch(`https://www.backend.cf/api/courses/pgdiploma/`)
  .then((data) => {
    console.log(data)
    return data.json();
  })
  .then((actualData) => {
    let data1 = "";
    actualData.map((values) => {
      data1 += `<a href="../Courses/course.html"><div class="card box bg-light" style="width: 28rem;">
      <div class="card-body">
        <div class="header">
          <h6 class="card-title">${values.pgdiploma_course_name}</h6>
        </div>
        <p class="card-text branch">Computer Science and Engineering</p>
        <div class="instructorName">
        <p class="card-text teachers-name">${values.pgdiploma_course_faculty}</p>
        </div>
        <br>
        <a href="https://www.backend.cf/api/${values.pgdiploma_syllabus}" class="card-link btn btn-outline-dark">
          Syllabus
        </a>
        
        <a href="CourseEnrollmentHTML.html" class="card-link btn btn-outline-danger">
          Enroll Now
        </a>
        <a href=${values.pgdiploma_course_link} class="card-link btn btn-outline-success">
          Google Classroom
        </a>
      </div>
    </div></a>`;
    });

    document.getElementById("container").innerHTML = data1;
  })
  .catch((error) => {
    console.log(error);
  });
