


let students = [
    {
        name:  'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name:  'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name:  'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name:  'John',
        age: 19,
        isMarried: false,
        scores: 100
    },
];

const getNames = (array) => {
    const result = []
    const elMapFn = (st) => st.name
    for (let i=0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
       result[i] = newValue
    }
    return result
}

console.log(students.map((st) => st.name))
console.log(getNames(students))

const  selfMadeMap = (array, elMapFn) => {
    const result = []
    for (let i=0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }
    return result
}

console.log(students.map((st)=> ({name: st.name, scores: st.scores})))

console.log(selfMadeMap(students, (st)=> ({name: st.name, scores: st.scores})))





































