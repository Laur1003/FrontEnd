let prices = [17,87,54,85,1];
let filteredNumbers =  prices.filter(prices => prices < 70);

console.log(filteredNumbers);

//filter prices array to only get prices more than 20, then print each item 

prices.filter(prices=> prices>20)
            .forEach(prices=>console.log(prices));

            const spartans = [
                {
                  "id": 3,
                  "name": "Test1",
                  "gender": "Male",
                  "phone": 7684567890
                },
                {
                  "id": 4,
                  "name": "Paige",
                  "gender": "Female",
                  "phone": 3786741487
                },
                {
                  "id": 6,
                  "name": "Tedmund",
                  "gender": "Male",
                  "phone": 2227140732
                },
                {
                  "id": 7,
                  "name": "Hershel",
                  "gender": "Male",
                  "phone": 5278678322
                }
            ]
            //get all the male names and print it out

            spartans.filter(each=> each.gender == 'Male').
            map(each=> each.name)
                .forEach(each=>console.log(each));
