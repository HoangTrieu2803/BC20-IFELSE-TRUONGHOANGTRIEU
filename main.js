/**
 * Khoi 1:
 * num1 (So thu 1)
 * num2 (So thu 2)
 * num3 (So thu 3)
 * Khoi 2:
 * B1: Lay gia tri tu form
 * B2: So sanh:
 * - Khai bao a b c
 * - Tim max roi gan vao c
 * - So sanh 2 so con lai roi gan vao b va a
 * B3: Xuat ket qua
 * Khoi3: Sap xep theo thu tu tang dan
 */


function Up(){
    var num1 = Number(document.getElementById("num1").value); 
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);
    var a=0 , b=0 , c=0;
    if(num1 > num2 && num1 > num3){
        c=num1;
        if(num2 > num3){
            b= num2;
            a = num3;
        }else{
            b = num3;
            a= num2;
        }
    }else if(num2 > num1 && num2 > num3){
        c = num2;
        if(num1> num3){
            b = num1;
            a = num3;
        }else{
            b = num3;
            a= num1;
        }
    }else if(num3 > num2 && num3 >num1){
        c = num3;
        if(num1 > num2){
            b = num1;
            a = num2;
        }else{
            b= num2;
            a= num1;
        }
    }
    document.getElementById("txtUp").innerHTML= "Thu tu tang dan:"+ a+"<"+b+"<"+c;
}
document.getElementById("btnUp").onclick = Up;

/**
 * Khoi 1:
 * member (thanh vien trong gia dinh)
 * Khoi 2:
 * B1: Xet TH1: neu member = "B" => Bo
 * B2: Xet TH2: neu member = "M" => Me
 * B3: Xet TH3: neu member = "A" => Anh trai
 * B4: TH con lai => Em gai
 * B5: Xuat ket qua
 * Khoi 3:
 * Chao hoi cac thanh vien trong gia dinh
 */

function Hello(){
    var member = document.getElementById("memberInput").value;
    
    if(member == "B"){
        document.getElementById("txtHi").innerHTML = "Xin chao Bo";
    }else if(member == "M"){
        document.getElementById("txtHi").innerHTML = "Xin chao Me";
    }else if(member == "A"){
        document.getElementById("txtHi").innerHTML = "Xin chao Anh Trai";
    }else{
        document.getElementById("txtHi").innerHTML = "Xin chao Em gai";
    }
}
document.getElementById("btnHi").onclick = Hello;
/**
 * Khoi 1:
 * num1 (So thu 1)
 * num2 (So thu 2)
 * num3 (So thu 3)
 * odd (So le)
 * even (So chan)
 * Khoi 2:
 * B1: Xet num1 neu la chan even tang 1 nguoc lai odd tang 1
 * B2: Xet num2 neu la chan even tang 1 nguoc lai odd tang 1
 * B3: Xet num3 neu la chan even tang 1 nguoc lai odd tang 1
 * B4: Xuat ket qua
 * Khoi 3:
 * Tim so chan va so le
 */

function Odd_Even(){
    var num1 = document.getElementById("number1").value; 
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var even =0;
    var odd =0;
    if(num1%2 == 0){
        even++;
    }else{
        odd++;
    }
    if(num2%2 == 0){
        even++;
    }else{
        odd++;
    }
    if(num3%2 == 0){
        even++;
    }else{
        odd++;
    }
    document.getElementById("txtOdd-Even").innerHTML = "Co "+even+" so chan va "+ odd +" so le";
}
document.getElementById("btnOdd-Even").onclick = Odd_Even;
/**
 * Khoi 1:
 * edge1 (canh 1)
 * edge2 (canh 2)
 * edge3 (canh 3)
 * Khoi 2:
 * B1: Xet 2 canh neu bang nhau => tam giac can
 * B2: Xet 3 canh neu bang nhau => tam giac deu
 * B3: Xet tam giac vuong bang cong thuc Pytago: edge3 ^2 = edge1 ^2 + edge2 ^2
 * B4: Xuat ket qua
 * Khoi 3:
 * Kiem tra loai tam giac
 */
function Triagle(){
    var edge1 = document.getElementById("edge1").value; 
    var edge2 = document.getElementById("edge2").value;
    var edge3 = document.getElementById("edge3").value;

    if( (edge1==edge2 && edge1!=edge3) || (edge2 == edge3 && edge2 != edge1) || (edge1 == edge3 && edge1 !=edge2)){
        document.getElementById("txtTriagle").innerHTML = "Tam giac can"
    }else if(edge1==edge2 && edge2 == edge3){
        document.getElementById("txtTriagle").innerHTML = "Tam giac deu"
    }else if(edge1*edge1== edge2*edge2 + edge3*edge3 || edge2*edge2== edge1*edge1 + edge3*edge3 || edge3*edge3== edge2*edge2 + edge1*edge1){
        document.getElementById("txtTriagle").innerHTML = "Tam giac vuong"
    }else{
        document.getElementById("txtTriagle").innerHTML = "Tam giac khac"
    }
}
document.getElementById("btnTriagle").onclick = Triagle;