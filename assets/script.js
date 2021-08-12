// Aplica display none para todos os Quest de 2 a 15
for (let i = 2; i <= 15; i++) {
    document.getElementById(`Quest${i}`).style.display = 'none'    
}

// Funções que pega o que for colocado nos inputs numa variável global e verifica se todos os campos estão como checked
function checkQuest1(){
    try{
    window.DemeterGrp1 = Number(document.querySelector('input[name="DemeterG1"]:checked').value)
    window.ArtemisGrp1 = Number(document.querySelector('input[name="ArtemisG1"]:checked').value)
    window.PersefoneGrp1 = Number(document.querySelector('input[name="PersefoneG1"]:checked').value)
    window.HeraGrp1 = Number(document.querySelector('input[name="HeraG1"]:checked').value)
    window.AfroditeGrp1 = Number(document.querySelector('input[name="AfroditeG1"]:checked').value)
    window.AtenaGrp1 = Number(document.querySelector('input[name="AtenaG1"]:checked').value)
    function hideQuest1(){
        document.getElementById('Quest1').style.display = 'none'
        document.getElementById('Quest2').style.display = 'block'
    }
    console.log(window.DemeterGrp1)
    console.log(window.ArtemisGrp1)
    console.log(window.PersefoneGrp1)
    console.log(window.HeraGrp1)
    console.log(window.AfroditeGrp1)
    console.log(window.AtenaGrp1)
    } catch(error) {
        alert("Verifique todos os campos!")
    } 
    
    hideQuest1()
}

function checkQuest2(){
    
    try{
        window.DemeterGrp2 = Number(document.querySelector('input[name="DemeterG2"]:checked').value)
        window.ArtemisGrp2 = Number(document.querySelector('input[name="ArtemisG2"]:checked').value)
        window.PersefoneGrp2 = Number(document.querySelector('input[name="PersefoneG2"]:checked').value)
        window.HeraGrp2 = Number(document.querySelector('input[name="HeraG2"]:checked').value)
        window.AfroditeGrp2 = Number(document.querySelector('input[name="AfroditeG2"]:checked').value)
        window.AtenaGrp2 = Number(document.querySelector('input[name="AtenaG2"]:checked').value)
        function hideQuest2(){
            document.getElementById('Quest2').style.display = 'none'
            document.getElementById('Quest3').style.display = 'block'
            
        }
        console.log(window.DemeterGrp2)
        console.log(window.ArtemisGrp2)
        console.log(window.PersefoneGrp2)
        console.log(window.HeraGrp2)
        console.log(window.AfroditeGrp2)
        console.log(window.AtenaGrp2)
    } catch(error){
        alert("Verifique todos os campos!")
    }

    hideQuest2()
}

function checkQuest3(){
    try{
        window.DemeterGrp3 = Number(document.querySelector('input[name="DemeterG3"]:checked').value)
        window.ArtemisGrp3 = Number(document.querySelector('input[name="ArtemisG3"]:checked').value)
        window.PersefoneGrp3 = Number(document.querySelector('input[name="PersefoneG3"]:checked').value)
        window.HeraGrp3 = Number(document.querySelector('input[name="HeraG3"]:checked').value)
        window.AfroditeGrp3 = Number(document.querySelector('input[name="AfroditeG3"]:checked').value)
        window.AtenaGrp3 = Number(document.querySelector('input[name="AtenaG3"]:checked').value)

        function hideQuest3(){
            document.getElementById('Quest3').style.display = 'none'
            document.getElementById('Quest4').style.display = 'block'
        }
        console.log(window.DemeterGrp3)
        console.log(window.ArtemisGrp3)
        console.log(window.PersefoneGrp3)
        console.log(window.HeraGrp3)
        console.log(window.AfroditeGrp3)
        console.log(window.AtenaGrp3)
    } catch(error){
        alert("Verifique todos os campos!")
    }

    hideQuest3()

}

