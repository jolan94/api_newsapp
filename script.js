let allDiv = document.getElementById('news');
let rowDiv = document.getElementById('rowdiv');

async function getNews() {
  await fetch('https://inshorts.deta.dev/news?category=all')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data['data']);
      let payload = data['data'];
      for (let i = 0; i < data['data'].length; i++) {
        console.log(payload[i]);
        let colDiv = document.createElement('div');
        colDiv.classList.add('newscol', 'col-lg-3', 'col-md-4', 'col-sm-6');
        let newDiv = document.createElement('div');
        colDiv.classList.add('newsitem');
        let title = document.createElement('p');
        title.innerText = payload[i]['title'];
        title.classList.add('newstitle');
        let img = document.createElement('img');
        img.classList.add('newsimg');
        img.setAttribute('id', 'newsimg');
        img.setAttribute('src', payload[i]['imageUrl']);
        let time = document.createElement('p');
        time.innerText = payload[i]['time'];
        time.classList.add('time');
        newDiv.append(img, time, title);
        colDiv.append(newDiv);
        rowDiv.append(colDiv);
      }
    })
    .catch((err) => console.error(err));
}

getNews();
