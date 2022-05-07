import * as React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const icon = (
  <Paper >
    hithere
    jhasbvhbasfhbashfbasbfahbsfabsfabsfhbasfjhahsfbashbfahbsfahsbfhdssdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdvsdv
  asasfbasdbabscibasciuasciubascbsacbascbliabcsiaubcsiuasclibascbascibasciuasuc
  iasjbjkabsc
  kjasncjanscjk
  kjabscjabscajbcsakjscbjas
    </Paper>
);

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
    hello
    </div>
  );
}
