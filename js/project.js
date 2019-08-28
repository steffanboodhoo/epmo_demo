window.onload = () => {
    //set title to 
    const params = new URLSearchParams(window.location.search);
    const PROJECT = params.get('title');
    document.getElementById('project-title').append(PROJECT);

    //set up click events
    document.getElementById('btn_assess').addEventListener('click', ev => {
        console.log('click')
        window.location = `${window.location.origin}/assessment.html?title=${PROJECT}`
    })

    //setup charts
    const budget_dataset = [40000, 80000, 80000, 300000, 300000, 300000, 380000], progress_dataset = [0, 35, 45, 50, 60, 70, 75], labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const options = {
        title: {
            display: true,
            text: ''
        }
    }
    const create_chart = (elem_id, data, options) => {
        var ctx = document.getElementById(elem_id).getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: labels,
                datasets: [
                    {
                        label: PROJECT,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data
                    }
                ]
            },

            // Configuration options go here
            options: options,
        });
    }
    create_chart('chart_1', budget_dataset, {text:'Budget over time', ...options});
    create_chart('chart_2', progress_dataset, {text:'Progress over time', ...options});

}