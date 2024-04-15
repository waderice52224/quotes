const quotesDiv = document.getElementById("quotes");
async function search(authorName){
    const result = await fetch("https://usu-quotes-mimic.vercel.app/api/search?query="+authorName).then((response) => {
        response.json().then((data) => {
            console.log(authorName);
            console.log("i was run");
            for(let i = 0; i < data.results.length; i++){
                // let lastQuotes = document.getElementsByClassName("quote");

                // const size = lastQuotes.length;
                // let temp = [];
    
                // for (let i=0; i< size; i++){
                //     temp.push(lastQuotes[i])
                // }
    
                // for(let i=0; i< temp.length; i++){
                //     temp[i].remove();
                // }

                const currentQuote = document.createElement("div");
                const contentDiv = document.createElement("div");
                const authorDiv = document.createElement("div");
                currentQuote.setAttribute("class", "quote");
                contentDiv.setAttribute("class", "content");
                authorDiv.setAttribute("class", "author");
                contentDiv.innerText = data.results[i].content;
                authorDiv.innerText = data.results[i].author;


                currentQuote.append(contentDiv, authorDiv);
                currentQuote.addEventListener("click", function() {
                    if (currentQuote.classList.contains("quote")){
                        currentQuote.classList.add('quotePinned');
                        currentQuote.classList.remove('quote');
                    }else{
                        currentQuote.classList.remove('quotePinned');
                        currentQuote.classList.add('quote');
                    }
                  });

                quotesDiv.appendChild(currentQuote);
            }

            
        
        })
    });
}
function runSearch(){
    let searchValue = document.getElementById("searchInput").value;
    search(searchValue);
}
