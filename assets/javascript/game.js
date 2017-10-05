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
		var characterChoice = document.getElementById("character").value;
		player.push(character[characterChoice]);
		console.log("the click works you chose (player array): "+ player[0]);

		for(i=0;i<character.length;i++)
		{
			enemy.push(character[i]);
			console.log(character[i]);
			console.log(enemy);
		}
	});

	$("#attackbtn").on("click", function(){
		attack();
	});


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
	

	

});


