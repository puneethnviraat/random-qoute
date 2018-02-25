	var qoutes = ["Only I can change my life. No one can do it for me. - Carol Burnett",
	"if you can dream it, you can do it.  -walt disney",
	"Either i will find a way, or i will make one. - philip sidney",
"you are never too old to set another goal or to dream a new dream. - c.s lewis",
"Be yourself; everyone else is already taken.  - Oscar Wilde",
"So many books, so little time.  -Frank Zappa",
"A room without books is like a body without a soul.  -Marcus Tullius Cicero",
"Be the change that you wish to see in the world.             -Mahatma Gandhi",
"If you tell the truth, you don't have to remember anything. ― Mark Twain",
"A friend is someone who knows all about you and still loves you.  -Elbert Hubbard",
"Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
"We should not give up and we should not allow the problem to defeat us.  -A.P.J. Kalam",
"Man needs his difficulties because they are necessary to enjoy success.  -A.P.J. Kalam",
"Arise,awake and donot stop until the goal is reached.  -Swami vivekananda"];
	function next_quote() {
var random=Math.floor(Math.random()*qoutes.length);		
document.getElementById("quoite").innerHTML = qoutes[random];

}

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();