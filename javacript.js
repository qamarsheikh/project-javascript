/************************************
 * JAVASCRIPT MASTER PORTAL – FULL UI
 ************************************/

/* ========== GLOBAL STYLES ========== */
document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Tahoma, sans-serif";
document.body.style.background = "#f4f7f6";

/* ========== HEADER / NAV ========== */
const nav = document.createElement("nav");
nav.style.cssText = `
  background:#2c3e50;
  padding:15px 50px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:sticky;
  top:0;
  z-index:2000;
  box-shadow:0 2px 10px rgba(0,0,0,0.2);
`;
document.body.appendChild(nav);

/* LOGO */
const logo = document.createElement("div");
logo.textContent = "My Project";
logo.style.cssText = `
  color:#4CAF50;
  font-size:24px;
  font-weight:bold;
  cursor:pointer;
`;
logo.onclick = () => showSection("home");
nav.appendChild(logo);

/* MENU ICON */
const menuIcon = document.createElement("div");
menuIcon.innerHTML = "&#9776;";
menuIcon.style.cssText = `
  color:white;
  font-size:28px;
  cursor:pointer;
  user-select:none;
`;
nav.appendChild(menuIcon);

/* DESKTOP MENU */
const menuContainer = document.createElement("div");
menuContainer.style.cssText = `
  display:flex;
  gap:25px;
`;
nav.appendChild(menuContainer);

const menus = ["Home", "Chapters", "About Me", "Contact"];
menus.forEach(item => {
  const link = document.createElement("span");
  link.textContent = item;
  link.style.cssText = `
    color:white;
    cursor:pointer;
    font-weight:500;
  `;
  link.onmouseover = () => link.style.color = "#4CAF50";
  link.onmouseout = () => link.style.color = "white";
  link.onclick = () => showSection(item.toLowerCase().replace(/\s/g, ""));
  menuContainer.appendChild(link);
});

/* ========== SIDE MENU ========== */
const sideMenu = document.createElement("div");
sideMenu.style.cssText = `
  position:fixed;
  top:0;
  left:-260px;
  width:240px;
  height:100%;
  background:#1f2a36;
  color:white;
  padding-top:90px;
  transition:0.35s;
  z-index:3000;
`;
document.body.appendChild(sideMenu);

/* OVERLAY */
const overlay = document.createElement("div");
overlay.style.cssText = `
  position:fixed;
  inset:0;
  background:rgba(0,0,0,0.45);
  display:none;
  z-index:2500;
`;
document.body.appendChild(overlay);

/* SIDE MENU LINKS */
menus.forEach(item => {
  const link = document.createElement("div");
  link.textContent = item;
  link.style.cssText = `
    padding:16px 20px;
    border-bottom:1px solid #34495e;
    cursor:pointer;
  `;
  link.onclick = () => {
    showSection(item.toLowerCase().replace(/\s/g, ""));
    closeMenu();
  };
  link.onmouseover = () => link.style.background = "#34495e";
  link.onmouseout = () => link.style.background = "transparent";
  sideMenu.appendChild(link);
});

/* MENU TOGGLE */
let menuOpen = false;
function openMenu() {
  sideMenu.style.left = "0";
  overlay.style.display = "block";
  menuOpen = true;
}
function closeMenu() {
  sideMenu.style.left = "-260px";
  overlay.style.display = "none";
  menuOpen = false;
}
menuIcon.onclick = () => menuOpen ? closeMenu() : openMenu();
overlay.onclick = closeMenu;

/* 3. MAIN CONTAINER */
const main = document.createElement("main");
main.style.cssText = "max-width:1100px; margin:40px auto; padding:20px; min-height:70vh;";
document.body.appendChild(main);

const sections = {};
["home", "chapters", "aboutme", "contact", "source"].forEach(id => {
    const s = document.createElement("section");
    s.style.display = id === "home" ? "block" : "none";
    main.appendChild(s);
    sections[id] = s;
});

