// 68. Las Ventajas de los Arrow Functions
const learning = function (tecnologia) {
    console.log(`Learning ${tecnologia}`);
}

learning('JavaScript');

const learning2  = tecnologia => `Learning ${tecnologia}`;

console.log(learning2('JavaScript'));


const learningTwoTechs = function (tecnologia, tecnologia2) {
    console.log(`Learning ${tecnologia} y ${tecnologia2}`);
}

learningTwoTechs('JavaScript', 'Node.JS');

const learning2TwoTechs  = (tecnologia, tecnologia2) => `Learning ${tecnologia} y ${tecnologia2}`;

console.log(learning2TwoTechs('JavaScript', 'Node.JS'));