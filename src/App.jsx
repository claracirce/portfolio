// importa o CSS
import "./style.css"

// React usa useEffect para rodar código quando o componente carrega
import { useEffect } from "react"

function App(){

/* ===============================
   FUNÇÃO TOCAR  PAUSAR MÚSICA
================================ */

function tocarMusica(){

let musica = document.getElementById("musica")
let playBtn = document.getElementById("playBtn")

if(musica.paused){

musica.play()
playBtn.innerHTML="❚❚"

}else{

musica.pause()
playBtn.innerHTML="▶"

}

}


/* ===============================
   FUNÇÃO CRIAR ESTRELAS
================================ */

function criarEstrela(){

const estrela = document.createElement("div")

estrela.classList.add("star")

estrela.innerHTML="★"

estrela.style.left = Math.random()*100+"vw"

estrela.style.animationDuration = (Math.random()*3+2)+"s"

document.body.appendChild(estrela)

setTimeout(()=>{

estrela.remove()

},5000)

}


/* ===============================
   INTERVALO DAS ESTRELAS
================================ */

useEffect(()=>{

const intervalo = setInterval(criarEstrela,200)

return () => clearInterval(intervalo)

},[])


/* ===============================
   JSX DA PÁGINA
================================ */

return(

<>


{/* MENU */}
<nav>
<a href="#about">About Me</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
</nav>

{/* HERO */}
<section id="about" className="hero">


<div className="sobre-container">
   <div className="sailor-img"><img src="sailor.jpg" alt="Sailor"/>
   </div>

{/* PLAYER DE MÚSICA */}

<div className="music-player">

<button id="playBtn" onClick={tocarMusica}>
▶
</button>


<audio id="musica">
<source src="song.mp3" type="audio/mpeg"/>
</audio>

</div>
<br />

<img src="/sailor.gif" alt="Sailor Moon" className="floating-gif" />
<h2>About Me</h2>

<p className="tagline">
Front-End Developer apaixonada por tecnologia, jogos e interfaces criativas.
</p>

<p>
Olá! Eu sou Maria Clara. Tenho 26 anos, natural de Recife-PE e sou formada em Redes de Computadores,
além de possuir formação técnica em Informática e certificação em Front-End com React.
Sou apaixonada por tecnologia e estou em busca de uma oportunidade para aplicar
e desenvolver minhas habilidades de forma profissional.
</p>

<p>
Gosto de explorar tanto o lado técnico quanto criativo da tecnologia,
principalmente no desenvolvimento de interfaces e soluções que tornem
a experiência do usuário mais agradável.
</p>

<p>
Fora do mundo da programação, tenho alguns hobbies que fazem parte da minha
personalidade: adoro culinária, leitura e colecionar figure actions.
Também tenho um grande interesse por jogos e pela cultura pop asiática.
</p>

<p>
Este portfólio é um espaço onde compartilho um pouco das minhas habilidades,
projetos e interesses na área de tecnologia.
</p>
<br />
{/* Foto */}

<div className="profile-container">
<img src="clara.jpg" alt="Clara"/>
</div>

</div>
</section>


{/* SKILLS */}

<section id="skills">

<h2>Skills</h2>

<div className="skills-icons">

<a title="HTML">
<img src="html1.png" alt="HTML"/>
</a>

<a title="CSS">
<img src="css1.png" alt="CSS"/>
</a>

<a title="JavaScript">
<img src="js1.png" alt="JavaScript"/>
</a>

<a title="React">
<img src="react1.png" alt="React"/>
</a>

<a title="Python">
<img src="python1.png" alt="Python"/>
</a>

<a title="C++">
<img src="c1.png" alt="C++"/>
</a>

<a title="MySQL">
<img src="mysql2.png" alt="MySQL"/>
</a>

</div>

</section>


{/* PROJETOS */}

<section id="projects">

<h2>Projects</h2>

<div className="projects-container">

  {/* PROJETO 1 */}
  <div className="project-card">
   

    <div className="project-info">
      <h3>Mario Bros Game</h3>
      <p>Projeto inspirado no Mario Bros Desenvolvido com HTML, CSS e JavaScript</p>

      <a 
        href="https://claracirce.github.io/projectmario/" 
        target="_blank" 
        rel="noreferrer"
        className="project-btn"
      >
        Ver Projeto
      </a>
    </div>
  </div>

  {/* PROJETO 2 */}
  <div className="project-card">

    <div className="project-info">
      <h3>Portfólio React</h3>
      <p>Portfólio moderno desenvolvido com React e Vite.</p>

      <a 
        href="https://seulink.com" 
        target="_blank" 
        rel="noreferrer"
        className="project-btn"
      >
        Ver Projeto
      </a>
    </div>
  </div>

  {/* PROJETO 3 */}
  <div className="project-card">

    <div className="project-info">
      <h3>App de Tarefas</h3>
      <p>Aplicação para gerenciamento de tarefas com interface moderna.</p>

      <a 
        href="https://seulink.com" 
        target="_blank" 
        rel="noreferrer"
        className="project-btn"
      >
        Ver Projeto
      </a>
    </div>
  </div>

   {/* PROJETO 4 */}
  <div className="project-card">

    <div className="project-info">
      <h3>App de Tarefas</h3>
      <p>Aplicação para gerenciamento de tarefas com interface moderna.</p>

      <a 
        href="https://seulink.com" 
        target="_blank" 
        rel="noreferrer"
        className="project-btn"
      >
        Ver Projeto
      </a>
    </div>
  </div>

</div>

</section>


{/* CONTATO */}

<section id="contact">

<h2>Contact</h2>

<div className="contact-icons">

<a href="https://github.com/claracirce" target="_blank" rel="noreferrer">
<img src="gii.png" alt="github"/>
</a>

<a href="https://www.linkedin.com/in/claracirce/" target="_blank" rel="noreferrer">
<img src="linkedin3.png" alt="linkedin"/>
</a>

<a href="https://mail.google.com/mail/?view=cm&to=mariaclarass99@gmail.com">
<img src="gmail1.png" alt="gmail"/>
</a>

</div>

</section>

</>

)

}

export default App