function checkQuest4(){
    try{
        window.DemeterGrp4 = Number(document.querySelector('input[name="DemeterG4"]:checked').value)
        window.ArtemisGrp4 = Number(document.querySelector('input[name="ArtemisG4"]:checked').value)
        window.PersefoneGrp4 = Number(document.querySelector('input[name="PersefoneG4"]:checked').value)
        window.HeraGrp4 = Number(document.querySelector('input[name="HeraG4"]:checked').value)
        window.AfroditeGrp4 = Number(document.querySelector('input[name="AfroditeG4"]:checked').value)
        window.AtenaGrp4 = Number(document.querySelector('input[name="AtenaG4"]:checked').value)

        function hideQuest4(){
            document.getElementById('Quest4').style.display = 'none'
            document.getElementById('Quest5').style.display = 'block'
        }
        console.log(window.DemeterGrp4)
        console.log(window.ArtemisGrp4)
        console.log(window.PersefoneGrp4)
        console.log(window.HeraGrp4)
        console.log(window.AfroditeGrp4)
        console.log(window.AtenaGrp4)
    } catch(error){
        alert("Verifique todos os campos!")
    }

    hideQuest4()

}

function checkQuest5(){
    try{
        window.DemeterGrp5 = Number(document.querySelector('input[name="DemeterG5"]:checked').value)
        window.ArtemisGrp5 = Number(document.querySelector('input[name="ArtemisG5"]:checked').value)
        window.PersefoneGrp5 = Number(document.querySelector('input[name="PersefoneG5"]:checked').value)
        window.HeraGrp5 = Number(document.querySelector('input[name="HeraG5"]:checked').value)
        window.AfroditeGrp5 = Number(document.querySelector('input[name="AfroditeG5"]:checked').value)
        window.AtenaGrp5 = Number(document.querySelector('input[name="AtenaG5"]:checked').value)

        function hideQuest5(){
            document.getElementById('Quest5').style.display = 'none'
            document.getElementById('Quest6').style.display = 'block'
        }
        console.log(window.DemeterGrp5)
        console.log(window.ArtemisGrp5)
        console.log(window.PersefoneGrp5)
        console.log(window.HeraGrp5)
        console.log(window.AfroditeGrp5)
        console.log(window.AtenaGrp5)
    } catch (error){
        alert("Verifique todos os campos!")
    }
    hideQuest5()
}

function checkQuest6(){
    try{
        window.DemeterGrp6 = Number(document.querySelector('input[name="DemeterG6"]:checked').value)
        window.ArtemisGrp6 = Number(document.querySelector('input[name="ArtemisG6"]:checked').value)
        window.PersefoneGrp6 = Number(document.querySelector('input[name="PersefoneG6"]:checked').value)
        window.HeraGrp6 = Number(document.querySelector('input[name="HeraG6"]:checked').value)
        window.AfroditeGrp6 = Number(document.querySelector('input[name="AfroditeG6"]:checked').value)
        window.AtenaGrp6 = Number(document.querySelector('input[name="AtenaG6"]:checked').value)
        
        function hideQuest6(){
            document.getElementById('Quest6').style.display = 'none'
            document.getElementById('Quest7').style.display = 'block'
        }
        console.log(window.DemeterGrp6)
        console.log(window.ArtemisGrp6)
        console.log(window.PersefoneGrp6)
        console.log(window.HeraGrp6)
        console.log(window.AfroditeGrp6)
        console.log(window.AtenaGrp6)
    } catch (error){
        alert("Verifique todos os campos!")
    }
    hideQuest6()
}

function checkQuest7(){
    try{
        window.DemeterGrp7 = Number(document.querySelector('input[name="DemeterG7"]:checked').value)
        window.ArtemisGrp7 = Number(document.querySelector('input[name="ArtemisG7"]:checked').value)
        window.PersefoneGrp7 = Number(document.querySelector('input[name="PersefoneG7"]:checked').value)
        window.HeraGrp7 = Number(document.querySelector('input[name="HeraG7"]:checked').value)
        window.AfroditeGrp7 = Number(document.querySelector('input[name="AfroditeG7"]:checked').value)
        window.AtenaGrp7 = Number(document.querySelector('input[name="AtenaG7"]:checked').value)
        function hideQuest7(){
            document.getElementById('Quest7').style.display = 'none'
            document.getElementById('Quest8').style.display = 'block'
        }
        console.log(window.DemeterGrp7)
        console.log(window.ArtemisGrp7)
        console.log(window.PersefoneGrp7)
        console.log(window.HeraGrp7)
        console.log(window.AfroditeGrp7)
        console.log(window.AtenaGrp7)
    } catch (error){
        alert("Verifique todos os campos!")
    }
    hideQuest7()
}

