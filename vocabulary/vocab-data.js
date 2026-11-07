/* DMI IELTS Vocabulary — content.
   Each word row: [word, part of speech, English meaning, Tamil meaning, example]
   Tamil meanings are short study glosses; teachers may refine them. */

window.VOCAB = {

/* ---------- WRITING TASK 1 ---------- */
writing: [
  { id: "intro", title: "Introduction: say what the chart shows", charts: ["line", "bar", "pie"],
    note: "Never copy the question. Change the verb “shows” to one of these and rewrite the rest in your own words.",
    words: [
      ["illustrates", "verb", "shows something clearly", "விளக்குகிறது", "The bar chart illustrates the number of tourists who visited three countries."],
      ["compares", "verb", "shows the differences between two or more things", "ஒப்பிடுகிறது", "The line graph compares the sales of two companies between 2010 and 2020."],
      ["depicts", "verb", "shows or represents", "சித்தரிக்கிறது", "The pie charts depict how a family spent its income in 2000 and 2020."],
      ["gives information about", "phrase", "provides facts about", "...பற்றிய தகவல்களைத் தருகிறது", "The chart gives information about the main reasons people use the internet."],
      ["presents data on", "phrase", "shows figures about", "...குறித்த தரவுகளை முன்வைக்கிறது", "The table presents data on unemployment rates in five countries."],
      ["provides a breakdown of", "phrase", "divides a total into its parts", "...ஐப் பகுதிகளாகப் பிரித்துக் காட்டுகிறது", "The pie chart provides a breakdown of household energy use."]
    ]},

  { id: "overview", title: "Overview: the big picture", charts: ["line", "bar", "pie"],
    note: "Every Task 1 answer needs an overview. Write two main points with no numbers.",
    words: [
      ["Overall, ...", "phrase", "looking at everything together", "மொத்தத்தில்", "Overall, car ownership rose in all four countries."],
      ["It is clear that ...", "phrase", "it is easy to see that", "...என்பது தெளிவாகத் தெரிகிறது", "It is clear that rent was the largest expense in both years."],
      ["The most striking feature is ...", "phrase", "the most noticeable point is", "மிகவும் கவனிக்கத்தக்க அம்சம்", "The most striking feature is the sharp fall in coal use."],
      ["In general, ...", "phrase", "for the most part", "பொதுவாக", "In general, men spent more time on sport than women."],
      ["a clear upward trend", "phrase", "a general increase over time", "தெளிவான அதிகரிப்புப் போக்கு", "There was a clear upward trend in online shopping."],
      ["by far the largest", "phrase", "much larger than all the others", "மற்ற அனைத்தையும் விட மிகப் பெரியது", "Transport was by far the largest category of spending."]
    ]},

  { id: "up", title: "Going up", charts: ["line", "bar"],
    words: [
      ["rise", "verb / noun", "go up", "உயர்தல் / உயர்வு", "The price of rice rose from $2 to $3."],
      ["increase", "verb / noun", "become larger", "அதிகரித்தல் / அதிகரிப்பு", "Sales increased steadily over the decade."],
      ["grow", "verb", "get bigger over time", "வளர்ச்சியடைதல்", "The population grew to 5 million by 2020."],
      ["climb", "verb", "rise step by step", "படிப்படியாக ஏறுதல்", "Visitor numbers climbed to 40,000 in 2015."],
      ["surge", "verb / noun", "rise suddenly and strongly", "திடீரெனப் பெருமளவில் உயர்தல்", "Demand for face masks surged in 2020."],
      ["soar", "verb", "rise very quickly to a high level", "மிக வேகமாக உயர்தல்", "House prices soared in the capital."],
      ["rocket", "verb", "rise extremely fast", "அதிவேகமாக உயர்தல்", "Smartphone sales rocketed after 2010."],
      ["double / triple", "verb", "become two / three times as big", "இரட்டிப்பாதல் / மூன்று மடங்காதல்", "The number of students doubled between 2000 and 2010."]
    ]},

  { id: "down", title: "Going down", charts: ["line", "bar"],
    words: [
      ["fall", "verb / noun", "go down", "வீழ்ச்சியடைதல் / வீழ்ச்சி", "Unemployment fell to 4% in 2019."],
      ["decrease", "verb / noun", "become smaller", "குறைதல் / குறைவு", "The use of landline phones decreased over the period."],
      ["decline", "verb / noun", "go down slowly over time", "படிப்படியாகச் சரிதல்", "Newspaper sales declined throughout the 20 years."],
      ["drop", "verb / noun", "fall, often quickly", "இறங்குதல் / இறக்கம்", "Temperatures dropped to 5°C in January."],
      ["dip", "verb / noun", "fall a little for a short time", "சிறிய தற்காலிக இறக்கம்", "Profits dipped slightly in 2008 before recovering."],
      ["plummet", "verb", "fall very quickly and by a lot", "மிக வேகமாகக் கடுமையாக வீழ்தல்", "Coal production plummeted after 1990."],
      ["plunge", "verb / noun", "fall suddenly by a large amount", "திடீரெனப் பெருமளவில் வீழ்தல்", "Ticket sales plunged during the lockdown."],
      ["halve", "verb", "become half as big", "பாதியாகக் குறைதல்", "The number of smokers halved over 30 years."]
    ]},

  { id: "flat", title: "No change, up and down, highest and lowest points", charts: ["line"],
    words: [
      ["remain stable", "phrase", "stay at the same level", "நிலையாக இருத்தல்", "The figure remained stable at about 20%."],
      ["level off", "phrase", "stop rising or falling and stay flat", "சமநிலைக்கு வருதல்", "Sales levelled off at 500 units a month."],
      ["plateau", "verb / noun", "reach a level and stay there", "ஒரே நிலையில் தேங்குதல்", "Growth plateaued after 2015."],
      ["remain unchanged", "phrase", "not change at all", "மாற்றமின்றி இருத்தல்", "The ticket price remained unchanged for five years."],
      ["fluctuate", "verb", "go up and down many times", "ஏறி இறங்குதல்", "The number of visitors fluctuated between 200 and 300."],
      ["peak / reach a peak", "verb / phrase", "reach the highest point", "உச்சத்தை எட்டுதல்", "Electricity use peaked at 6 pm."],
      ["hit a low / bottom out", "phrase", "reach the lowest point", "மிகக் குறைந்த நிலையை அடைதல்", "Sales hit a low of 50 units in March."],
      ["recover", "verb", "rise again after a fall", "மீண்டும் உயர்தல் (மீட்சி)", "Tourism recovered quickly in 2022."]
    ]},

  { id: "degree", title: "How big was the change?", charts: ["line", "bar"], scale: true,
    note: "Use both patterns so you do not repeat yourself: “Sales rose sharply” (verb + adverb) and “There was a sharp rise in sales” (adjective + noun).",
    words: [
      ["dramatically / dramatic", "adverb / adjective", "very large and sudden", "மிகப் பெருமளவில்", "Prices rose dramatically in 2008."],
      ["sharply / sharp", "adverb / adjective", "big and quick", "கூர்மையாக, வேகமாக", "There was a sharp fall in exports."],
      ["significantly / significant", "adverb / adjective", "large enough to notice", "குறிப்பிடத்தக்க அளவில்", "Spending on health increased significantly."],
      ["considerably / considerable", "adverb / adjective", "quite large", "கணிசமாக", "Car use fell considerably after the new train line opened."],
      ["substantially / substantial", "adverb / adjective", "large in amount", "கணிசமான அளவில்", "There was a substantial rise in rents."],
      ["moderately / moderate", "adverb / adjective", "medium, not big or small", "மிதமாக", "Sales grew moderately in the second half of the year."],
      ["steadily / steady", "adverb / adjective", "at an even, regular speed", "சீராக", "The population grew steadily over the period."],
      ["gradually / gradual", "adverb / adjective", "slowly over a long time", "படிப்படியாக", "There was a gradual decline in rice exports."],
      ["slightly / slight", "adverb / adjective", "a little", "சற்று, சிறிதளவு", "The figure for Canada rose slightly."],
      ["marginally / marginal", "adverb / adjective", "very little", "மிகச் சிறிதளவு", "Profits were marginally higher in 2021."]
    ]},

  { id: "compare", title: "Comparing", charts: ["bar", "pie", "line"],
    words: [
      ["higher than / lower than", "phrase", "more than / less than", "...ஐ விட அதிகம் / குறைவு", "Sales in May were higher than in April."],
      ["the highest / the lowest", "phrase", "more / less than all the others", "மிக அதிகமான / மிகக் குறைந்த", "Japan had the lowest birth rate of the five countries."],
      ["twice as many as / twice as much as", "phrase", "two times the number or amount", "இரண்டு மடங்கு", "Men watched twice as much TV as women."],
      ["compared with", "phrase", "when looked at next to", "...உடன் ஒப்பிடுகையில்", "Compared with 2010, far more people cycled to work in 2020."],
      ["whereas / while", "conjunction", "shows a contrast between two facts in one sentence", "ஆனால், அதேவேளை", "Men preferred football, whereas women preferred netball."],
      ["in contrast / by contrast", "phrase", "showing the opposite", "மாறாக", "Coal use fell. In contrast, solar power grew quickly."],
      ["similarly / likewise", "adverb", "in the same way", "அதேபோல", "Similarly, the number of buses rose in Kandy."],
      ["exceed / outnumber", "verb", "be more than", "விஞ்சுதல் / எண்ணிக்கையில் அதிகமாக இருத்தல்", "In 2020, female students outnumbered male students."],
      ["the figure for ...", "phrase", "the number for (saves repeating the noun)", "...க்கான எண்ணிக்கை", "The figure for Japan was much lower."],
      ["followed by", "phrase", "and next comes", "அதைத் தொடர்ந்து", "China had the most visitors, followed by Spain."]
    ]},

  { id: "parts", title: "Parts of a whole (pie charts)", charts: ["pie"], fractions: true,
    words: [
      ["proportion", "noun", "a part of the whole", "விகிதம், பங்கு", "A large proportion of students walked to school."],
      ["percentage", "noun", "a part out of 100", "சதவீதம்", "The percentage of people who smoke fell."],
      ["share", "noun", "the part that belongs to one group", "பங்கு", "Wind power had the smallest share of energy production."],
      ["account for", "phrase", "be a certain part of the total", "மொத்தத்தில் ... பங்காக இருத்தல்", "Rent accounted for 40% of spending."],
      ["make up / constitute / represent", "verb", "form a part of the total", "...ஆக அமைதல்", "Children made up a quarter of the population."],
      ["the majority", "noun", "more than half", "பெரும்பான்மை", "The majority of visitors came by car."],
      ["a minority", "noun", "less than half, a small part", "சிறுபான்மை", "Only a minority of people used public transport."],
      ["the largest segment", "phrase", "the biggest part of the pie", "மிகப் பெரிய பகுதி", "Food was the largest segment in both years."],
      ["the remaining ...", "phrase", "what is left", "மீதமுள்ள", "The remaining 10% was spent on leisure."]
    ]},

  { id: "approx", title: "Approximate numbers", charts: ["line", "bar", "pie"],
    words: [
      ["approximately / roughly / around / about", "adverb", "close to, not exact", "ஏறத்தாழ, சுமார்", "Roughly 30% of people owned a car."],
      ["just over / slightly more than", "phrase", "a little more than (51% = just over half)", "சற்று அதிகமாக", "Just over half of the students were female."],
      ["just under / slightly less than", "phrase", "a little less than (48% = just under half)", "சற்றுக் குறைவாக", "Just under a quarter of homes had internet."],
      ["nearly / almost", "adverb", "very close to, but not quite", "கிட்டத்தட்ட", "Nearly 40% of the budget went on salaries."],
      ["well over / well below", "phrase", "much more / much less than", "கணிசமாக அதிகமாக / கணிசமாகக் குறைவாக", "The figure was well below the national average."]
    ]},

  { id: "time", title: "Time phrases", charts: ["line", "bar"],
    words: [
      ["over the period", "phrase", "during the whole time shown", "குறிப்பிட்ட காலப்பகுதி முழுவதும்", "Rice production doubled over the period."],
      ["between 2000 and 2010 / from 2000 to 2010", "phrase", "shows the start and end of a time span", "2000 முதல் 2010 வரை", "Exports rose from 2000 to 2010."],
      ["by 2020", "phrase", "not later than 2020", "2020 ஆம் ஆண்டளவில்", "By 2020, the figure had reached 80%."],
      ["over the following decade", "phrase", "in the next ten years", "அடுத்த பத்தாண்டுகளில்", "Prices fell over the following decade."],
      ["in the final year", "phrase", "in the last year shown", "இறுதி ஆண்டில்", "In the final year, sales were at their highest."],
      ["throughout", "preposition", "during all of a time", "முழுவதும்", "Japan stayed ahead throughout the 30 years."]
    ]}
],

writingNotes: [
  ["the number of", "countable nouns (people, cars, students)", "The number of cars rose."],
  ["the amount of", "uncountable nouns (water, money, rice)", "The amount of water used fell."],
  ["the proportion / percentage of", "parts of a total, given in %", "The proportion of graduates rose to 40%."]
],

fractions: [
  ["5%", "one in twenty"],
  ["10%", "one in ten / a tenth"],
  ["20%", "one in five / a fifth"],
  ["25%", "a quarter / one in four"],
  ["33%", "a third / one in three"],
  ["50%", "half"],
  ["66%", "two thirds"],
  ["75%", "three quarters"],
  ["80%", "four in five"],
  ["90%+", "the vast majority / nine in ten"]
],

/* ---------- SPEAKING: TOPIC VOCABULARY ---------- */
topics: [
  { topic: "Hometown", words: [
    ["bustling", "adjective", "busy and full of activity", "பரபரப்பான", "Jaffna town is bustling in the evenings."],
    ["peaceful / tranquil", "adjective", "calm and quiet", "அமைதியான", "My village is very tranquil, especially early in the morning."],
    ["close-knit community", "phrase", "people who know and help each other", "நெருக்கமான சமூகம்", "We live in a close-knit community where everyone knows each other."],
    ["well-connected", "adjective", "easy to travel to and from", "போக்குவரத்து வசதி நிறைந்த", "Our town is well-connected by bus and train."],
    ["heritage site", "noun", "a place with historical importance", "பாரம்பரியத் தளம்", "The Jaffna Fort is an important heritage site."],
    ["amenities", "noun", "useful facilities like shops, parks and hospitals", "வசதிகள்", "The area has good amenities, like a library and a park."],
    ["rapidly developing", "phrase", "changing and growing fast", "வேகமாக வளர்ந்து வரும்", "Kilinochchi is a rapidly developing town."],
    ["urban sprawl", "noun", "a city spreading into the countryside", "நகர விரிவாக்கம்", "Urban sprawl has replaced many paddy fields with houses."]
  ]},
  { topic: "Work and study", words: [
    ["pursue a degree", "phrase", "study for a degree", "பட்டப்படிப்பைத் தொடர்தல்", "I'm planning to pursue a degree in nursing in the UK."],
    ["hands-on experience", "phrase", "practical experience", "நடைமுறை அனுபவம்", "My internship gave me hands-on experience with real clients."],
    ["meet a deadline", "phrase", "finish work on time", "காலக்கெடுவுக்குள் முடித்தல்", "It's stressful when I have three deadlines to meet in one week."],
    ["workload", "noun", "the amount of work you have", "வேலைச்சுமை", "My workload is heavy at the end of every month."],
    ["job satisfaction", "phrase", "feeling happy with your job", "வேலைத் திருப்தி", "For me, job satisfaction matters more than salary."],
    ["career prospects", "phrase", "chances of success in a job", "தொழில் வாய்ப்புகள்", "IT offers good career prospects in Sri Lanka."],
    ["work-life balance", "phrase", "time for both work and personal life", "வேலை-வாழ்க்கைச் சமநிலை", "A good work-life balance keeps people healthy."],
    ["burn the midnight oil", "idiom", "work or study late at night", "இரவு நெடுநேரம் விழித்திருந்து உழைத்தல்", "I burned the midnight oil before my A/L exams."]
  ]},
  { topic: "Family and friends", words: [
    ["extended family", "phrase", "grandparents, aunts, uncles and cousins", "உறவினர்களையும் உள்ளடக்கிய பெரிய குடும்பம்", "We see our extended family at every festival."],
    ["get on well with", "phrase", "have a good relationship with", "நன்றாகப் பழகுதல்", "I get on really well with my younger sister."],
    ["look up to", "phrase", "admire and respect", "முன்மாதிரியாகக் கொள்ளுதல்", "I've always looked up to my grandfather."],
    ["take after", "phrase", "look or behave like an older family member", "(பெற்றோரைப்) போல இருத்தல்", "People say I take after my mother."],
    ["bring up", "phrase", "raise a child", "வளர்த்தல்", "I was brought up by my grandparents in Point Pedro."],
    ["keep in touch", "phrase", "continue to contact someone", "தொடர்பில் இருத்தல்", "We keep in touch on WhatsApp."],
    ["lifelong friend", "phrase", "a friend for your whole life", "வாழ்நாள் நண்பர்", "My best friend from school is a lifelong friend."],
    ["supportive", "adjective", "giving help and encouragement", "ஆதரவான", "My parents have been very supportive of my plans."]
  ]},
  { topic: "Technology", words: [
    ["cutting-edge", "adjective", "the newest and most advanced", "அதிநவீன", "The new hospital has cutting-edge equipment."],
    ["user-friendly", "adjective", "easy to use", "பயன்படுத்த எளிதான", "The banking app is very user-friendly."],
    ["tech-savvy", "adjective", "good with technology", "தொழில்நுட்பத் திறன் கொண்ட", "Young people today are very tech-savvy."],
    ["screen time", "noun", "time spent looking at phones or computers", "திரை நேரம்", "I try to limit my screen time before bed."],
    ["be addicted to", "phrase", "unable to stop using something", "...க்கு அடிமையாதல்", "Some teenagers are addicted to online games."],
    ["digital literacy", "noun", "the ability to use digital tools well", "டிஜிட்டல் அறிவு", "Digital literacy is essential for most jobs now."],
    ["artificial intelligence (AI)", "noun", "computers that can learn and make decisions", "செயற்கை நுண்ணறிவு", "AI is changing the way we search for information."],
    ["obsolete", "adjective", "out of date, no longer used", "வழக்கொழிந்த", "CDs have become almost obsolete."]
  ]},
  { topic: "Environment", words: [
    ["carbon footprint", "noun", "the amount of CO₂ your actions produce", "கார்பன் தடம்", "Cycling to work reduces your carbon footprint."],
    ["renewable energy", "noun", "energy from the sun, wind or water", "புதுப்பிக்கத்தக்க ஆற்றல்", "Sri Lanka should invest more in renewable energy."],
    ["deforestation", "noun", "cutting down forests", "காடழிப்பு", "Deforestation causes floods and landslides."],
    ["eco-friendly", "adjective", "not harmful to nature", "சுற்றுச்சூழலுக்கு உகந்த", "I try to buy eco-friendly products."],
    ["single-use plastic", "noun", "plastic used once and thrown away", "ஒருமுறை பயன்படுத்தும் பிளாஸ்டிக்", "Many shops have stopped giving single-use plastic bags."],
    ["climate change", "noun", "long-term change in weather patterns", "காலநிலை மாற்றம்", "Climate change is making droughts more common."],
    ["endangered species", "noun", "animals or plants at risk of disappearing", "அழிவின் விளிம்பிலுள்ள உயிரினங்கள்", "Sea turtles are an endangered species."],
    ["raise awareness", "phrase", "help people understand a problem", "விழிப்புணர்வை ஏற்படுத்துதல்", "Schools can raise awareness about recycling."]
  ]},
  { topic: "Health and fitness", words: [
    ["sedentary lifestyle", "phrase", "a life with a lot of sitting and little exercise", "உடலுழைப்பற்ற வாழ்க்கை முறை", "Office workers often have a sedentary lifestyle."],
    ["balanced diet", "phrase", "healthy food in the right amounts", "சமச்சீர் உணவு", "A balanced diet includes plenty of vegetables."],
    ["work out", "phrase", "do exercise", "உடற்பயிற்சி செய்தல்", "I work out at the gym three times a week."],
    ["keep fit", "phrase", "stay healthy and strong", "உடலை ஆரோக்கியமாக வைத்திருத்தல்", "I go cycling to keep fit."],
    ["junk food", "noun", "unhealthy fast food", "ஆரோக்கியமற்ற துரித உணவு", "Children eat too much junk food these days."],
    ["well-being", "noun", "being healthy and happy", "நல்வாழ்வு", "Walking in nature is good for your well-being."],
    ["get into shape", "phrase", "become fit", "உடலை நல்ல நிலைக்குக் கொண்டுவருதல்", "I started swimming to get into shape."],
    ["stress-relieving", "adjective", "reducing stress", "மன அழுத்தத்தைக் குறைக்கும்", "Yoga is very stress-relieving for me."]
  ]},
  { topic: "Food", words: [
    ["mouth-watering", "adjective", "looks or smells delicious", "நாவில் நீர் ஊறவைக்கும்", "My mother makes a mouth-watering crab curry."],
    ["home-cooked meal", "phrase", "food made at home", "வீட்டில் சமைத்த உணவு", "Nothing beats a home-cooked meal."],
    ["staple food", "noun", "the main food people eat regularly", "பிரதான உணவு", "Rice is the staple food in Sri Lanka."],
    ["spicy / mild", "adjective", "with a strong chilli taste / not strong", "காரமான / காரம் குறைந்த", "Jaffna food is famous for being spicy."],
    ["have a sweet tooth", "idiom", "love sweet food", "இனிப்புப் பிரியராக இருத்தல்", "I have a sweet tooth, so I can't resist pani pol."],
    ["eat out", "phrase", "eat at a restaurant", "உணவகத்தில் சாப்பிடுதல்", "We eat out about once a month."],
    ["traditional cuisine", "phrase", "the local style of cooking", "பாரம்பரிய உணவுவகை", "Odiyal kool is part of our traditional cuisine."],
    ["nutritious", "adjective", "full of things that are good for your health", "சத்தான", "Green leaves are cheap but very nutritious."]
  ]},
  { topic: "Travel and holidays", words: [
    ["off the beaten track", "idiom", "far from popular tourist places", "அதிகம் அறியப்படாத இடம்", "I prefer beaches that are off the beaten track."],
    ["breathtaking view", "phrase", "an extremely beautiful view", "கண்கொள்ளாக் காட்சி", "The view from Ella Rock was breathtaking."],
    ["a change of scenery", "phrase", "going somewhere different", "சூழல் மாற்றம்", "After exams, I needed a change of scenery."],
    ["itinerary", "noun", "a travel plan", "பயணத் திட்டம்", "We planned our itinerary carefully."],
    ["tourist attraction", "noun", "a place that tourists visit", "சுற்றுலாத் தலம்", "Nainativu is a popular tourist attraction."],
    ["go sightseeing", "phrase", "visit famous places", "சுற்றிப் பார்த்தல்", "We went sightseeing in Kandy."],
    ["broaden my horizons", "idiom", "learn about and experience new things", "என் அனுபவத்தை விரிவுபடுத்துதல்", "Travelling abroad will broaden my horizons."],
    ["unwind", "verb", "relax", "மனதை இலகுவாக்கி ஓய்வெடுத்தல்", "I unwind by going to the beach."]
  ]},
  { topic: "Education", words: [
    ["rote learning", "noun", "memorising without understanding", "மனப்பாடக் கல்வி", "Our system depends too much on rote learning."],
    ["critical thinking", "noun", "thinking carefully to judge ideas", "விமர்சனச் சிந்தனை", "Universities expect students to show critical thinking."],
    ["extracurricular activities", "noun", "activities outside normal lessons", "இணைப்பாடவிதானச் செயற்பாடுகள்", "I joined the debate club as an extracurricular activity."],
    ["tuition classes", "noun", "extra paid classes outside school", "தனியார் கல்வி வகுப்புகள் (டியூஷன்)", "Most A/L students attend tuition classes."],
    ["lifelong learning", "noun", "learning throughout your life", "வாழ்நாள் கற்றல்", "Lifelong learning helps people keep their jobs."],
    ["fall behind", "phrase", "not keep up with others", "பின்தங்குதல்", "I fell behind in maths when I was ill."],
    ["academic pressure", "phrase", "stress from studies and exams", "கல்வி அழுத்தம்", "Students face a lot of academic pressure before O/L."],
    ["well-rounded", "adjective", "having many different skills", "பன்முகத் திறன் கொண்ட", "Sport helps children become well-rounded."]
  ]},
  { topic: "Media and news", words: [
    ["mainstream media", "noun", "large TV channels, radio and newspapers", "பிரதான ஊடகங்கள்", "Young people trust mainstream media less than before."],
    ["fake news", "noun", "false stories presented as news", "போலிச் செய்திகள்", "Fake news spreads quickly on social media."],
    ["go viral", "phrase", "spread very fast online", "வேகமாகப் பரவுதல் (வைரலாதல்)", "The video went viral within a day."],
    ["keep up with the news", "phrase", "follow the latest news", "செய்திகளை அறிந்துகொண்டிருத்தல்", "I keep up with the news on my phone."],
    ["biased", "adjective", "unfairly supporting one side", "பக்கச்சார்பான", "Some newspapers are quite biased."],
    ["influencer", "noun", "a person with many online followers who affects opinions", "சமூக ஊடகச் செல்வாக்காளர்", "Influencers often advertise products."],
    ["headline", "noun", "the title of a news story", "தலைப்புச் செய்தி", "I usually just read the headlines."],
    ["reliable source", "phrase", "a source you can trust", "நம்பகமான மூலம்", "Always check news from a reliable source."]
  ]},
  { topic: "Shopping and money", words: [
    ["impulse buying", "noun", "buying something without planning", "திட்டமிடாமல் உடனே வாங்குதல்", "Online sales encourage impulse buying."],
    ["a bargain", "noun", "something good that is cheap", "மலிவு விலையில் கிடைத்த நல்ல பொருள்", "These shoes were a real bargain."],
    ["window shopping", "noun", "looking in shops without buying", "வாங்காமல் கடைகளைச் சுற்றிப் பார்த்தல்", "We sometimes go window shopping on Saturdays."],
    ["value for money", "phrase", "worth the price you pay", "விலைக்கேற்ற தரம்", "Local markets offer good value for money."],
    ["budget-friendly", "adjective", "cheap enough to afford", "கட்டுப்படியான விலையில்", "I look for budget-friendly phones."],
    ["brand-conscious", "adjective", "caring about brand names", "பிராண்ட் பற்றி அக்கறை கொண்ட", "Teenagers are often very brand-conscious."],
    ["save up", "phrase", "keep money for a purpose", "ஒரு நோக்கத்துக்காகப் பணம் சேமித்தல்", "I'm saving up for a laptop."],
    ["splash out", "phrase", "spend a lot of money on something", "தாராளமாகச் செலவழித்தல்", "We splashed out on a nice dinner for my mother's birthday."]
  ]},
  { topic: "Free time and hobbies", words: [
    ["pastime", "noun", "an activity you do for enjoyment", "பொழுதுபோக்கு", "Reading is my favourite pastime."],
    ["take up", "phrase", "start a new hobby", "(புதிய பழக்கத்தைத்) தொடங்குதல்", "I took up gardening last year."],
    ["be into", "phrase", "like very much", "...இல் மிகுந்த ஆர்வம் கொண்டிருத்தல்", "I'm really into cricket."],
    ["a keen reader", "phrase", "someone who loves reading", "தீவிர வாசகர்", "My brother is a keen reader of novels."],
    ["recharge my batteries", "idiom", "rest to get my energy back", "மீண்டும் உற்சாகம் பெறுதல்", "Weekends help me recharge my batteries."],
    ["kill time", "idiom", "do something while waiting", "நேரத்தைப் போக்குதல்", "I play games on my phone to kill time."],
    ["therapeutic", "adjective", "making you feel calm and better", "மனதுக்கு ஆறுதல் தரும்", "Painting is very therapeutic for me."],
    ["socialise", "verb", "spend time with other people", "மற்றவர்களுடன் பழகுதல்", "I socialise with my friends at the temple festival."]
  ]},
  { topic: "Weather", words: [
    ["scorching hot", "adjective", "extremely hot", "கொளுத்தும் வெயில்", "It's scorching hot in Jaffna in April."],
    ["downpour", "noun", "a very heavy fall of rain", "கனமழை", "We got caught in a sudden downpour."],
    ["humid", "adjective", "hot with wet air", "ஈரப்பதமான", "The weather is very humid before the rains."],
    ["monsoon", "noun", "the rainy season", "பருவமழைக்காலம்", "The north-east monsoon brings rain to Jaffna."],
    ["pleasant", "adjective", "nice and comfortable", "இதமான", "December mornings are pleasant."],
    ["chilly", "adjective", "a little cold", "சற்றுக் குளிரான", "Nuwara Eliya is chilly even in the daytime."],
    ["weather forecast", "noun", "a prediction of the weather", "வானிலை முன்னறிவிப்பு", "I check the weather forecast before a trip."],
    ["drought", "noun", "a long time without rain", "வறட்சி", "The drought damaged the crops."]
  ]}
],

/* ---------- SPEAKING: PHRASES ---------- */
phrases: [
  { title: "Starting an answer", use: "Part 1. Use these to sound natural. Change them; do not start every answer the same way.",
    words: [
      ["Well, ...", "", "a natural start that gives you a second to think", "சரி... / ம்ம்...", "Well, I'd say I'm more of a morning person."],
      ["To be honest, ...", "", "before saying what you really think", "உண்மையைச் சொல்லப்போனால்", "To be honest, I'm not a big fan of cooking."],
      ["Actually, ...", "", "when the real answer is a little surprising", "உண்மையில்", "Actually, I've never been abroad."],
      ["Of course.", "", "yes, clearly", "நிச்சயமாக", "Of course. I use my phone every day."],
      ["Definitely. / Absolutely.", "", "a strong yes", "கண்டிப்பாக / முற்றிலும்", "Absolutely. I'd love to visit Japan."],
      ["I'd say ...", "", "a soft way to give your answer", "நான் சொல்வதென்றால்", "I'd say I read about two books a month."],
      ["Not really.", "", "a polite no", "அவ்வளவாக இல்லை", "Not really. I prefer watching films at home."],
      ["I'm a big fan of ...", "", "I like it a lot", "எனக்கு ... மிகவும் பிடிக்கும்", "I'm a big fan of Tamil films."],
      ["I'm not really into ...", "", "I don't like it much", "எனக்கு ...இல் பெரிதாக ஆர்வமில்லை", "I'm not really into video games."]
    ]},
  { title: "Buying time", use: "When you need a moment to think. Much better than “umm...” or silence.",
    words: [
      ["That's an interesting question.", "", "", "சுவாரஸ்யமான கேள்வி", "That's an interesting question. I think..."],
      ["Let me think ...", "", "", "யோசித்துப் பார்க்கிறேன்", "Let me think... probably my grandmother."],
      ["I've never really thought about that, but ...", "", "", "இதைப் பற்றி நான் இதுவரை யோசித்ததில்லை, ஆனால்...", "I've never really thought about that, but I suppose it's true."],
      ["How can I put it ...", "", "", "எப்படிச் சொல்வது...", "How can I put it... it felt like home."],
      ["It's hard to say, but ...", "", "", "சொல்வது கடினம், ஆனால்...", "It's hard to say, but I think prices will go up."],
      ["That's a tough one.", "", "", "இது கடினமான கேள்வி", "That's a tough one. Maybe the internet."]
    ]},
  { title: "Giving your opinion", use: "Part 1 and Part 3.",
    words: [
      ["In my opinion, ...", "", "", "என் கருத்துப்படி", "In my opinion, school uniforms are a good idea."],
      ["Personally, I think ...", "", "", "தனிப்பட்ட முறையில் நான் நினைப்பது", "Personally, I think children should learn to cook."],
      ["As far as I'm concerned, ...", "", "", "என்னைப் பொறுத்தவரை", "As far as I'm concerned, health is more important than money."],
      ["From my point of view, ...", "", "", "என் பார்வையில்", "From my point of view, buses are more convenient."],
      ["I strongly believe that ...", "", "", "நான் உறுதியாக நம்புகிறேன்", "I strongly believe that education should be free."]
    ]},
  { title: "Reasons and examples", use: "Always extend your answer: answer + reason + example.",
    words: [
      ["The main reason is that ...", "", "", "முக்கியக் காரணம் என்னவென்றால்", "The main reason is that it saves time."],
      ["This is mainly because ...", "", "", "இதற்கு முக்கியக் காரணம்", "This is mainly because rents are so high."],
      ["For instance, ... / For example, ...", "", "", "உதாரணமாக", "For instance, my cousin learned coding online."],
      ["Take ..., for example.", "", "", "...ஐ உதாரணமாக எடுத்துக்கொள்ளுங்கள்", "Take my brother, for example. He studies all night."],
      ["such as ...", "", "", "...போன்ற", "I enjoy outdoor sports such as cricket and swimming."]
    ]},
  { title: "Adding more ideas", use: "",
    words: [
      ["What's more, ...", "", "", "அதுமட்டுமல்லாமல்", "It's cheap. What's more, it's very healthy."],
      ["On top of that, ...", "", "", "அதற்கு மேலாக", "On top of that, the staff are really friendly."],
      ["Not only that, but ...", "", "", "அது மட்டுமல்ல...", "Not only that, but it's close to my house."],
      ["Besides, ...", "", "", "தவிர", "Besides, I don't have time to cook."],
      ["Apart from that, ...", "", "", "அதைத் தவிர", "Apart from that, I enjoy reading."]
    ]},
  { title: "Showing contrast", use: "",
    words: [
      ["However, ...", "", "", "இருப்பினும்", "I like the city. However, it's too noisy."],
      ["Having said that, ...", "", "", "அப்படிச் சொன்னாலும்", "Having said that, I wouldn't want to live anywhere else."],
      ["On the other hand, ...", "", "", "மறுபுறம்", "On the other hand, villages are much safer."],
      ["Although ...", "", "", "...ஆக இருந்தாலும்", "Although it was raining, we went to the beach."],
      ["Even so, ...", "", "", "அப்படியிருந்தும்", "It was expensive. Even so, it was worth it."]
    ]},
  { title: "Part 2: telling your story", use: "Use these to start, move through the cue card points and keep talking for two minutes.",
    words: [
      ["I'd like to talk about ...", "", "", "...பற்றிப் பேச விரும்புகிறேன்", "I'd like to talk about a trip I took to Trincomalee."],
      ["This happened about ... years ago, when ...", "", "", "இது சுமார் ... ஆண்டுகளுக்கு முன் நடந்தது", "This happened about two years ago, when I finished my O/L."],
      ["What I remember most is ...", "", "", "எனக்கு மிகவும் நினைவில் இருப்பது", "What I remember most is the sunset."],
      ["Moving on to ...", "", "", "அடுத்ததாக ...க்கு வருகிறேன்", "Moving on to why I liked it..."],
      ["The reason it was so special is that ...", "", "", "அது ஏன் சிறப்பு என்றால்", "The reason it was so special is that my whole family was there."],
      ["Looking back, ...", "", "", "திரும்பிப் பார்க்கும்போது", "Looking back, it was one of the best days of my life."]
    ]},
  { title: "Part 3: general ideas and the future", use: "Part 3 asks about people in general, not just you.",
    words: [
      ["Generally speaking, ...", "", "", "பொதுவாகச் சொன்னால்", "Generally speaking, young people prefer online shopping."],
      ["It depends on ...", "", "", "அது ...ஐப் பொறுத்தது", "It depends on the person's age."],
      ["On the whole, ...", "", "", "மொத்தத்தில்", "On the whole, technology has made life easier."],
      ["I suppose ... / I imagine ...", "", "", "நான் நினைக்கிறேன் / ஊகிக்கிறேன்", "I imagine most people would choose a bigger salary."],
      ["In the future, it's likely that ...", "", "", "எதிர்காலத்தில் ... வாய்ப்புள்ளது", "In the future, it's likely that more people will work from home."],
      ["I couldn't agree more.", "", "", "முற்றிலும் உடன்படுகிறேன்", "I couldn't agree more. Exercise is essential."],
      ["I see your point, but ...", "", "", "உங்கள் கருத்து புரிகிறது, ஆனால்...", "I see your point, but not everyone can afford it."]
    ]},
  { title: "Ending an answer", use: "Finish clearly so the examiner knows you are done.",
    words: [
      ["So that's why ...", "", "", "அதனால்தான்...", "So that's why I love living near the sea."],
      ["That's basically it.", "", "", "அவ்வளவுதான்", "That's basically it."],
      ["All in all, ...", "", "", "மொத்தத்தில்", "All in all, it was a great experience."],
      ["So, in short, ...", "", "", "சுருக்கமாகச் சொன்னால்", "So, in short, I prefer studying in the morning."],
      ["Anyway, that's my experience.", "", "", "எப்படியிருந்தாலும், அதுதான் என் அனுபவம்", "Anyway, that's my experience."],
      ["... and that's why it means so much to me.", "", "", "...அதனால்தான் அது எனக்கு மிகவும் முக்கியமானது", "She taught me to be patient, and that's why she means so much to me."]
    ]}
],

/* ---------- WORD UPGRADES ---------- */
/* [basic word, Tamil, better words, example, note] */
upgrades: [
  ["good", "நல்ல", ["beneficial", "positive", "excellent", "valuable"], "Exercise has a positive effect on mental health.", ""],
  ["bad", "கெட்ட", ["harmful", "negative", "poor", "detrimental"], "Smoking is harmful to your health.", "detrimental is formal: use it in Writing Task 2."],
  ["big", "பெரிய", ["large", "significant", "substantial", "huge"], "There was a significant increase in prices.", ""],
  ["small", "சிறிய", ["slight", "minor", "tiny", "limited"], "There was only a slight change.", ""],
  ["very important", "மிக முக்கியமான", ["crucial", "vital", "essential", "key"], "Sleep is vital for students.", ""],
  ["a lot of", "நிறைய", ["a large number of", "a great deal of", "numerous", "plenty of"], "A large number of students study abroad.", "a large number of + countable; a great deal of + uncountable."],
  ["many people", "பலர்", ["a large proportion of people", "most individuals", "the majority of people"], "The majority of people own a smartphone.", ""],
  ["think", "நினை", ["believe", "feel", "consider", "would argue"], "I would argue that cities are safer now.", ""],
  ["get", "பெறு", ["obtain", "receive", "gain", "acquire"], "Students gain practical skills during internships.", ""],
  ["show", "காட்டு", ["indicate", "demonstrate", "reveal", "illustrate"], "The figures indicate a clear rise.", ""],
  ["help", "உதவு", ["assist", "support", "benefit"], "Volunteers assist elderly people with shopping.", ""],
  ["problem", "பிரச்சினை", ["issue", "challenge", "difficulty", "drawback"], "Traffic is a serious issue in Colombo.", ""],
  ["make better", "சிறப்பாக்கு", ["improve", "enhance", "boost"], "Reading enhances your vocabulary.", ""],
  ["make worse", "மோசமாக்கு", ["worsen", "aggravate", "exacerbate"], "Plastic waste exacerbates flooding.", "exacerbate is formal: use it in Writing Task 2."],
  ["nowadays", "இப்போதெல்லாம்", ["these days", "in today's world", "at present"], "In today's world, almost everyone shops online.", ""],
  ["happy", "மகிழ்ச்சியான", ["delighted", "content", "cheerful", "over the moon"], "I was over the moon when I got my results.", "over the moon is informal: use it in Speaking only."],
  ["sad", "கவலையான", ["upset", "disappointed", "down"], "I was really disappointed with my score.", ""],
  ["interesting", "சுவாரஸ்யமான", ["fascinating", "engaging", "eye-opening"], "The museum visit was eye-opening.", ""],
  ["boring", "சலிப்பான", ["dull", "tedious", "monotonous"], "Copying notes all day is tedious.", ""],
  ["easy", "எளிதான", ["simple", "straightforward", "effortless"], "The application process is straightforward.", ""],
  ["difficult", "கடினமான", ["challenging", "demanding", "tough"], "Nursing is a demanding job.", ""],
  ["people", "மக்கள்", ["individuals", "citizens", "residents", "the public"], "Local residents complained about the noise.", ""],
  ["because", "ஏனெனில்", ["as", "since", "due to (+ noun)", "owing to (+ noun)"], "The match was cancelled due to heavy rain.", ""],
  ["but", "ஆனால்", ["however", "although", "whereas"], "Cars are fast, whereas buses are cheaper.", ""],
  ["so", "ஆகவே", ["therefore", "as a result", "consequently"], "Rents rose. As a result, many families moved.", ""],
  ["also", "மேலும்", ["in addition", "moreover", "furthermore"], "In addition, online courses are cheaper.", ""],
  ["very", "மிக", ["extremely", "highly", "incredibly", "remarkably"], "The new system is highly effective.", ""],
  ["like (verb)", "விரும்பு", ["enjoy", "be fond of", "be keen on", "be passionate about"], "I'm passionate about music.", ""],
  ["use", "பயன்படுத்து", ["make use of", "rely on", "utilise"], "Many farmers now rely on mobile apps.", "utilise is formal: use it in Writing."],
  ["change", "மாற்று", ["transform", "alter", "shift"], "Technology has transformed education.", ""]
],

/* ---------- CORE WORDS (with Tamil) ---------- */
core: {
  "Basic": [
    ["important", "adjective", "matters a lot", "முக்கியமான", "Sleep is important for students."],
    ["problem", "noun", "something difficult to deal with", "பிரச்சினை", "Traffic is a big problem in the city."],
    ["solution", "noun", "a way to solve a problem", "தீர்வு", "One solution is to build more bus lanes."],
    ["reason", "noun", "why something happens", "காரணம்", "The main reason is cost."],
    ["opinion", "noun", "what you think about something", "கருத்து", "In my opinion, the plan is good."],
    ["advantage", "noun", "a good point", "நன்மை", "One advantage of living in a city is the choice of jobs."],
    ["disadvantage", "noun", "a bad point", "தீமை / குறைபாடு", "The main disadvantage is the noise."],
    ["increase", "verb", "become more", "அதிகரி", "Prices increase every year."],
    ["decrease", "verb", "become less", "குறை", "The number of smokers has decreased."],
    ["improve", "verb", "make or become better", "மேம்படுத்து", "Practice will improve your speaking."],
    ["compare", "verb", "look at the differences between things", "ஒப்பிடு", "Compare the two charts carefully."],
    ["describe", "verb", "say what something is like", "விவரி", "Describe your favourite place."],
    ["explain", "verb", "make something clear", "விளக்கு", "Can you explain the rules?"],
    ["choose", "verb", "pick from several options", "தேர்ந்தெடு", "Many students choose engineering."],
    ["decide", "verb", "make a choice", "தீர்மானி", "I decided to study abroad."],
    ["agree", "verb", "have the same opinion", "உடன்படு", "I agree with this idea."],
    ["believe", "verb", "think that something is true", "நம்பு", "I believe education should be free."],
    ["cause", "noun / verb", "a reason / make something happen", "காரணம் / ஏற்படுத்து", "Heavy rain caused flooding."],
    ["effect", "noun", "a change that a cause makes", "விளைவு", "Social media has a strong effect on teenagers."],
    ["result", "noun", "what happens in the end", "பெறுபேறு / முடிவு", "As a result, prices fell."],
    ["popular", "adjective", "liked by many people", "பிரபலமான", "Cricket is very popular in Sri Lanka."],
    ["common", "adjective", "happening often or shared by many", "பொதுவான", "It is common for families to live together."],
    ["modern", "adjective", "new, of the present time", "நவீன", "Modern phones can do almost everything."],
    ["traditional", "adjective", "following old customs", "பாரம்பரிய", "We wear traditional clothes for Pongal."],
    ["healthy", "adjective", "good for your body", "ஆரோக்கியமான", "Fruit is a healthy snack."],
    ["expensive", "adjective", "costing a lot of money", "விலையுயர்ந்த", "Flights to London are expensive."],
    ["convenient", "adjective", "easy and suitable", "வசதியான", "Online banking is very convenient."],
    ["environment", "noun", "the natural world around us", "சுற்றுச்சூழல்", "We must protect the environment."],
    ["pollution", "noun", "dirty air, water or land", "மாசுபாடு", "Air pollution is high in big cities."],
    ["government", "noun", "the group of people who run a country", "அரசாங்கம்", "The government should build more schools."],
    ["society", "noun", "people living together in a country", "சமூகம்", "Technology has changed society."],
    ["opportunity", "noun", "a chance to do something", "வாய்ப்பு", "Studying abroad is a great opportunity."],
    ["experience", "noun", "knowledge or skill from doing something", "அனுபவம்", "I have two years of work experience."],
    ["skill", "noun", "the ability to do something well", "திறன்", "Communication is an important skill."],
    ["knowledge", "noun", "information and understanding", "அறிவு", "Reading increases your knowledge."],
    ["career", "noun", "the jobs you do over your working life", "தொழில் வாழ்க்கை", "She wants a career in medicine."]
  ],
  "Intermediate": [
    ["significant", "adjective", "large or important enough to notice", "குறிப்பிடத்தக்க", "There was a significant rise in prices."],
    ["essential", "adjective", "absolutely necessary", "அத்தியாவசியமான", "Water is essential for life."],
    ["beneficial", "adjective", "helpful, having a good effect", "நன்மை பயக்கும்", "Exercise is beneficial for your mind."],
    ["harmful", "adjective", "causing damage", "தீங்கு விளைவிக்கும்", "Too much sugar is harmful."],
    ["affordable", "adjective", "cheap enough for people to buy", "கட்டுப்படியான விலையுள்ள", "Housing should be affordable."],
    ["efficient", "adjective", "working well without wasting time or money", "வினைத்திறனான", "Trains are an efficient way to travel."],
    ["reliable", "adjective", "can be trusted", "நம்பகமான", "Buses here are not always reliable."],
    ["available", "adjective", "can be used or obtained", "கிடைக்கக்கூடிய", "Free Wi-Fi is available in the library."],
    ["responsible", "adjective", "having a duty to deal with something", "பொறுப்பான", "Parents are responsible for their children."],
    ["encourage", "verb", "give support so someone does something", "ஊக்குவி", "Teachers should encourage students to ask questions."],
    ["prevent", "verb", "stop something from happening", "தடு", "Vaccines prevent many diseases."],
    ["reduce", "verb", "make smaller or less", "குறை", "We must reduce plastic waste."],
    ["provide", "verb", "give or supply", "வழங்கு", "The school provides free lunch."],
    ["require", "verb", "need", "தேவைப்படு", "This job requires good English."],
    ["achieve", "verb", "succeed in getting something", "அடை / சாதி", "She achieved band 7.5 in IELTS."],
    ["contribute", "verb", "give or help to cause something", "பங்களி", "Tourism contributes to the economy."],
    ["influence", "noun / verb", "the power to change how someone acts", "செல்வாக்கு / தாக்கம் செலுத்து", "Friends influence teenagers' choices."],
    ["impact", "noun", "a strong effect", "தாக்கம்", "The internet has had a huge impact on education."],
    ["issue", "noun", "an important problem or topic", "விவகாரம் / பிரச்சினை", "Unemployment is a serious issue."],
    ["attitude", "noun", "the way you think and feel about something", "மனப்பான்மை", "A positive attitude helps you learn."],
    ["behaviour", "noun", "the way someone acts", "நடத்தை", "Children copy their parents' behaviour."],
    ["lifestyle", "noun", "the way someone lives", "வாழ்க்கை முறை", "City life is a busy lifestyle."],
    ["generation", "noun", "people born around the same time", "தலைமுறை", "The younger generation uses social media more."],
    ["urban", "adjective", "of towns and cities", "நகர்ப்புற", "Urban areas have better hospitals."],
    ["rural", "adjective", "of the countryside", "கிராமப்புற", "Many young people leave rural areas."],
    ["consume", "verb", "use up or eat", "நுகர் / பயன்படுத்து", "Air conditioners consume a lot of electricity."],
    ["facility", "noun", "a building or equipment for a purpose", "வசதி", "The town has good sports facilities."],
    ["employment", "noun", "having paid work", "வேலைவாய்ப்பு", "The factory provides employment for 500 people."],
    ["standard of living", "phrase", "how comfortable and wealthy people's lives are", "வாழ்க்கைத் தரம்", "The standard of living has improved."],
    ["public transport", "phrase", "buses and trains that everyone can use", "பொதுப் போக்குவரத்து", "Public transport reduces traffic."],
    ["crime", "noun", "an illegal action", "குற்றம்", "Crime is lower in small towns."],
    ["obesity", "noun", "being very overweight", "உடற்பருமன்", "Junk food is a cause of obesity."],
    ["globalisation", "noun", "the world becoming more connected", "உலகமயமாக்கல்", "Globalisation has brought foreign brands to Sri Lanka."],
    ["independent", "adjective", "not needing help from others", "சுயமாக இயங்கக்கூடிய", "Living alone made me more independent."],
    ["access", "noun / verb", "the right or way to reach or use something", "அணுகல் / அணுகு", "Everyone should have access to clean water."],
    ["positive / negative", "adjective", "good / bad", "நேர்மறை / எதிர்மறை", "Social media has both positive and negative effects."]
  ],
  "Upper-intermediate": [
    ["crucial", "adjective", "extremely important", "மிக முக்கியமான", "Early diagnosis is crucial."],
    ["inevitable", "adjective", "certain to happen", "தவிர்க்க முடியாத", "Change is inevitable."],
    ["sustainable", "adjective", "able to continue without harming the environment", "நிலைபேறான", "We need sustainable farming."],
    ["considerable", "adjective", "large in size or amount", "கணிசமான", "The project cost a considerable amount of money."],
    ["widespread", "adjective", "found in many places or among many people", "பரவலான", "Mobile phone use is widespread."],
    ["controversial", "adjective", "causing a lot of disagreement", "சர்ச்சைக்குரிய", "The new law is controversial."],
    ["enhance", "verb", "improve the quality of", "மேம்படுத்து", "Music can enhance learning."],
    ["maintain", "verb", "keep in good condition or at the same level", "பேணு / பராமரி", "It is hard to maintain old buildings."],
    ["promote", "verb", "help something grow or become popular", "ஊக்குவி / மேம்படுத்து", "The campaign promotes healthy eating."],
    ["tackle", "verb", "try to deal with a problem", "(பிரச்சினையைக்) கையாளு", "The government must tackle unemployment."],
    ["acquire", "verb", "get or gain (a skill, knowledge)", "பெற்றுக்கொள் / கற்றுக்கொள்", "Children acquire languages quickly."],
    ["emphasise", "verb", "give special importance to", "வலியுறுத்து", "Teachers emphasise the need for practice."],
    ["demonstrate", "verb", "show clearly", "நிரூபி / செய்து காட்டு", "The results demonstrate the value of the course."],
    ["indicate", "verb", "show or point to", "சுட்டிக்காட்டு", "The data indicates a rise in tourism."],
    ["adapt", "verb", "change to suit new conditions", "ஏற்ப மாறு / தகவமை", "Students must adapt to life abroad."],
    ["rely on", "phrase", "depend on", "நம்பியிரு / சார்ந்திரு", "Farmers rely on the rain."],
    ["alternative", "noun / adjective", "another possible choice", "மாற்று", "Cycling is a cheap alternative to driving."],
    ["consequence", "noun", "a result, often a bad one", "விளைவு", "Pollution has serious consequences for health."],
    ["priority", "noun", "the most important thing to deal with", "முன்னுரிமை", "Health should be a top priority."],
    ["trend", "noun", "the general direction of change", "போக்கு", "There is a trend towards online learning."],
    ["shortage", "noun", "not enough of something", "பற்றாக்குறை", "There is a shortage of teachers."],
    ["burden", "noun", "a heavy duty or problem", "சுமை", "High fees are a burden for families."],
    ["diverse", "adjective", "including many different kinds", "பல்வகைப்பட்ட", "London is a diverse city."],
    ["vulnerable", "adjective", "easily harmed", "பாதிக்கப்படக்கூடிய", "Old people are vulnerable to heat."],
    ["ethical", "adjective", "morally right", "அறநெறிக்குட்பட்ட", "Is it ethical to test products on animals?"],
    ["financial", "adjective", "about money", "நிதி சார்ந்த", "Many students face financial problems."],
    ["implement", "verb", "put a plan into action", "நடைமுறைப்படுத்து", "The school implemented a new timetable."],
    ["invest", "verb", "put money or time into something to get a benefit", "முதலீடு செய்", "Countries should invest in education."],
    ["regulate", "verb", "control using rules", "ஒழுங்குபடுத்து", "The government regulates food safety."],
    ["restrict", "verb", "limit", "கட்டுப்படுத்து", "Some parents restrict screen time."],
    ["awareness", "noun", "knowing about something", "விழிப்புணர்வு", "Awareness of mental health is growing."],
    ["innovation", "noun", "a new idea or method", "புத்தாக்கம்", "Innovation drives economic growth."],
    ["legislation", "noun", "laws", "சட்டவாக்கம்", "New legislation bans smoking in public places."],
    ["prosperity", "noun", "wealth and success", "செழிப்பு", "Tourism brought prosperity to the area."],
    ["abundant", "adjective", "more than enough", "ஏராளமான", "Sri Lanka has abundant sunshine."],
    ["decline", "noun / verb", "a fall / become less", "வீழ்ச்சி / குறைவடை", "There has been a decline in reading habits."]
  ],
  "Advanced": [
    ["detrimental", "adjective", "causing harm", "பாதகமான", "Lack of sleep is detrimental to health."],
    ["profound", "adjective", "very great or deep", "ஆழமான", "The internet has had a profound effect on society."],
    ["substantial", "adjective", "large in amount or importance", "கணிசமான அளவிலான", "There was a substantial increase in rents."],
    ["unprecedented", "adjective", "never having happened before", "முன்னெப்போதும் இல்லாத", "The pandemic caused unprecedented changes."],
    ["mitigate", "verb", "make something less serious", "தணி", "Trees help mitigate the effects of heat."],
    ["alleviate", "verb", "make pain or a problem less severe", "இலகுவாக்கு / தணி", "New roads could alleviate traffic jams."],
    ["exacerbate", "verb", "make a problem worse", "மேலும் மோசமாக்கு", "Plastic waste exacerbates flooding."],
    ["foster", "verb", "encourage something to develop", "வளர்த்தெடு", "Team sports foster cooperation."],
    ["facilitate", "verb", "make something easier", "இலகுபடுத்து", "Technology facilitates distance learning."],
    ["undermine", "verb", "gradually weaken", "பலவீனப்படுத்து", "Fake news undermines trust in the media."],
    ["prioritise", "verb", "treat as most important", "முன்னுரிமை அளி", "Governments should prioritise public health."],
    ["compelling", "adjective", "very convincing", "வலுவான, நம்பவைக்கும்", "There is compelling evidence that exercise helps memory."],
    ["pragmatic", "adjective", "practical and realistic", "நடைமுறைக்கேற்ற", "We need a pragmatic solution."],
    ["counterproductive", "adjective", "causing the opposite of the result you want", "எதிர்விளைவு தரும்", "Punishing children can be counterproductive."],
    ["indispensable", "adjective", "absolutely necessary", "இன்றியமையாத", "Smartphones have become indispensable."],
    ["proliferation", "noun", "a fast increase in number", "பெருக்கம்", "The proliferation of fast food outlets worries doctors."],
    ["deteriorate", "verb", "become worse", "சீர்குலை / மோசமடை", "Air quality has deteriorated in many cities."],
    ["scrutinise", "verb", "examine very carefully", "நுணுகி ஆராய்", "Examiners scrutinise every answer."],
    ["disparity", "noun", "an unfair difference", "ஏற்றத்தாழ்வு", "There is a disparity between urban and rural schools."],
    ["marginalised", "adjective", "pushed to the edge of society", "ஓரங்கட்டப்பட்ட", "Marginalised groups need more support."],
    ["conducive", "adjective", "helping something to happen", "உகந்த", "A quiet room is conducive to study."],
    ["inherent", "adjective", "a natural, basic part of something", "இயல்பாகவே உள்ள", "Every investment has inherent risks."],
    ["ubiquitous", "adjective", "found everywhere", "எங்கும் நிறைந்த", "Smartphones are now ubiquitous."],
    ["paramount", "adjective", "more important than anything else", "அதிமுக்கியமான", "Safety is paramount."],
    ["curb", "verb", "control or limit something bad", "கட்டுப்படுத்து", "Taxes can curb smoking."],
    ["viable", "adjective", "able to work successfully", "சாத்தியமான", "Solar power is a viable option for homes."],
    ["incentive", "noun", "something that encourages people to act", "ஊக்கத்தொகை / தூண்டுதல்", "Tax incentives encourage people to buy electric cars."],
    ["holistic", "adjective", "looking at the whole thing, not just parts", "முழுமையான", "Schools should take a holistic approach to education."],
    ["adverse", "adjective", "negative and harmful", "பாதகமான", "The medicine had adverse effects."],
    ["equitable", "adjective", "fair and equal", "சமத்துவமான / நியாயமான", "Resources should be shared in an equitable way."],
    ["resilient", "adjective", "able to recover quickly from difficulties", "மீண்டெழும் திறனுள்ள", "Children are often very resilient."],
    ["tangible", "adjective", "real and able to be seen", "கண்கூடான", "The project brought tangible benefits."],
    ["consensus", "noun", "general agreement", "ஒருமித்த கருத்து", "There is a consensus that climate change is real."],
    ["accountability", "noun", "being responsible for your actions", "பொறுப்புக்கூறல்", "Politicians need more accountability."],
    ["empower", "verb", "give people power or confidence", "வலுவூட்டு", "Education empowers women."],
    ["drawback", "noun", "a disadvantage", "குறைபாடு", "The main drawback of online learning is isolation."]
  ]
}
};
