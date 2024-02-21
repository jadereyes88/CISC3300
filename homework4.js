const cats = [
    { name: 'Charlie', adoptionStatus: 'available' },
    { name: 'Lily', adoptionStatus: 'not-available' },
    { name: 'Coco', adoptionStatus: 'available' },
    { name: 'Oreo', adoptionStatus: 'not-available' },
    { name: 'Luna', adoptionStatus: 'available' },
    { name: 'Milo', adoptionStatus: 'available' },
    { name: 'Lola', adoptionStatus: 'not-available' },
    { name: 'Leo', adoptionStatus: 'available' },
    { name: 'Willow', adoptionStatus: 'available' },
    { name: 'Bella', adoptionStatus: 'not-available' },
    { name: 'Max', adoptionStatus: 'available' },
    { name: 'Cleo', adoptionStatus: 'available' },
    { name: 'Lucy', adoptionStatus: 'not-available' },
    { name: 'Daisy', adoptionStatus: 'available' },
];

let availableCats = [];

for (let i = 0; i < cats.length; i++) {
    if (cats[i].adoptionStatus === 'available') {
        availableCats.push(cats[i].name);
    }
}

let adoptionSentence = '';

if (availableCats.length > 0) {
    for (let i = 0; i < availableCats.length; i++) {
        if (i === availableCats.length - 1) { // Last element
            adoptionSentence += (availableCats.length > 1 ? 'and ' : '') + availableCats[i];
        } else {
            adoptionSentence += availableCats[i] + ', ';
        }
    }
    adoptionSentence = `These cats are available for adoption: ${adoptionSentence}.`;
} else {
    adoptionSentence = "Currently, there are no cats available for adoption.";
}

console.log(adoptionSentence);
