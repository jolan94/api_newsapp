let allDiv = document.getElementById('news');

async function getNews() {
  await fetch('https://inshorts.deta.dev/news?category=all')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data['data']);
      let payload = data['data'];
      for (let i = 0; i < data['data'].length; i++) {
        console.log(payload[i]);
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'col-4');
        newDiv.setAttribute('class', 'newsitem');
        let title = document.createElement('p');
        title.innerText = payload[i]['title'];
        let img = document.createElement('img');
        img.setAttribute('width', '300px');
        img.setAttribute('height', '200px');
        img.setAttribute('src', payload[i]['imageUrl']);
        let time = document.createElement('p');
        time.innerText = payload[i]['time'];
        newDiv.append(img, time, title);
        rowDiv.append(newDiv);
        allDiv.append(rowDiv);
      }
    })
    .catch((err) => console.error(err));
}

getNews();
