import { useState } from 'react';

export default init => {
    const [value, setValue] = useState(init);
    return [value, event => setValue(event.target.value)];
}