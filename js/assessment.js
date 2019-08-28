window.onload = () => {
    //set title to 
    const params = new URLSearchParams(window.location.search);
    const PROJECT = params.get('title');
    document.getElementById('project-title').append(PROJECT);

    window.setTimeout(()=>{
        document.getElementById('assessment-design_quality-val').innerText=document.getElementById('assessment-design_quality').value;
        document.getElementById('assessment-delivery_quality-val').innerText=document.getElementById('assessment-delivery_quality').value;
        document.getElementById('assessment-execution_quality-val').innerText=document.getElementById('assessment-execution_quality').value;
    },0)
    document.getElementById('assessment-design_quality').addEventListener('change', ev => {
        document.getElementById('assessment-design_quality-val').innerText=ev.target.value;
    })
    document.getElementById('assessment-delivery_quality').addEventListener('change', ev => {
        document.getElementById('assessment-delivery_quality-val').innerText=ev.target.value;
    })
    document.getElementById('assessment-execution_quality').addEventListener('change', ev => {
        document.getElementById('assessment-execution_quality-val').innerText=ev.target.value;
    })
}
