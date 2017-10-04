$(document).ready(function(){
	var playerHealth;
	var playerAttack;
	var playerCounter;
	var enemyHealth;
	var enemyCounter;

	character = ["Obi-Wan","Luke","Darth-Sidious","darth-Maul"];
	enemy = [];
	player = [];

	$("#character").on("click", function(){
		characterChoice = character.value;
		player.push(character[characterChoice]);

		for(i=0;i=character.length;i=0)
		{
			enemy.push(character[i]);
		}
	});

	$("#attackbtn").on("click", function()){
		attack();
	}


	function playerStats(){
		playerHealth = 120;
		playerAttack = Math.floor((Math.random() * 10)+1);
		playerCounter =Math.floor((Math.random() * 7)+1);	}

	function enemyStats(){
		enemyHealth = 120;
		enemyCounter = Math.floor((Math.random() * 8)+1);
	}

	function attack(){
		enemyHealth -= playerAttack;

		playerHealth -= enemyCounter;

		enemyHealth -= playerCounter;
	}
	

	

})


