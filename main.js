const messages = [
    'Hello World',
    'My friend said to me: "What rhymes with orange" I said: "no it does not"',
    'I am a programmer',
    'I am a developer',
    'Coffee has a tough time at my house, every morning it gets mugged.',
    'What creature is smarter than a talking parrot? A spelling bee.',
    'What is the difference between a programmer and a fish? A fish does not program.',
    'Did you hear about the two thieves who stole a calendar? They each got six months.',
    'Guy told me today he did not know what cloning is. I told him, "that makes 2 of us."',
    'My wife is on a tropical fruit diet, the house is full of stuff. It is enough to make a mango crazy.',
    'I went to the store to pick up eight cans of sprite... when I got home I realized I would only picked seven up',
    'I was going to tell a lie, but then I thought, "What if I told a lie about a lie?"',
    'What is the difference between a seal and a sea lion? An ion!',
]

let lastTree = []

const getMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    return randomMessage;
}

console.log(getMessage());