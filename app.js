let students =  [
                {id:1, name:"John", major:"CS"},
                {id:2, name:"Mike", major:"Math"},
                {id:3, name:"John", major:"Pharmacy"}
]

students.push({id:4, name:"Sarah", major: "CS"})

students.forEach(stu => {
    console.log(stu.name)
});

const boys = [
    {id: 1, hobby:'baseball'},
    {id: 2, hobby:'soccer'},
    {id: 3, hobby:'running'}
];
const girls = [
    {id: 1, sport:'soccer'},
    {id: 2, sport:'running'},
    {id: 3, sport:'soccer'}
];

compare = (arr1, arr2) => {
    arr1.forEach(item1 => {
        arr2.forEach(item2 => {
            if(item1.hobby == item2.sport){
                console.log("boy " + item1.id + " and girl " + item2.id + " both like " + item1.hobby)
                document.getElementById("q2b").innerHTML += "<li>boy " + item1.id + " and girl " + item2.id + " both like " + item1.hobby + "</li>";
            }
        });
    });
}

compare(boys, girls);