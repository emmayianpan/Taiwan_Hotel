Plotly.d3.csv('../static/data/hotel.csv', function (err, rows) {

  function unpack(rows, key) {
    return rows.map(function (row) { return row[key]; });
  }

  //define csv columns
  var hotelNames = unpack(rows, 'Hotel'),
    areaNames = unpack(rows, 'Area'),
    allMonth = unpack(rows, 'Month'),
    allDemand = unpack(rows, 'Demand'),
    allSupply = unpack(rows, 'Supply'),
    allOcc = unpack(rows, 'Occupancy'),
    allADR = unpack(rows, 'ADR'),
    allRevPAR = unpack(rows, 'RevPAR'),
    allRoomR = unpack(rows, 'Room_Revenue'),
    allFB = unpack(rows, 'F&B_Revenue'),
    allOthers = unpack(rows, 'Other_Revenue'),
    listofHotels = [],
    listofAreas = [],
    currentSupply = [],
    currentDemand = [],
    currentMonth = [];
    currentHotel = [],
    currentADR = [],
    currentOcc = [],
    currentRevPAR = [], 
    currentRoomR = [], 
    currentFB = [], 
    currentOthers = [];

  // for (var i = 0; i < areaNames.length; i++) {
  //   if (listofAreas.indexOf(areaNames[i]) === -1) {
  //     listofAreas.push(areaNames[i]);
  //   }
  // }

  for (var i = 0; i < hotelNames.length; i++) {
    if (listofHotels.indexOf(hotelNames[i]) === -1) {
      listofHotels.push(hotelNames[i]);
    }
  }

  function getHotelData(chosenHotel) {
    currentDemand = [];
    currentSupply = []; 
    currentMonth = [];
    currentOcc = [];
    currentADR = [];
    currentRevPAR = [];
    currentFB = [];
    currentRoomR = [];
    currentOthers = [];
    for (var i = 0; i < hotelNames.length; i++) {
      if (hotelNames[i] === chosenHotel) {
        currentDemand.push(allDemand[i]);
        currentSupply.push(allSupply[i]);
        currentMonth.push(allMonth[i]);
        currentOcc.push(allOcc[i]);
        currentADR.push(allADR[i]);
        currentRevPAR.push(allRevPAR[i]);
        currentFB.push(allRoomR[i]);
        currentRoomR.push(allFB[i]);
        currentOthers.push(allOthers[i]);
      }
    }
  };

  setPlot('⻄華⼤飯店');

  function setPlot(chosenHotel) {
    getHotelData(chosenHotel);

    //Supply & Demand
    var trace1 = {
      x: currentMonth,
      y: currentDemand,
      mode: 'lines+markers',
      name: 'Demand',
      marker: {
        size: 10,
        opacity: 0.5
      },
      line: {
        shape: 'spline',
        width: 2.5
      },
      type: 'scatter'
    };

    var trace2 = {
      x: currentMonth,
      y: currentSupply,
      mode: 'lines+markers',
      name: 'Supply',
      marker: {
        size: 10,
        opacity: 0.5
      },
      line: {
        shape: 'spline',
        width: 2.5
      }
    };

    var data1 = [trace1, trace2];

    var layout1 = {
      // title: chosenHotel,
      // "titlefont": {
      //   "size": 23.5
      // },
      margin: {
        r:250
      },
      // xaxis: {
      //   range: ["2019-01-01", "2020-12-31"],
      // },
      // yaxis: {
      //   autorange: true
      // },
      showlegend: false,
      legend: {
        y: 1.2,
        // traceorder: 'reversed',
        font: {
          size: 10
        }
      }
    };

    Plotly.newPlot('plotdiv', data1, layout1, {responsive: true});

    //Occ/ADR/RevPAR
    var trace3 = {
      x: currentMonth,
      y: currentOcc,
      name: 'Occupancy',
      type: 'bar',
      marker: {
        size: 10,
        opacity: 0.5
      }
    };

    var trace4 = {
      x: currentMonth,
      y: currentADR,
      mode: 'lines+markers',
      name: 'ADR',
      marker: {
        size: 10,
        opacity: 0.5
      },
      line: {
        shape: 'spline',
        width: 2.5
      },
      yaxis: 'y2',
    };

    var trace5 = {
      x: currentMonth,
      y: currentRevPAR,
      mode: 'lines+markers',
      name: 'RevPAR',
      marker: {
        size: 10,
        opacity: 0.5
      },
      line: {
        shape: 'spline',
        width: 2.5
      },
      yaxis: 'y2',
    };

    var data2 = [trace3, trace4, trace5];

    var layout2 = {
      //   title: chosenHotel,
      //   "titlefont": {
      //     "size": 23.5
      //   },
      margin: {
        r:250
      },
      // xaxis: {
      //   range: ["2019-01-01", "2020-12-31"],
      // },
      yaxis: {
        tickformat: ',.0%',
        range: [0, 1]
      },
      yaxis2: {
        // autorange: true,
        titlefont: { color: 'rgb(148, 103, 189)' },
        tickfont: { color: 'rgb(148, 103, 189)' },
        overlaying: 'y',
        side: 'right'
      },
      showlegend: false,
      legend: {
        y: 1.2,
        // traceorder: 'reversed',
        font: {
          size: 10
        }
      }
    };

    Plotly.newPlot('plotdiv_p', data2, layout2, {responsive: true});


    //Revenue
    var trace6 = {
      x: currentMonth,
      y: currentRoomR,
      name: 'Room',
      type: 'bar'
    };

    var trace7 = {
      x: currentMonth,
      y: currentFB,
      name: 'F&B',
      type: 'bar'
    };

    var trace8 = {
      x: currentMonth,
      y: currentOthers,
      name: 'Others',
      type: 'bar'
    };

    var data3 = [trace6, trace7, trace8];


    var layout3 = {
      // title: chosenHotel,
      // "titlefont": {
      //   "size": 23.5
      // },
      margin: {
        r:250
      },
      barmode: 'stack',
      // xaxis: {
      //   range: ["2019-01-01", "2020-12-31"],
      // },
      // yaxis: {
      //   autorange: true
      // },
      showlegend: false,
      legend: {
        y: 1.2,
        // traceorder: 'reversed',
        font: {
          size: 10
        }
      }
    };

    Plotly.newPlot('plotdiv_r', data3, layout3, {responsive: true});


  };

  var innerContainer = document.querySelector('[data-num="0"]'),
    //plotEl = innerContainer.querySelector('.plot'),
    hotelSelector = innerContainer.querySelector('.hoteldata');
  // AreaSelector = innerContainer.querySelector('.citydata');

  function assignOptions(textArray, selector) {
    for (var i = 0; i < textArray.length; i++) {
      var currentOption = document.createElement('option');
      currentOption.text = textArray[i];
      selector.appendChild(currentOption);
    }
  }

  assignOptions(listofHotels, hotelSelector);
  // assignOptions(listofAreas, AreaSelector);

  function updateHotel() {
    setPlot(hotelSelector.value);
  }

  hotelSelector.addEventListener('change', updateHotel, false);
});