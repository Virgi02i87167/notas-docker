import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { agregarNotas, eliminarNotas, listarNotas, leerNotas } from './utiles/notas.js';

yargs(hideBin(process.argv))
    .command({
        command: 'agregar',
        describe: 'Agregar nueva nota',
        builder: {
            title: {
                describe: 'Titulo de la nota',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Cuerpo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            agregarNotas(argv.title, argv.body);
        }
    })
    .command({
        command: 'eliminar',
        describe: 'Eliminar una nota',
        builder: {
            title: {
                describe: 'Titulo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            eliminarNotas(argv.title);
        }
    })
    .command({
        command: 'ver',
        describe: 'Lista de notas',
        handler: () => {
            listarNotas();
        }
    })
    .command({
        command: 'leer',
        describe: 'Leer una nota',
        builder: {
            title: {
                describe: 'Titulo de la nota',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            leerNotas(argv.title);
        }
    })
    .parse();
