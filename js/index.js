window.onload = () => {
    console.log('index.js loaded');
    var cy = cytoscape({

        container: document.getElementById('cy'), // container to render in

        elements: [ // list of graph elements to start with
            { data: { id: 'zc', name: 'Zero Copper', size: '100', colour: '#22b422' } },
            { data: { id: 'p2', name: 'P2SE', size: '100', colour: '#22b422' } },
            { data: { id: '5g', name: '5G', size: '100', colour: '#22b422' } },
            { data: { id: 'brand_overhaul', name: 'Brand overhaul', size: '80', colour: '#38a4d6' } },
            { data: { id: 'microsoft_upgrade', name: 'Microsoft Upgrade', size: '80', colour: '#38a4d6' } },

            { data: { id: 'zc-p2', source: 'zc', target: 'p2' } },
            { data: { id: 'zc-5g', source: 'zc', target: '5g' } },
            { data: { id: '5g-brand_overhaul', source: 'zc', target: 'brand_overhaul' } },
            // data: { id: '5g-brand_overhaul', source: '5g', target: 'brand_overhaul' }

        ],

        style: [ // the stylesheet for the graph
            {
                selector: 'node',
                style: {
                    'background-color': 'data(colour)',
                    'content': 'data(name)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'width': 'data(size)',
                    'height': 'data(size)'
                }
            }
            ,{
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

    cy.nodes().forEach(n => {
        console.log('test')
        const size = n.data('size');
        n.on('click', ev => {
            console.log(ev);
            const page = (size==100)?'dashboard.html':'project.html';
            window.location = `${window.location.href}${page}?title=${n.data('name')}`;
        })
    })
}