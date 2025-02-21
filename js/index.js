fetch('header.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('header-id').innerHTML = text);
fetch('footer.html')
    .then(response=> response.text())
    .then(text=> document.getElementById('footer-id').innerHTML = text);
fetch('head.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('head-id').outerHTML = data;
    });