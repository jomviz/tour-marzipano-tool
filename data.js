var APP_DATA = {
  "scenes": [
    {
      "id": "0-patio-ingreso",
      "name": "Patio ingreso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.000164904299969848,
        "pitch": 0,
        "fov": 1.3237681912121593
      },
      "linkHotspots": [
        {
          "yaw": 0.2680098312735222,
          "pitch": 0.2656459187305735,
          "rotation": 6.283185307179586,
          "target": "1-cocina-comedor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7953231825295486,
          "pitch": 0.29894970229071305,
          "title": "Revestimiento Piedra",
          "text": "ambientcg.com"
        }
      ]
    },
    {
      "id": "1-cocina-comedor",
      "name": "Cocina comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.25442620859934983,
          "pitch": 0.44306917242205657,
          "rotation": 7.853981633974483,
          "target": "2-galeria"
        },
        {
          "yaw": -2.0462605555411866,
          "pitch": 0.3033214396922137,
          "rotation": 4.71238898038469,
          "target": "0-patio-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-galeria",
      "name": "Galeria",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31601191967836684,
          "pitch": 0.495413773285474,
          "rotation": 0,
          "target": "3-patio-trasero"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6532486386533947,
          "pitch": 0.45837671111567246,
          "title": "Cocina comedor",
          "text": "<br>"
        },
        {
          "yaw": -0.8743919731815204,
          "pitch": 0.1537196519205466,
          "title": "Parrilla",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "3-patio-trasero",
      "name": "Patio trasero",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1612825798052846,
          "pitch": 0.4217770878166558,
          "rotation": 4.71238898038469,
          "target": "2-galeria"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "AIME",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
