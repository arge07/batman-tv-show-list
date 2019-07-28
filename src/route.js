 
window.onload = function() {


    var activeRoutes = Array.from(document.querySelectorAll('[route]'));
    
    function navigate(event){
    var route = event.target.attributes[0].value;
    var routeInfo = myRouter.routes.filter(function(r) {
      return r.path === route;
    })[0];
    
    if(!routeInfo)
    {
      routeName.innerHTML = "Böyle Bir sayfa Bulunmuyor";
    }
    else if(routeInfo.path === "/Hakkimizda")
    {
    //   routeName.innerHTML = "Şuan Hakkımızda Sayfasındasınız.";
      $("#HomePage").hide();
      $("#About").show();
    } 
    else
    { 
      window.history.pushState({},'name',routeInfo.path);
    //   routeName.innerHTML = "Şuan bu sayfadasınız " + routeInfo.name + ' route' ;

      $("#About").hide();
      $("#HomePage").show();
    }
    
    console.log(routeInfo);
    };
    
    activeRoutes.forEach(function(route) {
      route.addEventListener('click',navigate,false);
    });
    
    
    var Router = function(_name,_routes)
    {
        return {
            name: _name,
            routes: _routes
        }
    };
    
    var myRouter = new Router('myRouter',[
        {
            path: '/',
            name: 'Anasayfa'
        },
        {
            path: '/index',
            name: 'Anasayfa'
        },
        {
            path: '/Hakkimizda',
            name: 'Hakkımızda'
        },
        {
            path: '/Detail',
            name: 'Detay'
        }
    ]);
    var routeName = document.getElementById("routeName");
    var currentPath = window.location.pathname;  
    
    
    if(currentPath === "/index.html")
    {
    //   routeName.innerHTML = "Şuan Anasayfadasınız";
    }
    else {
    
      var root = myRouter.routes.filter(function(r){
        return r.path ==currentPath;
        routeName.innerHTML = root.name;
    })[0]; 
   
    } 
    
    } 