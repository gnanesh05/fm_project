function Checkpipe(val)
{
var elements=document.getElementsByClassName('d1');
	if(val=='0'||val=='1')
	{
		for (var i=0;i<elements.length;i++){
         elements[i].style.display = 'none';
           }
	}
	else  
	{
		for (var i=0;i<elements.length;i++){
         elements[i].style.display = 'block';
           }
	}
var elements=document.getElementsByClassName('d2');
	if(val=='0'||val=='1')
	{
		for (var i=0;i<elements.length;i++){
         elements[i].style.display = 'none';
           }
	 }
	else  
		 {
		for (var i=0;i<elements.length;i++){
         elements[i].style.display = 'block';
           }
	}
}

function Checktype(val)
{
var element1=document.getElementById('a1');
	if(val=='1'||val=='2')
		element1.style.display='block';
	else  
		element1.style.display='none';
var element=document.getElementById('a2');
	if(val=='1'||val=='2')
		element.style.display='block';
	else  
		element.style.display='none'; 
}
			
			

function show1(){
  document.getElementById('pumpcheck').style.display ='block';
}
function show2(){
  document.getElementById('pumpcheck').style.display = 'none';
}

function show3(){
	
  document.getElementById('fittings').style.display ='block';
	
}
function show4(){
  document.getElementById('fittings').style.display = 'none';
   
}

