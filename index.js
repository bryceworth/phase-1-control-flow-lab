function scuberGreetingForFeet(ride){
 let result 
 if (ride <= 400 ) { result = `This one is on me!`}
 if (ride >2000 ) {result = 'I will gladly take your thirty bucks.'}
 if (ride >2500 ) { result = 'No can do.'}
 return result
}



function ternaryCheckCity(city){
  console.log (city)
return (city === `NYC` ? `Ok, sounds good.` : `No go.`)
}

function switchOnCharmFromTip(tip){
  let result 
  if (tip === `generous`) {result = 'Thank you so much.'}
  if (tip === `not as generous`) {result = `Thank you.`}
  if (tip === `thanks for everything`) {result = `Bye.`}
  return result
}