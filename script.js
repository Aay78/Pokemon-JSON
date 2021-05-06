var obj = 
`{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "power": "solar-power"
    }
  ],
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "name": "charizard",
  "order": 7,
  "stats": [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 84,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 109,
      "effort": 3,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 85,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 100,
      "effort": 0,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying"
      }
    }
  ],
  "weight": 905
}`;

var myJson = JSON.parse(obj);
document.getElementById("output").innerHTML = myJson.abilities[0].name +" "+ myJson.abilities[1].power;
document.getElementById("base-experience").innerHTML =  "Base Experience: " + myJson.base_experience;
document.getElementById('height').innerHTML = "Height:" + myJson.height;
document.getElementById('stats').innerHTML ="abilty name:" + "hp" +" "+ "stats:" + myJson.stats[0].base_stat +" " + "effort:" + myJson.stats[0].effort;
document.getElementById('stats2').innerHTML ="abilty name:" + "attack" +" "+ "stats:" + myJson.stats[1].base_stat +" "+ "effort:" + myJson.stats[1].effort;
document.getElementById('stats3').innerHTML ="abilty name:" + "defense" + " "+"stats:" + myJson.stats[2].base_stat + " "+"effort:" + myJson.stats[2].effort;
document.getElementById('stats4').innerHTML ="abilty name:" + "special attack" +" "+ "stats:" + myJson.stats[3].base_stat +" "+ "effort:" + myJson.stats[3].effort;
document.getElementById('stats5').innerHTML ="abilty name:" + "special defense" +" "+ "stats:" + myJson.stats[4].base_stat +" "+ "effort:" + myJson.stats[4].effort;
document.getElementById('stats6').innerHTML ="abilty name:" + "speed" + " "+"stats:" + myJson.stats[5].base_stat +" "+ "effort:" + myJson.stats[5].effort;
document.getElementById('stats7').innerHTML ="abilty name:" + "fire" +" "+ "slot:" + myJson.types[0].slot;
document.getElementById('stats8').innerHTML ="abilty name:" + "flying"+" " + "slot:" + myJson.types[1].slot;
document.getElementById('weight').innerHTML ="weight:" +" "+ myJson.weight;



