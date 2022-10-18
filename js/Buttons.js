export default function Buttons ({ $app, runningState }) {
  this.runningState = runningState;
  const $target = document.createElement('div');
  $target.className = 'time-watch';
  $target.innerHTML = `
    <button class="start">시작!</button>
    <button class="stop">정지!</button>
    <button class="igo">아이고!</button>
    `;
  $app.append($target);


  this.setState = runningState => {
    this.runningState = runningState;
    this.render();
  }

  this.render = () => {
    
    
    
    $target.innerHTML = `
    
    `
  };




}