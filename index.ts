import {libro} from './src/libro';
import {libreria} from './src/libreria';

const librerias= new libreria();

const libro1 = new libro ("Macbeth","William Shakespeare","tragedia","inglés","80","tapadura","97873864674480","Cuenta una historia de crimen y castigo entreverada de brujería y elementos sobrenaturales. Amparado en las engañosas profecías de las Hermanas Fatídicas, brujas o diosas del destino, Macbeth decide asesinar a su rey y tomar la corona.","nuevo","Inglaterra","1606-02-09","boka for you young",133,"11.43*3.18*18.42","100g",true);

const libro2 = new libro ("El pricipito","antoine de saint","fitcion","español","89","tapadura","978-19864314480","un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994","boka for you young",96,"11.43*3.18*18.42","100g",true);

const libro3 = new libro ("Don Quijote de la Mancha","Miguel de Cervantes Saavedra","ficcion","español","100","tapadura","978-1976473280","Relata las aventuras y desventuras de un hidalgo de 50 años llamado Alonso Quijano, quien decide ser un caballero andante como aquellos que aparecen en sus libros de caballerías favoritos.","nuevo","España","1868","Urbano Manini",1056,"11.43*3.18*18.42","150g",true);



librerias.addLibro(libro1)
librerias.addLibro(libro2)
librerias.addLibro(libro3)
librerias.flitrarLibro("pricipitos")
librerias.removelibro()
librerias.ordenarLibros()

