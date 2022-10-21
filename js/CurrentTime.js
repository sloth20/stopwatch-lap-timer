export default function CurrentTime({ $app, runningState }){
  this.runningState = runningState;
  let displayTime = 0;
  let presentTime = 0;
  let targetTime = 0;
  let stopTime = 0;

  const $target = document.createElement('div');
  $target.className = 'wow';
  $app.append($target);
  let timer = null;
  
  const render = () => {
    switch(this.runningState) {
      case 'preRun': // 초기화
        clearInterval(timer);  
        stopTime = 0;
        displayTime = 0;
        $target.innerHTML = `<i>${displayTimeToMinAndSecAndMs()}</i>`;
        break;
      case 'run':
        targetTime = new Date().getTime();
        timer = setInterval(()=> {
          presentTime = new Date().getTime();
          displayTime = stopTime + presentTime - targetTime;
          $target.innerHTML = `<i>${displayTimeToMinAndSecAndMs()}</i>`;
        }, 10);
        break;
      case 'stop':
        clearInterval(timer);
        stopTime = displayTime;
        break;
    }
  }

  const displayTimeToMinAndSecAndMs = () => {
    let min = Math.floor(displayTime/1000/60);
    let sec = Math.floor(displayTime/1000%60);
    let ms = Math.floor(displayTime%100); // 수정 필요
    console.log(ms);
    if (min<10) {
      min = '0' + min.toString();
    }
    if (sec<10) {
      sec = '0' + sec.toString();
    }
    if (ms<10) {
      ms = '0' + ms.toString();
    }

    return `${min}:${sec}:${ms}`;
  }

  this.setState = ({ runningState }) => {
    this.runningState = runningState;
    render();
  }
}