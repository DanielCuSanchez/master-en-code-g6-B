const form = document.querySelector("#form")
const randomButton = document.querySelector("#randomButton")
//Random name
randomButton.addEventListener("click",initRandom)

async function initRandom(){
    try {

        const studentsData = await loadData()

        const randomStudent = await calculateRandomStudent(studentsData)

        if(!randomStudent){
            loadTemplate(templateStudent("NoRandom"))
        }
        else{
            await saveLocalStorageStudent(randomStudent)
            loadTemplate(templateStudent(randomStudent))
        }


    } catch (error) {
        console.log(error);
    }

}

async function calculateRandomStudent(studentsData){
    const dataStorage = await loadLocalStorageStudents()
    if(studentsData.length === dataStorage.length){
        return
    }
    let randomNumber = 0
    do {
        randomNumber = Math.floor(Math.random() * Math.floor(studentsData.length))
        console.log(randomNumber)

    } while (compareNewStudentInLocalStorage(studentsData[randomNumber]))

    return studentsData[randomNumber]
}

async function saveLocalStorageStudent(studentToSave){

    try {
        let savedStudents = loadLocalStorageStudents()
        
        console.log("studentTO SAVE",studentToSave)

        if(savedStudents.length === 0){
            localStorage.setItem("students", JSON.stringify([studentToSave]))

        }else{

            savedStudents = [...savedStudents, studentToSave]

            localStorage.setItem("students", JSON.stringify(savedStudents))

        }

    } catch (error) {
        console.log(error);
    }
}

function loadLocalStorageStudents(){
    const studentsStorage = localStorage.getItem("students")
    if(studentsStorage){
        return JSON.parse(studentsStorage)
    }

    return []

}

function compareNewStudentInLocalStorage(randomStudent){
    const savedStudents = loadLocalStorageStudents()

    const existStudent =  savedStudents.some((student) => {
        return JSON.stringify(student)===JSON.stringify(randomStudent)
    })

    return existStudent
}



//Search form
form.addEventListener("submit",initSearch)

async function initSearch(e){
    e.preventDefault()
    const studentName = document.querySelector("#studentName")
    try {
        const students = await loadData()

        if(studentName.value.length === 0){
            return
        }

        const student = searchStudent(students, studentName.value)

        if(student === null){
            loadTemplate(templateStudent())
            return
        }

        const templateToLoad = templateStudent(student)

        loadTemplate(templateToLoad)

    } catch (error) {
        console.log(error);
    }

}
async function loadData(){
    const response = await fetch("./json/data.json")
    const data = await response.json()
    return data
}

function searchStudent(students = [], studentName){
    const student = students.find(({ nombre })=> nombre.toLowerCase().includes(studentName.toLowerCase()))

    if(student) {
        return student
    }

    return null
}

function templateStudent(student){
    let template
    if(student === "NoRandom"){
        template = `
        <div class="student-alert">
            <p> Ya no hay mas estudiantes. 🤯 Borra la cache para volver a jugar 😄</p>
        </div>
        `
    }else if( !student){
        template = `
        <div class="student-alert">
            <p> Sin resultados. 😅 Verifica que no tengas mas de un espacio o busca de otra forma el nombre</p>
        </div>
        `
    }else{
        const {nombre, experiencia, urlFoto} = student
        template = `
        <div class="student-img">
            <img class="student-img__img" src=${urlFoto} />
        </div>
        <div class="student-description">
            <h3 class="student-description__name">${nombre}</h3>
            <p class="student-description__experience">${experiencia}</p>
        </div>
        `
    }

    return template
}

function loadTemplate (templateToLoad){
    const studentSection = document.querySelector("#studentSection")
    studentSection.innerHTML = ""
    studentSection.innerHTML = templateToLoad
}