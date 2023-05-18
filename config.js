//GEOG 384 - Assignment #1 - Fall 2022

var config = {
    style: 'mapbox://styles/esthercyb117/clhjc9rkf009101pa98crhuui',
    accessToken: 'pk.eyJ1IjoiZXN0aGVyY3liMTE3IiwiYSI6ImNsZmEzOThnNTFxYTY0M212NmZxMDg1OGEifQ.UQwnfxjSTtHAiHJVHq8-ZQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: '1',
            alignment: 'right',
            hidden: false,
            title:  'Western Han',
            description: '<br> ',
            location: {
                center: [109.619528, 36.729523],
                zoom: 3.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                layer: '1',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
                {
                layer: '1',
                    opacity: 0
                }
            ]
        },
        {
            id: '2',
            alignment: 'right',
            hidden: false,
            title: 'Tomb',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            image: './images/bamboo-slip.jpg',
            location: {
                center: [118.925653, 34.633963],
                zoom: 7.05,
                pitch: 0,
                bearing: 0,
                // flyTo and easeTo additional controls-
                // The two options below control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                    // speed: 2, // make the flying slow
                    // curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {layer: 'shi-rao-tomb-label', 
                opacity: 1},
                {layer: 'shi-rao-tomb', 
                opacity: 1}
            ],
            onChapterExit: [{layer: 'shi-rao-tomb-label', 
            opacity: 0},
            {layer: 'shi-rao-tomb', 
            opacity: 0}]
        },

        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: 'Shi Rao\'s Diary',
            description: 'Full Trip',
            image:'./images/first-month.jpg',
            location: {
                center: [117.298753, 34.841026],
                zoom: 7.24,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [ {
                layer: 'pengcheng-travel-cities',
                opacity: 0,
                },
                {layer: 'shi-rao-tomb', 
                opacity: 0}],
            onChapterExit: [{
                layer: 'pengcheng-travel-cities',
                opacity: 1,
                }]
        },
        {
            id: '4',
            alignment: 'right',
            hidden: false,
            title: 'The Pengcheng Trip',
            description: 'An overall description',
            location: {
                center: [118.200243, 34.552325],
                zoom: 8.51,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [ 
                {layer: 'pengcheng-travel-cities',
                 opacity: 1
                },
                {layer: 'overland-pengcheng',
                 opacity: 0
                },
                {layer: 'waterways-pengcheng',
                opacity: 0
                        }
            ],
            onChapterExit: [ {
                layer: 'overland-pengcheng',
                opacity: 1
                }]
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: 'The Pengcheng Trip - overland routes',
            description: '...',
            location: {
                center: [118.200243, 34.552325],
                zoom: 8.51,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [ {
                layer: 'pengcheng-travel-cities',
                opacity: 1
                },
                    {
                        layer: 'waterways-pengcheng',
                        opacity: 0
                        }
            ],
            onChapterExit: [ {
                layer: 'overland-pengcheng',
                opacity: 0
                },
                {
                    layer: 'waterways-pengcheng',
                    opacity: 1
                    }]
        },
        {
            id: '6',
            alignment: 'right',
            hidden: false,
            title: 'The Pengcheng Trip- waterways',
            description: '... ABM',
            location: {
                center: [118.200243, 34.552325],
                zoom: 8.51,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [ 
                {
                    layer: 'overland-pengcheng',
                    opacity: 0
                    },
                    {
                        layer: 'waterways-pengcheng',
                        opacity: 1
                        }
            ],
            onChapterExit: [ ]
        },
        {
            id: '7',
            alignment: 'right',
            hidden: false,
            title: 'The Pengcheng Trip - comparison of ABM and LCPA',
            description: '........',
            location: {
                center: [118.200243, 34.552325],
                zoom: 8.51,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [ {
                layer: 'pengcheng-travel-cities',
                opacity: 1
                },
                {
                    layer: 'overland-pengcheng',
                    opacity: 1
                    },
                    {
                        layer: 'waterways-pengcheng',
                        opacity: 1
                        }
            ],
            onChapterExit: [ {
                layer: 'overland-pengcheng',
                opacity: 1
                },
                {
                    layer: 'waterways-pengcheng',
                    opacity: 1
                    }]
        }

    ]
};