function show5(){
	
   document.getElementById('fittings1').style.display ='block';
}
function show6(){
   document.getElementById('fittings1').style.display = 'none';
}

 function fittings(){
	 var member ={};
     // Number of inputs to create
     var number = document.getElementById("nof").value;
	 
    // Container <div> where dynamic content will be placed
     var container = document.getElementById("container");

     // Clear previous contents of the container
      while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
	 
            
     for (i=0;i<number;i++){
      // Append a node with a random text
       
      // Create an <input> element, set its type and name attributes
        /* var input = document.createElement("input");
         input.type = "text";
         input.name = "member" + i;
		 input.className = "form-control";*/
		  var label = document.createElement("label")
		  var input = document.createElement("select");
		  var newOption1 = document.createElement('option');
		  var newOption2 = document.createElement('option');
		  var newOption3 = document.createElement('option');
		  var newOption4 = document.createElement('option');
		  var newOption5 = document.createElement('option');
		  var newOption6 = document.createElement('option');
		  var newOption7 = document.createElement('option');
		  var newOption8 = document.createElement('option');
		  var newOption9 = document.createElement('option');
		  var newOption10 = document.createElement('option');
		  var newOption11= document.createElement('option');
		  var newOption12 = document.createElement('option');
		  var newOption13 = document.createElement('option');
		 
		 var optionText = document.createTextNode('type');
// set option text
          //newOption.appendChild(optionText);
		 newOption1 = new Option(' select','0');
		 newOption2 = new Option(' sudden contraction','1');
		 newOption3 = new Option(' sudden expansion','2');
		 newOption4 = new Option(' global valve','10');
		 newOption5 = new Option(' angle valve','5');
		 newOption6 = new Option(' gate valve','0.2');
		 newOption7 = new Option(' short radius','0.9');
		 newOption8 = new Option(' medium radius','0.8');
		 newOption9 = new Option(' 45inch elbow','0.4');
		 newOption10 = new Option(' short tee','0.6');
		 newOption11 = new Option(' standard tee','1.8');
		 newOption12 = new Option(' square entrance','0.5');
		 newOption13 = new Option(' exit','12');
		 
		// newOption.setAttribute('value','Option Value');
		 
		 input.appendChild(newOption1);
		 input.appendChild(newOption2);
		 input.appendChild(newOption3);
		 input.appendChild(newOption4);
		 input.appendChild(newOption5);
		 input.appendChild(newOption6);
		 input.appendChild(newOption7);
		 input.appendChild(newOption8);
		 input.appendChild(newOption9);
		 input.appendChild(newOption10);
		 input.appendChild(newOption11);
		 input.appendChild(newOption12);
		 input.appendChild(newOption13);
		 label.appendChild(document.createTextNode("fitting" + (i+1)));
      
         input.name ="member";
		 input.className = "form-control";
		 
		 input.onchange = function(val=this.value){
			// console.log("working");
			// var val = document.getElementById('type1');
			 //console.log("working");
			 val=val.srcElement.options.selectedIndex
			 //console.log(val); 
			 var element1=document.getElementById('a1');
			 var element2=document.getElementById('a2');
			     if(val=='1')
		          { element1.style.display='block';
			       element2.style.display='block'; }
	             
             var element3=document.getElementById('a13');
			 var element4=document.getElementById('a23');
	             if(val=='2')
				 {element3.style.display='block';
				  element4.style.display='block'; }

			 
		      }
		

		 
         container.appendChild(label);
         container.appendChild(input);
		 
         //container.appendChild(input);
         // Append a line break 
         container.appendChild(document.createElement("br")); 
		 
            }
 }
	function fittings1(){
	 var member ={};
	 var number1 = document.getElementById("nof1").value;
		 	 var container1 = document.getElementById("container1");
		 while (container1.hasChildNodes()) {
                container1.removeChild(container1.lastChild);
		 }
		 
	 
	 for (i=0;i<number1;i++){
		  
      // Append a node with a random text
       
      // Create an <input> element, set its type and name attributes
        /* var input = document.createElement("input");
         input.type = "text";
         input.name = "member" + i;
		 input.className = "form-control";*/
		  var label = document.createElement("label")
		  var input = document.createElement("select");
		  var newOption1 = document.createElement('option');
		  var newOption2 = document.createElement('option');
		  var newOption3 = document.createElement('option');
		  var newOption4 = document.createElement('option');
		  var newOption5 = document.createElement('option');
		  var newOption6 = document.createElement('option');
		  var newOption7 = document.createElement('option');
		  var newOption8 = document.createElement('option');
		  var newOption9 = document.createElement('option');
		  var newOption10 = document.createElement('option');
		  var newOption11= document.createElement('option');
		  var newOption12 = document.createElement('option');
		  var newOption13 = document.createElement('option');
		 
		 var optionText = document.createTextNode('type');
// set option text
          //newOption.appendChild(optionText);
		 newOption1 = new Option(' select','0');
		 newOption2 = new Option(' sudden contraction','1');
		 newOption3 = new Option(' sudden expansion','2');
		 newOption4 = new Option(' global value','10');
		 newOption5 = new Option(' angle value','5');
		 newOption6 = new Option(' gate value','0.2');
		 newOption7 = new Option(' short radius','0.9');
		 newOption8 = new Option(' medium radius','0.8');
		 newOption9 = new Option(' 45inch elbow','0.4');
		 newOption10 = new Option(' short tee','0.6');
		 newOption11 = new Option(' standard tee','1.8');
		 newOption12 = new Option(' square entrance','0.5');
		 newOption13 = new Option(' exit','12');
		 
		// newOption.setAttribute('value','Option Value');
		 
		 input.appendChild(newOption1);
		 input.appendChild(newOption2);
		 input.appendChild(newOption3);
		 input.appendChild(newOption4);
		 input.appendChild(newOption5);
		 input.appendChild(newOption6);
		 input.appendChild(newOption7);
		 input.appendChild(newOption8);
		 input.appendChild(newOption9);
		 input.appendChild(newOption10);
		 input.appendChild(newOption11);
		 input.appendChild(newOption12);
		 input.appendChild(newOption13);
		 label.appendChild(document.createTextNode("fitting" + (i+1)));
      
         input.name ="member1";
		 input.className = "form-control";
		 input.onchange = function(val=this.value){
			// console.log("working");
			// var val = document.getElementById('type1');
			 //console.log("working");
			 val=val.srcElement.options.selectedIndex;
	         var element1=document.getElementById('a11');
			 var element2=document.getElementById('a22');
			     if(val=='1')
		          { element1.style.display='block';
			       element2.style.display='block'; }
	             
             var element3=document.getElementById('a3');
			 var element4=document.getElementById('a4');
	             if(val=='2')
				 {element3.style.display='block';
				  element4.style.display='block'; }
			   
		      }
         container1.appendChild(label);
         container1.appendChild(input);
		 
         //container.appendChild(input);
         // Append a line break 
         container1.appendChild(document.createElement("br")); 
		 
	 }      
	 
        }
		
		function PipeType(shape)
			{
				
				var pipetype =  document.getElementById("pipetype");
				
					
				while (pipetype.hasChildNodes()) {
                pipetype.removeChild(pipetype.lastChild);
                    }
				
				// var div1 = document.createElement("div")
				 var div2 = document.createElement("div");
				 var div1 = document.createElement("div");
				 var div4 = document.createElement("div");
				 var div3 = document.createElement("div");
			     var div5 = document.createElement("div");
				 var div6 = document.createElement("div");
				 var div7 = document.createElement("div");
				 var div8 = document.createElement("div");
				if(shape==1||2||3)
					{    
						 div1.className = "col-lg-6"
				         div2.className="form-group";
						 div5.className ="col-lg-6"
				         div6.className="form-group";
						var label1= document.createElement("label");
						label1.appendChild(document.createTextNode("diameter of pipe" + (1)));
						var input1= document.createElement("input");
						input1.type="number";
						input1.className="form-control";
						input1.name="d1";
						div2.appendChild(label1);
						div2.appendChild(input1);
						div1.appendChild(div2);
						
						pipetype.appendChild(div1);
						var label2= document.createElement("label");
						label2.appendChild(document.createTextNode("diameter of pipe" + (1)));
						var input2= document.createElement("input");
						input2.type="number";
						input2.className="form-control";
						input2.name="d2";
						div6.appendChild(label2);
						div6.appendChild(input2);
						div5.appendChild(div6);
						
						pipetype.appendChild(div5);
						
					}
				 if(shape==4)
					{  
						
						
					    div3.className = "col-lg-6";
				        div4.className="form-group";
						div7.className = "col-lg-6";
				        div8.className="form-group";
					   var label2= document.createElement("label");
					   label2.appendChild(document.createTextNode("diameter of pipe" + (2)));
					   
					   var input2= document.createElement("input");
						
						input2.type="number";
						input2.className="form-control";
						input2.name="d3";
				
						div4.appendChild(label2);
						div4.appendChild(input2);
                        div3.appendChild(div4);
						
						pipetype.appendChild(div3);
						
						 var label3= document.createElement("label");
					   label3.appendChild(document.createTextNode("diameter of pipe" + (2)));
					   
					   var input3= document.createElement("input");
						
						input3.type="number";
						input3.className="form-control";
						input3.name="d4";
				
						div8.appendChild(label3);
						div8.appendChild(input3);
                        div7.appendChild(div8);
						
						pipetype.appendChild(div7);
					}
				
				  pipetype.appendChild(document.createElement("br"));
				
			}
		
		function PipeType1(shape)
			{
				
				var pipetype1 =  document.getElementById("pipetype1");
				
					
				while (pipetype1.hasChildNodes()) {
                pipetype1.removeChild(pipetype1.lastChild);
                    }
				
				// var div1 = document.createElement("div")
				 var div2 = document.createElement("div");
				 var div1 = document.createElement("div");
				 var div4 = document.createElement("div");
				 var div3 = document.createElement("div");
			     var div5 = document.createElement("div");
				 var div6 = document.createElement("div");
				 var div7 = document.createElement("div");
				 var div8 = document.createElement("div");
				if(shape==1||2||3)
					{    
						 
				         div2.className="form-group";
					
				         
						var label1= document.createElement("label");
						label1.appendChild(document.createTextNode("diameter of pipe" + (1)));
						var input1= document.createElement("input");
						input1.type="number";
						input1.className="form-control";
						input1.name="d1";
						div2.appendChild(label1);
						div2.appendChild(input1);
						div1.appendChild(div2);
						
						pipetype1.appendChild(div1);
						
						
					}
				 if(shape==4)
					{  
						
						
					
				        div4.className="form-group";
						
				        
					   var label2= document.createElement("label");
					   label2.appendChild(document.createTextNode("diameter of pipe" + (2)));
					   
					   var input2= document.createElement("input");
						
						input2.type="number";
						input2.className="form-control";
						input2.name="d2";
				
						div4.appendChild(label2);
						div4.appendChild(input2);
                        div3.appendChild(div4);
						
						pipetype1.appendChild(div3);
						

					}
				
				  pipetype1.appendChild(document.createElement("br"));
				
			}


 var property = new Array();
