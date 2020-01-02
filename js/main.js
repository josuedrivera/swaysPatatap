console.log("connected");
// KEYDATA
    var keyData = {   
        q: {
            sound: new Howl({
                src: ['sounds/bubbles.mp3']
                }),
            color: '#1abc9c'
        },
        w: {
            sound: new Howl({
                src: ['sounds/clay.mp3']
                }),
            color: '#2ecc71'
        },
        e: {
            sound: new Howl({
                src: ['sounds/confetti.mp3']
                }),
            color: '#3498db'
        },
        r: {
            sound: new Howl({
                src: ['sounds/corona.mp3']
                }),
            color: '#9b59b6'
        },
        t: {
            sound: new Howl({
                src: ['sounds/dotted-spiral.mp3']
                }),
            color: '#34495e'
        },
        y: {
            sound: new Howl({
                src: ['sounds/flash-1.mp3']
                }),
            color: '#16a085'
        },
        u: {
            sound: new Howl({
                src: ['sounds/flash-2.mp3']
                }),
            color: '#27ae60'
        },
        i: {
            sound: new Howl({
                src: ['sounds/flash-3.mp3']
                }),
            color: '#2980b9'
        },
        o: {
            sound: new Howl({
                src: ['sounds/glimmer.mp3']
                }),
            color: '#8e44ad'
        },
        p: {
            sound: new Howl({
                src: ['sounds/moon.mp3']
                }),
            color: '#2c3e50'
        },
        a: {
            sound: new Howl({
                src: ['sounds/pinwheel.mp3']
                }),
            color: '#f1c40f'
        },
        s: {
            sound: new Howl({
                src: ['sounds/piston-1.mp3']
                }),
            color: '#e67e22'
        },
        d: {
            sound: new Howl({
                src: ['sounds/piston-2.mp3']
                }),
            color: '#e74c3c'
        },
        f: {
            sound: new Howl({
                src: ['sounds/prism-1.mp3']
                }),
            color: '#95a5a6'
        },
        g: {
            sound: new Howl({
                src: ['sounds/prism-2.mp3']
                }),
            color: '#f39c12'
        },
        h: {
            sound: new Howl({
                src: ['sounds/prism-3.mp3']
                }),
            color: '#d35400'
        },
        j: {
            sound: new Howl({
                src: ['sounds/splits.mp3']
                }),
            color: '#1abc9c'
        },
        k: {
            sound: new Howl({
                src: ['sounds/squiggle.mp3']
                }),
            color: '#2ecc71'
        },
        l: {
            sound: new Howl({
                src: ['sounds/strike.mp3']
                }),
            color: '#3498db'
        },
        z: {
            sound: new Howl({
                src: ['sounds/suspension.mp3']
                }),
            color: '#9b59b6'
        },
        x: {
            sound: new Howl({
                src: ['sounds/timer.mp3']
                }),
            color: '#34495e'
        },
        c: {
            sound: new Howl({
                src: ['sounds/ufo.mp3']
                }),
            color: '#16a085'
        },
        v: {
            sound: new Howl({
                src: ['sounds/veil.mp3']
                }),
            color: '#27ae60'
        },
            b: {
            sound: new Howl({
                src: ['sounds/wipe.mp3']
                }),
            color: '#2980b9'
        },
        n: {
            sound: new Howl({
                src: ['sounds/zig-zag.mp3']
                }),
            color: '#8e44ad'
        },
            m: {
            sound: new Howl({
                src: ['sounds/moon.mp3']
                }),
            color: '#2c3e50'
        }
    }




// PROJECT NOTES


// // Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'black';
// var start = new Point(100, 100);
// // Move to start and draw a line from there
// path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// path.lineTo(start + [ 100, -50 ]);



// for(var x = 0; x < 1000; x+= 100){
//     for(var y = 0; y < 1000; y+= 100){
//         // var myCircle = new Path.Circle(new Point(x, y), 10);
//         // myCircle.fillColor = 'yellow';
//         new Path.Circle(new Point(x, y), 10).fillColor = 'yellow';
        
//     }

// }



