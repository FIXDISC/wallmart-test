function busca(txt){
    txt = txt.toString().trim();
    document.getElementById("res").innerHTML =""
    document.getElementById("txt").innerHTML=txt
    var filtro = data.filter(
        a=>a.description.toLowerCase().indexOf(txt)!==-1 || 
        a.brand.toLowerCase().indexOf(txt)!==-1  ||
        a.id==txt
        );
    //alert(filtro[0].id)
    document.getElementById("count").innerHTML= filtro.length
    if(filtro.length!=0){
        muestra_res(filtro,txt);
    }
}

function muestra_res(res,txt){
    html="";
    poli=[];
    descuento = "";
    precio_ant = "";
    precio="";
    res.map(function(elem){
        if(!polindromo(txt)){
            descuento="";
            precio_ant = "";
            precio = elem.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }else{
            descuento="<div class='descuento'><span>50%</span></div>";
            precio_ant = "<div class='ant'>"+elem.price+"</div>";
            precio0 = Math.round(Number(elem.price)/2);
                precio = precio0.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        };
        if(polindromo(elem.brand)){poli.push(elem.brand);}
        html+=`
        <div id="`+elem.id+`" class="prod">
            <div class="img1">
                <img src="https:\//`+elem.image+`" width="80">
            </div>
            <br>
            <div class="brand">`+elem.brand+`&nbsp;&nbsp;</div>
            <div class="desc">`+elem.description+`</div>
            <br><br>
            <div class="price">$ `+precio+`</div>
            <div style='top:-10px;'>`+descuento+`</div>
            <br><br>
            <div>`+precio_ant+`</div>
            </div>`
        }
    )
    document.getElementById("res") ? document.getElementById("res").innerHTML = html : null
    console.log("POLI:  "+poli)
}

function polindromo(txt){
    txt=txt.toString().toLowerCase();
    return txt == txt.split('').reverse().join('');
}