var unit = new Array();
var factor = new Array();








property[0] = "Energy";
unit[0] = new Array("Joule (J)", "BTU (mean)", "BTU (thermochemical)", "Calorie (SI) (cal)", "Calorie (mean)(cal)", "Calorie (thermo)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)", "Ton of TNT", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)");
factor[0] = new Array(1, 1055.87, 1054.35, 4.1868, 4.19002, 4.184, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 4190.02, 3600000, 4.2E9, 1, 3600, 1);


property[1] = "Length";
unit[1] = new Array("Meter (m)", "Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Kilometer (km)", "Ell", "Em", "Fathom", "Furlong", "Fermi (fm)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)");
factor[1] = new Array(1, 1E-10, 1.49598E11, .000254, .01, 1000, 1.143, 4.2323E-03, 1.8288, 201.168, 1E-15, .3048, .0254, 5556, 5556, 9.46055E+15, .000001, .0000254, .001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 4.217518E-03, 1E-12, .0003514598, 5.0292, .9144);



property[2] = "Power";
unit[2] = new Array("Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second", "Horsepower(550 ft lbf/s)", "Horsepower (electric)", "Horsepower (boiler)", "Horsepower (metric)", "Horsepower (UK)", "Kilocalorie (thermo)/min", "Kilocalorie (thermo)/sec");
factor[2] = new Array(1, 1000, 1000000, .001, .2930667, 1054.35, 17.5725, .2928751, 4.184, 6.973333E-02, .0000001, .0003766161, .02259697, 1.355818, 745.7, 746, 9809.5, 735.499, 745.7, 69.7333, 4184);

