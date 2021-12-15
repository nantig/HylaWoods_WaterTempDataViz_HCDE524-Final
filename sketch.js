/*
Noelle Antignano
Programming Concepts - Process for Final Project
Hyla Woods Upper & Lower Lousignont Temp Data

Each square represents a reading from the creek
Each rows is one day
Each column is a time of day
Readings were taken every 30 minutes, so there are 48 readings per day
Some years took readings every 60 minutes, so there are 24 readings per day
The square colour corresponds to the temperature chart blow:

Temperature ranges for Salmon Popilations
all temperatures are in Celcius

Lower Lethal:      <1.7
Lower Detrimental   1.7 - 4.4
Lower Suboptimal    4.5 - 9.9
Optimal             10.0 - 15.5
Upper Suboptimal    15.6 - 20.3
Upper Detremental   20.4 - 24.9
Upper Lethal       >25
*/

//colors for the different temperature ranges
const lowerLethal = "MidnightBlue";
const lowerDetrimental = "RoyalBlue";
const lowerSuboptimal = "LightSteelBlue";
const optimal = "mintCream";
const upperSuboptimal = "LightPink";
const upperDetremental = "PaleVioletRed";
const upperLethal = "MediumVioletRed";

//array to hold data files
const fileData = [];


//preload function runs before anything else
//this is where I load all my data files

function preload() {
  //load oswald font
  oswaldLight = loadFont('Oswald-Light.ttf');
  oswaldRegular = loadFont('Oswald-Regular.ttf');

  //loadJSON loads my data files
  //each year has two data files, for the upper and lower creek readings
  lowerData20 = loadJSON("Lower_Lousignont_Creek_2020.json");
  upperData20 = loadJSON("Upper_Lousignont_Creek_2020.json");
  //create an object for each data file and store in the fileData array
  //this organizes the data files and lets me call them later on
  let obj = {
    lousignont20: {
      upper: upperData20,
      lower: lowerData20,
      year: "2020",
    },
  };
  //push to the fileData array
  fileData.push(obj);

  //all of the following are the same
  //load the data file for each year,format the data into an object, push to the fileData array
  lowerData19 = loadJSON("Lower_Lousignont_Creek_2019.json");
  upperData19 = loadJSON("Upper_Lousignont_Creek_2019.json");
  obj = {
    lousignont19: {
      upper: upperData19,
      lower: lowerData19,
      year: "2019",
    },
  };
  fileData.push(obj);

  upperData18 = loadJSON("Upper_Lousignont_Creek_2018.json");
  obj = {
    lousignont18: {
      upper: upperData18,
      lower: null,
      year: "2018",
    },
  };
  fileData.push(obj);

  upperData17 = loadJSON("Upper_Lousignont_Creek_2017.json");
  lowerData17 = loadJSON("Lower_Lousignont_Creek_2017.json");
  obj = {
    lousignont17: {
      upper: upperData17,
      lower: lowerData17,
      year: "2017",
    },
  };
  fileData.push(obj);

  upperData16 = loadJSON("Upper_Lousignont_Creek_2016.json");
  lowerData16 = loadJSON("Lower_Lousignont_Creek_2016.json");
  obj = {
    Lousignont15: {
      upper: upperData16,
      lower: lowerData16,
      year: "2016",
    },
  };
  fileData.push(obj);

  upperData15 = loadJSON("Upper_Lousignont_Creek_2015.json");
  lowerData15 = loadJSON("Lower_Lousignont_Creek_2015.json");
  obj = {
    lousignont15: {
      upper: upperData15,
      lower: lowerData15,
      year: "2015",
    },
  };
  fileData.push(obj);

  upperData14 = loadJSON("Upper_Lousignont_Creek_2014.json");
  lowerData14 = loadJSON("Lower_Lousignont_Creek_2014.json");
  obj = {
    lousignont14: {
      upper: upperData14,
      lower: lowerData14,
      year: "2014",
    },
  };
  fileData.push(obj);

  upperData12 = loadJSON("Upper_Lousignont_Creek_2012.json");
  lowerData12 = loadJSON("Lower_Lousignont_Creek_2012.json");
  obj = {
    lousignont12: {
      upper: upperData12,
      lower: lowerData12,
      year: "2012",
    },
  };
  fileData.push(obj);

  upperData11 = loadJSON("Upper_Lousignont_Creek_2011.json");
  lowerData11 = loadJSON("Lower_Lousignont_Creek_2011.json");
  obj = {
    lousignont11: {
      upper: upperData11,
      lower: lowerData11,
      year: "2011",
    },
  };
  fileData.push(obj);

  upperData10 = loadJSON("Upper_Lousignont_Creek_2010.json");
  lowerData10 = loadJSON("Lower_Lousignont_Creek_2010.json");
  obj = {
    lousignont10: {
      upper: upperData10,
      lower: lowerData10,
      year: "2010",
    },
  };
  fileData.push(obj);

  upperData09 = loadJSON("Upper_Lousignont_Creek_2009.json");
  lowerData09 = loadJSON("Lower_Lousignont_Creek_2009.json");
  obj = {
    lousignont09: {
      upper: upperData09,
      lower: lowerData09,
      year: "2009",
    },
  };
  fileData.push(obj);

  upperData08 = loadJSON("Upper_Lousignont_Creek_2008.json");
  lowerData08 = loadJSON("Lower_Lousignont_Creek_2008.json");
  obj = {
    lousignont08: {
      upper: upperData08,
      lower: lowerData08,
      year: "2008",
    },
  };
  fileData.push(obj);

  upperData07 = loadJSON("Upper_Lousignont_Creek_2007.json");
  lowerData07 = loadJSON("Lower_Lousignont_Creek_2007.json");
  obj = {
    lousignont07: {
      upper: upperData07,
      lower: lowerData07,
      year: "2007",
    },
  };
  fileData.push(obj);

  console.log("fileData: ", fileData);
}

