

let tasks = [
     {"url": "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/", "bilde":"1"}, 
     {"url": "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/", "bilde":"2"},
     {"url": "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/", "bilde":"3"},
     {"url": "https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/", "bilde":"4"}
     ]
      
      const todoList = document.getElementById("genfelt");
      
      for(const task of tasks) {
          const card = createCard(task);
          todoList.appendChild(card);
      }
      

      function createCard(task) {
          

        const carden = document.createElement("div");
        carden.classList.add("column");

        const cardto = document.createElement("div");
        cardto.classList.add("content");

        const link = document.createElement("a");
        const url = task.url;
        link.setAttribute('href', url);
    
        const img = document.createElement("img");
        img.setAttribute('id', 'imgimp');
        const bildesti = "./"+ task.bilde +".png";  
        img.src = bildesti ;
        
        link.appendChild(img);
        cardto.appendChild(link);
        carden.appendChild(cardto);
    
        return carden;
      }