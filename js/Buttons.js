export default function Buttons ({ $app, runningState }) {
  this.runningState = runningState;

  const $target = document.createElement('div');
  $target.className = 'time-watch';
  $app.append($target);
 
  const render = () => {
    switch(this.runningState) {
      case 'preRun':
        $target.innerHTML = `
        <br />
        <button class="start">시작</button>
        `;
        break;        
      case 'run':
        $target.innerHTML = `
        <br />
        <button class="lap">랩</button>
        <button class="stop">정지</button>
        `;
        break;        
      case 'stop':
        $target.innerHTML = `
        <br />
        <button class="start">재시작</button>
        <button class="reset">리셋</button>
        `;
        break;        
      }
  }

  this.setState = ({ runningState }) => {
    this.runningState = runningState;
    render();
  }

  render();
}