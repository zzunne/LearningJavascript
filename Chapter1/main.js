// jquery가 하는 일은 javascript 코드를 실행하기 전에
// 브라우저가 HTML을 전부 불러왔는지 확인하는 것.
$(document).ready(function(){
    'use strict'; // javascript 인터프리터에서 코드를 더 엄격하게 처리하라는 뜻.
    
    paper.install(window); // paper.js를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas')); // paper.js를 캔버스에 연결하고 paper.js가 그림을 그릴 수 있도록 준비

    // TODO
    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    }

    paper.view.draw() // paper.js가 실제로 화면에 그림을 그리라는 명령.

    console.log('main.js loaded');
});
