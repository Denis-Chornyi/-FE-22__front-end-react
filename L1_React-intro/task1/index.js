const rootElement = document.querySelector('#root');

const greetingElem = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetingElem, rootElement);

function getSum(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i += 1) {
    array.push(arr[i]);
  }
  return array.length;
}
console.log(getSum(5, 5));
