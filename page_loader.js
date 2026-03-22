function showPageNew() {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.getElementById("loader").style.display = "block";
        document.getElementById("myDiv").style.display = "none";
    } else {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }
  };
}