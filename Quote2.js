const quotes = [
    
  {
    "speaker": "Kazi Nazrul Islam",
    "title": "National Poet of Bangladesh",
    "quote": "I am not a poet, I am a rebel, a revolutionary!",
    "attribution": "Known for his fiery verses and resistance against colonial oppression."
  },
  {
    "speaker": "Rabindranath Tagore",
    "title": "Poet, Philosopher, Nobel Laureate (India)",
    "quote": "Let your life lightly dance on the edges of Time like dew on the tip of a leaf.",
    "attribution": "First non-European to win the Nobel Prize in Literature in 1913."
  },
  {
    "speaker": "Nelson Mandela",
    "title": "Anti-Apartheid Revolutionary, Former President of South Africa",
    "quote": "Education is the most powerful weapon which you can use to change the world.",
    "attribution": "Spent 27 years in prison fighting racial injustice and led South Africa to democracy."
  },
  {
    "speaker": "Aung San Suu Kyi",
    "title": "Burmese Politician, Nobel Peace Prize Laureate",
    "quote": "The only real prison is fear, and the only real freedom is freedom from fear.",
    "attribution": "Symbol of peaceful resistance in Myanmar's struggle for democracy."
  },
  {
    "speaker": "Albert Einstein",
    "title": "Theoretical Physicist (Germany/USA)",
    "quote": "Imagination is more important than knowledge. For knowledge is limited.",
    "attribution": "Known for the theory of relativity and deep philosophical insights."
  },
  {
    "speaker": "Begum Rokeya",
    "title": "Social Reformer, Writer (Bangladesh)",
    "quote": "The best treasure for a woman is education and self-reliance.",
    "attribution": "Pioneer of women's education and rights in South Asia."
  },
  {
    "speaker": "Malala Yousafzai",
    "title": "Education Activist, Nobel Peace Laureate (Pakistan)",
    "quote": "One child, one teacher, one book, one pen can change the world.",
    "attribution": "Survived an attack by the Taliban and became a global advocate for girls' education."
  },
  {
    "speaker": "Confucius",
    "title": "Philosopher (Ancient China)",
    "quote": "It does not matter how slowly you go as long as you do not stop.",
    "attribution": "His teachings shaped East Asian moral and social thought."
  },
  {
    "speaker": "Mother Teresa",
    "title": "Catholic Nun, Missionary, Nobel Laureate (Albania/India)",
    "quote": "Not all of us can do great things. But we can do small things with great love.",
    "attribution": "Dedicated her life to helping the poor and sick in India."
  },
  
  {
    "speaker": "Dr. Martin Luther King Jr.",
    "title": "Civil Rights Leader (USA)",
    "quote": "Injustice anywhere is a threat to justice everywhere.",
    "attribution": "Led the American civil rights movement with nonviolent activism."
  },
  {
    "speaker": "A.P.J. Abdul Kalam",
    "title": "Former President and Scientist (India)",
    "quote": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    "attribution": "Known as the 'Missile Man of India' and a beloved educator."
  },
  {
    "speaker": "Frida Kahlo",
    "title": "Artist and Activist (Mexico)",
    "quote": "Feet, what do I need you for when I have wings to fly?",
    "attribution": "Renowned for her powerful self-portraits and identity as a feminist icon."
  },
  {
    "speaker": "Barack Obama",
    "title": "44th President of the United States",
    "quote": "The future rewards those who press on. I don’t have time to feel sorry for myself.",
    "attribution": "First African-American president of the United States."
  },
  {
    "speaker": "Socrates",
    "title": "Philosopher (Ancient Greece)",
    "quote": "The unexamined life is not worth living.",
    "attribution": "Founder of Western philosophy and a martyr for truth."
  },
  {
    "speaker": "Rumi",
    "title": "Poet and Mystic (Persia)",
    "quote": "You were born with wings, why prefer to crawl through life?",
    "attribution": "One of the most widely read poets in the world, known for his spiritual depth."
  },
  {
    "speaker": "Wangari Maathai",
    "title": "Environmental Activist, Nobel Laureate (Kenya)",
    "quote": "It's the little things citizens do. That's what will make the difference.",
    "attribution": "First African woman to win the Nobel Peace Prize, founded the Green Belt Movement."
  },
  {
    "speaker": "Fazilatunnesa Mujib",
    "title": "Political Advisor, First Lady of Bangladesh",
    "quote": "Behind every great struggle, there is sacrifice beyond the front lines.",
    "attribution": "A key figure in Bangladesh's political history and a symbol of quiet strength."
  },
  {
    "speaker": "Yoko Ono",
    "title": "Artist and Peace Activist (Japan)",
    "quote": "A dream you dream alone is only a dream. A dream you dream together is reality.",
    "attribution": "Advocate of peace and experimental art, known for her work with John Lennon."
  },
  {
    "speaker": "Desmond Tutu",
    "title": "Archbishop and Human Rights Activist (South Africa)",
    "quote": "If you are neutral in situations of injustice, you have chosen the side of the oppressor.",
    "attribution": "Nobel Peace Prize winner and anti-apartheid crusader."
  },

  {
    "speaker": "Dr. Muhammad Yunus",
    "title": "Economist, Founder of Grameen Bank, Nobel Laureate",
    "quote": "Once poverty is gone, we’ll need to build museums to display its horrors to future generations.",
    "attribution": "Pioneered microcredit and social business to empower the poor."
  },
  {
    "speaker": "Sufia Kamal",
    "title": "Poet, Activist, Feminist Icon",
    "quote": "Let me be like the flame that burns injustice away.",
    "attribution": "First female editor of a Bengali magazine and a lifelong voice for women's rights."
  },
  {
    "speaker": "Ahmed Sofa",
    "title": "Writer, Philosopher, Intellectual",
    "quote": "The courage to think differently is the beginning of true freedom.",
    "attribution": "Known for fearless criticism of political and social injustice."
  },
  {
    "speaker": "Anwara Bahar Chowdhury",
    "title": "Educationist, Social Reformer",
    "quote": "Education is not a luxury, it is the birthright of every soul.",
    "attribution": "One of the earliest Muslim women to lead educational reforms in Bengal."
  },
  {
    "speaker": "Shaheed Janani Jahanara Imam",
    "title": "Writer, Activist",
    "quote": "My pen is my protest, my son’s blood is my vow.",
    "attribution": "Documented the atrocities of 1971 and became a symbol of justice."
  },
  {
    "speaker": "Sir Fazle Hasan Abed",
    "title": "Founder of BRAC",
    "quote": "Small is beautiful, but scaling up is essential to fight poverty.",
    "attribution": "Founded the world's largest NGO to empower millions globally."
  },
  {
    "speaker": "Selina Hossain",
    "title": "Author, Novelist",
    "quote": "A nation's spirit is carved in its stories.",
    "attribution": "Renowned for portraying the social and political realities of Bangladesh."
  },
  {
    "speaker": "Shamsur Rahman",
    "title": "Poet, Journalist",
    "quote": "In the darkest hour, poetry becomes the final act of defiance.",
    "attribution": "His poems inspired hope and resistance during turbulent times."
  },
  {
    "speaker": "Fazilatunnesa Mujib",
    "title": "Political Thinker, First Lady",
    "quote": "History remembers those who shape it — not from the podium, but through sacrifice.",
    "attribution": "Stood behind Sheikh Mujib during the birth of Bangladesh, often overlooked yet vital."
  },
  {
    "speaker": "Kamal Hossain",
    "title": "Jurist, Constitution Architect",
    "quote": "A just constitution must reflect the people's dignity and dreams.",
    "attribution": "Key figure in drafting Bangladesh’s Constitution after independence."
  },
  {
    "speaker": "Imam Al-Ghazali",
    "title": "Islamic Theologian, Philosopher (Persia)",
    "quote": "Knowledge without action is wastefulness and action without knowledge is foolishness.",
    "attribution": "Renowned for merging spiritual wisdom with rational thought in Islamic philosophy."
  },
  {
    "speaker": "Maulana Rumi",
    "title": "Sufi Mystic, Poet (Persia)",
    "quote": "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    "attribution": "His Sufi poetry emphasizes love, tolerance, and divine unity."
  },
  {
    "speaker": "Iqbal Lahori (Allama Iqbal)",
    "title": "Philosopher-Poet, Visionary of Pakistan",
    "quote": "Nations are born in the hearts of poets, they prosper and die in the hands of politicians.",
    "attribution": "Inspired Muslim identity and unity across South Asia."
  },
  {
    "speaker": "Abul Kalam Azad",
    "title": "Scholar, Politician, Independence Leader (India)",
    "quote": "Be more dedicated to making solid achievements than in running after swift but synthetic happiness.",
    "attribution": "One of the earliest Muslim leaders to champion secular, united India."
  },
  {
    "speaker": "Mawlana Abdul Hamid Khan Bhashani",
    "title": "Religious Leader, Politician (Bangladesh)",
    "quote": "I am with the oppressed, whether they are Muslims or not.",
    "attribution": "Known as 'The Red Maulana' for his mix of Islamic values and socialist politics."
  },
  {
    "speaker": "Dr. Zakir Naik",
    "title": "Islamic Scholar, Orator (India)",
    "quote": "Islam is a complete way of life. It governs all aspects of our existence.",
    "attribution": "Popular among youth for comparative religious lectures."
  },
  {
    "speaker": "Hazrat Shah Jalal (R)",
    "title": "Sufi Saint and Islamic Missionary (Bangladesh)",
    "quote": "Truth does not spread through the sword, but through compassion and wisdom.",
    "attribution": "Credited with spreading Islam peacefully in Sylhet region."
  },
  {
    "speaker": "Sheikh Saadi Shirazi",
    "title": "Persian Poet and Islamic Ethicist",
    "quote": "Have patience. All things are difficult before they become easy.",
    "attribution": "His poetic wisdom on ethics is still widely quoted in the Muslim world."
  },
  {
    "speaker": "Moulana Ashraf Ali Thanwi",
    "title": "Scholar and Reformer (India)",
    "quote": "Purity of heart is greater than any outward display of piety.",
    "attribution": "Major figure in the Deobandi movement, known for spiritual guidance."
  },
  {
    "speaker": "Sultana Kamal",
    "title": "Human Rights Activist (Bangladesh)",
    "quote": "Islam teaches justice — and justice must begin at home.",
    "attribution": "Modern advocate for women’s rights and Islamic ethics in governance."
  },
  {
    "speaker": "Imam Malik ibn Anas",
    "title": "Founder of the Maliki School of Islamic Jurisprudence (Medina)",
    "quote": "Knowledge is not what is memorized. Knowledge is what benefits.",
    "attribution": "One of the four great Imams of Sunni Islamic law."
  },
  {
    "speaker": "Imam Ahmad ibn Hanbal",
    "title": "Founder of the Hanbali School of Islamic Jurisprudence (Iraq)",
    "quote": "Patience is of two kinds: patience over what pains you, and patience against what you covet.",
    "attribution": "Known for his strict adherence to hadith and resilience during persecution."
  },
  {
    "speaker": "Fatima al-Fihri",
    "title": "Founder of the World’s Oldest University, Al-Qarawiyyin (Morocco)",
    "quote": "Education is the key to unlocking the treasures of life.",
    "attribution": "Established one of the first universities, contributing to Islamic education."
  },
  {
    "speaker": "Rabi'a al-Adawiyya",
    "title": "Sufi Mystic and Saint (Iraq)",
    "quote": "O Lord, if I worship You for fear of Hell, burn me in Hell; and if I worship You in hope of Paradise, exclude me from Paradise. But if I worship You for Your own sake, do not deny to me Your everlasting Beauty.",
    "attribution": "Pioneer of the concept of Divine Love in Sufism."
  },
  {
    "speaker": "Ibn Khaldun",
    "title": "Historian, Philosopher, Sociologist (Tunisia)",
    "quote": "The past resembles the future more than one drop of water resembles another.",
    "attribution": "Founder of modern historiography and sociology in the Islamic Golden Age."
  },
  {
    "speaker": "Sayyid Qutb",
    "title": "Islamic Theorist, Writer (Egypt)",
    "quote": "God does not change the condition of a people until they change what is in themselves.",
    "attribution": "Influential Islamist thinker whose writings shaped modern Islamic movements."
  },
  {
    "speaker": "Malcolm X",
    "title": "Civil Rights Activist and Muslim Leader (USA)",
    "quote": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "attribution": "Converted to Islam and became a prominent advocate for African-American rights."
  },
  {
    "speaker": "Sheikh Abd al-Qadir al-Jilani",
    "title": "Sufi Saint and Scholar (Iraq)",
    "quote": "The heart is the throne of God; purify it, and the world will be yours.",
    "attribution": "Founder of the Qadiriyya Sufi order, known for spiritual teachings."
  },
  {
    "speaker": "Dr. Tariq Ramadan",
    "title": "Contemporary Islamic Scholar (Switzerland)",
    "quote": "Islam is a faith of compassion, reason, and justice.",
    "attribution": "Known for bridging Islamic thought with modern challenges."
  },
  {
    "speaker": "Khalil Gibran",
    "title": "Philosopher, Poet, Writer (Lebanon)",
    "quote": "Faith is a knowledge within the heart, beyond the reach of proof.",
    "attribution": "Though not strictly Islamic scholar, his work reflects spiritual insights valued in Islamic culture."
  },
  {
    "speaker": "Imam Al-Shafi‘i",
    "title": "Founder of the Shafi‘i School of Islamic Jurisprudence (Egypt)",
    "quote": "Knowledge is the life of the mind.",
    "attribution": "One of the four great Imams and a pioneer in Islamic legal theory."
  },
  {
    "speaker": "Al-Farabi",
    "title": "Philosopher and Scientist (Central Asia)",
    "quote": "The ultimate goal of knowledge is to transform the soul.",
    "attribution": "Called 'the Second Teacher' after Aristotle for his contributions to Islamic philosophy."
  },
  {
    "speaker": "Ibn Arabi",
    "title": "Sufi Mystic and Philosopher (Andalusia)",
    "quote": "Wherever you stand, be the soul of that place.",
    "attribution": "Famous for his metaphysical writings and the concept of 'Unity of Being.'"
  },
  {
    "speaker": "Imam Nawawi",
    "title": "Hadith Scholar and Jurist (Syria)",
    "quote": "The best of people are those who bring most benefit to the rest of mankind.",
    "attribution": "Renowned author of 'Riyadh as-Salihin' and other classical Islamic texts."
  },
  {
    "speaker": "Umar ibn Al-Khattab (RA)",
    "title": "Second Caliph of Islam",
    "quote": "No amount of guilt can change the past, and no amount of worrying can change the future.",
    "attribution": "Known for justice and strong leadership during the early Islamic period."
  },
  {
    "speaker": "Fatima Jinnah",
    "title": "Mother of the Nation (Pakistan)",
    "quote": "Let every nation know that the woman who stands behind a great man is often greater than the man himself.",
    "attribution": "Sister of Muhammad Ali Jinnah and a pioneer in women’s rights."
  },
  {
    "speaker": "Malala Yousafzai",
    "title": "Education Activist and Nobel Laureate (Pakistan)",
    "quote": "One child, one teacher, one book, and one pen can change the world.",
    "attribution": "Advocate for girls’ education worldwide and the youngest Nobel Prize winner."
  },
  {
    "speaker": "Sheikh Hamza Yusuf",
    "title": "Islamic Scholar and Teacher (USA)",
    "quote": "Knowledge without humility is dangerous, humility without knowledge is worthless.",
    "attribution": "Co-founder of Zaytuna College and influential Islamic educator in the West."
  },
  {
    "speaker": "Imam Hasan al-Basri",
    "title": "Early Islamic Scholar and Mystic (Iraq)",
    "quote": "He who knows himself knows his Lord.",
    "attribution": "Renowned early ascetic and spiritual guide."
  },
  {
    "speaker": "Amina Wadud",
    "title": "Islamic Feminist Scholar (USA)",
    "quote": "Islamic feminism is the pursuit of social justice, equality, and dignity for all.",
    "attribution": "Known for her work on gender justice in Islam."
  }
];

// Function to display a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];

    document.getElementById("quote").innerHTML = `
        <strong>"${selected.quote}"</strong><br><br>
        <em>— ${selected.speaker}, ${selected.title}</em><br>
        <small>${selected.attribution}</small>
    `;
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quoteButton").addEventListener("click", generateQuote);
});