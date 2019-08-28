window.onload = () => {
    //set title to 
    const params = new URLSearchParams(window.location.search);
    document.getElementById('project-title').append(params.get('title'));
}