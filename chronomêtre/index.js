// les variables dont on aura besoins

var sp, btn_start, btn_stop, t, ms , s, mn, h;


//fonction pour initialiser les variables quand la page se charge


window.onload = function(){
    sp = document.getElementsByTagName('span'); //se dirige vers l'orienté
    //  objet qu'y le span par la méthode getElementByTagName
    btn_start = document.getElementById('start'); // idem mais par la méthode
    // getElementById
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s=0, mn=0, h=0;
}


//mettre en place le compteur


function update_chrono(){
    ms +=1;
    if(ms==10){
        ms=1;
        s+=1;

    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;

    }

    //insertion des valeurs dans les spans 

    sp[0].innerHTML = h + "h"; //inerHTML permet d'insérer les nouvelles données du js 
    // dans le code html en spécifiant l'indice su tag notamment ici span et suivit 
    // de la variables concaténer avec le mot ou phrase qui ira avec ce dernier
    
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
    
}


//mettre en place la fonction du bouton start


function start(){
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}

//stopper le chronometre

function stop(){
    clearInterval(t);
    btn_start.disabled = false;
}

//initialiser les valeurs du cmpt 

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms=0, s=0, mn=0, h=0;
    // insérons ces nouvelles values 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";

}