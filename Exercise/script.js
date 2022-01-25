/* JavaScript DOM Exercises 01 */

/*---------------------------------------------------------------
Exercise 01
-----------
Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
----------------------------------------------------------------*/
let p = document.querySelector("p");
p.innerHTML = p.innerHTML
  .split(" ")
  .map((word) => {
    let span = document.createElement("span");
    // span.setAttribute("style", "background-color: pink");
    if (word.length > 8) {
      span.innerHTML = word;
      console.log(span);
      console.log(word);

      // ↓ここをどうにかする
      // p.innerHTML.replace(word, span);
      return `<span style="background-color:pink">${word}</span>`;
    } else {
      return word;
    }
  })
  .join(" ");
/*------------------------------------------------------------------
Exercise 02
-----------
Add a link back to the source of the text after the paragraph tag.
(http://officeipsum.com/)
-------------------------------------------------------------------*/
const a = document.createElement("a");
a.setAttribute("href", "https://www.yahoo.co.jp");
console.log(a);
a.innerText = "https://www.yahoo.co.jp";
p.after(a);

/*------------------------------------------------------------------
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
--------------------------------------------------------------------*/
p.innerHTML = p.innerHTML.replaceAll(".", "<br>");

/* ------------------------------------------------------------------
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
---------------------------------------------------------------------*/
const eachWord01 = p.textContent.trim().split(" ");
console.log(eachWord01.length);
p.before(eachWord01.length);


/*---------------------------------------------------------------
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
-----------------------------------------------------------------*/
p.innerHTML = p.innerHTML.replaceAll("?", "🤔").replaceAll("!", "😲");
// p.innerHTML = p.innerHTML.replaceAll("!", "😲");
