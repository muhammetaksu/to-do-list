const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

//////// enter ile input kaydetme
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});

///////////////////// DATAMIZ

const myTasks = [
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 1",
    // },
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 2",
    // },
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 3",
    // },
    // {
    //     id: `${Math.round(Math.random() * 100000)}`,
    //     name: "Task 4",
    // },
]; // bu datayi herhangi bir yerden de cekebilirdik.

/////////SİTE HER YENİLERNİRKEN ÇALIŞACAK
if (myTasks.length == 0) {
    document.querySelector("#taskList").classList.add("d-none");
}

myTasks.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `${element.name} <button class="removeButton">
        Delete
            </button>`;
    li.classList.add("listItem");
    li.id = `${element.id}`;
    document.querySelector("#taskList").append(li);
});

//////////// listTasks -ELEMANLARI YAZDIRAN FONKSİYON-
let listTasks = () => {
    if (myTasks.length > 0) {
        document.querySelector("#paragraph").classList.add("d-none");
        document.querySelector("#taskList").classList.remove("d-none");
    } else {
        document.querySelector("#paragraph").classList.remove("d-none");
        document.querySelector("#taskList").classList.add("d-none");
    }
    document.querySelector("#taskList").innerHTML = "";
    myTasks.forEach((element) => {
        const li = document.createElement("li");
        li.innerHTML = `${element.name} <button class="removeButton">
        Delete
            </button>`;
        li.id = `${element.id}`;
        li.classList.add("listItem");
        document.querySelector("#taskList").append(li);
    });
};
///////////////////////////////// taskList'e YENİ ELEMAN EKLEME
const addNewTask = () => {
    if (taskInput.value != 0) {
        let liDOM;
        liDOM = {
            id: `${Math.round(Math.random() * 100000)}`,
            name: `${taskInput.value}`,
        };
        myTasks.push(liDOM);
    } else {
        alert("Bir şey yazmalısın.");
    }
    listTasks();
    taskInput.value = "";
    console.log(myTasks);
};

/////////////////////////////////////

/////////////// TÜM GÖREVLERİ SİLME
let deleteItems = () => {
    myTasks.splice(0, myTasks.length);
    console.log(myTasks);
    listTasks();
};

///////////////////////// SEÇİLEN GÖREVİ SİLME

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("removeButton")) {
        //remove current task

        const selectedItemId = e.target.parentNode.id;
        myTasks.map((item) => {
            if (item.id === selectedItemId) {
                let findIndex = myTasks.indexOf(item);
                myTasks.splice(findIndex, 1);
            }
        });

        console.log(myTasks);

        listTasks();
    }
});
/////////////////// li MAVİ YAPMA- (task tamamlandı)
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("listItem")) {
        //complete task
        e.target.classList.toggle("liFinished");
    }
});
