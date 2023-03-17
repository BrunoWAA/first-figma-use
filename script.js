window.addEventListener("load", function()
    {
        document.getElementById('input-5').style.display="none"
        document.getElementById('RetornoAPi').style.display="none"
        
        document.getElementById("input-4").addEventListener('click', function ()
        {
            botaoAPI()
        })
    })
    
function botaoAPI()
{

    postAPI()

    async function postAPI ()
    {
        const nome = document.getElementById("input-1").value
        const email1 = document.getElementById("input-2").value
        const descricao = document.getElementById("input-3").value

        const url ="https://target-api-simples.cyclic.app/generica"
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify({
                title: nome,
                email: email1,
                description: descricao
            }),

            headers: {"Content-type": "application/json"}
        }
        const response = await fetch (url, fetchOptions)
        constrespondeData = await response.json


        document.getElementById('retorno1').innerHTML = `Nome: ${nome}`;
        document.getElementById('retorno2').innerHTML = `E-mail: ${email1}`;
        document.getElementById('retorno3').innerHTML = `Menssagem: ${descricao}`;



        if (nome === "" || email1 === "" || descricao === "") 
        {
            document.getElementById("input-5").innerHTML = "Preencha todos os campos"
            document.getElementById('input-5').style.display="flex"
            document.getElementById('input-5').style.backgroundColor= "red"
            document.getElementById('input-5').style.color= "white"

            document.getElementById('RetornoAPi').style.display="none"
        }
        else{
            document.getElementById("input-5").innerHTML = "E-mail enviado com sucesso"
            document.getElementById('input-5').style.display="flex"
            document.getElementById('input-5').style.backgroundColor= "rgb(93, 218, 100)"
            document.getElementById('RetornoAPi').style.display="block"
        }
    

    }
    
    

}