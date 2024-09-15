
    let slideIndex = 0;
    let slideTimer;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        // Cacher toutes les diapositives et désactiver tous les points
        
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        // Vérifier les limites des index des diapositives
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }

        // Afficher la diapositive actuelle et activer le point correspondant
        slides[slideIndex].style.display = 'block';
        dots[slideIndex].classList.add('active');

        // Réinitialiser le délai avant le prochain changement de diapositive
       clearTimeout(slideTimer);
        slideTimer = setTimeout(nextSlide, 2000);
    }

    function prevSlide() {
        slideIndex--;
        showSlide(slideIndex);
    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    // Créer un point pour chaque diapositive
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            showSlide(index);
            slideIndex = index;
        });
        dotsContainer.appendChild(dot);
    });

    // Afficher initialement la première diapositive
    showSlide(0);




function alpha(txt)
    {
      for(let i=0;i<txt.length;i++){

      
      if(!isNaN(txt[i]))
      return false;
    }
    return true ;
  }
  function verifMail(m)
  {
   
    var p1=m.indexOf('@');
    var p2=m.lastIndexOf('.');
    if(p1==-1 || p2==-1 || p2<p1)
    
  return false; 
  else 
  return true;}

function verif(){
    var msg="Thanks for filling out our form!";
    var nom=document.formulaire.fname.value;
    if(!alpha(nom))
    {
      msg=" First Name Incorrect" ;
      return msg ;
      
    }
    var prénom=document.formulaire.lname.value;
    if(!alpha(prénom))
    {
      msg=" Last Name Incorrect" ;
      return msg ;
    }
    var n=document.formulaire.mobile.value;
    if(isNaN(n)){
        msg=" Mobile Incorrect";
        return msg;
    }
    var mail=document.formulaire.mail.value;
    if(!verifMail(mail))
    {
      msg=" MAIL Incorrect ";
      return msg ; 
    }
   return msg;
}
/*____contact____*/
function emailSend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aboudaoumayma@gmail.com",
        Password : "A2A1655408B75163A5413219F8A5936A83AE",
        To : 'aboudaoumayma50@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
