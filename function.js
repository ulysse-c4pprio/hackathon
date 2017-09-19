
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }


    function random_games(){
      var wordpress = ["Kenza Bannouf","Alexandre Hak","Jeremy Gillot","Mamadou Baddé","Christophe Eltinn","Stalyne Flereali","Pauline Missio","William Teguia","Lionel Vierin","Ismaël Berrahoudine","Jonathan Colnot","Fégan Pierre","Léa Vandyck","Chloé Pavaday"];
      var capprio = ["Nicolas	Stephen","Imane	Djellalil","Laetitia	Cadet","Laurie	Harmand","Fatima	Kehli","Zacharie	Amri","Erwan	Jean Baptiste","Gabriel	Bongo","Badra	Diarra","Amadou	Golfa","Idriss	Cornuau","Salem	Osmanov","Ilan	Mouyal","Nole	Nsonde","Jerry	Nguyen","Seyar	Safi","Modar	Hmedan","Vishnugopy	Suthaharan"];
      var random = wordpress.concat(capprio);


shuffle(random);

      $('.random_team').html(' ');

      /*for (var i = 1;i<capprio.length;i++){
        if(i%2===0){
          random.push(wordpress[i]);
          random.push(wordpress[i-1]);
          random.push(capprio[i]);
          random.push(capprio[i-1]);
        }
      }*/


      var n=1;
      for (var i = 1;i<random.length;i++){
        if (i%4===0){
          $('.random_team').append("<div class='team "+n+"'></div>");
          $('.'+n).append("<h3>Equipe "+n+" :</h3><br>");
          $('.'+n).append('<p>'+random[i-3]+'</p>');
          $('.'+n).append('<p>'+random[i-2]+'</p>');
          $('.'+n).append('<p>'+random[i-1]+'</p>');
          $('.'+n).append('<p>'+random[i]+'</p>');
          n++;
        }
      }
    }

    function start(sec,inter){
      $('.button').attr('style','margin:-3% 0;')
      var toto = 0;
    var interval = setInterval(function(){
      toto++;
      random_games();
    console.log(toto);
    if(toto > inter){
      sec = sec * 1.2;
      inter = inter - 5;
      console.log('sec='+sec+'   inter='+inter);
      clearInterval(interval);
      if(inter>=0){
        start2(sec,inter);
      }
    }
    }, sec);
    }

    function start2(sec,inter){
      var toto = 0;
    var interval = setInterval(function(){
      toto++;
      random_games();
    console.log(toto);
    if(toto >= inter){
      sec = sec * 1.2;
      inter = inter - 5;
      console.log('sec='+sec+'   inter='+inter);
      clearInterval(interval);
      if(inter>=0){
        start(sec,inter);
      }
    }

    }, sec);


    }
