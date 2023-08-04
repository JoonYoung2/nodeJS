const readURL = (input) => {
    console.log(input);
    const file = input.files[0];
    console.log(file);

    if(file != ""){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) =>{//e == event 정보
            console.log(e.target.result);
            document.querySelector("#preview").src = e.target.result;
        }
    }
}