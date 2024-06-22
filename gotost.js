function passvaluestick(i) {
  
    
    // Extract data with class names
    var prodname = document.querySelector(".prodnamest"+i).textContent;
    var price = document.querySelector(".pricest"+i).textContent;
    var img = document.getElementById("imgst"+i).src;
    var disprice = document.querySelector(".dispricest"+i).textContent;
    var category = document.querySelector(".categoryst"+i).textContent;
    var description = document.querySelector(".descst"+i).textContent;
    sessionStorage.setItem('prodname', prodname);
    sessionStorage.setItem('price', price);
    sessionStorage.setItem('img', img);
    




    sessionStorage.setItem('disprice', disprice);
    sessionStorage.setItem('category', category);
    sessionStorage.setItem('description', description);

    window.location.href = 'detail-page.html';
    // sessionStorage.getItem('prodname')
    // sessionStorage.getItem('price')
    // sessionStorage.getItem('disprice')
    // sessionStorage.getItem('category')
    // sessionStorage.getItem('description')
     
    // alert( sessionStorage.getItem('disprice'));
    console.log(sessionStorage);
}