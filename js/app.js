const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    // console.log('Mehedi Hasan is the best student of icst');
    count = count + 1;
    document.getElementById("cart-count").innerText = count;
  });
}
