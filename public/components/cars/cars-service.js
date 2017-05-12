console.log(1)
function CarsService() {
    console.log(9)
    var url = 'http://localhost:9004/cars'

    this.createCar = function (car) {
        $.post(url, car).then(function (res) {
            console.log(res)
        })
    }

    this.getCars = function () {
        console.log(25)
        return new Promise(function (resolve, reject) {
            console.log(26)
            $.get(url).then(
                function (data) {
                    console.log(27)
                    resolve(data);
                    //  console.log(data)
                },
                function (error) {
                    console.log(27)
                    reject(error);
                }
            );
        });
    }
    console.log(10)
}







