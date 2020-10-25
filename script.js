//get couresel of multiple cities for city-1
$(document).ready(function(){
    //empty the tags occupied first
    $('#cityIndividual').hide()
    $('#cityIndividualWeather').hide()    
    let citySearchName=$('#cityName-1').text()
    console.log(citySearchName)
    let apiKey='330f410d0d1340eca59170741202110'
    //http://api.weatherapi.com/v1/current.json?key=330f410d0d1340eca59170741202110&q=London
    let theUrl='http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+citySearchName.toString()
    $.ajax(
        { 
            url:theUrl,
            success:function(response){
                console.log(response)
                //if day and if current temprature is less than 0
                if(response.current.is_day && response.current.temp_c<=0){
                        $('#cityName-1').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-1').append(response.current.temp_c)
                        $('#cityHumidity-1').append(response.current.humidity)
                        $('#cityCurrentConditionText-1').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-1').attr("src",response.current.condition.icon)
                        $('#cityName-1').addClass('text-dark')
                        $('#lastUpdatedTime-1').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background-2.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if it is day and if current temprature is less than or equal to 20 and greater than zero
                if(response.current.is_day && response.current.temp_c<20 && response.current.temp_c>0){
                        $('#cityName-1').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-1').append(response.current.temp_c)
                        $('#cityHumidity-1').append(response.current.humidity)
                        $('#cityCurrentConditionText-1').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-1').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-1').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is less than or equal to 40 and greater than twenty
                if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                        console.log('hi sunday')
                        $('#cityName-1').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-1').append(response.current.temp_c)
                        $('#cityHumidity-1').append(response.current.humidity)
                        $('#cityCurrentConditionText-1').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-1').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-1').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is  greater than 40   
                if(response.current.is_day && response.current.temp_c>40){
                        console.log('hi sunday-1')
                        $('#cityName-1').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country).addClass('text-warning')
                        $('#cityTemp-1').append(response.current.temp_c)
                        $('#cityHumidity-1').append(response.current.humidity)
                        $('#cityCurrentConditionText-1').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-1').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-1').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                
                //if it is night
                if(response.current.is_day==0){
                        console.log(response.current.is_day)
                        $('#cityName-1').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-1').append(response.current.temp_c)
                        $('#cityHumidity-1').append(response.current.humidity)
                        $('#cityCurrentConditionText-1').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-1').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-1').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/night-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-dark').removeClass('text-dark').addClass('text-light')
                        $('.btn-outline-info').removeClass('btn-outline-info').addClass('btn-outline-light')
                        $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark')
                }

                    //convert degree celcius to ferhenite
                        $(document).ready(function(){        
                        $('#btnDegreeF-1').hide() //by default to convert ferhenite in degree  is hidden
                        $('#btnDegreeC-1').click(function(){ //when user clicks on degree c
                            $('#cityTemp-1').empty().prepend(response.current.temp_f)
                            $('#btnDegreeF-1').show()
                            $('#btnDegreeC-1').hide()
                            $(document).ready(function(){
                                $('#btnDegreeC-1').hide()
                                $('#btnDegreeF-1').click(function(){ //when user clicks on degree c
                                    $('#btnDegreeF-1').hide() 
                                    $('#cityTemp-1').empty().prepend(response.current.temp_c)
                                    $('#btnDegreeC-1').show()
                                })
                            })
                        })
                    })
         }



})
})

