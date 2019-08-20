# ACADEMIA HOPAKI
- [Resumen](#resumen-del-proyecto)
- [Definición del producto](##Definición-del-producto)
- [Historias de Usuario](#Historias-de-usuario)
- [Consideraciones generales](#consideraciones-generales)
- [Consideraciones técnicas](#consideraciones-técnicas)
- [Checklist](#checklist)
# Resumen del proyecto
## ¿Que es HOPAKI?
HOPAKI (Home Parents Kids), es una webb app desarrollada para las madres y padres de familia que han tomado la decisión de educar "academicamente" en casa a sus hijos (homeschooling).
## Investigación
¿Qué es el homeschooling?

Es un método de aprendizaje alternativo a la educación escolarizada, el cual, no requiere asistir a la escuela o colegio. 

No hay un plan de estudios definido, se ajusta a los objetivos y al ritmo de aprendizaje de los hijos,fomentando, principalmente, el autoaprendizaje de los niños, no hay tareas, etc.

Las familias eligen este método de aprendizaje pero no por "odiar la escuela", si no que consideran que el sistema escolarizado esta muy obsoleto y estandarizado, limitando el ritmo de aprendizaje de cada alumno, obligandole a ir mas lento en lugar de fomentarle el autoprendizaje. 

Otro motivo por el cual eligen este sistema, es para fortalecer la conexión con sus hijos, darles oportunidad de aprender y hacer distintas actividades que en un sistema escolarizado regido por horarios no les permite.

En México, todos los niños y niñas tienen derecho a la educación, sin embargo, no hay una ley prohiba educar desde casa, por lo que afortunadamente es legal y existen diversos programas de apoyo al respecto, algunos de ellos son:
1. Examenes realizados por el [INEA](https://www.gob.mx/inea/documentos/primaria-y-secundaria)
2. Programa [MEVyT 10-14](http://www.inea.gob.mx/index.php/inicio-portal-inea/mevyt/eadulmevyt1014bc.html)
3. Comunidad [Homeschooling México](https://www.homeschoolingmexico.com.mx/)

## Ideación
1. Diseño de la Interfaz de Usuario
-   Prototipo de baja fidelidad
     - ![Prototipo 1.1](https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/prototipobajafidelidad.png?raw=true)
     (De izquierda a derecha)
      Bienvenida, inicio de sesión,vista previa de inicio, elementos guardados en perfil de usuario.

   -   Prototipo 1.2 Alta fidelidad (figma)
     ![Prototipo alta fidelidad](https://github.com/VianeyLaraRangel/MEX008-social-network/blob/master/src/img/imagenprototipo.png?raw=true)

[ENLACE A FIGMA](https://www.figma.com/proto/WhnDjChVmqWcP2N9n7HLYy/hopaki-2?node-id=2%3A75&scaling=min-zoom&redirected=1)

-   Implementación de la Interfaz de Usuario (HTML/CSS/JS)

El _visual design_ se basa en la psicología del color y los componentes de bootstrap.

El **color naranja** representa la diversión, sociabilidad y alegría.

El **color amarillo** representa la vitalidad y juventud, todo unido bajo el **color azul**  que representa lo espiritual, la reflexión y la calma.

[Artículo de referencia](https://aprendizajeyvida.com/2014/04/28/el-color-naranja/)


   <!--* ![Ejemplos]()-->
# Definición del producto

- ¿Quiénes son los principales usuarios de producto?

   Esta Webb App esta dirigda a madres y padres que han decidido implementar la educación en casa o homeschooling, apoyandose de diversos medios impresos y digitales, videotutoriales, programas de certificaciones en linea para una mejor educación para sus hijos.

- ¿Cuáles son los objetivos de estos usuarios en relación con el producto?

   Compartir tips, experiencias, programas de apoyo y todo tipo de información para mejorar e incentivar el aprendizaje de sus hijos.

- ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

   Realizar publicaciones para compartir información relevante, asi como guardar y tener mini-tableros donde puedan agrupar por temas la información que ven de otros usuarios.

- ¿Cuándo utilizan o utilizarían el producto?
   
   Este sitio será utilizado al momento en el que esten enseñando a sus hijos diversas asignaturas, dependiendo del tema o agenda que tengan planificada.

# Historias de usuario
1. Como usuario nuevo debo poder crear una cuenta con email y password para poder iniciar sesion. Por otro lado, necesito también tener la opción de iniciar sesión con mi cuenta de Google o Facebook.
   > **Criterios de aceptación**
   > - Si el mail o password no es válido, al momento de logearme, debo poder
   >   ver un mensaje de error.
   > - Debe ser visible si hay algún mensaje de error.
   > - Debo poder ver esta página de creación en Móviles y desktop (responsive).
   > - No debe necesitar recargar la página para crear una cuenta (SPA).
   >
   > **Definición de terminado**
   > - La funcionalidad satisface los criterios de aceptación.
   > - El diseño visual corresponde al prototipo de alta fidelidad.
   > - El código de esta funcionalidad recibió code review.
   > - La funcionalidad esta desplegada y pública para ser probada.
   > - La funcionalidad fue probada manualmente.
   > - Se implementó el feedback recibido y que se consideró necesario.
2. Como usuario, deseo publicar y compartir mi experiencia al respecto, asi como materiales y links educativos con otros usuarios.
   > **Criterios de aceptación**
   > - Crear una publicación.
   > - -Leer las publicaciones de otros usuarios.
   > - Eliminar mis propias publicaciones cuando lo desee.
   > - Editar las publicaciones que he realizado.
   > - Cerrar sesión.

   > **Definición de terminado**
   > - La funcionalidad satisface parcialmente los criterios de aceptación.
   > - Puede crear una publicación.
   > - Puede leer las publicaciones de otros usuarios.
   > - Puede eliminar publicaciones.
3. Como usuario, quiero poder entrar a mi perfil y ver las publicaciones guardadas en algunas clasificaciones.
   > **Criterios de aceptación**
   > - El usuario pueda ver publicaciones agrupadas por hashtag.
   > - El usuario puede dar like a las publicaciones de su interés generadas por otros usuarios.

   > **Definición de terminado**
   > - La funcionalidad satisface el mínimo de los criterios de aceptación.
   > - El usuario puede aplicar like / dislike en las publicaciones.

# Consideraciones generales
- Este proyecto se resolvió en tercia.
 - Integrantes:
    * Rosario Vazquez Salazar.
    * Silvia Elizabeth Trinidad Guerrero.
    * Leticia Vianey Lara Rangel.
- Tiempo para completarlo: Fueron 3 semanas divididas en 3 sprints (una entrega del producto funcional al término de cada sprint).
 ### Instalación
  - ¿Cómo visualizo el producto final?
  La demo del producto está disponible gracias al host de [GitHub Pages](https://vianeylararangel.github.io/MEX008-social-network/src/).
  Adicionalmente, presentamos la aplicación desplegada en el [hosting de Firebase](https://hopaki-prueba.firebaseapp.com/).
---
## Detalles del proyecto
- Metodología:
 Fué usado el método **Ágile** por medio de tablero **Kanban en papel** para ser usado por el  SQUAD de trabajo y con TRELLO para el tablero **Kanban digital** que usamos en dupla en el desarrollo del proyecto.
### Herramientas:
 * GitHub y GitHub Pages: Control de versiones y hosting.
 * Trello: Organización y gestión de tareas.
 * Figma: Prototipo de alta fidelidad.
 * Editor de texto: Visual Studio Code.
 * Canva: diseño de logo y presentación.
### Tecnologías
- [Firebase](https://firebase.google.com/)
- [Bootstrap V4.3](https://getbootstrap.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase hosting](https://firebase.google.com/docs/hosting)
# Consideraciones técnicas
La lógica del proyecto está implementada completamente en JavaScript(ECMA 6), HTML5 y CSS3.
En este proyecto NO fueron usadas librerías o
frameworks de javascript, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías de estilo
# Checklist
- [x] Usa VanillaJS.
- [x] No hace uso de this.
- [x] Debe ser una **SPA**.
- [x] Debe ser responsive.
- [x] Deben haber recibido code review de al menos una compañera de otro equipo.
- [x] Hicieron los test unitarios
- [x] Testearon manualmente buscando errores e imperfecciones simples.
- [x] Hicieron pruebas de usabilidad e incorporaron el feedback de los
   usuarios como mejoras.
- [x] Desplegaron su aplicación y etiquetaron la versión (git tag).