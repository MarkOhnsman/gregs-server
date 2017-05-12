console.log(4)
function CarsController() {
    console.log(8)
    var carService = new CarsService()
    console.log(11)

    //GETS FORM INFO
    this.createCar = function(e) {
        e.preventDefault()

        var car = {
            make: e.target.make.value,
            model: e.target.model.value,
            year: e.target.year.value,
            doors: e.target.doors.value,
            condition: e.target.condition.value,
            color: e.target.color.value,
            picture: e.target.picture.value,
            description: e.target.description.value,
            price: e.target.price.value,
            email: e.target.email.value
        }

        carService.createCar(car)
    }

    //GETS THE CARS FROM THE SERVICE
    this.getCars = function() {
        console.log(24)
        carService.getCars() 
            .then(function(data) {
                console.log(28)
                drawCars(data)
            }).catch(function(){
                console.log(28)
                console.log('WHOOPS YOU BWROKE IT')
            })
    }


    function drawCars(data) {
        console.log(29)
        var elem = document.getElementById("cars-list")
        console.log(31)
        var template = "";
        for(var i = 0; i < data.length; i++) {
            var c = data[i];
             template += `
                <div class="col-xs-12 col-sm-4">
                <h2>${c.year} ${c.make} ${c.model}</h2>
                <h3>$ ${c.price}</h3>
                <p class="description">${c.description}</p>
                </div>
        `
        }
        return elem.innerHTML = template
    }
    console.log(12)
}