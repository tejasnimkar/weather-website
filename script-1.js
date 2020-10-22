//on loading document show corousel of different cities
$(document).ready(function(){
  
    let apiKey='45a3da0996a6efdfee2c9b66f3062343'
    
    //api.openweathermap.org/data/2.5/group?id=1275339,1259229,1275004,1264527&appid=45a3da0996a6efdfee2c9b66f3062343
    let theUrl= 'http://api.openweathermap.org/data/2.5/group?id=1275339,1259229,1275004,1264527&appid=45a3da0996a6efdfee2c9b66f3062343'

    $.ajax({
        url:theUrl,
        type:'json',
        success:function(response){
        console.log(response)

    //     var result=[]
    //     result+=
    //     `<div class="col col-sm-12 col-md-4">

    //     <div class="card text-center">
    //     <div class="card-header text-info">
    //     <h5>${response.location.name},${response.location.region},${response.location.country}</h5>
    //     </div>
    //     <div class="card-body">
    //         <h5 class="card-title">${response.current.temp_c} degree C</h5>
    //         <p class="card-text">${response.current.condition.text},<img src="${response.current.condition.icon}"></p>
    //         <p class="card-text">wind_mph: ${response.current.wind_mph},wind_kph: ${response.current.wind_kph}</p>
          
    //     </div>
    //     <div class="card-footer text-muted">
    //     last updated: ${response.current.last_updated}
    //     </div>
    //     </div>

        
    //     </div>
    //     <div class="col-sm-12 col-md-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>

        
    //     `
    //     $('.row').empty()
    //     $('.row').append(result)
        }
   })



     })

