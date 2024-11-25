

function SpawnHeaderName(parent, text, extraclass = "")
{
    let name = document.createElement("div");
    name.innerText = text;
    name.className = `headername ${extraclass}`;
    parent.append(name);
    return name;
}
function SpawnSpace(parent)
{
    let space = document.createElement("div");
    space.style = "margin: 0; padding: 0; width: 3em;";
    parent.append(space);
}

function SpawnHeader()
{
    
    let headerBuffer = SpawnDiv(MainContainer, "header-buffer");

    let headertab = SpawnDiv(MainContainer, "header-tab");
    
    SpawnSpace(headertab);
    

    let realnamesection = SpawnMultiRow(headertab);
    realnamesection.style.position = "relative";

    let a1icon = document.createElement("img");
    a1icon.src = `./FILES/IMG/HEADSHOTS/headshot_ring.png`;
    a1icon.classList.add("a1icon");
    a1icon.classList.add("showcase-img");
    realnamesection.append(a1icon);
    a1icon.onclick = () => {
        ShowHidePersonalInfo();
    };

    let realname = SpawnHeaderName(realnamesection, "asbjørn ø. j.");
    realname.onclick = () => {
        ShowHidePersonalInfo();
    };

    // the tab that folds out when my name/img is clicked
    let _piContainer = SpawnPersonalInfo(realnamesection);

    //------------------------------------------------
    let middlespace = document.createElement("div");
    middlespace.style = "width: 0; margin: 0 auto;";
    headertab.append(middlespace);
    //------------------------------------------------


    //let contact = SpawnHeaderName(headertab, "contact");
    //contact.onclick = () => {
        
    //}

    let github = SpawnHeaderName(headertab, "github");
    github.onclick = () => {
        window.open("https://github.com/a1-games");
    }


    let linkedin = SpawnHeaderName(headertab, "linkedin");
    linkedin.onclick = () => {
        window.open("https://www.linkedin.com/in/a1creator/");
    }


    SpawnSpace(headertab);
    


}

SpawnHeader();















