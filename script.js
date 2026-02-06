let trips = [
    {
        id: 1,
        title: "Yellow River",
        Destination: "Kech",
        Date:Date(),
        Note:5,
        image: "/assets/4.png",
        category: "River"
    }
];

let form = document.getElementById("form-container");
let container = document.getElementById("posts-container");

function afficherCards(tripsArray) {
    container.innerHTML = "";
    tripsArray.forEach(trip => {
        container.innerHTML += `
        <div class="mx-5 w-[350px] md:w-[250px] mb-14 relative"> 
            <div
              class="absolute top-2 right-2 flex p-1 rounded-xl shadow-md">
                <button onclick="editTrip(${trip.id})" class="w-6 h-4 flex items-center justify-center rounded-full">
                    <i class="fa-solid fa-pen text-blue-600 text-sm"></i>
                </button>
                <button onclick="deleteTrip(${trip.id})" class="w-6 h-4 flex items-center justify-center rounded-full">
                    <i class="fa-solid fa-trash text-red-600 text-sm"></i>
                </button>
            </div>
            <div class="h-[150px] bg-cover bg-center rounded-xl shadow-xl w-full"
                 style="background-image:url('${trip.image}')"></div>
            <h6 class="font-semibold mt-1">${trip.title}</h6>
            <p class="text-sm">To: ${trip.Destination}</p>
            <p class="text-sm">Date: ${trip.Date}</p>
            <p class="text-sm">Note: ${trip.Note}</p>
        </div>
        `;
    });
}


afficherCards(trips);

form.addEventListener("click", function (e) {
    if (e.target == form) {
        form.classList.add("hidden")
    }
})


function deleteTrip(id) {
    trips=trips.filter(trip => trip.id !== id )
    afficherCards(trips);

}

let edtiId=null;

function editTrip(id) {
  const   trip=trips.filter(t=>t.id===id);
    if(!trip) return;

    edtiId=id;

    form.classList.remove("hidden");
    
    
}
function AddForm() {
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", () => {
        form.classList.toggle("hidden");
    });
    document.getElementById("trip-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (edtiId !== null) {
        
        const trip = trips.find(t => t.id === edtiId);
        trip.title = e.target.title.value;
        trip.Destination = e.target.dis.value;
        trip.Date = e.target.Date.value;
        trip.Note = e.target.Note.value;
        trip.image = e.target.image.value;
        trip.category = e.target.category.value;

        edtiId = null;
    } else {
        
        const newTrip = {
            id: trips.length + 1,
            title: e.target.title.value,
            Destination : e.target.dis.value,
            Date : e.target.Date.value,
            Note : e.target.Note.value,
            image: e.target.image.value,
            category: e.target.category.value
        };
        trips.push(newTrip);
    }

    afficherCards(trips);
    e.target.reset();
    form.classList.add("hidden");
});
}


AddForm();
