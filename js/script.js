const search = document.querySelector ("#search");
const matchList = document.querySelector ("#match-list");
const myStates = document.querySelector ("#my-states");

let statesAll = [];
let states = [];


(async () => {
    const res = await fetch ("..//base/base.json");
    states = await res.json();
    console.log (states);
})();

const searchStates = searchText => {
    let matches  = states.filter (state => {
        //const regex = new RegExp ('^$[searchText]', 'gi');
        const regex = searchText;
        return state.name.match(regex) || state.abbr.match(regex);
    });
    console.log(matches);
    outputHTML (matches);
};

    
const outputHTML = matches => {
    if (matches.length > 0) {
        matchList.innerHTML = matches;
    } else {
        matchList.innerHTML = '';
    }
};

search.addEventListener('input', () => searchStates (search.value));