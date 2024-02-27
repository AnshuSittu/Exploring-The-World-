# Exploring-The-World-
Namste React Episode 5

**Monolith architecture and Micro-services architecture


Monolith architecture:
> So in the monolith architecture everything is written in same services 
  like UI notification dataBase connectivity etc 
> for every change you need to compile everything for small change   



Micro services architecture:

>Micro services architecture have different service for different services 
>these all are micro services and combine together and form Big App
<b>this is know as separation of concern & single responsibility principal </b>
> Each and every services have there own Job 
>all the services talk to each other 
>ALl the services run on there own port
> for example
  :1234 - UI port
  :1000 - DB port
  :3000 - SMS services
  
> and at the end of the day all these port Mapped to the domain name 


** How React connect with all other services
** How to make API call in react
>there are two approaches by which API is called  

I> So first As soon as page loads we can make a API call and wait for data to come 
  and then we render the UI,
>suppose if the page take 500ms to make API call fetch data
 the we have to wait for 500ms and after 500ms it will render the UI
 
  
 I> PAGE LOADS >>>    API      >>>> RENDER 
                  (after 500ms)
 
II> The second approaches is as soon as page loads we will render our UI
    after we have quickly render now we will make an API call as soon we get the data
	we will RENDER with new data 
   	
 
 II> PAGE LOADS >>>    RENDER   >>>>  API    >>>       RENDER
                                          (RENDER with new data again) 

>IN React we uses SECOND approaches always 
>This is better approaches
>the first approaches is not good user experience as UI is stuck for 500 mili second 
 and then again UI is full of data.
 
>React has one of the best RENDER Mechanism that's why it is popular


**useEffect Hooks
>it a normal react hook just like useState
>it is imported as a named import, import { useEffect,} from "react";
>it is also normal JS function which react give to us
>it has its own specific use case where we use these functions  
										  
<b>Purpose of useEffect</b>										  
> This use state is come from react library and imported from named import
> it is called like function 

<b>it take two argument</b>
 <b> I> First is call back function or Arrow Function </b>
 <b> II> second argument is  dependency array   </b>
      
	  useEffect(()=>{}, []);
 
** when this useEffect Callback function is called? 
>This Callback function is called after component RENDERS
>i.e when the body function will render it and as soon as this render cycle is over
   this  useEffect Callback function is called.
   
> useEffect() syntax	
 useEffect(()=>{ console.log("useEffect Called")}, []);	

>if you have to do something after rendering the component then you have to write useEffect
 in the useState.
> whatever you pass in this callback function this will called only after the component has been render
>useEffect is helpful when we use second approaches of rendering page  load
>once the rendering is done the we fetch the date in useEffect

<b>How we will fetch the data </b>
>so in react is no different
>we will use a method fetch 
>this fetch will fetch data from API


**fetch is used to fetch the data from AIP 
>it is given by the browser which is used by JS engine 
>fetch will return promise first 
>Now you have to use async Await
>after that you need to convert the data into JSON 

** Error CROS policy while fetch the data from swgy
>browser blocker is not allowing to fetch data from one origin to our local host
>if there is mismatch then browser block that is called CROS policy

** How to get rid of this CROS Policy 
>>need to install cross chrom extension 
>> Always take the latest API(https://www.swiggy.com/) if the API is not working.
>>Data is visible in the console 

**How to populate the New data which is coming from the Swiggy API in our local 
>
<b>Optional chaining	</b>									  
>Optional chaining is a feature in JS that allows you to access properties of an object
 or element of an array without having to check whether the object or array is null or undefined
>it is represented by the ?. 

**shimmer ui
> it is fake card which is being used today intend of loader


**What is conditional rendering.
> Rendering on the basis of condition is know as conditional rendering

if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }		

**Why Do we need useState
>if you want to change something dynamically the we have to useState variable  
>whenever this state variable will be change using {setBtnReact}
 React will re-render this header component
>it will refresh this header component and all updated values will be there 

How can a const value can be change/updated (btnNameReact) here 1:26:00
>whatever you update this value {btnNameReact} react is updating name react and updating
 this btnNameReact and calling this header once again it is rendering
 but this time when you invoke this function this btnNameReact is new variable
 then it was before this is beauty of react 
 
> on the initial time the useState variable was login but as soon as we do 
  setBtnNameReact it will call the header function once again it will create new instance 
  this btnNameReact was different then that older btnNameReact
  which was being printed and now when this new btnNameReact is created
  it is not created with the old value but now it is created with the 
  updated value  from setBtnNameReact.
  
>  as soon as you called setBtnNameReact it will update the btnNameReact
 value reference and render this header component once again it will find the difference
 between the older and the newer version and it will see that in that div  only
 this button is getting updated no change in the ul li but only this btn is change

 

Ex: 

const [btnNameReact, setBtnNameReact]  = useState("Login");
										  
<button className="login" onClick={() => {setBtnNameReact("Logout"); }}>{btnNameReact} </button>										  
										  
** How to make input box working
>First of all we have to tie InputBox or bind the input box 
>i.e we have to give value={local variable}	{searchText} with a empty string 
>Now as soon as Input changes (onChange =) need to update searchText so that it updates  

>>>whatever you change a local state variable React Re-re-render the component. 									  
										  
>>>whenever state variable updates react triggers a reconciliation cycle
   that is it is re-render the component

>> React is re-rendering the whole body component but it is only updating InputBox value 
   inside the DOM	

**Why React is fast
> The New reconciliation algorithm find out the difference between two virtual DOM and update the DOM only when 
  requires the portion where update is requires.   
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  
										  







