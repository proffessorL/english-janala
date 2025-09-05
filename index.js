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
         <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary "><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}
         </button> 
        `;
        // 4. append child
        levelContainer.appendChild(btnDiv)

    }

}

const loadLevelWord=(id)=>{
    
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data))
}

const displayLevelWord = (words) =>{
// console.log(words)

// ebar same 4ta step again

const wordContainer = document.getElementById("word-container")
wordContainer.innerHTML= ''


// {
//     "id": 84,
//     "level": 1,
//     "word": "Fish",
//     "meaning": "মাছ",
//     "pronunciation": "ফিশ"
// }
 words.forEach( word => {
    console.log(word)
    const card  = document.createElement("div")
    card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-5">
            <h2 class="font-bold text-xl">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
    `
    wordContainer.append(card)

 })

}

loadLessons()