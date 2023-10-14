import React, { useEffect, useState } from "react";
import { api_path } from "../../utils/api_path";
import Keeb from "../../components/Keeb";

export default function AllCreations() {
  const [keebs, setKeebs] = useState(null);

  useEffect(() => {
    const fetchKeebs = async () => {
      const response = await fetch(api_path);
      const data = await response.json();
      setKeebs(data);
    };
    fetchKeebs();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <h1 className="text-2xl font-bold">All Customized Keebs</h1>

      <div className="w-full px-20">
        {keebs && keebs.length > 0 ? (
          keebs.map((item, index) => (
            <Keeb
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              keyboard={item.keyboard}
              keyGroup={item.keygroup}
              swatch={item.swatch}
              switchType={item.switchtype}
            />
          ))
        ) : (
          <h3>{"No keebs Yet 😞"}</h3>
        )}
      </div>
    </div>
  );
}
