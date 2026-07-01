 let id = (id) => document.getElementById(id)
 
 let list = id("list"),
     mName = id("movie-name");
  
    let appKey = "ff89ad11";
    let search = "";
    let pNum = 1;

    list.innerHTML = `<h1 class="hand-1">Please search your fav movies</h1>`
 function apiCall() {

    let url = fetch(`https://www.omdbapi.com/?apikey=${appKey}&s=${search}&page=${pNum}`);
    let jData = url.then((z)=> z.json() );

    jData.then((data)=>{
        console.log(data);
         list.innerHTML = "";

        data.Search.forEach((element) => {

            list.innerHTML += `
                <div class="box">
                    <img src="${element.Poster}">
                    <div class="title">
                        <table>
                            <tr>
                                <td>Title</td>
                                <td>:</td>
                                <td>${element.Title}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>:</td>
                                <td>${element.Year}</td>
                            </tr>
                            <tr>
                                <td>imdbID</td>
                                <td>:</td>
                                <td>${element.imdbID}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>:</td>
                                <td>${element.Type}</td>
                            </tr>
                        </table>
                    </div>
                
                       
                    

                </div>
            `;
        })
    }).catch((err)=> {
        console.log(err);
    })

}



  
      let leftSide = () => {
        if(search != ""){
        if(pNum>1){
            pNum--
            apiCall();
        }
    }
    }
    let rightSide = () =>{
        if(search != ""){
        if(pNum>0){
                pNum++
                apiCall();
            }
        }
    }
  
    let searchMovie = () => {
        if(mName.value.trim() != ""){
            search = mName.value;
            apiCall();
        }
    }

