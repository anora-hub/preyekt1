let studentsCards = document.querySelector(".students-cards");
let addStudents = document.getElementById("add-students");
let form = document.getElementById("form");
let outerModal = document.getElementById("outer-modal")
let selected = null

addStudents.addEventListener("click" , function(){
    for (let el of form){
        el.value = ""
    }
    outerModal.classList.remove("hidden")

})

form.addEventListener("click" ,function(e){
e.stopPropagation()
})

outerModal.addEventListener("click" , function(){
    outerModal.classList.add("hidden")
    selected=null
})
async function getData(container) {
    try {
        let res = await axios.get(
            "https://69207def31e684d7bfcd401b.mockapi.io/teachers/1/students"
        );

        container.innerHTML = ""

        res.data.forEach((el) => {
            container.innerHTML += `
    <div class="border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] mr-auto ml-auto block">
        
        <img class="aspect-square w-[80px] h-[80px] rounded-[50%] mx-auto pt-[10px]"
             src="${el.avatar}" 
             alt="">
        
        <h1 class="text-center pt-[7px] font-[600]">${el.LastName}</h1>

        <div class="flex gap-[5px] ml-auto mr-auto items-center justify-center pt-[10px]">
            <button class="border border-[black]/20 bg-[black]/20 px-[20px] rounded-[10px]">
                grade ${el.grade}
            </button>
            <h1>${el.age}</h1>
        </div>

        <div class="flex gap-[180px] justify-center items-center pt-[10px]">
            
            <div class="flex items-center gap-[3px]"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="yellow"
                    class="lucide lucide-star h-4 w-4">
                    <path d="M11.5 2.3a.5.5 0 0 1 .95 0l2.3 4.7a2.1 2.1 0 0 0 1.6 1.16l5.17.75a.5.5 0 0 1 .29.9l-3.73 3.64a2.1 2.1 0 0 0-.61 1.88l.88 5.14a.5.5 0 0 1-.77.56l-4.62-2.43a2.1 2.1 0 0 0-1.97 0l-4.62 2.43a.5.5 0 0 1-.77-.56l.88-5.14a2.1 2.1 0 0 0-.61-1.88L2.16 9.8a.5.5 0 0 1 .29-.9l5.16-.75a2.1 2.1 0 0 0 1.6-1.16z"/>
                </svg>
                <h1>${el.rating}</h1>
            </div>

            <div class="flex items-center gap-[3px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     class="lucide lucide-coins h-4 w-4 text-yellow-500">
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                </svg>
                <h1>${el.coins || 0}</h1>
            </div>
        </div>

        <div class="w-full bg-white-200 dark:bg-white-700 rounded-full h-2 border max-w-[250px] border-[black]/20 ml-auto mr-auto mt-[8px]">
            <div class="bg-black h-2 rounded-full transition-all duration-300" style="width: 30%"></div>
        </div>

        <div class="space-y-2 mb-4 pt-[40px] ml-[20px]">

            <div class="flex items-center gap-2 text-sm">
                📞 <span>${el.phone}</span>
            </div>

            <div class="flex items-center gap-2 text-sm">
                ✉️ <span>${el.email}</span>
            </div>

            <div class="flex items-center gap-2 text-sm">
                🚀 <span>@${el.telegram}</span>
            </div>

            <div class="flex items-center gap-2 text-sm">
                🔗 <span>${el.Linkedin}</span>
            </div>
        </div>

        <div class="flex gap-[20px] mt-[30px] justify-center">
            <button onclick="editStudent('${el.id}')" 
                class="px-3 py-1 bg-blue-500 text-white rounded-md">Edit</button>

            <button onclick="deleteStudent('${el.id}')" 
                class="px-3 py-1 bg-red-500 text-white rounded-md">Delete</button>
        </div>

    </div>
    `;
        });

    } catch (err) {
        console.log(err);
    }
}
getData(studentsCards);

async  function deleteStudent(id){
try{
    await axios.delete(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/1/students/${id}`)
    alert("malumot o'chirilsinmi");
    getData(studentsCards);


}catch(err){
    console.log(err);
    
}
}
 
async function editStudent(id){
    selected = id;
    outerModal.classList.remove("hidden")
    let teacher = await axios.get(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/1/students/${id}`)


let studentsObj = teacher.data;
form[1].value= studentsObj.data;
    form[0].value = studentsObj.avatar; 
    form[1].value = studentsObj.LastName;
    form[2].value = studentsObj.grade || ""; 
    form[3].value = studentsObj.email;
    form[4].value = studentsObj.age;
    form[5].value = studentsObj.phone;
    form[6].value = studentsObj.telegram;
    form[7].value = studentsObj.linkedin;
    form[8].value = studentsObj.rating ||"";
    form[9].value = studentsObj.coins;
    
    
    
    
    console.log(studentsObj);


}


   form.addEventListener("submit" , function(e){
    e.preventDefault();
    let studentsObj={}
    studentsObj.avatar = form[0].value
    studentsObj.LastName = form[1].value
    studentsObj.science = form[2].value
    studentsObj.grade = form[3].value
    studentsObj.age = form[4].value
    studentsObj.rating = form[5].value
    studentsObj.coins = form[6].value
    studentsObj.phone= form[7].value
    studentsObj.email = form[8].value
    studentsObj.telegram = form[9].value
    studentsObj.linkedin = form[10].value
    
console.log(studentsObj);
    addteachers(studentsObj)
    getData(studentsCards)
    outerModal.classList.add("hidden")


})

async function addteachers(payload){
    try{

        if(selected){
            await axios.put(`https://69207def31e684d7bfcd401b.mockapi.io/teachers/1/students/${selected}`, payload)
        }else{
            await axios.post("https://69207def31e684d7bfcd401b.mockapi.io/teachers/1/students", payload)

        }
        getData(studentsCards)
        outerModal.classList.add("hidden")


        
    }catch(err){
console.log(err);

    }
}

console.log(getData);