/* --- A. HOME SECTION --- */
sections.home.innerHTML = `
    <div style="text-align:center; padding:80px 20px; background:white; border-radius:15px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
        <h1 style="font-size:42px; color:#2c3e50; margin-bottom:10px;"></h1>
        <p style="font-size:20px; color:#666;"></p>
        <button style="padding:15px 45px; background:#4CAF50; color:white; border:none; border-radius:50px; font-size:18px; cursor:pointer; font-weight:bold; margin-top:25px; transition:0.3s;" 
        onclick="showSection('chapters')" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Click </button>
    </div>
`;

/* --- B. ABOUT ME & CONTACT (Backround Color & Styles lagu daray) --- */
sections.aboutme.innerHTML = `
    <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding:60px 20px; border-radius:20px; box-shadow:0 15px 35px rgba(0,0,0,0.2); text-align:center; color: white;">
        
        <div style="position: relative; display: inline-block;">
            <img src="image/WhatsApp Image 2025-12-19 at 15.12.59_ade1559e.jpg" alt="Qamar Profile" 
                 onerror="this.src='https://via.placeholder.com/150'"
                 style="width:160px; height:160px; border-radius:50%; border:6px solid #4CAF50; margin-bottom:20px; object-fit:cover; box-shadow: 0 0 20px rgba(76,175,80,0.4);">
        </div>
        
        <h2 style="color:#4CAF50; font-size: 32px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Qamar Profile</h2>
        <p style="font-style: italic; color: #bdc3c7; margin-bottom: 30px;"></p>

        <div style="text-align:left; max-width:550px; margin:0 auto; line-height:1.9; background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">Name:</strong> Qamar Abdullahi Adam</p>
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">ID:</strong> CS1500983</p> 
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">Phone:</strong> 061 9566761</p> 
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">University:</strong> Jazeera University</p>
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">Class:</strong> B15B</p>  
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">Gmail:</strong> qamarclaahi161@gmail.com</p>
            <p style="margin: 10px 0;"><strong style="color:#4CAF50;">My Skills:</strong> Graphic Designer, Tailor, Beauty Salon , Web Developer , </p>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
            <p style="font-size: 15px; color: #ecf0f1; text-align: center;">Ciwanada Projectiga: Objects, DOM, iyo Events.</p>
        </div>

        <div style="margin-top:40px; display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
            <a href="https://daludug.com/contact/" target="_blank" style="text-decoration:none; padding:14px 28px; background:#e67e22; color:white; border-radius:50px; font-weight:bold; transition: 0.3s; box-shadow: 0 4px 15px rgba(230,126,34,0.3);">Daludug Contact</a>
            <a href="https://hubaaltravel.com/flights" target="_blank" style="text-decoration:none; padding:14px 28px; background:#3498db; color:white; border-radius:50px; font-weight:bold; transition: 0.3s; box-shadow: 0 4px 15px rgba(52,152,219,0.3);">Hubaal Flights</a>
            <a href="#" target="_blank" style="text-decoration:none; padding:14px 28px; background:#4CAF50; color:white; border-radius:50px; font-weight:bold; transition: 0.3s; box-shadow: 0 4px 15px rgba(76,175,80,0.3);">GitHub</a>
        </div>
    </div>
`;




 
/* --- C. SOURCE SECTION --- */
let lastUsedCode = "Fadlan marka hore dooro tusaale ku jira qeybta Chapters.";
const updateSourceUI = () => {
    sections.source.innerHTML = `
        <div style="background:#1e1e1e; color:#d4d4d4; padding:30px; border-radius:12px; font-family:'Consolas', monospace; line-height:1.6; overflow-x:auto; position:relative;">
            <div style="position:absolute; top:10px; right:20px; color:#4CAF50; font-size:12px;">JavaScript Code</div>
            <h2 style="color:#4CAF50; margin-top:0;">// Source Code Viewer</h2>
            <pre style="white-space: pre-wrap; font-size:15px;">${lastUsedCode}</pre>
        </div>
    `;
};
updateSourceUI();

/* --- D. CHAPTERS LOGIC --- */
const exampleGrid = document.createElement("div");
exampleGrid.style.cssText = "display:grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap:15px; margin:30px 0;";
const displayResult = document.createElement("div");

