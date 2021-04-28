function verify()
{
    if(document.getElementById('input1').value.length<=4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'none'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
    else if(document.getElementById('input1').value.length>4)
    {
        document.getElementById('btn1_next').style.display = 'block'
        document.getElementById('btn2_next').style.display = 'none'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }

}
function verify1()
{
    if(document.getElementById('input2').value.length<=4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'none'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
    else if(document.getElementById('input2').value.length>4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'block'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
}
function verify2()
{
    if(document.getElementById('input3').value.length<=4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'none'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
    else if(document.getElementById('input3').value.length>4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'block'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
}
function verify3()
{
    if(document.getElementById('input4').value.length<=4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'none'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
    else if(document.getElementById('input4').value.length>4)
    {
        document.getElementById('btn1_next').style.display = 'none'
        document.getElementById('btn2_next').style.display = 'block'
        document.getElementById('btn3_next').style.display = 'none'
        document.getElementById('btn4_next').style.display = 'none'
    }
}

function nextBtn1()
{
    if(document.getElementById('vopros1').style.display = 'block')
    {
        document.getElementById('vopros1').style.display = 'none'
        document.getElementById('vopros2').style.display = 'block'
        document.getElementById('vopros3').style.display = 'none'
        document.getElementById('vopros4').style.display = 'none'
        document.getElementById('vopros5').style.display = 'none'
        document.getElementById('btn1').style.display = 'none'
        document.getElementById('btn2').style.display = 'block'
    }
}

function  nextBtn2()
{
    if (document.getElementById('vopros2').style.display='block')
    {
        document.getElementById('vopros1').style.display = 'none'
        document.getElementById('vopros2').style.display = 'none'
        document.getElementById('vopros3').style.display = 'block'
        document.getElementById('vopros4').style.display = 'none'
        document.getElementById('vopros5').style.display = 'none'
        document.getElementById('btn1').style.display = 'none'
        document.getElementById('btn2').style.display = 'block'
    }
}
function  nextBtn3()
{
    if (document.getElementById('vopros2').style.display='block')
    {
        document.getElementById('vopros1').style.display = 'none'
        document.getElementById('vopros2').style.display = 'none'
        document.getElementById('vopros3').style.display = 'none'
        document.getElementById('vopros4').style.display = 'block'
        document.getElementById('vopros5').style.display = 'none'
        document.getElementById('btn1').style.display = 'none'
        document.getElementById('btn2').style.display = 'block'
    }
}
