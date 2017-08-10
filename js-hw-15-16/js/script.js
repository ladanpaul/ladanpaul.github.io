var content = document.getElementById('content');
var search = document.getElementById('search');
var button = document.getElementById('show');

button.addEventListener('click', show);
document.onkeypress = function(event){
  if((event.keyCode == 13) && (search.value.length >= 2)){
    show();
  }
}

function show(){
  var api = fetch('https://pixabay.com/api/?key=6023562-93bd63ca50a55f42f7d91ccd5&q='+search.value+'&per_page=35');
  api.then(function(response){
    if(response.ok){
      return response.json();
    } else {
      return false;
    }
  }).then(function(data){
    var result = data.hits.map(function (item){
      return "<img src="+item.webformatURL+'"'+'/>';
    });

    console.log('result: ', result);

    var hooliIMG = '';
     for(var i = 0; i < result.length; i++){
      hooliIMG += result[i];
    }
    content.innerHTML = hooliIMG;
    console.log('hooliIMG: ', hooliIMG);
  });
  api = fetch('https://pixabay.com/api/?key=6023562-93bd63ca50a55f42f7d91ccd5&q=');
  content.innerHTML = '';
}