function renderChapters() {
    sections.chapters.innerHTML = "<h2 style='text-align:center; color:#2c3e50; margin-bottom:30px;'>Dooro Cutubka aad rabto</h2>";
    const chData = [
        { id: 7, title: "Chapter 7: Objects", color: "#2196F3" },
        { id: 8, title: "Chapter 8: DOM", color: "#FF9800" },
        { id: 9, title: "Chapter 9: Events", color: "#e51c77ff" }
    ];
    
    const btnBox = document.createElement("div");
    btnBox.style.cssText = "display:flex; gap:15px; justify-content:center; flex-wrap:wrap;";
    
    chData.forEach(ch => {
        const b = document.createElement("button");
        b.textContent = ch.title;
        b.style.cssText = `padding:18px; background:white; border:none; border-bottom:5px solid ${ch.color}; cursor:pointer; font-weight:bold; flex:1; min-width:200px; box-shadow:0 4px 6px rgba(0,0,0,0.05); transition:0.3s;`;
        b.onclick = () => {
            exampleGrid.innerHTML = "";
            displayResult.innerHTML = "";
            for(let i=1; i<=12; i++) {
                const exBtn = document.createElement("button");
                exBtn.textContent = `Ex ${i}`;
                exBtn.style.cssText = `padding:12px; background:${ch.color}; color:white; border:none; border-radius:6px; cursor:pointer; font-weight:bold; transition:0.2s;`;
                exBtn.onclick = () => runFullLogic(ch.id, i, ch.color);
                exampleGrid.appendChild(exBtn);
            }
        };
        btnBox.appendChild(b);
    });
    sections.chapters.append(btnBox, exampleGrid, displayResult);
}