function checkQuest8(){
    try{
        window.DemeterGrp8 = Number(document.querySelector('input[name="DemeterG8"]:checked').value)
        window.ArtemisGrp8 = Number(document.querySelector('input[name="ArtemisG8"]:checked').value)
        window.PersefoneGrp8 = Number(document.querySelector('input[name="PersefoneG8"]:checked').value)
        window.HeraGrp8 = Number(document.querySelector('input[name="HeraG8"]:checked').value)
        window.AfroditeGrp8 = Number(document.querySelector('input[name="AfroditeG8"]:checked').value)
        window.AtenaGrp8 = Number(document.querySelector('input[name="AtenaG8"]:checked').value)

        function hideQuest8(){
            document.getElementById('Quest8').style.display = 'none'
            document.getElementById('Quest9').style.display = 'block'
        }
        console.log(window.DemeterGrp8)
        console.log(window.ArtemisGrp8)
        console.log(window.PersefoneGrp8)
        console.log(window.HeraGrp8)
        console.log(window.AfroditeGrp8)
        console.log(window.AtenaGrp8)
    } catch (error){
        alert("Verifique todos os campos!")
    }

    hideQuest8()
}

function checkQuest9(){
    try{
        window.DemeterGrp9 = Number(document.querySelector('input[name="DemeterG9"]:checked').value)
        window.ArtemisGrp9 = Number(document.querySelector('input[name="ArtemisG9"]:checked').value)
        window.PersefoneGrp9 = Number(document.querySelector('input[name="PersefoneG9"]:checked').value)
        window.HeraGrp9 = Number(document.querySelector('input[name="HeraG9"]:checked').value)
        window.AfroditeGrp9 = Number(document.querySelector('input[name="AfroditeG9"]:checked').value)
        window.AtenaGrp9 = Number(document.querySelector('input[name="AtenaG9"]:checked').value)
        
        function hideQuest9(){
            document.getElementById('Quest9').style.display = 'none'
            document.getElementById('Quest10').style.display = 'block'
        }
        console.log(window.DemeterGrp9)
        console.log(window.ArtemisGrp9)
        console.log(window.PersefoneGrp9)
        console.log(window.HeraGrp9)
        console.log(window.AfroditeGrp9)
        console.log(window.AtenaGrp9)
    } catch(error){
        alert("Verifique todos os campos!")
    }

    hideQuest9()
}

function checkQuest10(){
    try{
        window.DemeterGrp10 = Number(document.querySelector('input[name="DemeterG10"]:checked').value)
        window.ArtemisGrp10 = Number(document.querySelector('input[name="ArtemisG10"]:checked').value)
        window.PersefoneGrp10 = Number(document.querySelector('input[name="PersefoneG10"]:checked').value)
        window.HeraGrp10 = Number(document.querySelector('input[name="HeraG10"]:checked').value)
        window.AfroditeGrp10 = Number(document.querySelector('input[name="AfroditeG10"]:checked').value)
        window.AtenaGrp10 = Number(document.querySelector('input[name="AtenaG10"]:checked').value)
        
        function hideQuest10(){
            document.getElementById('Quest10').style.display = 'none'
            document.getElementById('Quest11').style.display = 'block'
        }
        console.log(window.DemeterGrp10)
        console.log(window.ArtemisGrp10)
        console.log(window.PersefoneGrp10)
        console.log(window.HeraGrp10)
        console.log(window.AfroditeGrp10)
        console.log(window.AtenaGrp10)
    } catch (error){
        alert("Verifique todos os campos!")
    }
    hideQuest10()

}

