    window.onscroll = function () {
      updateProgressBar();
      checkEndOfPage();
    };

    function updateProgressBar() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollPercent = (scrollTop / scrollHeight) * 100;
      document.getElementById("progressBar").style.width = scrollPercent + "%";
    }

    function checkEndOfPage() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollTop >= scrollHeight - 10) {
        document.getElementById("endMessage").classList.add("show");
      } else {
        document.getElementById("endMessage").classList.remove("show");
      }
    }
