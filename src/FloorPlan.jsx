import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom details={{bedNum: 2}}/>
      <Bedroom details={{bedNum: 1}}/>
      <Bedroom details={{bedNum: 3}}/>
      <Bath details={{size: 'Full Bath'}}/>
      <Bath details={{size: 'Half Bath'}}/>
    </div>
   );
}
 
export default FloorPlan;