//get couresel of multiple cities for city-2
$(document).ready(function(){
    $('#cityIndividual').hide()
    $('#cityIndividualWeather').hide()
    let citySearchName=$('#cityName-2').text()
    console.log(citySearchName)    
    let apiKey='330f410d0d1340eca59170741202110'
    //http://api.weatherapi.com/v1/current.json?key=330f410d0d1340eca59170741202110&q=London
    let theUrl='http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+citySearchName.toString()
    $.ajax(
        { 
            url:theUrl,
            success:function(response){
                console.log(response)
                //if day and if current temprature is less than 0
                if(response.current.is_day && response.current.temp_c<=0){
                        $('#cityName-2').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-2').append(response.current.temp_c)
                        $('#cityHumidity-2').append(response.current.humidity)
                        $('#cityCurrentConditionText-2').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-2').attr("src",response.current.condition.icon)
                        $('#cityName-2').addClass('text-dark')
                        $('#lastUpdatedTime-2').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background-2.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if it is day and if current temprature is less than or equal to 20 and greater than zero
                if(response.current.is_day && response.current.temp_c<20 && response.current.temp_c>0){
                        $('#cityName-2').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-2').append(response.current.temp_c)
                        $('#cityHumidity-2').append(response.current.humidity)
                        $('#cityCurrentConditionText-2').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-2').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-2').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is less than or equal to 40 and greater than twenty
                if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                        console.log('hi sunday')
                        $('#cityName-2').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-2').append(response.current.temp_c)
                        $('#cityHumidity-2').append(response.current.humidity)
                        $('#cityCurrentConditionText-2').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-2').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-2').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is  greater than 40   
                if(response.current.is_day && response.current.temp_c>40){
                        console.log('hi sunday-1')
                        $('#cityName-2').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country).addClass('text-warning')
                        $('#cityTemp-2').append(response.current.temp_c)
                        $('#cityHumidity-2').append(response.current.humidity)
                        $('#cityCurrentConditionText-2').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-2').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-2').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                
                //if it is night
                if(response.current.is_day==0){
                        console.log(response.current.is_day)
                        $('#cityName-2').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-2').append(response.current.temp_c)
                        $('#cityHumidity-2').append(response.current.humidity)
                        $('#cityCurrentConditionText-2').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-2').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-2').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/night-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-dark').removeClass('text-dark').addClass('text-light')
                        $('.btn-outline-info').removeClass('btn-outline-info').addClass('btn-outline-light')
                        $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark')
                }       
                
                //convert degree celcius to ferhenite
                $(document).ready(function(){
                    $('#btnDegreeF-2').hide() //by default to convert ferhenite in degree  is hidden
                    $('#btnDegreeC-2').click(function(){ //when user clicks on degree c
                        $('#cityTemp-2').empty().prepend(response.current.temp_f)
                        $('#btnDegreeF-2').show()
                        $('#btnDegreeC-2').hide()
                        $(document).ready(function(){
                            $('#btnDegreeC-2').hide()
                            $('#btnDegreeF-2').click(function(){ //when user clicks on degree c
                                $('#btnDegreeF-2').hide() 
                                $('#cityTemp-2').empty().prepend(response.current.temp_c)
                                $('#btnDegreeC-2').show()
                            })
                        })
                    })
                })
         }
})
})

