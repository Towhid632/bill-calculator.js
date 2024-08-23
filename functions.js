const hide_result = document.querySelector(".HideButton");

hide_result.addEventListener("click", ()=>{
    let result = document.querySelector(".result");
    result.style.display = "none";
})
