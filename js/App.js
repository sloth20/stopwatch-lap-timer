import Buttons from "./Buttons.js";
import CurrentTime from "./CurrentTime.js";

export default function App($app) {

  this.state = {
    runningState: 'preRun' // preRun, run, stop
  };


  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const $target = document.createElement('div');
  $target.className = 'wow';
  $target.innerHTML = `<b>강조된 글자</b>`;

  $app.append($target);


  const currentTime = new CurrentTime({ $app });
  const buttons = new Buttons({ $app, runningState: this.state.runningState });

  this.render = () => {
    switch(this.state.runningState){
      case 'preRun':

      case 'run':
      case 'start':
        
    }
  };
 
 
 
 
 
  const $startButton = $app.getElementsByClassName('start');
  const $stopButton = $app.getElementsByClassName('stop');
  const $igoButton = $app.getElementsByClassName('igo');
 
 
   $startButton[0].addEventListener('click', e => {
     alert("start 눌림")
     // currentTime의 state 바꾸기
   });
   $stopButton[0].addEventListener('click', e => {
     alert("stop 눌림")
   });
   $igoButton[0].addEventListener('click', e => {
     alert("igo 눌림")
   });
 




}