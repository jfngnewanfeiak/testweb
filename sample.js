// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// const { default: test } = require("node:test");

// console.log(obj.count)
// console.log(obj.result)

// require("dotenv").config();
// let api = process.env.OPEN_WEATHER_API_KEY
// console.log(api)

// var test_array = new Array("apple","grape","banana");

// var b = [1,2,3];
// test_array.push("orange")
// b[1]
// node js では下記一文が必要
var XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();
xhr.open("PUT", "http://localhost:3000/:id");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

function bbbb(){
    var table = document.getElementById("table_val");
    //新しい行を作成
    let newRow = table.insertRow();
    
    //新しいセルを作成、追加
    let cityCell = newRow.insertCell(0);
    let img = document.createElement("img");
    cityCell.innerHTML="<img src='images/"+ aaaa[0] + "'></img>";

    let tokyo = newRow.insertCell(1);
    let tokyoimg = document.createElement("img");
    tokyo.innerHTML="<img src='images/"+ aaaa[1] +"'></img>";

    let nagoya = newRow.insertCell(2);
    let nagoyaimg = document.createElement("img");
    nagoya.innerHTML="<img src='images/"+ aaaa[2] +"'></img>";

    // cityCell.appendChile(img);
    // document.getElementById
}

money_list =[10,20,30];
stock_list = [57,87,45];
function cccc(){
    var table = document.getElementById("table_val");
    
    for(let i=0;i<3;i++){
        //新しい行を作成
        let newRow = table.insertRow();

        //新しいセルを作成、追加
        let imgCell = newRow.insertCell(0);
        let moneyCell = newRow.insertCell(1);
        let stock = newRow.insertCell(2);
        let buy = newRow.insertCell(3);

        imgCell.innerHTML="<img src='images/"+ aaaa[i] + "'></img>";
        moneyCell.innerText = money_list[i];
        stock.innerText = stock_list[i];
        // buy.innerHTML = "<input type='button' value='購入' onclick='dddd()'></input>"
        // ${}　このリテラルを使うにはバッククォートで文全体を囲むことが必要 ``
        buy.innerHTML = 
        `
        <input type="number" id="number_input${i}" name="number_input" min="1" max="100" step="1">
        <button data-index='${i}'  name='button'"+ i + " onclick='dddd(event)'>購入</button>
        `
    }
        
}

function dddd(e){
    x=e.currentTarget.dataset['index'];
    m = "number_input" + x;
    //numberに保存されている数字を引き抜く
    number = document.getElementById(m).value;
    
    document.getElementById("val").innerText = x + "を通った" + number +"個";
    stock_list[x] = stock_list[x] - number;
    updatestock(x);
}

function updatestock(x){
    x++; // なぜか[x+1]だとcellのとこでエラーが出る
    var table = document.getElementById("table_val");
    var cell = table.rows[x].cells[2];
    cell.innerText = stock_list[x-1];
}