export default function CurrentTime({ $app }){
  const $target = document.createElement('div');
  $target.className = 'wow';
  $target.innerHTML = `<i>12:00</i>`;

  $app.append($target);

}