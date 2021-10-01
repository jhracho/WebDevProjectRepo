// Returns latest five posts
export function getLatest(date){
    const axios = window.axios;
    return axios.get("http://127.0.0.1:5500/data.json").then((response) => {
        return response.data[date].slice(0, 5);
    });
}

// Returns the top voted posts from that day
export function getTopPosts(date){
    const axios = window.axios;
    return axios.get("http://127.0.0.1:5500/data.json").then((response) => {
        // Receive Data
        var rawData = response.data;
        var totalData = [];

        // Extract Start Date
        var day = date.split('-')[1];

        // Iteratively concatenate data from the last week of posts
        for (let i = 0; i < 7; i++){
            date = "2021-" + day + "-09";
            var tempData = rawData[date];
            totalData = totalData.concat(tempData);
            day--;
        }

        // Custom sort function
        totalData.sort(function(x, y){
            if (x['likes'] < y['likes']){
                return 1;
            }
            if (x['likes'] > y['likes']){
                return -1;
            }
            return 0;
        });

       
        return totalData.slice(0, 5);
    });
}