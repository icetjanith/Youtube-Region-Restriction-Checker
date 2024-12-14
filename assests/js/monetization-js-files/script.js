
let video_details_div = document.getElementById('video_details');

document.getElementById('searchBtn').addEventListener('click', () => {
    console.log('clicked');
    let videolink = document.getElementById('default-search').value;
    console.log('Input URL:', videolink);

    // Use a regex to safely extract the video ID from a YouTube URL
    let videoId = extractVideoId(videolink);
    if (videoId) {
        console.log(videoId);
        getVideoDeatils(videoId);
    } else {
        alert('Invalid YouTube URL!');
    }
});

async function getVideoDeatils(videoid) {
    let response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,statistics&id=${videoid}&key=AIzaSyAr6PGDr0oXvUuUDFwgCl3fYL0FhlZC-v4`);
    if (!response.ok) {
        alert('api request error !');
        return;
    }
    let data = await response.json();
    console.log(data);
    if (data.items[0].contentDetails.regionRestriction) {
        let countries = data.items[0].contentDetails.regionRestriction.blocked;
    }
    // displayVideoName(data.items[0]);
    // countries();
    console.log(data.items[0].snippet.thumbnails.maxres.url);
    createVideoDetailsDiv(data);
}

function createVideoDetailsDiv(data){
    video_details_div.innerHTML=`
    <div class="main_01">
        <div class="channelDetails">
            <div class="imgDiv">
                <img src="${data.items[0].snippet.thumbnails.maxres.url}" alt="" srcset="">
            </div>
            <div class="videoTitle">
                Video Statistics for “${data.items[0].snippet.title}"
            </div>
            <div class="text_01">
                As of 11 Dec 2024 09:45:41 UTC, this video from the channel ${data.items[0].snippet.channelTitle} gathered ${data.items[0].statistics.viewCount} views since it was
                published on Nov 17, 2024.
            </div>
            <div class="text_02">
                Potential Revenue Estimates
            </div>
            <div class="text_03">
                Here are a few numbers to give you an idea of how much this video could have made with ${data.items[0].statistics.viewCount} views:
            </div>

            <div class="text_04">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    RPM (Revenue per 1,000 views)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Revenue
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Music
                                </th>
                                <td class="px-6 py-4">
                                    $0.75
                                </td>
                                <td class="px-6 py-4">
                                    $5.32
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Entertainment / Pets & Animals
                                </th>
                                <td class="px-6 py-4">
                                    $1.00
                                </td>
                                <td class="px-6 py-4">
                                    $7.09
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Gaming
                                </th>
                                <td class="px-6 py-4">
                                    $2.50
                                </td>
                                <td class="px-6 py-4">
                                    $17.73
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    People & Blogs / How To & Style
                                </th>
                                <td class="px-6 py-4">
                                    $3.50
                                </td>
                                <td class="px-6 py-4">
                                    $24.82
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Education
                                </th>
                                <td class="px-6 py-4">
                                    $5.00
                                </td>
                                <td class="px-6 py-4">
                                    $35.45
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Digital Marketing / Finance (lower bound)
                                </th>
                                <td class="px-6 py-4">
                                    $8.00
                                </td>
                                <td class="px-6 py-4">
                                    $56.72
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Digital Marketing / Finance (upper bound)
                                </th>
                                <td class="px-6 py-4">
                                    $20.00
                                </td>
                                <td class="px-6 py-4">
                                    $141.80
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div class="text_05">
                Video Details:
            </div>

            <div class="text_06">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Type
                                </th>
                                <td class="px-6 py-4">
                                    Regular video
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Duration
                                </th>
                                <td class="px-6 py-4">
                                ${data.items[0].contentDetails.duration}
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Definition
                                </th>
                                <td class="px-6 py-4">
                                    HD
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Views
                                </th>
                                <td class="px-6 py-4">
                                ${data.items[0].statistics.viewCount}
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Likes
                                </th>
                                <td class="px-6 py-4">
                                ${data.items[0].statistics.favoriteCount}
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Comments
                                </th>
                                <td class="px-6 py-4">
                                ${data.items[0].statistics.commentCount}
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Made for kids
                                </th>
                                <td class="px-6 py-4">
                                    No
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Privacy status
                                </th>
                                <td class="px-6 py-4">
                                    Public
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Upload status
                                </th>
                                <td class="px-6 py-4">
                                    Processed
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Categories
                                </th>
                                <td class="px-6 py-4">
                                    Knowledge
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Tags
                                </th>
                                <td class="px-6 py-4">
                                    ${data.items[0].snippet.tags}
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </div>`
}

function extractVideoId(url) {
    let regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/)([a-zA-Z0-9_-]+))|(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=)([a-zA-Z0-9_-]+))/;
    let matches = url.match(regex);
    return matches ? matches[1] || matches[2] : null; // Return the video ID if a match is found
}  