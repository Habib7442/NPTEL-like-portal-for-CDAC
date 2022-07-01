function changeBorder() {
  document.getElementById("courses").style.border = "1px solid #80a8fc";
  document.getElementById("instructor").style.border = "1px solid #80a8fc";
}

function getSearch() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  var coursename = {
    method: "GET",
    redirect: "follow",
  };

  const searchbox = document.getElementById("courses").value;

  fetch(
    "https://www.backend.cf/courses/:coursename",
    { mode: "no-cors" },coursename,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result.method);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

getSearch();
