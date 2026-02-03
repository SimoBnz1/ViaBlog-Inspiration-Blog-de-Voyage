let trips = [
    {
        id: 1,
        title: "Yellow River",
        author: "Joan Garcia",
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
        <div class="mx-5 w-[350px] h-[150px] md:w-[250px] mt-16 mb-14">
            <div class="bg-cover bg-center rounded-xl shadow-xl w-full h-full"
                 style="background-image:url('${trip.image}')"></div>
            <h6 class="font-semibold mt-1">${trip.title}</h6>
            <p class="text-sm">by ${trip.author}</p>
        </div>
        `;
    });
}

afficherCards(trips);

function AddForm() {
    let btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", () => {
        form.classList.toggle("hidden"); 
    });

    document.getElementById("trip-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const newTrip = {
            id: trips.length + 1,
            title: e.target.title.value,
            author: e.target.author.value,
            image: e.target.image.value,
            category: e.target.category.value
        };

        trips.push(newTrip);   
        afficherCards(trips);    
        e.target.reset();
        form.classList.add("hidden"); // nkhlli form ykhoufi mra ma t9edm
    });
}

AddForm();
