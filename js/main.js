let tearcherCards = document.querySelector(".tearcher-cards")
let form = document.getElementById("form")
let outerModal = document.getElementById("outer-modal")
let addTeacherBTn = document.getElementById("add-teacher")
let selected = null;
let btn = document.getElementById("btn")
let pagination = document.getElementById("pagination")
let page = 1;
let sortTeacher = document.getElementById("sortName")
let sortName = "all"
let search= "";
let searchInput = document.getElementById("search");
let salary = document.getElementById("salary")






sortTeacher.addEventListener("click" , function(e){
    
     sortName = e.target.value
    getData(tearcherCards, page, sortName, search)
    
})

searchInput.addEventListener("input" , function(e){
    search = e.target.value
    getData(tearcherCards, page, sortName , search)

})





addTeacherBTn.addEventListener("click", function () {
    outerModal.classList.remove("hidden")
    btn.textContent = selected ? "teachers tahrirlash" : "submit"
})



outerModal.addEventListener("click", function () {
    outerModal.classList.add("hidden")
    selected = null;

    for (let i = 0; i < form.length; i++) form[i].value = ""
})

form.addEventListener("click", function (e) {
    e.stopPropagation()
})



async function getData(content ,page , sortName , search) {
    console.log(search);
    
    try {
        let res = await axios.get(
            `https://6921d266512fb4140be178ed.mockapi.io/teachers?page=${page}&limit=10&${
            sortName === "all" ? "" : `sortBy=lastName&order=${sortName}`
            }&${search === "" ? "" : `search=${search} `}`
        )
        let res1 = await axios.get(`https://6921d266512fb4140be178ed.mockapi.io/teachers?${search === "" ? "" : `search=${search} `}`)

       let pages =Math.ceil(res1.data.length/10)
       console.log(pages);
       
       

      
    

       
       pagination.innerHTML="";
pagination.innerHTML+=`
 <li 
 onClick="changePage(${page-1})"
 class=" ${page === 1 ? "hidden" :""} px-[10px] py-[5px] rounded-[5px] bg-[blue] text-[white] font-[500] cursor-pointer ">
                        orqaga
                    </li>
`
for(let i = 1 ; i<= pages; i++){
pagination.innerHTML += `

<li 
onClick="changePage(${i})"
class=" ${page === i? "bg-[red]" : ""}  px-[10px] py-[5px] rounded-[5px] bg-[blue] text-[white] font-[500] cursor-pointer ">
                        ${i}
                    </li>
`

}



pagination.innerHTML +=`
<li
onClick="changePage(${page + 1})"
class=" ${page === pages ? "hidden" : ""} px-[10px] py-[5px] rounded-[5px] bg-[blue] text-[white] font-[500] cursor-pointer ">
                        oldinga
                    </li>
`




        content.innerHTML = "";

        res.data.forEach((el) => {
            content.innerHTML += `
     <div class="border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] block mx-auto">

     <a href="../pages/single-teacher.html?teacherId=${el.id}"> <img class="w-[80px] h-[80px] rounded-full mx-auto mt-[10px]"
            src="${el.avatar}" alt="avatar">
</a>
       
        <h1 class="text-center pt-[7px] font-[600]">${el.lastName}</h1>

        <button class="border ml-auto bg-[black]/20 mr-auto block px-[20px] rounded-[10px]">
            ${el.science.name}
        </button>

        <div class="flex gap-[30px] justify-center pt-[9px]">
            <div class="flex gap-[2px] items-center">
            <svg class="text-[black] dark:text-gray-400 w-[16px] h-[16px]" xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                <p>${el.salary}</p>
            </div>

            <div class="flex gap-[2px] items-center">
            <svg class="text-[black] dark:text-gray-400 w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                <p> ${el.age}y</p>
            </div>
        </div>

        <div class="flex gap-[5px] justify-center items-center">
        <svg class="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="yellow" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                        </path>
                    </svg>
            <h1>${el.reting}</h1>
        </div>

        <div class="space-y-2 mb-4 pt-[40px] ml-[20px]">
            <div class="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
               <span>${el.phone}</span>
            </div>

            <div class="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                <span>${el.email}</span>
            </div>

            <div class="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400" aria-hidden="true"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                <span>@${el.telegram}</span>
            </div>

            <div class="flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>

                <span>${el.Linkedin}</span>
            </div>
        </div>

        <div class="flex gap-[20px] mt-[30px] justify-center">
            <button onClick="edit(${el.id})"
                class="bg-black text-white px-3 rounded-md">Edit</button>

            <button onClick="deleteTeacher(${el.id})"
                class="bg-red-600  text-white px-3 rounded-md    ">Delete</button>
        </div>
     </div>
    `
        })

    } catch (err) {
        console.log(err);
    }
}


function changePage(i){
    getData(tearcherCards, i, sortName, search);
 
}

getData(tearcherCards, page, sortName, search);
 


async function addTeacher(obj) {
    try {
        await axios.post("https://6921d266512fb4140be178ed.mockapi.io/teachers", obj)
    } catch (err) {
        console.log(err);
    }
}



form.addEventListener("submit", async function (e) {
    e.preventDefault();
console.log(e.data);

    let teacherData = {
        avatar: form[0].value,
        lastName: form[1].value,
        science: {
            name: form[2]?.value || "Unknown"
        },
         salary:form[3].value,
        age: form[4].value,
        rating: form[5].value,
        phone: form[6].value,
        email: form[7].value,
        telegram: form[8].value,
        Linkedin: form[9].value,
        
    }

    if (selected) {
        // UPDATE
        await axios.put(
            `https://6921d266512fb4140be178ed.mockapi.io/teachers/${selected}`,
            teacherData
        )

        selected = null;
    }
    else {
        // CREATE
        await addTeacher(teacherData)
    }

    getData(tearcherCards, page, sortName, search);
    outerModal.classList.add("hidden")
})



async function deleteTeacher(id) {
    try {
        await axios.delete(`https://6921d266512fb4140be178ed.mockapi.io/teachers/${id}`)
        getData(tearcherCards, page, sortName, search);
    } catch (err) {
        console.log(err);
    }
}



async function edit(id) {
    try {
        selected = id;

        let res = await axios.get(`https://6921d266512fb4140be178ed.mockapi.io/teachers/${id}`);
        let t = res.data;

        outerModal.classList.remove("hidden");
        btn.textContent = "teachers tahrirlash"

        form[0].value = t.avatar;
        form[1].value = t.lastName;
        form[2].value = t.science?.name || "";
        form[3].value = t.salory || "";
        form[4].value = t.age;
        form[5].value = t.rating;
        form[6].value = t.phone;
        form[7].value = t.email;
        form[8].value = t.telegram;
        form[9].value = t.Linkedin;
        

    } catch (err) {
        console.log(err);
    }
}

axios.get('https://6921d266512fb4140be178ed.mockapi.io/teachers')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));