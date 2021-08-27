console.log("PROJECT 5");

const person_tech_count = [
    {
        name: "veeru",
        count_moniter: 16,
        count_setup: 4,
        count_keyboard_wireless: 5,
        count_keyboard_wired: 7,
        count_mouse_wired: 4,
        count_mouse_wireless: 6,
        signal_bounce: "https://randomuser.me/api/portraits/men/51.jpg"
    },


    {
        name: "leeru",
        count_moniter: 1,
        count_setup: 1,
        count_keyboard_wireless: 1,
        count_keyboard_wired: 1,
        count_mouse_wired: 1,
        count_mouse_wireless: 1,
        signal_bounce: "https://randomuser.me/api/portraits/men/5.jpg"
    },

    {
        name: "feeru",
        count_moniter: 12,
        count_setup: 3,
        count_keyboard_wireless: 2,
        count_keyboard_wired: 5,
        count_mouse_wired: 5,
        count_mouse_wireless: 4,
        signal_bounce: "   "
    },

    {
        name: "teeru",
        count_moniter: 8,
        count_setup: 3,
        count_keyboard_wireless: 3,
        count_keyboard_wired: 2,
        count_mouse_wired: 3,
        count_mouse_wireless: 0,
        signal_bounce: "https://randomuser.me/api/portraits/men/15.jpg"
    },

    {
        name: "cheeru",
        count_moniter: 6,
        count_setup: 2,
        count_keyboard_wireless: 0,
        count_keyboard_wired: 1,
        count_mouse_wired: 0,
        count_mouse_wireless: 2,
        signal_bounce: "https://randomuser.me/api/portraits/men/70.jpg"
    }

]


// CV iterator

function CV_iterator(profiles) {
    let index = 0;

    console.log(index);
    return {
        next: function () {
            if (index < profiles.length) {
                return {
                    value: profiles[index++],
                    done: false
                }

            }
            else {
                return {
                    done: true
                }
            }
        }

    }
}
const candidates = CV_iterator(person_tech_count);



const next_BTn = document.getElementById("next_btn")
const img = document.getElementById("img");
const profile = document.getElementById("profile");






function nextCV() {
    const current_candidate = candidates.next().value;// this must be inside this function because when we call current_candidate next time then we can have the next values

    if (current_candidate != undefined) {
        img.innerHTML = `<img src="${current_candidate.signal_bounce}" alt="image hai idhar">`

        profile.innerHTML = `<li>name:- ${current_candidate.name}</li>
                             <hr>
                             <li>count moniter :-    ${current_candidate.count_moniter}</li>
                             <hr>
                             <li>count setup :-  ${current_candidate.count_setup}</li>
                             <hr>
                             <li>count keyboard wireless :-  ${current_candidate.count_keyboard_wireless}</li>
                             <hr>
                             <li>count keyboard wired :- ${current_candidate.count_keyboard_wired}</li>
                             <hr>
                             <li>count mouse wireless :- ${current_candidate.count_mouse_wireless}</li>
                             <hr>
                             <li>count mouse wired :-    ${current_candidate.count_mouse_wired}</li>
                            `
    } 
    else {
        alert('End of candidate applications');
        window.location.reload();
    }
    

}


next_BTn.addEventListener("click", nextCV());