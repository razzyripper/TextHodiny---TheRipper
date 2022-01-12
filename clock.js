



// let pole = ["jedna", "dva", "tři", "čtyři", "pět", "šest", "sedm", "osm", "devět", "deset"]

// console.log(pole[cislo])

let startTime = () => {
//     let textTime = ["jedna", "dva", "tři", "čtyři", "pět", "šest", "sedm", "osm", "devět", "deset", "jedenáct", "dvanáct", "třináct", "čtrnáct", "patnáct", "šestnáct", "sedmnáct", "osmnáct", 
// "devatenáct", "dvacet", "dvacetjedna", "dvacetdva", "dvacettři", "dvacetčtyři", "dvacetpět", "dvacetšest", "dvacetsedm", "dvacetosm", "dvacetdevět", "třicet", "třicetjedna", "třicetdva", "třicettři", "třicetčtyři", "třicetpět", "třicet" ]

    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // console.log(pole[s])
  
    // document.getElementById('clockText').innerHTML =  textTime[h] + ":" + textTime[m] + ":" + pole[s];

    
        const hod = document.querySelectorAll('.hr')
        hod.forEach(r => {
          if(r.classList[1] == h){
            r.classList.add('now')
          }
          if (r.classList[1] != h){
            r.classList.remove('now')
          }
        })

        const min = document.querySelectorAll('.min')
        min.forEach(r => {
            if(r.classList[1] == m){
                r.classList.add('now')
            }
            if(r.classList[1] != m){
                r.classList.remove('now')
            }
        })

        const sec = document.querySelectorAll('.sec')
        sec.forEach(r => {
            if(r.classList[1] == s){
                r.classList.add('now')
            }
            if(r.classList[1] != s){
                r.classList.remove('now')
            }
        })
    //  console.log(hod)

    setTimeout(startTime, 1000);
}


console.log(startTime())