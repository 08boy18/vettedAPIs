let coordinateX;
let coordinateY;



document.getElementById('submit_button').addEventListener('click', function(){
    input = document.getElementById('input_text').value;
    split_input = input.split(',')
    coordinateX = split_input[0]
    coordinateY = split_input[1]

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinateX}&longitude=${coordinateY}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("submit_button").addEventListener('click', function(){
            document.getElementById('temp_output').textContent = data.current.temperature_2m
            document.getElementById('humidity_output').textContent = data.current.temperature_2m

        })
    })

    
})

    