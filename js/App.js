import Buttons from "./Buttons.js";
import CurrentTime from "./CurrentTime.js";

export default function App($app) {

  let state = {
    runningState: 'preRun' // preRun, run, stop
  };

  const setState = (nextState) => {
    state = nextState;
    render();
  };

  const $target = document.createElement('div');
  $target.className = 'app';

  $app.append($target);

  let currentTime;
  let buttons;
 


    const render = () => {
      if(!currentTime){ currentTime = new CurrentTime({$app, runningState: state.runningState })}
      if(!buttons){ buttons = new Buttons({$app, runningState: state.runningState })}

      currentTime.setState({ runningState: state.runningState });
      buttons.setState({ runningState: state.runningState });

      handleEventListening();
    }

    const handleEventListening = () => {
      const $startButton = document.querySelector('.start');
      if($startButton){
        $startButton.addEventListener('click', e => {
          setState({...this.state, runningState: 'run'});
        });
      }

      const $stopButton = document.querySelector('.stop');
      if($stopButton){
        $stopButton.addEventListener('click', e => {
          setState({...this.state, runningState: 'stop'});
        }); 
      }
     
      const $resetButton = document.querySelector('.reset');
      if($resetButton) {
        $resetButton.addEventListener('click', e => {
          setState({...this.state, runningState: 'preRun'});
        });
      }
    }

    render();

}