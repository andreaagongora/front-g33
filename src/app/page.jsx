import Appname from "./components/Appname";
import Addcontact from "./components/Addcontact";
import Table from "./components/Table";


export default function Home() {
  return (
	<div className="m-5">
		<Appname />
		<Addcontact />	
		<Table />
	</div>
  )
}