/* 4. THE CORE LOGIC: 36 FUNCTIONAL EXAMPLES */
function runFullLogic(chap, ex, color) {
    displayResult.innerHTML = "";
    const box = document.createElement("div");
    box.style.cssText = `background:white; padding:30px; border-left:10px solid ${color}; border-radius:12px; box-shadow:0 8px 20px rgba(0,0,0,0.08); animation: slideIn 0.4s ease-out;`;
    const area = document.createElement("div");
    area.style.marginTop = "20px";

    let codeSnippet = "";

    // CHAPTER 7 LOGIC
  if (chap === 7) {
    let user = {
        name: "Qamar",
        role: "Developer",
        city: "Hargeisa",
        age: 22,
        active: true
    };

    if (ex === 1) { area.textContent = "Object Literal: " + JSON.stringify(user); codeSnippet = "const user = { name:'Qamar', role:'Developer' };"; }
    else if (ex === 2) { area.textContent = "Access name: " + user.name; codeSnippet = "user.name;"; }
    else if (ex === 3) { area.textContent = "Access role: " + user['role']; codeSnippet = "user['role'];"; }
    else if (ex === 4) { area.textContent = "Keys: " + Object.keys(user).join(", "); codeSnippet = "Object.keys(user);"; }
    else if (ex === 5) { area.textContent = "Values: " + Object.values(user).join(", "); codeSnippet = "Object.values(user);"; }
    else if (ex === 6) { area.textContent = "Entries: " + JSON.stringify(Object.entries(user)); codeSnippet = "Object.entries(user);"; }
    else if (ex === 7) { user.country = "Somalia"; area.textContent = JSON.stringify(user); codeSnippet = "user.country = 'Somalia';"; }
    else if (ex === 8) { delete user.city; area.textContent = JSON.stringify(user); codeSnippet = "delete user.city;"; }
    else if (ex === 9) { area.textContent = "Has role? " + user.hasOwnProperty("role"); codeSnippet = "user.hasOwnProperty('role');"; }
    else if (ex === 10) { area.textContent = "'age' in user: " + ('age' in user); codeSnippet = "'age' in user;"; }

    else if (ex === 11) { area.textContent = "Key count: " + Object.keys(user).length; codeSnippet = "Object.keys(user).length;"; }
    else if (ex === 12) { area.textContent = "JSON: " + JSON.stringify(user); codeSnippet = "JSON.stringify(user);"; }
    else if (ex === 13) { let copy = Object.assign({}, user); area.textContent = JSON.stringify(copy); codeSnippet = "Object.assign({}, user);"; }
    else if (ex === 14) { let clone = { ...user }; area.textContent = JSON.stringify(clone); codeSnippet = "{ ...user };"; }
    else if (ex === 15) { area.textContent = "Is Frozen: " + Object.isFrozen(user); codeSnippet = "Object.isFrozen(user);"; }
    else if (ex === 16) { Object.freeze(user); area.textContent = "Frozen Object"; codeSnippet = "Object.freeze(user);"; }
    else if (ex === 17) { area.textContent = "Is Sealed: " + Object.isSealed(user); codeSnippet = "Object.isSealed(user);"; }
    else if (ex === 18) { let u = {a:1}; Object.seal(u); area.textContent = "Sealed demo"; codeSnippet = "Object.seal(obj);"; }
    else if (ex === 19) { area.textContent = "Type: " + typeof user; codeSnippet = "typeof user;"; }
    else if (ex === 20) { area.textContent = "String Object: " + user.toString(); codeSnippet = "user.toString();"; }

    else if (ex === 21) { user.sayHi = function(){ return 'Hi ' + this.name; }; area.textContent = user.sayHi(); codeSnippet = "user.sayHi = function(){};"; }
    else if (ex === 22) { area.textContent = "This keyword: " + user.name; codeSnippet = "this.name;"; }
    else if (ex === 23) { let keys = ""; for(let k in user){ keys += k + " "; } area.textContent = keys; codeSnippet = "for (let k in user) {}"; }
    else if (ex === 24) { area.textContent = "Object.create demo"; codeSnippet = "Object.create(proto);"; }
    else if (ex === 25) { area.textContent = "Age exists? " + ("age" in user); codeSnippet = "'age' in user;"; }

    else if (ex === 26) { let person = new Object(); person.name="Ali"; area.textContent = JSON.stringify(person); codeSnippet = "new Object();"; }
    else if (ex === 27) { area.textContent = "Constructor: " + user.constructor.name; codeSnippet = "user.constructor;"; }
    else if (ex === 28) { let nested = {car:{brand:'Toyota',year:2024}}; area.textContent = nested.car.brand; codeSnippet = "obj.car.brand;"; }
    else if (ex === 29) { area.textContent = "Boolean prop: " + user.active; codeSnippet = "user.active;"; }
    else if (ex === 30) { area.textContent = "Update age"; user.age++; codeSnippet = "user.age++;"; }

    else if (ex === 31) { let arrObj = [{id:1},{id:2}]; area.textContent = arrObj.length; codeSnippet = "[{},{ }];"; }
    else if (ex === 32) { area.textContent = "Compare objects: false"; codeSnippet = "obj1 === obj2;"; }
    else if (ex === 33) { let o = {x:1,y:2}; area.textContent = o.x + o.y; codeSnippet = "o.x + o.y;"; }
    else if (ex === 34) { area.textContent = "Math in object: " + Math.max(2,5); codeSnippet = "Math.max();"; }
    else if (ex === 35) { area.textContent = "Date Object: " + new Date().toDateString(); codeSnippet = "new Date();"; }

    else if (ex === 36) { let f = Object.fromEntries([['a',1],['b',2]]); area.textContent = JSON.stringify(f); codeSnippet = "Object.fromEntries();"; }
    else if (ex === 37) { area.textContent = "Prevent Extensions"; Object.preventExtensions(user); codeSnippet = "Object.preventExtensions(obj);"; }
    else if (ex === 38) { area.textContent = "Is Extensible: " + Object.isExtensible(user); codeSnippet = "Object.isExtensible(obj);"; }
    else if (ex === 39) { let desc = Object.getOwnPropertyNames(user); area.textContent = desc.join(", "); codeSnippet = "Object.getOwnPropertyNames();"; }
    else if (ex === 40) { area.textContent = "END OF 40 OBJECT EXAMPLES ✅"; codeSnippet = "// Chapter 7 Completed"; }
}

// CHAPTER 8 – DOM (40 EXAMPLES)
else if (chap === 8) {

    if (ex === 1) {
        area.innerHTML = "<h2 id='dom_h2'>Text-ga Bedel</h2>";
        const b = document.createElement("button");
        b.textContent = "Bedel";
        b.onclick = () => document.getElementById('dom_h2').style.color = "red";
        area.appendChild(b);
        codeSnippet = "element.style.color = 'red';";
    }

    else if (ex === 2) {
        const d = document.createElement("div");
        d.style.cssText = "width:100%;height:40px;background:blue;border-radius:5px;";
        area.appendChild(d);
        codeSnippet = "document.createElement('div');";
    }

    else if (ex === 3) {
        area.innerHTML = "<input id='dom_in' placeholder='Qor wax...'>";
        const b = document.createElement("button");
        b.textContent = "Alert";
        b.onclick = () => alert(document.getElementById("dom_in").value);
        area.appendChild(b);
        codeSnippet = "alert(input.value);";
    }

    else if (ex === 4) {
        area.style.padding = "20px";
        area.style.backgroundColor = "#eee";
        area.textContent = "Box styled via JS";
        codeSnippet = "element.style.backgroundColor";
    }

    else if (ex === 5) {
        area.innerHTML = "<img id='img1' src='https://via.placeholder.com/100'>";
        codeSnippet = "img.src = 'url'";
    }

    else if (ex === 6) {
        area.innerHTML = "<p id='p1'>Tirtir</p>";
        const b = document.createElement("button");
        b.textContent = "Delete";
        b.onclick = () => document.getElementById("p1").remove();
        area.appendChild(b);
        codeSnippet = "element.remove()";
    }

    else if (ex === 7) {
        area.textContent = "Hostname: " + window.location.hostname;
        codeSnippet = "window.location.hostname";
    }

    else if (ex === 8) {
        area.innerHTML = "<p class='q'>Query Selector</p>";
        document.querySelector(".q").style.fontWeight = "bold";
        codeSnippet = "document.querySelector()";
    }

    else if (ex === 9) {
        area.textContent = "Children count: " + document.body.children.length;
        codeSnippet = "document.body.children.length";
    }

    else if (ex === 10) {
        area.innerHTML = "<div style='color:green'>InnerHTML</div>";
        codeSnippet = "element.innerHTML";
    }

    else if (ex === 11) {
        area.textContent = "Browser: " + navigator.userAgent;
        codeSnippet = "navigator.userAgent";
    }

    else if (ex === 12) {
        const btn = document.createElement("button");
        btn.textContent = "Click Me";
        btn.addEventListener("click", () => alert("Clicked"));
        area.appendChild(btn);
        codeSnippet = "addEventListener";
    }

    else if (ex === 13) {
        area.innerHTML = "<p id='c1'>Class Test</p>";
        document.getElementById("c1").classList.add("active");
        codeSnippet = "classList.add";
    }

    else if (ex === 14) {
        area.innerHTML = "<p id='c2' class='on'>Toggle</p>";
        const b = document.createElement("button");
        b.textContent = "Toggle";
        b.onclick = () => document.getElementById("c2").classList.toggle("on");
        area.appendChild(b);
        codeSnippet = "classList.toggle";
    }

    else if (ex === 15) {
        area.textContent = "Screen Width: " + screen.width;
        codeSnippet = "screen.width";
    }

    else if (ex === 16) {
        area.textContent = "Scroll Y: " + window.scrollY;
        codeSnippet = "window.scrollY";
    }

    else if (ex === 17) {
        area.innerHTML = "<input id='f1'>";
        document.getElementById("f1").focus();
        codeSnippet = "element.focus()";
    }

    else if (ex === 18) {
        area.innerHTML = "<input id='b1' value='Disabled'>";
        document.getElementById("b1").disabled = true;
        codeSnippet = "input.disabled = true";
    }

    else if (ex === 19) {
        area.innerHTML = "<p id='t1'>Hidden</p>";
        document.getElementById("t1").style.display = "none";
        codeSnippet = "style.display='none'";
    }

    else if (ex === 20) {
        area.textContent = "Title: " + document.title;
        codeSnippet = "document.title";
    }

    else if (ex === 21) {
        document.title = "DOM Example";
        area.textContent = "Title changed";
        codeSnippet = "document.title = ''";
    }

    else if (ex === 22) {
        area.innerHTML = "<p id='m1'>Mouse Over</p>";
        document.getElementById("m1").onmouseover = () => alert("Hover");
        codeSnippet = "onmouseover";
    }

    else if (ex === 23) {
        area.innerHTML = "<input id='k1'>";
        document.getElementById("k1").onkeyup = () => area.style.background = "#ddd";
        codeSnippet = "onkeyup";
    }

    else if (ex === 24) {
        area.innerHTML = "<form id='f'><button>Submit</button></form>";
        document.getElementById("f").onsubmit = e => { e.preventDefault(); alert("Stopped"); };
        codeSnippet = "event.preventDefault()";
    }

    else if (ex === 25) {
        area.textContent = "Online: " + navigator.onLine;
        codeSnippet = "navigator.onLine";
    }

    else if (ex === 26) {
        area.textContent = "Language: " + navigator.language;
        codeSnippet = "navigator.language";
    }

    else if (ex === 27) {
        area.innerHTML = "<p id='r1'>Replace</p>";
        document.getElementById("r1").textContent = "Replaced Text";
        codeSnippet = "textContent";
    }

    else if (ex === 28) {
        area.innerHTML = "<div id='a1'></div>";
        document.getElementById("a1").setAttribute("title", "Tooltip");
        codeSnippet = "setAttribute";
    }

    else if (ex === 29) {
        area.textContent = "Has focus: " + document.hasFocus();
        codeSnippet = "document.hasFocus()";
    }

    else if (ex === 30) {
        area.textContent = "Ready State: " + document.readyState;
        codeSnippet = "document.readyState";
    }

    else if (ex === 31) {
        const p = document.createElement("p");
        p.textContent = "Append Child";
        area.appendChild(p);
        codeSnippet = "appendChild";
    }

    else if (ex === 32) {
        area.innerHTML = "<p>Before</p>";
        area.insertAdjacentHTML("beforeend", "<p>After</p>");
        codeSnippet = "insertAdjacentHTML";
    }

    else if (ex === 33) {
        area.textContent = "Time: " + new Date().toLocaleTimeString();
        codeSnippet = "new Date()";
    }

    else if (ex === 34) {
        area.innerHTML = "<input id='c' type='checkbox'>";
        codeSnippet = "input.checked";
    }

    else if (ex === 35) {
        area.textContent = "History length: " + history.length;
        codeSnippet = "history.length";
    }

    else if (ex === 36) {
        area.innerHTML = "<button onclick='history.back()'>Back</button>";
        codeSnippet = "history.back()";
    }

    else if (ex === 37) {
        area.textContent = "Viewport Height: " + window.innerHeight;
        codeSnippet = "window.innerHeight";
    }

    else if (ex === 38) {
        area.textContent = "Viewport Width: " + window.innerWidth;
        codeSnippet = "window.innerWidth";
    }

    else if (ex === 39) {
        area.innerHTML = "<button onclick='location.reload()'>Reload</button>";
        codeSnippet = "location.reload()";
    }

    else if (ex === 40) {
        area.textContent = "END OF CHAPTER 8 – DOM ✅";
        codeSnippet = "// Chapter 8 Completed";
    }
}


    // CHAPTER 9 LOGIC (EVENTS)
    else if (chap === 9) {
        const btn = document.createElement("button"); btn.style.padding="12px 20px"; btn.style.cursor="pointer";
        if (ex === 1) { btn.textContent = "Click Me"; btn.onclick = () => alert("Success!"); codeSnippet = "btn.onclick = () => alert('Clicked');"; }
        else if (ex === 2) { btn.textContent = "Hover Me"; btn.onmouseover = () => btn.style.background = "gold"; btn.onmouseout = () => btn.style.background = ""; codeSnippet = "btn.onmouseover = ..."; }
        else if (ex === 3) { btn.textContent = "Double Click"; btn.ondblclick = () => alert("Double!"); codeSnippet = "btn.ondblclick = ..."; }
        else if (ex === 4) { const inp = document.createElement("input"); inp.placeholder="Keydown..."; inp.onkeydown=(e)=>area.lastChild.textContent="Pressed: " + e.key; area.appendChild(inp); area.appendChild(document.createElement("p")); btn.style.display="none"; codeSnippet = "inp.onkeydown = (e) => ..."; }
        else if (ex === 5) { btn.textContent = "Context Menu (Right Click)"; btn.oncontextmenu = (e) => { e.preventDefault(); alert("Right Clicked!"); }; codeSnippet = "btn.oncontextmenu = ..."; }
        else if (ex === 6) { const inp = document.createElement("input"); inp.placeholder="Focus..."; inp.onfocus=()=>inp.style.border="2px solid red"; area.appendChild(inp); btn.style.display="none"; codeSnippet = "inp.onfocus = ..."; }
        else if (ex === 7) { btn.textContent = "Mouse Down"; btn.onmousedown = () => btn.style.transform="scale(0.9)"; btn.onmouseup = () => btn.style.transform="scale(1)"; codeSnippet = "btn.onmousedown = ..."; }
        else if (ex === 8) { const inp = document.createElement("input"); inp.placeholder="Blur Event..."; inp.onblur=()=>alert("Input lost focus!"); area.appendChild(inp); btn.style.display="none"; codeSnippet = "inp.onblur = ..."; }
        else if (ex === 9) { btn.textContent = "Mouse Enter"; btn.onmouseenter = () => btn.textContent="You entered!"; codeSnippet = "btn.onmouseenter = ..."; }
        else if (ex === 10) { btn.textContent = "Mouse Leave"; btn.onmouseleave = () => btn.textContent="You left!"; codeSnippet = "btn.onmouseleave = ..."; }
        else if (ex === 11) { const sel = document.createElement("select"); sel.innerHTML="<option>Change Me</option><option>Val 1</option>"; sel.onchange=()=>alert("Changed!"); area.appendChild(sel); btn.style.display="none"; codeSnippet = "sel.onchange = ..."; }
        else { btn.textContent = "Print Event"; btn.onclick = () => window.print(); codeSnippet = "window.print();"; }
        area.appendChild(btn);
    }

    lastUsedCode = `// Chapter ${chap}, Example ${ex}\n${codeSnippet}`;
    box.innerHTML = `<h3 style="color:${color}; margin-top:0;">Live Result</h3><hr style="border:0; border-top:1px solid #eee;">`;
    box.appendChild(area);
    displayResult.appendChild(box);
    updateSourceUI(); // Refresh source view
}