function setup() {
  createCanvas(1100, 1900);

  //this sets the canvas and draws the static data
  ResetCanvas();

  //calls the function that creates the buttons for each years data
  YearButton();
}

/*
Function to create the year buttons
It uses the fileData array to create a button for each year
It calls the ForSelectedYear function to draw the graphs when a button is pressed
*/
function YearButton() {
  //set the button Y position
  let buttonY = 260;
  let buttonX = 48;

  //the forEach method executes the function once for each array element
  //this loops over the fileData array and creates a button for each year
  fileData.forEach((f, index) => {
    //the Object.keys() method returns an array of a the object's property names
    let foundKey = Object.keys(f)[0];

    //create a button and label it with the year
    button = createButton(f[foundKey].year);

    //style the button so that it doesn't look like a stock button
    button.style("border-radius", "8px");
    button.style("background-color", "white");
    button.style("border-color", "black");
    button.style("border", "1px solid");

    //set the button position
    button.position(buttonX, buttonY + 40 * index);

    //set the button size
    button.size(120, 32);

    //on mousePressed, call the ForSelectedYear function and passes it the upper, lower, and year for each file
    button.mousePressed(function () {
      ForSelectedYear(
        f[foundKey].lower,
        f[foundKey].upper,
        f[foundKey].year
      );
    });
  });
}


/*
This function clears the canvas so that each graph is drawn on a clean ResetCanvas
It is used in both Setup and ForSelectedYear so that the static data (title, legend, etc) is alwasy present
*/
function ResetCanvas() {
  let legendX = 50;
  let legendY = 840;

  //clears the canvas of any previously drawn graphs
  clear();
  background('whiteSmoke');

  //text style
  noStroke();
  fill("black");
  textFont(oswaldRegular);
  textWrap(WORD);

  //Heading Title
  textSize(24);
  text("Tracking the Temperature of Lousignont Creek Through Hyla Woods",32, 50, 240);

  //Heading descirption
  textFont(oswaldLight);
  textSize(14);
  text("Water temperatures above 15ºC negatively impact salmon populations. These graphs show us when and for how long the temperatures fall outside the optimal range for salmon population health.", 32, 140, 240);

  //Button description
  textFont(oswaldRegular);
  text("Select a year to see the graph", 32, 245, 240);

  //no data for 2013 note
  textSize(12);
  textStyle(ITALIC);
  text("*no data for 2013", 70, 800);

  //COLOR LEGEND

  //Legend TEXT
  textSize(12);
  textStyle(NORMAL);

  //upper lethal
  text("Upper Lethal - > 25.0ºC", legendX, legendY);

  //upper detremental
  text("Upper Detremental - 20.4ºC - 24.9ºC", legendX, legendY + 32);

  //upper suboptimal
  text("Upper Suboptimal - 15.6ºC - 20.3ºC", legendX, legendY + 64);

  //optimal
  text("Optimal - 10.0ºC - 15.5ºC", legendX, legendY + 96);

  //lower suboptimal
  text("Lower Suboptimal - 4.5ºC - 9.9ºC", legendX, legendY + 128);

  //lower detremental
  text("Lower Detremental - 1.7ºC - 4.4ºC", legendX, legendY + 160);

  //lower lethal
  text("Lower Lethal - <1.7ºC", legendX, legendY + 192);

  //Legend SQUARES
  stroke("dimGray");

  //upper lethal
  fill(upperLethal);
  rect(legendX - 16, legendY - 10, 10);

  //upper detrimental
  fill(upperDetremental);
  rect(legendX - 16, legendY + 22, 10);

  //upper suboptimal
  fill(upperSuboptimal);
  rect(legendX - 16, legendY + 54, 10);

  //optimal
  fill(optimal);
  rect(legendX - 16, legendY + 86, 10);

  //lower suboptimal
  fill(lowerSuboptimal);
  rect(legendX - 16, legendY + 118, 10);

  //lower detrimental
  fill(lowerDetrimental);
  rect(legendX - 16, legendY + 150, 10);

  //lower lethal
  fill(lowerLethal);
  rect(legendX - 16, legendY + 182, 10);
}

