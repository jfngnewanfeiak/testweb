function aaaa(){
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