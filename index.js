// Write your solution here!

const cats=["Milo","Otis","Garfield"];


function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  function appendCat(Broom){
    let append1= [...cats,Broom];
    return append1;
  }
  function prependCat(Arnold){
    let prepend1=[Arnold, ...cats];
    return prepend1
  }
  function removeLastCat(){
    let copyofcats= cats.slice(0, -1);
    return copyofcats;
  }
  function removeFirstCat(){
    let copyofcats2= cats.slice(1)
    return copyofcats2;
  }

