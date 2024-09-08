let project = document.getElementsByClassName("project");
let certificate = document.getElementsByClassName("certificate");

let projectIndex = 1;
let certificateIndex = 1;

showProject(projectIndex);
showCertificate(certificateIndex);

function showProject(num) {
  if (num > project.length) {
    projectIndex = 1;
  }
  if (num < 1) {
    projectIndex = project.length;
  }
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[projectIndex - 1].style.display = "flex";
}

function showCertificate(num) {
  if (num > certificate.length) {
    certificateIndex = 1;
  }
  if (num < 1) {
    certificateIndex = certificate.length;
  }
  for (let i = 0; i < certificate.length; i++) {
    certificate[i].style.display = "none";
  }
  certificate[certificateIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  showProject((projectIndex += num));
}

function navigateCertificate(num) {
  showCertificate((certificateIndex += num));
}
