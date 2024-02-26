const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    // ------------------------------------------------
    const placeName=e.target.parentNode.childNodes[1].innerText;
    const price=e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const selectedContainer=document.getElementById('selected-place-container');
    // ------ create li -------------------------
    const li =document.createElement("li");
    const p1=document.createElement("p");
    p1.innerText=placeName;
    const p2=document.createElement("p");
    p2.innerText=price;

    e.target.parentNode.parentNode.style.backgroundColor='orange';
    // -------- li appendChild p1 & p2 -----------
    li.appendChild(p1);
    li.appendChild(p2);
    const budget=document.getElementById('budget').innerText;
    const convertedBudget=parseInt(budget)
    if(convertedBudget-parseInt(price)<0){
        alert('Low budget. Please earn more')
        return;
    }
    document.getElementById('budget').innerText=convertedBudget-parseInt(price)

    selectedContainer.appendChild(li)

    // const totalCost=document.getElementById('total-cost').innerText;
    // const convertedTotalCost=parseInt(totalCost);
    // const sum=convertedTotalCost+parseInt(price);

    // const grandCost=document.getElementById('grand-total').innerText;
    // const convertedGrandCost=parseInt(grandCost);
    // const sum2=convertedGrandCost+parseInt(price);

    // setInnerText('total-cost',sum)
    // setInnerText('grand-total',sum2)
    // ------------------------------------------------------
    totalCost("total-cost",parseInt(price));
    grandTotalCost("grand-total",parseInt(price));
    // -------------------------------------------------
    setInnerText("cart-count",count)
  });
}

// ------------------------------------------------------
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}
// -------------------------------------------------
function totalCost(id,value){
    const totalCost=document.getElementById(id).innerText;
    const convertedTotalCost=parseInt(totalCost);
    const sum=convertedTotalCost+parseInt(value);
    setInnerText("total-cost",sum)
}
// ------------------------------------------------------
function grandTotalCost(category){
    const totalCost=document.getElementById('total-cost').innerText;
    const convertedTotalCost=parseInt(totalCost);

    if(category=='bus'){
        setInnerText('grand-total',convertedTotalCost+100);
    } else if(category=='train'){
        setInnerText('grand-total',convertedTotalCost-200);
    } else if(category=='flight'){
        setInnerText('grand-total',convertedTotalCost+500);
    }else{ 
        setInnerText('grand-total',convertedTotalCost);
    }
}