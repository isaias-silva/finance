import style from 'styled-components'

export const Sheader = style.div`
header,footer{
background: black; 
color: yellow;
margin:0;
position:absolute;
width:100%;

}
header h1{
font-size:18px;
}
footer{bottom:0;}
header{top:0;}
`

export const Sconteudo = style.div`
margin:0;
padding:0;
background:#000;

`
export const Sform = style.div`
width:100vw;
height:100vh;
background-image:url("https://images.alphacoders.com/243/thumb-1920-24313.jpg");
background-size:cover;
display:flex;
justify-content: center;
align-items: center;

    form{
        width:50%;
        height:300px;
        background:  #ff19;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        input,select{height:30px;
        
        }
    }

   


`