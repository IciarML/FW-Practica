const posts = new Map();
let nextId = 0;

export function loadSampleData() {
        addPost({
                imagen: '/Photos/Imagen1.png', titulo: "HARRY POTTER COLECCIÓN COMPLETA", autor: "J.K. Rowling", precio: "80.68",
                genero: "Fantasía",
                sinopsis: "Este estuche contiene las novelas: Harry Potter y la piedra filosofal, Harry Potter y la cámara secreta, Harry Potter y el prisionero de Azkaban, Harry Potter y el cáliz de fuego, Harry Potter y la Orden del Fénix, Harry Potter y el misterio del príncipe, Harry Potter y las reliquias de la muerte. Este estuche contiene las novelas: Harry Potter y la piedra filosofal, Harry Potter y la cámara secreta, Harry Potter y el prisionero de Azkaban, Harry Potter y el cáliz de fuego, Harry Potter y la Orden del Fénix, Harry Potter y el misterio del príncipe, Harry Potter y las reliquias de la muerte. Este estuche contiene las novelas: Harry Potter y la piedra filosofal, Harry Potter y la cámara secreta, Harry Potter y el prisionero de Azkaban, Harry Potter y el cáliz de fuego, Harry Potter y la Orden del Fénix, Harry Potter y el misterio del príncipe, Harry Potter y las reliquias de la muerte.",
                isbn: "9788418173196", editorial: "SALAMANDRA", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "✨Hermione✨",
                                comentario: "Harry Potter es una obra maestra que transporta a los lectores a un mundo mágico lleno de aventuras, amistad y lecciones atemporales. La habilidad de J.K. Rowling para tejer una narrativa cautivadora y crear personajes inolvidables hace de esta serie un clásico moderno.",
                                estrellas: "5/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image2.jpg", titulo: "THE BELL JAR", autor: "Sylvia Plath", precio: "11.18",
                genero: "Biografía",
                sinopsis: "La campana de cristal es una novela semiautobiográfica escrita por la poeta estadounidense Sylvia Plath. Publicada en 1963 bajo el seudónimo de Victoria Lucas, la historia sigue a Esther Greenwood, una talentosa escritora y estudiante de periodismo que experimenta una crisis emocional y existencial durante su pasantía en la ciudad de Nueva York. La narrativa explora la presión social, las expectativas de género y los desafíos emocionales que enfrenta Esther mientras lucha con su identidad y su salud mental. La campana de cristal del título simboliza la sensación de aislamiento y opresión que envuelve a la protagonista. A través de la prosa poética y penetrante de Plath, la novela ofrece una visión impactante de la sociedad de la década de 1950 y aborda temas universales como la búsqueda de la identidad y la lucha contra las expectativas sociales. La campana de cristal es considerada una obra maestra literaria que captura la complejidad de la mente humana y ha dejado una huella duradera en la literatura contemporánea.",
                isbn: "9788408224228", editorial: "FABER AND FABER", idioma: "Inglés", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Isabella",
                                comentario: "The Bell Jar is a profoundly moving work that explores the internal struggle of its protagonist, offering a honest and heartbreaking look at mental health and societal expectations. Sylvia Plath's visceral prose and her ability to capture emotional complexity make this novel a powerful literary experience.",
                                estrellas: "3.9/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image3.jpg", titulo: "RETORNO DE LAS ESTRELLAS", autor: "Stanisław Lem", precio: "13.77",
                genero: "Ficción",
                sinopsis: "Cuando  Hall Bregg regresa a la Tierra tras una arriesgada expedición de diez años en una galaxia lejana, se encuentra con un planeta en el que, en virtud de la contracción del tiempo einsteiniana, han pasado ciento veintisiete años. Tierra tras una arriesgada expedición de diez años en una galaxia lejana, se encuentra con un planeta en el que Bregg se encuentra, pues, ante el difícil reto de integrarse en una sociedad distinta de la que conoció, en la cual, a lo largo todos esos años, se han producido variaciones sustanciales en la especie humana, así como en las ideas y comportamientos, que lo convierten en un anacronismo viviente. Tierra tras una arriesgada expedición de diez años en una galaxia lejana, se encuentra con un planeta en el que muere. ante el difícil reto de integrarse en una sociedad distinta de la que conoció, en la cual, a lo largo todos esos años, se han producido variaciones sustanciales en la especie humana, así como en las ideas y comportamientos.",
                isbn: "9788413621845", editorial: "ALIANZA", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Carlos",
                                comentario: "Es una fascinante exploración de la comunicación intergaláctica y la complejidad del encuentro humano con seres extraterrestres. Con su brillantez especulativa, Lem ofrece una reflexión única sobre la naturaleza de la inteligencia y la posibilidad de comprender lo desconocido en el vasto universo.",
                                estrellas: "4/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image4.jpg", titulo: "INVISIBLE", autor: "Eloy Moreno", precio: "15.15",
                genero: "Literatura",
                sinopsis: "¿Quién no ha deseado alguna vez ser invisible?, ¿Quién no ha deseado alguna vez dejar de serlo? El problema es que nunca he llegado a controlar bien ese poder: A veces, cuando más ganas tenía de ser invisible, era cuando más gente  me veía, y en cambio, cuando deseaba que todos me vieran, era cuando a mi cuerpo le daba por desaparecer. ¿Quién no ha deseado alguna vez ser invisible?, ¿Quién no ha deseado alguna vez dejar de serlo? El problema es que nunca he llegado a controlar bien ese poder: A veces, cuando más ganas tenía de ser invisible, era cuando más gente me veía, y en cambio, cuando deseaba que todos me vieran, era cuando a mi cuerpo le daba por desaparecer. ¿Quién no ha deseado alguna vez ser invisible?, ¿Quién no ha deseado alguna vez dejar de serlo? El problema es que nunca he llegado a controlar bien ese poder: A veces, cuando más ganas tenía de ser invisible, era cuando más gente me veía.",
                isbn: "9788408224228", editorial: "NUBE DE TINTA", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Sophia",
                                comentario: "Un relato conmovedor que aborda las heridas invisibles de la infancia y la lucha por la aceptación. Moreno ofrece una mirada penetrante a través de sus experiencias personales, invitando a los lectores a reflexionar sobre la importancia de la empatía y la comprensión en nuestra sociedad.",
                                estrellas: "4.7/5"
                        }
                ]

        });
        addPost({
                imagen: "/Photos/Image5.jpg", titulo: "HEARTSTOPPER 1. DOS CHICOS JUNTOS", autor: "Alice Oseman", precio: "15.15",
                genero: "Romance",
                sinopsis: "Esta historia de amor entre dos chicos, uno de ellos declaradamente homosexual y el otro en vías de autodescubrimiento, nos recordará que hay primeros amores frágiles como el cristal y memorables como el diamante. Con los titubeos propios de cualquier amor adolescente, Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.",
                isbn: "9058408224246", editorial: "HACHETTE CHILDREN S BOOKS", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Victoria",
                                comentario: "Se ha convertido en mi cómic favorito. Es impresionante. No podrás leer una mejor historia de amor en el siglo XVI.",
                                estrellas: "5/5"
                        }
                ]
        });

        addPost({
                imagen: "/Photos/Image6.jpg", titulo: "LA FUNDACIÓN", autor: "Antonio Buero Vallejo", precio: "9.45",
                genero: "Misterio",
                sinopsis: "Una de las obras de Buero Vallejo que han alcanzado mayor éxito de público y crítica, tanto por el dramatismo de su trama argumental como por la novedad de los procedimientos técnicos utilizados. Presentada como una fábula, plantea al lector-espectador un choque entre realidad y ficción, que se resuelve paulatinamente a favor de la verdad. Cuando, identificados con el protagonista de la obra, creemos que nos encontramos cómodamente instalados en una Fundación, descubrimos que estamos en una cárcel. Es el reflejo de nuestro mundo y de nuestra sociedad. Introducción y propuestas de trabajo deLa fundación a cargo de Raquel Velázquez",
                isbn: "9788408224290", editorial: "ESPASA LIBROS", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Diego",
                                comentario: "Es una obra teatral impactante que examina las tensiones y conflictos en una institución mental. Vallejo, a través de su brillante escritura, presenta una profunda exploración de la condición humana y la lucha por la identidad en un entorno desafiante, dejando una huella duradera en la conciencia del lector.",
                                estrellas: "4.5/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image7.jpg", titulo: "LOBEZNO: EL VIEJO LOGAN", autor: "Mark Millar, Steve Mcniven", precio: "20.85",
                genero: "Cómic",
                sinopsis: "Una epopeya apocalíptica protagonizada por Lobezno en el mejor estilo de Mad Max que nos lleva varias décadas hacia el futuro. Nadie sabe qué ocurrió la noche en que los héroes cayeron: Sólo que todos desaparecieron y el mal ha triunfado desde entonces. En el último medio siglo, nadie ha visto al hombre simplemente conocido como Logan. Pero algo le hará salir de las sombras. Su amigo Ojo de Halcón necesita recorrer miles de kilómetros para poner a su familia a salvo. Lobezno se prepara para el viaje de su vida… Edición de lujo con un montón de extras.",
                isbn: "9788408224228", editorial: "PANINI", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Valentina",
                                comentario: "Una obra maestra del cómic, ofrece una visión sombría y desgarradora de un Wolverine envejecido y un mundo devastado. La narrativa magistral de Mark Millar y la impactante representación visual de Steve McNiven convergen para crear una historia épica que explora el sacrificio, la redención y la brutalidad inherente a un héroe marcado por el tiempo.",
                                estrellas: "5/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image8.jpg", titulo: "LA BIBLIOTECA DE LA MEDIA NOCHE", autor: "Matt Haig", precio: "21.37",
                genero: "Ficción",
                sinopsis: "Entre la vida y la muerte hay una biblioteca. Y los estantes de esa biblioteca son infinitos. Cada libro da la oportunidad de probar otra vida que podrías haber vivido y de comprobar cómo habrían cambiado las cosas si hubieras tomado otras decisiones... ¿Habrías hecho algo de manera diferente si hubieras tenido la oportunidad?. Nora Seed aparece, sin saber cómo, en la Biblioteca de la Medianoche, donde se le ofrece una nueva oportunidad para hacer las cosas bien. Hasta ese momento, su vida ha estado marcada por la infelicidad y el arrepentimiento. Nora siente que ha defraudado a todos, y también a ella misma. Pero esto está a punto de cambiar. Los libros de la Biblioteca de la Medianoche permitirán a Nora vivir como si hubiera hecho las cosas de otra manera. Con la ayuda de una vieja amiga, tendrá la opción de esquivar todo aquello que se arrepiente de haber hecho (o no haber hecho), en pos de la vida perfecta. Pero las cosas no siempre serán como imaginó que serían, y pronto sus decisiones enfrentarán a la Biblioteca y a ella misma en un peligro extremo.",
                isbn: "9788408224228", editorial: "ALIANZA ", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Camila",
                                comentario: "A través de la exploración de la vida, el amor y las posibilidades infinitas de los libros, Haig teje una historia fascinante que invita a los lectores a sumergirse en el asombroso mundo de la literatura y la conexión humana.",
                                estrellas: "4.4/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image9.jpg", titulo: "MONET: THE TRIUMPH OF IMPRESSIONISM", autor: "Daniel Wildenstein", precio: "15.20",
                genero: "Historia",
                sinopsis: "Junto con J.M.W. Turner, ningún artista se esforzó más que Claude Monet (1840-1926) en capturar en el lienzo la luz. De todos los impresionistas, fue el hombre del que Cézanne decía: solo un ojo, pero ¡Dios mío, qué ojo!, el hombre que se mantuvo completamente leal al principio de la fidelidad absoluta a la sensación visual, pintando directamente a partir del objeto. Se podría decir que Monet reinventó las posibilidades del color y que, ya fuera por su temprano interés en los grabados japoneses, su período como recluta bajo la resplandeciente luz de Argelia o su relación personal con los pintores más importantes de fines del siglo XIX, lo que creó Monet durante su larga vida cambió para siempre el modo en que percibimos tanto el mundo como sus fenómenos asociados. El punto culminante de sus exploraciones fue la serie tardía de nenúfares pintada en su propio jardín de Giverny, la cual, en su giro hacia la ausencia casi total de forma, es realmente el origen del arte abstracto. Esta biografía hace del todo justicia a este artista tan excepcional y profundamente influyente, y ofrece numerosas reproducciones y fotos de archivo junto con comentarios detallados y precisos.",
                isbn: "978-3836590839", editorial: "TASCHEN", idioma: "Inglés", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Javier",
                                comentario: "Is a captivating exploration of the life and artistry of the iconic painter Claude Monet. This meticulously crafted book provides a rich visual journey, offering profound insights into Monet's revolutionary approach to capturing light and emotion on canvas. A triumph for art enthusiasts, it beautifully unveils the genius behind the brushstrokes that defined Impressionism.",
                                estrellas: "5/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image10.jpg", titulo: "EIGHTEEN", autor: "Alberto Ramos", precio: "12.25",
                genero: "Poesía",
                sinopsis: "Alberto Ramos tenía solo 15 años cuando decidió meter en una maleta su esperanza y voluntad, abandonar Málaga y establecerse en Estocolmo, buscando una nueva vida. El joven tuvo que enfrentarse a continuos episodios de abusos, intimidaciones, desprecios y bullying por parte de sus compañeros debido a su orientación sexual. Todo su dolor quedó plasmado en eighteen, un diario poético en el que narra su experiencia a través de su poesía y sus ilustraciones. El libro condensa todo el dolor de esos años pero también su rebeldía y su voluntad de superarlo; se trata de un recorrido de crecimiento personal que refleja lo que es el abuso, el suicidio, la pérdida, el bullying, el trauma y la homofobia, pero también el amor, la celebración de uno mismo, el amor propio y la belleza, entre otras experiencias.",
                isbn: "978-8467061291", editorial: "ESPASAesPOESÍA", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Gabriela",
                                comentario: "Un libro con unas ilustraciones preciosas muy conmovedor y arroja luz a este mundo tan oscuro donde muchas veces no somos capaces de verla. Un libro que transmite y te hace sentir con las palabras de este gran autor.",
                                estrellas: "4.6/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image11.jpg", titulo: "VEINTE MIL LEGUAS DE VIAJE SUBMARINO", autor: "Julio Verne", precio: "14.96",
                genero: "Aventura",
                sinopsis: "Veinte mil leguas de viaje submarino es una novela clásica escrita por el autor francés Julio Verne. Publicada por primera vez en 1870, la historia sigue las aventuras del profesor Pierre Aronnax, su criado Conseil y el arponero canadiense Ned Land, quienes son capturados por el misterioso Capitán Nemo y se embarcan en un extraordinario viaje a bordo del submarino Nautilus. La narrativa lleva a los personajes a través de los océanos del mundo, explorando maravillas submarinas, encuentros con diversas criaturas marinas y desafiando los límites del conocimiento científico de la época. A medida que se desarrolla la trama, surge la figura enigmática del Capitán Nemo, un hombre que ha renunciado a la sociedad y busca la libertad bajo las olas.",
                isbn: "9788408246312", editorial: "PLANETA", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Roberta",
                                comentario: "Sumerge a los lectores en un emocionante viaje bajo las olas del océano. La narrativa imaginativa de Verne, combinada con sus detalladas descripciones tecnológicas, crea una experiencia inolvidable. Esta obra clásica no solo destaca la habilidad del autor para anticipar el futuro tecnológico, sino que también ofrece una aventura atemporal que sigue fascinando a lectores de todas las edades.",
                                estrellas: "5/5"
                        }
                ]
        });
        addPost({
                imagen: "/Photos/Image12.jpg", titulo: "LOS PACIENTES DEL DOCTOR GARCÍA", autor: "Almudena Grandes", precio: "21.75",
                genero: "Historia",
                sinopsis: "Tras la victoria de Franco, el doctor Guillermo García Medina sigue viviendo en Madrid bajo una identidad falsa. La documentación que lo libró del paredón fue un regalo de su mejor amigo, Manuel Arroyo Benítez, al que salvó la vida en 1937. Mientras el doctor García se deja reclutar por él, el nombre de otro español se cruza en el destino de los dos amigos. Adrián Gallardo Ortega, que tuvo su momento de gloria como boxeador profesional antes de alistarse en la División Azul, para seguir luchando como voluntario de las SS y participar en la última defensa de Berlín, malvive en Alemania, ignorando que alguien pretende suplantar su identidad para huir a la Argentina de Perón.",
                isbn: "9788408224228", editorial: "TUSQUETS", idioma: "Castellano", optionRadios: "Tapa blanda",
                //Valoracion
                valoraciones: [
                        {
                                nombre: "Mateo",
                                comentario: "Teje intriga, historia y suspense. Ambientada en la posguerra española, la autora presenta personajes complejos cuyas vidas se entrelazan en un entorno político tenso. Con una prosa hábil y una trama envolvente, Grandes ofrece una visión perspicaz de la complejidad humana y los eventos históricos que marcaron una época en España.",
                                estrellas: "5/5"
                        }
                ]
        });
}

