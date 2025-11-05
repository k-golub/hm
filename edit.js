function change_to_latin(){
    const surname = document.getElementById('surname')
    surname.innerHTML = "<b>Golub</b>"
    
    const name = document.getElementById('name')
    name.innerHTML = "<b>Ekaterina</b>"
    
    const patronymic = document.getElementById('patronymic')
    patronymic.innerHTML = "<b>Aleksandrovna</b>"

    const year = document.getElementById('year')
    year.innerHTML = "<b>21.12.2006</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", change_to_latin)