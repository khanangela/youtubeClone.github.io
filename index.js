const searchInput = document.getElementById("search-input");
      const crossIcon = document.querySelector(".icon");

      searchInput.addEventListener("input", function () {
        if (this.value) {
          crossIcon.style.display = "block";
        } else {
          crossIcon.style.display = "none";
        }
      });

      crossIcon.addEventListener("click", function () {
        searchInput.value = "";
        crossIcon.style.display = "none";
        searchInput.focus();
      });


    //  dark/light themme

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('img').src = "youtube_logo.png";
        document.querySelector('img').style.width= "100px";

    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);