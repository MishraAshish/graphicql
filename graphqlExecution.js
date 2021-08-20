// mutation{
//     createCourse(input : {
//       courseName : "JS bootcarp",
//       price : 201,
//       stack : MOBILE,
//       teachingAssists : [
//         {
//           firstName : "ashish",
//           lastName : "mishra",
//           experience : 2
//         },
//         {
//           firstName : "avika",
//           lastName : "mishra",
//           experience : 9
//         }
//       ]
//     })
//     {
//           id,
//       courseName
//       }
//   }


// query{
// 	getCourse(id:"7D0Ueihi17qKvgtNcZeJV"){
// 		id
//     teachingAssists{
//       experience
//     }
// 	}
// }

// query{
//   getCourse(id: "gXNmg3olsEVQKr69G4mzu"){
// 		id
//     teachingAssists{
//       experience
//     }
// 	}
// }

//http://localhost:8082/graphql

//http://localhost:8082/graphql?query=query%7B%0A%20%20getCourse(id%3A%20%22QSbl2VdP3lQcBqW8Nz9X9%22)%7B%0A%09%09id%0A%20%20%20%20teachingAssists%7B%0A%20%20%20%20%20%20experience%0A%20%20%20%20%7D%0A%09%7D%0A%7D

//http://localhost:8082/graphql?query=mutation%7B%0A%20%20%20%20createCourse(input%20%3A%20%7B%0A%20%20%20%20%20%20courseName%20%3A%20%22JS%20bootcarp%22%2C%0A%20%20%20%20%20%20price%20%3A%20201%2C%0A%20%20%20%20%20%20stack%20%3A%20MOBILE%2C%0A%20%20%20%20%20%20teachingAssists%20%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20firstName%20%3A%20%22ashish%22%2C%0A%20%20%20%20%20%20%20%20%20%20lastName%20%3A%20%22mishra%22%2C%0A%20%20%20%20%20%20%20%20%20%20experience%20%3A%202%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20firstName%20%3A%20%22avika%22%2C%0A%20%20%20%20%20%20%20%20%20%20lastName%20%3A%20%22mishra%22%2C%0A%20%20%20%20%20%20%20%20%20%20experience%20%3A%209%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D)%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%2C%0A%20%20%20%20%20%20courseName%0A%20%20%20%20%20%20%7D%0A%20%20%7D