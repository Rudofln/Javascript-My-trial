const btn = document.getElementById(`change`).addEventListener(`click`,function(){

            const xhr = new XMLHttpRequest();
                  xhr.open(`get`,`https://api.exchangeratesapi.io/latest`);
                  xhr.onload = function(){

                            if(xhr.status==200){
                                const response = JSON.parse(this.responseText);
                                const rate = response.rates.TRY;
                                const amount = document.getElementById(`amount`).value;
                                document.getElementById(`tl`).value = amount * rate ;
                            }

                  }
            xhr.send();

});