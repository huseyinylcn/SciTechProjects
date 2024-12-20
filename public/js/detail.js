
//   const readmeAll = `
// ## 🌟About Me🌟

// <!-- About Me -->

// <p align="center"> 
//     <a href="https://git.io/typing-svg">
//         <img src="https://readme-typing-svg.demolab.com?font=Kaushan Script&size=22&pause=1000&color=ADD8E6&center=true&vCenter=true&repeat=false&width=435&lines=Hi!+I'm+Hüseyin+Yalçın" alt="Typing SVG" />
//         </a>
//     <br>
//     <a href="https://git.io/typing-svg">
//         <img src="https://readme-typing-svg.demolab.com?font=Kaushan Script&size=22&pause=1000&color=ADD8E6&center=true&vCenter=true&width=435&lines=FullStack+Developer;FullStack+Developer" alt="Typing SVG" />
//         </a>
// </p>
// <br>

// - 🌍 I'm based in İstanbul-Edirne

// - 🔭 I’m currently working on **Data Science and Python

// - 🌱 I’m currently learning **Python**, **Pandas**, **Numpy**

// - 📫 How to reach me **hsyndvlpr@gmail.com**

// <h3 align="left">Connect with me:</h3>
// <p align="left" style="display:flex;">
// <a href="www.linkedin.com/in/hsynylcn22" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="fatmaakpunar" height="30" width="40" /></a>
    
// <a href="https://medium.com/@hsynylcn" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="https://medium.com/@hsynylcn" height="30" width="40" /></a>
    


// </p>

// <h3 align="left">Languages and Tools:</h3>
//     <p align="left">
//       <a  rel="noreferrer">
//         <img
//           src="https://angular.io/assets/images/logos/angular/angular.svg"
//           alt="Angular"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a  rel="noreferrer">
//         <img
//           src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
//           alt="Git"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
//           alt="SQL"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"
//           alt="Electron"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
//           alt="Python"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
//           alt="TypeScript"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
//           alt="Javascript"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
//           alt="CSS"
//           width="40"
//           height="40"
//         />
//       </a>
//       <a rel="noreferrer">
//         <img
//           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
//           alt="HTML"
//           width="40"
//           height="40"
//         />
//       </a>
//     </p>
//     <p>


// `;

//   // GitHub API'ye Markdown gönder ve işlenmiş HTML'yi al
//   async function renderMarkdownWithGitHubAPI(markdown) {
//     const response = await fetch("https://api.github.com/markdown", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text: markdown,
//         mode: "gfm", // GitHub Flavored Markdown
//       }),
//     });

//     if (!response.ok) {
//       console.error("Markdown işlenirken hata oluştu:", response.statusText);
//       return;
//     }

//     const html = await response.text();
//     document.getElementById("readmedosyasi").innerHTML = html;
//   }

//   renderMarkdownWithGitHubAPI(readmeAll);
