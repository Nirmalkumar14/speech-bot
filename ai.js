// const { GoogleGenerativeAI } = require('@google/generative-ai');
// async function generateContent() {
//     const genai = new GoogleGenerativeAI("AIzaSyC2nC9KZ8QT1CgBN6TsNx7QQ4gw6hfaBf0");
//     const model = genai.getGenerativeModel({
//         model: "gemini-1.0-pro",
//     });
   
   
//         const r = await model.generateContent("top 10 tamil movie");
//         console.log(r.response.text());
     
// }
// generateContent();

function speak(){
    var text = document.getElementById("input").value;
    var sp = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(sp);
}

