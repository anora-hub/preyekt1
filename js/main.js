let tearcherCards = document.querySelector(".tearcher-cards")
let form = document.getElementById("form")
let outerModal = document.getElementById("outer-modal")
let addTeacherBTn = document.getElementById("add-teacher")
let selected = null;
let btn = document.getElementById("btn")



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



async function getData(content) {
    try {
        let res = await axios.get("https://6921d266512fb4140be178ed.mockapi.io/teachers")

        content.innerHTML = "";

        res.data.forEach((el) => {
            content.innerHTML += `
     <div class="border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] block mx-auto">

     <a href="../pages/img.html"> <img class="w-[80px] h-[80px] rounded-full mx-auto mt-[10px]"
            src="${el.avatar}" alt="avatar">
</a>
       
        <h1 class="text-center pt-[7px] font-[600]">${el.lastName}</h1>

        <button class="border ml-auto bg-[black]/20 mr-auto block px-[20px] rounded-[10px]">
            ${el.science?.name || "Unknown"}
        </button>

        <div class="flex gap-[30px] justify-center pt-[9px]">
            <div class="flex gap-[2px] items-center">
                <p>${el.salory}</p>
            </div>

            <div class="flex gap-[2px] items-center">
                <p>age: ${el.age}</p>
            </div>
        </div>

        <div class="flex gap-[5px] justify-center items-center">
            <h1>${el.rating}</h1>
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
                class="bg-red-600 text-white px-3 rounded-md">Delete</button>
        </div>
     </div>
    `
        })

    } catch (err) {
        console.log(err);
    }
}

getData(tearcherCards);



async function addTeacher(obj) {
    try {
        await axios.post("https://6921d266512fb4140be178ed.mockapi.io/teachers", obj)
    } catch (err) {
        console.log(err);
    }
}



form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let teacherData = {
        avatar: form[0].value,
        lastName: form[1].value,
        name: form[2].value,
        salory: form[3].value,
        age: form[4].value,
        rating: form[5].value,
        phone: form[6].value,
        email: form[7].value,
        telegram: form[8].value,
        Linkedin: form[9].value,
        science: {
            name: form[10]?.value || "Unknown"
        }
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

    getData(tearcherCards)
    outerModal.classList.add("hidden")
})



async function deleteTeacher(id) {
    try {
        await axios.delete(`https://6921d266512fb4140be178ed.mockapi.io/teachers/${id}`)
        getData(tearcherCards);
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
        form[2].value = t.name;
        form[3].value = t.salory;
        form[4].value = t.age;
        form[5].value = t.rating;
        form[6].value = t.phone;
        form[7].value = t.email;
        form[8].value = t.telegram;
        form[9].value = t.Linkedin;
        form[10].value = t.science?.name || "";

    } catch (err) {
        console.log(err);
    }
}


