
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
      if (this.props.login) return <h1>Hello, {this.props.namea}</h1>;
      else return <Welcome></Welcome>;
  }
}

const element = <h1> Hello, world!{meth(true)} {a()} {1+1}</h1>
const element1      =<Welcome login="" namea="Menash"></Welcome>
const element2 = <Toggle></Toggle>
ReactDOM.render(
    element2,
	document.getElementById('root')
);
