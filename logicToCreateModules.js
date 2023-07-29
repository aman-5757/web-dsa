// logicToCreateModules.js

function generateModulesFromJSON(data) {
    const main = document.querySelector('main');
  
    data.modules.forEach((moduleData, moduleIndex) => {
      const module = document.createElement('section');
      module.classList.add('module');
  
      const moduleTitle = document.createElement('h2');
      moduleTitle.classList.add('module-title');
      moduleTitle.innerHTML = `<i class="fas fa-folder"></i> Module ${moduleIndex + 1}: ${moduleData.title}`;
      moduleTitle.onclick = function () {
        toggleModule(this);
      };
  
      module.appendChild(moduleTitle);
  
      const moduleContent = document.createElement('div');
      moduleContent.classList.add('module-content');
  
      moduleData.submodules.forEach((submoduleData, submoduleIndex) => {
        const submodule = document.createElement('section');
        submodule.classList.add('submodule');
  
        const submoduleTitle = document.createElement('h3');
        submoduleTitle.classList.add('submodule-title');
        submoduleTitle.innerHTML = `<i class="fas fa-file"></i> ${moduleIndex + 1}.${submoduleIndex + 1}: ${submoduleData.title}`;
        submoduleTitle.onclick = function () {
          toggleSubmodule(this);
        };
  
        submodule.appendChild(submoduleTitle);
  
        const submoduleContent = document.createElement('div');
        submoduleContent.classList.add('submodule-content');
  
        const list = document.createElement('ul');
  
        submoduleData.items.forEach((itemText) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<i class="fas fa-code"></i> ${itemText}`;
          list.appendChild(listItem);
        });
  
        submoduleContent.appendChild(list);
        submodule.appendChild(submoduleContent);
        moduleContent.appendChild(submodule);
      });
  
      module.appendChild(moduleContent);
      main.appendChild(module);
    });
  }
  
  // Fetch data from data.json file
  fetch('data.json')
    .then((response) => response.json())
    .then((jsonData) => {
      generateModulesFromJSON(jsonData);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  