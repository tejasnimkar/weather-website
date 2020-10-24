
//enable search button on entering something in input box
$(document).ready(function(){
    $('#searchInput').keyup(function(){
        
        //console.log('hi tejas')
        if($('#searchInput').val.length==0){
            console.log('disabled')
            $('#searchBtn').prop('disabled',true);    

        }else{
            $('#searchBtn').prop('disabled',false);
            console.log('enabled')
                    
            
        }
        

        
    })

})

// search city on button click
$('#searchBtn').click(function(){
    $('#cityName').empty()
    $('#cityTemp').empty()
    $('#lastUpdatedTime').empty()
    let searchKey=$('#searchInput').val().toLowerCase()        
     
    let apiKey='330f410d0d1340eca59170741202110'
 //   http://api.weatherapi.com/v1/forecast.json?key=330f410d0d1340eca59170741202110&q=London&days=1
    let theUrl='http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+searchKey.toString()+'&days=1'
    $.ajax(
        { 
            url:theUrl,
            success:function(response){
                console.log(response)
                //if day and if current temprature is less than 0
                if(response.current.is_day && response.current.temp_c<=0){
                    
                        $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityName').addClass('text-dark')
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background-2.jpg')",'background-repeat':'no-repeat'})
    
                }
                //if it is day and if current temprature is less than or equal to 20 and greater than zero
                if(response.current.is_day && response.current.temp_c<20 && response.current.temp_c>0){
                    
                    $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                    $('#cityTemp').append(response.current.temp_c)
                    $('#cityName').addClass('text-dark')
                    $('#lastUpdatedTime').append(response.current.last_updated)
                    $('.main-body').css({'background-image':"url('./assets/images/background/winter-background.jpg')",'background-repeat':'no-repeat'})

                }
                //if day and if current temprature is less than or equal to 40 and greater than twenty
                if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                    
                    $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                    $('#cityTemp').append(response.current.temp_c)
                    $('#cityName').addClass('text-dark')
                    $('#lastUpdatedTime').append(response.current.last_updated)
                    $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat'})

                }
                //if day and if current temprature is  greater than 40   
                if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                    
                    $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                    $('#cityTemp').append(response.current.temp_c)
                    $('#cityName').addClass('text-dark')
                    $('#lastUpdatedTime').append(response.current.last_updated)
                    $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat'})

                }
                
                //if it is night
                if(response.current.is_day==0){
                    console.log(response.current.is_day)
                    $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityHumidity').append(response.current.humidity)
                        $('#cityCurrentConditionText').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                        $('#cityWind').append(response.current.wind_mph)
                        $('#cityName').addClass('text-info')
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/night-background.jpg')",'background-repeat':'no-repeat'})
                        $('.text-dark').removeClass('text-dark').addClass('text-light')
                        $('.btn-outline-info').removeClass('btn-outline-info').addClass('btn-outline-light')
                        $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark')
                } 
                 

                

            

                
                
            }

        }
    )

    
})
 
