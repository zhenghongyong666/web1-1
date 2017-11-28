window.onload=function()
{
	var interval;
	var a=document.getElementById("picScroll");
	var b=document.getElementById("picScroll1");
	
	action=function()
	{
	  interval=window.setInterval(changeToLeft,10);
	}

	Clear=function()
	{
		clearInterval(interval);
	}

	function changeToLeft()
	{
		if(a.scrollLeft==b.offsetWidth)
		{
			a.scrollLeft=0;
		}
		else
			a.scrollLeft++;
	}

}
