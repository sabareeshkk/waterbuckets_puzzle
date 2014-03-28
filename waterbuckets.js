//water bucket puzzle
var queue = [];
var seen = {};
var value;
function getstate(){
	if (!queue.length){
		return;
		}
	else{
		state=queue[0];
		queue = queue.slice(1,queue.length+1);
		return state;
}
}
function addstate(parentstate,newstate){
	if (String(newstate) in seen)
	return;
	seen[String(newstate)] = String(parentstate);
	queue.push(newstate);
}
function getsolution(){
	var solution = [];
	var state = (queue.slice(-1));
	while (state){
		solution.push(String(state));
		state = getparent(state);
}
	solution.reverse();
	return solution;
}
function getparent(childstate){
	try{
		return seen[String(childstate)];
	}
	catch(err){
		}
	}
function test(oldstate,newstate){
	var newa = newstate[0];
	var newb = newstate[1];
	won = (newa == value || newb == value);
	addstate(oldstate,newstate);
	return won;
}
function playgame(amax,bmax,goal){
	value = goal;
	addstate("",[0,0]);
	while(true){
		oldstate = getstate();
		var ahas=oldstate[0];
		var bhas=oldstate[1];
		if (test(oldstate,[amax,bhas]))
			break;
		if (test(oldstate,[0,bhas]))
			break;
		if (test(oldstate,[ahas,bmax]))
			break;
		if (test(oldstate,[ahas, 0]))
			break;
		var howmuch = Math.min(ahas,bmax-bhas);
		if(test(oldstate,Array(ahas-howmuch,bhas+howmuch)))
			break;
		var howmuch = Math.min(bhas,amax-ahas)
		if (test(oldstate,Array(ahas+howmuch,bhas-howmuch)))
			break;
		}
	console.log("uotput... is fun...... it makes miracles.............");
	console.log(getsolution());
	}
	console.log(playgame(7,11,6));
	
