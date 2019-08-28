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

}