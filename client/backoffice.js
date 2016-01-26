Template.body.event({
	"click .sucess": function(event){
		const questionLabel = event.target.questionLabel.value();
		console.log(questionLabel);

	}
});