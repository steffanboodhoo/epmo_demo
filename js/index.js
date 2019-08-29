window.onload = () => {
    console.log('index.js loaded');

    let elements = [ // list of graph elements to start with
        {
            data: { id: 'zc', name: 'Zero Copper', size: '100', health: 80 },
            classes: 'programme'
        },
        {
            data: { id: 'p2', name: 'P2SE', size: '100', health: 70 },
            classes: 'programme'
        },
        {
            data: { id: '5g', name: '5G', size: '100', health: 50 },
            classes: 'programme'
        },
        {
            data: { id: 'brand_overhaul', name: 'Brand overhaul', size: '80', health: 20 },
            classes: 'project'
        },
        {
            data: { id: 'microsoft_upgrade', name: 'Microsoft Upgrade', size: '80', health: 70 },
            classes: 'project'
        },

        { data: { id: 'zc-p2', source: 'zc', target: 'p2' } },
        { data: { id: 'zc-5g', source: 'zc', target: '5g' } },
        { data: { id: '5g-brand_overhaul', source: 'zc', target: 'brand_overhaul' } },
        // data: { id: '5g-brand_overhaul', source: '5g', target: 'brand_overhaul' }
    ]
    elements.map(el => {
        if ('health' in el.data) {
            console.log(el)
            let G = (el.data.health / 100) * 255;
            let R = ((100 - el.data.health) / 100) * 255;
            el.data.colour = `rgb(${R},${G},0)`
            el.data.content = `${el.data.name} ${el.data.health}%`
        }
    })

    let tbody = document.getElementsByTagName('tbody')[0];
    elements.forEach(el => {
        if ('health' in el.data) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${el.classes}</td><td>${el.data.name}</td><td>${el.data.health}%</td>`
            tbody.append(tr);
        }
    })

    var cy = cytoscape({
        container: document.getElementById('cy'), // container to render in
        elements: elements,

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': 'data(colour)',
                    'content': 'data(content)',
                    // 'text-valign': 'center',
                    // 'text-halign': 'center',
                    'width': 'data(size)',
                    'height': 'data(size)'
                }
            }
            , {
                selector: '.programme',
                style: {
                    'shape': 'hexagon'
                }
            }
            , {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                }
            }
        ],
        layout: {
            name: 'random',
            animate: true
        }
    });
    cy.zoomingEnabled(false);
    cy.nodes().forEach(n => {
        console.log('test')
        const size = n.data('size');
        n.on('click', ev => {
            console.log(ev);
            const page = (size == 100) ? 'dashboard.html' : 'project.html';
            window.location = `${window.location.href}${page}?title=${n.data('name')}`;
        })
        n.on('mouseover', ev=>{
            console.log('hover')
        })
    })

}