loadSampleData();

export function addPost(post) {
        let id = nextId++;
        post.id = id.toString();
        posts.set(post.id, post);
}

export function addValoracion(id, { nombre, comentario, estrellas }) {
        const postsToUpdate = posts.get(id);
        let newValoracion = { nombre, comentario, estrellas };
        postsToUpdate.valoraciones.push(newValoracion);
}

export function deletePost(id) {
        posts.delete(id);
}

export function getPosts() { //ProductDescription
        return [...posts.values()];
}

export function getPostss(from, to) { //Cargar más
        let values = [...posts.values()];
        if (from !== undefined) {
                return values.slice(from, to);
        } else {
                return values;
        }
}

export function getPost(id) {
        return posts.get(id);
}

export function editPost(id, { titulo, autor, genero, sinopsis, isbn, precio, editorial, idioma, imagen, optionRadios }) {
        const postsToUpdate = getPost(id);
        postsToUpdate.titulo = titulo !== undefined ? titulo : postsToUpdate.titulo;
        postsToUpdate.autor = autor !== undefined ? autor : postsToUpdate.autor;
        postsToUpdate.genero = genero !== undefined ? genero : postsToUpdate.genero;
        postsToUpdate.sinopsis = sinopsis !== undefined ? sinopsis : postsToUpdate.sinopsis;
        postsToUpdate.isbn = isbn !== undefined ? isbn : postsToUpdate.isbn;
        postsToUpdate.precio = precio !== undefined ? precio : postsToUpdate.precio;
        postsToUpdate.editorial = editorial !== undefined ? editorial : postsToUpdate.editorial;
        postsToUpdate.idioma = idioma !== undefined ? idioma : postsToUpdate.idioma;
        postsToUpdate.imagen = imagen !== undefined ? imagen : postsToUpdate.imagen;
        postsToUpdate.optionRadios = optionRadios !== undefined ? optionRadios : postsToUpdate.optionRadios;
        posts.set(id, postsToUpdate);
}