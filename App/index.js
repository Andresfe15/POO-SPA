
const loadContent = () => {//se define una función llamada loadContent
    const app = document.getElementById('app');// Se obtiene el elemento con el ID "app" del documento HTML y se guarda en la variable app.
    //Se asigna el contenido HTML dentro del elemento con el ID "app".
    app.innerHTML = ` 
      <nav>
        <div class="logo">
          <img src="App/assets/logo.jpg" alt="Logo">
        </div>
        <ul class="menu">
          <li><a href="#/inicio">Inicio</a></li>
          <li><a href="#/servicios">Servicios</a></li>
          <li><a href="#/contactos">Contacto</a></li>
        </ul>
      </nav>
      <main>
      <div class="content-left">
        <article>
          <img src="App/assets/imagen.jpg" alt="Imagen">
        </article>
        <section>
          <p>La programación orientada a objetos (POO) es un paradigma de programación que se basa en la idea de "objetos", entidades que combinan datos y operaciones. Los conceptos clave incluyen clases (plantillas para objetos), objetos (instancias de clases), encapsulamiento (ocultamiento de detalles internos), herencia (reutilización de código entre clases) y polimorfismo (capacidad de objetos para comportarse de diferentes maneras). POO es ampliamente utilizado por su capacidad para modelar entidades del mundo real y crear código modular y reutilizable.</p>
        </section>
      </div>
      <aside>
        <h2>Algunos conceptos básicos:</h2>
        <p><b>Clases y objetos:</b> Las clases son plantillas para crear objetos, donde se definen los atributos y métodos que los objetos tendrán. Los objetos son instancias concretas de una clase.</p>

        <p><b>Encapsulación:</b> Es el concepto de ocultar los detalles de implementación de un objeto y solo exponer una interfaz pública. Esto ayuda a mantener la integridad de los datos y facilita el cambio sin afectar otras partes del programa.</p>
        
        <p><b>Herencia:</b> Permite que una clase (subclase) herede atributos y métodos de otra clase (superclase). Esto fomenta la reutilización del código y la organización jerárquica de las clases.</p>
        
        <p><b>Polimorfismo:</b> Se refiere a la capacidad de objetos de diferentes clases de responder al mismo mensaje de manera diferente. Esto permite tratar objetos de distintas clases de manera uniforme.</p>
        <h2>Ejemplo de POO:</h2>
        <img src="App/assets/POO.png">
      </aside>
    </main>
    
      <footer>
        <p>Andres Felipe Sánchez Sánchez,Jhon Alexander Chavarria Muñoz;producto1,web2.Derechos reservados &copy; 2024</p>
      </footer>
    `;
  };
  
  // Cargar contenido al cargar la página
  document.addEventListener('DOMContentLoaded', loadContent);

  
