/*
Noelle Antignano
Programming Concepts - Process for Final Project
Hyla Woods Upper & Lower Lousignont Temp Data

Adding the temperatures from the Upper Lousignont

Each square represents a reading from the creek
Each rows is one day
Each column is a time of day
Readings were taken every 30 minutes, so there are 48 readings per day
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

const lowerLethal = "MidnightBlue";
const lowerDetrimental = "RoyalBlue";
const lowerSuboptimal = "LightSteelBlue";
const optimal = "mintCream";
const upperSuboptimal = "LightPink";
const upperDetremental = "PaleVioletRed";
const upperLethal = "MediumVioletRed";


function preload() {
  lowerData20 = loadJSON("Lower_Lousignont_Creek_2020.json");
  upperData20 = loadJSON("Upper_Lousignont_Creek_2020.json");

  lowerData19 = loadJSON("Lower_Lousignont_Creek_2019.json");
  upperData19 = loadJSON("Upper_Lousignont_Creek_2019.json");

  upperData18 = loadJSON("Upper_Lousignont_Creek_2018.json");

  upperData17 = loadJSON("Upper_Lousignont_Creek_2017.json");
  lowerData17 = loadJSON("Lower_Lousignont_Creek_2017.json");

  upperData16 = loadJSON("Upper_Lousignont_Creek_2016.json");
  lowerData16 = loadJSON("Lower_Lousignont_Creek_2016.json");

  upperData15 = loadJSON("Upper_Lousignont_Creek_2015.json");
  lowerData15 = loadJSON("Lower_Lousignont_Creek_2015.json");

  upperData14 = loadJSON("Upper_Lousignont_Creek_2014.json");
  lowerData14 = loadJSON("Lower_Lousignont_Creek_2014.json");

  upperData12 = loadJSON("Upper_Lousignont_Creek_2012.json");
  lowerData12 = loadJSON("Lower_Lousignont_Creek_2012.json");

  upperData11 = loadJSON("Upper_Lousignont_Creek_2011.json");
  lowerData11 = loadJSON("Lower_Lousignont_Creek_2011.json");

  upperData10 = loadJSON("Upper_Lousignont_Creek_2010.json");
  lowerData10 = loadJSON("Lower_Lousignont_Creek_2010.json");

  upperData09 = loadJSON("Upper_Lousignont_Creek_2009.json");
  lowerData09 = loadJSON("Lower_Lousignont_Creek_2009.json");

  upperData08 = loadJSON("Upper_Lousignont_Creek_2008.json");
  lowerData08 = loadJSON("Lower_Lousignont_Creek_2008.json");

  upperData07 = loadJSON("Upper_Lousignont_Creek_2007.json");
  lowerData07 = loadJSON("Lower_Lousignont_Creek_2007.json");
}

function setup() {
  createCanvas(1000, 1720);
  ResetCanvas();


  button20 = createButton('2020');
  button20.position(20, 25);
  button20.size(100, 27);
  button20.mousePressed(Lousignont2020);


  button19 = createButton('2019');
  button19.position(20, 55);
  button19.size(100, 27);
  button19.mousePressed(Lousignont2019);

  button18 = createButton('2018');
  button18.position(20, 85);
  button18.size(100, 27);
  button18.mousePressed(Lousignont2018);

  button17 = createButton('2017');
  button17.position(20, 115);
  button17.size(100, 27);
  button17.mousePressed(Lousignont2017);

  button16 = createButton('2016');
  button16.position(20, 145);
  button16.size(100, 27);
  button16.mousePressed(Lousignont2016);

  button15 = createButton('2015');
  button15.position(20, 175);
  button15.size(100, 27);
  button15.mousePressed(Lousignont2015);

  button14 = createButton('2014');
  button14.position(20, 205);
  button14.size(100, 27);
  button14.mousePressed(Lousignont2014);

  button12 = createButton('2012');
  button12.position(20, 255);
  button12.size(100, 27);
  button12.mousePressed(Lousignont2012);

  button11 = createButton('2011');
  button11.position(20, 285);
  button11.size(100, 27);
  button11.mousePressed(Lousignont2011);

  button10 = createButton('2010');
  button10.position(20, 315);
  button10.size(100, 27);
  button10.mousePressed(Lousignont2010);

  button09 = createButton('2009');
  button09.position(20, 345);
  button09.size(100, 27);
  button09.mousePressed(Lousignont2009);

  button08 = createButton('2008');
  button08.position(20, 375);
  button08.size(100, 27);
  button08.mousePressed(Lousignont2008);

  button07 = createButton('2007');
  button07.position(20, 405);
  button07.size(100, 27);
  button07.mousePressed(Lousignont2007);


}


function ResetCanvas() {
  clear();
  background("white");

  //text style
  noStroke();
  fill('black');

  //no data for 2013
  textSize(10);
  text('no data for 2013', 35, 248);

  //Legend TEXT
  textSize(12);
  //upper lethal
  text('Upper Lethal Range', 18, 490);
  text(' = > 25.0ºC', 30, 508);

  //upper detremental
  text('Upper Detremental Range', 18, 528);
  text(' = 20.4ºC - 24.9ºC', 30, 546);

  //upper suboptimal
  text('Upper Suboptimal Range', 18, 566);
  text(' = 15.6ºC - 20.3ºC', 30, 584);

  //optimal
  text('Optimal Range', 18, 604);
  text(' = 10.0ºC - 15.5ºC', 30, 622);

  //lower suboptimal
  text('Lower Suboptimal Range', 18, 642);
  text(' = 4.5ºC - 9.9ºC', 30, 660);

  //lower detremental
  text('Lower Detremental Range', 18, 680);
  text(' = 1.7ºC - 4.4ºC', 30, 698);

  //lower lethal
  text('Lower Lethal Range', 18, 718);
  text(' = <1.7ºC', 30, 736);




  //Legend SQUARES

  stroke('dimGray');
  //upper lethal
  fill(upperLethal);
  rect(20, 500, 10);

  //upper detrimental
  fill(upperDetremental);
  rect(20, 538, 10);

  //upper suboptimal
  fill(upperSuboptimal);
  rect(20, 576, 10);

  //optimal
  fill(optimal);
  rect(20, 614, 10);

  //lower suboptimal
  fill(lowerSuboptimal);
  rect(20, 652, 10);

  //lower detrimental
  fill(lowerDetrimental);
  rect(20, 690, 10);

  //lower lethal
  fill(lowerLethal);
  rect(20, 728, 10);




}

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

//couldn't get this to work, need to sort out passing arrays to button, try again later
// function LousignontData(uDataArr, lDataArr, year) {
//
//   ResetCanvas();
//
//   let uX = 200;
//   let uY = 30;
//   let uStartDate = uDataArr[0].Date;
//   let lX = 560 ;
//   let lY = 30;
//   let lStartDate = lDataArr[0].Date;
//
//   noStroke();
//   textSize(14);
//   fill('black');
//   text('Upper Lousignont Creek' , 200, 20);
//   text('Lower Lousignont Creek', 560, 20);
//
//     for (var u = 0; u < uDataArr.length; u++) {
//     if (uStartDate != uDataArr[u].Date) {
//       uX = 200;
//       uY = uY + 7;
//       uStartDate = uDataArr[u].Date;
//     }
//
//     let uTemp = uDataArr[u].Temp;
//
//    ColorCoder(uTemp);
//
//     //pass x, y coordinate based on date and time
//     fill(rColor);
//     stroke('dimGray');
//     rect(uX, uY, 7);
//     uX = uX + 7;
//   }
//
//     for (var i = 0; i < lDataArr.length; i++) {
//     if (lStartDate != lDataArr[i].Date) {
//       lX = 560;
//       lY = lY + 7;
//       lStartDate = lDataArr[i].Date;
//     }
//
//     let lTemp = lDataArr[i].Temp;
//
//    ColorCoder(lTemp);
//
//     //pass x, y coordinate based on date and time
//     fill(rColor);
//     stroke('dimGray');
//     rect(lX, lY, 7);
//     lX = lX + 7;
//   }
// }

function Lousignont2007() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData07.UpperLousignot07[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData07.LowerLousignot07[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2007', 200, 20);
  text('Lower Lousignont Creek, 2007', 560, 20);

    for (var u = 0; u < upperData07.UpperLousignot07.length; u++) {
    if (uStartDate != upperData07.UpperLousignot07[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData07.UpperLousignot07[u].Date;
    }

    let uTemp = upperData07.UpperLousignot07[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData07.LowerLousignot07.length; i++) {
    if (lStartDate != lowerData07.LowerLousignot07[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData07.LowerLousignot07[i].Date;
    }

    let lTemp = lowerData07.LowerLousignot07[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2008() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData08.UpperLousignot08[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData08.LowerLousignot08[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2008', 200, 20);
  text('Lower Lousignont Creek, 2008', 560, 20);

    for (var u = 0; u < upperData08.UpperLousignot08.length; u++) {
    if (uStartDate != upperData08.UpperLousignot08[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData08.UpperLousignot08[u].Date;
    }

    let uTemp = upperData08.UpperLousignot08[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData08.LowerLousignot08.length; i++) {
    if (lStartDate != lowerData08.LowerLousignot08[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData08.LowerLousignot08[i].Date;
    }

    let lTemp = lowerData08.LowerLousignot08[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2009() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData09.UpperLousignot09[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData09.LowerLousignot09[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2009', 200, 20);
  text('Lower Lousignont Creek, 2009', 560, 20);

    for (var u = 0; u < upperData09.UpperLousignot09.length; u++) {
    if (uStartDate != upperData09.UpperLousignot09[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData09.UpperLousignot09[u].Date;
    }

    let uTemp = upperData09.UpperLousignot09[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData09.LowerLousignot09.length; i++) {
    if (lStartDate != lowerData09.LowerLousignot09[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData09.LowerLousignot09[i].Date;
    }

    let lTemp = lowerData09.LowerLousignot09[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2010() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData10.UpperLousignot10[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData10.LowerLousignot10[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2010', 200, 20);
  text('Lower Lousignont Creek, 2010', 560, 20);

    for (var u = 0; u < upperData10.UpperLousignot10.length; u++) {
    if (uStartDate != upperData10.UpperLousignot10[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData10.UpperLousignot10[u].Date;
    }

    let uTemp = upperData10.UpperLousignot10[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData10.LowerLousignot10.length; i++) {
    if (lStartDate != lowerData10.LowerLousignot10[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData10.LowerLousignot10[i].Date;
    }

    let lTemp = lowerData10.LowerLousignot10[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2011() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData11.UpperLousignot11[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData11.LowerLousignot11[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2011', 200, 20);
  text('Lower Lousignont Creek, 2011', 560, 20);

    for (var u = 0; u < upperData11.UpperLousignot11.length; u++) {
    if (uStartDate != upperData11.UpperLousignot11[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData11.UpperLousignot11[u].Date;
    }

    let uTemp = upperData11.UpperLousignot11[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData11.LowerLousignot11.length; i++) {
    if (lStartDate != lowerData11.LowerLousignot11[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData11.LowerLousignot11[i].Date;
    }

    let lTemp = lowerData11.LowerLousignot11[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2012() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData12.UpperLousignot12[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData12.LowerLousignot12[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2012', 200, 20);
  text('Lower Lousignont Creek, 2012', 560, 20);

    for (var u = 0; u < upperData12.UpperLousignot12.length; u++) {
    if (uStartDate != upperData12.UpperLousignot12[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData12.UpperLousignot12[u].Date;
    }

    let uTemp = upperData12.UpperLousignot12[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData12.LowerLousignot12.length; i++) {
    if (lStartDate != lowerData12.LowerLousignot12[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData12.LowerLousignot12[i].Date;
    }

    let lTemp = lowerData12.LowerLousignot12[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2014() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData14.UpperLousignot14[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData14.LowerLousignot14[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2014', 200, 20);
  text('Lower Lousignont Creek, 2014', 560, 20);

    for (var u = 0; u < upperData14.UpperLousignot14.length; u++) {
    if (uStartDate != upperData14.UpperLousignot14[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData14.UpperLousignot14[u].Date;
    }

    let uTemp = upperData14.UpperLousignot14[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData14.LowerLousignot14.length; i++) {
    if (lStartDate != lowerData14.LowerLousignot14[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData14.LowerLousignot14[i].Date;
    }

    let lTemp = lowerData14.LowerLousignot14[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2015() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData15.UpperLousignot15[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData15.LowerLousignot15[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2015', 200, 20);
  text('Lower Lousignont Creek, 2015', 560, 20);

    for (var u = 0; u < upperData15.UpperLousignot15.length; u++) {
    if (uStartDate != upperData15.UpperLousignot15[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData15.UpperLousignot15[u].Date;
    }

    let uTemp = upperData15.UpperLousignot15[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData15.LowerLousignot15.length; i++) {
    if (lStartDate != lowerData15.LowerLousignot15[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData15.LowerLousignot15[i].Date;
    }

    let lTemp = lowerData15.LowerLousignot15[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2016() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData16.UpperLousignot16[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData16.LowerLousignot16[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2016', 200, 20);
  text('Lower Lousignont Creek, 2016', 560, 20);

    for (var u = 0; u < upperData16.UpperLousignot16.length; u++) {
    if (uStartDate != upperData16.UpperLousignot16[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData16.UpperLousignot16[u].Date;
    }

    let uTemp = upperData16.UpperLousignot16[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData16.LowerLousignot16.length; i++) {
    if (lStartDate != lowerData16.LowerLousignot16[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData16.LowerLousignot16[i].Date;
    }

    let lTemp = lowerData16.LowerLousignot16[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2017() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData17.UpperLousignot17[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData17.LowerLousignot17[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2017', 200, 20);
  text('Lower Lousignont Creek, 2017', 560, 20);

    for (var u = 0; u < upperData17.UpperLousignot17.length; u++) {
    if (uStartDate != upperData17.UpperLousignot17[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData17.UpperLousignot17[u].Date;
    }

    let uTemp = upperData17.UpperLousignot17[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData17.LowerLousignot17.length; i++) {
    if (lStartDate != lowerData17.LowerLousignot17[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData17.LowerLousignot17[i].Date;
    }

    let lTemp = lowerData17.LowerLousignot17[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2018() {
  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData18.UpperLousignot18[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2018', 200, 20);
  text('Lower Lousignont Creek, 2018', 560, 20);
  textStyle(ITALIC);
  text('no data for Lower Lousignont in 2018', 560, 50)
  textStyle(NORMAL);

    for (var u = 0; u < upperData18.UpperLousignot18.length; u++) {
    if (uStartDate != upperData18.UpperLousignot18[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData18.UpperLousignot18[u].Date;
    }

    let uTemp = upperData18.UpperLousignot18[u].Temp;

   ColorCoder(uTemp);
   //pass x, y coordinate based on date and time
   fill(rColor);
   stroke('dimGray');
   rect(uX, uY, 7);
   uX = uX + 7;
 }
}

function Lousignont2019() {

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData19.UpperLousignot19[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData19.LowerLousignot19[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2019', 200, 20);
  text('Lower Lousignont Creek, 2019', 560, 20);

    for (var u = 0; u < upperData19.UpperLousignot19.length; u++) {
    if (uStartDate != upperData19.UpperLousignot19[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData19.UpperLousignot19[u].Date;
    }

    let uTemp = upperData19.UpperLousignot19[u].Temp;

   ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData19.LowerLousignot19.length; i++) {
    if (lStartDate != lowerData19.LowerLousignot19[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData19.LowerLousignot19[i].Date;
    }

    let lTemp = lowerData19.LowerLousignot19[i].Temp;

   ColorCoder(lTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }
}

function Lousignont2020(){

  ResetCanvas();

  let uX = 200;
  let uY = 30;
  let uStartDate = upperData20.UpperLousignot20[0].Date;
  let lX = 560 ;
  let lY = 30;
  let lStartDate = lowerData20.LowerLousignot20[0].Date;

  noStroke();
  textSize(14);
  fill('black');
  text('Upper Lousignont Creek, 2020', 200, 20);
  text('Lower Lousignont Creek, 2020', 560, 20);

    for (var u = 0; u < upperData20.UpperLousignot20.length; u++) {
    if (uStartDate != upperData20.UpperLousignot20[u].Date) {
      uX = 200;
      uY = uY + 7;
      uStartDate = upperData20.UpperLousignot20[u].Date;
    }

    let uTemp = upperData20.UpperLousignot20[u].Temp;

    ColorCoder(uTemp);

    //pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(uX, uY, 7);
    uX = uX + 7;
  }

    for (var i = 0; i < lowerData20.LowerLousignot20.length; i++) {
    if (lStartDate != lowerData20.LowerLousignot20[i].Date) {
      lX = 560;
      lY = lY + 7;
      lStartDate = lowerData20.LowerLousignot20[i].Date;
    }

    let lTemp = lowerData20.LowerLousignot20[i].Temp;

    ColorCoder(lTemp);

    // pass x, y coordinate based on date and time
    fill(rColor);
    stroke('dimGray');
    rect(lX, lY, 7);
    lX = lX + 7;
  }

}
