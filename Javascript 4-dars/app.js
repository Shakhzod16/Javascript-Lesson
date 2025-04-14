// if (condition === 'yomgir')

// switch -> ===

// let data = 'yomgir'
// 	switch (data)
// 	case 'yomgir'
// 	console.log('bugun yomgir')
// 	console.log('bugun yomgir')
// 	break;
// 	case 'qor':
// 		console.log('bugun qor')
// }

// < ===================== >

// for (i = 1; i <= 10; i = i + 1) {
// 	console.log("hello wold");
//     console.log(i);
// }

// < ===================== >

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// < ===================== >

// var sum = 0;
// for (i = 1; i < 12; i++) {
//     console.log((sum += i));
//     if (sum === 10) break;
// }

// < ===================== >

// var sum = 0;
// for (i = 1; i < 12; i++) {
//     console.log(`Sum = ${sum} + ${i} = ${(sum += i)}`);
//     if (sum === 10) break;
// }

// < ===================== >

// var sum = 0;
// for (i = 1; i < 12; i++) {
//     console.log(i);
// 		i = i * 2
// }

// < ===================== >

// for (i = 1; i < 12; i++) {
//     if (i % 2 === 0) console.log(`juft son ${i}`);
//     else console.log(`toq son ${i}`);
// }

// < ===================== >

// for (i = 0; 1 <= 12; i++) {
//     if (i % 3 === 0) continue;
//     console.log(`$(i)`);
// }  // cheksiz davom etadi!

// < ===================== >

// for (i = 1; 1 <= 12; i++) {
//     if (i % 3 === 0) break;
//     console.log(`${i}`);
// }

// < ===================== >

// for (i = 10; i >= 1; i--) {
//     console, log(i);
// }

// < ===================== >

// for (let i = 10; i >= 1; i--) {
// 	console.log(i);
// }

// < ===================== >

// for (i = 10; i >= 1; i--) {
//     for (j = 1; j <= 10; j++) {
//         console.log(j);
//     }
// }
// console.log(i)

// < ===================== >

outer: for (i = 1; i <= 10; i += 3) {
    inner: for (j = 1; j <= 10; j += 3) {
        if (i === 4) break;
        console.log(j, "j");
    }
    console.log(i, "i");
}
