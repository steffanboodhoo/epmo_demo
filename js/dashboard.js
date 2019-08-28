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
                datasets: [
                    {
                        label: 'Project A',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [40, 40, 50, 70, 70, 75, 80]
                    },
                    {
                        label: 'Project B',
                        backgroundColor: '#3f88fc',
                        borderColor: '#0f53bf',
                        data: [10, 10, 70, 75, 80, 90, 100]
                    }
                ]
            },

            // Configuration options go here
            options:{
                title: {
                    display: true,
                    text: 'Cost over time'
                },
                events:['click'],
                onClick: (...args) => {
                    console.log(args)
                    const chart_data = args[1];//an array of data for each graph
                    console.log(chart_data[0])//first graph; 0 would be the dataset index
                    console.log(chart_data[0]._index)//clicked index; this is the point in data we clicked
                    console.log(chart_data[0]._chart.data)
                }
            },
        });
    }
    create_chart('chart_first')
    create_chart('chart_second')
    create_chart('chart_third')
}