property[3] = "Pressure & Stress";
unit[3] = new Array("Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4'C)", "Decibar", "Kgr force/sq.centimeter", "Kgr force/sq.meter", "Kip/square inch", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)", "Torr (mmHg,0'C)");
factor[3] = new Array(1, 101325, 98066.5, 100000, 1333.22, 98.0638, 10000, 98066.5, 9.80665, 6894757, 100, 133.3224, 1, 1000, 1000000, 47.88026, 47.88026, 6894.757, 133.322);



property[4] = "Volume Flow";
unit[4] = new Array("Cubic meter/second", "Cubic foot/second", "Cubic foot/minute", "Cubic inches/minute", "Gallons (US,liq)/minute)");
factor[4] = new Array(1, .02831685, .0004719474, 2.731177E-7, 6.309020E-05);



function UpdateUnitMenu(propMenu, unitMenu) {
  // Updates the units displayed in the unitMenu according to the selection of property in the propMenu.
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  
  var sourceValue = sourceForm.unit_input.value;

  
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
 
  var propIndex;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

 
  propIndex = document.property_form.the_menu.selectedIndex;

 
  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[propIndex][sourceIndex];

  
  targetIndex = +targetForm.unit_menu.selectedIndex;
  targetFactor = factor[propIndex][targetIndex];

  

  result = sourceForm.unit_input.value;
  
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;

  
  result = result / targetFactor;
  
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  
  targetForm.unit_input.value = result;
}


window.onload = function(e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);
}


document.getElementsByClassName('numbersonly').addEventListener('keydown', function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
      (key == 65 && (e.ctrlKey || e.metaKey)) ||  
      (key == 67 && (e.ctrlKey || e.metaKey)) || 
      (key == 86 && (e.ctrlKey || e.metaKey)) || 
      (key >= 35 && key <= 40) || 
	  (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || 
      (key >= 96 && key <= 105) 
      (key == 190) 
    )) e.preventDefault();
});
	
