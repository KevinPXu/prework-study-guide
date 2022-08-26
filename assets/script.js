var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
    for(var i = 0; i < topics.length; i++){
        console.log(topics[i]);
    }
}

function selectTopic(){

    if (randomtopics === 'HTML') {
        console.log("Let's study HTML!");
    }
    else if (randomtopics === 'CSS') {
        console.log("Let's study CSS!");
    }
    else if (randomtopics === 'Git'){
        console.log("Let's study Git!");
    }
    else if (randomtopics === 'JavaScript'){
        console.log("Let's study JavaScript");
    }
    else {
        console.log('Please try again!');
    }
}
console.log('Here are the topics we learned through Prework:');
listTopics()

console.log('Which topoic should we study first?');
selectTopic()