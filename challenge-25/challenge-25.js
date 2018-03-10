(function(win, doc){
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */


  const btnClick = document.querySelector('[data-js="click"]');
  const btnDblClick = document.querySelector('[data-js="dblClick"]');
  const btnWheel = document.querySelector('[data-js="wheel"]');

  const inputKeyUp = document.querySelector('[data-js="keyup"]');
  const inputKeyDown = document.querySelector('[data-js="keydown"]');
  const inputKeyPress = document.querySelector('[data-js="keypress"]');
  const inputCopy = document.querySelector('[data-js="copy"]');

  const inputCheckbox = document.querySelector('[data-js="inputCheckbox"]');

  on(btnClick, 'click', function(event){ 
    event.preventDefault();
    alert('Clique simples.');
  });


  on(btnDblClick, 'dblclick', function(event){
    event.preventDefault();
    alert('Clique duplo.');
  });

  on(btnWheel, 'wheel', function(){
    alert('Wheel.');
  });

  on(inputKeyUp, 'keyup', function (event) {
    this.value = event.type;
  });

  on(inputKeyDown, 'keydown', function (event) {
    this.value = event.type;
  });

  on(inputKeyPress, 'keypress', function (event) {
    this.value = event.type;
  });

  on(inputCheckbox, 'change', function(){
    alert('Change!');
  });

  on(win, 'load', function(){
    alert('load');
  });

  on(win, 'scroll', function(event){
    console.log(event);
  });

  on(inputCopy, 'copy', function(event){
    console.log(event.target.value);
  });

  function on(element, eventName, callback) {
    return element.addEventListener(eventName, callback);
  }

}(window, document));