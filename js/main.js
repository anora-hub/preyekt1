let tearcherCards = document.querySelector(".tearcher-cards")
let form = document.getElementById("form")
let outerModal = document.getElementById("outer-modal")
let addTeacherBTn = document.getElementById("add-teacher")
let tearcherlar = JSON.parse(localStorage.getItem("tearcherlar") || "[]")
let selected = null;
let btn = document.getElementById("btn")


localStorage.setItem("tearcherlar", JSON.stringify(tearcherlar))


addTeacherBTn.addEventListener("click", function () {
    outerModal.classList.remove("hidden")
    selected ? btn.textContent = "teachers tahrirlash" : btn.textContent = "submit"
})

outerModal.addEventListener("click", function () {
    outerModal.classList.add("hidden")
selected = null;

    form[0].value = ""
    form[1].value = ""
    form[2].value = ""
    form[4].value =""
    form[5].value = ""
    form[6].value = ""
    form[7].value = ""
    form[3].value = ""
    form[8].value = ""
    form[9].value = ""
})

form.addEventListener("click", function (e) {
    e.stopPropagation()
})

form.addEventListener("submit", function (e) {


})

async function getData(content) {
    try {
        let res = await axios.get("https://6921d266512fb4140be178ed.mockapi.io/teachers")
       
        content.innerHTML = "";
        res.data.map((el) => {
            content.innerHTML += `
     <div class="border-[1px] border-[black]/30 max-w-[300px] w-full h-[440px] rounded-[20px] mr-auto ml-auto block ">

                            <img data-slot="avatar-image"
                                class="aspect-square size-full w-[80px] h-[80px] rounded-[50%]  justify-center mx-auto pt-[10px]"
                                alt="Norma Kerluke" src="${el.avatar}">
                            <h1 class="text-center pt-[7px] font-[600]">${el.lastName}</h1>
                            <button
                                class="border border-[black]/20 ml-[auto] bg-[black]/20 mr-[auto] block px-[20px] rounded-[10px]">${el.science.name}</button>
                            <div class=" flex gap-[30px] justify-center pt-[9px]">
                                <div class=" flex gap-[2px] items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-briefcase h-4 w-4" aria-hidden="true">
                                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                    </svg>
                                    <p>${el.salary}</p>
                                </div>

                                <div class=" flex gap-[2px] items-center">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <p>age:${el.age}</p>
                                </div>


                            </div>
                            <div class=" flex gap-[5px] justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
                                    <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                    </path>
                                    <h1>${el.reting}</h1>
                                </svg>
                            </div>



                            <div class="space-y-2 mb-4 pt-[40px] ml-[20px]">
                                <div class="flex items-center mt-[10px] gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden="true">
                                        <path
                                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                        </path>
                                    </svg><span class="truncate">${el.phone}</span></div>
                                <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg><p><strong>email:</strong><a href="mailto:${el.email}">${el.email}</a></p></div>
                                <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400" aria-hidden="true">
                                        <path
                                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                        </path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg><span class="truncate">@${el.telegram}</span></div>
                                <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                        </path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg><span>${el.Linkedin}</span></div>
                            </div>


                            <div class=" flex gap-[20px]  mt-[30px] justify-center">
                                <div>

                                    <button  onClick="edit(${el.id})" data-slot="button"
                                        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-black focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-[black] border-[white] text-[white] dark:border-[black] bg-background text-foreground hover:bg-accent hover:text-[black] dark:bg-input/30     dark:hover:bg-input/50 h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex-1 gap-2"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                            <path
                                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                            </path>
                                            <path d="m15 5 4 4"></path>
                                        </svg>Edit</button>

                                </div>

                                <div>
                                    <button onClick="deleteTeacher(${el.id})" data-slot="button"
                                        class="inline-flex items-center justify-center whitespace-nowrap text-[white] text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:shrink-0 outline-none focus-visible:border-black focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-black border bg-background dark:bg-input/30 dark:border-input text-[white] h-8 rounded-md px-3 has-[&gt;svg]:px-2.5 flex-1 gap-2 text-white-600 hover:text-red-700"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-trash2 lucide-trash-2 h-4 w-4" aria-hidden="true">
                                            <path d="M10 11v6"></path>
                                            <path d="M14 11v6"></path>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                            <path d="M3 6h18"></path>
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>Delete</button>
                                </div>
                            </div>
                        </div>
    `
        })

    } catch (err) {
       

    }
}

getData(tearcherCards);

async function addTeacher(payload) {
    try {
        await axios.post("https://6921d266512fb4140be178ed.mockapi.io/teachers", payload)

    } catch (err) {
       

    }
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let teachersObj = {}

    if (selected) {
        await axios.put(`https://6921d266512fb4140be178ed.mockapi.io/teachers/${selected}`, {
            avatar: form[0].value,
            lastName: form[1].value,
            name: form[2].value,
            salary: form[3].value,
            age: form[4].value,
            reting: form[5].value,
            phone: form[6].value,
            email: form[7].value,
            telegram: form[8].value,
            Linkedin: form[9].value
        });

        selected = null;
        getData(tearcherCards);
        outerModal.classList.add("hidden");
        return;
    } else{
        teachersObj.avatar = form[0].value;
        teachersObj.lastName = form[1].value;
        teachersObj.name = form[2].value;
        teachersObj.salary = form[3].value;
        teachersObj.age = form[4].value;
        teachersObj.reting = form[5].value;
        teachersObj.phone = form[6].value;
        teachersObj.email = form[7].value;
        teachersObj.telegram = form[8].value;
        teachersObj.Linkedin = form[9].value;
        tearcherlar.push(teachersObj)
        addTeacher(teachersObj)
        getData(tearcherCards)
        outerModal.classList.add("hidden")
        localStorage.setItem("tearcherlar", JSON.stringify(tearcherlar))
        outerModal.classList.add("hidden")
    }

   
})
async function deleteTeacher(id) {
    try {
        await axios.delete(`https://6921d266512fb4140be178ed.mockapi.io/teachers/${id}`)
        getData(tearcherCards);
        localStorage.setItem("tearcherlar", JSON.stringify(tearcherlar))

    }
    catch (err) {
       

    }
}

async function edit(id) {
    try {
        selected = id;

        btn.textContent = "teachers tahrirlash"
        let res = await axios.get(`https://6921d266512fb4140be178ed.mockapi.io/teachers/${id}`);
        let tichcher = res.data;

        outerModal.classList.remove("hidden");

        form[0].value = tichcher.avatar;
        form[1].value = tichcher.lastName;
        form[2].value = tichcher.name;
        form[3].value = tichcher.salary;
        form[4].value = tichcher.age;
        form[5].value = tichcher.reting;
        form[6].value = tichcher.phone;
        form[7].value = tichcher.email;
        form[8].value = tichcher.telegram;
        form[9].value = tichcher.Linkedin;

    } catch (err) {
    }
}

