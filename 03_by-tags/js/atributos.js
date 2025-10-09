let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = "https://horadecodar.com.br";

a.setAttribute('href', link);

console.log(a.getAttribute("href"));