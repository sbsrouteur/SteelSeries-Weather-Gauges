


function GetPMLevel(pm,thresholds)
{
	let RetIdx = 0;
	
	while (RetIdx < thresholds.length)
	{
		if (pm <=thresholds[RetIdx])
		{
			return RetIdx;
		}
		RetIdx++;
	}
	
	return RetIdx;
}

function GetIndexValue(CurValue,CurIndex,Thresholds)
{
	let IndexStep=[0,25,50,75,100]
	if (CurIndex == IndexStep.length)
	{
		CurIndex--;
	}
	
	if (CurIndex == 0)
	{
		return "N/A";
	}
	else
	{
		let RetVal= IndexStep[CurIndex]+((CurValue-Thresholds[CurIndex])/(Thresholds[CurIndex]-Thresholds[CurIndex-1])*(IndexStep[CurIndex]-IndexStep[CurIndex-1]));
		RetVal = Math.round(RetVal*10)/10;
		return RetVal;
	}
}

function UpdateAQIDisplay()
{
	let Box = $("#AQIBox");
	let AQIValue = $("#AQIValue");
	let CurPM2_5 = 0;
	let CurPM10 = 0;

	let Pm25Thresholds=[0,15,30,55,110];
	let Pm10Thresholds=[0,25,50,90,180];
	let MaxIdx = Pm10Thresholds.length;
	
	let Colors=["#dcdcdc","#25FF00","#bbcf4c","#eec20b","#f29305","#960018",];
	
	if (typeof gauges !== "undefined" && gauges.currentData)
	{
		CurPM2_5=gauges.currentData().Avg1hPM25;//_1h_Avg;
		CurPM10=gauges.currentData().Avg1hPM10;//_1h_Avg;
		
		let Idx25 = GetPMLevel(CurPM2_5,Pm25Thresholds);
		let Idx10 = GetPMLevel(CurPM10,Pm10Thresholds);
		let IdxText25 = GetIndexValue(CurPM2_5,Idx25,Pm25Thresholds);
		let IdxText10 = GetIndexValue(CurPM10,Idx10,Pm10Thresholds);
		let Idx = Idx25;
		let IdxText=IdxText25 ;
		if (Idx10 > Idx25)
		{
			Idx=Idx10;
		}
		
		if (IdxText10 > IdxText25)
		{
			IdxText = IdxText10;
		}
		Box.css("backgroundColor",Colors[Idx]);
		
		AQIValue.html(IdxText);
	}
	else
	{
		AQIValue.html("N / A");
	}
	
}