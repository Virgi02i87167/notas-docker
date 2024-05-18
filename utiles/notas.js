import fs from 'fs';
import chalk from 'chalk';

const cargarNotas = () => {
    try {
        const dataBuffer = fs.readFileSync('notas.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const guardarNotas = (notas) => {
    const dataJSON = JSON.stringify(notas);
    fs.writeFileSync('notas.json', dataJSON);
};

const agregarNotas = (title, body) => {
    const notas = cargarNotas();
    const notaDuplicada = notas.find((note) => note.title === title);

    if (!notaDuplicada) {
        notas.push({
            title,
            body
        });
        guardarNotas(notas);
        console.log(chalk.green.inverse('Nota agregada'));
    } else {
        console.log(chalk.red.inverse('Nota no agregada, el título ya existe'));
    }
};

const eliminarNotas = (title) => {
    const notas = cargarNotas();
    const notasParaGuardar = notas.filter((note) => note.title !== title);

    if (notas.length > notasParaGuardar.length) {
        guardarNotas(notasParaGuardar);
        console.log(chalk.green.inverse('Nota eliminada'));
    } else {
        console.log(chalk.red.inverse('Nota no eliminada, no se encontró el título'));
    }
};

const listarNotas = () => {
    const notas = cargarNotas();
    console.log(chalk.inverse('Tus notas'));
    notas.forEach((note) => {
        console.log(note.title);
    });
};

const leerNotas = (title) => {
    const notas = cargarNotas();
    const nota = notas.find((note) => note.title === title);

    if (nota) {
        console.log(chalk.inverse(nota.title));
        console.log(nota.body);
    } else {
        console.log(chalk.red.inverse('Nota no encontrada'));
    }
};

export {
    agregarNotas,
    eliminarNotas,
    listarNotas,
    leerNotas
};
