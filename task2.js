class Cat {
    constructor(
        name,
        sex,
        breed,
        food,
        comment
    ) {
        this.name = name;
        this.sex = sex;
        this.breed = breed;
        this.food = food;
        this.comment = comment;
    }
}

const save = (e) => {
    e.preventDefault()
    let name = e.target.elements['pet-name'].value;
    let sex = e.target.elements.gender.value;
    let breed = e.target.elements.breed.value;
    let food = [];
    for (const foodElement of e.target.elements.food) {
        if (foodElement.checked === true) {
            food.push(foodElement.value)
        }
    }
    let comment = e.target.elements.comments.value;

    const cat = new Cat(name, sex, breed, food, comment);

    fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: new FormData(formCat)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));

}