/* 5. NAVIGATION HELPER */
function showSection(id) {
    Object.values(sections).forEach(s => s.style.display = "none");
    sections[id].style.display = "block";
    if (id === 'chapters') renderChapters();
    if (id === 'source') updateSourceUI();
}

/* 6. FOOTER */
const footer = document.createElement("footer");
footer.innerHTML = `<div style="background:#2c3e50; color:white; padding:30px; text-align:center; margin-top:50px;">
    <strong>Qamar Sheikh Abdullahi</strong> &copy; 2025
</div>`;
document.body.appendChild(footer);

/* 7. ANIMATIONS */
const styleTag = document.createElement('style');
styleTag.innerHTML = `
    @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    button:active { transform: scale(0.95); }
    pre { background: #252526; padding: 15px; border-radius: 5px; color: #9cdcfe; }

    @media (max-width: 768px) {
      .menu-icon { display:block !important; }

      .menu-container {
        display:none !important;
        position:absolute;
        top:65px;
        right:20px;
        background:#2c3e50;
        padding:15px;
        border-radius:12px;
        box-shadow:0 10px 25px rgba(0,0,0,0.25);
        flex-direction:column;
        gap:12px;
        z-index:2000;
      }

      .menu-container.open { display:flex !important; }
    }
`;
document.head.appendChild(styleTag);