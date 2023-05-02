import React, { useState } from 'react';
import Snowflake from './Snowflake';
import uuid from 'react-uuid';

const INITIAL_SNOW_COUNT = 50;

const Snow = () => {
  const [snowList, setSnowList] = useState<string[]>(Array.from({ length: INITIAL_SNOW_COUNT }, (_, i) => uuid()));

  const makeSnowflake = () => {
    setSnowList((prev) => [...prev, uuid()]);
  };
  const removeSnowflake = (key: string) => {
    setSnowList((prev) => prev.filter((snow) => snow !== key));
    // makeSnowflake();
    // console.log(snowList.length);
  };
  return (
    <div>
      {snowList.map((key, i) => (
        <Snowflake key={key} makeSnowflake={makeSnowflake} removeSnowflake={() => removeSnowflake(key)} n={i} />
      ))}
    </div>
  );
};

export default Snow;
