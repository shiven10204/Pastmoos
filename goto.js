


// // function passvalues(i){
// //     var prodname  =     document.querySelector(".prodname"+i).innerHTML;
// //     var  price =     document.querySelector(".price"+i).innerHTML;
// //     // var img =     document.querySelector(".img"+i).getAttribute('src');
// //     var disprice  =     document.querySelector(".disprice"+i).innerHTML;
// //     var description =     document.querySelector(".description"+i).innerHTML;
// //     var category  =     document.querySelector(".category"+i).innerHTML;
// //     // alert(location +description + image );
// //     sessionStorage.setItem('prodname',prodname );
// //     sessionStorage.setItem('price',price );
// //     // sessionStorage.setItem('img',img );
// //     sessionStorage.setItem('disprice',disprice );
// //     sessionStorage.setItem('description', description);
// //     sessionStorage.setItem('category',category );
// //      window.location.href = 'detail-page.html';
    
    
// //     } ;
//     // First HTML page
// function passvalues(i) {
//     var prodName = document.querySelector('.prodname'+ i).value;
//     var price = document.querySelector('.price'+ i).value;
//     var description = document.querySelector('.description'+ i).value;
//     var disPrice = document.querySelector('.disprice'+ i).value;
//     var category = document.querySelector('.category'+ i).value;
  
//     sessionStorage.setItem('prodName', prodName);
//     sessionStorage.setItem('price', price);
//     sessionStorage.setItem('description', description);
//     sessionStorage.setItem('disPrice', disPrice);
//     sessionStorage.setItem('category', category);
  
//     window.location.href = 'detail-page.html';
//   }
  
// //   // Second HTML page
// //   window.onload = function() {
// //     var prodName = sessionStorage.getItem("prodName");
// //     var price = sessionStorage.getItem("price");
// //     var description = sessionStorage.getItem("description");
// //     var disPrice = sessionStorage.getItem("disPrice");
// //     var category = sessionStorage.getItem("category");
  

// //   };
// 
function passvalues(i) {
  
    
    // Extract data with class names
    var prodname = document.querySelector(".prodname"+i).textContent;
    var price = document.querySelector(".price"+i).textContent;
    var img = document.getElementById("img"+i).src;
    var disprice = document.querySelector(".disprice"+i).textContent;
    var category = document.querySelector(".category"+i).textContent;
    var description = document.querySelector(".desc"+i).textContent;
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
    
      
    // console.log("description:", description);
  }
  
    