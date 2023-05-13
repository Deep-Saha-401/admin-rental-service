export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "username",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone No.",
    width: 100,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    width: 70,
    // renderCell: (params) => {
    //   return (
    //     <div className={`cellWithStatus ${params.row.status}`}>
    //       {params.row.status}
    //     </div>
    //   );
    // },
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },

  {
    field: "desc",
    headerName: "Furnishing",
    width: 200,
  },
  {
    field: "perdayrent",
    headerName: "Per Night Price",
    width: 100,
  },
  {
    field: "permonthrent",
    headerName: "Per Month Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Project Name",
    width: 100,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "state",
    headerName: "State",
    width: 100,
  },
  {
    field: "area",
    headerName: "Near By Area",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 250,
  },
  
];

