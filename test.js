function test(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/user");
    xhr.send();
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);} 
    else {
        console.log(`Error: ${xhr.status}`);
        }
    };
}


//大阪、東京、名古屋
let city_code_list = ["1853908","1850147","1856057"];
//それぞれの属性に対するリスト
let weather_list = [];
let city_list =[];
let temp_list = [];
let wind_list = [];
let img_list = ["osaka.png","tokyo.jpg","nagoya.png"];
let money_list =[10,20,30];
let stock_list = [57,87,45];
let API_Key = "ea53860b2e58c8aef630ff15eb8fdcff";
let requestURL;
function func(){
    for (let i=0;i<city_code_list.length;i++){
        requestURL = "https://api.openweathermap.org/data/2.5/weather?id=" + city_code_list[i] + "&appid=" + API_Key;
        //Ajax通信用のオブジェクト作成
        let xhr = new XMLHttpRequest();

        //通信方式にURLを設定
        xhr.open("GET",requestURL);
    
        //実行
        xhr.send();

        //通信ステータスが変わったら実行される関数
        //function()とすることでステータスが変わった時の処理を書いている？1
        xhr.onreadystatechange = function(){
            //通信完了チェック
            if(xhr.readyState == 4){
                SaveWeatherInfo(xhr.responseText);
            }
        }
    }
}

function SaveWeatherInfo(res){
    let obj = JSON.parse(res);
    weather_list.push(obj.weather[0].description);
    city_list.push(obj.name);
    temp_list.push(obj.main.temp-273.15);
    wind_list.push(obj.wind.speed)
}

function ShowWeather(response){
    //open weather apiのやつ
    /* objにはobj.キー値で値を参照できる */
    let obj = JSON.parse(response);
    let weather = obj.weather[0].description;
    let city = obj.name;
    let temp = obj.main.temp;
    let wind_s = obj.wind.speed;
    document.getElementById("weatherapi").innerText = "現在の" + city + "の天気は" + weather +"気温は" + temp-273.15 + "度です";
}

let a = [4,7,1,9,4];


function sample(){
    a.forEach(function(x){
        document.getElementById("sample_list").innerText = document.getElementById("sample_list").innerText + x + "\n"; 
    })
}

function table_create(){
    var table = document.getElementById("table_val");
    for(let i=0; i<city_code_list.length; i++){
        //新しい行を作成
        let newRow = table.insertRow();
    
        //新しいセルを作成、追加
        let cityCell = newRow.insertCell(0);
        let weatherCell = newRow.insertCell(1);
        let tempCell = newRow.insertCell(2);
        let windCell = newRow.insertCell(3);
        let imgCell = newRow.insertCell(4);
        let moneyCell = newRow.insertCell(5);
        let stockCell = newRow.insertCell(6);
        let buyCell = newRow.insertCell(7);
        imgCell.style.width = "100px";
        imgCell.style.height = "100px";

        cityCell.innerText = city_list[i];
        weatherCell.innerText = weather_list[i];
        tempCell.innerText = temp_list[i];
        windCell.innerText = wind_list[i];
        imgCell.innerHTML="<img src='images/"+ img_list[i] + "'></img>";
        moneyCell.innerText = money_list[i];
        stockCell.innerText = stock_list[i];
        buyCell.innerHTML = 
        `
        <input type="number" id="number_input${i}" name="number_input" min="1" max="100" step="1">
        <button data-index='${i}'  name='button'"+ i + " onclick='buyItem(event)'>購入</button>
        `
    }

}

function buyItem(e){
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
    var cell = table.rows[x].cells[6];
    cell.innerText = stock_list[x-1];
}