//get couresel of multiple cities for city-3
$(document).ready(function(){
    $('#cityIndividual').hide()
    $('#cityIndividualWeather').hide()
    let citySearchName=$('#cityName-3').text()
    console.log(citySearchName)
    let apiKey='330f410d0d1340eca59170741202110'
    //http://api.weatherapi.com/v1/current.json?key=330f410d0d1340eca59170741202110&q=London
    let theUrl='http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+citySearchName.toString()
    $.ajax(
        { 
            url:theUrl,
            success:function(response){
                console.log(response)
                //if day and if current temprature is less than 0
                if(response.current.is_day && response.current.temp_c<=0){
                        $('#cityName-3').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-3').append(response.current.temp_c)
                        $('#cityHumidity-3').append(response.current.humidity)
                        $('#cityCurrentConditionText-3').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-3').attr("src",response.current.condition.icon)
                        $('#cityName-3').addClass('text-dark')
                        $('#lastUpdatedTime-3').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background-2.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if it is day and if current temprature is less than or equal to 20 and greater than zero
                if(response.current.is_day && response.current.temp_c<20 && response.current.temp_c>0){
                        $('#cityName-3').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-3').append(response.current.temp_c)
                        $('#cityHumidity-3').append(response.current.humidity)
                        $('#cityCurrentConditionText-3').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-3').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-3').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is less than or equal to 40 and greater than twenty
                if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                        console.log('hi sunday')
                        $('#cityName-3').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-3').append(response.current.temp_c)
                        $('#cityHumidity-3').append(response.current.humidity)
                        $('#cityCurrentConditionText-3').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-3').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-3').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is  greater than 40   
                if(response.current.is_day && response.current.temp_c>40){
                    console.log('hi sunday-1')
                        $('#cityName-3').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country).addClass('text-warning')
                        $('#cityTemp-3').append(response.current.temp_c)
                        $('#cityHumidity-3').append(response.current.humidity)
                        $('#cityCurrentConditionText-3').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-3').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-3').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if it is night
                if(response.current.is_day==0){
                        console.log(response.current.is_day)
                        $('#cityName-3').empty().append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp-3').append(response.current.temp_c)
                        $('#cityHumidity-3').append(response.current.humidity)
                        $('#cityCurrentConditionText-3').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon-3').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime-3').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/night-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-dark').removeClass('text-dark').addClass('text-light')
                        $('.btn-outline-info').removeClass('btn-outline-info').addClass('btn-outline-light')
                        $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark')
                } 
                $(document).ready(function(){
                    $('#btnDegreeF-3').hide() //by default to convert ferhenite in degree  is hidden
                    $('#btnDegreeC-3').click(function(){ //when user clicks on degree c
                        $('#cityTemp-3').empty().prepend(response.current.temp_f)
                        $('#btnDegreeF-3').show()
                        $('#btnDegreeC-3').hide()
                        $(document).ready(function(){
                            $('#btnDegreeC-3').hide()
                            $('#btnDegreeF-3').click(function(){ //when user clicks on degree c
                                $('#btnDegreeF-3').hide() 
                                $('#cityTemp-3').empty().prepend(response.current.temp_c)
                                $('#btnDegreeC-3').show()
                            })
                        })
                    })
                })
         }
})
})

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
    //making every tag empty first
    $('#cityIndividual').show()
    $('#cityIndividualWeather').show()
    $('#citiesCarousel').hide()
    $('#cityName').empty()
    $('#cityTemp').empty()
    $('#cityHumidity').empty()
    $('#lastUpdatedTime').empty()
    $('#cityCurrentConditionText').empty()
    $('#cityCurrentConditionIcon').empty()
    let searchKey=$('#searchInput').val().toLowerCase()
    let apiKey='330f410d0d1340eca59170741202110'
 //   http://api.weatherapi.com/v1/forecast.json?key=330f410d0d1340eca59170741202110&q=London&days=1
    let theUrl='http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+searchKey.toString()+'&days=3'
    $.ajax(
        { 
            url:theUrl,
            success:function(response){
                console.log(response)
                //if day and if current temprature is less than 0
                if(response.current.is_day && response.current.temp_c<=0){
                    
                        $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityHumidity').append(response.current.humidity)
                        $('#cityCurrentConditionText').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                        $('#cityName').addClass('text-dark')
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background-2.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if it is day and if current temprature is less than or equal to 20 and greater than zero
                if(response.current.is_day && response.current.temp_c<20 && response.current.temp_c>0){
                        $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityHumidity').append(response.current.humidity)
                        $('#cityCurrentConditionText').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/winter-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is less than or equal to 40 and greater than twenty
                if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                        console.log('hi sunday')
                        $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityHumidity').append(response.current.humidity)
                        $('#cityCurrentConditionText').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                //if day and if current temprature is  greater than 40   
                if(response.current.is_day && response.current.temp_c>40){
                        console.log('hi sunday-1')
                        $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country).addClass('text-warning')
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityHumidity').append(response.current.humidity)
                        $('#cityCurrentConditionText').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-light').removeClass('text-light').addClass('text-dark')
                        $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                        $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                }
                
                //if it is night
                if(response.current.is_day==0){
                        console.log(response.current.is_day)
                        $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                        $('#cityTemp').append(response.current.temp_c)
                        $('#cityHumidity').append(response.current.humidity)
                        $('#cityCurrentConditionText').append(response.current.condition.text)
                        $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                        $('#lastUpdatedTime').append(response.current.last_updated)
                        $('.main-body').css({'background-image':"url('./assets/images/background/night-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                        $('.text-dark').removeClass('text-dark').addClass('text-light')
                        $('.btn-outline-info').removeClass('btn-outline-info').addClass('btn-outline-light')
                        $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark')
                } 

                $(document).ready(function(){
                    $('#btnDegreeF-4').hide() //by default to convert ferhenite in degree  is hidden
                    $('#btnDegreeC-4').click(function(){ //when user clicks on degree c
                        $('#cityTemp').empty().prepend(response.current.temp_f)
                        $('#btnDegreeF-4').show()
                        $('#btnDegreeC-4').hide()
                        $(document).ready(function(){
                            $('#btnDegreeC-4').hide()
                            $('#btnDegreeF-4').click(function(){ //when user clicks on degree c
                                $('#btnDegreeF-4').hide() 
                                $('#cityTemp').empty().prepend(response.current.temp_c)
                                $('#btnDegreeC-4').show()
                            })
                        })
                    })
                })
                //console.log(response.forecast.forecastday[0].day.maxtemp_c)
                //console.log(response.forecast.forecastday[0].day.avgtemp_c)
                //console.log(response.forecast.forecastday[0].day.mintemp_c)
                google.charts.load('current', {'packages':['bar']});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                var data = google.visualization.arrayToDataTable([
                ['Daily Forecast', 'Avg-Humidity', 'Max-temp', 'Avg-Temp','Min-Temp'],
                ['Today',response.forecast.forecastday[0].day.avghumidity,response.forecast.forecastday[0].day.maxtemp_c, response.forecast.forecastday[0].day.avgtemp_c,response.forecast.forecastday[0].day.mintemp_c],
                ['Tommorrow',response.forecast.forecastday[1].day.avghumidity,response.forecast.forecastday[1].day.maxtemp_c, response.forecast.forecastday[1].day.avgtemp_c,response.forecast.forecastday[1].day.mintemp_c],
                ['Nexter Day', response.forecast.forecastday[2].day.avghumidity,response.forecast.forecastday[2].day.maxtemp_c, response.forecast.forecastday[2].day.avgtemp_c,response.forecast.forecastday[2].day.mintemp_c]
                ]);

                var options = {
                chart: {
                    title: 'For Next Few Days',
                },
                bars: 'vertical' // Required for Material Bar Charts.
                };

                var chart = new google.charts.Bar(document.getElementById('barchart_material'));
                chart.draw(data, google.charts.Bar.convertOptions(options));
            }
            //redraw the chart according to window size 
                $( window ).resize(function() {
                    drawChart()
                });
            }
        }
    )
})
 
