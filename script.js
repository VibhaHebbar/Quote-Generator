document.addEventListener("DOMContentLoaded", function () {
let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");


const quotes=[
    {
    quote:"If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.",
    person:"Wayne Dyer"},
    {
    quote:"Believe you can and you're halfway there.",
    person:"Theodore Roosevelt"},
    {
    quote:"Learn the rules like a pro, so you can break them like an artist.",
    person:" Pablo Picasso"},
    {
    quote:"Do one thing every day that scares you.",
    person:"Eleanor Roosevelt"},
    {
    quote:"Strength does not come from physical capacity. It comes from an indomitable will.",
    person:"Mahatma Gandhi "},
    {
    quote:"It's not just about being better. It's about being different. You need to give people a reason to choose your business. ",
    person:" Tom Abbott"},
    {
    quote:" The leader has to be practical and a realist yet must talk the language of the visionary and the idealist.",
    person:"Eric Hoffer"},
    {
    quote:"The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.",
    person:"John Maxwell "},
    {
    quote:"It is important to look at death because it is a part of life. It is a sad thing, melancholy but romantic at the same time. It is the end of a cycle - everything has to end. The cycle of life is positive because it gives room for new things.",
    person:"Alexander McQueen "},
    {
    quote:"You can’t use up creativity. The more you use, the more you have.",
    person:"Maya Angelou"},
    {
    quote:" Nothing lasts forever. Not even your troubles.",
    person:"Arnold H Glasgow "},
    {
    quote:"The only place you find success before work is in the dictionary.",
    person:" May V. Smith"},
    {
    quote:"Hope never abandons you, you abandon it.",
    person:"George Weinberg"},
    {
    quote:"Just decide; what's it's gonna be, who you're gonna be and how you're gonna do it, and then from that point, the universe will get out of your way.",
    person:"Will Smith"},
    {
    quote:"Innovation distinguishes between a leader and a follower.",
    person:"Steve Jobs"},
    {
    quote:"Those who dare to fail miserably can achieve greatly.",
    person:" John F. Kennedy"},
    {
    quote:"It is our choices, that show what we truly are, far more than our abilities.",
    person:"J. K. Rowling"},
    {
    quote:"Go until you fail, then keep going.",
    person:"Jason Feifer"},
    {
    quote:"A person who never made a mistake never tried anything new.",
    person:"Albert Einstein"},
    
    ];

    btn.addEventListener("click",function(){
        let random=Math.floor(Math.random() * quotes.length);
  


        quote.innerText=quotes[random].quote;
        person.innerText=quotes[random].person;
    });
});
