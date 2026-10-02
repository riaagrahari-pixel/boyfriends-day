/* ===========================================================
   EDIT ONLY THIS FILE. Everything on the site comes from here.
   [BOYFRIEND_NAME] and [MY_NAME] work inside ANY text below.
   Use **bold**, *italic* and \n for line breaks in messages.
   Remove an item from "sections" to hide a section; reorder to move it.
   =========================================================== */
const SITE_CONFIG = {
  boyfriendName: "His Name",          // <-- his name
  myName: "My Name",                  // <-- your name
  pageTitle: "For You ❤️",

  /* ---- DESIGN ---- */
  theme: "romantic",   // romantic | softred | babyblue | lavender | cream | blackred | pastel | custom
  customColors: { bg:"#fff1f4", ac:"#d6366b", ac2:"#ffc4d4", tx:"#4a1d2c", btn:"#e0507c", card:"rgba(255,255,255,.7)", hl:"#ffd9e3" }, // used when theme:"custom" (ac=primary accent, ac2=secondary, hl=highlight)
  fonts: "elegant",    // elegant | cute | script | minimal
  decor: { hearts:true, stars:false, sparkles:true, flowers:false, confetti:true, doodles:false, bubbles:false, polaroid:true },
  galleryLayout: "polaroid",  // polaroid | masonry
  reasonAnim: "flip",         // flip | fade | slide | pop

  /* ---- ORDER / VISIBILITY OF SECTIONS ---- */
  sections: ["hero","story","photos","reasons","meter","music","openWhen","jokes","quiz","letter","bucket","ending"],
  navLabels: { hero:"Beginning", story:"Our Story", photos:"Memories", reasons:"Reasons", meter:"Love Meter", music:"Music", openWhen:"Open When", jokes:"Inside Jokes", quiz:"Quiz", letter:"Letter", bucket:"Future", ending:"Ending" },
  titles: {
    story:"Our Story", storySub:"A few chapters I keep re-reading",
    photos:"Our Photo Wall", photosSub:"Tap any photo",
    reasons:"Reasons I Love You", meter:"Love Meter", music:"Our Song", musicSub:"Press play when you're ready",
    openWhen:"Open When...", openWhenSub:"Tap an envelope",
    jokes:"Things only we understand 😂", quiz:"How well do you know us?",
    bucket:"Things I Still Want To Do With You"
  },

  /* ---- OPENING SCREEN ---- */
  intro: { title:"Hey you... 👀", text:"Someone made a little something for you.", button:"Open Your Surprise 💌" },

  /* ---- SECTION 1 ---- */
  hero: {
    eyebrow: "Happy Boyfriend's Day",
    greeting: "To the person who somehow became my favourite part of every day.",
    madeFor: "Made specially for:",
    subtitle: "Scroll slowly. There's a lot in here.",
    button: "Let's begin ↓"
  },

  /* ---- OUR STORY (unlimited). image optional ---- */
  story: [
    { date:"[DATE]", title:"The Beginning", text:"Little did I know this random moment would become one of my favourite chapters.", image:"images/photo1.jpg", location:"[LOCATION]" },
    { date:"[DATE]", title:"First Date", text:"[MEMORY]", image:"images/photo2.jpg" },
    { date:"Today", title:"Today", text:"And somehow it keeps getting better.", image:"images/photo3.jpg" }
  ],

  /* ---- PHOTOS (unlimited; add, delete, reorder freely) ----
     shape: rectangle→"rect" | "rounded" | "circle" | "polaroid" | "heart"
     frame: "none" | "gold" | "tape"   size: small|medium|large
     position: CSS object-position e.g. "center top" or "30% 20%"  (crop focus)
     Everything except image is optional. */
  photos: [
    { image:"images/photo1.jpg", caption:"My favourite memory with you ❤️", date:"12 August 2025", location:"Pune", description:"Write a longer note here (shown when opened).", shape:"polaroid", rotation:-3, size:"medium", frame:"tape" },
    { image:"images/photo2.jpg", caption:"Us being silly", shape:"polaroid", rotation:2 },
    { image:"images/photo3.jpg", caption:"", shape:"rounded", rotation:-1, size:"large", position:"center top" },
    { image:"images/photo4.jpg", shape:"heart", rotation:3, size:"small" },
    { image:"images/photo5.jpg", caption:"That day", date:"[DATE]", shape:"circle", rotation:0, size:"small" }
  ],

  /* ---- REASONS (aim for 10–15) ---- */
  reasons: [
    "You make ordinary days feel special.", "Your laugh fixes my worst moods.", "You listen, really listen.",
    "You make me braver.", "Home feels like wherever you are.", "[MEMORY]"
  ],

  meter: { button:"Measure my love ❤️", error:"ERROR...", overflow:"Love exceeds measurable limits." },

  /* ---- MUSIC (drop the mp3 in /music) ---- */
  music: { title:"[OUR_SONG]", artist:"Artist name", audio:"music/song.mp3", cover:"images/cover.jpg" },

  /* ---- OPEN WHEN (unlimited) ---- */
  openWhen: [
    { emoji:"💌", title:"Open when you miss me", message:"Close your eyes. I'm probably thinking about you right now too." },
    { emoji:"🌧️", title:"Open when you're having a bad day", message:"You're allowed to have a bad day. You're also loved on every single one." },
    { emoji:"😊", title:"Open when you want to smile", message:"[MEMORY] Okay, now smile. I know you are 😌" }
  ],

  /* ---- INSIDE JOKES (unlimited). label/title shown first; reveal text and image shown on tap ---- */
  insideJokes: [
    { label:"Funny memory", title:"You know EXACTLY why this photo exists.", image:"images/photo4.jpg", reveal:"Never again. (Again.)" },
    { label:"Nickname", title:"The nickname we don't talk about", reveal:"[NICKNAME] 🙈" }
  ],

  /* ---- QUIZ (unlimited). answer = index of correct option, starting at 0 ---- */
  quiz: {
    finish: "Okay Mr. Boyfriend... let's see how you did 👀",
    questions: [
      { q:"Where did we first meet?", options:["Option A","Option B","Option C"], answer:0, right:"Obviously. 😌", wrong:"Hehe, not quite — but I love you anyway." },
      { q:"What's my favourite thing about us?", options:["Everything","Option B","Option C"], answer:0 }
    ],
    results: [
      { min:0, text:"Zero stress — you've got a lifetime to study me. 😘" },
      { min:0.5, text:"Not bad at all, boyfriend. Proud of you. 💕" },
      { min:1, text:"Perfect score. Of course you did. 🏆❤️" }
    ]
  },

  /* ---- LETTER: blank line = new paragraph ---- */
  letter: {
    preface: "Okay... jokes aside.",
    text: `Dear [BOYFRIEND_NAME],

I'm not great at saying this out loud, so I wrote it down.

You make my life *softer*, **funnier**, and so much more fun. Thank you for every little thing.

I love you. Always.`,
    signature: "— [MY_NAME] ❤️"
  },

  /* ---- BUCKET LIST (unlimited, plain text) ---- */
  bucketList: ["Travel somewhere together ✈️","Watch a sunrise 🌅","Take 1000 more photos 📸","Have a stupid argument and forget why","Grow old together 🤍"],

  /* ---- ENDING ---- */
  ending: {
    lines: ["That's all...","Except it isn't.","I still have a million things I want to experience with you.","Happy Boyfriend's Day ❤️"],
    signoff: "Love,\n[MY_NAME]",
    button: "One last thing..."
  },
  final: { image:"images/final.jpg", shape:"heart", message:"Thank you for being my person." },

  /* ---- SECRET: tap the tiny ♡ under the first screen ---- */
  easter: { taps:5, title:"Okay fine... you found the secret message.", message:"I love you more than you know. 🤫", image:"images/secret.jpg" }
};
