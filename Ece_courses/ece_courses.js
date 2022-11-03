fetch("https://www.backend.cf/api/courses")
  .then((data) => {
    return data.json();
  })
  .then((actualData) => {
    let data1 = "";
    actualData.map((values) => {
      // data1 += `<div class="box container-fluid">
      //   <div class="inner-content">
      //     <div class="header"><h6>${values.course_name}</h6></div>
      //     <p class="branch">${values.discipline.discipline_name}</p>
      //     <div class="instructorName">
      //       <p class="teachers-name">${values.teacher.teacher_name}</p>
      //     </div>
      //     <div class="instructorName">
      //       <p class="teachers-name">${values.teacher.teachers_institute}</p>
      //     </div>
      //   </div>
      //   <div class="button">
      //   <a href="CourseEnrollmentHTML.html" class="btn-enroll">Enroll Now</a>
      //   <a href="#" class="btn-classroom">Google Classroom</a>
      //   </div>
      // </div>`;
      data1 += `<div class="card box" style="width: 28rem;">
      <div class="card-body">
        <div class="header">
          <h6 class="card-title">Course name</h6>
        </div>
        <p class="card-text branch">Electronics and Communication Engineering</p>
        <div class="instructorName">
        <p class="card-text teachers-name">Teacher name</p>
        </div>
        <p class="card-text">
          Institute name
        </p>
        <a href="#" class="card-link btn btn-outline-danger">
          Enroll Now
        </a>
        <a href="#" class="card-link btn btn-outline-success">
          Google Classroom
        </a>
      </div>
    </div>`;
    });

    document.getElementById("container").innerHTML = data1;
  })
  .catch((error) => {
    console.log(error);
  });
