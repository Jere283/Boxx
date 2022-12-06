(()=>{
    $.ajax({
        url:"user",
        method: "GET",
        dataType:"json",
        success:(res) =>{
            console.log(res);
            $("div.nov")
            .html(`<p>Hola ${res[0].uname} desde el backend</p>`)
        },
        error:(error)=>{
            console.error("error en ajax", error);
        }
    });
})();