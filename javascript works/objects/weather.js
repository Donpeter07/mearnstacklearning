var weather_data=[
    {district:"tvm",temp:31},
    {district:"ekm",temp:32},
    {district:"tsr",temp:29},
    {district:"idk",temp:19},
    {district:"tvm",temp:29},
    {district:"ekm",temp:30},
    {district:"tsr",temp:30},
    {district:"idk",temp:15}
]
var weather={}

for(let data of weather_data){
    //data= {district:"tvm",temp:31},
    let district_name=data.district
    let curr_temp=data.temp
    if(district_name in weather){
        old_temp=weather[district_name]
        if(old_temp>curr_temp){
            weather[district_name]=old_temp
        }

    }
    else{
        weather[district_name]=curr_temp;
    }
}
console.log(weather);

