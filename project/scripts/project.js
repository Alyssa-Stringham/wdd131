const today = new Date();
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamburger = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
});


document.addEventListener("DOMContentLoaded", () => {
    const vocabulary = document.getElementById("vocabulary");
    if (vocabulary) {
        defineWord(vocab);
    }
    const messageCount = document.getElementById("submitCount");
    if (messageCount) {
        let numMessage = parseInt(localStorage.getItem("numMessage")) || 0;
        localStorage.setItem("numMessage", numMessage + 1);
    }

});

const vocab = [
    {
        term: "Beat",
        definition: "Footfall of a hoof or diagonal pair of hooves that strike the ground virutally simulaneously. The timing of the footfalls determines the rhythm of the stride"
    },
    {
        term: "Bend",
        definition: "The laterally curved position in which the horse's body, as would be viewed from above, appears to form a uniform arc from poll to tail.Components of bending include lateral flexion at the poll, stretching of the outer side of the body, lowering of the inner hip, and adduction of the inner hind and outer fore legs."
    },

    {
        term: "Cadence",
        definition: "The marked accentuation of the rhythm and emphasized beat that is a result of a steady and suitable tempo harmonizing with a springy impulsion "
    },
    {
        term: "Collection",
        definition: "Balance and lightness of the forehand from increased engagement. The horse shows collection when he lowers and engages his hindquarters, shortening and narrowing his base of support, resulting in lightness and moility of the forehand.He shows shorter, but powerful cadenced steps and strides.The increased elevation must be the result of and relative to the lowering of the hindquarters."
    },
    {
        term: "Connection",
        definition: "State in which there is no blockage, break, or slack in the circuit that joins horse and rider into a single, harmonious, elastic unit. A prerequisite for throughness"
    },
    {
        term: "Contact",
        definition: "Connection and acceptance of the bit through acceptance of the aids. The energy generated in the hindquarters by the driving aids must flow through the whole body of the horse and is received in the rider's hands. The contact to the bit must be elastic and adjustable, creating fluent interaction between horse and rider with appropriate changes in the horse's outline."
    },
    {
        term: "Elasticity",
        definition: "The ability or tendency to stretch and contract the musculature smoothly, giving the impression of stretchiness or springiness"
    },
    {
        term: "Elevation",
        definition: "Raised position of the forehand (head, neck, and ribcage). The neck is elevated from its base with the poll as the highest point and the face slightly in front of the vertical. "
    },
    {
        term: "Engagement",
        definition: "Increased flexion in joints of the hind legs during the weight-bearing (stance) phase of the stride, lowering the croup relative to the forehand, enabling the back to assist in elevating the forehand, and providing a springboard for upward thrust/impulsion. Engagement is carrying power, rather than pushing power. "
    },
    {
        term: "Extension",
        definition: "At trot and canter, a pace that shows maximum length of stride, frame, and phase of suspension. The uphill balance is greater than in the lengthening pace. The tempo remains nearly the same as in the collected pace. At walk, a pace with maximum length of stride and frame, and showing the natural longitudinal oscillation of the neck (while still remaining on contact). The hind feet touch the ground clearly in front of the prints of the forefeet."
    },
    {
        term: "Footfall",
        definition: "A hoof striking the ground. "
    },
    {
        term: "Forward",
        definition: "Moving or tending to move toward the direction in which the horse is facing (in contrast to sideways, backward, or standing still); it does not indicate how he gets there. References to specifics such as impulsion, energy, freedom, reach, length of stride, into the contact, responsiveness to the leg, and tempo more accurately express how the horse should proceed in a forward direction."
    },
    {
        term: "Frame",
        definition: "The outline of the horse, which should change according to the length of stride (shorter frame for collection, longer for extension) and which shows degree of uphill versus downhill carriage."
    },
    {
        term: "Gait",
        definition: "Characteristic limb coordination pattern recognized by the sequence and timing of the footfalls. Gaits used in dressage are walk, trot, and canter. "
    },
    {
        term: "Half-Halt",
        definition: " A momentary effect of the aids that increases the attention and improves the balance of the horse. "
    },
    {
        term: "Harmony",
        definition: " Used in reference to the relationship between the horse and rider, the partners’ positive physical as well as mental/ emotional connection, showing rapport, trust, and confidence in one another and resulting in a sense of synchrony, contentment, and unity"
    },
    {
        term: "Impulsion",
        definition: "Engagement and the desire to go forward. Used to describe the transmission of an eager and energetic, yet controlled, propulsive thrust generated from the hindquarters into the athletic movement of the horse. (See Pyramid of Training for complete explanation)."
    },
    {
        term: "Lateral",
        definition: "To the side, as in flexion, bend, suppleness, or direction of movement. "
    },
    {
        term: "Pace(s)",
        definition: " Variations within a gait. The named paces are: at walk: collected, medium, extended, free; at trot and canter: collected, working, lengthening of stride, medium, extended"
    },
    {
        term: "Quality (of Gait)",
        definition: "The quality of a gait refers to its freedom, elasticity, flexibility, looseness, fluency and amplitude. "
    },
    {
        term: "Rhythm (Regularity and Tempo)",
        definition: "The characteristic sequence of footfalls and timing of a pure walk, pure trot, and pure canter. The rhythm should be expressed with energy and in a suitable and consistent tempo, with the horse remaining in the balance and self-carriage appropriate to its level of training. "
    },
    {
        term: "Self-Carriage",
        definition: "State in which the horse carries itself in balance without taking support or balancing on the rider’s hand."
    },
    {
        term: "Suppleness",
        definition: "Elasticity and freedom from anxiety. Suppleness indicates the absence of negative muscular tension, allowing the joints to move with harmonious flexibility. "
    },
    {
        term: "Suspension",
        definition: "The moment or phase of the trot, canter or passage in which the horse has no feet on the ground"
    },
    {
        term: "Straightness",
        definition: "Improved alignment and equal lateral suppleness on both reins.  A horse is said to be straight when the footfalls of the forehand and the hindquarters are appropriately aligned on straight and curved lines and when his longitudinal axis is in line with the straight or curved track on which he is ridden. "
    },
    {
        term: "Tempo",
        definition: "Rate of repetition of the strides as may be measured by a metronome. Tempo is measured by counting the number of times per minute that one of the hooves touches down (indicating completion of one full stride). "
    },
    {
        term: "Throughness",
        definition: "An equestrian term which means the supple, elastic, unblocked, connected state of the horse’s musculature and a willing mental state that permits an unrestricted flow of energy from back to front and front to back (circle of the aids), which allows the aids/influences to go through all parts of the horse."
    },
    {
        term: "Thrust",
        definition: "Propulsive forward and upward drive from hindquarters. Required at First Level to achieve improved balance and throughness; at Second Level required to be in a more uphill direction."
    },
    {
        term: "Uphill",
        definition: "Good longitudinal balance, with elevated forehand and lowered croup (engaged hindquarters). The degree of engagement of the hind limbs is balanced with the degree of elevation of the forehand"
    }
]

function defineWord(vocab) {
    document.querySelector(".vocabulary").innerHTML = "";
    vocab.forEach(newVocab => {
        let phrase = document.createElement("section");
        let word = document.createElement("h3");
        let define = document.createElement("p");

        word.textContent = newVocab.term;
        define.textContent = newVocab.definition;

        phrase.appendChild(word);
        phrase.appendChild(define);

        document.querySelector(".vocabulary").appendChild(phrase);
    });
}