export default function CurrentTime({ $app, runningState }){
  this.runningState = runningState;
  let displayTime = 0;
  let presentTime = 0;
  let targetTime = 0;
  let stopTime = 0;
  let lapOrder = 1;
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
        lapOrder = 1;
        $target.innerHTML = `<i>${displayTimeToMinAndSecAndMs(displayTime)}</i>`;
        $target2.innerHTML = '<tr><th>순번</th><th>시간</th></tr>';
        break;
      case 'run':
        targetTime = new Date().getTime();
        timer = setInterval(() => {
          presentTime = new Date().getTime();
          displayTime = stopTime + presentTime - targetTime;
          $target.innerHTML = `<i>${displayTimeToMinAndSecAndMs(displayTime)}</i>`;
        }, 10);
        break;
      case 'stop':
        clearInterval(timer);
        stopTime = displayTime;
        break;
    }
  }

  this.handleLapClick = () => {
    $target2.innerHTML += `<tr><td>${lapOrder}</td><td>${displayTimeToMinAndSecAndMs(displayTime)}</td></tr>`;
    lapOrder++;
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