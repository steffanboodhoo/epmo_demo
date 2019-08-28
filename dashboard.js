window.onload = () => {
    //set title to url param
    const params = new URLSearchParams(window.location.search);
    document.getElementById('program-title').append(params.get('title'));

    // let elem_id = 'chart_first';
    const create_chart = (elem_id) => {
        var ctx = document.getElementById(elem_id).getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {}
        });
    }
    create_chart('chart_first')
    create_chart('chart_second')
    create_chart('chart_third')
}