/*
This function loops over each temperature reading from the JSON files
Based on the recorded temperature, a color is assigned
The colors correlate ranges that affect salmon
Colors are set in constants, sets at the top of this document
*/
function ColorCoder(temp) {
  if (temp < 1.7) {
    rColor = lowerLethal;
  } else if (temp >= 1.7 && temp <= 4.4) {
    rColor = lowerDetrimental;
  } else if (temp >= 4.5 && temp <= 9.9) {
    rColor = lowerSuboptimal;
  } else if (temp >= 10.0 && temp <= 15.5) {
    rColor = optimal;
  } else if (temp >= 15.6 && temp <= 20.3) {
    rColor = upperSuboptimal;
  } else if (temp >= 20.4 && temp <= 24.9) {
    rColor = upperDetremental;
  } else if (temp > 25) {
    rColor = upperLethal;
  }
}

/*
This function is where we draw the graphs
It sets the start position of the upper and lower graphs on the canvas
It loops through each piece of data from the JSON file
For each temperature reading, it assigns a color value and draws a square
Each row represnets one day
*/
function ForSelectedYear(lower, upper, year) {
  //reset the canvas for each new graph
  ResetCanvas();

  //set the x and y position of the upper data graph
  let uX = 300;
  let uY = 60;
  //set the x and y position of the lower data graph
  let lX = 660;
  let lY = 60;

  let lStartDate;
  let uStartDate;

  //check to make sure there is a data file
  //this accounts for years with no data available
  if (lower !== null) {
    lStartDate = lower.data[0].Date;
  }

  if (upper !== null) {
    uStartDate = upper.data[0].Date;
  }

  //title each graph with the creek location and specific year
  noStroke();
  textSize(12);
  fill("black");
  text(`Upper Lousignont Creek, ${year}`, 300, 50);
  text(`Lower Lousignont Creek, ${year}`, 660, 50);


  //DRAWS THE UPPER LOUSIGNONT CREEK GRAPH

  //if the data is not from the from the same day start a new line
  if (upper !== null) {
    for (var u = 0; u < upper.data.length; u++) {
      if (uStartDate != upper.data[u].Date) {
        uX = 300;
        uY = uY + 7;
        uStartDate = upper.data[u].Date;
      }

      //set uTemp as the temperature reading from the data, pass this to the ColorCoder function
      let uTemp = upper.data[u].Temp;

      //pass the temp and use the ColorCoder function to assign a color
      ColorCoder(uTemp);

      //pass x, y coordinate based on date and time
      fill(rColor);
      stroke("dimGray");
      rect(uX, uY, 7);
      //add 7px to lX so the next square is drawn to the right
      uX = uX + 7;
    }
  }


  //DRAWS THE LOWER LOUSIGNONT CREEK GRAPH

  //if the data is not from the from the same day start a new line
  if (lower !== null) {
    for (var i = 0; i < lower.data.length; i++) {
      if (lStartDate != lower.data[i].Date) {
        lX = 660;
        lY = lY + 7;
        lStartDate = lower.data[i].Date;
      }

      let lTemp = lower.data[i].Temp;

      //pass the temp and use the ColorCoder function to assign a color
      ColorCoder(lTemp);

      //pass x, y coordinate based on date and time
      fill(rColor);
      stroke("dimGray");
      rect(lX, lY, 7);
      //add 7px to lX so the next square is drawn to the right
      lX = lX + 7;
    }
  }
}