function checkQuest11(){
    try{
        window.DemeterGrp11 = Number(document.querySelector('input[name="DemeterG11"]:checked').value)
        window.ArtemisGrp11 = Number(document.querySelector('input[name="ArtemisG11"]:checked').value)
        window.PersefoneGrp11 = Number(document.querySelector('input[name="PersefoneG11"]:checked').value)
        window.HeraGrp11 = Number(document.querySelector('input[name="HeraG11"]:checked').value)
        window.AfroditeGrp11 = Number(document.querySelector('input[name="AfroditeG11"]:checked').value)
        window.AtenaGrp11 = Number(document.querySelector('input[name="AtenaG11"]:checked').value)

        function hideQuest11(){
            document.getElementById('Quest11').style.display = 'none'
            document.getElementById('Quest12').style.display = 'block'
        }
        console.log(window.DemeterGrp11)
        console.log(window.ArtemisGrp11)
        console.log(window.PersefoneGrp11)
        console.log(window.HeraGrp11)
        console.log(window.AfroditeGrp11)
        console.log(window.AtenaGrp11)
    } catch(error) {
        alert('Verifique todos os campos!')
    }

    hideQuest11()
}

function checkQuest12(){
    try{
        window.DemeterGrp12 = Number(document.querySelector('input[name="DemeterG12"]:checked').value)
        window.ArtemisGrp12 = Number(document.querySelector('input[name="ArtemisG12"]:checked').value)
        window.PersefoneGrp12 = Number(document.querySelector('input[name="PersefoneG12"]:checked').value)
        window.HeraGrp12 = Number(document.querySelector('input[name="HeraG12"]:checked').value)
        window.AfroditeGrp12 = Number(document.querySelector('input[name="AfroditeG12"]:checked').value)
        window.AtenaGrp12 = Number(document.querySelector('input[name="AtenaG12"]:checked').value)

        function hideQuest12(){
            document.getElementById('Quest12').style.display = 'none'
            document.getElementById('Quest13').style.display = 'block'
        }
        console.log(window.DemeterGrp12)
        console.log(window.ArtemisGrp12)
        console.log(window.PersefoneGrp12)
        console.log(window.HeraGrp12)
        console.log(window.AfroditeGrp12)
        console.log(window.AtenaGrp12)
    } catch(error){
        alert('Verifique todos os campos!')
    }

    hideQuest12()
}

function checkQuest13(){
    try{
    window.DemeterGrp13 = Number(document.querySelector('input[name="DemeterG13"]:checked').value)
    window.ArtemisGrp13 = Number(document.querySelector('input[name="ArtemisG13"]:checked').value)
    window.PersefoneGrp13 = Number(document.querySelector('input[name="PersefoneG13"]:checked').value)
    window.HeraGrp13 = Number(document.querySelector('input[name="HeraG13"]:checked').value)
    window.AfroditeGrp13 = Number(document.querySelector('input[name="AfroditeG13"]:checked').value)
    window.AtenaGrp13 = Number(document.querySelector('input[name="AtenaG13"]:checked').value)
    function hideQuest13(){
        document.getElementById('Quest13').style.display = 'none'
        document.getElementById('Quest14').style.display = 'block'
    }
    console.log(window.DemeterGrp13)
    console.log(window.ArtemisGrp13)
    console.log(window.PersefoneGrp13)
    console.log(window.HeraGrp13)
    console.log(window.AfroditeGrp13)
    console.log(window.AtenaGrp13)
    } catch(error) {
        alert("Verifique todos os campos!")
    } 

    hideQuest13()
}

function checkQuest14(){
    try{
        window.DemeterGrp14 = Number(document.querySelector('input[name="DemeterG14"]:checked').value)
        window.ArtemisGrp14 = Number(document.querySelector('input[name="ArtemisG14"]:checked').value)
        window.PersefoneGrp14 = Number(document.querySelector('input[name="PersefoneG14"]:checked').value)
        window.HeraGrp14 = Number(document.querySelector('input[name="HeraG14"]:checked').value)
        window.AfroditeGrp14 = Number(document.querySelector('input[name="AfroditeG14"]:checked').value)
        window.AtenaGrp14 = Number(document.querySelector('input[name="AtenaG14"]:checked').value)
        
        function hideQuest14(){
            document.getElementById('Quest14').style.display = 'none'
            document.getElementById('Quest15').style.display = 'block'
        }

        console.log(window.DemeterGrp14)
        console.log(window.ArtemisGrp14)
        console.log(window.PersefoneGrp14)
        console.log(window.HeraGrp14)
        console.log(window.AfroditeGrp14)
        console.log(window.AtenaGrp14)
    } catch (error){
        alert('Verifique todos os campos!')
    }

    hideQuest14()
}

