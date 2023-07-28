function toggleModule(module) {
    const content = module.nextElementSibling;
    const submodules = content.querySelectorAll(".submodule-content"); // Select all submodules within the module
  
    if (content.style.display === "none") {
      // Expand the module and all submodules when collapsed
      content.style.display = "block";
    } else {
      // Collapse the module and all submodules when expanded
      content.style.display = "none";
    }
  
    // Collapse all submodules within the module
    submodules.forEach((submodule) => {
      submodule.style.display = "none";
    });
  }
  
  function toggleSubmodule(submodule) {
    const content = submodule.nextElementSibling;
    content.style.display = content.style.display === "none" ? "block" : "none";
  }
  