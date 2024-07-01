

function rand(){
   const num1 =  document.getElementById("main1").innerHTML = Math.floor(Math.random()*6);
   const num2 = document.getElementById("main2").innerHTML = Math.floor(Math.random()*6);

   if(num1>num2){
    document.getElementById("inp1").value= num1;

   }else{
    document.getElementById("inp1").value = num2;
   }
//    document.getElementById("inputId1").value = num1;
//    document.getElementById("inputId2").value = num2;


}
// let listContent = "";
// for(let i=1;i<=10;i++){
//     listContent += "<li>" + i +" term"+ "</li>" +
//     "<input id='${inputId1}' type='text'></input>"+
//     "<input id='${inputId2} type='text' value='${num2}'></input>"+ "<br>";
// }

// document.getElementById("li1").innerHTML = listContent;
let listContent = "";
for (let i = 1; i <= 10; i++) {
  // Create unique IDs with a descriptive naming convention
  const inputId1 = `termInput-${i}-1`;
  const inputId2 = `termInput-${i}-2`;

  // Include ID and type="text" attributes for functionality and accessibility
  listContent += `<li>${i} term</li>` +
                 `<input id="${inputId1}" type="text">` +
                 `<input id="${inputId2}" type="text">` +
                 "<br>";
}
document.getElementById("li1").innerHTML = listContent;
