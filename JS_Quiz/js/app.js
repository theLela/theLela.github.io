var questions = [new Question("What is the world's longest river?", ["Amazon", "Volga"], "Amazon"),
				 new Question("Name the world's largest ocean.", ["Pacifik", "Atlantic"], "Pacifik"),
				 new Question("When did the Cold War end?", ["1979", "1989"], "1989"),
				 new Question("Who was the legendary Benedictine monk who invented champagne?", ["Perrier Jouet", "Dom Perignon"], "Dom Perignon"),
				 new Question("What item of clothing was named after its Scottish inventor?", ["A Mackintosh", "A Pullover"], "A Mackintosh")];
var quiz = new Quiz(questions);

QuizUI.displayNext();