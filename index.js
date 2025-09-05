const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then((res) => res.json())
        // .then((json) => console.log(json.data))   
        .then((json) => displayLessons(json.data))
}

const displayLessons = (lessons) => {
    // console.log(lessons)

    // 1.get the container & empty
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML = ""

    // 2. get into every lessons (loop chalabo)
    for (let lesson of lessons) {
        console.log(lesson)

        // 3.creat element to show it in ui 
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
         <button class="btn btn-outline btn-primary "><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
         </button> 
        `;
        // 4. append child
        levelContainer.appendChild(btnDiv)

    }

}

loadLessons()