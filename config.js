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
            description: '',
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
                center: [118.511010, 34.552325],
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
            description: 'During Shi Tao\'s journey from Wuyuan to Pengcheng and back home, he documented taking four subroutes in his diary. These subroutes included Wuyuan to Pengcheng, Pengcheng back to Wuyuan, Wuyuan to his dormitory, and the final leg from his dormitory to his home. To determine the optimal overland route for the journey, Least Cost Path Analysis was performed in ArcGIS Pro, resulting in red lines on the map. The combined length of the route was approximately 300 kilometers, with an average daily progress of 75 kilometers.',
            location: {
                center: [118.511010, 34.552325],
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
            description: 'In the waterway analysis conducted using NetLogo, represented by blue lines, the desirability layer was generated in ArcMap and subsequently imported into NetLogo, a programmable modeling environment specially designed for agent-based modeling. The desirability layer assigns values indicating Shi Rao\'s willingness to traverse each pixel or patch in NetLogo. Higher values indicate a greater likelihood of him choosing to pass through those areas. Two factors were considered in this analysis: distance to the river and slope, with weights of 1/3 and 2/3 respectively. Essentially, this implies that pixels closer to the river or with gentler slopes have higher desirability values. Shi Rao orients himself towards the destination direction and selects the pixel with the highest desirability value along his path until he reaches his destination, at which point he stops. In the results, the overall length of the waterway route is estimated to be 370 kilometers, with an average daily progress of nearly 95 kilometers.',
            location: {
                center: [118.511010, 34.552325],
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
            description: 'This revealed that there were significant detours in the waterway route to Shi Rao\'s destination. Considering the outcomes of Least Cost Path Analysis (LCPA) and Agent-Based Modeling (ABM), it is evident that using a boat as a mode of transport is improbable for Shi Rao. Furthermore, the cities he passed through were situated along different river branches, which would necessitate portage between these branches if he were to opt for waterway travel. Hence, it can be concluded that following the rivers is highly unlikely. Moreover, considering the extensive distances covered by Shi Rao in a single day during winter in the second scenario, it becomes apparent that traveling on horseback is the only feasible option for him.',
            location: {
                center: [118.511010, 34.552325],
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
