import { useState } from 'react';
import { HeartSwitch } from '@anatoliygatt/heart-switch';

function Personal() {
  const [checked, setChecked] = useState(false);
  return (
    <HeartSwitch
      size="lg"
      inactiveTrackFillColor="#cffafe"
      inactiveTrackStrokeColor="#b936ee"
      activeTrackFillColor="#ff4033"
      activeTrackStrokeColor="#ff4033"
      inactiveThumbColor="#ecfeff"
      activeThumbColor="#ff4033"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        //alert('thanks')
      }}
    />
  );
}
export default Personal;