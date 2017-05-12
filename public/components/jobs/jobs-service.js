console.log(3)
function JobsService() {
    console.log(14)
    var url = 'http://localhost:9004/jobs'

    this.createJob = function(job){
        $.post(url, job).then(function(res) {
            console.log(res)
        })
    }

    this.getJobs = function(){
        return new Promise(function(resolve, reject) {
            $.get(url).then(
                function(data) {
                resolve(data);
              //  console.log(data)
            },
        function(error) {
          reject(error);
        }
      );
    });
	}
    console.log(15)
}