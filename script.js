function register() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
  
    if (!user || !pass) {
      document.getElementById("message").innerText = "Ju lutem plotësoni të gjitha fushat!";
      return;
    }
  
    if (localStorage.getItem(user)) {
      document.getElementById("message").innerText = "Përdoruesi ekziston!";
    } else {
      localStorage.setItem(user, pass);
      document.getElementById("message").innerText = "Regjistrimi u krye me sukses!";
    }
  }
  
  function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const savedPass = localStorage.getItem(user);
  
    if (pass === savedPass) {
      sessionStorage.setItem("loggedInUser", user);
      if (user === "admin") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "home.html";
      }
    } else {
      document.getElementById("message").innerText = "Emri ose fjalëkalimi është i gabuar!";
    }
  }
  function adminAccess() {
    const code = prompt("Vendos kodin e fshehtë për admin:");
    if (code === "admin123") {
      sessionStorage.setItem("loggedInUser", "admin");
      window.location.href = "admin.html";
    } else {
      alert("Kodi është i gabuar!");
    }
  }
  
  function checkSession() {
    const user = sessionStorage.getItem("loggedInUser");
    if (!user) {
      alert("Nuk jeni të kyçur. Do të riktheheni në faqe kryesore.");
      window.location.href = "index.html";
    }
  }
  
  function logout() {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  }
  
  function llogarit() {
    const paga = parseFloat(document.getElementById("paga").value);
    const lloji = document.getElementById("lloji").value;
  
    if (isNaN(paga) || paga <= 0) {
      document.getElementById("rezultati").innerText = "Shkruani një shumë valide!";
      return;
    }
  
    let rezultati;
    if (lloji === "bruto") {
      rezultati = paga * 0.8;
      document.getElementById("rezultati").innerText = `Paga Neto: €${rezultati.toFixed(2)}`;
    } else {
      rezultati = paga / 0.8;
      document.getElementById("rezultati").innerText = `Paga Bruto: €${rezultati.toFixed(2)}`;
    }
  }
