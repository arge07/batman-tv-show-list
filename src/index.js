
 

    $(document).ready(function () {   
 
            
            try {
                $.ajax({
                    url: 'http://api.tvmaze.com/search/shows?q=batman',   
                    type: 'GET',
                    dataType: 'json',
                    beforeSend: function () {
                        
                    },
                    success: function (data) { 

                        $.each(data, function (key, item) {
                            let rowHtml =  ListContent(item.show); 
                             $("#MainList").append(rowHtml); 
                        });

                    },
                    error: function (hata, ajaxOptions, thrownError) {
                        alert(hata);
                    }
                });
            }
            catch (e) {
                alert(e);
            }

        }); 

      

 
 

function ListContent(rowItem) {

    let Html = "<div class='col-md-12 List_row row'>"
    Html += "<div class='col-md-3 text-center'><img src='"+rowItem.image.medium+"' /></div>"
    Html += "<div class='col-md-9'>"
    Html += "<div class='col-md-12'><a href='#'  onclick='DispayDetail("+rowItem.id+");'>"+rowItem.name+"</a></div>"
    Html += "<div class='col-md-12'> <span class='text-primary'>premiered:</span> "+rowItem.premiered+"</div>"
    Html += "<div class='col-md-12'> <span class='text-primary'>type:</span> "+rowItem.type+"</div>"
    Html += "<div class='col-md-12'> <span class='text-primary'>rating:</span> "+rowItem.rating.average+"</div>"
    Html += "</div>"
    Html += "</div>"
    return Html ;
}
 
function DispayDetail(id)
{

    try {
        $.ajax({
            url: 'http://api.tvmaze.com/shows/'+id,   
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {
                
            },
            success: function (data) { 

                 
                    $("#Main").toggleClass("display_none");
                    $("#Detail").toggleClass("display_block");
                    $("#Detail").append(DetailContent(data));

            },
            error: function (hata, ajaxOptions, thrownError) {
                alert(hata);
            }
        });
    }
    catch (e) {
        alert(e);
    }
}


function DetailContent(rowItem) {

    let Html = "<div class='container'>"
    Html += "<div class='row border p-3 rounded'>"
    Html += "<div class='col-md-12'>"
    Html += "<h1 class='bg-danger text-white rounded pl-2'>"+rowItem.name+"</h1>"
    Html += "</div>" 
    
    Html += "<div class='col-md-4'>" 
    Html += "<img src='"+rowItem.image.medium+"' />"
    Html += "</div>"
    
    Html += "<div class='col-md-8'>" 
    Html += "<p>"+rowItem.summary+"</p>"
    Html += "</div>"

    Html += "<div class='col-md-12 m-t-10'>"
    Html += "<a href='index.html' class='btn btn-outline-warning float-right'>GERİ DÖN</a>"
    Html += "</div>" 
    

    Html += "</div>"
    Html += "</div>" 
    return Html ;
}

