
// let box2 = +prompt("enter second number")
// let textname = document.getElementById("text");
// textname.addEventListener("click", itemName);
// function itemName() {
//     alert("you click me!")
    

// function pick() {
//     let price = document.getElementById('price').value;
//     let qty = document.getElementById('quantity').value;
// alert (`Total price is:  $${qty * price}`) ;
// if (confirm ('Confirm order? ') ){
//     window.location.href = 'index1.html'
        
//     }

  
// }
function pick() {
    let price = document.getElementById('price').value;
    let qty = document.getElementById('quantity').value;
if(qty >=1 && qty <= 100  ){
    alert (`Total price is:  $${qty * price}`) ;
    if (confirm ('Confirm order? ') ){
        window.location.href = 'index1.html'
            
        }
    }
    else if (qty < 1 ){
        alert("Please you have to input a Valid quantity")
    }
    else if (qty == null ){
        alert(" You must input a quantity!")
    }
    else if (qty > 100){
        let  yes = confirm("This amount of good will take too long to be delivered! Continue? ")
        if(yes == true){
            alert (`Total price is:  $${qty * price}`) ;
    if (confirm ('Confirm order? ') ){
        window.location.href = 'index1.html'   
        }
    }
           
        }
             else
                 
                 
                 alert("Invalid input!" )  
    
    
        
            }

// let name = true;
//   name = Number(name)
// alert(typeof name);

// let name = 'john';
// name = 12356;
// alert(`number is  ${ name } `)
// alert (Number(" "));
// alert( +true ); // 1
// alert(  + 1);  
// let n = 2;
//     n = n + 5;
//     n = n * 2;
//     n++;
//     alert(n)
// let counter = 1;
// alert( 2 * counter );
// counter++;