
var a = ()=>{
	return 'a';
}
var meth = function(a)
{
	let ans;
	if(a)
	{
		 ans ='test';
	}
	else
	{
		 ans ='test else'
	}
	return <div>{ans}</div>;
}


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.namea}</h1>;
  }
}

const element = <h1> Hello, world!{meth(true)} {a()} {1+1}</h1>
const element1      =<Welcome namea="Menash"></Welcome>
ReactDOM.render(
	element1,
	document.getElementById('root')
);
