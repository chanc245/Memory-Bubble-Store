let currentIndex = 0;

let text_item_wrong = `This doesn’t seem like the right item for this customer.`;

// CHAR
let char01_kid_start = [
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_stress",
    texts: `I can’t keep doing this…`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_stress",
    texts: `Finals are almost here, and it’s been raining the whole day non-stop.`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_stress",
    texts: `How can I concentrate with the sound of rain constantly falling on the rooftop and leaking everywhere in my house?`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_stress",
    texts: `I feel like there’s no time left for anything anymore. How can I even focus when it feels like the world is falling apart?`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_stress",
    texts: `I just wish I could escape, even for a moment.`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_stress",
    texts: `Do you think you might have something for me?`,
  },
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `Select the item that you think best fits this kid.`,
  },
];
let char01_kid_end = [
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_think",
    gif: "cg_kid_1",
    texts: `This seems so familiar…`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_think",
    gif: "cg_kid_1",
    texts: `My mom loves flowers. There were always flowers in our garden. `,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_think",
    gif: "cg_kid_1",
    texts: `When I played with them, using my fingers to feel the soft petals, my mom would sit by me and tell me all the fun tricks I could do with flowers. `,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_think",
    gif: "cg_kid_2",
    texts: `When I couldn’t hold my heart, my mom taught me how to read with flowers.`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_think",
    gif: "cg_kid_2",
    texts: `By drawing petals one by one, I asked if my wishes would come true—no, it won’t, yes, it will. `,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_think",
    gif: "cg_kid_2",
    texts: `If I leave my fate to flowers, my heart’s worries disappear.`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_happy",
    gif: "cg_kid_2",
    texts: `Those times felt so peaceful and free of stress.`,
  },
  {
    textType: 1,
    name: "Stressed Duck",
    emotion: "kid_happy",
    gif: "cg_kid_2",
    texts: `Ajeossi … thank you.`,
  },
];

let char02_panda_start = [
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_tired",
    texts: `Trying to balance my work and life while witnessing these crazy weather events and environmental destruction is incredibly hard...`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_tired",
    texts: `I feel mentally drained by all the issues around me.`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_tired",
    texts: `I don’t know when I became an adult so fast.`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_tired",
    texts: `I’m so worried that I’m lost and not stable. I'm not ready to be a responsible adult.`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_tired",
    texts: `I just want to take the time to appreciate my life and relax from these fears.`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_tired",
    texts: `Is there anything that can help me?`,
  },
];
let char02_panda_end = [
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_think",
    gif: "cg_panda_1",
    texts: `This windmill origami… it reminds me of the time I used to blow dandelion seeds.`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_think",
    gif: "cg_panda_1",
    texts: `They’d fly through the wind, traveling as far as they could.`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_think",
    gif: "cg_panda_2",
    texts: `I feel like… I’m actually not lost!`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_happy",
    gif: "cg_panda_2",
    texts: `I’m simply on an adventure!`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_happy",
    gif: "cg_panda_2",
    texts: `An adventure to find my new place!`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_happy",
    gif: "cg_panda_2",
    texts: `Yeah, I used to take the time to appreciate the beauty of nature—those moments when I watched the seeds flying in the wind under the sun!`,
  },
  {
    textType: 0,
    name: "Tired Panda",
    emotion: "panda_happy",
    gif: "cg_panda_2",
    texts: `Ajeossi… thank you.`,
  },
];

let char03_mom_start = [
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `May I have some meat?`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `Oh, sorry, I thought I was at the meat shop…`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `Recently, I don’t know how to talk to my kid anymore. `,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `Everything about them seems fine, but I can tell they’re very stressed—not just because of finals, but also the weather...`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `or maybe just… everything in general.`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `I don’t know how to approach them, especially when I have so many other things to worry about myself…`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `...`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `You know what…`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `Thank you for listening.`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_stress",
    texts: `I must get going…`,
  },
  {
    textType: 0,
    name: "",
    emotion: "mom_stress",
    texts: `(Before she leaves, you hand her a origami doll.)`,
  },
];
let char03_mom_end = [
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_think",
    gif: "cg_mom_1",
    texts: `This… tiny doll reminds me of the first time I held my baby…`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_think",
    gif: "cg_mom_1",
    texts: `The pure joy of seeing their little eyes open and imagining the future they could hold with those tiny hands.`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_happy",
    gif: "cg_mom_1",
    texts: `I used to make her dandelion dolls—simple, delicate, and full of life. `,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_happy",
    gif: "cg_mom_2",
    texts: `Those tiny flowers, fragile but full of potential, taught me to pause and cherish the small, beautiful moments. `,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_happy",
    gif: "cg_mom_2",
    texts: `They may drift away like dandelion seeds, but the joy they bring never truly fades.`,
  },
  {
    textType: 0,
    name: "Concerned Duck",
    emotion: "mom_happy",
    gif: "cg_mom_2",
    texts: `Thank you, Ajeossi…`,
  },
];

