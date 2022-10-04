export default function TimeNow() : string[] {
  const date = new Date();

  const getHours = date.getHours().toString();
  const getMinutes = date.getMinutes().toString();
  const getSeconds = date.getSeconds().toString();
  const getMilisseconds = date.getMilliseconds().toString();
    
  return [ getHours, getMinutes, getSeconds, getMilisseconds ];
}