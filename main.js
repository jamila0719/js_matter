
// let matn = ['Hello, it is HTML']
// console.log(matn);
// matn.pop()
// matn.push('Hello, it is not JS')
// console.log(matn);


// let students = [
//       {
//         name: "Anvar",
//         last_name: "Muxtorov",
//         age: "18",
//         class: "1",
//         ball: "92"
//       },
//       {
//         name: "Mirjalol",
//         last_name: "Qurbonov",
//         age: "20",
//         class: "3",
//         ball: "88"
//       },
//       {
//         name: "Marjona",
//         last_name: "Botirova",
//         age: "20",
//         class: "4",
//         ball: "86"
//       },
//       {
//         name: "Jamila",
//         last_name: "Ravshanova",
//         age: "16",
//         class: "0",
//         ball: "100"
//       },
//       {
//         name: "Ozodbek",
//         last_name: "Falonchiyev",
//         age: "15",
//         class: "-3",
//         ball: "30"
//       },
//     ]
    
// for(let iteam of students){
//   if(item.ball < 60){
//     console.log(`${item.name} ${item.last_name} => ${item.class} kurs talabisi ${item.ball} ball to'plab kursdan qoldirildi!!!`);
//   }else if(item.ball < 70 && item.ball >= 60){
//     console.log(`${item.name} ${item.last_name} => ${item.class} kurs talabisi ${item.ball} ball to'plab 3 baho asosida keyingi kursga o'tqazildi!!!`);    
//   }else if(item.ball < 90 && item.ball >= 70){
//     console.log(`${item.name} ${item.last_name} => ${item.class} kurs talabisi ${item.ball} ball to'plab 4 baho asosida keyingi kursga o'tqazildi!!!`);    
//   }else{
//     console.log(`${item.name} ${item.last_name} => ${item.class} kurs talabisi ${item.ball} ball to'plab 5 baho asosida keyingi kursga o'tqazildi!!!`);    
//   }
// }



// let user_info = {
//     name:"Alex",
//     card_num: 7777,
//     money: 9_000_000,
//     bank_salary:1000_00,

// }

// if(user_info){
//     let name_prompt = prompt("Ismni kirting...")
//     if(name_prompt === user_info.name){
//         let card_prompt = +prompt("Carta raqamingizni kiriting...")
//         if(card_prompt === user_info.card_num){
//             let give_money = +prompt("Qancha pul yechmoqchisiz???")
//             if(give_money <= user_info.money){
//                 alert(`Kartangizdan ${give_money} so'm pul yechildi\nQoldi:${user_info.money  - give_money - user_info.bank_salary} so'm`)
//             }else{
//                 alert("Kartangizda yetarli mablag' mavjud emas!!!")
//             }
//         }else{
//             alert("Karta raqamingizda xatolik bor!\nQaytadan urinib ko'rig.")
//         }
//     }else{
//         alert("Ismni xato kiritdingiz!!!")
//     }
// }



// 1- ism kiritilsin 2-parol kiritilsin 3-tanlansin:mablag'ni tekshirish, pul yechish 4-mablag'ni aytsin, pul yechilsin 5- pul yechilmoqchi bo'lib mablag' yetarli bo'lmasa 'Mablag' yetarli emas'deyilsin 6-ish tugasa `E'tiboringiz uchun rahmat` deyilsin --- bankomat mablag'i --- 0,01


let user_info = {
    name: "Yusuf",
    card_num: 1111,
    user_money: 9_000_000,
    bank_money: 10_000_000,
};

if (user_info) {
    let name_prompt = prompt("Ismni kiritin :)");
    if (name_prompt === user_info.name) {
        let card_prompt = +prompt("Kartangiz raqamini kiriting :)");
        if (card_prompt === user_info.card_num) {
            let question = +prompt("Mablag'ni tekshirish uchun 1 sonini yozing!\nPul yechish uchun 2 sonini yozing");
            if (question === 1) {
                alert(`Kartangizda ${user_info.user_money} so'm pul bor.`);
            } else if (question === 2) {
                let give_money = +prompt("Qancha pul yechmoqchisiz???");
                if (give_money <= user_info.user_money) {
                    user_info.user_money -= give_money;
                    alert(`Sizning yangi balansingiz: ${user_info.user_money} so'm`);
                } else {
                    alert("Sizda yetarli mablag' yo'q :(");
                }
            } else {
                alert("Noto'g'ri raqam kiritildi. Iltimos, 1 yoki 2 raqamini tanlang.");
            }
        } else {
            alert("Kartangizda xatolik bor. Qayta urinib ko'ring!");
        }
    } else {
        alert("Ismni xato kiritdingiz :(");
    }
}