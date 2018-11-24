var generateXO=document.getElementById("GenerateXO") //berupa label
var curSaldo=document.getElementById("CurSaldo") //berupa label
var button=document.getElementById("button") // berupa button
var choose=document.getElementsByName("XO") // berupa text input
var bet=document.getElementById("Bet") // berupa text input
var saldo=500 //saldo awal
var generateXOstr='' 
//console.log(choose)

button.addEventListener('click', function(e){
    e.preventDefault()
    if(saldo<100){
        alert("You are bankrupt , please relogin ")
    }else if(!choose[0].checked && !choose[1].checked){
        alert("Choose X or O to Wins")
    }else if(bet.value<100){
        alert("Minimum Bet is 100$")
    }else{
        generateXOstr= RgenerateXO()
        generateXO.innerHTML=generateXOstr //memasukkan nilai generate xo kedalam html
        //console.log(generateXOstr)
        curSaldo.innerHTML=saldo // memasukkan nilai saldo kedalam html
        var countX=0
        var countO=0
        var xWins=false
        var oWins=false
        var chooseVal=''
        //mencari nilai count x dan count o
        for(var i=0;i<generateXOstr.length;i++){
                if(generateXOstr[i]=='X')
                    countX++
                else
                    countO++
        }
        if(countX>countO){
                xWins=true
        }else{
                oWins=true
        }
        //mencari pilihan yang dipilih user
        for(var j=0;j<choose.length;j++){
            if(choose[j].checked){
                chooseVal=choose[j].value
            }
        }
        //dari pilihan dan yang menang akan memberikan output 
        if(xWins&&chooseVal=='X'){
            saldo+=Number(bet.value)
            curSaldo.innerHTML=saldo
            alert("Selamat X menang dan anda memenangkan total duit sebesar "+bet.value)
        }else if(xWins &&chooseVal=='O'){
            saldo-=Number(bet.value)
            curSaldo.innerHTML=saldo
            alert("Maaf Anda Kurang beruntung X menang , Silahkan Coba lagi")
        }else if(oWins &&chooseVal=='X'){
            saldo-=Number(bet.value)
            curSaldo.innerHTML=saldo
            alert("Maaf Anda Kurang beruntung O menang , Silahkan Coba lagi")
        }else if(oWins && chooseVal=='O'){
            saldo+=Number(bet.value)
            curSaldo.innerHTML=saldo
            alert("Selamat O menang dan anda memenangkan total duit sebesar "+bet.value)
        }else{
            alert("error")
        }

    }
})
// Function ini digunakan untunk menggenerate nilai XO yang dirandom
function RgenerateXO(){
    var tempcheckWin=false
    var tempStr=''
    var xo='XO'
        for(var i=0;tempcheckWin!=true;i++){
            tempStr+=xo.charAt(~~(Math.random()* xo.length))
                if(tempStr.charAt(i)==='X'&&tempStr.charAt(i-1)==='X'&&tempStr.charAt(i-2)==='X'){
                    tempcheckWin=true;
                  
                }else if(tempStr.charAt(i)==='O'&&tempStr.charAt(i-1)==='O'&&tempStr.charAt(i-2)==='O'){
                    tempcheckWin=true 
                } 
        }  
        return tempStr 
}
