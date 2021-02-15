const DB = firebase.firestore();

const model = {
    liste: [

    ],
}

async function getArray() {
    let array = await DB.collection('liste').doc('document').get();
    model.liste = array.data().myArray;
    
    view();
}
function saveShit() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = '';

    let array = DB.collection('liste').doc('document');
    array.update({myArray: firebase.firestore.FieldValue.arrayUnion(input)})
    .then(function() {
        console.log('woho!');
        getArray();
    }) 
    .catch(function(error) {
        console.log(error);
    })

    
}
function reset() {
    let array = DB.collection('liste').doc('document');
    array.set({myArray: firebase.firestore.FieldValue.arrayUnion()});

    getArray();
}


// DB.collection('documents').onSnapshot(function(document) {
//     document.docChanges().forEach(change => {
//         if(change.type == 'added') {
//             // renderTask(change.doc);
//             model.liste.push(change.doc.data())
//             console.log(model.liste);
//         }   
//         if (change.type == 'modified') {
//             changeTask(change.doc); 
//         }             
//         if (change.type == 'removed') { 
        
//         }
        
//     })
// })

// function addDrit(drit, piss, collection) {
//     DB.collection(collection).add({hvasomhelst: drit, hvasomhelstDos: piss});
// }

// function addPiss(something, document, collection) {
//     DB.collection(collection).doc(document).set({something: something});
// } 

// function getPiss(collection) {
//     DB.collection(collection).get().then(documents => {
//         documents.forEach(document => {
//             if (document.data().something != undefined) {
//                 console.log(document.data().something);
//             }
//         })
//     })
// }