let char04_mole_start = [
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `Sign..............`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `My farm took direct damage from the storm.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `The crops are all dead, and there’s barely anything left to save.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `These unpredictable weather patterns and crop failures are causing anxiety and threatening our livelihoods.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `I need to keep my mind together...`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `At least for the sake of our farming community.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_sad",
    texts: `What could help me in this cruel situation?`,
  },
];
let char04_mole_end = [
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_think",
    gif: "cg_mole_1",
    texts: `This boat… I used to make my own boats with leaves.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_think",
    gif: "cg_mole_1",
    texts: `In my childhood, I lived by a tiny river.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_think",
    gif: "cg_mole_1",
    texts: `My sister and I would race to see whose leaf boat would float faster.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_think",
    gif: "cg_mole_1",
    texts: `The leaf boats would steadily glide along the small water paths.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_think",
    gif: "cg_mole_1",
    texts: `The excitement of me winning, only to be caught up by my sister the next second, was unforgettable!`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_think",
    gif: "cg_mole_2",
    texts: `The river—or rather, nature—was such a huge part of my life. The bond I have with nature is truly amazing!`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_happy",
    gif: "cg_mole_2",
    texts: `Even though I was just defeated by nature, isn’t that part of its beauty?`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_happy",
    gif: "cg_mole_2",
    texts: `I think I feel more at peace now. I can think clearly.`,
  },
  {
    textType: 0,
    name: "Frustrated Mole",
    emotion: "moles_happy",
    gif: "cg_mole_2",
    texts: `Thanks, Ajeossi.`,
  },
];

let char05_h_start = [
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_angry",
    texts: `Hey you! Ajeossi! Stop throwing trash where you shouldn’t!`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_angry",
    texts: `You say you didn’t throw that trash across the corner of the street? Oh, I’m supposed to believe you just because you said so??`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_angry",
    texts: `I have a great responsibility to keep this area clean and tidy. `,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_angry",
    texts: `People just keep ignoring what they shouldn’t do and continue throwing trash where they shouldn’t.`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    texts: `But I guess, Ajeossi, you don’t really seem like one of those people.`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    texts: `.....`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    texts: `I can never seem to catch the ones who throw trash in the wrong place…`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    texts: `I’m sorry, Ajeossi. Thank you for listening to my rant…`,
  },
  {
    textType: 0,
    name: "",
    emotion: "h_think",
    texts: `(Before he walks away, you hand him a paper airplane.)`,
  },
];
let char05_h_end = [
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    gif: "cg_hedgehog_1",
    texts: `An airplane…?`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    gif: "cg_hedgehog_1",
    texts: `I’ve always loved folding or making every kind of airplane, especially ones made with tree leaves.`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    gif: "cg_hedgehog_1",
    texts: `When I see those airplanes fly successfully, I feel so happy—`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    gif: "cg_hedgehog_2",
    texts: `not just because I didn’t let my physics teacher down by folding it wrong,`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    gif: "cg_hedgehog_2",
    texts: `but because watching those airplanes fly feels like they’re carrying all my worries and anger away.`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_think",
    gif: "cg_hedgehog_2",
    texts: `I can’t fly, but I can place my worries and negative emotions on the airplane and send them away…`,
  },
   {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_happy",
    gif: "cg_hedgehog_2",
    texts: `People have been saying this tiny corner shop is magical…`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_happy",
    gif: "cg_hedgehog_2",
    texts: `I guess they’re right!`,
  },
  {
    textType: 0,
    name: "Angry Hedgehog",
    emotion: "h_happy",
    gif: "cg_hedgehog_2",
    texts: `Thank you, Ajeossi! And don’t forget to recycle!`,
  },
];

// ITEAM_TEXT
let item_flower_text = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: ` A flower origami. It helps you focus and find a moment of peace amidst the pressure of overwhelming weather.`,
  },
];

let item_ball_text = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `A windmill origami. It will remind you to slow down and appreciate the small moments of life, providing relief from mental exhaustion.`,
  },
];

let item_doll_text = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `An origami doll. It could serve as a comforting gesture, helping to open communication and connect.`,
  },
];

let item_boat_text = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `An origami boat. It offers mental strength and a reminder that renewal is possible even in difficult times.`,
  },
];

let item_airplane_text = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `An origami airplane. It offers mental strength and a reminder that renewal is possible even in difficult times.`,
  },
];

let item_extra_text = [
  {
    textType: 0,
    name: "",
    emotion: null,
    texts: `A heart origami. It helps bring warmth and emotional comfort, reminding you to cherish love and connection.`,
  },
];
