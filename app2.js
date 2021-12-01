let quotes = [
    `“People who are crazy enough to think they can change the world, are the ones who do.” `,
    `“Optimism is the one quality more associated with success and happiness than any other.” `,
    `“Happiness is not something readymade. It comes from your own actions.” `,
    `“All our dreams can come true if we have the courage to pursue them.” `,
    `“Success is not final, failure is not fatal: it is the courage to continue that counts.” `,
    ` “Believe you can and you’re halfway there.” `,
    `“It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.” `,
    `“You are never too old to set another goal or to dream a new dream.” `,
    `“We must be willing to let go of the life we planned so as to have the life that is waiting for us.” `,
    `“Everything you’ve ever wanted is on the other side of fear.” `,
];

let author = [
    ` - Rob Siltanen`,
    `- Brian Tracy`,
    `-Dalai Lama`,
    `- Walt Disney`,
    `- Winston Churchill`,
    `-Theodore Roosevelt`,
    `– William James`,
    `– C.S. Lewis`,
    `– Joseph Campbell`,
    `- George Addair`,
];

let color_change = [
    `#4B4C4F`,
    `#38CF14`,
    `#0ABDA0`,
    `#0B99B5`,
    `#273BEA`,
    `#9626EE`,
    `#F059E6`,
    `#EF227E`,
    `#F1C345`,
    `#F57C2E`,
];

function newQuaote() {

    let random_num = Math.random();
    let quote_list = Math.floor(random_num * (quotes.length));
    let author_list = Math.floor(random_num * (author.length));
    let clr_change = Math.floor(random_num * (color_change.length));
    

    // let body_clr = document.getElementsByTagName("body");
    // body_clr.style.backgroundColor = "red";

    
    document.getElementById("quote_list").innerHTML = quotes[quote_list];
    document.getElementById("author_list").innerHTML = author[author_list];
    document.getElementById("quote_list").style.color = color_change[clr_change];
    document.getElementById("author_list").style.color = color_change[clr_change];
    document.getElementById("button").style.backgroundColor = color_change[clr_change];
   document.body.style.backgroundColor =  color_change[clr_change];



}

function timeofday(){

    let time = new Date();
    let hour = time.getHours();
    let time_of_day = document.getElementById("time_of_day").innerHTML;

    if(hour == 0 || hour < 12){
        time_of_day = "morning";
    } else if(hour < 17){
        time_of_day = "afternoon";
    } else if(hour < 20){
        time_of_day = "evening";
    } else if(hour == 20 || hour > 20){
        time_of_day = "night";
    }

    
    document.getElementById("time_of_day").innerHTML = time_of_day;
}

setInterval(timeofday, 1000);