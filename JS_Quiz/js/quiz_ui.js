var QuizUI = {
	displayNext: function(){
		if(quiz.hasEnded())
			this.diplayScore();
		else {
			this.displayQuestion();
			this.displayChoices();
			this.displayProgress();
		}
	},

	displayQuestion: function(){
		this.populateIdWithHtml("question", quiz.getCurrentQuestion().text);
	},

	displayChoices: function(){
		var choices = quiz.getCurrentQuestion().choices;
		for(var i = 0; i < choices.length; i++){
			this.populateIdWithHtml("choice" + i, choices[i]);
			this.guessHandler("guess" + i, choices[i]);
		}
	},

	diplayScore: function(){
		var gameOverHtml = "<h1>Game Over!</h1>";
		gameOverHtml += "<h2>Your score is: " + quiz.score + "</h2>";
		this.populateIdWithHtml("quiz", gameOverHtml);
	},

	populateIdWithHtml: function(id, text){
		var element = document.getElementById(id);
		element.innerHTML = text;
	},

	guessHandler: function(id, guess){
		var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			QuizUI.displayNext();
		}
	},

	displayProgress: function(){
		var progressHtml = "Question " + (quiz.currentQuestionIndex + 1) + " of " + quiz.questions.length; 
		this.populateIdWithHtml("progress", progressHtml);
	}
};