import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_path } from "../../utils/api_path";
import { Link } from "react-router-dom";
import { deleteKeebs } from "../../utils/keebsCRUD";

function KeebDetail() {
  const [keeb, setKeeb] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchKeeb = async () => {
      const response = await fetch(`${api_path}/${id}`);
      const data = await response.json();
      setKeeb(data);
    };
    fetchKeeb();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      {keeb && (
        <div className="flex flex-col items-center justify-center text-center">
          <img className="object-cover min-w-96 h-96 " src={keeb.image} />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {keeb.name}
            </h5>
            <div>
              <p className="mb-3 font-normal text-gray-700">
                <span className="font-semibold">Keeb:</span> {keeb.keyboard}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <span className="font-semibold">Switches:</span>{" "}
                {keeb.switchtype}
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <span className="font-semibold">swatch: </span>
                <span
                  className={`bg-${keeb.swatch} text-white py-0.5 px-1 rounded-md`}
                >
                  {keeb.swatch}
                </span>
              </p>
              <p className="mb-3 font-normal text-gray-700">
                <span className="font-semibold">On key group: </span>{" "}
                {keeb.keygroup}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-2 justify-center items-center w-full">
        <Link to={`/edit/${id}`}>
          <button className="inline-flex items-center justify-center w-24 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300">
            Edit
          </button>
        </Link>

        <button
          onClick={() => deleteKeebs(id)}
          className="inline-flex items-center justify-center w-24 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default KeebDetail;
