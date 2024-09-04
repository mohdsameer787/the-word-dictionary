window.addEventListener('load',()=>{
  textgenretor();
   searchapi()

})

async function fetchapi1(word){
   let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
   let info =  await data.json();
   console.log(info);
   const meanings =info[0].meanings;
   
   
   for (let index = 0; index < meanings.length; index++) {
      console.log(`noun:${meanings.definitions}`);
     
   }
   
    binddata2(info,meanings);
   
   }




async function fetchapi(word){
let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
let info =  await data.json();
console.log(info);
const meanings =info[0].meanings;


for (let index = 0; index < meanings.length; index++) {
   console.log(`noun:${meanings.definitions}`);
  
}

 binddata(info,meanings);

}

function binddata(info,meanings){
   let contaner=document.querySelector('.main')
  contaner.innerHTML=`       <template id="temp" class="search-results">
    <h2>seach result </h2>
           <div class="sound">
           <div id="word"> </div>
           <img class="soundlogo" src="logo.svg" alt="sound">
        </div>
           <p class=definationhaed><strong>defination</strong></p>
           <template class="definetion">
            <p class="para"></p></template>
            
            <template class="def"><p> <strong>example</strong></p>
            </template>


           
            <!-- Dynamically populated search results -->
      </template>`
   let card=document.getElementById('temp');
   console.log(card)


   let clone1=card.content.cloneNode(true);
   console.log(clone1)
 
   

   let word=clone1.querySelector('#word')
   word.innerHTML=` <strong><em>${info[0].word}</em></strong>`;
  let sound1=clone1.querySelector('.sound')
  console.log(sound1)
    sound1.querySelector('.soundlogo').addEventListener('click',()=>{
      let url= info[0].phonetics[0].audio;
      let song = new Audio(url);
      song.play();
    })
 
   let dis=clone1.querySelector('.definetion');
   let dis2=clone1.querySelector('.def');
   console.log(dis)
   let clone2=dis.content.cloneNode(true);
   let clone3=dis2.content.cloneNode(true);
   console.log(`clone2 ${clone2}`);


  

   for (let index = 0; index < meanings.length; index++) {
  
      
  let discrption=document.createElement("p")
  console.log(discrption)
      discrption.innerHTML=`${index+1}. <em><strong>${meanings[index].partOfSpeech} </strong> ${meanings[index].definitions[0].definition}   <strong> synonyms </strong>(${meanings[index].synonyms})  </em>`
     clone2.appendChild(discrption)
    
   }
   for (let index = 0; index < meanings.length; index++) {
      let verb1 =document.createElement('p');
if(!meanings[index].definitions[0].example){
   break;
}
      verb1.innerHTML=`${index+1}. <em>${meanings[index].definitions[0].example}</em>`
      clone3.appendChild(verb1)  
      
   }
   
   clone1.appendChild(clone2)
   clone1.appendChild(clone3)
   contaner.appendChild(clone1)
}
function searchapi(){
   let head=document.querySelector('header');
   let result=head.querySelector('.seach');
   let seachbutton=head.querySelector('.search-button');
   seachbutton.addEventListener("click",()=>{
     let querry= result.value
     console.log(querry);
     fetchapi(querry);
   })
   
}
function textgenretor(){
   const words = [
      "Cajole","Onomatopoeia","Abjure","Enormity"
  ];

  // Function to get the current day as a unique identifier


  // Function to get a random word
  function getRandomWord() {
      const index = Math.floor(Math.random() * words.length);
      return words[index];
  }

  // Function to get the word of the day
  function getWordOfTheDay() {
      const currentDay = getCurrentDay();
      const storedWordData = JSON.parse(localStorage.getItem('wordOfTheDay'));

      if (storedWordData && storedWordData.date === currentDay) {
          return storedWordData.word;
      } else {
          const newWord = getRandomWord();
          localStorage.setItem('wordOfTheDay', JSON.stringify({ date: currentDay, word: newWord }));
          return newWord;
      }
     
  }
 
   let   quarry=getRandomWord();
   console.log(quarry)
      fetchapi1(quarry)
}
function binddata2(info,meanings){
   console.log(info)
   let contaner=document.querySelector('.wordofday')
  contaner.innerHTML=`       <template id="temp1" class="search-results1">
  <h2>Word of the day </h2>
           <div class="sound1">
           <div id="word1"> </div>
           <img class="soundlogo1" src="logo.svg" alt="sound">
        </div>
           <p class=definationhaed1><strong>defination</strong></p>
           <template class="definetion1">
            <p class="para1"></p></template>
            
            <template class="def1"><p> <strong>example</strong></p>
            </template>


           
            <!-- Dynamically populated search results -->
      </template>`
   let card=document.getElementById('temp1');
   console.log(card)


   let clone1=card.content.cloneNode(true);
   console.log(clone1)
 
   

   let word=clone1.querySelector('#word1')
   word.innerHTML=` <strong><em>'${info[0].word}'</em></strong>`;
  let sound1=clone1.querySelector('.sound1')
  console.log(sound1)
    sound1.querySelector('.soundlogo1').addEventListener('click',()=>{
      let url= info[0].phonetics[0].audio;
      let song = new Audio(url);
      song.play();
    })
 
   let dis=clone1.querySelector('.definetion1');
   let dis2=clone1.querySelector('.def1');
   console.log(dis)
   let clone2=dis.content.cloneNode(true);
   let clone3=dis2.content.cloneNode(true);
   console.log(`clone2 ${clone2}`);


  

   for (let index = 0; index < meanings.length; index++) {
  
      
  let discrption=document.createElement("p")
  console.log(discrption)
      discrption.innerHTML=`${index+1}. <em><strong>${meanings[index].partOfSpeech} </strong> ${meanings[index].definitions[0].definition}   <strong> synonyms </strong>(${meanings[index].synonyms})  </em>`
     clone2.appendChild(discrption)
    
   }
   for (let index = 0; index < meanings.length; index++) {
      let verb1 =document.createElement('p');
if(!meanings[index].definitions[0].example){
   break;
}
      verb1.innerHTML=`${index+1}. <em>${meanings[index].definitions[0].example}</em>`
      clone3.appendChild(verb1)  
      
   }
   
   clone1.appendChild(clone2)
   clone1.appendChild(clone3)
   contaner.appendChild(clone1)
}
