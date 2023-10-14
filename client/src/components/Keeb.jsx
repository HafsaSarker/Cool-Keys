function Keeb({ id, image, name, keyboard, keyGroup, swatch, switchType }) {
  return (
    <div className="w-full">
      <a
        href={`/all/${id}`}
        className="my-5 flex flex-col min-w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <div>
            <p className="mb-3 font-normal text-gray-700">
              <span className="font-semibold">Keeb:</span> {keyboard}
            </p>
            <p className="mb-3 font-normal text-gray-700">
              <span className="font-semibold">Switches:</span> {switchType}
            </p>
            <p className="mb-3 font-normal text-gray-700">
              <span className="font-semibold">swatch: </span>
              <span
                className={`bg-${swatch} text-white py-0.5 px-1 rounded-md`}
              >
                {swatch}
              </span>
            </p>
            <p className="mb-3 font-normal text-gray-700">
              <span className="font-semibold">On key group: </span> {keyGroup}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Keeb;
