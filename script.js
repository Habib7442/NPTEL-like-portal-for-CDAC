function changeBorder() {
  document.getElementById("courses").style.border = "1px solid #80a8fc";
  document.getElementById("instructor").style.border = "1px solid #80a8fc";
}

const searchCourses = () => {
  let filter = document.getElementById("courses").value.toUpperCase();
  let div = document.getElementById("container");
  let courseName = div.getElementsByClassName("header");
  let box = document.getElementsByClassName("box");

  for (let i = 0; i < courseName.length; i++) {
    let a = courseName[i].getElementsByTagName("h6")[0];
    let nameValue = a.textContent || a.innerHTML;

    if (nameValue.toUpperCase().indexOf(filter) > -1) {
      courseName[i].style.display = "";
    } else {
      box[i].style.display = "none";
    }
  }
};

const searchInstructor = () => {
  let filter = document.getElementById("instructor").value.toUpperCase();
  let div = document.getElementById("container");
  let courseName = div.getElementsByClassName("instructorName");
  let box = document.getElementsByClassName("box");
  for (let i = 0; i < courseName.length; i++) {
    let a = courseName[i].getElementsByTagName("p")[0];
    let nameValue = a.textContent || a.innerHTML;

    if (nameValue.toUpperCase().indexOf(filter) > -1) {
      courseName[i].style.display = "";
    } else {
      box[i].style.display = "none";
    }
  }
};