function enviarFinal(){
    window.email = document.getElementById('emailFinal').value

    window.at = window.AtenaGrp1 + window.AtenaGrp2 + window.AtenaGrp3 + window.AtenaGrp4 + window.AtenaGrp5 + window.AtenaGrp6 + window.AtenaGrp7 
              + window.AtenaGrp8 + window.AtenaGrp9 + window.AtenaGrp10 + window.AtenaGrp11 + window.AtenaGrp12 + window.AtenaGrp13 + window.AtenaGrp14 

    window.af = window.AfroditeGrp1 + window.AfroditeGrp2 + window.AfroditeGrp3 + window.AfroditeGrp4 + window.AfroditeGrp5 + window.AfroditeGrp6 + window.AfroditeGrp7
                + window.AfroditeGrp8 + window.AfroditeGrp9 + window.AfroditeGrp10 + window.AfroditeGrp11 + window.AfroditeGrp12 + window.AfroditeGrp13 + window.AfroditeGrp14
    
    window.pe = window.PersefoneGrp1 + window.PersefoneGrp2 + window.PersefoneGrp3 + window.PersefoneGrp4 + window.PersefoneGrp5 + window.PersefoneGrp6 + window.PersefoneGrp7
                + window.PersefoneGrp8 + window.PersefoneGrp9 + window.PersefoneGrp10 + window.PersefoneGrp11 + window.PersefoneGrp12 + window.PersefoneGrp13 + window.PersefoneGrp14
    
    window.ar = window.ArtemisGrp1 + window.ArtemisGrp2 + window.ArtemisGrp3 + window.ArtemisGrp4 + window.ArtemisGrp5 + window.ArtemisGrp6 + window.ArtemisGrp7 + window.ArtemisGrp8 + 
    window.ArtemisGrp9 + window.ArtemisGrp10 + window.ArtemisGrp11 + window.ArtemisGrp12 + window.ArtemisGrp13 + window.ArtemisGrp14
    
    window.de = window.DemeterGrp1 + window.DemeterGrp2 + window.DemeterGrp3 + window.DemeterGrp4 + window.DemeterGrp5 + window.DemeterGrp6 + window.DemeterGrp7 +
                window.DemeterGrp8 + window.DemeterGrp9 + window.DemeterGrp10 + window.DemeterGrp11 + window.DemeterGrp12 + window.DemeterGrp13 + window.DemeterGrp14

    window.he = window.HeraGrp1 + window.HeraGrp2 + window.HeraGrp3 + window.HeraGrp4 + window.HeraGrp5 + window.HeraGrp6 + window.HeraGrp7 + window.HeraGrp8 + window.HeraGrp9
                + window.HeraGrp10 + window.HeraGrp11 + window.HeraGrp12 + window.HeraGrp13 + window.HeraGrp14

    if (window.at <= 0){
        window.at = 0
    } if (window.af <= 0){
        window.af = 0
    } if (window.pe <= 0){
        window.pe = 0
    } if (window.ar <= 0){
        window.ar = 0
    } if (window.de <= 0){
        window.de = 0
    } if (window.he <= 0){
        window.he = 0
    } 
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validarEmail =  re.test(String(window.email).toLowerCase())




    if (validarEmail == false){
        alert("Tem algo de errado com o email informado!")
    } else {
        window.location.href='./insertsql.php?at='+ window.at + '&af=' + window.af + '&pe=' + window.pe + '&ar=' + window.ar + '&de=' + window.de + '&he=' + window.he + '&email=' + window.email
    }
}