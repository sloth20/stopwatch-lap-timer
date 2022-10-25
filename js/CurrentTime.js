export default function CurrentTime({ $app, runningState }){
  this.runningState = runningState;
  let displayTime = 0;
  let presentTime = 0;
  let targetTime = 0;
  let stopTime = 0;
  let laps = [];
  let timer = null;

  const $target = document.createElement('div');
  $target.className = 'currentTime';
  $app.append($target);

  const $target2 = document.createElement('table');
  $target2.className = 'laps-list';
  $target2.innerHTML = '<tr><th>순번</th><th>시간</th></tr>';
  $app.append($target2);


  
  const render = () => {
    switch(this.runningState) {
      case 'preRun':
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
    // 여기에 laps가 비지 않았을 때 td 태그로 이루어진 랩 기록 보여주도록 처리. displayTimeToMinAndSecAndMs() 사용
  }

  this.handleLapClick = () => {
    laps.push(displayTime);
  }

  const displayTimeToMinAndSecAndMs = () => {
    let min = Math.floor(displayTime/1000/60);
    let sec = Math.floor(displayTime/1000%60);
    let ms = Math.floor(displayTime/10%100);

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