//get current location and show data accordingly
$('#locationBtn').click(function(){
    //making every tag empty first
    $('#cityIndividual').show()
    $('#cityIndividualWeather').show()
    $('#citiesCarousel').hide()
    $('#cityName').empty()
    $('#showLocationName').empty()
    $('#cityName').empty()
    $('#cityTemp').empty()
    $('#cityHumidity').empty()
    $('#lastUpdatedTime').empty()
    $('#cityCurrentConditionText').empty()
    $('#cityCurrentConditionIcon').empty()
    $('#showLocationName').empty()
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position) {
            //console.log(position.coords.latitude)
            //console.log(position.coords.longitude)
            let latLongSearch = `${position.coords.latitude}`+','+`${position.coords.longitude}`
            let apiKey='330f410d0d1340eca59170741202110'
            //   http://api.weatherapi.com/v1/forecast.json?key=330f410d0d1340eca59170741202110&q=London&days=1
            let theUrl='http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+latLongSearch+'&days=3'
               $.ajax(
                   { 
                       url:theUrl,
                       success:function(response){
                           console.log(response)
                           //if day and if current temprature is less than 0
                           if(response.current.is_day && response.current.temp_c<=0){
                            $('#showLocationName').append(response.location.name)
                                   $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                                   $('#cityTemp').append(response.current.temp_c)
                                   $('#cityHumidity').append(response.current.humidity)
                                   $('#cityCurrentConditionText').append(response.current.condition.text)
                                   $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                                   $('#cityName').addClass('text-dark')
                                   $('#lastUpdatedTime').append(response.current.last_updated)
                                   $('.main-body').css({'background-image':"url('./assets/images/background/winter-background-2.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                                   $('.text-light').removeClass('text-light').addClass('text-dark')
                                   $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                                   $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                           }
                           //if it is day and if current temprature is less than or equal to 20 and greater than zero
                           if(response.current.is_day && response.current.temp_c<20 && response.current.temp_c>0){
                            $('#showLocationName').append(response.location.name)
                                   $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                                   $('#cityTemp').append(response.current.temp_c)
                                   $('#cityHumidity').append(response.current.humidity)
                                   $('#cityCurrentConditionText').append(response.current.condition.text)
                                   $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                                   $('#lastUpdatedTime').append(response.current.last_updated)
                                   $('.main-body').css({'background-image':"url('./assets/images/background/winter-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                                   $('.text-light').removeClass('text-light').addClass('text-dark')
                                   $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                                   $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                           }
                           //if day and if current temprature is less than or equal to 40 and greater than twenty
                           if(response.current.is_day && response.current.temp_c>20 && response.current.temp_c<=40){
                                   console.log('hi sunday')
                                   $('#showLocationName').append(response.location.name)
                                   $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                                   $('#cityTemp').append(response.current.temp_c)
                                   $('#cityHumidity').append(response.current.humidity)
                                   $('#cityCurrentConditionText').append(response.current.condition.text)
                                   $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                                   $('#lastUpdatedTime').append(response.current.last_updated)
                                   $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                                   $('.text-light').removeClass('text-light').addClass('text-dark')
                                   $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                                   $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                           }
                           //if day and if current temprature is  greater than 40   
                           if(response.current.is_day && response.current.temp_c>40){
                               console.log('hi sunday-1')
                               $('#showLocationName').append(response.location.name)
                                   $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country).addClass('text-warning')
                                   $('#cityTemp').append(response.current.temp_c)
                                   $('#cityHumidity').append(response.current.humidity)
                                   $('#cityCurrentConditionText').append(response.current.condition.text)
                                   $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                                   $('#lastUpdatedTime').append(response.current.last_updated)
                                   $('.main-body').css({'background-image':"url('./assets/images/background/sunny-beach.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                                   $('.text-light').removeClass('text-light').addClass('text-dark')
                                   $('.btn-outline-light').removeClass('btn-outline-light').addClass('btn-outline-info')
                                   $('.navbar-dark').removeClass('navbar-dark').addClass('navbar-light')
                           }
                           
                           //if it is night
                           if(response.current.is_day==0){          
                                   console.log(response.current.is_day)
                                   $('#showLocationName').append(response.location.name)                       
                                   $('#cityName').append(response.location.name).append(',').append(response.location.region).append(',').append(response.location.country)
                                   $('#cityTemp').append(response.current.temp_c)
                                   $('#cityHumidity').append(response.current.humidity)
                                   $('#cityCurrentConditionText').append(response.current.condition.text)
                                   $('#cityCurrentConditionIcon').attr("src",response.current.condition.icon)
                                   $('#lastUpdatedTime').append(response.current.last_updated)
                                   $('.main-body').css({'background-image':"url('./assets/images/background/night-background.jpg')",'background-repeat':'no-repeat','background-size': 'auto'})
                                   $('.text-dark').removeClass('text-dark').addClass('text-light')
                                   $('.btn-outline-info').removeClass('btn-outline-info').addClass('btn-outline-light')
                                   $('.navbar-light').removeClass('navbar-light').addClass('navbar-dark')
                           } 
                           
                            $(document).ready(function(){
                            $('#btnDegreeF-4').hide() //by default to convert ferhenite in degree  is hidden
                            $('#btnDegreeC-4').click(function(){ //when user clicks on degree c
                                $('#cityTemp').empty().prepend(response.current.temp_f)
                                $('#btnDegreeF-4').show()
                                $('#btnDegreeC-4').hide()
                                $(document).ready(function(){
                                    $('#btnDegreeC-4').hide()
                                    $('#btnDegreeF-4').click(function(){ //when user clicks on degree c
                                        $('#btnDegreeF-4').hide() 
                                        $('#cityTemp').empty().prepend(response.current.temp_c)
                                        $('#btnDegreeC-4').show()
                                    })
                                })        
                            })
                        })
                        //   console.log(response.forecast.forecastday[0].day.maxtemp_c)
                        //   console.log(response.forecast.forecastday[0].day.avgtemp_c)
                        //   console.log(response.forecast.forecastday[0].day.mintemp_c)
                           
                           google.charts.load('current', {'packages':['bar']});
                           google.charts.setOnLoadCallback(drawChart);
           
                           function drawChart() {
                           var data = google.visualization.arrayToDataTable([
                           ['Daily Forecast', 'Avg-Humidity', 'Max-temp', 'Avg-Temp','Min-Temp'],
                           ['Today',response.forecast.forecastday[0].day.avghumidity,response.forecast.forecastday[0].day.maxtemp_c, response.forecast.forecastday[0].day.avgtemp_c,response.forecast.forecastday[0].day.mintemp_c],
                           ['Tommorrow',response.forecast.forecastday[1].day.avghumidity,response.forecast.forecastday[1].day.maxtemp_c, response.forecast.forecastday[1].day.avgtemp_c,response.forecast.forecastday[1].day.mintemp_c],
                           ['Nexter Day', response.forecast.forecastday[2].day.avghumidity,response.forecast.forecastday[2].day.maxtemp_c, response.forecast.forecastday[2].day.avgtemp_c,response.forecast.forecastday[2].day.mintemp_c]
                           ]);
           
                           var options = {
                           chart: {
                               title: 'For Next Few Days',
                           },
                           bars: 'vertical' // Required for Material Bar Charts.
                           };
           
                           var chart = new google.charts.Bar(document.getElementById('barchart_material'));
           
                           chart.draw(data, google.charts.Bar.convertOptions(options));
                       }
                            //redraw the chart according to window size 
                            $( window ).resize(function() {
                                drawChart()
                                });
                            }  
                   }
               )
           
        } 
      }else
      {
          alert('Geolocation is not supported by this browser.')
      }
})