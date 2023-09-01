

function mapValue(inp, minInp, maxInp, minOut, maxOut) {
    if (inp === 0) {
        return maxOut;
    }
    return ((inp - minInp) / (maxInp - minInp)) * (maxOut - minOut) + minOut;
  }


export default function Clock(p) {

    // Second Size : sizeChange : highlightSize
    // 5 : 24 : 180

    const sizeChange = 48;

    const secondSize = 360;
    const minuteSize = secondSize - sizeChange;
    const hourSize = minuteSize - sizeChange;

    const highlightSize = 10;

    p.setup = () => {
        p.createCanvas(380, 380);
    }

    p.draw = () => {
        p.background("#191919");
        p.translate(p.width/2, p.height/2);
        
      
        p.noFill();
        p.strokeWeight(highlightSize);
      
        var date = new Date();
      
        var seconds = date.getUTCSeconds();
        var minutes = date.getUTCMinutes();
        var hours = date.getUTCHours();

        var hourAngle = mapValue(hours % 12, 0, 12, -p.HALF_PI, 2*p.PI - p.HALF_PI);

        for (let i = 0; i < 12; i++) {
            if (hours % 12 >= i) {
                p.stroke(255);
            } else {
                p.stroke(105);
            }
            p.push();
            p.rotate(i * 30 * (p.PI / 180) );
            p.line(0, highlightSize-hourSize/2, 0, - hourSize/2);
            p.pop();
        }

        var minuteAngle = mapValue(minutes, 0, 60, -p.HALF_PI, 2*p.PI - p.HALF_PI);

        for (let i = 0; i < 60; i++) {
            if (minutes >= i) {
                p.stroke(34, 181, 74);
            } else {
                p.stroke(34, 100, 40);
            }
            p.push();
            p.rotate(i * 6 * (p.PI / 180) );
            p.line(0, highlightSize-minuteSize/2, 0, - minuteSize/2);
            p.pop();
        }

        var secondAngle = mapValue(seconds, 0, 60, -p.HALF_PI, 2*p.PI - p.HALF_PI);

        for (let i = 0; i < 60; i++) {
            if (seconds >= i) {
                p.stroke(207, 37, 37);
            } else {
                p.stroke(150, 37, 37);
            }
            p.push();
            p.rotate(i * 6 * (p.PI / 180) );
            p.line(0, highlightSize-secondSize/2, 0, - secondSize/2);
            p.pop();
        } 
      

        p.strokeWeight(highlightSize/2);

        // Second : Minute : Hour
        // 5 : 4 : 3

        //Second Hand
        p.push();
        p.stroke(207, 37, 37);
        p.rotate(secondAngle + p.HALF_PI);
        p.line(0, 0, 0, - 100);
        p.pop();
        
        //Minute Hand
        p.push();
        p.stroke(34, 181, 74);
        p.rotate(minuteAngle + p.HALF_PI);
        p.line(0, 0, 0, - 80);
        p.pop();
      
        //Hour hand
        p.push();
        p.stroke(255);
        p.rotate(hourAngle + p.HALF_PI);
        p.line(0, 0, 0, - 60);
        p.pop();
        
        p.stroke(255);
        p.line(0, 0, 0, 0);

    }

}

