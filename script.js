function sendData() {
fetch('https://raw.githubusercontent.com/your-username/your-repo/master/data.json', {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
body: JSON.stringify({
  key1: 'value1',
  key2: 'value2'
})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

}