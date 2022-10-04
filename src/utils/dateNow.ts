export default function DateNow() : string[]  {
  const date = new Date();

  const getDate = date.getDate().toString().padStart(2, "0");
  const getMonth = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  
  return [ getDate, getMonth, year  ];
}