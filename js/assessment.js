window.onload = () => {
    //set title to 
    const params = new URLSearchParams(window.location.search);
    const PROJECT = params.get('title');
    document.getElementById('project-title').append(PROJECT);

    window.setTimeout(() => {
        document.getElementById('assessment-design_quality-val').innerText = document.getElementById('assessment-design_quality').value;
        document.getElementById('assessment-delivery_quality-val').innerText = document.getElementById('assessment-delivery_quality').value;
        document.getElementById('assessment-execution_quality-val').innerText = document.getElementById('assessment-execution_quality').value;
    }, 0)
    document.getElementById('assessment-design_quality').addEventListener('change', ev => {
        document.getElementById('assessment-design_quality-val').innerText = ev.target.value;
    })
    document.getElementById('assessment-delivery_quality').addEventListener('change', ev => {
        document.getElementById('assessment-delivery_quality-val').innerText = ev.target.value;
    })
    document.getElementById('assessment-execution_quality').addEventListener('change', ev => {
        document.getElementById('assessment-execution_quality-val').innerText = ev.target.value;
    })

    document.getElementById('assessment_submit').addEventListener('click', ev => {
        ev.preventDefault();
        const design = parseInt(document.getElementById('assessment-design_quality').value), delivery = parseInt(document.getElementById('assessment-delivery_quality').value), execution = parseInt(document.getElementById('assessment-delivery_quality').value);
        const overall = (design + delivery + execution) / 3.0;
        let data = Cookies.getJSON(PROJECT);
        console.log(data);
        if (data === undefined) {
            data = { count:1, average: overall, score: [{ design, delivery, execution }] }
        }else{
            const new_average = (data.count * data.average + overall) / (data.count + 1)
            data.count += 1, data.score.push({ design, delivery, execution }), data.average=new_average;
        }
        console.log(data);
        Cookies.set(PROJECT, data);
    })

}
