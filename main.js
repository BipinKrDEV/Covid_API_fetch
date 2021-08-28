function send(){
        let inputItem = document.querySelector('#inputText');
        var inputText = inputItem.value;

        var jsonUrl = 'https://data.covid19india.org/state_district_wise.json'

        var data = ''

        $.get(jsonUrl, function(data){

            console.log(data.Jharkhand.districtData[inputText].recovered)
            
            data = `
            <td>${data.Jharkhand.districtData[inputText].confirmed}</td>
            <td>${data.Jharkhand.districtData[inputText].recovered}</td>
            <td>${data.Jharkhand.districtData[inputText].deceased}</td>
            `

            $('#data').html(data)
        })
    }