// for(var x = 0; x < 1000; x+= 100){
//     for(var y = 0; y < 1000; y+= 100){
//         new Path.Circle(new Point(x, y), 10).fillColor = 'yellow';
        
//     }



// }
// function onKeyDown(event) {
// 	// When a key is pressed, set the content of the text item:
// 	text.content = 'The ' + event.key + ' key was pressed!';
// }



// function onKeyDown(event) {
//     new Path.Circle(new Point(x, y), 10).fillColor = 'yellow';
//     console.log(view.size.height);
//     console.log(view.size.width);
//     Math.random()...;
// }


//  GENERATE RANDOM CIRCLES ON ANY KEYDOWN
// function onKeyDown(event) {
//     var maxPoint = new Point(view.size.width, view.size.height);
//     var randomPoint = Point.random();
//     var point = maxPoint * randomPoint;
//     new Path.Circle(point, 10).fillColor = 'yellow';
// }



//  CIRCLES CHANGE HUE
// var circles = [];

// function onKeyDown(event) {
//     var maxPoint = new Point(view.size.width, view.size.height);
//     var randomPoint = Point.random();
//     var point = maxPoint * randomPoint;
//     var newCircle = new Path.Circle(point, 10);
//     newCircle.fillColor = 'yellow';
//     circles.push(newCircle);
// }

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = 'yellow';

// function onFrame(event) {
//     for(var i = 0; i < circles.length; i++) {
//         circles[i].fillColor.hue += 1;
//     }
//     animatedCircle.fillColor.hue.hue += 1;
// }



// var circles = [];

// function onKeyDown(event) {
//     var maxPoint = new Point(view.size.width, view.size.height);
//     var randomPoint = Point.random();
//     var point = maxPoint * randomPoint;
//     var newCircle = new Path.Circle(point, 500);
//     newCircle.fillColor = 'yellow';
//     circles.push(newCircle);
// }

// function onFrame(event) {
//     for(var i = 0; i < circles.length; i++) {
//         circles[i].fillColor.hue += 1;
//         circles[i].scale(.9);
//     }
//     animatedCircle.fillColor.hue += 1;
// }



// function onKeyDown(event) {
//     var maxPoint = new Point(view.size.width, view.size.height);
//     var randomPoint = Point.random();
//     var point = maxPoint * randomPoint;
//     new Path.Circle(point, 10).fillColor = 'yellow';
// }



//working version
//needs var = keyData to pull info from
// var circles = [];

// function onKeyDown(event) {
//     if(keyData[event.key]) {
//         var maxPoint = new Point(view.size.width, view.size.height);
//         var randomPoint = Point.random();
//         var point = maxPoint * randomPoint;
//         var newCircle = new Path.Circle(point, 500);
//         newCircle.fillColor = keyData[event.key].color;
//         keyData[event.key].sound.play();
//         circles.push(newCircle);
//     } //can i add an else here for non-letter keypresses???
// }

// function onFrame(event) {
//     for(var i = 0; i < circles.length; i++) {
//         circles[i].fillColor.hue += 1;
//         circles[i].scale(.9);
//     }
// }


//to play sound basic
// var sound = new Howl({
//     src: ['sound.webm', 'sound.mp3']
// });
// sound.play();



//final refactored version
// var circles = [];

// function onKeyDown(event) {
//     if(keyData[event.key]) {
//         var maxPoint = new Point(view.size.width, view.size.height);
//         var randomPoint = Point.random();
//         var point = maxPoint * randomPoint;
//         var newCircle = new Path.Circle(point, 500);
//         newCircle.fillColor = keyData[event.key].color;
//         keyData[event.key].sound.play();
//         circles.push(newCircle);
//     } 
// }

// function onFrame(event) {
//     for(var i = 0; i < circles.length; i++) {
//         circles[i].fillColor.hue += 1;
//         circles[i].scale(.9);
//         if(circles[i].area < 1) {
//             //remove circle from the canvas
//             circles[i].remove(); 
//             //remove circle from the array
//             circles.splice(i, 1);
//             //left on so activity displays on console
//             console.log(circles);
//         }
//     }
// }


