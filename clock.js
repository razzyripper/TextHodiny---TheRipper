



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
  
    document.getElementById('clockText')

    
        const hod = document.querySelectorAll('.time')
        hod.forEach(r => {
          if(r.classList[1] == h){
            r.classList.add('now')
          }
          if (r.classList[1] != h){
            r.classList.remove('now')
          }
        })

        const min = document.querySelectorAll('.time')
        min.forEach(r => {
            if(r.classList[1] == m){
                r.classList.add('minute')
            }
            if(r.classList[1] != m){
                r.classList.remove('minute')
            }
        })

        const sec = document.querySelectorAll('.time')
        sec.forEach(r => {
            if(r.classList[1] == s){
                r.classList.add('seconds')
            }
            if(r.classList[1] != s){
                r.classList.remove('seconds')
            }
        })
    //  console.log(hod)

    setTimeout(startTime, 1000);
}


console.log(startTime())