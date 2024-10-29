function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    alert(`Gracias, ${nombre}. Pronto recibirás una respuesta en ${email}.`);
  });
  